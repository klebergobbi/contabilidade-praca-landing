import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./content/**/*.{ts,tsx}",
  ],
  theme: {
    container: {
      center: true,
      padding: {
        DEFAULT: "1.5rem",
        lg: "3rem",
      },
      screens: {
        "2xl": "1280px",
      },
    },
    extend: {
      colors: {
        // Superfícies quentes (modelo Mastercard): nunca branco puro
        cream: {
          DEFAULT: "#F3F0EE", // canvas
          lifted: "#FCFBFA", // superfície elevada
          ghost: "#E8E2DA", // watermark creme-sobre-creme
        },
        // Near-black quente para CTAs, texto e rodapé
        ink: {
          DEFAULT: "#141413",
          soft: "#262627",
        },
        slate: "#696969", // texto secundário muted
        // Dourado da marca — ocupa o papel do acento (dots, arcos, indicadores)
        gold: {
          DEFAULT: "#F7BA2D",
          50: "#FEF7E2",
          100: "#FDEBB4",
          400: "#FBCB3A",
          500: "#F7BA2D",
          600: "#F0B90B",
          700: "#C99100",
        },
        // CTA WhatsApp (único verde, exigência da marca)
        whatsapp: {
          DEFAULT: "#25D366",
          dark: "#1EBE5A",
        },
      },
      fontFamily: {
        sans: ["var(--font-sans)", "Sofia Sans", "system-ui", "sans-serif"],
        display: ["var(--font-sans)", "Sofia Sans", "system-ui", "sans-serif"],
      },
      letterSpacing: {
        // headlines editoriais Mastercard: -2%
        tightest: "-0.03em",
        tighter: "-0.02em",
        tight: "-0.015em",
        eyebrow: "0.04em", // +4% nas eyebrows uppercase
      },
      borderRadius: {
        btn: "20px", // CTAs do corpo (raio assinatura)
        stadium: "40px", // molduras de mídia / containers grandes
        pill: "999px", // pílulas, nav, chips
      },
      boxShadow: {
        // sombras atmosféricas (spread largo, baixa opacidade)
        navpill: "0 4px 24px 0 rgba(0, 0, 0, 0.05)",
        card: "0 24px 48px 0 rgba(0, 0, 0, 0.08)",
        feature: "0 40px 90px 0 rgba(0, 0, 0, 0.18)",
      },
      keyframes: {
        "fade-up": {
          "0%": { opacity: "0", transform: "translateY(14px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        "pulse-ring": {
          "0%": { boxShadow: "0 0 0 0 rgba(37, 211, 102, 0.45)" },
          "70%": { boxShadow: "0 0 0 14px rgba(37, 211, 102, 0)" },
          "100%": { boxShadow: "0 0 0 0 rgba(37, 211, 102, 0)" },
        },
      },
      animation: {
        "fade-up": "fade-up 0.6s cubic-bezier(0.16, 1, 0.3, 1) both",
        "pulse-ring": "pulse-ring 2.4s infinite",
      },
    },
  },
  plugins: [],
};

export default config;
