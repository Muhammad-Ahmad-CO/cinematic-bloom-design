import { ArrowDown } from "lucide-react";
import heroImg from "@/assets/hero.jpg";
import { useParallax } from "@/hooks/use-reveal";

export function Hero() {
  const { ref, offset } = useParallax<HTMLDivElement>(0.25);

  return (
    <section
      id="top"
      ref={ref}
      className="grain relative flex min-h-[100svh] w-full items-end overflow-hidden"
    >
      <div className="absolute inset-0 z-0">
        <div
          className="absolute inset-0"
          style={{ transform: `translate3d(0, ${offset * 0.4}px, 0)` }}
        >
          <div className="animate-wind h-full w-full">
            <img
              src={heroImg}
              alt="Dark botanical forms lit by a single soft light"
              width={1920}
              height={1200}
              className="animate-drift h-full w-full object-cover object-[72%_45%] brightness-[1.6] contrast-[1.05] saturate-[1.15]"
            />
          </div>
        </div>
        <div
          className="absolute inset-0"
          style={{
            backgroundImage:
              "linear-gradient(180deg, color-mix(in oklab, var(--background) 65%, transparent) 0%, transparent 30%, color-mix(in oklab, var(--background) 45%, transparent) 70%, var(--background) 100%)",
          }}
        />
        <div
          className="animate-aurora absolute -bottom-1/3 left-1/2 h-[70vh] w-[80vw] -translate-x-1/2 rounded-full opacity-40 blur-[120px]"
          style={{ background: "radial-gradient(circle, var(--deep), transparent 70%)" }}
        />
      </div>

      {/* moonlight falling on the headline */}
      <div className="pointer-events-none absolute inset-0 z-[5] overflow-hidden">
        <span
          className="animate-moonlight absolute -top-[30%] left-[8%] h-[130%] w-[46%] blur-[60px] md:w-[38%]"
          style={{
            background:
              "linear-gradient(168deg, color-mix(in oklab, var(--foreground) 16%, transparent) 0%, color-mix(in oklab, var(--foreground) 6%, transparent) 45%, transparent 78%)",
            transform: "rotate(6deg)",
          }}
        />
        <span
          className="animate-moon-shimmer absolute bottom-[16%] left-[2%] h-[42vh] w-[52vw] rounded-full blur-[110px] md:w-[40vw]"
          style={{
            background:
              "radial-gradient(circle, color-mix(in oklab, var(--foreground) 12%, transparent), transparent 70%)",
          }}
        />
      </div>



      <div className="relative z-10 mx-auto w-full max-w-[1600px] px-6 pt-32 pb-16 md:px-12 md:pb-20">
        <p className="eyebrow animate-fade-in mb-8 flex items-center gap-3">
          <span className="animate-breathe inline-block h-1.5 w-1.5 rounded-full bg-accent" />
          Creative studio — Est. 2019
        </p>

        <h1 className="display-xl animate-fade-in text-[clamp(2.75rem,11.5vw,11.5rem)]">
          Design,
          <br />
          <span className="text-muted-foreground/80">Re</span>imagined.
        </h1>

        <div className="mt-10 grid gap-10 border-t border-border pt-8 md:grid-cols-[1fr_auto] md:items-end">
          <p className="max-w-xl text-sm leading-relaxed text-muted-foreground md:text-base">
            We build digital work at the edge of technology and nature — quiet interfaces, cinematic
            brand systems, and experiences engineered to hold attention long after the scroll ends.
          </p>

          <a
            href="#statement"
            className="group inline-flex w-fit items-center gap-3 rounded-full border border-border px-6 py-3.5 text-[0.7rem] tracking-[0.24em] uppercase transition-all duration-500 hover:border-accent hover:bg-accent/10 hover:text-accent"
          >
            Explore
            <ArrowDown className="h-3.5 w-3.5 transition-transform duration-500 group-hover:translate-y-1" />
          </a>
        </div>
      </div>
    </section>
  );
}
