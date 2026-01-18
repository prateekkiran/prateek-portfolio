"use client";

import { SectionHeader } from "@/components/ui/section-header";

const experiences = [
  {
    id: 1,
    role: "Senior Product Manager",
    company: "AlohaABA India",
    period: "Apr 2025 - Present",
    duration: "Current",
    description:
      "Owning product vision and roadmap for a behavioral data collection platform in the ABA domain. Leading AI integration and team mentorship.",
    achievements: [
      "Integrated LLM-powered analytics, reducing manual review time by 35%",
      "Designed workflows streamlining operations and improving release cycles",
      "Established KPI framework and mentorship program for team performance",
    ],
    color: "red" as const,
  },
  {
    id: 2,
    role: "Product Manager II",
    company: "AlohaABA India",
    period: "Jul 2024 - Mar 2025",
    duration: "9 months",
    description:
      "Expanded platform capabilities ensuring regulatory compliance and optimizing development processes.",
    achievements: [
      "Expanded EVV capabilities, ensuring 100% compliance for 50+ provider partners",
      "Optimized processes, resulting in 15% improvement in time-to-market",
      "Directed cross-functional teams, leading to 10% increase in user engagement",
    ],
    color: "blue" as const,
  },
  {
    id: 3,
    role: "Product Manager",
    company: "AlohaABA India",
    period: "Aug 2023 - Jul 2024",
    duration: "1 year",
    description:
      "Drove new product development from ideation to launch, building scalable platform infrastructure.",
    achievements: [
      "Identified $1.6M+ revenue opportunity through 0-to-1 product development",
      "Built scalable, data-driven platform for advanced analytics capabilities",
      "Secured alignment on 12-month roadmap with clear KPIs",
    ],
    color: "yellow" as const,
  },
  {
    id: 4,
    role: "Associate Product Manager",
    company: "FieldAssist",
    period: "Dec 2022 - Jul 2023",
    duration: "8 months",
    description:
      "Led development and GTM strategy for cross-selling SFA products, collaborating with engineering and customer success.",
    achievements: [
      "Led GTM strategy for Expense Management System and Modern Trade products",
      "Partnered with Customer Success to enhance product MRR",
      "Analyzed product KPIs using crash and stickiness analytics",
    ],
    color: "red" as const,
  },
  {
    id: 5,
    role: "Senior Business Analyst",
    company: "Cognizant",
    period: "May 2019 - Aug 2022",
    duration: "3 years 4 months",
    description:
      "Led enterprise data initiatives for Fortune 500 clients, driving cloud transformation and cost savings.",
    achievements: [
      "Managed data modernization programs exceeding $390M in value",
      "Spearheaded cloud transformation: $0.1M savings, 40% productivity increase",
      "Led multi-market requirements for 4TB+ data integration from 7 sources",
    ],
    color: "blue" as const,
  },
  {
    id: 6,
    role: "Contract & Commercial Lead",
    company: "Cognizant",
    period: "Jun 2017 - Apr 2019",
    duration: "1 year 11 months",
    description:
      "Managed vendor relationships and contract negotiations, driving significant cost optimizations.",
    achievements: [
      "Negotiated $1.3M in savings through strategic proposal optimization",
      "Managed 307 contracts across 75 partners ($130M+ annual value)",
      "Automated PO approvals, reducing manual effort by 90%",
    ],
    color: "yellow" as const,
  },
];

const colorClasses = {
  red: "bg-[#D02020]",
  blue: "bg-[#1040C0]",
  yellow: "bg-[#F0C020]",
};

