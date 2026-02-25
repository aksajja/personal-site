#!/usr/bin/env python3
"""
Extract Claude Code chat history from ~/.claude/projects/ and ~/.claude/plans/.
Strips thinking blocks, tool_use, tool_result, and IDE metadata.
Outputs structured markdown to personal-site/docs/extracted/.

Usage:
    python3 scripts/extract_chat_history.py
"""

import json
import os
import re
import shutil
from datetime import datetime
from pathlib import Path

SESSIONS_DIR = Path.home() / ".claude" / "projects" / "-Users-sage-Work-Doctor-Dashboard"
PLANS_DIR = Path.home() / ".claude" / "plans"
OUTPUT_DIR = Path(__file__).resolve().parent.parent / "docs" / "extracted"
SESSIONS_OUTPUT = OUTPUT_DIR / "sessions"
PLANS_OUTPUT = OUTPUT_DIR / "plans"

XML_TAG_PATTERN = re.compile(r"<[^>]+>.*?</[^>]+>", re.DOTALL)
IDE_TAGS = [
    "ide_opened_file", "ide_selection", "local-command-stdout",
    "local-command-stderr", "local-command-caveat", "command-name",
    "command-message", "command-args",
]

BLOG_WORTHY_KEYWORDS = [
    "schema", "architecture", "design", "plan", "why", "trade-off",
    "tradeoff", "decision", "approach", "strategy", "migration",
    "security", "rls", "performance", "refactor", "oauth", "auth",
    "speech", "neural", "local-first", "medication", "treatment",
    "retrospective", "blog",
]

FORCE_INCLUDE_SESSIONS = [
    "c9b07fca",  # appointment rescheduling feature design
    "c58d8ab6",  # Google OAuth
    "909d2482",  # Supabase schema issues
    "e5c41f85",  # auth trigger / patient creation
    "ab822d84",  # patient ownership / trigger cleanup
    "4f304fcf",  # mobile app with speech recognition
    "abda7f40",  # AI assistant speech vs text
    "6a65a74b",  # debugging patient query issues
    "744a0864",  # database schema for medications
    "e0195e1b",  # retrospective / blog planning
    "482b8830",  # iOS speech recognition debugging
    "db850d5e",  # H1B founder research
]


def strip_ide_xml(text: str) -> str:
    """Remove IDE-injected XML tags from text."""
    for tag in IDE_TAGS:
        text = re.sub(rf"<{tag}>.*?</{tag}>", "", text, flags=re.DOTALL)
    text = re.sub(r"<{tag}[^>]*/?>", "", text)
    return text.strip()


def extract_text_from_content(content) -> str:
    """Extract only text blocks from message content, skip thinking/tool_use/tool_result."""
    if isinstance(content, str):
        return strip_ide_xml(content)

    if isinstance(content, list):
        texts = []
        for block in content:
            if isinstance(block, dict) and block.get("type") == "text":
                cleaned = strip_ide_xml(block.get("text", ""))
                if cleaned:
                    texts.append(cleaned)
        return "\n".join(texts)

    return ""


def parse_session(filepath: Path) -> dict:
    """Parse a single JSONL session file into structured data."""
    messages = []
    session_id = filepath.stem
    timestamp = None
    git_branch = None
    cwd = None

    with open(filepath) as f:
        for line in f:
            try:
                obj = json.loads(line)
            except json.JSONDecodeError:
                continue

            msg_type = obj.get("type", "")

            if msg_type in ("user", "assistant"):
                if not timestamp and obj.get("timestamp"):
                    timestamp = obj["timestamp"]
                if not git_branch and obj.get("gitBranch"):
                    git_branch = obj["gitBranch"]
                if not cwd and obj.get("cwd"):
                    cwd = obj["cwd"]

                role = msg_type
                content = obj.get("message", {}).get("content", "")
                text = extract_text_from_content(content)

                if obj.get("isMeta"):
                    continue
                if obj.get("isApiErrorMessage"):
                    continue

                if text:
                    messages.append({"role": role, "text": text})

    mtime = datetime.fromtimestamp(filepath.stat().st_mtime)
    date_str = mtime.strftime("%Y-%m-%d")

    first_user = ""
    for m in messages:
        if m["role"] == "user":
            first_user = m["text"][:200]
            break

    last_assistant = ""
    for m in reversed(messages):
        if m["role"] == "assistant":
            last_assistant = m["text"][:200]
            break

    total_text = sum(len(m["text"]) for m in messages)
    user_msgs = sum(1 for m in messages if m["role"] == "user")
    assistant_msgs = sum(1 for m in messages if m["role"] == "assistant")

    return {
        "session_id": session_id,
        "filepath": filepath,
        "date": date_str,
        "mtime": mtime,
        "git_branch": git_branch,
        "cwd": cwd,
        "messages": messages,
        "first_user": first_user,
        "last_assistant": last_assistant,
        "total_text_chars": total_text,
        "user_msg_count": user_msgs,
        "assistant_msg_count": assistant_msgs,
        "raw_size_kb": filepath.stat().st_size / 1024,
    }


