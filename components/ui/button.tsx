import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

/**
 * Botões no modelo Apple: cápsula (pill), sem sombra, micro-interação
 * de scale no active. Dourado é o acento de ação único; verde reservado
 * ao CTA de WhatsApp (exigência da marca).
 */
const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-full font-medium tracking-tight transition-transform focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-gold disabled:pointer-events-none disabled:opacity-50 active:scale-[0.96]",
  {
    variants: {
      variant: {
        whatsapp: "bg-whatsapp text-white hover:bg-whatsapp-dark",
        gold: "bg-gold text-graphite-900 hover:bg-gold-600",
        // ghost pill (segundo CTA, estilo Apple "Learn more")
        ghostGold:
          "border border-gold/60 bg-transparent text-gold-700 hover:bg-gold/10",
        outline:
          "border border-hairline bg-white text-ink hover:bg-cloud",
        dark: "bg-ink text-white hover:bg-graphite-800",
      },
      size: {
        default: "h-11 px-6 text-[17px]",
        lg: "h-12 px-7 text-[17px]",
        sm: "h-9 px-4 text-[15px]",
        icon: "h-11 w-11",
      },
    },
    defaultVariants: {
      variant: "whatsapp",
      size: "default",
    },
  },
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, ...props }, ref) => {
    return (
      <button
        ref={ref}
        className={cn(buttonVariants({ variant, size, className }))}
        {...props}
      />
    );
  },
);
Button.displayName = "Button";

export { Button, buttonVariants };
