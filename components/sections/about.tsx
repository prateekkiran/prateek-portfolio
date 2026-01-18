"use client";

import { SectionHeader } from "@/components/ui/section-header";
import { Card } from "@/components/ui/card";
import { Quote } from "lucide-react";

const coreBeliefs = [
  {
    title: "Strategy Without Execution is Hallucination",
    description: "Every roadmap I build comes with a clear path to ship. Vision is worthless if it never reaches users.",
  },
  {
    title: "AI is a Tool, Not a Strategy",
    description: "I integrate AI where it solves real problems - not because it's trendy, but because it delivers measurable impact.",
  },
  {
    title: "Data Informs, Judgment Decides",
    description: "Analytics tell you what happened. Experience and intuition help you decide what to do next.",
  },
];

export function About() {
  return (
    <section id="about" className="relative py-16 md:py-24 bg-[#F0C020] section-divider">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <SectionHeader
          label="About Me"
          title="The Builder's Journey"
          description="A decade of shipping products that matter."
          labelColor="red"
        />

        <div className="grid lg:grid-cols-5 gap-8 lg:gap-12">
          {/* Main narrative - 3 columns */}
          <div className="lg:col-span-3 space-y-6">
            <Card decoration="blue" decorationShape="circle" className="p-6 md:p-8">
              <p className="text-foreground text-lg leading-relaxed mb-4">
                I&apos;ve spent the last 10+ years at the intersection of{" "}
                <span className="font-bold text-[#1040C0]">strategy and execution</span>
                {" "}- building products from zero to scale across healthcare, enterprise data, and B2B SaaS.
              </p>
              <p className="text-muted-foreground leading-relaxed mb-4">
                My career started in commercial operations at Cognizant, where I managed{" "}
                <span className="text-foreground font-bold">$130M+ in vendor contracts</span> and learned how enterprises actually make decisions. That foundation led me to lead{" "}
                <span className="text-foreground font-bold">$390M+ data modernization programs</span>{" "}
                for Fortune 500 clients.
              </p>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Today, I focus on{" "}
                <span className="text-foreground font-bold">AI-native product development</span>
                {" "}- integrating LLMs and agentic workflows into products that ship. At AlohaABA, I&apos;ve driven 35% efficiency gains through AI-powered analytics while scaling the platform to 50+ healthcare provider partners.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                What I&apos;ve learned: the best products aren&apos;t built in strategy decks. They&apos;re built through relentless iteration, cross-functional collaboration, and a deep understanding of what users actually need.
              </p>
            </Card>

            {/* Quote */}
            <div className="bg-[#D02020] border-4 border-black p-6 md:p-8 shadow-[6px_6px_0px_0px_black]">
              <Quote className="w-10 h-10 text-white/40 mb-4" />
              <p className="font-heading text-xl md:text-2xl text-white leading-tight">
                &ldquo;My approach blends strategic vision with hands-on execution, ensuring every product not only ships but thrives in the market.&rdquo;
              </p>
            </div>
          </div>

          {/* Core beliefs - 2 columns */}
          <div className="lg:col-span-2 space-y-4">
            <h3 className="font-heading text-lg uppercase tracking-tight mb-4">
              How I Think
            </h3>

            {coreBeliefs.map((belief, index) => (
              <div
                key={index}
                className="bg-white border-4 border-black p-5 shadow-[4px_4px_0px_0px_black] hover:-translate-y-1 hover:shadow-[6px_6px_0px_0px_black] transition-all"
              >
                <div className="flex items-start gap-3">
                  <div className={`flex-shrink-0 w-8 h-8 border-2 border-black flex items-center justify-center font-heading text-sm ${
                    index === 0 ? "bg-[#D02020] text-white rounded-full" :
                    index === 1 ? "bg-[#1040C0] text-white" :
                    "bg-[#F0C020] text-black rotate-45"
                  }`}>
                    <span className={index === 2 ? "-rotate-45" : ""}>{index + 1}</span>
                  </div>
                  <div>
                    <h4 className="font-bold text-foreground mb-1">
                      {belief.title}
                    </h4>
                    <p className="text-muted-foreground text-sm leading-relaxed">
                      {belief.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}

            {/* Education */}
            <div className="space-y-3 mt-6">
              <h3 className="font-heading text-lg uppercase tracking-tight">
                Education
              </h3>
              <div className="bg-[#1040C0] border-4 border-black p-4">
                <div className="font-heading text-lg text-white">PGDM</div>
                <p className="text-xs font-bold uppercase tracking-wider text-white/60">
                  2015 - 2017
                </p>
                <p className="text-sm text-white/80 mt-1">IIM Udaipur</p>
              </div>
              <div className="bg-white border-4 border-black p-4">
                <div className="font-heading text-lg text-foreground">B.Tech CSE</div>
                <p className="text-xs font-bold uppercase tracking-wider text-muted-foreground">
                  2009 - 2013
                </p>
                <p className="text-sm text-muted-foreground mt-1">DIT, Uttarakhand Technical University</p>
              </div>
              <div className="bg-[#F0C020] border-4 border-black p-4">
                <div className="font-heading text-lg text-black">Fellow, Product Management</div>
                <p className="text-xs font-bold uppercase tracking-wider text-black/60">
                  May 2022
                </p>
                <p className="text-sm text-black/70 mt-1">Upraised</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
