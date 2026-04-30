import { useReveal } from "@/hooks/useReveal";
import craftHands from "@/assets/craft-hands.jpg";

export const About = () => {
  const { ref, visible } = useReveal<HTMLDivElement>();

  return (
    <section id="about" ref={ref} className="relative bg-ivory py-32 md:py-48">
      <div className="container grid grid-cols-1 gap-16 md:grid-cols-12 md:gap-12">
        <div className="md:col-span-5 md:sticky md:top-32 md:self-start">
          <div
            className={`relative aspect-[4/5] overflow-hidden grain transition-all duration-[1500ms] ${
              visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"
            }`}
          >
            <img
              src={craftHands}
              alt="Artisan hands weaving textile on a traditional loom"
              loading="lazy"
              width={1280}
              height={1600}
              className="h-full w-full object-cover"
            />
          </div>
          <p className="mt-6 font-mono-luxe text-ink/50">— Master weaver, Wadi Hatat workshop</p>
        </div>

        <div className="md:col-span-7 md:pl-8">
          <p
            className={`font-mono-luxe mb-8 text-gold-deep transition-all duration-700 ${
              visible ? "opacity-100" : "opacity-0"
            }`}
          >
            ⎯⎯ The House
          </p>
          <h2
            className={`font-display text-5xl leading-[1] tracking-tight text-ink md:text-7xl transition-all duration-1000 ${
              visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
            style={{ transitionDelay: "0.15s" }}
          >
            Heritage<br />
            <span className="font-serif-italic gold-text">rewoven</span> for<br />
            the modern world.
          </h2>

          <div className="mt-12 grid grid-cols-1 gap-10 text-ink/80 sm:grid-cols-2">
            <p
              className={`leading-[1.7] transition-all duration-1000 ${
                visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
              }`}
              style={{ transitionDelay: "0.4s" }}
            >
              Born in the quiet valleys of Wadi Hatat, our atelier draws on generations of Omani textile mastery — where every weft carries the memory of caravans, oases, and the slow hush of desert evenings.
            </p>
            <p
              className={`leading-[1.7] transition-all duration-1000 ${
                visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
              }`}
              style={{ transitionDelay: "0.55s" }}
            >
              We work in small batches, with a singular obsession: textile that feels inevitable. Cashmere drawn fine as breath. Silk so dense it pours. Gold thread set by hand, one stitch at a time.
            </p>
          </div>

          <div className="mt-16 grid grid-cols-3 gap-6 border-t border-ink/10 pt-10">
            {[
              { k: "Est.", v: "MMXIV" },
              { k: "Atelier", v: "Muscat" },
              { k: "Pieces / yr", v: "≈ 240" },
            ].map((s, i) => (
              <div
                key={s.k}
                className={`transition-all duration-1000 ${
                  visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
                }`}
                style={{ transitionDelay: `${0.7 + i * 0.1}s` }}
              >
                <p className="font-mono-luxe text-ink/40">{s.k}</p>
                <p className="font-display text-3xl text-ink md:text-4xl">{s.v}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
