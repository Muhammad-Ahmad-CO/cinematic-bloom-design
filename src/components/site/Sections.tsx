import wideImg from "@/assets/wide.jpg";
import podImg from "@/assets/philosophy-pod.png";
import orbImg from "@/assets/orb.png";
import work1 from "@/assets/work-1.jpg";
import work2 from "@/assets/work-2.jpg";
import work3 from "@/assets/work-3.jpg";
import { Reveal } from "./Reveal";
import { useParallax, useReveal, useScrollProgress } from "@/hooks/use-reveal";

export function Statement() {
  // Philosophy — an idea "growing": a vine-like line draws downward on entry,
  // with a scroll-driven mist + drifting spores behind the words.
  const { ref, visible } = useReveal<HTMLElement>(0.25);
  const { ref: progRef, progress } = useScrollProgress<HTMLDivElement>();

  return (
    <section
      ref={ref}
      id="about"
      className="relative mx-auto max-w-[1600px] overflow-hidden px-6 py-32 md:px-12 md:py-56"
    >
      {/* scroll-driven background: mist rises and light opens as you read */}
      <div ref={progRef} className="pointer-events-none absolute inset-0 -z-10">
        <span
          className="absolute inset-x-0 bottom-0 block h-[80%]"
          style={{
            background:
              "linear-gradient(180deg, transparent, color-mix(in oklab, var(--deep) 60%, transparent))",
            opacity: 0.25 + progress * 0.55,
            transform: `translate3d(0, ${(1 - progress) * 60}px, 0)`,
          }}
        />
        <span
          className="absolute top-1/2 left-1/2 block h-[60vh] w-[60vw] -translate-x-1/2 -translate-y-1/2 rounded-full blur-[130px]"
          style={{
            background:
              "radial-gradient(circle, color-mix(in oklab, var(--accent) 22%, transparent), transparent 70%)",
            opacity: 0.15 + progress * 0.5,
            transform: `translate3d(-50%, -50%, 0) scale(${0.7 + progress * 0.6})`,
          }}
        />
        <span
          className="absolute right-[12%] bottom-0 block h-px origin-bottom bg-gradient-to-t from-accent/50 to-transparent"
          style={{ height: `${progress * 70}%`, width: "1px" }}
        />
        {[0, 1, 2, 3, 4].map((i) => (
          <span
            key={i}
            className="animate-spore absolute bottom-[10%] h-1 w-1 rounded-full bg-accent/60 blur-[1px]"
            style={{
              left: `${12 + i * 18}%`,
              animationDelay: `${i * 2.6}s`,
              animationDuration: `${12 + i * 2}s`,
              opacity: 0.2 + progress * 0.8,
            }}
          />
        ))}
      </div>

      <div className="pointer-events-none absolute top-24 bottom-24 left-2 w-px overflow-hidden md:left-6">
        <span
          className={`block h-full w-px bg-gradient-to-b from-transparent via-accent/70 to-transparent ${
            visible ? "animate-grow-line" : "scale-y-0 opacity-0"
          }`}
        />
      </div>
      <span
        className="animate-sway pointer-events-none absolute top-1/3 -right-10 h-64 w-64 rounded-full blur-[120px] md:h-96 md:w-96"
        style={{ background: "radial-gradient(circle, var(--deep), transparent 70%)" }}
      />


      {/* corn-style cinematic centerpiece: subject blooms out of a green glow,
          husk filaments drift, everything reacts to scroll */}
      <div className="pointer-events-none absolute inset-0 z-0 flex items-center justify-center overflow-hidden">
        <span
          className="animate-breathe absolute h-[70vh] w-[70vh] rounded-full blur-[120px]"
          style={{
            background:
              "radial-gradient(circle, color-mix(in oklab, var(--primary) 42%, transparent), color-mix(in oklab, var(--deep) 40%, transparent) 45%, transparent 72%)",
            opacity: 0.25 + progress * 0.55,
          }}
        />
        <div
          className={`relative transition-[opacity,transform,filter] duration-[2200ms] ease-[var(--ease-cine)] ${
            visible ? "opacity-100" : "opacity-0"
          }`}
          style={{
            transform: `translate3d(0, ${(0.5 - progress) * 90}px, 0) scale(${visible ? 1 : 0.82})`,
            filter: `blur(${visible ? 0 : 14}px)`,
          }}
        >
          <img
            src={podImg}
            alt=""
            aria-hidden="true"
            loading="lazy"
            width={1024}
            height={1536}
            className="animate-pod-float h-[38vh] w-auto max-w-none opacity-40 mix-blend-screen md:h-[54vh]"
            style={{ filter: "drop-shadow(0 0 90px color-mix(in oklab, var(--primary) 35%, transparent))" }}
          />
          {[0, 1, 2, 3, 4, 5].map((i) => (
            <span
              key={i}
              className="animate-filament absolute top-1/2 left-1/2 block h-[26vh] w-px origin-bottom bg-gradient-to-t from-transparent via-accent/45 to-transparent"
              style={{
                ["--fil-rot" as string]: `${-26 + i * 10}deg`,
                transform: `rotate(${-26 + i * 10}deg)`,
                animationDelay: `${i * 1.4}s`,
                animationDuration: `${10 + i * 1.6}s`,
                opacity: 0.25 + progress * 0.5,
              }}
            />
          ))}
        </div>
      </div>

      <div className="relative z-10">
        <Reveal className="eyebrow mb-14">(01) — Philosophy</Reveal>
        <h2 className="display-xl text-[clamp(2rem,7.2vw,7rem)] [text-shadow:0_0_60px_color-mix(in_oklab,var(--background)_85%,transparent)]">
          <Reveal delay={60}>Ideas that grow</Reveal>
          <Reveal delay={180} className="text-accent/85">
            beyond the
          </Reveal>
          <Reveal delay={300}>expected.</Reveal>
        </h2>
        <Reveal
          delay={420}
          className="mt-16 ml-auto max-w-md text-sm leading-relaxed text-muted-foreground"
        >
          Every project starts as a small, stubborn idea. We give it structure, light and restraint —
          then let it take up all the space it deserves.
        </Reveal>
      </div>
    </section>

  );
}

