"use client";

import { SectionHeader } from "@/components/ui/section-header";
import { Button } from "@/components/ui/button";
import { ArrowUpRight, Bot, Database, Shield, Rocket } from "lucide-react";

const projects = [
  {
    id: 1,
    title: "LLM-Powered Analytics Platform",
    company: "AlohaABA",
    challenge: "Manual behavioral data review was a major bottleneck, consuming significant clinical time.",
    solution: "Integrated LLM-powered analytics to automate insight generation from unstructured behavioral data.",
    impact: "35%",
    impactLabel: "Reduction in manual review time",
    icon: Bot,
    tags: ["AI", "Healthcare", "LLM"],
    color: "red" as const,
  },
  {
    id: 2,
    title: "$390M Data Modernization",
    company: "Cognizant",
    challenge: "Fortune 500 clients struggling with legacy data systems across multiple markets.",
    solution: "Led cloud transformation initiative with roadmap design and proof-of-concept execution.",
    impact: "$390M+",
    impactLabel: "Program value managed",
    icon: Database,
    tags: ["Enterprise", "Data", "Cloud"],
    color: "blue" as const,
  },
  {
    id: 3,
    title: "EVV Compliance Platform",
    company: "AlohaABA",
    challenge: "Healthcare providers needed 100% regulatory compliance for Electronic Visit Verification.",
    solution: "Expanded EVV capabilities with scalable platform serving 50+ provider partners.",
    impact: "100%",
    impactLabel: "Regulatory compliance achieved",
    icon: Shield,
    tags: ["Compliance", "Healthcare", "B2B"],
    color: "yellow" as const,
  },
  {
    id: 4,
    title: "0-to-1 Revenue Discovery",
    company: "AlohaABA",
    challenge: "Identify new product opportunities in the ABA space with measurable revenue potential.",
    solution: "Drove new product development from ideation to launch with data-driven platform infrastructure.",
    impact: "$1.6M+",
    impactLabel: "Revenue opportunity identified",
    icon: Rocket,
    tags: ["Strategy", "0-to-1", "Growth"],
    color: "red" as const,
  },
];

const colorClasses = {
  red: {
    bg: "bg-[#D02020]",
    text: "text-white",
  },
  blue: {
    bg: "bg-[#1040C0]",
    text: "text-white",
  },
  yellow: {
    bg: "bg-[#F0C020]",
    text: "text-black",
  },
};

export function Projects() {
  return (
    <section id="projects" className="relative py-16 md:py-24 bg-white section-divider">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <SectionHeader
          label="Case Studies"
          title="Impact in Action"
          description="Real problems. Real solutions. Measurable results."
          labelColor="blue"
        />

        <div className="grid md:grid-cols-2 gap-6 md:gap-8">
          {projects.map((project, index) => (
            <div
              key={project.id}
              className="relative bg-white border-4 border-black shadow-[8px_8px_0px_0px_black] group hover:-translate-y-1 hover:shadow-[12px_12px_0px_0px_black] transition-all"
            >
              {/* Header with impact metric */}
              <div className={`${colorClasses[project.color].bg} border-b-4 border-black p-6`}>
                <div className="flex items-start justify-between">
                  <div>
                    <div className={`w-12 h-12 bg-white border-2 border-black flex items-center justify-center mb-4 ${
                      index % 2 === 0 ? "rounded-full" : ""
                    }`}>
                      <project.icon className="w-6 h-6 text-black" />
                    </div>
                    <span className={`text-xs font-bold uppercase tracking-wider ${colorClasses[project.color].text} opacity-80`}>
                      {project.company}
                    </span>
                  </div>
                  <div className="text-right">
                    <div className={`font-heading text-3xl md:text-4xl ${colorClasses[project.color].text}`}>
                      {project.impact}
                    </div>
                    <div className={`text-xs font-bold uppercase tracking-wider ${colorClasses[project.color].text} opacity-80 max-w-[120px]`}>
                      {project.impactLabel}
                    </div>
                  </div>
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                {/* Title */}
                <h3 className="font-heading text-xl md:text-2xl uppercase tracking-tight text-foreground mb-4">
                  {project.title}
                </h3>

                {/* Challenge & Solution */}
                <div className="space-y-4 mb-6">
                  <div>
                    <span className="text-xs font-bold uppercase tracking-wider text-[#D02020] block mb-1">
                      Challenge
                    </span>
                    <p className="text-muted-foreground text-sm leading-relaxed">
                      {project.challenge}
                    </p>
                  </div>
                  <div>
                    <span className="text-xs font-bold uppercase tracking-wider text-[#1040C0] block mb-1">
                      Solution
                    </span>
                    <p className="text-muted-foreground text-sm leading-relaxed">
                      {project.solution}
                    </p>
                  </div>
                </div>

                {/* Tags */}
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag, i) => (
                    <span
                      key={i}
                      className="px-3 py-1 text-xs font-bold uppercase tracking-wider text-black bg-[#F0F0F0] border-2 border-black"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              {/* Geometric decoration */}
              <div className={`absolute -bottom-2 -right-2 w-8 h-8 ${colorClasses[project.color].bg} border-2 border-black hidden group-hover:block`} />
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="mt-12 text-center">
          <Button variant="secondary" size="lg" href="#contact">
            Discuss Your Challenge
            <ArrowUpRight className="ml-2 w-4 h-4" />
          </Button>
        </div>
      </div>
    </section>
  );
}
