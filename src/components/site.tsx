import Image from "next/image";
import { profile, type Dictionary, type Project } from "@/content";
import { CopyEmail } from "./copy-email";

const mailto = `mailto:${profile.email}`;

export function Site({ t }: { t: Dictionary }) {
  return (
    <>
      <div aria-hidden className="lamp-room pointer-events-none fixed inset-0 animate-[lamp-on_1.6s_ease-out_both]" />
      <div
        aria-hidden
        className="lamp-tint pointer-events-none fixed inset-0 z-[60] animate-[lamp-on_1.6s_ease-out_both]"
      />
      <Header t={t} />
      <main className="relative">
        <Hero t={t} />
        <Work t={t} />
        <Services t={t} />
        <About t={t} />
        <Contact t={t} />
      </main>
      <Footer t={t} />
    </>
  );
}

function Header({ t }: { t: Dictionary }) {
  const links = [
    { href: "#trabalhos", label: t.nav.work },
    { href: "#servicos", label: t.nav.services },
    { href: "#sobre", label: t.nav.about },
    { href: "#contato", label: t.nav.contact },
  ];

  return (
    <header className="lamp-header sticky top-0 z-50 border-b border-line">
      <div className="container-page flex h-16 items-center justify-between">
        <a href="#top" className="flex items-center gap-3">
          <span className="grid size-8 place-items-center rounded-full border border-accent/40 text-[11px] font-medium tracking-wide text-accent">
            DM
          </span>
          <span className="text-sm font-medium">{profile.name}</span>
        </a>
        <nav className="flex items-center gap-1 text-sm">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="hidden rounded-md px-3 py-2 text-muted transition-colors hover:bg-surface hover:text-fg md:inline"
            >
              {link.label}
            </a>
          ))}
          <a
            href={t.about.cvHref}
            target="_blank"
            rel="noopener noreferrer"
            className="ml-2 hidden items-center gap-1.5 rounded-md border border-accent/40 px-3 py-1.5 text-sm text-accent transition-colors hover:border-accent hover:bg-accent/10 sm:inline-flex"
          >
            <IconDownload />
            {t.nav.cv}
          </a>
          <a
            href={t.nav.switchHref}
            aria-label={t.nav.switchAria}
            hrefLang={t.locale === "pt" ? "en" : "pt-BR"}
            className="ml-2 rounded-md border border-line px-2.5 py-1.5 text-xs text-muted transition-colors hover:border-subtle hover:text-fg"
          >
            {t.nav.switchLabel}
          </a>
          <a
            href={mailto}
            className="ml-2 rounded-md bg-fg px-3.5 py-1.5 text-sm font-medium text-bg transition-opacity hover:opacity-90 md:hidden"
          >
            {t.nav.contact}
          </a>
        </nav>
      </div>
    </header>
  );
}

function Hero({ t }: { t: Dictionary }) {
  return (
    <section id="top" className="relative overflow-hidden border-b border-line">
      <div aria-hidden className="bg-grid absolute inset-0" />
      <div className="container-page relative grid gap-14 pb-24 pt-20 md:pb-32 md:pt-28 lg:grid-cols-12 lg:items-center">
        <div className="animate-rise lg:col-span-7">
          <span className="inline-flex items-center gap-2 rounded-full border border-line bg-surface px-3 py-1 text-xs text-muted">
            <span className="size-1.5 rounded-full bg-accent" />
            {t.hero.status}
          </span>
          <h1 className="mt-7 bg-linear-to-b from-fg to-fg/60 bg-clip-text text-[clamp(2.5rem,6vw,4.25rem)] font-semibold leading-[1.04] tracking-[-0.035em] text-transparent">
            {t.hero.title}
          </h1>
          <p className="mt-6 max-w-xl text-lg leading-relaxed text-muted">{t.hero.lede}</p>
          <div className="mt-9 flex flex-wrap gap-3">
            <a
              href={mailto}
              className="inline-flex h-11 items-center gap-2 rounded-lg bg-fg px-5 text-sm font-medium text-bg transition-opacity hover:opacity-90"
            >
              {t.hero.primary}
              <Arrow />
            </a>
            <a
              href="#trabalhos"
              className="inline-flex h-11 items-center rounded-lg border border-line bg-surface px-5 text-sm font-medium transition-colors hover:border-subtle"
            >
              {t.hero.secondary}
            </a>
            <a
              href={t.about.cvHref}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex h-11 items-center gap-2 rounded-lg px-3 text-sm font-medium text-accent transition-colors hover:text-fg"
            >
              <IconDownload />
              {t.hero.cv}
            </a>
          </div>
        </div>
        <div className="animate-rise [animation-delay:120ms] lg:col-span-5">
          <PortraitCard t={t} />
        </div>
      </div>
    </section>
  );
}