export function Experience() {
  return (
    <section id="experience" className="relative py-16 md:py-24 bg-[#1040C0] section-divider">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <SectionHeader
          label="Career Journey"
          title="10+ Years of Building"
          description="From enterprise data programs to AI-powered products. A track record of shipping what matters."
          labelColor="yellow"
          className="text-white [&_h2]:text-white [&_p]:text-white/80"
        />

        {/* Timeline - Bauhaus style */}
        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-1 bg-white md:-translate-x-1/2" />

          {/* Timeline items */}
          <div className="space-y-8 md:space-y-12">
            {experiences.map((exp, index) => (
              <div
                key={exp.id}
                className={`relative flex flex-col md:flex-row gap-6 md:gap-8 ${
                  index % 2 === 0 ? "md:flex-row-reverse" : ""
                }`}
              >
                {/* Timeline node - geometric shape */}
                <div
                  className={`absolute left-0 md:left-1/2 w-8 h-8 border-4 border-white md:-translate-x-1/2 z-10 ${
                    colorClasses[exp.color]
                  } ${index % 3 === 0 ? "rounded-full" : index % 3 === 1 ? "" : "rotate-45"}`}
                />

                {/* Content */}
                <div className="md:w-1/2 pl-14 md:pl-0">
                  <div
                    className={`bg-white border-4 border-black p-6 shadow-[6px_6px_0px_0px_black] hover:-translate-y-1 hover:shadow-[8px_8px_0px_0px_black] transition-all ${
                      index % 2 === 0 ? "md:ml-12" : "md:mr-12"
                    }`}
                  >
                    {/* Period badge */}
                    <div className="flex items-center gap-2 mb-4">
                      <span
                        className={`inline-block text-xs font-bold uppercase tracking-wider px-3 py-1 border-2 border-black ${
                          colorClasses[exp.color]
                        } ${exp.color === "yellow" ? "text-black" : "text-white"}`}
                      >
                        {exp.period}
                      </span>
                      <span className="text-xs font-bold text-muted-foreground">
                        {exp.duration}
                      </span>
                    </div>

                    {/* Role & Company */}
                    <h3 className="font-heading text-lg md:text-xl uppercase tracking-tight text-foreground mb-1">
                      {exp.role}
                    </h3>
                    <p className="text-[#1040C0] font-bold mb-4">{exp.company}</p>

                    {/* Description */}
                    <p className="text-muted-foreground text-sm leading-relaxed mb-4">
                      {exp.description}
                    </p>

                    {/* Achievements */}
                    <ul className="space-y-2">
                      {exp.achievements.map((achievement, i) => (
                        <li
                          key={i}
                          className="flex items-start gap-2 text-sm text-muted-foreground"
                        >
                          <span
                            className={`w-2 h-2 mt-1.5 flex-shrink-0 ${
                              colorClasses[exp.color]
                            }`}
                          />
                          <span>{achievement}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* Spacer for opposite side */}
                <div className="hidden md:block md:w-1/2" />
              </div>
            ))}
          </div>
        </div>

        {/* Education highlight */}
        <div className="mt-16 bg-white border-4 border-black p-6 md:p-8 shadow-[8px_8px_0px_0px_black]">
          <span className="text-xs font-bold uppercase tracking-wider text-[#D02020] mb-4 block">
            Education & Credentials
          </span>
          <div className="grid md:grid-cols-3 gap-4">
            <div className="border-2 border-black p-4 bg-[#1040C0]">
              <h3 className="font-heading text-lg uppercase tracking-tight text-white">
                PGDM
              </h3>
              <p className="text-white/60 text-xs">2015 - 2017</p>
              <p className="text-white/80 text-sm mt-1">IIM Udaipur</p>
            </div>
            <div className="border-2 border-black p-4 bg-white">
              <h3 className="font-heading text-lg uppercase tracking-tight text-foreground">
                B.Tech CSE
              </h3>
              <p className="text-muted-foreground text-xs">2009 - 2013</p>
              <p className="text-muted-foreground text-sm mt-1">DIT, Uttarakhand Technical University</p>
            </div>
            <div className="border-2 border-black p-4 bg-[#F0C020]">
              <h3 className="font-heading text-lg uppercase tracking-tight text-black">
                Fellow, Product Management
              </h3>
              <p className="text-black/60 text-xs">May 2022</p>
              <p className="text-black/70 text-sm mt-1">Upraised</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
