import { useEffect, useState } from "react";
import heroImg from "@/assets/hero-fabric.jpg";

const splitWords = (text: string) =>
  text.split(" ").map((w, i) => (
    <span key={i} className="reveal-mask mr-[0.25em]">
      <span style={{ animationDelay: `${0.4 + i * 0.08}s` }}>{w}</span>
    </span>
  ));

export const Hero = () => {
  const [y, setY] = useState(0);

  useEffect(() => {
    const onScroll = () => setY(window.scrollY);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <section id="top" className="relative h-screen min-h-[700px] w-full overflow-hidden bg-ink">
      {/* Parallax image */}
      <div
        className="absolute inset-0 will-change-transform"
        style={{ transform: `translate3d(0, ${y * 0.35}px, 0) scale(${1 + y * 0.0003})` }}
      >
        <img
          src={heroImg}
          alt="Flowing ivory silk with woven gold threads"
          className="h-full w-full object-cover animate-ken-burns"
          width={1920}
          height={1080}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-ink/40 via-ink/20 to-ink/80" />
        <div className="absolute inset-0 bg-gradient-to-r from-ink/60 via-transparent to-transparent" />
      </div>

      {/* Top eyebrow */}
      <div
        className="container relative z-10 flex h-full flex-col justify-between pt-32 pb-16"
        style={{ transform: `translate3d(0, ${-y * 0.15}px, 0)` }}
      >
        <div className="flex items-center justify-between text-ivory/80 animate-fade-in opacity-0" style={{ animationDelay: "0.2s" }}>
          <span className="font-mono-luxe">Est. Sultanate of Oman</span>
          <span className="font-mono-luxe hidden md:inline">N 23.5859° / E 58.4059°</span>
        </div>

        {/* Headline */}
        <div className="max-w-5xl">
          <p className="font-mono-luxe mb-6 text-gold animate-fade-in opacity-0" style={{ animationDelay: "0.3s" }}>
            ⎯⎯ Maison de Textile
          </p>
          <h1 className="font-display text-[clamp(3rem,9vw,9rem)] leading-[0.92] tracking-[-0.03em] text-ivory">
            <span className="block">{splitWords("Crafted Elegance")}</span>
            <span className="block">
              <span className="reveal-mask mr-[0.25em]"><span style={{ animationDelay: "0.9s" }}>from</span></span>
              <span className="reveal-mask"><span className="font-serif-italic gold-text" style={{ animationDelay: "1s" }}>Oman.</span></span>
            </span>
          </h1>

          <div className="mt-10 flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
            <p className="max-w-md text-ivory/75 leading-relaxed animate-fade-in opacity-0" style={{ animationDelay: "1.4s" }}>
              A house of textiles where ancient Arabian heritage is rewoven through the lens of contemporary luxury — thread by thread, fold by fold.
            </p>
            <a
              href="#collections"
              className="group inline-flex items-center gap-4 self-start animate-fade-in opacity-0"
              style={{ animationDelay: "1.6s" }}
              data-cursor="hover"
            >
              <span className="font-mono-luxe text-ivory">Discover the House</span>
              <span className="relative h-px w-16 bg-ivory/40">
                <span className="absolute inset-y-0 left-0 bg-gold transition-all duration-700 group-hover:w-full" style={{ width: "30%" }} />
              </span>
            </a>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 z-10 -translate-x-1/2 animate-fade-in opacity-0" style={{ animationDelay: "2s" }}>
        <div className="flex flex-col items-center gap-3">
          <span className="font-mono-luxe text-ivory/60">Scroll</span>
          <span className="block h-12 w-px overflow-hidden bg-ivory/20">
            <span className="block h-1/2 w-full origin-top animate-pulse bg-gold" />
          </span>
        </div>
      </div>
    </section>
  );
};
