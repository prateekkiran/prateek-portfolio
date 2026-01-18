"use client";

import { useState, useEffect } from "react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";

const navLinks = [
  { href: "#services", label: "Services" },
  { href: "#about", label: "About" },
  { href: "#experience", label: "Experience" },
  { href: "#projects", label: "Work" },
  { href: "#contact", label: "Contact" },
];

// Geometric Bauhaus logo component
function GeometricLogo() {
  return (
    <a href="#" className="flex items-center gap-1 group">
      {/* Circle - Red */}
      <div className="w-4 h-4 rounded-full bg-[#D02020] border-2 border-black group-hover:scale-110 transition-transform" />
      {/* Square - Blue */}
      <div className="w-4 h-4 rounded-none bg-[#1040C0] border-2 border-black group-hover:scale-110 transition-transform" />
      {/* Triangle - Yellow */}
      <div className="w-4 h-4 bg-[#F0C020] border-2 border-black shape-triangle group-hover:scale-110 transition-transform" />
      <span className="ml-2 font-heading text-xl uppercase tracking-tight hidden sm:inline">
        PK
      </span>
    </a>
  );
}

export function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-200",
        isScrolled
          ? "bg-background border-b-4 border-black"
          : "bg-transparent"
      )}
    >
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <GeometricLogo />

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-sm font-bold uppercase tracking-wider text-foreground hover:text-[#D02020] transition-colors"
              >
                {link.label}
              </a>
            ))}
          </div>

          {/* CTA Button - Desktop */}
          <div className="hidden md:block">
            <Button size="sm" href="#contact">
              Get in Touch
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2 text-foreground hover:text-[#D02020] transition-colors border-2 border-black bg-white"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={cn(
          "md:hidden absolute top-16 left-0 right-0 bg-white border-b-4 border-black transition-all duration-200",
          isMobileMenuOpen
            ? "opacity-100 translate-y-0"
            : "opacity-0 -translate-y-4 pointer-events-none"
        )}
      >
        <div className="px-4 py-6 flex flex-col gap-4">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm font-bold uppercase tracking-wider text-foreground hover:text-[#D02020] transition-colors py-2 border-b-2 border-black/10"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              {link.label}
            </a>
          ))}
          <Button
            size="sm"
            className="mt-4"
            href="#contact"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            Get in Touch
          </Button>
        </div>
      </div>
    </nav>
  );
}
