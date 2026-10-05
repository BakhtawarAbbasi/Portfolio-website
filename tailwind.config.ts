import type { Config } from "tailwindcss";

// Fonts are loaded in layout.tsx with next/font and exposed as CSS variables
const headingFont = ["var(--font-outfit)", "system-ui", "sans-serif"];
const bodyFont = ["var(--font-dm-sans)", "system-ui", "sans-serif"];

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        heading: headingFont, // titles and headings
        body: bodyFont,       // paragraphs, buttons and small text

        // Old names kept so About / Contact keep working until they are updated.
        // They now point to the new fonts. Remove these once every file uses font-heading / font-body.
        grover: headingFont,
        dancing: headingFont,
        itim: bodyFont,
      },
      colors: {
        // Every colour below comes straight from the teal swatch palette (darkest to
        // lightest: #025043, #036c5f, #037c6e, #048c7f, #05998c, #28a99e, #4fb9af,
        // #81cdc6, #b3e0dc). No blue anywhere — depth comes from light/dark teal only.
        primary: "#013A32",   // main page background (darker than the palette's own darkest, for contrast)
        deep: "#012620",      // darkest areas (footer, inner panels)
        surface: "#036c5f",   // raised cards (used at partial opacity, e.g. bg-surface/60)
        accent: {
          DEFAULT: "#4fb9af", // headings, icons, links
          dark: "#05998c",    // hover / pressed state
        },
        ink: "#F1FBFA",       // main text and white pill buttons
        grayText: "#81cdc6",  // secondary text (light teal, still reads as part of the palette)

        // Named palette steps, darkest to lightest — used to build gradients and to keep
        // the three skill/project categories visually distinct using shade only (no new hues)
        teal: {
          900: "#025043",
          800: "#036c5f",
          700: "#037c6e",
          600: "#048c7f",
          500: "#05998c",
          400: "#28a99e",
          300: "#4fb9af",
          200: "#81cdc6",
          100: "#b3e0dc",
        },

        // Old names kept so About / Contact keep working until they are updated.
        purple: "#4fb9af",
        lightPurple: "#05998c",
      },
      backgroundImage: {
        // Soft light coming from the top, as in the reference design
        "teal-glow":
          "radial-gradient(ellipse 80% 60% at 50% 0%, rgba(5,153,140,0.45), transparent 70%)",
        // Dark-to-light teal sweep, mirroring the palette swatch itself
        aurora: "linear-gradient(135deg, #025043 0%, #05998c 55%, #81cdc6 100%)",
      },
      screens: {
        sm: "480px",
        md: "768px",
        lg: "1024px",
      },
      animation: {
        blink: "blink 1s steps(2, start) infinite",
        fadeIn: "fadeIn 0.5s ease-out forwards",
      },
      keyframes: {
        blink: {
          "0%, 100%": { opacity: "1" },
          "50%": { opacity: "0" },
        },
        fadeIn: {
          "0%": { opacity: "0", transform: "translateY(10px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
      },
    },
  },
  plugins: [],
};

export default config;