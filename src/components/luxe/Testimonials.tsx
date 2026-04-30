import { useEffect, useState } from "react";
import { useReveal } from "@/hooks/useReveal";

const quotes = [
  {
    q: "A house that treats cloth the way a poet treats silence — with reverence.",
    a: "Vogue Arabia",
  },
  {
    q: "There is, finally, an Omani textile maison worth every word of the word ‘luxury’.",
    a: "Monocle",
  },
  {
    q: "RAWAEA understands that craftsmanship is, above all, a refusal of the easy answer.",
    a: "Wallpaper*",
  },
];

export const Testimonials = () => {
  const [i, setI] = useState(0);
  const { ref, visible } = useReveal<HTMLDivElement>();

  useEffect(() => {
    const id = setInterval(() => setI((v) => (v + 1) % quotes.length), 6000);
    return () => clearInterval(id);
  }, []);

  return (
    <section ref={ref} className="relative bg-sand/40 py-32 md:py-48">
      <div className="container">
        <p className={`font-mono-luxe text-center text-gold-deep transition-opacity duration-700 ${visible ? "opacity-100" : "opacity-0"}`}>
          ⎯⎯ In Their Words
        </p>
        <div className="relative mt-16 mx-auto max-w-4xl text-center min-h-[280px]">
          {quotes.map((Q, idx) => (
            <blockquote
              key={idx}
              className={`absolute inset-0 transition-all duration-1000 ${
                idx === i ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6 pointer-events-none"
              }`}
            >
              <p className="font-display text-3xl leading-[1.2] tracking-tight text-ink md:text-5xl">
                <span className="font-serif-italic gold-text">“</span>
                {Q.q}
                <span className="font-serif-italic gold-text">”</span>
              </p>
              <footer className="mt-10 font-mono-luxe text-ink/60">— {Q.a}</footer>
            </blockquote>
          ))}
        </div>
        <div className="mt-12 flex items-center justify-center gap-2">
          {quotes.map((_, idx) => (
            <button
              key={idx}
              onClick={() => setI(idx)}
              aria-label={`Quote ${idx + 1}`}
              data-cursor="hover"
              className={`h-px transition-all duration-500 ${idx === i ? "w-12 bg-gold" : "w-6 bg-ink/20"}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};
