import { useReveal } from "@/hooks/useReveal";
import craftWeaving from "@/assets/craft-weaving.jpg";

const stages = [
  { n: "I", t: "The Loom", d: "Each warp is hand-tensioned across cedar beams aged in the Wadi Hatat workshop." },
  { n: "II", t: "The Weave", d: "Silk and cashmere are drawn together at fewer than two meters per day. We do not hurry." },
  { n: "III", t: "The Gold", d: "Twenty-two carat thread set by a single artisan, in light filtered through linen scrims." },
  { n: "IV", t: "The Finish", d: "Pressed by stone, signed in graphite, numbered, and entered into the house ledger." },
];

export const Craft = () => {
  const { ref, visible } = useReveal<HTMLDivElement>();

  return (
    <section id="craft" className="relative overflow-hidden bg-ink py-32 text-ivory md:py-48">
      {/* Background fabric */}
      <div className="absolute inset-0 opacity-30">
        <img src={craftWeaving} alt="" aria-hidden className="h-full w-full object-cover animate-fabric-wave" loading="lazy" />
        <div className="absolute inset-0 bg-gradient-to-r from-ink via-ink/70 to-ink/40" />
      </div>

      <div ref={ref} className="container relative">
        <div className="max-w-3xl">
          <p className={`font-mono-luxe text-gold transition-opacity duration-700 ${visible ? "opacity-100" : "opacity-0"}`}>
            ⎯⎯ The Craft
          </p>
          <h2
            className={`mt-6 font-display text-5xl leading-[0.95] tracking-tight md:text-8xl transition-all duration-1000 ${
              visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
            style={{ transitionDelay: "0.15s" }}
          >
            Slowness as a <span className="font-serif-italic gold-text">discipline.</span>
          </h2>
          <p
            className={`mt-8 max-w-xl leading-relaxed text-ivory/70 transition-all duration-1000 ${
              visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
            style={{ transitionDelay: "0.3s" }}
          >
            We measure progress in millimeters, not deadlines. Four stages, four hands, often four months for a single bolt of finished cloth.
          </p>
        </div>

        <div className="mt-24 grid grid-cols-1 gap-px bg-ivory/10 md:grid-cols-4">
          {stages.map((s, i) => {
            return (
              <div
                key={s.n}
                className={`group relative bg-ink p-8 transition-all duration-1000 ${
                  visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"
                }`}
                style={{ transitionDelay: `${0.4 + i * 0.12}s` }}
              >
                <div className="flex items-baseline justify-between border-b border-ivory/15 pb-4">
                  <span className="font-display text-5xl gold-text">{s.n}</span>
                  <span className="font-mono-luxe text-ivory/40">Stage</span>
                </div>
                <h3 className="mt-6 font-display text-3xl tracking-tight">{s.t}</h3>
                <p className="mt-4 text-sm leading-relaxed text-ivory/60">{s.d}</p>
                <div className="absolute inset-x-0 bottom-0 h-px origin-left scale-x-0 bg-gold transition-transform duration-700 group-hover:scale-x-100" />
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
