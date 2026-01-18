"use client";

import { useState } from "react";
import { SectionHeader } from "@/components/ui/section-header";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Mail, Linkedin, MapPin, Send, Check, Copy, Calendar, Phone } from "lucide-react";

const contactOptions = [
  {
    title: "AI Product Integration",
    description: "LLM integration, agentic workflows, AI adoption strategy",
  },
  {
    title: "0-to-1 Product Build",
    description: "New product development from idea to launch",
  },
  {
    title: "Fractional PM",
    description: "Part-time product leadership for your team",
  },
  {
    title: "Advisory / Consulting",
    description: "Strategic product guidance and mentorship",
  },
];

const socialLinks = [
  {
    name: "LinkedIn",
    href: "https://linkedin.com/in/prateekkiran",
    icon: Linkedin,
    label: "Connect on LinkedIn",
  },
  {
    name: "Email",
    href: "mailto:prateekkiran@gmail.com",
    icon: Mail,
    label: "prateekkiran@gmail.com",
  },
  {
    name: "Phone",
    href: "tel:+917042112394",
    icon: Phone,
    label: "+91 70421 12394",
  },
];

export function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    interest: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [copied, setCopied] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    await new Promise((resolve) => setTimeout(resolve, 1000));

    const mailtoLink = `mailto:prateekkiran@gmail.com?subject=Consulting Inquiry: ${formData.interest || 'General'} from ${formData.name}&body=${encodeURIComponent(`Name: ${formData.name}\nEmail: ${formData.email}\nInterest: ${formData.interest}\n\nMessage:\n${formData.message}`)}`;
    window.location.href = mailtoLink;

    setIsSubmitting(false);
    setIsSubmitted(true);
    setTimeout(() => setIsSubmitted(false), 3000);
  };

  const copyEmail = async () => {
    await navigator.clipboard.writeText("prateekkiran@gmail.com");
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section id="contact" className="relative py-16 md:py-24 bg-[#D02020] section-divider">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <SectionHeader
          label="Start a Project"
          title="Let's Build Together"
          description="Ready to ship your next product? Let's talk about how I can help."
          labelColor="yellow"
          className="text-white [&_h2]:text-white [&_p]:text-white/80"
        />

        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12">
          {/* Contact Form */}
          <div className="bg-white border-4 border-black shadow-[8px_8px_0px_0px_black] p-6 md:p-8">
            <h3 className="font-heading text-xl uppercase tracking-tight mb-6">
              Tell Me About Your Project
            </h3>
            <form onSubmit={handleSubmit} className="space-y-5">
              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <label
                    htmlFor="name"
                    className="block text-xs font-bold uppercase tracking-wider text-foreground mb-2"
                  >
                    Name
                  </label>
                  <Input
                    id="name"
                    placeholder="Your name"
                    value={formData.name}
                    onChange={(e) =>
                      setFormData({ ...formData, name: e.target.value })
                    }
                    required
                  />
                </div>

                <div>
                  <label
                    htmlFor="email"
                    className="block text-xs font-bold uppercase tracking-wider text-foreground mb-2"
                  >
                    Email
                  </label>
                  <Input
                    id="email"
                    type="email"
                    placeholder="your@email.com"
                    value={formData.email}
                    onChange={(e) =>
                      setFormData({ ...formData, email: e.target.value })
                    }
                    required
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-foreground mb-3">
                  I&apos;m interested in
                </label>
                <div className="grid grid-cols-2 gap-2">
                  {contactOptions.map((option, index) => (
                    <button
                      key={index}
                      type="button"
                      onClick={() => setFormData({ ...formData, interest: option.title })}
                      className={`p-3 border-2 border-black text-left transition-all ${
                        formData.interest === option.title
                          ? "bg-[#1040C0] text-white"
                          : "bg-white hover:bg-[#F0F0F0]"
                      }`}
                    >
                      <span className="text-xs font-bold uppercase tracking-wider block">
                        {option.title}
                      </span>
                    </button>
                  ))}
                </div>
              </div>

              <div>
                <label
                  htmlFor="message"
                  className="block text-xs font-bold uppercase tracking-wider text-foreground mb-2"
                >
                  Tell me more
                </label>
                <Textarea
                  id="message"
                  placeholder="What are you building? What challenges are you facing?"
                  value={formData.message}
                  onChange={(e) =>
                    setFormData({ ...formData, message: e.target.value })
                  }
                  required
                />
              </div>

              <Button
                type="submit"
                variant="secondary"
                size="lg"
                className="w-full"
                disabled={isSubmitting}
              >
                {isSubmitting ? (
                  "Sending..."
                ) : isSubmitted ? (
                  <>
                    <Check className="mr-2 w-4 h-4" />
                    Message Sent!
                  </>
                ) : (
                  <>
                    <Send className="mr-2 w-4 h-4" />
                    Start the Conversation
                  </>
                )}
              </Button>
            </form>
          </div>

          {/* Contact Info */}
          <div className="space-y-6">
            {/* Direct contact options */}
            <div className="bg-white border-4 border-black shadow-[8px_8px_0px_0px_black] p-6 md:p-8">
              <h3 className="font-heading text-lg uppercase tracking-tight mb-4">
                Or Reach Out Directly
              </h3>
              <div className="space-y-4">
                {socialLinks.map((link, index) => (
                  <a
                    key={link.name}
                    href={link.href}
                    target={link.name === "LinkedIn" ? "_blank" : undefined}
                    rel={link.name === "LinkedIn" ? "noopener noreferrer" : undefined}
                    className="flex items-center gap-4 p-3 border-2 border-black hover:bg-[#F0F0F0] transition-colors group"
                  >
                    <div className={`w-10 h-10 border-2 border-black flex items-center justify-center ${
                      index === 0 ? "bg-[#1040C0] rounded-full" :
                      index === 1 ? "bg-[#D02020]" :
                      "bg-[#F0C020]"
                    }`}>
                      <link.icon className={`w-5 h-5 ${index === 2 ? "text-black" : "text-white"}`} />
                    </div>
                    <div>
                      <span className="text-xs font-bold uppercase tracking-wider text-muted-foreground block">
                        {link.name}
                      </span>
                      <span className="font-bold text-foreground group-hover:text-[#1040C0] transition-colors">
                        {link.label}
                      </span>
                    </div>
                    {link.name === "Email" && (
                      <button
                        onClick={(e) => {
                          e.preventDefault();
                          copyEmail();
                        }}
                        className="ml-auto p-2 hover:bg-[#F0C020] transition-colors"
                        aria-label="Copy email"
                      >
                        {copied ? (
                          <Check className="w-4 h-4 text-black" />
                        ) : (
                          <Copy className="w-4 h-4 text-black" />
                        )}
                      </button>
                    )}
                  </a>
                ))}
              </div>
            </div>

            {/* Location */}
            <div className="bg-[#1040C0] border-4 border-black shadow-[8px_8px_0px_0px_black] p-6 md:p-8">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 bg-white border-2 border-black rounded-full flex items-center justify-center">
                  <MapPin className="w-5 h-5 text-black" />
                </div>
                <div>
                  <p className="font-heading text-lg uppercase tracking-tight text-white">
                    Gurugram, India
                  </p>
                  <p className="text-white/80 text-sm">
                    Available for remote work worldwide
                  </p>
                </div>
              </div>
            </div>

            {/* Availability */}
            <div className="bg-[#F0C020] border-4 border-black shadow-[8px_8px_0px_0px_black] p-6 md:p-8">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-white border-2 border-black flex items-center justify-center">
                  <Calendar className="w-5 h-5 text-black" />
                </div>
                <div>
                  <p className="font-heading text-lg uppercase tracking-tight text-black">
                    Currently Available
                  </p>
                  <p className="text-black/70 text-sm">
                    Taking on new consulting engagements
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
