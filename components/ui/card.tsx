import { cn } from "@/lib/utils";
import { HTMLAttributes, forwardRef } from "react";

interface CardProps extends HTMLAttributes<HTMLDivElement> {
  decoration?: "red" | "blue" | "yellow" | "none";
  decorationShape?: "circle" | "square" | "triangle";
}

const Card = forwardRef<HTMLDivElement, CardProps>(
  ({ className, decoration = "none", decorationShape = "circle", children, ...props }, ref) => {
    return (
      <div
        ref={ref}
        className={cn(
          // Base Bauhaus card style
          "relative bg-white border-4 border-black shadow-[8px_8px_0px_0px_black]",
          "transition-transform duration-200 ease-out",
          "hover:-translate-y-1",
          className
        )}
        {...props}
      >
        {/* Geometric decoration in top-right corner */}
        {decoration !== "none" && (
          <div
            className={cn(
              "absolute top-3 right-3 w-3 h-3",
              {
                "bg-[#D02020]": decoration === "red",
                "bg-[#1040C0]": decoration === "blue",
                "bg-[#F0C020]": decoration === "yellow",
              },
              {
                "rounded-full": decorationShape === "circle",
                "rounded-none": decorationShape === "square",
                "shape-triangle": decorationShape === "triangle",
              }
            )}
          />
        )}
        {children}
      </div>
    );
  }
);

Card.displayName = "Card";

const CardHeader = forwardRef<HTMLDivElement, HTMLAttributes<HTMLDivElement>>(
  ({ className, ...props }, ref) => (
    <div ref={ref} className={cn("p-6 pb-4", className)} {...props} />
  )
);
CardHeader.displayName = "CardHeader";

const CardTitle = forwardRef<HTMLHeadingElement, HTMLAttributes<HTMLHeadingElement>>(
  ({ className, ...props }, ref) => (
    <h3
      ref={ref}
      className={cn("font-heading text-xl md:text-2xl uppercase tracking-tight text-foreground", className)}
      {...props}
    />
  )
);
CardTitle.displayName = "CardTitle";

const CardDescription = forwardRef<HTMLParagraphElement, HTMLAttributes<HTMLParagraphElement>>(
  ({ className, ...props }, ref) => (
    <p ref={ref} className={cn("text-muted-foreground text-sm mt-2", className)} {...props} />
  )
);
CardDescription.displayName = "CardDescription";

const CardContent = forwardRef<HTMLDivElement, HTMLAttributes<HTMLDivElement>>(
  ({ className, ...props }, ref) => (
    <div ref={ref} className={cn("p-6 pt-0", className)} {...props} />
  )
);
CardContent.displayName = "CardContent";

const CardFooter = forwardRef<HTMLDivElement, HTMLAttributes<HTMLDivElement>>(
  ({ className, ...props }, ref) => (
    <div ref={ref} className={cn("p-6 pt-0", className)} {...props} />
  )
);
CardFooter.displayName = "CardFooter";

export { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter };
