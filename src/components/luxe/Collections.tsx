import { useReveal } from "@/hooks/useReveal";
import { Link } from "react-router-dom";
import { collections } from "@/data/collections";

const Card = ({ item, index }: { item: typeof collections[0]; index: number }) => {
  const { ref, visible } = useReveal<HTMLDivElement>(0.2);
  const flipped = index % 2 === 1;

  return (
    <div ref={ref} className="group relative grid grid-cols-1 items-center gap-8 md:grid-cols-12 md:gap-16">
      <Link
        to={`/collection/${item.slug}`}
        data-cursor="hover"
        className={`relative md:col-span-7 ${flipped ? "md:order-2" : ""} ${
          visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-16"
        } transition-all duration-[1400ms]`}
        style={{ transitionTimingFunction: "cubic-bezier(0.16, 1, 0.3, 1)" }}
      >
        <div className="relative aspect-[4/5] overflow-hidden bg-sand grain light-sweep">
          <img
            src={item.cover}
            alt={item.name}
            loading="lazy"
            width={1024}
            height={1280}
            className="h-full w-full object-cover transition-transform duration-[2000ms] group-hover:scale-110"
            style={{ transitionTimingFunction: "cubic-bezier(0.16, 1, 0.3, 1)" }}
          />
          <div className="absolute inset-0 bg-ink/0 transition-colors duration-700 group-hover:bg-ink/15" />
          <div className="absolute bottom-6 left-6 right-6 flex items-end justify-between opacity-0 translate-y-3 transition-all duration-700 group-hover:opacity-100 group-hover:translate-y-0">
            <span className="font-mono-luxe rounded-sm bg-ivory/95 px-3 py-1.5 text-ink">View collection</span>
            <span className="font-mono-luxe text-ivory">{item.year}</span>
          </div>
        </div>
      </Link>

      <div className={`md:col-span-5 ${flipped ? "md:order-1 md:text-right" : ""}`}>
        <div
          className={`transition-all duration-1000 ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
          style={{ transitionDelay: "0.2s" }}
        >
          <p className="font-mono-luxe text-gold-deep">⎯⎯ {item.num} / {String(collections.length).padStart(2, "0")}</p>
          <h3 className="mt-4 font-display text-5xl leading-[1] tracking-tight text-ink md:text-6xl">
            {item.name.replace(item.italicWord, "").trim()}{" "}
            <span className="font-serif-italic gold-text">{item.italicWord}</span>
          </h3>
          <p className="mt-6 font-mono-luxe text-ink/50">{item.cat}</p>
          <p className="mt-6 max-w-md leading-relaxed text-ink/75">{item.tagline}</p>
          <Link
            to={`/collection/${item.slug}`}
            className="lux-link mt-8 inline-block font-mono-luxe text-ink"
            data-cursor="hover"
          >
            Explore the piece →
          </Link>
        </div>
      </div>
    </div>
  );
};

export const Collections = () => {
  return (
    <section id="collections" className="relative bg-gradient-warm py-32 md:py-48">
      <div className="container">
        <div className="mb-20 flex flex-col items-start justify-between gap-6 md:mb-32 md:flex-row md:items-end">
          <div>
            <p className="font-mono-luxe text-gold-deep">⎯⎯ Maison Collections</p>
            <h2 className="mt-4 font-display text-6xl leading-[0.95] tracking-tight text-ink md:text-8xl">
              Four chapters,<br />
              <span className="font-serif-italic gold-text">one thread.</span>
            </h2>
          </div>
          <p className="max-w-sm text-ink/70">
            Premium fabrics, custom textiles and bespoke commissions — drawn from a single, uncompromising standard.
          </p>
        </div>

        <div className="space-y-32 md:space-y-48">
          {collections.map((it, i) => (
            <Card key={it.slug} item={it} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
};