function PortraitCard({ t }: { t: Dictionary }) {
  return (
    <figure className="mx-auto max-w-sm overflow-hidden rounded-2xl border border-line bg-surface p-2 shadow-2xl shadow-black/50 lg:ml-auto lg:mr-0">
      <Image
        src={profile.photo}
        alt={t.about.photoAlt}
        width={800}
        height={800}
        priority
        sizes="(min-width: 1024px) 384px, 90vw"
        className="aspect-[4/5] w-full rounded-xl object-cover"
      />
      <figcaption className="flex items-end justify-between gap-4 px-3 pb-2 pt-4">
        <div>
          <p className="font-medium">{profile.name}</p>
          <p className="mt-0.5 text-sm text-muted">{t.hero.role}</p>
        </div>
        <p className="text-right text-xs text-subtle">{t.hero.location}</p>
      </figcaption>
    </figure>
  );
}

function SectionHeading({ index, label, title }: { index: string; label: string; title: string }) {
  return (
    <div className="max-w-2xl">
      <p className="text-xs uppercase tracking-[0.18em] text-accent">
        {index} <span className="text-subtle">/</span> {label}
      </p>
      <h2 className="mt-4 text-3xl font-semibold tracking-[-0.025em] md:text-4xl">{title}</h2>
    </div>
  );
}

function Work({ t }: { t: Dictionary }) {
  return (
    <section id="trabalhos" className="container-page py-24 md:py-32">
      <SectionHeading index="01" label={t.nav.work} title={t.work.title} />
      <div className="mt-14 space-y-8">
        {t.work.projects.map((project) => (
          <CaseStudy key={project.slug} project={project} labels={t.work.labels} />
        ))}
      </div>
    </section>
  );
}

function CaseStudy({ project, labels }: { project: Project; labels: Dictionary["work"]["labels"] }) {
  const [primary] = project.links;
  const host = new URL(primary.url).host;

  return (
    <article className="grid overflow-hidden rounded-2xl border border-line bg-surface lg:grid-cols-12">
      <a
        href={primary.url}
        target="_blank"
        rel="noopener noreferrer"
        className="group border-b border-line p-4 sm:p-6 lg:col-span-7 lg:border-b-0 lg:border-r"
      >
        <div className="overflow-hidden rounded-lg border border-line bg-bg">
          <div className="flex items-center gap-3 border-b border-line px-3 py-2">
            <div className="flex gap-1.5">
              <span className="size-2 rounded-full bg-line" />
              <span className="size-2 rounded-full bg-line" />
              <span className="size-2 rounded-full bg-line" />
            </div>
            <span className="flex-1 truncate rounded bg-surface px-2 py-0.5 text-center text-[11px] text-subtle">
              {host}
            </span>
          </div>
          <Image
            src={project.image}
            alt={project.name}
            width={1600}
            height={900}
            sizes="(min-width: 1024px) 640px, 100vw"
            className="aspect-[16/10] w-full object-cover object-top transition-transform duration-500 ease-out group-hover:scale-[1.02]"
          />
        </div>
      </a>

      <div className="flex flex-col p-6 sm:p-8 lg:col-span-5">
        <div className="flex flex-wrap items-center gap-2">
          <span className="text-xs text-subtle">{project.category}</span>
          {project.status && (
            <span className="rounded-full border border-accent/30 bg-accent/10 px-2 py-0.5 text-[11px] text-accent">
              {project.status}
            </span>
          )}
        </div>
        <h3 className="mt-3 text-2xl font-semibold tracking-[-0.02em]">{project.name}</h3>
        <p className="mt-1 text-sm text-muted">
          {labels.role}: {project.role}
        </p>

        <dl className="mt-7 space-y-5 text-sm leading-relaxed">
          {(["challenge", "solution", "result"] as const).map((k) => (
            <div key={k}>
              <dt className="text-xs uppercase tracking-[0.14em] text-subtle">{labels[k]}</dt>
              <dd className={`mt-1.5 ${k === "result" ? "text-fg" : "text-muted"}`}>{project[k]}</dd>
            </div>
          ))}
        </dl>

        <div className="mt-auto flex flex-wrap items-end justify-between gap-4 pt-8">
          <ul className="flex flex-wrap gap-1.5" aria-label={labels.stack}>
            {project.stack.map((tech) => (
              <li key={tech} className="rounded-md border border-line bg-raised px-2 py-1 text-[11px] text-muted">
                {tech}
              </li>
            ))}
          </ul>
          <div className="flex flex-wrap gap-x-5 gap-y-2">
            {project.links.map((link) => (
              <a
                key={link.url}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-sm font-medium transition-colors hover:text-accent"
              >
                {link.label}
                <Arrow external />
              </a>
            ))}
          </div>
        </div>
      </div>
    </article>
  );
}

