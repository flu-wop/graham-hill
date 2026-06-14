"use client";

import { motion } from "framer-motion";
import { Play, ExternalLink } from "lucide-react";

const fadeUp = {
  hidden:  { opacity: 0, y: 24 },
  visible: (i = 0) => ({
    opacity: 1, y: 0,
    transition: { delay: i * 0.1, duration: 0.85, ease: [0.16, 1, 0.3, 1] },
  }),
};

// Replace track list with real tracks when ready
const tracks = [
  { title: "Track 01", duration: "—:——", note: "Album opener"         },
  { title: "Track 02", duration: "—:——", note: "First single"         },
  { title: "Track 03", duration: "—:——", note: "Sync highlight"       },
  { title: "Track 04", duration: "—:——", note: ""                     },
  { title: "Track 05", duration: "—:——", note: ""                     },
  { title: "Track 06", duration: "—:——", note: ""                     },
  { title: "Track 07", duration: "—:——", note: "Closing track"        },
];

const streamingLinks = [
  { name: "Spotify",        href: "#" },
  { name: "Apple Music",    href: "#" },
  { name: "Bandcamp",       href: "#" },
  { name: "Amazon Music",   href: "#" },
];

export default function MusicPage() {
  return (
    <>
      {/* Hero */}
      <section className="grain vignette relative pt-40 pb-24 px-6 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_60%_40%_at_70%_60%,rgba(196,98,42,0.05),transparent)]" />
        <div className="max-w-5xl mx-auto relative z-10">
          <motion.p
            variants={fadeUp} custom={0} initial="hidden" animate="visible"
            className="chapter-label mb-6"
          >Music</motion.p>
          <motion.h1
            variants={fadeUp} custom={1} initial="hidden" animate="visible"
            className="headline text-[clamp(3rem,7vw,6rem)] text-cream leading-none"
          >
            The Debut Album
          </motion.h1>
          <motion.p
            variants={fadeUp} custom={2} initial="hidden" animate="visible"
            className="font-sans text-sm text-mist mt-5 font-light max-w-md leading-8"
          >
            Americana / Roots. Warm, restrained production.
            Storytelling songs that carry quiet weight and hard-won hope.
          </motion.p>
        </div>
      </section>

      {/* Album + tracklist */}
      <section className="grain bg-charcoal py-24 px-6">
        <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-16 items-start">

          {/* Album art placeholder */}
          <motion.div
            variants={fadeUp} custom={0} initial="hidden" whileInView="visible"
            viewport={{ once: true }}
            className="aspect-square bg-dark border border-border/40 relative overflow-hidden flex flex-col items-center justify-center gap-3"
          >
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(196,98,42,0.06),transparent_70%)]" />
            <div className="w-12 h-px bg-gold/20 mb-2" />
            <p className="chapter-label">Album Art</p>
            <p className="font-serif italic text-mist/40 text-sm">Coming soon</p>
            <p className="font-sans text-[0.6rem] tracking-widest text-mist/30 uppercase mt-1">
              Graham Hill · 2026
            </p>
            <div className="w-12 h-px bg-gold/20 mt-2" />
          </motion.div>

          {/* Tracklist */}
          <motion.div
            variants={fadeUp} custom={1} initial="hidden" whileInView="visible"
            viewport={{ once: true }}
            className="flex flex-col gap-6"
          >
            <div className="flex flex-col gap-1 mb-4">
              <p className="chapter-label">Tracklist</p>
              <h2 className="headline text-3xl text-cream font-light">Graham Hill</h2>
              <p className="font-serif italic text-gold/60 text-base">Debut LP · 2026</p>
            </div>

            <div className="flex flex-col">
              {tracks.map(({ title, duration, note }, i) => (
                <div
                  key={i}
                  className="group flex items-center gap-4 py-4 border-b border-border/30 hover:border-gold/20 transition-colors cursor-default"
                >
                  <span className="font-mono text-xs text-mist/40 w-5 flex-shrink-0">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <div className="flex-1 min-w-0">
                    <p className="font-sans text-sm text-cream/80 font-light group-hover:text-cream transition-colors truncate">
                      {title}
                    </p>
                    {note && (
                      <p className="font-sans text-[0.65rem] tracking-[0.15em] text-prairie/60 uppercase mt-0.5">
                        {note}
                      </p>
                    )}
                  </div>
                  <div className="flex items-center gap-3">
                    <span className="font-mono text-xs text-mist/30">{duration}</span>
                    <Play size={11} className="text-mist/20 group-hover:text-gold/40 transition-colors flex-shrink-0" />
                  </div>
                </div>
              ))}
            </div>

            {/* Streaming links */}
            <div className="pt-4 flex flex-col gap-4">
              <p className="chapter-label">Available On</p>
              <div className="flex flex-wrap gap-3">
                {streamingLinks.map(({ name, href }) => (
                  <a
                    key={name}
                    href={href}
                    className="flex items-center gap-1.5 border border-border/50 hover:border-gold/40 text-mist hover:text-cream font-sans text-xs tracking-[0.15em] uppercase px-4 py-2 transition-all duration-200"
                  >
                    {name}
                    <ExternalLink size={9} />
                  </a>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Player placeholder */}
      <section className="grain bg-studio-black py-20 px-6">
        <div className="max-w-5xl mx-auto">
          <motion.div
            variants={fadeUp} custom={0} initial="hidden" whileInView="visible"
            viewport={{ once: true }}
            className="border border-border/40 p-10 flex flex-col items-center text-center gap-4"
          >
            <p className="chapter-label">Listen</p>
            <p className="font-serif italic text-mist/50 text-lg">
              Embed Spotify or Bandcamp player here
            </p>
            <p className="font-sans text-xs text-mist/30">
              Replace this block with{" "}
              <code className="font-mono text-gold/40">{"<iframe>"}</code> embed
            </p>
          </motion.div>
        </div>
      </section>
    </>
  );
}
