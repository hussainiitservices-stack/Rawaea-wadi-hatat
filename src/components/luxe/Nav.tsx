import { useEffect, useState } from "react";

export const Nav = () => {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const links = [
    { label: "Collections", href: "#collections" },
    { label: "Craft", href: "#craft" },
    { label: "Atelier", href: "#about" },
    { label: "Contact", href: "#contact" },
  ];

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-700 ${
        scrolled ? "bg-ivory/85 backdrop-blur-md py-4 border-b border-border/60" : "py-7 bg-transparent"
      }`}
    >
      <div className="container flex items-center justify-between">
        <a href="#top" className="group flex items-baseline gap-2">
          <span className="font-display text-xl tracking-[0.18em] text-ink md:text-2xl">RAWAEA</span>
          <span className="font-mono-luxe hidden text-ink/60 md:inline">WADI HATAT</span>
        </a>

        <nav className="hidden items-center gap-10 md:flex">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="lux-link font-mono-luxe text-ink/80 hover:text-ink"
            >
              {l.label}
            </a>
          ))}
        </nav>

        <div className="hidden items-center gap-3 md:flex">
          <span className="font-mono-luxe text-ink/50">EN / AR</span>
        </div>

        <button
          onClick={() => setOpen(!open)}
          className="flex h-9 w-9 flex-col items-center justify-center gap-1.5 md:hidden"
          aria-label="Menu"
        >
          <span className={`h-px w-6 bg-ink transition-transform ${open ? "translate-y-[3px] rotate-45" : ""}`} />
          <span className={`h-px w-6 bg-ink transition-transform ${open ? "-translate-y-[3px] -rotate-45" : ""}`} />
        </button>
      </div>

      {/* Mobile menu */}
      <div
        className={`fixed inset-0 top-0 -z-10 bg-ivory transition-all duration-700 md:hidden ${
          open ? "opacity-100" : "pointer-events-none opacity-0"
        }`}
      >
        <div className="flex h-full flex-col items-center justify-center gap-8">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              onClick={() => setOpen(false)}
              className="font-display text-4xl tracking-tight text-ink"
            >
              {l.label}
            </a>
          ))}
        </div>
      </div>
    </header>
  );
};