function Services({ t }: { t: Dictionary }) {
  const icons = [<IconBrowser key="b" />, <IconStack key="s" />];

  return (
    <section id="servicos" className="border-y border-line bg-surface/40">
      <div className="container-page py-24 md:py-32">
        <SectionHeading index="02" label={t.nav.services} title={t.services.title} />
        <div className="mt-14 grid gap-4 md:grid-cols-2">
          {t.services.items.map((service, i) => (
            <div key={service.title} className="rounded-2xl border border-line bg-surface p-7 sm:p-8">
              <div className="grid size-10 place-items-center rounded-lg border border-line bg-raised text-accent">
                {icons[i]}
              </div>
              <h3 className="mt-6 text-xl font-semibold tracking-[-0.015em]">{service.title}</h3>
              <p className="mt-3 leading-relaxed text-muted">{service.text}</p>
              <ul className="mt-6 grid gap-2.5 border-t border-line pt-6 sm:grid-cols-2">
                {service.deliverables.map((item) => (
                  <li key={item} className="flex items-center gap-2.5 text-sm text-muted">
                    <span className="size-1.5 rounded-sm bg-accent" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-20">
          <div className="flex flex-wrap items-end justify-between gap-4">
            <h3 className="text-xl font-semibold tracking-[-0.015em]">{t.services.processTitle}</h3>
            <p className="text-sm text-muted">{t.services.note}</p>
          </div>
          <ol className="mt-8 grid gap-px overflow-hidden rounded-2xl border border-line bg-line sm:grid-cols-2 lg:grid-cols-4">
            {t.services.process.map((step, i) => (
              <li key={step.title} className="bg-surface p-6">
                <span className="text-xs text-accent">{String(i + 1).padStart(2, "0")}</span>
                <p className="mt-4 font-medium">{step.title}</p>
                <p className="mt-2 text-sm leading-relaxed text-muted">{step.text}</p>
              </li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
}

function About({ t }: { t: Dictionary }) {
  return (
    <section id="sobre" className="container-page py-24 md:py-32">
      <div className="grid gap-12 lg:grid-cols-12">
        <div className="lg:col-span-5">
          <SectionHeading index="03" label={t.nav.about} title={profile.name} />
          <dl className="mt-10 divide-y divide-line border-y border-line">
            {t.about.facts.map((fact) => (
              <div key={fact.label} className="flex justify-between gap-6 py-4 text-sm">
                <dt className="text-subtle">{fact.label}</dt>
                <dd className="text-right">{fact.value}</dd>
              </div>
            ))}
          </dl>
        </div>
        <div className="lg:col-span-6 lg:col-start-7 lg:pt-14">
          <div className="space-y-5 text-lg leading-relaxed text-muted">
            {t.about.paragraphs.map((paragraph, i) => (
              <p key={i} className={i === 0 ? "text-fg" : undefined}>
                {paragraph}
              </p>
            ))}
          </div>
          <dl className="mt-10 divide-y divide-line border-y border-line">
            {t.about.stack.map((group) => (
              <div key={group.label} className="grid gap-3 py-4 sm:grid-cols-[7.5rem_1fr] sm:items-center">
                <dt className="text-xs uppercase tracking-[0.16em] text-subtle">{group.label}</dt>
                <dd>
                  <ul className="flex flex-wrap gap-1.5">
                    {group.items.map((item) => (
                      <li key={item} className="rounded-md border border-line bg-surface px-2.5 py-1 text-xs text-muted">
                        {item}
                      </li>
                    ))}
                  </ul>
                </dd>
              </div>
            ))}
          </dl>
          <a
            href={t.about.cvHref}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-8 inline-flex h-11 items-center gap-2 rounded-lg border border-accent/40 px-5 text-sm font-medium text-accent transition-colors hover:border-accent hover:bg-accent/10"
          >
            <IconDownload />
            {t.about.cv}
          </a>
        </div>
      </div>
    </section>
  );
}

function Contact({ t }: { t: Dictionary }) {
  return (
    <section id="contato" className="container-page pb-24 md:pb-32">
      <div className="relative overflow-hidden rounded-3xl border border-line bg-surface px-6 py-16 text-center sm:px-12 md:py-24">
        <div aria-hidden className="bg-grid absolute inset-0 [mask-image:radial-gradient(ellipse_60%_70%_at_50%_100%,black,transparent)]" />
        <div
          aria-hidden
          className="absolute inset-0 bg-[radial-gradient(ellipse_60%_55%_at_50%_100%,rgb(201_180_138/0.12),transparent_70%)]"
        />
        <div className="relative">
          <p className="text-xs uppercase tracking-[0.18em] text-accent">
            04 <span className="text-subtle">/</span> {t.nav.contact}
          </p>
          <h2 className="mx-auto mt-5 max-w-2xl text-3xl font-semibold tracking-[-0.03em] md:text-5xl">
            {t.contact.title}
          </h2>
          <p className="mx-auto mt-5 max-w-lg leading-relaxed text-muted">{t.contact.text}</p>
          <div className="mt-10 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <a
              href={mailto}
              className="inline-flex h-12 items-center gap-2 rounded-lg bg-fg px-6 text-sm font-medium text-bg transition-opacity hover:opacity-90"
            >
              {profile.email}
              <Arrow />
            </a>
            <CopyEmail
              email={profile.email}
              label={t.contact.copy}
              copiedLabel={t.contact.copied}
              className="inline-flex h-12 items-center rounded-lg border border-line bg-raised px-5 text-sm text-muted transition-colors hover:border-subtle hover:text-fg"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

function Footer({ t }: { t: Dictionary }) {
  return (
    <footer className="relative border-t border-line">
      <div className="container-page flex flex-col gap-4 py-8 text-xs text-subtle sm:flex-row sm:items-center sm:justify-between">
        <p>
          © {new Date().getFullYear()} {profile.name} · {t.footer.location}
        </p>
        <div className="flex gap-6">
          <a href={profile.github} target="_blank" rel="noopener noreferrer" className="transition-colors hover:text-fg">
            GitHub
          </a>
          <a href={profile.linkedin} target="_blank" rel="noopener noreferrer" className="transition-colors hover:text-fg">
            LinkedIn
          </a>
        </div>
      </div>
    </footer>
  );
}

function Arrow({ external = false }: { external?: boolean }) {
  return (
    <svg aria-hidden width="14" height="14" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.6">
      {external ? <path d="M5 11 11 5M6 5h5v5" /> : <path d="M3 8h10M9 4l4 4-4 4" />}
    </svg>
  );
}

function IconDownload() {
  return (
    <svg aria-hidden width="15" height="15" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.6">
      <path d="M8 2.5v8M4.5 7 8 10.5 11.5 7M3 13.5h10" />
    </svg>
  );
}

function IconBrowser() {
  return (
    <svg aria-hidden width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6">
      <rect x="3" y="4" width="18" height="16" rx="2" />
      <path d="M3 9h18M7 6.5h.01M10 6.5h.01" />
    </svg>
  );
}

function IconStack() {
  return (
    <svg aria-hidden width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6">
      <path d="m12 3 9 5-9 5-9-5 9-5Z" />
      <path d="m3 13 9 5 9-5" />
    </svg>
  );
}
