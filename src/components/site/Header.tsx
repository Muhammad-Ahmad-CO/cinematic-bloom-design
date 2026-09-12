import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { AnimatePresence, motion } from "motion/react";
import { cn } from "@/lib/utils";

const NAV = [
  { label: "Work", href: "#work" },
  { label: "About", href: "#about" },
  { label: "Process", href: "#process" },
  { label: "Contact", href: "#contact" },
];

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-all duration-500 ease-out",
        scrolled
          ? "border-b border-border bg-background/70 backdrop-blur-xl"
          : "border-b border-transparent",
      )}
    >
      <div className="mx-auto grid max-w-[1600px] grid-cols-[minmax(0,1fr)_auto] items-center gap-6 px-6 py-5 md:grid-cols-[1fr_auto_1fr] md:px-12">
        <a href="#top" className="group flex min-w-0 items-center gap-2.5">
          <span className="h-2 w-2 shrink-0 rounded-full bg-accent transition-transform duration-500 group-hover:scale-150" />
          <span className="truncate text-sm font-semibold tracking-[0.28em] uppercase">
            Verdant
          </span>
        </a>

        <nav aria-label="Primary" className="hidden md:flex md:items-center md:gap-10">
          {NAV.map((item) => (
            <a
              key={item.label}
              href={item.href}
              className="relative text-xs tracking-[0.22em] text-muted-foreground uppercase transition-colors duration-300 hover:text-foreground after:absolute after:-bottom-1.5 after:left-0 after:h-px after:w-full after:origin-right after:scale-x-0 after:bg-accent after:transition-transform after:duration-500 hover:after:origin-left hover:after:scale-x-100"
            >
              {item.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center justify-end gap-3">
          <a
            href="#contact"
            className="hidden rounded-full border border-border px-5 py-2.5 text-[0.7rem] tracking-[0.2em] uppercase transition-all duration-500 hover:border-accent hover:bg-accent/10 hover:text-accent sm:inline-block"
          >
            Start a Project
          </a>
          <button
            type="button"
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
            onClick={() => setOpen((v) => !v)}
            className="rounded-full border border-border p-2.5 transition-colors duration-300 hover:border-accent hover:text-accent md:hidden"
          >
            {open ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
          </button>
        </div>
      </div>

      <AnimatePresence initial={false}>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
            className="overflow-hidden border-t border-border bg-background/95 backdrop-blur-xl md:hidden"
          >
        <motion.nav
          aria-label="Mobile"
          initial="closed"
          animate="open"
          variants={{ open: { transition: { staggerChildren: 0.055, delayChildren: 0.08 } }, closed: {} }}
          className="flex flex-col px-6 py-4"
        >
          {NAV.map((item) => (
            <motion.a
              key={item.label}
              href={item.href}
              onClick={() => setOpen(false)}
              variants={{ closed: { opacity: 0, y: 12 }, open: { opacity: 1, y: 0 } }}
              className="border-b border-border py-4 text-sm tracking-[0.22em] text-muted-foreground uppercase last:border-0 hover:text-accent"
            >
              {item.label}
            </motion.a>
          ))}
          <motion.a
            href="#contact"
            onClick={() => setOpen(false)}
            variants={{ closed: { opacity: 0, y: 12 }, open: { opacity: 1, y: 0 } }}
            className="mt-4 rounded-full border border-border px-5 py-3 text-center text-[0.7rem] tracking-[0.2em] uppercase hover:border-accent hover:text-accent"
          >
            Start a Project
          </motion.a>
        </motion.nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
