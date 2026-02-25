import Link from "next/link";

export function Footer() {
  return (
    <footer className="border-t border-[var(--color-border)] py-8">
      <div className="max-w-3xl mx-auto px-6 flex items-center justify-between text-sm text-[var(--color-text-muted)]">
        <p>&copy; {new Date().getFullYear()} Akarshan Sajja</p>
        <div className="flex gap-4">
          <Link
            href="https://github.com/aksajja"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-[var(--color-text-secondary)] transition-colors"
          >
            GitHub
          </Link>
          <Link
            href="https://www.linkedin.com/in/akarshan-sajja-339a0a76/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-[var(--color-text-secondary)] transition-colors"
          >
            LinkedIn
          </Link>
          <Link
            href="mailto:ak.sajja@gmail.com"
            className="hover:text-[var(--color-text-secondary)] transition-colors"
          >
            Email
          </Link>
        </div>
      </div>
    </footer>
  );
}
