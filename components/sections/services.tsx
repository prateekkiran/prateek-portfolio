"use client";

import { SectionHeader } from "@/components/ui/section-header";
import { Bot, Rocket, Users, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const services = [
  {
    id: 1,
    title: "AI Product Integration",
    description:
      "Transform your product with AI capabilities. I help teams integrate LLMs, design agentic workflows, and build AI adoption strategies that deliver measurable ROI.",
    features: [
      "LLM integration & prompt engineering",
      "Agentic workflow design",
      "AI adoption strategy & GTM",
      "Regulatory compliance for AI",
    ],
    icon: Bot,
    color: "red" as const,
    metric: { value: "35%", label: "Efficiency gains achieved" },
  },
  {
    id: 2,
    title: "0-to-1 Product Builds",
    description:
      "Take your product from idea to launch. I've built platforms from scratch that identified $1.6M+ revenue opportunities and scaled to serve 50+ enterprise partners.",
    features: [
      "Product vision & roadmap",
      "MVP definition & prioritization",
      "Cross-functional team leadership",
      "Launch strategy & execution",
    ],
    icon: Rocket,
    color: "blue" as const,
    metric: { value: "$1.6M+", label: "Revenue opportunity identified" },
  },
  {
    id: 3,
    title: "Fractional Product Leadership",
    description:
      "Senior product expertise without the full-time commitment. Ideal for growing companies that need experienced product leadership to accelerate their roadmap.",
    features: [
      "Strategic product advisory",
      "Team mentorship & coaching",
      "Process optimization",
      "Stakeholder alignment",
    ],
    icon: Users,
    color: "yellow" as const,
    metric: { value: "50+", label: "Partners scaled" },
  },
];

const colorClasses = {
  red: {
    bg: "bg-[#D02020]",
    text: "text-white",
    light: "bg-[#D02020]/10",
  },
  blue: {
    bg: "bg-[#1040C0]",
    text: "text-white",
    light: "bg-[#1040C0]/10",
  },
  yellow: {
    bg: "bg-[#F0C020]",
    text: "text-black",
    light: "bg-[#F0C020]/20",
  },
};

export function Services() {
  return (
    <section id="services" className="relative py-16 md:py-24 bg-[#F0C020] section-divider">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <SectionHeader
          label="Services"
          title="How I Can Help"
          description="Whether you're building AI capabilities, launching a new product, or need senior product leadership, I bring hands-on expertise that delivers results."
          labelColor="red"
        />

        <div className="grid md:grid-cols-3 gap-6 md:gap-8">
          {services.map((service, index) => (
            <div
              key={service.id}
              className="bg-white border-4 border-black shadow-[8px_8px_0px_0px_black] group hover:-translate-y-2 hover:shadow-[12px_12px_0px_0px_black] transition-all flex flex-col"
            >
              {/* Header */}
              <div className={`${colorClasses[service.color].bg} border-b-4 border-black p-6`}>
                <div className="flex items-center justify-between mb-4">
                  <div className={`w-14 h-14 bg-white border-2 border-black flex items-center justify-center ${
                    index === 0 ? "rounded-full" : ""
                  }`}>
                    <service.icon className="w-7 h-7 text-black" />
                  </div>
                  <div className="text-right">
                    <div className={`font-heading text-2xl ${colorClasses[service.color].text}`}>
                      {service.metric.value}
                    </div>
                    <div className={`text-xs font-bold uppercase tracking-wider ${colorClasses[service.color].text} opacity-80`}>
                      {service.metric.label}
                    </div>
                  </div>
                </div>
                <h3 className={`font-heading text-xl md:text-2xl uppercase tracking-tight ${colorClasses[service.color].text}`}>
                  {service.title}
                </h3>
              </div>

              {/* Content */}
              <div className="p-6 flex-1 flex flex-col">
                <p className="text-muted-foreground text-sm leading-relaxed mb-6">
                  {service.description}
                </p>

                {/* Features */}
                <ul className="space-y-3 mb-6 flex-1">
                  {service.features.map((feature, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <div className={`w-2 h-2 mt-2 ${colorClasses[service.color].bg}`} />
                      <span className="text-sm text-foreground">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="mt-12 text-center">
          <Button variant="primary" size="lg" href="#contact">
            Discuss Your Project
            <ArrowRight className="ml-2 w-4 h-4" />
          </Button>
        </div>
      </div>
    </section>
  );
}
