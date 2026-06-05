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
        lg: "2.5rem",
      },
      screens: {
        "2xl": "1240px",
      },
    },
    extend: {
      colors: {
        // Sistema de duas faixas (modelo Revolut)
        canvas: {
          dark: "#000000", // true black, storytelling
          light: "#FFFFFF", // catálogo
        },
        surface: {
          soft: "#F4F4F4", // off-white em faixas claras
          deep: "#0A0A0A", // inset escuro
          elevated: "#16181A", // card escuro luminoso
        },
        ink: {
          DEFAULT: "#191C1F", // texto em faixa clara
          body: "#1F2226",
          mute: "#505A63", // secundário
          stone: "#8D969E", // metadados
        },
        // Dourado da marca: o "carimbo" de acento (escasso), no papel do cobalt
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
        sans: ["var(--font-sans)", "system-ui", "sans-serif"],
        display: ["var(--font-display)", "var(--font-sans)", "sans-serif"],
      },
      letterSpacing: {
        // display Revolut: tracking negativo, aumenta com o tamanho
        tightest: "-0.035em",
        tighter: "-0.025em",
        tight: "-0.015em",
        ui: "0.015em", // leve positivo nos labels (precisão fintech)
      },
      borderRadius: {
        sm: "8px",
        md: "12px",
        lg: "20px",
        xl: "28px",
      },
      keyframes: {
        "fade-up": {
          "0%": { opacity: "0", transform: "translateY(16px)" },
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
