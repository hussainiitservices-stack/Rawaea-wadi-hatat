export const Marquee = () => {
  const items = ["Silk", "Cashmere", "Hand-Woven", "Gold Thread", "Bespoke", "Heritage", "Oman", "Maison"];
  return (
    <section className="relative border-y border-ink/10 bg-ivory py-8 overflow-hidden">
      <div className="flex whitespace-nowrap">
        <div className="flex shrink-0 animate-[drift_40s_linear_infinite] gap-16 pr-16" style={{ animation: "marquee 35s linear infinite" }}>
          {[...items, ...items, ...items].map((it, i) => (
            <span key={i} className="font-display text-5xl text-ink/80 md:text-7xl">
              {it} <span className="gold-text font-serif-italic">·</span>
            </span>
          ))}
        </div>
      </div>
      <style>{`
        @keyframes marquee {
          from { transform: translateX(0); }
          to { transform: translateX(-33.333%); }
        }
      `}</style>
    </section>
  );
};
