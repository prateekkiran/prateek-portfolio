"use client";

import { Button } from "@/components/ui/button";
import { ArrowRight, Zap, TrendingUp, Bot } from "lucide-react";

const stats = [
  { icon: TrendingUp, value: "$390M+", label: "Worth Programs Led" },
  { icon: Bot, value: "35%", label: "AI Efficiency Gains" },
  { icon: Zap, value: "10+", label: "Years Building" },
];

// Profile photo with Bauhaus geometric framing
function ProfileComposition() {
  return (
    <div className="relative w-full max-w-[320px] md:max-w-[400px] lg:max-w-[450px] mx-auto">
      {/* Decorative shapes behind */}
      <div className="absolute -top-4 -right-4 md:-top-6 md:-right-6 w-24 h-24 md:w-32 md:h-32 bg-[#1040C0] border-4 border-black -z-10" />
      <div className="absolute -bottom-4 -left-4 md:-bottom-6 md:-left-6 w-20 h-20 md:w-28 md:h-28 rounded-full bg-[#F0C020] border-4 border-black -z-10" />

      {/* Main photo container */}
      <div className="relative border-4 border-black shadow-[8px_8px_0px_0px_black] bg-white p-2">
        <img
          src="/prateek-portfolio/profile.png"
          alt="Prateek Kiran"
          className="w-full h-auto grayscale hover:grayscale-0 transition-all duration-300"
        />

        {/* Red accent bar */}
        <div className="absolute bottom-0 left-0 right-0 h-2 bg-[#D02020]" />
      </div>

      {/* Small geometric accents */}
      <div className="absolute top-1/2 -right-3 md:-right-4 w-6 h-6 md:w-8 md:h-8 bg-[#D02020] border-2 border-black rotate-45" />
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
            {/* Name */}
            <h2 className="font-heading text-2xl sm:text-3xl md:text-4xl uppercase tracking-tight text-[#1040C0] mb-2">
              Prateek Kiran
            </h2>

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

          {/* Profile photo */}
          <div className="order-1 lg:order-2 flex justify-center lg:justify-end">
            <ProfileComposition />
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
