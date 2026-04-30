import c1 from "@/assets/collection-1.jpg";
import c2 from "@/assets/collection-2.jpg";
import c3 from "@/assets/collection-3.jpg";
import c4 from "@/assets/collection-4.jpg";
import heroFabric from "@/assets/hero-fabric.jpg";
import craftWeaving from "@/assets/craft-weaving.jpg";
import craftHands from "@/assets/craft-hands.jpg";

export type Collection = {
  slug: string;
  num: string;
  name: string;
  italicWord: string;
  cat: string;
  year: string;
  cover: string;
  gallery: string[];
  tagline: string;
  story: string[];
  specs: { label: string; value: string }[];
  palette: string[];
};

export const collections: Collection[] = [
  {
    slug: "lumiere-divoire",
    num: "01",
    name: "Lumière d'Ivoire",
    italicWord: "Ivoire",
    cat: "Premium Silk",
    year: "FW · XXVI",
    cover: c1,
    gallery: [c1, heroFabric, c4],
    tagline: "A whisper of silk, drawn fine as morning light.",
    story: [
      "Lumière d'Ivoire is the house's quietest study — an unbroken expanse of mulberry silk, dressed only by a single hand-set gold border drawn at twenty-two carats.",
      "Woven in a slow plain weave at fewer than two meters per day, the cloth is finished in stone-press and rested for fourteen days before it is signed.",
    ],
    specs: [
      { label: "Composition", value: "100% Mulberry Silk" },
      { label: "Weave", value: "Plain · 24/26 momme" },
      { label: "Width", value: "140 cm" },
      { label: "Edge", value: "Hand-set 22ct gold border" },
      { label: "Origin", value: "Wadi Hatat Atelier, Oman" },
      { label: "Lead time", value: "10 — 12 weeks" },
    ],
    palette: ["#F5F2EC", "#E8DDC9", "#C8A96A"],
  },
  {
    slug: "sable-de-hatat",
    num: "02",
    name: "Sable de Hatat",
    italicWord: "Hatat",
    cat: "Heritage Sand",
    year: "FW · XXVI",
    cover: c2,
    gallery: [c2, heroFabric, craftWeaving],
    tagline: "The colour of the valley at last light.",
    story: [
      "Sable de Hatat is dyed across nine successive baths in indigenous madder and walnut hull, building a depth of warmth that no synthetic process can reproduce.",
      "Its hand falls heavy and assured — a textile made for long evenings, slow rooms, and architecture that respects its weight.",
    ],
    specs: [
      { label: "Composition", value: "70% Silk · 30% Wool" },
      { label: "Weave", value: "Twill · 4-harness" },
      { label: "Width", value: "150 cm" },
      { label: "Dye", value: "9-bath natural · madder + walnut" },
      { label: "Origin", value: "Wadi Hatat Atelier, Oman" },
      { label: "Lead time", value: "12 — 14 weeks" },
    ],
    palette: ["#3E2418", "#8C5A3A", "#D6C6B8"],
  },
  {
    slug: "nuit-dor",
    num: "03",
    name: "Nuit d'Or",
    italicWord: "Or",
    cat: "Black & Gold",
    year: "Atelier",
    cover: c3,
    gallery: [c3, heroFabric, craftHands],
    tagline: "Arabesque in twenty-two carats, set by a single hand.",
    story: [
      "Our most ornamented work. Each panel of Nuit d'Or carries between 38,000 and 52,000 individual gold stitches, set across a deep matte silk ground.",
      "The pattern is drawn from a 19th-century Omani manuscript held in the family archive, redrawn three times before the first thread was permitted.",
    ],
    specs: [
      { label: "Composition", value: "Silk ground · 22ct gold thread" },
      { label: "Weave", value: "Satin ground, hand embroidery" },
      { label: "Width", value: "120 cm" },
      { label: "Stitches / panel", value: "38,000 — 52,000" },
      { label: "Origin", value: "Wadi Hatat Atelier, Oman" },
      { label: "Lead time", value: "20 — 24 weeks" },
    ],
    palette: ["#0A0A0A", "#1A1410", "#C8A96A"],
  },
  {
    slug: "souffle-cachemire",
    num: "04",
    name: "Souffle Cachemire",
    italicWord: "Cachemire",
    cat: "Bespoke Cashmere",
    year: "Custom",
    cover: c4,
    gallery: [c4, heroFabric, c1],
    tagline: "Cashmere drawn fine as breath.",
    story: [
      "Sourced from a single herd in the high pastures of Inner Mongolia, the under-fleece is hand-combed once each spring and shipped to Muscat under seal.",
      "We weave it in a 14-micron yarn — at the absolute edge of what a loom will accept — for a cloth that warms without weight.",
    ],
    specs: [
      { label: "Composition", value: "100% Cashmere · 14μ" },
      { label: "Weave", value: "Twill · brushed finish" },
      { label: "Width", value: "150 cm" },
      { label: "Source", value: "Single-herd, Inner Mongolia" },
      { label: "Origin", value: "Woven · Wadi Hatat, Oman" },
      { label: "Lead time", value: "14 — 16 weeks" },
    ],
    palette: ["#F5F2EC", "#E6D9C2", "#B89B75"],
  },
];

export const getCollection = (slug?: string) =>
  collections.find((c) => c.slug === slug);
