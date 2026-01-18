import { cn } from "@/lib/utils";

interface SectionHeaderProps {
  label?: string;
  title: string;
  description?: string;
  className?: string;
  align?: "left" | "center";
  labelColor?: "red" | "blue" | "yellow";
}

export function SectionHeader({
  label,
  title,
  description,
  className,
  align = "center",
  labelColor = "red",
}: SectionHeaderProps) {
  return (
    <div
      className={cn(
        "mb-12 md:mb-16",
        {
          "text-center": align === "center",
          "text-left": align === "left",
        },
        className
      )}
    >
      {label && (
        <span
          className={cn(
            "inline-block text-sm font-bold uppercase tracking-widest mb-4 px-3 py-1 border-2 border-black",
            {
              "bg-[#D02020] text-white": labelColor === "red",
              "bg-[#1040C0] text-white": labelColor === "blue",
              "bg-[#F0C020] text-black": labelColor === "yellow",
            }
          )}
        >
          {label}
        </span>
      )}
      <h2 className="font-heading text-3xl sm:text-4xl md:text-5xl lg:text-6xl uppercase tracking-tighter leading-[0.9] text-foreground">
        {title}
      </h2>
      {description && (
        <p className="mt-4 text-muted-foreground text-base md:text-lg max-w-2xl mx-auto leading-relaxed">
          {description}
        </p>
      )}
    </div>
  );
}
