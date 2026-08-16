"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, Download } from "lucide-react";

/* ── Animation variants ─────────────────────────────────────────── */
const fadeUp = {
  hidden:  { opacity: 0, y: 28 },
  visible: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.12, duration: 0.9, ease: [0.16, 1, 0.3, 1] },
  }),
};

const fadeIn = {
  hidden:  { opacity: 0 },
  visible: (i = 0) => ({
    opacity: 1,
    transition: { delay: i * 0.1, duration: 0.8, ease: "easeOut" },
  }),
};

/* ── Thin rule component ────────────────────────────────────────── */
function Rule({ className = "" }: { className?: string }) {
  return (
    <div className={`rule-gold ${className}`} />
  );
}

/* ── Pillar card ────────────────────────────────────────────────── */
function Pillar({
  label,
  subtitle,
  delay,
}: {
  label: string;
  subtitle: string;
  delay?: number;
}) {
  return (
    <motion.div
      variants={fadeUp}
      custom={delay ?? 0}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-60px" }}
      className="flex flex-col gap-3 pt-6 border-t border-gold/20"
    >
      <p className="font-serif italic text-2xl font-light text-cream leading-tight">
        {label}
      </p>
      <p className="font-sans text-sm text-mist leading-relaxed font-light">
        {subtitle}
      </p>
    </motion.div>
  );
}