def compute_blog_score(session: dict) -> float:
    """Score a session for blog-worthiness."""
    score = 0.0

    if session["session_id"][:8] in FORCE_INCLUDE_SESSIONS:
        score += 100

    all_text = " ".join(m["text"].lower() for m in session["messages"])
    for kw in BLOG_WORTHY_KEYWORDS:
        if kw in all_text:
            score += 2

    total_turns = session["user_msg_count"] + session["assistant_msg_count"]
    if total_turns > 5:
        text_density = session["total_text_chars"] / max(total_turns, 1)
        score += min(text_density / 100, 10)

    if session["total_text_chars"] > 5000:
        score += 5
    if session["total_text_chars"] > 15000:
        score += 5

    return score


def generate_slug(session: dict) -> str:
    """Generate a filename slug from the first user message."""
    text = session["first_user"][:60].lower()
    text = re.sub(r"[^a-z0-9\s]", "", text)
    text = re.sub(r"\s+", "-", text.strip())
    return text[:50] or session["session_id"][:8]


def write_session_transcript(session: dict, outpath: Path):
    """Write a full session transcript as markdown."""
    with open(outpath, "w") as f:
        f.write(f"# Session: {session['date']} — {session['first_user'][:80]}\n\n")
        f.write(f"- **Session ID:** `{session['session_id'][:8]}`\n")
        f.write(f"- **Date:** {session['date']}\n")
        f.write(f"- **Branch:** {session.get('git_branch', 'unknown')}\n")
        f.write(f"- **User messages:** {session['user_msg_count']}\n")
        f.write(f"- **Assistant messages:** {session['assistant_msg_count']}\n")
        f.write(f"- **Text size:** {session['total_text_chars']:,} chars\n")
        f.write(f"- **Raw session size:** {session['raw_size_kb']:.0f} KB\n\n")
        f.write("---\n\n")

        for msg in session["messages"]:
            role_label = "**User:**" if msg["role"] == "user" else "**Assistant:**"
            f.write(f"{role_label}\n\n{msg['text']}\n\n---\n\n")


def write_session_index(sessions: list, selected_ids: set, outpath: Path):
    """Write the master session index."""
    with open(outpath, "w") as f:
        f.write("# Claude Code Session Index — Doctor Dashboard\n\n")
        f.write(f"Generated: {datetime.now().strftime('%Y-%m-%d %H:%M')}\n\n")
        f.write(f"- **Total sessions:** {len(sessions)}\n")
        f.write(f"- **Full transcripts extracted:** {len(selected_ids)}\n")
        total_chars = sum(s["total_text_chars"] for s in sessions)
        f.write(f"- **Total conversation text:** {total_chars:,} chars ({total_chars/1024:.0f} KB)\n")
        f.write(f"- **Date range:** {sessions[0]['date']} to {sessions[-1]['date']}\n\n")
        f.write("---\n\n")

        for s in sessions:
            sid_short = s["session_id"][:8]
            slug = generate_slug(s)
            has_transcript = sid_short in {sid[:8] for sid in selected_ids}
            date = s["date"]
            if has_transcript:
                link = f"| [FULL TRANSCRIPT](sessions/{date}-{slug}.md)"
            else:
                link = ""
            f.write(f"### {date} | `{sid_short}` {link}\n\n")
            f.write(f"- **Messages:** {s['user_msg_count']} user / {s['assistant_msg_count']} assistant\n")
            f.write(f"- **Text:** {s['total_text_chars']:,} chars | **Raw:** {s['raw_size_kb']:.0f} KB\n")
            if s.get("git_branch"):
                f.write(f"- **Branch:** {s['git_branch']}\n")
            f.write(f"- **First message:** {s['first_user'][:150]}\n")
            if s["last_assistant"]:
                f.write(f"- **Last response:** {s['last_assistant'][:150]}\n")
            f.write("\n")


