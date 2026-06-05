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
        sm: "1.75rem",
        lg: "2.5rem",
      },
      screens: {
        "2xl": "1120px",
      },
    },
    extend: {
      colors: {
        // Marca — dourado amostrado do Instagram (#F7BA2D).
        // Único acento de ação (modelo Apple: uma só cor interativa).
        gold: {
          DEFAULT: "#F7BA2D",
          50: "#FEF7E2",
          100: "#FDEBB4",
          400: "#FBCB3A",
          500: "#F7BA2D",
          600: "#F0B90B",
          700: "#C99100",
        },
        // Superfícies escuras (tiles Apple), em near-black
        graphite: {
          DEFAULT: "#1D1D1F",
          950: "#000000", // void / global nav
          900: "#1D1D1F", // ink + tile escuro principal
          800: "#272729", // tile escuro 1
          700: "#2A2A2C", // tile escuro 2
          600: "#3A3A3C", // hairline sobre escuro
        },
        // Neutros claros (modelo Apple)
        cloud: "#F5F5F7", // parchment (off-white de alternância)
        cream: "#FAFAFC", // pearl (superfície secundária)
        ink: "#1D1D1F", // texto near-black (nunca preto puro)
        inkmute: "#6E6E73", // texto secundário
        hairline: "#E0E0E0", // borda 1px
        // CTA WhatsApp (exigência da marca — único verde)
        whatsapp: {
          DEFAULT: "#25D366",
          dark: "#1EBE5A",
        },
      },
      fontFamily: {
        sans: ["var(--font-sans)", "system-ui", "-apple-system", "sans-serif"],
        display: ["var(--font-display)", "var(--font-sans)", "sans-serif"],
      },
      letterSpacing: {
        // assinatura "Apple tight": tracking negativo no display
        tightest: "-0.03em",
        tighter: "-0.022em",
        tight: "-0.014em",
      },
      boxShadow: {
        // a ÚNICA sombra do sistema Apple: sob imagens/produtos
        image: "0 3px 30px 0 rgba(0, 0, 0, 0.22)",
        // sombra suave para o raro card flutuante (badges)
        soft: "0 6px 24px -10px rgba(0, 0, 0, 0.25)",
      },
      borderRadius: {
        md: "11px",
        lg: "18px",
        "2xl": "1.25rem",
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
