import Link from "next/link";
import Image from "next/image";
import { BASE_PATH } from "@/lib/constants";
import positions from "@/data/resume/positions";
import degrees from "@/data/resume/degrees";
import skills from "@/data/resume/skills";
import publications from "@/data/resume/publications";

export default function Home() {
  return (
    <div className="space-y-20">
      {/* Hero */}
      <section className="flex flex-col-reverse sm:flex-row items-start gap-8">
        <div className="flex-1 space-y-4">
          <h1 className="text-4xl font-bold tracking-tight">
            Akarshan Sajja
          </h1>
          <p className="text-lg text-[var(--color-text-secondary)]">
            Software Engineer &middot; AI Consulting &middot; Ex-Amazon
          </p>
          <p className="text-[var(--color-text-secondary)] leading-relaxed">
            9+ years building across full-stack, ML/MLOps, and applied science.
            I&apos;ve served 5% of Amazon.com traffic, optimized $250M in annual
            ML training infrastructure, and shipped products from zero at a
            startup that grew to a $10M valuation. Currently doing AI consulting
            and building{" "}
            <Link
              href="/projects"
              className="text-[var(--color-accent)] hover:text-[var(--color-accent-hover)] transition-colors"
            >
              Doctor Dashboard
            </Link>
            .
          </p>
          <div className="flex gap-4 pt-2 text-sm">
            <Link
              href="mailto:ak.sajja@gmail.com"
              className="text-[var(--color-accent)] hover:text-[var(--color-accent-hover)] transition-colors"
            >
              ak.sajja@gmail.com
            </Link>
            <Link
              href="https://github.com/aksajja"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[var(--color-text-muted)] hover:text-[var(--color-text-secondary)] transition-colors"
            >
              GitHub
            </Link>
            <Link
              href="https://www.linkedin.com/in/akarshan-sajja-339a0a76/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[var(--color-text-muted)] hover:text-[var(--color-text-secondary)] transition-colors"
            >
              LinkedIn
            </Link>
          </div>
        </div>
        <div className="shrink-0">
          <Image
            src={`${BASE_PATH}/images/me.jpg`}
            alt="Akarshan Sajja"
            width={160}
            height={160}
            className="rounded-xl object-cover w-32 h-32 sm:w-40 sm:h-40"
            priority
          />
        </div>
      </section>

      {/* Experience */}
      <section>
        <h2 className="text-xl font-semibold mb-8">Experience</h2>
        <div className="space-y-10">
          {positions.map((pos) => (
            <div key={pos.company + pos.daterange} className="group">
              <div className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between gap-1 mb-3">
                <div>
                  <h3 className="font-medium">
                    {pos.position}
                    <span className="text-[var(--color-text-muted)]">
                      {" "}
                      &mdash;{" "}
                    </span>
                    {pos.link ? (
                      <Link
                        href={pos.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-[var(--color-accent)] hover:text-[var(--color-accent-hover)] transition-colors"
                      >
                        {pos.company}
                      </Link>
                    ) : (
                      <span>{pos.company}</span>
                    )}
                  </h3>
                </div>
                <span className="text-sm text-[var(--color-text-muted)] shrink-0">
                  {pos.daterange}
                </span>
              </div>
              <ul className="space-y-2 text-sm text-[var(--color-text-secondary)] leading-relaxed">
                {pos.points.map((point, i) => (
                  <li key={i} className="pl-4 border-l border-[var(--color-border)]">
                    {point}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      {/* Skills */}
      <section>
        <h2 className="text-xl font-semibold mb-6">Skills</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {skills.map((group) => (
            <div key={group.category}>
              <h3 className="text-sm font-medium text-[var(--color-text-muted)] mb-2">
                {group.category}
              </h3>
              <div className="flex flex-wrap gap-1.5">
                {group.items.map((item) => (
                  <span
                    key={item}
                    className="text-xs px-2 py-1 rounded bg-[var(--color-surface)] border border-[var(--color-border)] text-[var(--color-text-secondary)]"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Education */}
      <section>
        <h2 className="text-xl font-semibold mb-6">Education</h2>
        <div className="space-y-4">
          {degrees.map((deg) => (
            <div
              key={deg.school}
              className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between gap-1"
            >
              <div>
                <h3 className="font-medium">
                  <Link
                    href={deg.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-[var(--color-accent)] transition-colors"
                  >
                    {deg.school}
                  </Link>
                </h3>
                <p className="text-sm text-[var(--color-text-secondary)]">
                  {deg.degree}
                </p>
              </div>
              <span className="text-sm text-[var(--color-text-muted)] shrink-0">
                {deg.year}
              </span>
            </div>
          ))}
        </div>
      </section>

      {/* Publications */}
      <section>
        <h2 className="text-xl font-semibold mb-6">Publications</h2>
        <div className="space-y-4">
          {publications.map((pub) => (
            <div key={pub.title}>
              <h3 className="font-medium leading-snug">
                {pub.link ? (
                  <Link
                    href={pub.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-[var(--color-accent)] transition-colors"
                  >
                    {pub.title}
                  </Link>
                ) : (
                  pub.title
                )}
              </h3>
              <p className="text-sm text-[var(--color-text-muted)] mt-1">
                {pub.venue}, {pub.year}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Interests */}
      <section>
        <h2 className="text-xl font-semibold mb-4">Beyond code</h2>
        <p className="text-[var(--color-text-secondary)] leading-relaxed">
          When I&apos;m not building software, you&apos;ll find me running,
          playing basketball or tennis, reading{" "}
          <Link
            href="https://www.goodreads.com/user/show/143537145-akarshan"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[var(--color-accent)] hover:text-[var(--color-accent-hover)] transition-colors"
          >
            books
          </Link>
          , or exploring new cities. Recent travels took me through Istanbul
          and New York.
        </p>
        <div className="mt-6 grid grid-cols-3 gap-2">
          <Image
            src={`${BASE_PATH}/images/personal/hagia-sophia-dome.jpg`}
            alt="Hagia Sophia"
            width={300}
            height={200}
            className="rounded-lg object-cover w-full h-28"
          />
          <Image
            src={`${BASE_PATH}/images/personal/nyc-skyline-night.jpg`}
            alt="NYC skyline"
            width={300}
            height={200}
            className="rounded-lg object-cover w-full h-28"
          />
          <Image
            src={`${BASE_PATH}/images/personal/sultanahmet-dusk.jpg`}
            alt="Sultanahmet at dusk"
            width={300}
            height={200}
            className="rounded-lg object-cover w-full h-28"
          />
        </div>
      </section>
    </div>
  );
}
