export const Footer = () => {
  return (
    <footer className="border-t border-ivory/10 bg-ink py-12 text-ivory/50">
      <div className="container flex flex-col items-start justify-between gap-8 md:flex-row md:items-center">
        <div>
          <p className="font-display text-2xl tracking-[0.18em] text-ivory">RAWAEA</p>
          <p className="font-mono-luxe mt-1">Wadi Hatat · Sultanate of Oman</p>
        </div>
        <div className="flex flex-wrap gap-6 font-mono-luxe">
          <a href="#" className="lux-link">Instagram</a>
          <a href="#" className="lux-link">Pinterest</a>
          <a href="#" className="lux-link">Journal</a>
          <a href="#" className="lux-link">Press</a>
        </div>
        <p className="font-mono-luxe">© MMXXVI · All rights reserved</p>
      </div>
    </footer>
  );
};
