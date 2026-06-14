import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: "class",
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      // ── Shared ecosystem tokens ──────────────────────────────────────
      colors: {
        "studio-black": "#090909",
        charcoal:       "#111111",
        dark:           "#1A1A1A",
        card:           "#1C1C1C",
        border:         "#2A2A2A",
        gold:           "#D4AF77",
        "gold-light":   "#E8C97A",
        "gold-dark":    "#B8935A",
        cream:          "#F5EDD8",
        mist:           "#A89880",
        // ── Graham Hill accent layer (Roots Cinema) ───────────────────
        prairie:        "#C4622A",  // burnt sienna — the campaign's signature
        "prairie-dark": "#9E4D1F",
        saddle:         "#8B6040",  // warm earth
        parchment:      "#F2E8D5",  // aged paper
        "fade":         "#3A2F25",  // deep warm brown for subtle sections
      },
      fontFamily: {
        serif:  ["Cormorant Garamond", "Georgia", "serif"],
        sans:   ["DM Sans", "system-ui", "sans-serif"],
        mono:   ["DM Mono", "monospace"],
      },
      letterSpacing: {
        widest: "0.3em",
        "ultra": "0.5em",
      },
      backgroundImage: {
        "grain-overlay": "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)' opacity='1'/%3E%3C/svg%3E\")",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
};

export default config;
