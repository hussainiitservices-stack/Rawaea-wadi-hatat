import { useReveal } from "@/hooks/useReveal";
import { useState } from "react";
import { toast } from "sonner";

export const Contact = () => {
  const { ref, visible } = useReveal<HTMLDivElement>();
  const [sending, setSending] = useState(false);

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSending(true);
    setTimeout(() => {
      setSending(false);
      toast.success("Inquiry received — our atelier will respond within 48 hours.");
      (e.target as HTMLFormElement).reset();
    }, 900);
  };

  return (
    <section id="contact" ref={ref} className="relative overflow-hidden bg-ink py-32 text-ivory md:py-48">
      {/* Gold orb */}
      <div
        className="absolute -right-40 top-1/2 -translate-y-1/2 h-[600px] w-[600px] rounded-full opacity-25 blur-3xl animate-drift"
        style={{ background: "radial-gradient(circle, hsl(var(--gold)) 0%, transparent 70%)" }}
      />

      <div className="container relative grid grid-cols-1 gap-16 md:grid-cols-12">
        <div className="md:col-span-5">
          <p className={`font-mono-luxe text-gold transition-opacity duration-700 ${visible ? "opacity-100" : "opacity-0"}`}>
            ⎯⎯ Atelier Inquiries
          </p>
          <h2
            className={`mt-6 font-display text-5xl leading-[0.95] tracking-tight md:text-7xl transition-all duration-1000 ${
              visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
            style={{ transitionDelay: "0.15s" }}
          >
            Begin a <span className="font-serif-italic gold-text">commission.</span>
          </h2>
          <p
            className={`mt-8 max-w-md leading-relaxed text-ivory/70 transition-all duration-1000 ${
              visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
            style={{ transitionDelay: "0.3s" }}
          >
            Bespoke textiles, private orders, and editorial collaborations are welcomed. Each request is reviewed personally by our atelier director.
          </p>

          <dl className="mt-16 space-y-6">
            {[
              ["Atelier", "Wadi Hatat, Muscat — Sultanate of Oman"],
              ["Studio", "+968 24 ▪▪▪ ▪▪▪"],
              ["Email", "atelier@rawaea.om"],
            ].map(([k, v]) => (
              <div key={k} className="flex justify-between gap-6 border-b border-ivory/15 pb-4">
                <dt className="font-mono-luxe text-ivory/50">{k}</dt>
                <dd className="text-right text-ivory">{v}</dd>
              </div>
            ))}
          </dl>
        </div>

        <form
          onSubmit={onSubmit}
          className={`md:col-span-7 md:pl-12 transition-all duration-1000 ${
            visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
          style={{ transitionDelay: "0.4s" }}
        >
          <div className="grid grid-cols-1 gap-10 md:grid-cols-2">
            {[
              { id: "name", label: "Your name", type: "text" },
              { id: "email", label: "Email", type: "email" },
            ].map((f) => (
              <div key={f.id} className="group relative">
                <label className="font-mono-luxe text-ivory/50">{f.label}</label>
                <input
                  required
                  type={f.type}
                  name={f.id}
                  className="mt-3 w-full border-b border-ivory/20 bg-transparent pb-3 text-lg text-ivory outline-none transition-colors focus:border-gold"
                />
              </div>
            ))}
          </div>

          <div className="mt-10">
            <label className="font-mono-luxe text-ivory/50">Interest</label>
            <select
              name="interest"
              defaultValue="bespoke"
              className="mt-3 w-full border-b border-ivory/20 bg-transparent pb-3 text-lg text-ivory outline-none focus:border-gold"
            >
              <option className="bg-ink" value="bespoke">Bespoke commission</option>
              <option className="bg-ink" value="premium">Premium fabrics</option>
              <option className="bg-ink" value="editorial">Editorial collaboration</option>
              <option className="bg-ink" value="private">Private appointment</option>
            </select>
          </div>

          <div className="mt-10">
            <label className="font-mono-luxe text-ivory/50">Tell us about your project</label>
            <textarea
              required
              rows={4}
              name="message"
              className="mt-3 w-full resize-none border-b border-ivory/20 bg-transparent pb-3 text-lg text-ivory outline-none focus:border-gold"
            />
          </div>

          <button
            type="submit"
            disabled={sending}
            data-cursor="hover"
            className="group relative mt-12 inline-flex items-center gap-5 overflow-hidden border border-gold px-8 py-5 transition-colors duration-700 hover:bg-gold disabled:opacity-50"
          >
            <span className="absolute inset-0 -translate-x-full bg-gradient-gold transition-transform duration-700 group-hover:translate-x-0" />
            <span className="relative font-mono-luxe text-ivory transition-colors group-hover:text-ink">
              {sending ? "Sending…" : "Submit inquiry"}
            </span>
            <span className="relative h-px w-10 bg-ivory transition-colors group-hover:bg-ink" />
          </button>
        </form>
      </div>
    </section>
  );
};
