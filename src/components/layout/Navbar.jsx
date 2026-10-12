import { useEffect, useState } from "react";
import { AnimatePresence, motion, useScroll } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { navItems, profile } from "@/data/portfolio";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const sectionIds = [...navItems.map((item) => item.href.slice(1)), "contact"];

function useActiveSection() {
  const [active, setActive] = useState("");

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActive(entry.target.id);
        });
      },
      { rootMargin: "-45% 0px -50% 0px" },
    );

    sectionIds.forEach((id) => {
      const element = document.getElementById(id);
      if (element) observer.observe(element);
    });

    const onScroll = () => {
      if (window.scrollY < window.innerHeight * 0.4) setActive("");
    };
    window.addEventListener("scroll", onScroll, { passive: true });

    return () => {
      observer.disconnect();
      window.removeEventListener("scroll", onScroll);
    };
  }, []);

  return active;
}

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const active = useActiveSection();
  const { scrollYProgress } = useScroll();

  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if (!isOpen) return undefined;

    const onKeyDown = (event) => {
      if (event.key === "Escape") setIsOpen(false);
    };
    document.addEventListener("keydown", onKeyDown);
    document.body.style.overflow = "hidden";

    return () => {
      document.removeEventListener("keydown", onKeyDown);
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  const closeMenu = () => setIsOpen(false);

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-colors duration-500",
        isScrolled && !isOpen ? "border-b bg-paper/85 backdrop-blur-md" : "border-b border-transparent",
      )}
    >
      <a
        href="#work"
        className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-[70] focus:rounded-full focus:bg-ink focus:px-4 focus:py-2 focus:text-sm focus:text-paper"
      >
        Skip to work
      </a>

      <nav className="container relative z-[60] flex h-[var(--nav-h)] items-center justify-between" aria-label="Main">
        <a href="#top" className="group flex items-baseline gap-3" onClick={closeMenu}>
          <span className="font-display text-xl font-semibold tracking-tight">
            Amen Jouini<span className="text-signal">.</span>
          </span>
          <span className="eyebrow hidden transition-colors group-hover:text-ink sm:inline">Software Engineer</span>
        </a>

        <ul className="hidden items-center gap-1 md:flex">
          {navItems.map((item, index) => {
            const isActive = active === item.href.slice(1);
            return (
              <li key={item.href}>
                <a
                  href={item.href}
                  aria-current={isActive ? "true" : undefined}
                  className={cn(
                    "relative flex items-center gap-1.5 rounded-full px-3.5 py-2 text-sm transition-colors",
                    isActive ? "text-ink" : "text-ink/60 hover:text-ink",
                  )}
                >
                  <span className="font-mono text-[0.625rem] text-muted">0{index + 1}</span>
                  {item.label}
                  {isActive ? (
                    <motion.span
                      layoutId="nav-active"
                      className="absolute inset-0 -z-10 rounded-full bg-ink/[0.07]"
                      transition={{ type: "spring", stiffness: 380, damping: 32 }}
                    />
                  ) : null}
                </a>
              </li>
            );
          })}
        </ul>

        <div className="flex items-center gap-2">
          <Button asChild size="sm" className="hidden md:inline-flex">
            <a href="#contact">
              Let's talk
              <ArrowUpRight className="h-3.5 w-3.5 transition-transform duration-300 group-hover/btn:rotate-45" />
            </a>
          </Button>

          <button
            type="button"
            aria-label={isOpen ? "Close menu" : "Open menu"}
            aria-expanded={isOpen}
            aria-controls="mobile-menu"
            className="relative -mr-2 inline-flex h-11 w-11 items-center justify-center rounded-full md:hidden"
            onClick={() => setIsOpen((value) => !value)}
          >
            <span
              className={cn(
                "absolute h-px w-5 bg-ink transition-transform duration-300 ease-out",
                isOpen ? "rotate-45" : "-translate-y-[3.5px]",
              )}
            />
            <span
              className={cn(
                "absolute h-px w-5 bg-ink transition-transform duration-300 ease-out",
                isOpen ? "-rotate-45" : "translate-y-[3.5px]",
              )}
            />
          </button>
        </div>
      </nav>

      <motion.div
        aria-hidden="true"
        className={cn("absolute inset-x-0 bottom-0 h-px origin-left bg-signal", !isScrolled && "opacity-0")}
        style={{ scaleX: scrollYProgress }}
      />

      <AnimatePresence>
        {isOpen ? (
          <motion.div
            id="mobile-menu"
            className="fixed inset-0 z-50 flex flex-col bg-paper px-5 pb-8 pt-[calc(var(--nav-h)+1.5rem)] md:hidden"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
          >
            <ul className="flex-1 border-t">
              {[...navItems, { label: "Contact", href: "#contact" }].map((item, index) => (
                <motion.li
                  key={item.href}
                  className="border-b"
                  initial={{ opacity: 0, y: 16 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.05 + index * 0.05, duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
                >
                  <a href={item.href} className="flex items-baseline justify-between py-4" onClick={closeMenu}>
                    <span className="font-display text-4xl font-semibold tracking-tight">{item.label}</span>
                    <span className="font-mono text-xs text-muted">0{index + 1}</span>
                  </a>
                </motion.li>
              ))}
            </ul>
            <div className="space-y-3">
              <a href={`mailto:${profile.email}`} className="block text-lg">
                {profile.email}
              </a>
              <p className="eyebrow">
                {profile.location} — {profile.availability}
              </p>
            </div>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </header>
  );
}
