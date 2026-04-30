import { Link, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { collections, getCollection } from "@/data/collections";
import { Cursor } from "@/components/luxe/Cursor";
import { Nav } from "@/components/luxe/Nav";
import { Footer } from "@/components/luxe/Footer";
import { useReveal } from "@/hooks/useReveal";
import { toast } from "sonner";
import NotFound from "./NotFound";

const splitWords = (text: string, base = 0.2) =>
  text.split(" ").map((w, i) => (
    <span key={i} className="reveal-mask mr-[0.25em]">
      <span style={{ animationDelay: `${base + i * 0.08}s` }}>{w}</span>
    </span>
  ));

const RequestModal = ({
  open,
  onClose,
  collectionName,
}: {
  open: boolean;
  onClose: () => void;
  collectionName: string;
}) => {
  const [sending, setSending] = useState(false);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSending(true);
    setTimeout(() => {
      setSending(false);
      toast.success(`Availability request received for ${collectionName} — our atelier will respond within 48 hours.`);
      onClose();
    }, 900);
  };

  return (
    <div
      className={`fixed inset-0 z-[80] transition-all duration-700 ${
        open ? "opacity-100" : "pointer-events-none opacity-0"
      }`}
    >
      <div className="absolute inset-0 bg-ink/85 backdrop-blur-sm" onClick={onClose} />
      <div
        className={`absolute right-0 top-0 h-full w-full max-w-xl overflow-y-auto bg-ivory p-10 transition-transform duration-700 md:p-14 ${
          open ? "translate-x-0" : "translate-x-full"
        }`}
        style={{ transitionTimingFunction: "cubic-bezier(0.16, 1, 0.3, 1)" }}
      >
        <button onClick={onClose} className="font-mono-luxe text-ink/60 hover:text-ink" data-cursor="hover">
          ✕ Close
        </button>
        <p className="mt-12 font-mono-luxe text-gold-deep">⎯⎯ Request Availability</p>
        <h3 className="mt-4 font-display text-4xl leading-[1] tracking-tight text-ink md:text-5xl">
          {collectionName}
        </h3>
        <p className="mt-4 max-w-md text-ink/70">
          Production is allocated by reservation. Share a few details and our atelier director will respond personally with current availability and lead times.
        </p>

        <form onSubmit={onSubmit} className="mt-10 space-y-8">
          {[
            { id: "name", label: "Full name", type: "text" },
            { id: "email", label: "Email", type: "email" },
            { id: "qty", label: "Desired quantity (m)", type: "text" },
          ].map((f) => (
            <div key={f.id}>
              <label className="font-mono-luxe text-ink/50">{f.label}</label>
              <input
                required
                type={f.type}
                name={f.id}
                className="mt-2 w-full border-b border-ink/20 bg-transparent pb-2 text-lg text-ink outline-none transition-colors focus:border-gold"
              />
            </div>
          ))}
          <div>
            <label className="font-mono-luxe text-ink/50">Notes</label>
            <textarea
              rows={3}
              name="notes"
              className="mt-2 w-full resize-none border-b border-ink/20 bg-transparent pb-2 text-lg text-ink outline-none focus:border-gold"
            />
          </div>

          <button
            type="submit"
            disabled={sending}
            data-cursor="hover"
            className="group relative inline-flex w-full items-center justify-between gap-5 overflow-hidden border border-ink bg-ink px-8 py-5 transition-colors duration-700 disabled:opacity-50"
          >
            <span className="absolute inset-0 -translate-x-full bg-gradient-gold transition-transform duration-700 group-hover:translate-x-0" />
            <span className="relative font-mono-luxe text-ivory transition-colors group-hover:text-ink">
              {sending ? "Submitting…" : "Submit request"}
            </span>
            <span className="relative h-px w-10 bg-ivory transition-colors group-hover:bg-ink" />
          </button>
        </form>
      </div>
    </div>
  );
};

