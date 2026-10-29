import { site as c } from "@/content/site";
import type { Project } from "@/content/types";
import { Header } from "@/components/Header";
import { HeroGraphic } from "@/components/HeroGraphic";
import { Section } from "@/components/Section";
import { Figure } from "@/components/Figure";
import { available } from "@/lib/photo";

function ExternalLink({ href, children }: { href: string; children: React.ReactNode }) {
  const external = href.startsWith("http");
  return (
    <a
      href={href}
      {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
      className="inline-flex min-h-11 items-center gap-1 text-fg underline decoration-line underline-offset-4 transition-colors hover:decoration-fg"
    >
      {children}
      {external && (
        <>
          <span className="sr-only"> (opens in a new tab)</span>
          <span aria-hidden="true" className="text-faint">↗</span>
        </>
      )}
    </a>
  );
}

function ProjectCard({ p, index }: { p: Project; index: number }) {
  const photo = available(p.photo);
  const featured = index < 2;
  return (
    <article
      className={`reveal rounded-3xl border border-line bg-surface/60 p-6 sm:p-10 ${featured ? "" : ""}`}
      aria-labelledby={`project-${index}`}
    >
      <div className="flex flex-wrap items-center gap-x-4 gap-y-2 text-xs tracking-wide text-faint uppercase">
        <span className="font-mono" aria-hidden="true">
          {String(index + 1).padStart(2, "0")}
        </span>
        <span>{p.period}</span>
        <span className="rounded-full border border-line px-3 py-1 normal-case tracking-normal text-muted">
          <span className="sr-only">Status: </span>
          {p.status}
        </span>
      </div>

      <div className={`mt-6 grid gap-10 ${photo ? "lg:grid-cols-[minmax(0,1fr)_20rem]" : ""}`}>
        <div className="min-w-0">
          <h3
            id={`project-${index}`}
            className={`font-light tracking-tight text-fg ${featured ? "text-3xl sm:text-5xl" : "text-2xl sm:text-3xl"}`}
          >
            {p.name}
          </h3>
          <p className="mt-2 text-sm text-faint">{p.role}</p>
          <p className="mt-6 max-w-2xl text-lg leading-relaxed text-fg">{p.summary}</p>
          <div className="mt-4 max-w-2xl space-y-4 leading-relaxed text-muted">
            {p.story.map((s, i) => (
              <p key={i}>{s}</p>
            ))}
          </div>
        </div>
        {photo && <Figure photo={photo} aspect="aspect-[4/3] lg:aspect-[4/5]" />}
      </div>

      {p.stats.length > 0 && (
        <dl className="mt-10 grid grid-cols-2 gap-x-6 gap-y-8 border-t border-line pt-8 sm:grid-cols-3">
          {p.stats.map((s) => (
            <div key={s.label}>
              <dt className="sr-only">{s.label}</dt>
              <dd>
                <span className="block text-4xl font-extralight tracking-tight text-fg sm:text-5xl">{s.value}</span>
                <span className="mt-1 block text-sm text-muted">{s.label}</span>
              </dd>
            </div>
          ))}
        </dl>
      )}

      {p.takeaway && (
        <blockquote className="mt-10 max-w-2xl border-l-2 border-accent/60 pl-5 text-lg font-light leading-relaxed text-fg/90 italic">
          {p.takeaway}
        </blockquote>
      )}

      <div className="mt-8 flex flex-wrap items-center gap-x-6 gap-y-2">
        <ul className="flex flex-wrap gap-2" aria-label="Topics">
          {p.tags.map((t) => (
            <li key={t} className="rounded-full bg-line/60 px-3 py-1 text-xs text-muted">
              {t}
            </li>
          ))}
        </ul>
        {p.links.map((l) => (
          <ExternalLink key={l.href} href={l.href}>
            {l.label}
          </ExternalLink>
        ))}
      </div>
    </article>
  );
}

export default function Home() {
  const { hero, now, projects, thinking, goals, experience, services, volleyball, contact, footer } = c;
  const heroPhoto = available(hero.photo);
  const thinkingPhoto = available(thinking.photo);
  const volleyPhoto = available(volleyball.photo);

  return (
    <>
      <Header nav={c.nav} />

      <main id="main">
        {/* Hero */}
        <section id="top" aria-label="Introduction" className="relative overflow-hidden pt-16">
          <div
            aria-hidden="true"
            className="pointer-events-none absolute inset-x-0 top-0 h-[70vh] bg-[radial-gradient(60%_60%_at_70%_20%,rgba(216,210,192,0.10),transparent)]"
          />
          <div className="relative mx-auto grid min-h-[calc(100svh-4rem)] max-w-6xl items-center gap-12 px-5 py-16 sm:px-8 md:grid-cols-[minmax(0,1.3fr)_minmax(0,1fr)]">
            <div>
              <p className="text-sm tracking-wide text-muted">{hero.eyebrow}</p>
              <h1 className="mt-6 text-[clamp(3.5rem,16vw,9rem)] font-extralight leading-[0.9] tracking-[-0.05em]">
                {hero.name.split(" ").map((w) => (
                  <span key={w} className="block">
                    {w}
                  </span>
                ))}
              </h1>
              <p className="mt-8 max-w-lg text-lg leading-relaxed text-muted sm:text-xl">{hero.tagline}</p>
              <div className="mt-10 flex flex-wrap gap-3">
                <a
                  href={hero.primaryCta.href}
                  className="inline-flex h-12 items-center rounded-full bg-fg px-6 text-sm font-medium text-bg transition-opacity hover:opacity-85"
                >
                  {hero.primaryCta.label}
                </a>
                <a
                  href={hero.secondaryCta.href}
                  className="inline-flex h-12 items-center rounded-full border border-line px-6 text-sm text-fg transition-colors hover:border-muted"
                >
                  {hero.secondaryCta.label}
                </a>
              </div>
            </div>
            {heroPhoto ? (
              <Figure photo={heroPhoto} priority aspect="aspect-[4/3] md:aspect-[4/5]" />
            ) : (
              <HeroGraphic className="mx-auto w-full max-w-[22rem] md:max-w-none" />
            )}
          </div>
        </section>

        {/* Now */}
        <Section id="now" heading={now.heading} index="01" aside={now.intro}>
          <ul className="grid gap-px overflow-hidden rounded-2xl border border-line bg-line sm:grid-cols-2">
            {now.items.map((item) => (
              <li key={item.label} className="bg-bg p-6 sm:p-8">
                <p className="text-xs tracking-widest text-faint uppercase">{item.label}</p>
                <p className="mt-3 text-lg leading-relaxed text-fg">{item.text}</p>
              </li>
            ))}
          </ul>
        </Section>

        {/* Projects */}
        <section id="projects" aria-labelledby="projects-heading" className="border-t border-line">
          <div className="mx-auto max-w-6xl px-5 py-20 sm:px-8 md:py-28">
            <div className="reveal max-w-2xl">
              <p className="font-mono text-xs tracking-widest text-faint" aria-hidden="true">
                02
              </p>
              <h2 id="projects-heading" className="mt-2 text-4xl font-extralight tracking-tight sm:text-6xl">
                {projects.heading}
              </h2>
              <p className="mt-4 text-lg text-muted">{projects.intro}</p>
            </div>
            <div className="mt-14 space-y-6">
              {projects.items.map((p, i) => (
                <ProjectCard key={p.name} p={p} index={i} />
              ))}
            </div>
          </div>
        </section>

        {/* How I think */}
        <Section id="thinking" heading={thinking.heading} index="03" aside={thinking.intro}>
          <div className={`grid gap-10 ${thinkingPhoto ? "lg:grid-cols-[minmax(0,1fr)_18rem]" : ""}`}>
            <ul className="space-y-10">
              {thinking.items.map((t) => (
                <li key={t.quote}>
                  <blockquote className="text-2xl leading-snug font-extralight tracking-tight text-fg sm:text-3xl">
                    “{t.quote}”
                  </blockquote>
                  <p className="mt-3 text-sm text-faint">{t.context}</p>
                </li>
              ))}
            </ul>
            {thinkingPhoto && <Figure photo={thinkingPhoto} className="self-start" aspect="aspect-[3/4]" />}
          </div>

          <h3 className="mt-20 mb-6 text-sm tracking-widest text-faint uppercase">{goals.heading}</h3>
          <ol className="space-y-4">
            {goals.items.map((g, i) => (
              <li key={g} className="flex gap-5 border-t border-line pt-4 text-lg text-fg">
                <span className="font-mono text-sm text-faint" aria-hidden="true">
                  {String(i + 1).padStart(2, "0")}
                </span>
                {g}
              </li>
            ))}
          </ol>
        </Section>

        {/* Timeline */}
        <Section id="timeline" heading={experience.heading} index="04">
          <ol className="relative space-y-8 border-l border-line pl-6 sm:pl-8">
            {experience.items.map((e) => (
              <li key={e.role + e.org} className="relative">
                <span
                  className="absolute top-2 -left-[1.72rem] h-2 w-2 rounded-full bg-muted sm:-left-[2.22rem]"
                  aria-hidden="true"
                />
                <p className="text-sm text-faint">{e.period}</p>
                <p className="mt-1 text-lg text-fg">
                  {e.role}
                  <span className="text-faint"> · </span>
                  <span className="text-muted">{e.org}</span>
                </p>
              </li>
            ))}
          </ol>
        </Section>

        {/* Services */}
        <Section id="services" heading={services.heading} index="05">
          <p className="max-w-2xl text-xl leading-relaxed font-light text-fg sm:text-2xl">{services.intro}</p>
          <ul className="mt-12 grid gap-px overflow-hidden rounded-2xl border border-line bg-line sm:grid-cols-3">
            {services.items.map((s) => (
              <li key={s.title} className="bg-bg p-6 sm:p-8">
                <h3 className="text-base text-fg">{s.title}</h3>
                <p className="mt-3 leading-relaxed text-muted">{s.body}</p>
              </li>
            ))}
          </ul>
          <a
            href={services.cta.href}
            className="mt-10 inline-flex h-12 items-center rounded-full bg-fg px-6 text-sm font-medium text-bg transition-opacity hover:opacity-85"
          >
            {services.cta.label}
            <span aria-hidden="true">&nbsp;→</span>
          </a>
        </Section>

        {/* Volleyball */}
        <Section id="volleyball" heading={volleyball.heading} index="06">
          <div className={`grid items-start gap-10 ${volleyPhoto ? "sm:grid-cols-[minmax(0,1fr)_14rem]" : ""}`}>
            <div>
              <p className="max-w-2xl text-lg leading-relaxed font-light text-fg/90">{volleyball.text}</p>
              <dl className="mt-8 divide-y divide-line border-y border-line">
                {volleyball.facts.map((f) => (
                  <div key={f.label} className="grid gap-1 py-4 sm:grid-cols-[7rem_minmax(0,1fr)] sm:gap-6">
                    <dt className="text-sm text-faint">{f.label}</dt>
                    <dd className="text-fg">{f.value}</dd>
                  </div>
                ))}
              </dl>
            </div>
            {volleyPhoto && <Figure photo={volleyPhoto} aspect="aspect-square" />}
          </div>
        </Section>

        {/* Contact */}
        <Section id="contact" heading={contact.heading} index="07">
          <p className="max-w-xl text-lg font-light text-fg/90">{contact.body}</p>
          <p className="mt-8">
            <span className="sr-only">Email: </span>
            <a
              href={`mailto:${contact.email}`}
              className="text-[clamp(1.5rem,6vw,3.25rem)] font-extralight tracking-tight break-all text-fg underline decoration-line decoration-1 underline-offset-8 hover:decoration-muted"
            >
              {contact.email}
            </a>
          </p>
          <h3 className="mt-14 mb-4 text-sm tracking-widest text-faint uppercase">{contact.profilesHeading}</h3>
          <ul className="flex flex-wrap gap-x-8 gap-y-1">
            {contact.profiles.map((p) => (
              <li key={p.href}>
                <ExternalLink href={p.href}>{p.label}</ExternalLink>
              </li>
            ))}
          </ul>
        </Section>
      </main>

      <footer className="border-t border-line">
        <div className="mx-auto flex max-w-6xl flex-col gap-4 px-5 py-10 text-xs text-faint sm:px-8 md:flex-row md:justify-between">
          <p>{footer.copyright}</p>
          <ul className="space-y-1 md:text-right">
            {footer.credits.map((line) => (
              <li key={line}>{line}</li>
            ))}
          </ul>
        </div>
      </footer>
    </>
  );
}
