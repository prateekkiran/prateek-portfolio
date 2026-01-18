"use client";

import { SectionHeader } from "@/components/ui/section-header";
import {
  Layers,
  BarChart3,
  Brain,
  Target,
  Rocket,
  Users,
  Bot,
  Workflow,
  Code,
  Shield,
  Building2,
  HeartPulse,
} from "lucide-react";

const skillCategories = [
  {
    title: "Product & Strategy",
    icon: Layers,
    color: "red" as const,
    skills: [
      { name: "Product Vision & Roadmaps", icon: Target },
      { name: "GTM Strategy", icon: Rocket },
      { name: "0-to-1 Product Development", icon: Rocket },
      { name: "Agile Leadership", icon: Users },
      { name: "Customer-Centric Design", icon: Users },
      { name: "Stakeholder Management", icon: Users },
    ],
  },
  {
    title: "AI & Data",
    icon: Brain,
    color: "blue" as const,
    skills: [
      { name: "LLM Integration", icon: Bot },
      { name: "Agentic Workflow Design", icon: Workflow },
      { name: "Prompt Engineering", icon: Code },
      { name: "Data Analytics", icon: BarChart3 },
      { name: "REST APIs", icon: Code },
      { name: "Business Intelligence", icon: BarChart3 },
    ],
  },
  {
    title: "Domains & Compliance",
    icon: Building2,
    color: "yellow" as const,
    skills: [
      { name: "B2B SaaS", icon: Building2 },
      { name: "Healthcare / ABA", icon: HeartPulse },
      { name: "Enterprise Data", icon: Layers },
      { name: "Regulatory Compliance", icon: Shield },
      { name: "Cross-functional Leadership", icon: Users },
      { name: "Vendor Management", icon: Users },
    ],
  },
];

const certifications = [
  { name: "PMP", issuer: "PMI" },
  { name: "Azure Fundamentals", issuer: "Microsoft" },
  { name: "SAFe 5 PO/PM", issuer: "Scaled Agile" },
  { name: "Product Analytics Micro-Certification", issuer: "Product School" },
];

const languages = [
  { name: "English", level: "Native" },
  { name: "Hindi", level: "Native" },
  { name: "Punjabi", level: "Basic" },
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

export function Skills() {
  return (
    <section id="skills" className="relative py-16 md:py-24 bg-white section-divider">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <SectionHeader
          label="Expertise"
          title="What I Bring"
          description="A toolkit built for shipping AI-native products at enterprise scale."
          labelColor="blue"
        />

        {/* Skills Grid */}
        <div className="grid md:grid-cols-3 gap-6 md:gap-8 mb-12">
          {skillCategories.map((category, index) => (
            <div
              key={index}
              className="bg-white border-4 border-black shadow-[8px_8px_0px_0px_black] group hover:-translate-y-1 hover:shadow-[12px_12px_0px_0px_black] transition-all"
            >
              {/* Category header */}
              <div className={`${colorClasses[category.color].bg} border-b-4 border-black p-4 flex items-center gap-3`}>
                <div className={`w-10 h-10 bg-white border-2 border-black flex items-center justify-center ${
                  index === 0 ? "rounded-full" : index === 2 ? "rotate-45" : ""
                }`}>
                  <category.icon className={`w-5 h-5 text-black ${index === 2 ? "-rotate-45" : ""}`} />
                </div>
                <h3 className={`font-heading text-lg uppercase tracking-tight ${colorClasses[category.color].text}`}>
                  {category.title}
                </h3>
              </div>

              {/* Skills list */}
              <div className="p-4">
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill, skillIndex) => (
                    <span
                      key={skillIndex}
                      className={`px-3 py-2 text-xs font-bold uppercase tracking-wider border-2 border-black ${
                        skillIndex === 0 ? colorClasses[category.color].bg + " " + colorClasses[category.color].text : "bg-white text-foreground"
                      }`}
                    >
                      {skill.name}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom row: Certifications and Languages */}
        <div className="grid md:grid-cols-2 gap-6 md:gap-8">
          {/* Certifications */}
          <div className="bg-[#1040C0] border-4 border-black p-6 shadow-[6px_6px_0px_0px_black]">
            <h3 className="font-heading text-lg uppercase tracking-tight text-white mb-4">
              Certifications
            </h3>
            <div className="flex flex-wrap gap-3">
              {certifications.map((cert, index) => (
                <div
                  key={index}
                  className="px-4 py-2 bg-white border-2 border-black text-sm"
                >
                  <span className="font-bold text-foreground">{cert.name}</span>
                  <span className="text-muted-foreground ml-2">• {cert.issuer}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Languages */}
          <div className="bg-[#F0C020] border-4 border-black p-6 shadow-[6px_6px_0px_0px_black]">
            <h3 className="font-heading text-lg uppercase tracking-tight text-black mb-4">
              Languages
            </h3>
            <div className="flex gap-4">
              {languages.map((lang, index) => (
                <div
                  key={index}
                  className="flex-1 bg-white border-2 border-black p-3 text-center"
                >
                  <div className="font-bold text-foreground">{lang.name}</div>
                  <div className="text-xs text-muted-foreground uppercase">{lang.level}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