const SpecRow = ({ label, value, delay }: { label: string; value: string; delay: number }) => {
  const { ref, visible } = useReveal<HTMLDivElement>(0.2);
  return (
    <div
      ref={ref}
      className={`flex items-baseline justify-between gap-6 border-b border-ink/10 py-5 transition-all duration-1000 ${
        visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
      }`}
      style={{ transitionDelay: `${delay}s` }}
    >
      <dt className="font-mono-luxe text-ink/50">{label}</dt>
      <dd className="text-right text-ink">{value}</dd>
    </div>
  );
};

const GalleryImage = ({ src, alt, ratio }: { src: string; alt: string; ratio: string }) => {
  const { ref, visible } = useReveal<HTMLDivElement>(0.15);
  return (
    <div
      ref={ref}
      className={`relative overflow-hidden grain bg-sand transition-all duration-[1400ms] ${ratio} ${
        visible ? "opacity-100 translate-y-0 scale-100" : "opacity-0 translate-y-12 scale-[0.97]"
      }`}
      style={{ transitionTimingFunction: "cubic-bezier(0.16, 1, 0.3, 1)" }}
    >
      <img src={src} alt={alt} loading="lazy" className="h-full w-full object-cover" />
    </div>
  );
};

const CollectionDetail = () => {
  const { slug } = useParams();
  const item = getCollection(slug);
  const [modalOpen, setModalOpen] = useState(false);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "instant" as ScrollBehavior });
  }, [slug]);

  if (!item) return <NotFound />;

  const idx = collections.findIndex((c) => c.slug === item.slug);
  const next = collections[(idx + 1) % collections.length];

  return (
    <main className="relative overflow-x-hidden bg-ivory">
      <Cursor />
      <Nav />

      {/* Hero */}
      <section className="relative h-[100vh] min-h-[680px] w-full overflow-hidden bg-ink">
        <img
          src={item.cover}
          alt={item.name}
          className="absolute inset-0 h-full w-full object-cover animate-ken-burns"
          width={1024}
          height={1280}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-ink/30 via-ink/30 to-ink/85" />

        <div className="container relative z-10 flex h-full flex-col justify-between pt-32 pb-16">
          <div className="flex items-center justify-between text-ivory/80 animate-fade-in opacity-0" style={{ animationDelay: "0.2s" }}>
            <Link to="/#collections" className="lux-link font-mono-luxe" data-cursor="hover">
              ← Back to collections
            </Link>
            <span className="font-mono-luxe">{item.num} / {String(collections.length).padStart(2, "0")}</span>
          </div>

          <div className="max-w-5xl">
            <p className="font-mono-luxe mb-6 text-gold animate-fade-in opacity-0" style={{ animationDelay: "0.3s" }}>
              ⎯⎯ {item.cat} · {item.year}
            </p>
            <h1 className="font-display text-[clamp(3rem,9vw,9rem)] leading-[0.92] tracking-[-0.03em] text-ivory">
              <span className="block">{splitWords(item.name.replace(item.italicWord, "").trim(), 0.3)}</span>
              <span className="reveal-mask">
                <span className="font-serif-italic gold-text" style={{ animationDelay: "0.9s" }}>
                  {item.italicWord}.
                </span>
              </span>
            </h1>
            <p
              className="mt-10 max-w-xl text-lg leading-relaxed text-ivory/80 animate-fade-in opacity-0"
              style={{ animationDelay: "1.4s" }}
            >
              {item.tagline}
            </p>
          </div>
        </div>
      </section>

      {/* Story + Specs */}
      <section className="relative bg-ivory py-32 md:py-48">
        <div className="container grid grid-cols-1 gap-16 md:grid-cols-12">
          <div className="md:col-span-7">
            <p className="font-mono-luxe text-gold-deep">⎯⎯ The Piece</p>
            <h2 className="mt-6 font-display text-4xl leading-[1.05] tracking-tight text-ink md:text-6xl">
              A textile, <span className="font-serif-italic gold-text">considered.</span>
            </h2>
            <div className="mt-12 space-y-8 text-lg leading-[1.7] text-ink/80">
              {item.story.map((p, i) => (
                <p key={i}>{p}</p>
              ))}
            </div>

            <div className="mt-16">
              <p className="font-mono-luxe text-ink/50">Palette</p>
              <div className="mt-4 flex gap-3">
                {item.palette.map((c, i) => (
                  <div key={i} className="flex flex-col items-start gap-2">
                    <span
                      className="block h-16 w-16 grain border border-ink/10"
                      style={{ background: c }}
                    />
                    <span className="font-mono-luxe text-ink/40">{c}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <aside className="md:col-span-5 md:pl-8">
            <div className="md:sticky md:top-32">
              <p className="font-mono-luxe text-gold-deep">⎯⎯ Specifications</p>
              <dl className="mt-8">
                {item.specs.map((s, i) => (
                  <SpecRow key={s.label} label={s.label} value={s.value} delay={0.1 + i * 0.05} />
                ))}
              </dl>

              <button
                onClick={() => setModalOpen(true)}
                data-cursor="hover"
                className="group relative mt-10 inline-flex w-full items-center justify-between gap-5 overflow-hidden border border-ink bg-ink px-8 py-5 transition-colors duration-700"
              >
                <span className="absolute inset-0 -translate-x-full bg-gradient-gold transition-transform duration-700 group-hover:translate-x-0" />
                <span className="relative font-mono-luxe text-ivory transition-colors group-hover:text-ink">
                  Request availability
                </span>
                <span className="relative h-px w-10 bg-ivory transition-colors group-hover:bg-ink" />
              </button>

              <p className="mt-4 text-sm leading-relaxed text-ink/50">
                Production is reserved by enquiry. Lead times reflect current atelier capacity.
              </p>
            </div>
          </aside>
        </div>
      </section>

      {/* Gallery */}
      <section className="relative bg-gradient-warm py-32 md:py-40">
        <div className="container">
          <p className="font-mono-luxe text-gold-deep">⎯⎯ The Cloth, Up Close</p>
          <h2 className="mt-6 font-display text-4xl leading-[1.05] tracking-tight text-ink md:text-6xl">
            In <span className="font-serif-italic gold-text">detail.</span>
          </h2>

          <div className="mt-16 grid grid-cols-1 gap-6 md:grid-cols-12 md:gap-8">
            <div className="md:col-span-7">
              <GalleryImage src={item.gallery[0]} alt={`${item.name} — primary`} ratio="aspect-[4/5]" />
            </div>
            <div className="md:col-span-5 flex flex-col gap-6 md:gap-8">
              <GalleryImage src={item.gallery[1]} alt={`${item.name} — texture`} ratio="aspect-[4/3]" />
              <GalleryImage src={item.gallery[2]} alt={`${item.name} — detail`} ratio="aspect-square" />
            </div>
          </div>
        </div>
      </section>

      {/* Next collection */}
      <section className="relative overflow-hidden bg-ink py-24 text-ivory">
        <Link to={`/collection/${next.slug}`} className="group block" data-cursor="hover">
          <div className="container flex flex-col items-start justify-between gap-8 md:flex-row md:items-center">
            <div>
              <p className="font-mono-luxe text-ivory/50">Next chapter — {next.num}</p>
              <h3 className="mt-3 font-display text-5xl leading-[1] tracking-tight md:text-7xl">
                {next.name.replace(next.italicWord, "").trim()}{" "}
                <span className="font-serif-italic gold-text">{next.italicWord}</span>
              </h3>
            </div>
            <span className="font-mono-luxe inline-flex items-center gap-4 text-ivory transition-all group-hover:gap-8">
              Continue <span className="h-px w-16 bg-gold" />→
            </span>
          </div>
        </Link>
      </section>

      <Footer />

      <RequestModal
        open={modalOpen}
        onClose={() => setModalOpen(false)}
        collectionName={item.name}
      />
    </main>
  );
};

export default CollectionDetail;