export function FullWidthVisual() {
  // Field study — the leaf grows into frame, then a slow scanning light passes over it.
  const { ref, offset } = useParallax<HTMLDivElement>(0.3);
  const { ref: growRef, visible } = useReveal<HTMLDivElement>(0.3);

  return (
    <section ref={ref} className="relative h-[70vh] w-full overflow-hidden md:h-[92vh]">
      <div
        ref={growRef}
        className="h-full w-full"
        style={{ transform: `translate3d(0, ${offset - 60}px, 0)` }}
      >
        <img
          src={wideImg}
          alt="Translucent leaf glowing against a black backdrop"
          width={1920}
          height={1088}
          loading="lazy"
          className={`leaf-grow h-[125%] w-full object-cover ${visible ? "leaf-grown" : ""}`}
        />
      </div>
      <div className="pointer-events-none absolute inset-0 bg-background/25" />
      <div
        className="animate-scan pointer-events-none absolute inset-x-0 top-0 h-24 blur-[2px]"
        style={{
          background:
            "linear-gradient(180deg, transparent, color-mix(in oklab, var(--accent) 22%, transparent), transparent)",
        }}
      />
      <span className="eyebrow absolute bottom-6 left-6 md:bottom-10 md:left-12">
        Fig. 02 — Field study, Northern greenhouse
      </span>
    </section>
  );
}



const SERVICES = [
  { n: "01", t: "Creative Direction", d: "Positioning, art direction and the tone that carries it." },
  { n: "02", t: "Digital Experiences", d: "Sites and products built for atmosphere and speed." },
  { n: "03", t: "Brand Systems", d: "Identity, type and rules that scale without diluting." },
  { n: "04", t: "Motion Design", d: "Timing, weight and restraint — motion that reads as craft." },
  { n: "05", t: "Interactive Development", d: "Engineering the details most teams quietly skip." },
  { n: "06", t: "Visual Strategy", d: "Long-view thinking for brands that plan in decades." },
];

export function Services() {
  // Capabilities — a progress rail fills as the list scrolls past, like work being completed.
  const { ref, progress } = useScrollProgress<HTMLDivElement>();

  return (
    <section id="process" className="mx-auto max-w-[1600px] px-6 py-28 md:px-12 md:py-40">
      <Reveal className="eyebrow mb-16">(02) — Capabilities</Reveal>
      <div ref={ref} className="relative border-t border-border pl-4 md:pl-8">
        <span className="pointer-events-none absolute top-0 bottom-0 left-0 w-px bg-border">
          <span
            className="block w-px origin-top bg-accent transition-[height] duration-150 ease-out"
            style={{ height: `${Math.round(progress * 100)}%` }}
          />
        </span>
        {SERVICES.map((s, i) => (
          <Reveal key={s.n} delay={i * 70}>
            <article className="group relative grid grid-cols-[auto_minmax(0,1fr)] items-start gap-x-6 gap-y-3 overflow-hidden border-b border-border px-2 py-8 transition-colors duration-500 hover:bg-card/60 md:grid-cols-[7rem_minmax(0,1fr)_minmax(0,20rem)] md:items-center md:px-6 md:py-11">
              <span
                className="pointer-events-none absolute inset-y-0 -left-1/3 w-1/3 -translate-x-full opacity-0 transition-opacity duration-500 group-hover:animate-sheen group-hover:opacity-100"
                style={{
                  background:
                    "linear-gradient(90deg, transparent, color-mix(in oklab, var(--accent) 14%, transparent), transparent)",
                }}
              />
              <span className="text-xs tracking-[0.24em] text-muted-foreground transition-colors duration-500 group-hover:text-accent">
                {s.n}
              </span>
              <h3 className="text-2xl font-medium tracking-tight transition-all duration-500 group-hover:translate-x-2 group-hover:text-accent md:text-4xl">
                {s.t}
              </h3>
              <p className="col-start-2 text-sm leading-relaxed text-muted-foreground md:col-start-3">
                {s.d}
              </p>
            </article>
          </Reveal>
        ))}
      </div>
    </section>
  );
}


