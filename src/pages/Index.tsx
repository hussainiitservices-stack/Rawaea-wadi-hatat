import { Cursor } from "@/components/luxe/Cursor";
import { Nav } from "@/components/luxe/Nav";
import { Hero } from "@/components/luxe/Hero";
import { Marquee } from "@/components/luxe/Marquee";
import { About } from "@/components/luxe/About";
import { Collections } from "@/components/luxe/Collections";
import { Craft } from "@/components/luxe/Craft";
import { Testimonials } from "@/components/luxe/Testimonials";
import { Contact } from "@/components/luxe/Contact";
import { Footer } from "@/components/luxe/Footer";

const Index = () => {
  return (
    <main className="relative overflow-x-hidden bg-ivory">
      <Cursor />
      <Nav />
      <Hero />
      <Marquee />
      <About />
      <Collections />
      <Craft />
      <Testimonials />
      <Contact />
      <Footer />
    </main>
  );
};

export default Index;
