import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

/**
 * Botões no modelo Mastercard: pílula ink (radius 20px) com texto creme
 * é a CTA primária; outline branca como secundária; verde reservado ao
 * WhatsApp (exigência da marca). Sem hover chamativo, leve compressão no clique.
 */
const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-btn font-medium tracking-tight transition-transform focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-ink/40 disabled:pointer-events-none disabled:opacity-50 active:scale-[0.97]",
  {
    variants: {
      variant: {
        ink: "border-[1.5px] border-ink bg-ink text-cream hover:bg-ink-soft",
        outline:
          "border-[1.5px] border-ink bg-white text-ink hover:bg-cream-lifted",
        whatsapp: "bg-whatsapp text-white hover:bg-whatsapp-dark",
        gold: "bg-gold text-ink hover:bg-gold-600",
      },
      size: {
        default: "h-11 px-6 text-base",
        lg: "h-[52px] px-8 text-[17px]",
        sm: "h-9 px-5 text-sm",
        icon: "h-11 w-11",
      },
    },
    defaultVariants: {
      variant: "ink",
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