export function Experimental() {
  return (
    <section className="deep-glow grain relative overflow-hidden py-28 md:py-44">
      <div className="mx-auto flex max-w-[1600px] flex-col items-center px-6 text-center md:px-12">
        <Reveal className="eyebrow">(03) — Studio experiment</Reveal>
        <div className="relative my-14 flex items-center justify-center md:my-20">
          <div
            className="animate-breathe absolute h-[26rem] w-[26rem] rounded-full blur-[110px] md:h-[38rem] md:w-[38rem]"
            style={{ background: "radial-gradient(circle, var(--accent), transparent 65%)" }}
          />
          <img
            src={orbImg}
            alt="Glowing organic sculptural form"
            width={1024}
            height={1024}
            loading="lazy"
            className="animate-soft-spin relative h-56 w-56 object-contain opacity-90 md:h-96 md:w-96"
          />
        </div>
        <Reveal className="display-xl max-w-3xl text-[clamp(1.5rem,4vw,3.25rem)]">
          A single form, studied for a thousand hours.
        </Reveal>
        <Reveal delay={140} className="mt-8 max-w-md text-sm leading-relaxed text-muted-foreground">
          Our lab work never ships to a client. It sharpens everything that does.
        </Reveal>
      </div>
    </section>
  );
}

export function BigStatement() {
  // "Look twice" — a light sweeps across the type, inviting the second look.
  return (
    <section
      id="statement"
      className="relative mx-auto max-w-[1600px] overflow-hidden px-6 py-32 md:px-12 md:py-56"
    >
      <span
        className="animate-sheen pointer-events-none absolute inset-y-24 -left-1/3 w-1/3"
        style={{
          background:
            "linear-gradient(90deg, transparent, color-mix(in oklab, var(--accent) 16%, transparent), transparent)",
        }}
      />
      <h2 className="display-xl relative text-[clamp(2rem,7.6vw,7.5rem)]">
        <Reveal>Built to make</Reveal>
        <Reveal delay={140}>people look</Reveal>
        <Reveal delay={280} className="text-accent/85">
          twice.
        </Reveal>
      </h2>
    </section>
  );
}

const PROJECTS = [
  { img: work1, title: "Atrium Nine", cat: "Brand System / Spatial", year: "2025" },
  { img: work2, title: "Signal Bloom", cat: "Digital Product / Motion", year: "2024" },
  { img: work3, title: "Nocturne Field", cat: "Campaign / Art Direction", year: "2024" },
];

function WorkCard({ p }: { p: (typeof PROJECTS)[number] }) {
  // Selected work — each frame drifts inside its crop as it passes, like a moving camera.
  const { ref, offset } = useParallax<HTMLAnchorElement>(0.22);

  return (
    <a
      ref={ref}
      href="#contact"
      className="group block overflow-hidden rounded-2xl border border-border"
    >
      <div className="relative aspect-[16/10] overflow-hidden md:aspect-[21/9]">
        <img
          src={p.img}
          alt={`${p.title} — ${p.cat}`}
          width={1400}
          height={900}
          loading="lazy"
          className="h-[122%] w-full object-cover transition-transform duration-[1200ms] ease-out group-hover:scale-105"
          style={{ transform: `translate3d(0, ${offset - 40}px, 0)` }}
        />
        <div className="absolute inset-0 bg-background/35 transition-colors duration-700 group-hover:bg-background/55" />
        <div className="absolute inset-x-0 bottom-0 grid grid-cols-[minmax(0,1fr)_auto] items-end gap-4 p-6 transition-transform duration-700 ease-out group-hover:-translate-y-2 md:p-10">
          <div className="min-w-0">
            <h3 className="display-xl truncate text-[clamp(1.5rem,4vw,3.5rem)]">{p.title}</h3>
            <p className="mt-2 text-xs tracking-[0.22em] text-muted-foreground uppercase">
              {p.cat}
            </p>
            <span className="mt-3 block h-px w-0 bg-accent transition-all duration-700 ease-out group-hover:w-40" />
          </div>
          <span className="shrink-0 text-xs tracking-[0.22em] text-muted-foreground">{p.year}</span>
        </div>
      </div>
    </a>
  );
}