def copy_plans(plans_dir: Path, output_dir: Path):
    """Copy plan files and generate an index."""
    output_dir.mkdir(parents=True, exist_ok=True)
    plan_files = sorted(plans_dir.glob("*.md"))

    index_lines = [
        "# Claude Code Plans Index — Doctor Dashboard\n\n",
        f"Generated: {datetime.now().strftime('%Y-%m-%d %H:%M')}\n\n",
        f"**Total plans:** {len(plan_files)}\n\n---\n\n",
    ]

    for pf in plan_files:
        first_line = ""
        with open(pf) as f:
            for line in f:
                line = line.strip()
                if line.startswith("# "):
                    first_line = line[2:]
                    break

        shutil.copy2(pf, output_dir / pf.name)
        index_lines.append(f"- [{first_line or pf.stem}]({pf.name})\n")

    with open(output_dir / "PLANS_INDEX.md", "w") as f:
        f.writelines(index_lines)

    return len(plan_files)


def main():
    print(f"Sessions dir: {SESSIONS_DIR}")
    print(f"Plans dir:    {PLANS_DIR}")
    print(f"Output dir:   {OUTPUT_DIR}")
    print()

    OUTPUT_DIR.mkdir(parents=True, exist_ok=True)
    SESSIONS_OUTPUT.mkdir(parents=True, exist_ok=True)

    session_files = sorted(
        [f for f in SESSIONS_DIR.glob("*.jsonl") if not f.name.startswith("agent-")],
        key=lambda f: f.stat().st_mtime,
    )
    print(f"Found {len(session_files)} session files")

    sessions = []
    for i, sf in enumerate(session_files):
        print(f"  Parsing [{i+1}/{len(session_files)}] {sf.name[:12]}...", end="")
        session = parse_session(sf)
        if session["user_msg_count"] + session["assistant_msg_count"] < 3:
            print(" (skipped, <3 messages)")
            continue
        sessions.append(session)
        print(f" {session['user_msg_count']}u/{session['assistant_msg_count']}a, {session['total_text_chars']:,} chars")

    sessions.sort(key=lambda s: s["mtime"])
    print(f"\n{len(sessions)} sessions with 3+ messages")

    for s in sessions:
        s["blog_score"] = compute_blog_score(s)

    scored = sorted(sessions, key=lambda s: s["blog_score"], reverse=True)
    selected = scored[:15]
    selected_ids = {s["session_id"] for s in selected}

    print(f"\nTop {len(selected)} sessions selected for full transcript:")
    for s in selected:
        print(f"  {s['date']} | {s['session_id'][:8]} | score={s['blog_score']:.1f} | {s['first_user'][:60]}")

    for s in selected:
        slug = generate_slug(s)
        outpath = SESSIONS_OUTPUT / f"{s['date']}-{slug}.md"
        write_session_transcript(s, outpath)
    print(f"\nWrote {len(selected)} full transcripts to {SESSIONS_OUTPUT}/")

    index_path = OUTPUT_DIR / "SESSION_INDEX.md"
    write_session_index(sessions, selected_ids, index_path)
    print(f"Wrote session index to {index_path}")

    if PLANS_DIR.exists():
        plan_count = copy_plans(PLANS_DIR, PLANS_OUTPUT)
        print(f"Copied {plan_count} plans to {PLANS_OUTPUT}/")
    else:
        print(f"Plans directory not found: {PLANS_DIR}")

    total_output = sum(f.stat().st_size for f in OUTPUT_DIR.rglob("*") if f.is_file())
    print(f"\nTotal output: {total_output / 1024:.0f} KB")
    print("Done.")


if __name__ == "__main__":
    main()
