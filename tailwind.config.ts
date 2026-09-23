import type { Config } from "tailwindcss";

const config: Config = {
  // Brand colours, fonts and semantic tokens come from the shared IN-FLU-ENTIAL preset.
  presets: [require("@flu-wop/design-system/tailwind-preset")],
  darkMode: "class",
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./node_modules/@flu-wop/design-system/src/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      // ── Shared ecosystem tokens ──────────────────────────────────────
      colors: {
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