export function Work() {
  return (
    <section id="work" className="mx-auto max-w-[1600px] px-6 py-28 md:px-12 md:py-40">
      <Reveal className="eyebrow mb-16">(04) — Selected work</Reveal>
      <div className="flex flex-col gap-8 md:gap-16">
        {PROJECTS.map((p, i) => (
          <Reveal key={p.title} delay={i * 90}>
            <WorkCard p={p} />
          </Reveal>
        ))}
      </div>
    </section>
  );
}


export function FinalCta() {
  // Contact — signal rings radiate outward, a call going out.
  return (
    <section
      id="contact"
      className="deep-glow grain relative flex min-h-[92svh] items-center overflow-hidden"
    >
      <div
        className="animate-aurora pointer-events-none absolute inset-0 opacity-60 blur-[130px]"
        style={{ background: "radial-gradient(50% 50% at 50% 60%, var(--deep), transparent 70%)" }}
      />
      <div className="pointer-events-none absolute inset-0 flex items-center justify-center">
        {[0, 1.6, 3.2].map((d) => (
          <span
            key={d}
            className="animate-ripple absolute h-[22rem] w-[22rem] rounded-full border border-accent/25 md:h-[34rem] md:w-[34rem]"
            style={{ animationDelay: `${d}s` }}
          />
        ))}
      </div>
      <div className="relative mx-auto w-full max-w-[1600px] px-6 py-28 md:px-12">
        <h2 className="display-xl text-[clamp(2.1rem,8vw,8rem)]">
          <Reveal>Let&apos;s create</Reveal>
          <Reveal delay={140}>something</Reveal>
          <Reveal delay={280} className="text-accent/85">
            unexpected.
          </Reveal>
        </h2>
        <Reveal delay={420}>
          <a
            href="mailto:studio@verdant.design"
            className="group mt-14 inline-flex items-center gap-3 text-lg tracking-tight transition-colors duration-500 hover:text-accent md:text-2xl"
          >
            Start a conversation
            <span className="transition-transform duration-500 group-hover:translate-x-2">→</span>
          </a>
        </Reveal>
      </div>
    </section>
  );
}

export function Footer() {
  return (
    <footer className="relative border-t border-border">
      <div className="overflow-hidden border-b border-border py-4">
        <div className="animate-ticker flex w-max gap-10 text-xs tracking-[0.3em] whitespace-nowrap text-muted-foreground uppercase">
          {Array.from({ length: 2 }).map((_, k) => (
            <span key={k} className="flex gap-10">
              {["Verdant Studio", "Available for 2026", "Lisbon", "Design & Motion", "Est. 2016"].map(
                (t) => (
                  <span key={t} className="flex items-center gap-10">
                    {t}
                    <span className="h-1 w-1 rounded-full bg-accent/70" />
                  </span>
                ),
              )}
            </span>
          ))}
        </div>
      </div>
      <div className="mx-auto grid max-w-[1600px] gap-12 px-6 py-16 md:grid-cols-4 md:px-12 md:py-20">
        <div>
          <div className="flex items-center gap-2.5">
            <span className="animate-pulse-dot h-2 w-2 rounded-full bg-accent" />
            <span className="text-sm font-semibold tracking-[0.28em] uppercase">Verdant</span>
          </div>

          <p className="mt-4 text-xs leading-relaxed text-muted-foreground">
            An experimental design studio working between technology and the natural world.
          </p>
        </div>

        <nav aria-label="Footer" className="flex flex-col gap-3 text-xs tracking-[0.2em] uppercase">
          {["Work", "About", "Process", "Contact"].map((l) => (
            <a
              key={l}
              href={`#${l.toLowerCase()}`}
              className="text-muted-foreground transition-colors duration-300 hover:text-accent"
            >
              {l}
            </a>
          ))}
        </nav>

        <nav aria-label="Social" className="flex flex-col gap-3 text-xs tracking-[0.2em] uppercase">
          {["Instagram", "Behance", "LinkedIn", "Read.cv"].map((l) => (
            <a
              key={l}
              href="#top"
              className="text-muted-foreground transition-colors duration-300 hover:text-accent"
            >
              {l}
            </a>
          ))}
        </nav>

        <div className="flex flex-col gap-3 text-xs text-muted-foreground">
          <a
            href="mailto:studio@verdant.design"
            className="tracking-[0.12em] transition-colors duration-300 hover:text-accent"
          >
            studio@verdant.design
          </a>
          <span>Lisbon — 38.72°N, 9.14°W</span>
          <span>© {new Date().getFullYear()} Verdant Studio</span>
        </div>
      </div>
    </footer>
  );
}
