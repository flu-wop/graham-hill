"use client";

import { motion } from "framer-motion";
import { Download, ArrowRight, FileText } from "lucide-react";
import Link from "next/link";

const fadeUp = {
  hidden:  { opacity: 0, y: 24 },
  visible: (i = 0) => ({
    opacity: 1, y: 0,
    transition: { delay: i * 0.1, duration: 0.85, ease: [0.16, 1, 0.3, 1] },
  }),
};

const assets = [
  {
    category: "Electronic Press Kit",
    items: [
      { name: "Full EPK (PDF)",            type: "PDF",  href: "#" },
      { name: "Artist Bio — Long",          type: "DOC",  href: "#" },
      { name: "Artist Bio — Short",         type: "DOC",  href: "#" },
      { name: "Press Photo — Hi-Res",       type: "JPG",  href: "#" },
      { name: "Album Art — Hi-Res",         type: "PNG",  href: "#" },
    ],
  },
  {
    category: "Sync Assets",
    items: [
      { name: "Sync Pitch Deck",            type: "PDF",  href: "#" },
      { name: "One-Sheet — Full Album",     type: "PDF",  href: "#" },
      { name: "Mood Film — Alternative",    type: "MP4",  href: "#" },
      { name: "Lyric Films (Per Track)",    type: "ZIP",  href: "#" },
    ],
  },
  {
    category: "Press & Media",
    items: [
      { name: "Press Release",              type: "PDF",  href: "#" },
      { name: "Fact Sheet",                 type: "PDF",  href: "#" },
    ],
  },
];

export default function PressPage() {
  return (
    <>
      {/* Hero */}
      <section className="grain vignette relative pt-40 pb-24 px-6 overflow-hidden">
        <div className="absolute left-0 top-0 bottom-0 w-1 bg-prairie/50" />
        <div className="max-w-5xl mx-auto relative z-10">
          <motion.p
            variants={fadeUp} custom={0} initial="hidden" animate="visible"
            className="chapter-label mb-6"
          >Press & EPK</motion.p>
          <motion.h1
            variants={fadeUp} custom={1} initial="hidden" animate="visible"
            className="headline text-[clamp(3rem,7vw,6rem)] text-cream leading-none"
          >
            For Music Supervisors
            <br />
            <span className="italic text-gold">& Press</span>
          </motion.h1>
          <motion.p
            variants={fadeUp} custom={2} initial="hidden" animate="visible"
            className="font-sans text-sm text-mist mt-5 font-light max-w-lg leading-8"
          >
            All assets, sync details, and contact information for licensing
            inquiries, editorial coverage, and playlist placement.
          </motion.p>
        </div>
      </section>

      {/* Sync pointer */}
      <section className="grain bg-charcoal py-20 px-6">
        <div className="max-w-5xl mx-auto flex flex-col md:flex-row items-start md:items-center justify-between gap-8">
          <div className="flex flex-col gap-3">
            <p className="chapter-label">Music Supervisors</p>
            <h2 className="headline text-3xl text-cream">Sync details live here.</h2>
            <p className="font-sans text-sm text-mist font-light leading-8 max-w-md">
              Full sync snapshot, one-sheet download, and licensing contact
              are on the dedicated Sync Licensing page.
            </p>
          </div>
          <Link
            href="/sync"
            className="group flex items-center gap-2.5 bg-prairie hover:bg-prairie-dark text-parchment font-sans text-xs tracking-[0.2em] uppercase px-7 py-3.5 transition-colors duration-300 flex-shrink-0"
          >
            Sync Licensing
            <ArrowRight size={12} className="group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>
      </section>

      {/* Asset downloads */}
      <section className="grain bg-studio-black py-24 px-6">
        <div className="max-w-5xl mx-auto">
          <motion.div
            variants={fadeUp} custom={0} initial="hidden" whileInView="visible"
            viewport={{ once: true }}
            className="flex flex-col gap-2 mb-14"
          >
            <p className="chapter-label">Downloads</p>
            <h2 className="headline text-3xl text-cream">Press Assets</h2>
          </motion.div>

          <div className="flex flex-col gap-12">
            {assets.map(({ category, items }, ci) => (
              <motion.div
                key={ci}
                variants={fadeUp} custom={ci} initial="hidden"
                whileInView="visible" viewport={{ once: true }}
              >
                <p className="font-sans text-xs tracking-[0.2em] uppercase text-gold/60 mb-5 pb-3 border-b border-gold/10">
                  {category}
                </p>
                <div className="flex flex-col gap-0">
                  {items.map(({ name, type, href }, ii) => (
                    <a
                      key={ii}
                      href={href}
                      className="group flex items-center justify-between py-4 border-b border-border/25 hover:border-gold/20 transition-colors"
                    >
                      <div className="flex items-center gap-4">
                        <FileText size={13} className="text-mist/30 group-hover:text-gold/40 transition-colors flex-shrink-0" />
                        <span className="font-sans text-sm text-cream/75 group-hover:text-cream transition-colors font-light">
                          {name}
                        </span>
                      </div>
                      <div className="flex items-center gap-3">
                        <span className="font-mono text-[0.6rem] text-mist/30 tracking-wider">
                          {type}
                        </span>
                        <Download size={11} className="text-mist/20 group-hover:text-gold/50 transition-colors" />
                      </div>
                    </a>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