/* ── Page ───────────────────────────────────────────────────────── */
export default function Home() {
  return (
    <>
      {/* ═══ HERO ═══════════════════════════════════════════════════ */}
      <section className="grain vignette relative min-h-screen flex flex-col items-center justify-center px-6 overflow-hidden">
        {/* Warm ambient glow */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_60%_at_50%_60%,rgba(196,98,42,0.06),transparent)]" />

        {/* Decorative vertical lines */}
        <div className="absolute left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-gold/10 to-transparent" />

        <div className="relative z-10 flex flex-col items-center text-center max-w-4xl mx-auto">
          {/* Chapter label */}
          <motion.p
            variants={fadeIn}
            custom={0}
            initial="hidden"
            animate="visible"
            className="chapter-label mb-8"
          >
            Mid City Sound Studio Presents
          </motion.p>

          {/* Top rule */}
          <motion.div
            variants={fadeIn}
            custom={1}
            initial="hidden"
            animate="visible"
            className="w-16 h-px bg-gold/40 mb-10"
          />

          {/* Main headline */}
          <motion.h1
            variants={fadeUp}
            custom={2}
            initial="hidden"
            animate="visible"
            className="headline text-[clamp(3rem,9vw,7.5rem)] text-cream leading-none mb-8"
          >
            Graham Hill
          </motion.h1>

          {/* Name + descriptor */}
          <motion.div
            variants={fadeUp}
            custom={3}
            initial="hidden"
            animate="visible"
            className="flex flex-col items-center gap-2 mb-12"
          >
            <p className="font-serif italic text-lg text-cream/70">
              Debut album, self-titled.
            </p>
            <p className="font-sans text-xs tracking-[0.25em] text-mist uppercase">
              Alternative · 2026
            </p>
          </motion.div>

          {/* CTA buttons */}
          <motion.div
            variants={fadeUp}
            custom={4}
            initial="hidden"
            animate="visible"
            className="flex flex-col sm:flex-row items-center gap-4"
          >
            <Link
              href="/music"
              className="group flex items-center gap-2.5 bg-prairie hover:bg-prairie-dark text-parchment font-sans text-xs tracking-[0.2em] uppercase px-8 py-3.5 transition-colors duration-300"
            >
              Listen
              <ArrowRight size={13} className="group-hover:translate-x-1 transition-transform" />
            </Link>
            <Link
              href="/press"
              className="flex items-center gap-2.5 border border-gold/30 hover:border-gold/70 text-gold/80 hover:text-gold font-sans text-xs tracking-[0.2em] uppercase px-8 py-3.5 transition-all duration-300"
            >
              Music Supervisors
            </Link>
          </motion.div>
        </div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2, duration: 1 }}
          className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
        >
          <div className="w-px h-10 bg-gradient-to-b from-transparent to-gold/30" />
          <p className="font-sans text-[0.6rem] tracking-[0.3em] text-mist/50 uppercase">Scroll</p>
        </motion.div>
      </section>

      {/* ═══ ARTIST INTRO ════════════════════════════════════════════ */}
      <section className="grain bg-charcoal py-24 md:py-36 px-6">
        <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-16 items-center">
          {/* Photo placeholder */}
          <motion.div
            variants={fadeIn}
            custom={0}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
            className="relative aspect-[3/4] bg-dark border border-border/40 overflow-hidden"
          >
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(196,98,42,0.07),transparent_70%)]" />
            <div className="absolute inset-0 flex flex-col items-center justify-center gap-3 text-center p-6">
              <div className="w-12 h-px bg-gold/20 mb-2" />
              <p className="chapter-label">Artist Photo</p>
              <p className="font-serif italic text-mist/40 text-sm">Replace with press shot</p>
              <div className="w-12 h-px bg-gold/20 mt-2" />
            </div>
          </motion.div>

          {/* Text */}
          <motion.div
            variants={fadeUp}
            custom={1}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
            className="flex flex-col gap-8"
          >
            <p className="chapter-label">The Artist</p>

            <h2 className="headline text-[clamp(2.5rem,5vw,4.5rem)] text-cream">
              A quiet,{" "}
              <span className="italic text-gold">powerful</span>{" "}
              arrival.
            </h2>

            <Rule />

            <p className="font-sans text-sm leading-8 text-mist font-light max-w-md">
              After years behind the kit with Beach House, Graham Hill steps
              forward with something entirely his own — a deeply personal
              Alternative debut. Warm, restrained production. Storytelling
              songs that carry quiet weight and hard-won hope.
            </p>

            <p className="font-serif italic text-lg text-cream/60 leading-relaxed">
              "He didn't compete with his past.
              <br />
              He arrived fully formed."
            </p>

            <Link
              href="/about"
              className="group self-start flex items-center gap-2 font-sans text-xs tracking-[0.2em] uppercase text-gold/70 hover:text-gold transition-colors"
            >
              Full Story
              <ArrowRight size={12} className="group-hover:translate-x-1 transition-transform" />
            </Link>
          </motion.div>
        </div>
      </section>

      {/* ═══ THE SOUND ══════════════════════════════════════════════ */}
      <section className="grain bg-studio-black py-24 md:py-36 px-6">
        <div className="max-w-5xl mx-auto">
          {/* Header */}
          <motion.div
            variants={fadeUp}
            custom={0}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-60px" }}
            className="flex flex-col items-center text-center mb-20 gap-5"
          >
            <p className="chapter-label">The Sound</p>
            <h2 className="headline text-[clamp(2.5rem,5vw,4rem)] text-cream">
              Alternative · Cinematic
            </h2>
            <div className="w-12 h-px bg-gold/30" />
            <p className="font-sans text-sm text-mist font-light max-w-lg leading-8">
              Music built to find its audience slowly, meaningfully, and over time.
              Every song crafted for emotional resonance and long-form sync potential.
            </p>
          </motion.div>

          {/* Three pillars */}
          <div className="grid md:grid-cols-3 gap-10 md:gap-16">
            <Pillar
              label="Authentic"
              subtitle="Honest storytelling with no artifice. Every lyric earns its weight. No production gloss obscuring what the songs are actually saying."
              delay={0}
            />
            <Pillar
              label="Cinematic"
              subtitle="A filmic, visually rich presence built into the music itself. The arrangements breathe. The spaces between notes tell the story."
              delay={1}
            />
            <Pillar
              label="Restrained"
              subtitle="The music speaks for itself. No over-production, no chasing trends. Just songs that know exactly what they are."
              delay={2}
            />
          </div>
        </div>
      </section>

      {/* ═══ SYNC / SUPERVISORS ═════════════════════════════════════ */}
      <section className="grain bg-fade py-24 md:py-32 px-6 relative overflow-hidden">
        {/* Prairie accent edge */}
        <div className="absolute left-0 top-0 bottom-0 w-1 bg-prairie/60" />

        <div className="max-w-5xl mx-auto">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <motion.div
              variants={fadeUp}
              custom={0}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-60px" }}
              className="flex flex-col gap-7"
            >
              <p className="chapter-label">For Music Supervisors</p>
              <h2 className="headline text-[clamp(2rem,4vw,3.5rem)] text-cream">
                Built for the{" "}
                <span className="italic text-prairie">long game.</span>
              </h2>
              <Rule />
              <p className="font-sans text-sm leading-8 text-mist font-light">
                Every asset in this campaign is optimized for sync licensing —
                television, film, and advertising placement. The music has strong
                emotional resonance and a unified visual identity built around a
                single, coherent aesthetic world.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 mt-2">
                <Link
                  href="/press"
                  className="group flex items-center gap-2.5 bg-prairie hover:bg-prairie-dark text-parchment font-sans text-xs tracking-[0.2em] uppercase px-7 py-3.5 transition-colors duration-300"
                >
                  <Download size={13} />
                  Download EPK
                </Link>
                <Link
                  href="/contact"
                  className="group flex items-center gap-2.5 border border-gold/20 hover:border-gold/50 text-gold/70 hover:text-gold font-sans text-xs tracking-[0.2em] uppercase px-7 py-3.5 transition-all duration-300"
                >
                  Sync Inquiry
                  <ArrowRight size={12} className="group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            </motion.div>

            {/* Asset list */}
            <motion.div
              variants={fadeUp}
              custom={2}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-60px" }}
              className="flex flex-col gap-0"
            >
              {[
                { item: "Electronic Press Kit (EPK)",         note: "Full bio, assets, contact" },
                { item: "Lyric Films",                        note: "Sync-ready visuals"        },
                { item: "Mood Films",                         note: "Alternative aesthetic"},
                { item: "One-Sheets",                         note: "Per track + full album"    },
                { item: "Sync Pitch Decks",                   note: "Genre, mood, placement notes"},
                { item: "Hi-Res Album Art & Press Photos",    note: "Approved for publication"  },
              ].map(({ item, note }, i) => (
                <div
                  key={i}
                  className="flex items-center justify-between py-4 border-b border-border/30"
                >
                  <div>
                    <p className="font-sans text-sm text-cream font-light">{item}</p>
                    <p className="font-sans text-xs text-mist/60 mt-0.5">{note}</p>
                  </div>
                  <ArrowRight size={13} className="text-gold/30 flex-shrink-0" />
                </div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* ═══ FINAL CTA ══════════════════════════════════════════════ */}
      <section className="grain bg-studio-black py-28 md:py-40 px-6">
        <motion.div
          variants={fadeUp}
          custom={0}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
          className="max-w-2xl mx-auto flex flex-col items-center text-center gap-8"
        >
          <div className="w-px h-12 bg-gradient-to-b from-transparent to-gold/30" />
          <h2 className="headline text-[clamp(2.5rem,5vw,5rem)] text-cream">
            Something that{" "}
            <span className="italic text-gold-gradient">lasts.</span>
          </h2>
          <p className="font-sans text-sm text-mist font-light leading-8 max-w-sm">
            This is the beginning. Music built to find its audience slowly,
            honestly, and over time.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 mt-2">
            <Link
              href="/music"
              className="group flex items-center gap-2.5 bg-prairie hover:bg-prairie-dark text-parchment font-sans text-xs tracking-[0.2em] uppercase px-8 py-3.5 transition-colors duration-300"
            >
              Hear the Music
              <ArrowRight size={13} className="group-hover:translate-x-1 transition-transform" />
            </Link>
            <Link
              href="/contact"
              className="flex items-center gap-2.5 border border-border hover:border-gold/40 text-mist hover:text-cream font-sans text-xs tracking-[0.2em] uppercase px-8 py-3.5 transition-all duration-300"
            >
              Get in Touch
            </Link>
          </div>
          <div className="w-px h-12 bg-gradient-to-t from-transparent to-gold/30" />
        </motion.div>
      </section>
    </>
  );
}
