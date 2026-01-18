import { cn } from "@/lib/utils";
import { TextareaHTMLAttributes, forwardRef } from "react";

interface TextareaProps extends TextareaHTMLAttributes<HTMLTextAreaElement> {}

const Textarea = forwardRef<HTMLTextAreaElement, TextareaProps>(
  ({ className, ...props }, ref) => {
    return (
      <textarea
        ref={ref}
        className={cn(
          // Bauhaus textarea style
          "w-full min-h-[120px] px-4 py-3 bg-white text-black text-base font-medium",
          "border-4 border-black rounded-none resize-none",
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

Textarea.displayName = "Textarea";

export { Textarea };
