import { ArrowUp } from "lucide-react";
import { navItems, profile } from "@/data/portfolio";

export function Footer() {
  return (
    <footer className="surface-ink border-t">
      <div className="container flex flex-col gap-6 py-8 md:flex-row md:items-center md:justify-between">
        <p className="font-mono text-xs text-muted">
          © {new Date().getFullYear()} {profile.name} — Designed &amp; built in Tunis.
        </p>

        <ul className="flex flex-wrap gap-x-6 gap-y-2 text-sm text-ink/70">
          {navItems.map((item) => (
            <li key={item.href}>
              <a href={item.href} className="transition-colors hover:text-ink">
                {item.label}
              </a>
            </li>
          ))}
        </ul>

        <a
          href="#top"
          className="group inline-flex items-center gap-2 text-sm text-ink/70 transition-colors hover:text-ink"
        >
          Back to top
          <span className="inline-flex h-8 w-8 items-center justify-center rounded-full border border-ink/25 transition-transform duration-300 ease-out group-hover:-translate-y-1">
            <ArrowUp className="h-3.5 w-3.5" />
          </span>
        </a>
      </div>
    </footer>
  );
}
