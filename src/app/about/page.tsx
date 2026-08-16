"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

const fadeUp = {
  hidden:  { opacity: 0, y: 24 },
  visible: (i = 0) => ({
    opacity: 1, y: 0,
    transition: { delay: i * 0.12, duration: 0.85, ease: [0.16, 1, 0.3, 1] },
  }),
};

export default function AboutPage() {
  return (
    <>
      {/* Hero */}
      <section className="grain vignette relative pt-40 pb-28 px-6 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_60%_40%_at_30%_60%,rgba(196,98,42,0.05),transparent)]" />
        <div className="max-w-5xl mx-auto relative z-10">
          <motion.p
            variants={fadeUp} custom={0} initial="hidden" animate="visible"
            className="chapter-label mb-6"
          >
            About
          </motion.p>
          <motion.h1
            variants={fadeUp} custom={1} initial="hidden" animate="visible"
            className="headline text-[clamp(3rem,7vw,6.5rem)] text-cream leading-none"
          >
            Graham Hill
          </motion.h1>
        </div>
      </section>

      {/* Story */}
      <section className="grain bg-charcoal py-24 px-6">
        <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-16 items-start">
          {/* Photo */}
          <motion.div
            variants={fadeUp} custom={0} initial="hidden" whileInView="visible"
            viewport={{ once: true }}
            className="sticky top-32 aspect-[3/4] bg-dark border border-border/40 relative overflow-hidden"
          >
            <div className="absolute inset-0 flex flex-col items-center justify-center text-center p-6">
              <p className="chapter-label">Press Photo</p>
              <p className="font-serif italic text-mist/40 text-sm mt-2">Replace with hero image</p>
            </div>
          </motion.div>

          {/* Text content */}
          <div className="flex flex-col gap-12">
            <motion.div
              variants={fadeUp} custom={1} initial="hidden" whileInView="visible"
              viewport={{ once: true }}
              className="flex flex-col gap-6"
            >
              <p className="chapter-label">The Beginning</p>
              <div className="w-10 h-px bg-prairie/50" />
              <p className="font-sans text-sm leading-9 text-mist font-light">
                For most of his musical life, Graham Hill has been the one you
                hear more than you see. The drummer holding the room, shaping the
                feel, keeping the pulse. Years behind the kit with Beach House
                (2008–2016, Teen Dream, Bloom, Depression Cherry) gave him a
                musical education few songwriters receive — the art of restraint,
                of space, of letting the song breathe. Before that, he played
                drums and sang harmonies with a string of Bay Area bands —
                The Parish, Papercuts, Vetiver.
              </p>
              <p className="font-serif italic text-xl text-cream/60 leading-relaxed">
                "He learned to play what the song needed, not what the musician wanted."
              </p>
            </motion.div>

            <motion.div
              variants={fadeUp} custom={2} initial="hidden" whileInView="visible"
              viewport={{ once: true }}
              className="flex flex-col gap-6"
            >
              <p className="chapter-label">The Lineage</p>
              <div className="w-10 h-px bg-prairie/50" />
              <p className="font-sans text-sm leading-9 text-mist font-light">
                Music runs further back than the kit. His father, Steve Hill,
                spent decades as house bassist for NPR's Mountain Stage and a
                member of the Putnam County Pickers. The songwriting on this
                record isn't an inherited aesthetic — it's a return to where he
                came from.
              </p>
            </motion.div>

            <motion.div
              variants={fadeUp} custom={3} initial="hidden" whileInView="visible"
              viewport={{ once: true }}
              className="flex flex-col gap-6"
            >
              <p className="chapter-label">The Sound</p>
              <div className="w-10 h-px bg-prairie/50" />
              <p className="font-sans text-sm leading-9 text-mist font-light">
                The debut album is an Alternative record — warm, unhurried
                production, storytelling songs that earn their weight line by
                line. But the voice is his own.
              </p>
              <p className="font-sans text-sm leading-9 text-mist font-light">
                Every arrangement serves the song. Nothing decorates what doesn't
                need decorating. The production breathes — because the space is part
                of what he's saying.
              </p>
            </motion.div>

            <motion.div
              variants={fadeUp} custom={5} initial="hidden" whileInView="visible"
              viewport={{ once: true }}
              className="flex flex-col gap-6"
            >
              <p className="chapter-label">The Intention</p>
              <div className="w-10 h-px bg-prairie/50" />
              <p className="font-sans text-sm leading-9 text-mist font-light">
                This campaign is built for the long game. Music that finds its
                audience slowly, meaningfully, and over time. Alongside the
                listener relationship, the album has been crafted with strong sync
                licensing potential — for television, film, and advertising placements
                that call for emotional authenticity without sentimentality.
              </p>
            </motion.div>

            <motion.div
              variants={fadeUp} custom={6} initial="hidden" whileInView="visible"
              viewport={{ once: true }}
            >
              <Link
                href="/music"
                className="group self-start flex items-center gap-2.5 bg-prairie hover:bg-prairie-dark text-parchment font-sans text-xs tracking-[0.2em] uppercase px-7 py-3.5 transition-colors duration-300"
              >
                Hear the Music
                <ArrowRight size={12} className="group-hover:translate-x-1 transition-transform" />
              </Link>
            </motion.div>
          </div>
        </div>
      </section>
    </>
  );
}
