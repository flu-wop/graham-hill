import type { Config } from "tailwindcss";

// Palette is sampled from the album cover: the cream border and the
// oxblood of the "TAKING IN STARS" lettering.
const config: Config = {
  content: ["./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        paper: "#FBF8EA",
        sleeve: "#F2EDDB",
        ink: "#231B17",
        oxblood: "#673534",
        muted: "#6B6056",
        rule: "#DCD3BE",
      },
      fontFamily: {
        display: ["var(--font-display)", "Impact", "sans-serif"],
        serif: ["var(--font-serif)", "Georgia", "serif"],
      },
      letterSpacing: {
        sleeve: "0.32em",
        label: "0.18em",
      },
      maxWidth: {
        page: "1200px",
        prose: "640px",
      },
    },
  },
  plugins: [],
};

export default config;
