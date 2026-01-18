import { cn } from "@/lib/utils";
import { ButtonHTMLAttributes, forwardRef, AnchorHTMLAttributes } from "react";

interface ButtonBaseProps {
  variant?: "primary" | "secondary" | "yellow" | "outline" | "ghost";
  size?: "default" | "sm" | "lg";
  shape?: "square" | "pill";
}

interface ButtonAsButton
  extends ButtonBaseProps,
    ButtonHTMLAttributes<HTMLButtonElement> {
  href?: never;
}

interface ButtonAsLink
  extends ButtonBaseProps,
    AnchorHTMLAttributes<HTMLAnchorElement> {
  href: string;
}

type ButtonProps = ButtonAsButton | ButtonAsLink;

const buttonStyles = (
  variant: ButtonBaseProps["variant"] = "primary",
  size: ButtonBaseProps["size"] = "default",
  shape: ButtonBaseProps["shape"] = "square",
  className?: string
) =>
  cn(
    // Base styles
    "inline-flex items-center justify-center font-bold uppercase tracking-wider transition-all duration-200 ease-out",
    "border-2 border-black shadow-[4px_4px_0px_0px_black]",
    "active:translate-x-[2px] active:translate-y-[2px] active:shadow-none",
    "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-black focus-visible:ring-offset-2",
    "disabled:opacity-50 disabled:cursor-not-allowed disabled:active:translate-x-0 disabled:active:translate-y-0 disabled:active:shadow-[4px_4px_0px_0px_black]",

    // Shape
    {
      "rounded-none": shape === "square",
      "rounded-full": shape === "pill",
    },

    // Size variants
    {
      "h-10 px-5 text-sm": size === "sm",
      "h-12 px-6 text-base": size === "default",
      "h-14 px-8 text-lg": size === "lg",
    },

    // Color variants
    {
      // Primary - Red
      "bg-[#D02020] text-white hover:bg-[#D02020]/90":
        variant === "primary",

      // Secondary - Blue
      "bg-[#1040C0] text-white hover:bg-[#1040C0]/90":
        variant === "secondary",

      // Yellow
      "bg-[#F0C020] text-black hover:bg-[#F0C020]/90":
        variant === "yellow",

      // Outline
      "bg-white text-black hover:bg-gray-100":
        variant === "outline",

      // Ghost
      "bg-transparent text-black border-none shadow-none hover:bg-gray-200 active:shadow-none":
        variant === "ghost",
    },

    className
  );

const Button = forwardRef<
  HTMLButtonElement | HTMLAnchorElement,
  ButtonProps
>(({ className, variant = "primary", size = "default", shape = "square", children, ...props }, ref) => {
  if ("href" in props && props.href) {
    return (
      <a
        ref={ref as React.Ref<HTMLAnchorElement>}
        className={buttonStyles(variant, size, shape, className)}
        {...(props as AnchorHTMLAttributes<HTMLAnchorElement>)}
      >
        {children}
      </a>
    );
  }

  return (
    <button
      ref={ref as React.Ref<HTMLButtonElement>}
      className={buttonStyles(variant, size, shape, className)}
      {...(props as ButtonHTMLAttributes<HTMLButtonElement>)}
    >
      {children}
    </button>
  );
});

Button.displayName = "Button";

export { Button };
