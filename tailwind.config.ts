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
        DEFAULT: "1.25rem",
        sm: "1.5rem",
        lg: "2rem",
      },
      screens: {
        "2xl": "1200px",
      },
    },
    extend: {
      colors: {
        // Marca — dourado amostrado do Instagram (#F7BA2D), modelo Binance
        gold: {
          DEFAULT: "#F7BA2D",
          50: "#FEF7E2",
          100: "#FDEBB4",
          400: "#FBCB3A", // realce mais claro (voltagem)
          500: "#F7BA2D", // dourado da marca
          600: "#F0B90B", // estado active/hover (mais profundo)
          700: "#C99100",
        },
        // Superfícies near-black (modelo Binance)
        graphite: {
          DEFAULT: "#0B0E11",
          900: "#0B0E11", // canvas escuro
          800: "#181A20", // ink / base
          700: "#1E2329", // card escuro
          600: "#2B3139", // superfície elevada / hairline
        },
        // Neutros
        cloud: "#FAFAFA", // surface-soft-light (Binance)
        cream: "#F5F5F5", // surface-strong-light (Binance)
        ink: "#4A4F57",
        // CTA
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
        // assinatura tipográfica (modelo Stripe): tracking negativo no display
        tightest: "-0.04em",
        tighter: "-0.03em",
        tight: "-0.02em",
      },
      boxShadow: {
        soft: "0 4px 24px -8px rgba(11, 14, 17, 0.14)",
        gold: "0 8px 30px -8px rgba(247, 186, 45, 0.5)",
        whatsapp: "0 8px 30px -6px rgba(37, 211, 102, 0.5)",
      },
      borderRadius: {
        xl: "0.875rem",
        "2xl": "1.25rem",
      },
      keyframes: {
        "fade-up": {
          "0%": { opacity: "0", transform: "translateY(12px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        "pulse-ring": {
          "0%": { boxShadow: "0 0 0 0 rgba(37, 211, 102, 0.5)" },
          "70%": { boxShadow: "0 0 0 14px rgba(37, 211, 102, 0)" },
          "100%": { boxShadow: "0 0 0 0 rgba(37, 211, 102, 0)" },
        },
      },
      animation: {
        "fade-up": "fade-up 0.5s ease-out both",
        "pulse-ring": "pulse-ring 2.2s infinite",
      },
    },
  },
  plugins: [],
};

export default config;
