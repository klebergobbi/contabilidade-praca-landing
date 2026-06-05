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
        // Marca
        gold: {
          DEFAULT: "#F2B705",
          50: "#FEF8E0",
          100: "#FCEDB0",
          400: "#F5C534",
          500: "#F2B705",
          600: "#C99700",
        },
        graphite: {
          DEFAULT: "#0E1116",
          900: "#0E1116",
          800: "#141922",
          700: "#1A1F26",
        },
        // Neutros
        cloud: "#F5F6F8",
        cream: "#FBF4E2", // interlúdio quente (modelo Stripe), em tom dourado
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
        soft: "0 4px 24px -8px rgba(14, 17, 22, 0.12)",
        gold: "0 8px 30px -8px rgba(242, 183, 5, 0.45)",
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
