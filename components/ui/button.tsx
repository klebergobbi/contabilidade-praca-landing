import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-full text-base font-semibold tracking-tight transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-gold disabled:pointer-events-none disabled:opacity-60 active:scale-[0.98]",
  {
    variants: {
      variant: {
        whatsapp:
          "bg-whatsapp text-white shadow-whatsapp hover:bg-whatsapp-dark",
        gold: "bg-gold text-graphite-900 shadow-gold hover:bg-gold-400",
        outline:
          "border border-graphite-700/20 bg-white text-graphite-900 hover:bg-cloud",
        ghost: "text-graphite-900 hover:bg-cloud",
      },
      size: {
        default: "h-12 px-6 py-3",
        lg: "h-14 px-8 text-lg",
        sm: "h-10 px-4 text-sm",
        icon: "h-12 w-12",
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
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
}

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
