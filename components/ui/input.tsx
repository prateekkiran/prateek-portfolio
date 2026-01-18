import { cn } from "@/lib/utils";
import { InputHTMLAttributes, forwardRef } from "react";

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {}

const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ className, type = "text", ...props }, ref) => {
    return (
      <input
        ref={ref}
        type={type}
        className={cn(
          // Bauhaus input style
          "w-full h-12 px-4 py-2 bg-white text-black text-base font-medium",
          "border-4 border-black rounded-none",
          "placeholder:text-black/40",
          "transition-all duration-200",
          // Focus states
          "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#1040C0] focus-visible:ring-offset-2",
          // Disabled state
          "disabled:opacity-50 disabled:cursor-not-allowed",
          className
        )}
        {...props}
      />
    );
  }
);

Input.displayName = "Input";

export { Input };
