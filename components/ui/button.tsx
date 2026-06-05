import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

/**
 * Botões no modelo Revolut: todos em pílula (rounded-full), altura 48px.
 * - primary: pílula BRANCA sobre o canvas preto (o pixel mais brilhante)
 * - dark: pílula preta sobre faixas claras
 * - whatsapp: verde (exigência da marca, CTA de conversão)
 * - gold: o carimbo de acento dourado, usado com parcimônia
 * - outlineDark/outlineLight: contornos
 */
const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-full font-semibold tracking-ui transition-transform focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-gold disabled:pointer-events-none disabled:opacity-50 active:scale-[0.97]",
  {
    variants: {
      variant: {
        primary: "bg-white text-canvas-dark hover:bg-white/90",
        dark: "bg-canvas-dark text-white hover:bg-ink",
        whatsapp: "bg-whatsapp text-white hover:bg-whatsapp-dark",
        gold: "bg-gold text-canvas-dark hover:bg-gold-600",
        outlineDark: "border border-white/80 text-white hover:bg-white/10",
        outlineLight:
          "border border-ink/80 text-ink hover:bg-ink/[0.04]",
      },
      size: {
        default: "h-12 px-7 text-base",
        lg: "h-[52px] px-8 text-[17px]",
        sm: "h-10 px-5 text-sm",
        icon: "h-12 w-12",
      },
    },
    defaultVariants: {
      variant: "primary",
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
