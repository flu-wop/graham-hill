"use client";

import { motion } from "framer-motion";
import { Download, ArrowRight } from "lucide-react";
import Link from "next/link";

const fadeUp = {
  hidden:  { opacity: 0, y: 24 },
  visible: (i = 0) => ({
    opacity: 1, y: 0,
    transition: { delay: i * 0.1, duration: 0.85, ease: [0.16, 1, 0.3, 1] },
  }),
};

const syncDetails = [
  { label: "Genre",       value: "Alternative"                          },
  { label: "Vocal",       value: "Male lead, sparse harmonies"          },
  { label: "Instruments", value: "Acoustic guitar, upright bass, piano, sparse percussion" },
  { label: "Tempo",       value: "Available once tracks are mixed"      },
  { label: "Mood",        value: "Available once tracks are mixed"      },
  { label: "Label",       value: "Independent"                          },
  { label: "Rights",      value: "100% clearable — contact for licensing" },
];

export default function SyncPage() {
  return (
    <>
      {/* Hero */}
      <section className="grain vignette relative pt-40 pb-24 px-6 overflow-hidden">
        <div className="absolute left-0 top-0 bottom-0 w-1 bg-prairie/50" />
        <div className="max-w-5xl mx-auto relative z-10">
          <motion.p
            variants={fadeUp} custom={0} initial="hidden" animate="visible"
            className="chapter-label mb-6"
          >Sync Licensing</motion.p>
          <motion.h1
            variants={fadeUp} custom={1} initial="hidden" animate="visible"
            className="headline text-[clamp(3rem,7vw,6rem)] text-cream leading-none"
          >
            For Music
            <br />
            <span className="italic text-gold">Supervisors</span>
          </motion.h1>
          <motion.p
            variants={fadeUp} custom={2} initial="hidden" animate="visible"
            className="font-sans text-sm text-mist mt-5 font-light max-w-lg leading-8"
          >
            Strong choruses and a universal emotional register, built for film,
            television, and advertising placement — no live-touring agenda
            muddying the pitch.
          </motion.p>
        </div>
      </section>

      {/* The pitch */}
      <section className="grain bg-charcoal py-20 px-6">
        <div className="max-w-3xl mx-auto">
          <motion.p
            variants={fadeUp} custom={0} initial="hidden" whileInView="visible"
            viewport={{ once: true }}
            className="font-sans text-sm leading-9 text-mist font-light"
          >
            Graham Hill's debut is written with a wide emotional range and
            hooks strong enough to carry a scene on their own — melodic,
            unhurried, and restrained rather than performative. The songs sit
            comfortably against picture: drama, documentary, and prestige
            advertising all pull from the same emotional register this record
            works in.
          </motion.p>
        </div>
      </section>

      {/* Sync quick-facts */}
      <section className="grain bg-studio-black py-20 px-6">
        <div className="max-w-5xl mx-auto">
          <motion.div
            variants={fadeUp} custom={0} initial="hidden" whileInView="visible"
            viewport={{ once: true }}
            className="flex flex-col gap-6 mb-12"
          >
            <p className="chapter-label">Sync Snapshot</p>
            <h2 className="headline text-3xl text-cream">At a glance.</h2>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-0">
            {syncDetails.map(({ label, value }, i) => (
              <motion.div
                key={i}
                variants={fadeUp} custom={i * 0.5} initial="hidden"
                whileInView="visible" viewport={{ once: true }}
                className="flex gap-6 py-5 border-b border-border/30 items-baseline"
              >
                <span className="font-sans text-xs tracking-[0.18em] uppercase text-mist/50 w-28 flex-shrink-0">
                  {label}
                </span>
                <span className="font-sans text-sm text-cream/80 font-light leading-7">{value}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* One-sheet + contact */}
      <section className="grain bg-charcoal py-24 px-6">
        <div className="max-w-3xl mx-auto flex flex-col items-start gap-8">
          <div className="flex flex-col gap-3">
            <p className="chapter-label">One-Sheet</p>
            <h2 className="headline text-3xl text-cream">
              Everything on one page.
            </h2>
            <p className="font-sans text-sm text-mist font-light leading-8 max-w-md">
              A single-page PDF with the pitch, sync snapshot, and contact
              details — built for a fast read on a supervisor's desk.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-4">
            <a
              href="#"
              className="group flex items-center gap-2.5 border border-gold/30 hover:border-gold/70 text-gold/80 hover:text-gold font-sans text-xs tracking-[0.2em] uppercase px-7 py-3.5 transition-all duration-300"
            >
              Download One-Sheet
              <Download size={13} className="group-hover:translate-y-0.5 transition-transform" />
            </a>
            <Link
              href="/contact"
              className="group flex items-center gap-2.5 bg-prairie hover:bg-prairie-dark text-parchment font-sans text-xs tracking-[0.2em] uppercase px-7 py-3.5 transition-colors duration-300"
            >
              Licensing Inquiry
              <ArrowRight size={12} className="group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
