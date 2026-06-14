"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { ArrowRight, Send } from "lucide-react";

const fadeUp = {
  hidden:  { opacity: 0, y: 24 },
  visible: (i = 0) => ({
    opacity: 1, y: 0,
    transition: { delay: i * 0.1, duration: 0.85, ease: [0.16, 1, 0.3, 1] },
  }),
};

const inquiryTypes = [
  "Sync Licensing",
  "Press & Editorial",
  "Booking / Live",
  "General",
];

export default function ContactPage() {
  const [type, setType]       = useState("");
  const [name, setName]       = useState("");
  const [email, setEmail]     = useState("");
  const [message, setMessage] = useState("");
  const [sent, setSent]       = useState(false);

  async function handleSubmit() {
    if (!name || !email || !message) return;
    // TODO: wire to /api/contact with Resend
    setSent(true);
  }

  return (
    <>
      {/* Hero */}
      <section className="grain vignette relative pt-40 pb-24 px-6 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_50%_40%_at_80%_50%,rgba(196,98,42,0.05),transparent)]" />
        <div className="max-w-5xl mx-auto relative z-10">
          <motion.p
            variants={fadeUp} custom={0} initial="hidden" animate="visible"
            className="chapter-label mb-6"
          >Contact</motion.p>
          <motion.h1
            variants={fadeUp} custom={1} initial="hidden" animate="visible"
            className="headline text-[clamp(3rem,7vw,6rem)] text-cream leading-none"
          >
            Get in Touch
          </motion.h1>
          <motion.p
            variants={fadeUp} custom={2} initial="hidden" animate="visible"
            className="font-sans text-sm text-mist mt-5 font-light max-w-md leading-8"
          >
            For sync licensing inquiries, press, booking, or anything else —
            reach out below or contact Mid City Sound Studio directly.
          </motion.p>
        </div>
      </section>

      {/* Form + info */}
      <section className="grain bg-charcoal py-24 px-6">
        <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-16 items-start">

          {/* Form */}
          <motion.div
            variants={fadeUp} custom={0} initial="hidden" whileInView="visible"
            viewport={{ once: true }}
          >
            {sent ? (
              <div className="flex flex-col gap-5 py-12">
                <div className="w-10 h-px bg-prairie/50" />
                <p className="headline text-3xl text-cream">Thank you.</p>
                <p className="font-sans text-sm text-mist font-light leading-8">
                  Your message has been received. We'll be in touch shortly.
                </p>
              </div>
            ) : (
              <div className="flex flex-col gap-6">
                <p className="chapter-label mb-2">Send a Message</p>

                {/* Inquiry type */}
                <div className="flex flex-wrap gap-2">
                  {inquiryTypes.map((t) => (
                    <button
                      key={t}
                      onClick={() => setType(t)}
                      className={`font-sans text-xs tracking-[0.15em] uppercase px-4 py-2 border transition-all duration-200 ${
                        type === t
                          ? "border-prairie bg-prairie/10 text-cream"
                          : "border-border/40 text-mist hover:border-gold/30 hover:text-cream"
                      }`}
                    >
                      {t}
                    </button>
                  ))}
                </div>

                {/* Inputs */}
                <div className="flex flex-col gap-4">
                  <div className="flex flex-col gap-1.5">
                    <label className="font-sans text-xs tracking-[0.18em] uppercase text-mist/60">
                      Name
                    </label>
                    <input
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      className="bg-dark border border-border/50 focus:border-gold/40 text-cream font-sans text-sm px-4 py-3 outline-none transition-colors placeholder:text-mist/20"
                      placeholder="Your name"
                    />
                  </div>

                  <div className="flex flex-col gap-1.5">
                    <label className="font-sans text-xs tracking-[0.18em] uppercase text-mist/60">
                      Email
                    </label>
                    <input
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className="bg-dark border border-border/50 focus:border-gold/40 text-cream font-sans text-sm px-4 py-3 outline-none transition-colors placeholder:text-mist/20"
                      placeholder="your@email.com"
                    />
                  </div>

                  <div className="flex flex-col gap-1.5">
                    <label className="font-sans text-xs tracking-[0.18em] uppercase text-mist/60">
                      Message
                    </label>
                    <textarea
                      value={message}
                      onChange={(e) => setMessage(e.target.value)}
                      rows={6}
                      className="bg-dark border border-border/50 focus:border-gold/40 text-cream font-sans text-sm px-4 py-3 outline-none transition-colors placeholder:text-mist/20 resize-none leading-7"
                      placeholder="Tell us about your project or inquiry…"
                    />
                  </div>
                </div>

                <button
                  onClick={handleSubmit}
                  className="group self-start flex items-center gap-2.5 bg-prairie hover:bg-prairie-dark text-parchment font-sans text-xs tracking-[0.2em] uppercase px-8 py-3.5 transition-colors duration-300"
                >
                  Send Message
                  <Send size={12} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                </button>
              </div>
            )}
          </motion.div>

          {/* Contact info */}
          <motion.div
            variants={fadeUp} custom={2} initial="hidden" whileInView="visible"
            viewport={{ once: true }}
            className="flex flex-col gap-10 md:pt-8"
          >
            <div className="flex flex-col gap-5 border-l-2 border-prairie/40 pl-7">
              <p className="chapter-label">Management</p>
              <div>
                <p className="font-sans text-sm text-cream font-light">Mid City Sound Studio</p>
                <a
                  href="https://midcitysound.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-sans text-xs text-gold/60 hover:text-gold transition-colors mt-1 block"
                >
                  midcitysound.com
                </a>
              </div>
              <p className="font-sans text-xs text-mist/60 leading-7 font-light">
                All bookings, sync licensing, and press inquiries are managed
                through Mid City Sound Studio in New Orleans.
              </p>
            </div>

            <div className="flex flex-col gap-4 pt-6 border-t border-border/30">
              <p className="chapter-label">Quick Links</p>
              <a
                href="/press"
                className="group flex items-center gap-2 font-sans text-xs tracking-[0.15em] uppercase text-mist hover:text-cream transition-colors"
              >
                Download Press Kit
                <ArrowRight size={11} className="group-hover:translate-x-1 transition-transform" />
              </a>
              <a
                href="/music"
                className="group flex items-center gap-2 font-sans text-xs tracking-[0.15em] uppercase text-mist hover:text-cream transition-colors"
              >
                Listen to the Album
                <ArrowRight size={11} className="group-hover:translate-x-1 transition-transform" />
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
}
