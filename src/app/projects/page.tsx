import type { Metadata } from "next";
import Link from "next/link";
import projects from "@/data/projects";

export const metadata: Metadata = {
  title: "Projects",
  description: "Selected projects by Akarshan Sajja.",
};

export default function ProjectsPage() {
  const featured = projects.find((p) => p.featured);
  const others = projects.filter((p) => !p.featured);

  return (
    <div className="space-y-16">
      <header>
        <h1 className="text-3xl font-bold tracking-tight">Projects</h1>
        <p className="mt-2 text-[var(--color-text-secondary)]">
          Selected work — research, products, and side projects.
        </p>
      </header>

      {/* Featured project */}
      {featured && (
        <section className="rounded-xl border border-[var(--color-border)] p-6 sm:p-8 bg-[var(--color-surface)] space-y-4">
          <div className="flex items-center gap-2">
            <span className="text-xs font-medium px-2 py-0.5 rounded-full bg-[var(--color-accent)]/10 text-[var(--color-accent)] border border-[var(--color-accent)]/20">
              Featured
            </span>
          </div>
          <h2 className="text-2xl font-semibold">{featured.title}</h2>
          <p className="text-[var(--color-text-secondary)] leading-relaxed">
            {featured.description}
          </p>
          <div className="flex flex-wrap gap-1.5 pt-2">
            {featured.tech.map((t) => (
              <span
                key={t}
                className="text-xs px-2 py-1 rounded bg-[var(--color-background)] border border-[var(--color-border)] text-[var(--color-text-secondary)]"
              >
                {t}
              </span>
            ))}
          </div>
          {featured.link && (
            <div className="pt-2">
              <Link
                href={featured.link}
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm text-[var(--color-accent)] hover:text-[var(--color-accent-hover)] transition-colors"
              >
                View on GitHub &rarr;
              </Link>
            </div>
          )}
        </section>
      )}

      {/* Other projects */}
      <section className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {others.map((project) => (
          <div
            key={project.title}
            className="rounded-lg border border-[var(--color-border)] p-5 hover:border-[var(--color-accent)]/30 hover:bg-[var(--color-surface)] transition-all space-y-3"
          >
            <h3 className="font-medium leading-snug">{project.title}</h3>
            <p className="text-sm text-[var(--color-text-secondary)] leading-relaxed">
              {project.description}
            </p>
            <div className="flex flex-wrap gap-1.5">
              {project.tech.map((t) => (
                <span
                  key={t}
                  className="text-xs px-1.5 py-0.5 rounded bg-[var(--color-surface)] border border-[var(--color-border)] text-[var(--color-text-muted)]"
                >
                  {t}
                </span>
              ))}
            </div>
            {project.link && (
              <Link
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="block text-sm text-[var(--color-accent)] hover:text-[var(--color-accent-hover)] transition-colors"
              >
                View &rarr;
              </Link>
            )}
          </div>
        ))}
      </section>
    </div>
  );
}
