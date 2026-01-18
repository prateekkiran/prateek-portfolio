"use client";

import { Button } from "@/components/ui/button";
import { ArrowRight, Zap, TrendingUp, Bot } from "lucide-react";

const stats = [
  { icon: TrendingUp, value: "$390M+", label: "Worth Programs Led" },
  { icon: Bot, value: "35%", label: "AI Efficiency Gains" },
  { icon: Zap, value: "10+", label: "Years Building" },
];

// Bauhaus geometric composition
function GeometricComposition() {
  return (
    <div className="relative w-full h-[300px] md:h-[400px] lg:h-[500px]">
      {/* Large blue circle */}
      <div className="absolute top-0 right-0 w-48 h-48 md:w-64 md:h-64 lg:w-80 lg:h-80 rounded-full bg-[#1040C0] border-4 border-black" />

      {/* Yellow rotated square */}
      <div className="absolute top-1/4 left-1/4 w-32 h-32 md:w-48 md:h-48 lg:w-56 lg:h-56 bg-[#F0C020] border-4 border-black rotate-45" />

      {/* Red square with triangle inside */}
      <div className="absolute bottom-8 left-8 md:bottom-12 md:left-12 w-24 h-24 md:w-32 md:h-32 lg:w-40 lg:h-40 bg-[#D02020] border-4 border-black flex items-center justify-center">
        <div className="w-12 h-12 md:w-16 md:h-16 lg:w-20 lg:h-20 bg-white shape-triangle" />
      </div>

      {/* Small decorative elements */}
      <div className="absolute top-1/2 right-1/4 w-6 h-6 md:w-8 md:h-8 rounded-full bg-black" />
      <div className="absolute bottom-1/3 right-1/3 w-4 h-4 md:w-6 md:h-6 bg-white border-2 border-black" />
    </div>
  );
}

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden bg-background section-divider">
      {/* Dot pattern background */}
      <div className="absolute inset-0 bg-dot-pattern opacity-30" />

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 md:px-8 py-24 md:py-32">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Text content */}
          <div className="order-2 lg:order-1">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-[#1040C0] border-2 border-black mb-8">
              <span className="w-2 h-2 rounded-full bg-[#F0C020]" />
              <span className="text-xs font-bold uppercase tracking-widest text-white">
                Product Leader &bull; Growth & AI
              </span>
            </div>

            {/* Headline */}
            <h1 className="font-heading text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl uppercase tracking-tighter leading-[0.9] mb-6">
              I Build
              <br />
              Products That
              <br />
              <span className="text-[#D02020]">Matter.</span>
            </h1>

            {/* Subheadline */}
            <p className="text-muted-foreground text-base md:text-lg max-w-lg mb-4 leading-relaxed">
              10+ years turning complex challenges into scalable products.
              From $390M data programs to AI-powered platforms that ship.
            </p>

            {/* Philosophy */}
            <p className="text-sm font-bold uppercase tracking-wider text-[#1040C0] mb-10">
              Build. Break. Iterate.
            </p>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" href="#services">
                How I Can Help
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
              <Button variant="outline" size="lg" href="#contact">
                Let&apos;s Build Together
              </Button>
            </div>
          </div>

          {/* Geometric composition */}
          <div className="order-1 lg:order-2 flex justify-center lg:justify-end">
            <GeometricComposition />
          </div>
        </div>

        {/* Stats bar */}
        <div className="mt-16 md:mt-24 grid grid-cols-3 border-4 border-black bg-[#F0C020] divide-x-4 divide-black">
          {stats.map((stat, index) => (
            <div key={index} className="p-4 md:p-6 text-center">
              <div className="flex items-center justify-center gap-2 mb-1">
                <stat.icon className="w-4 h-4 md:w-5 md:h-5 text-black" />
                <span className="font-heading text-xl md:text-2xl lg:text-3xl text-black">
                  {stat.value}
                </span>
              </div>
              <p className="text-xs md:text-sm font-bold uppercase tracking-wider text-black/70">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
