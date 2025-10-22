"use client";

import { useState } from "react";
import Link from "next/link";
import { Menu, X, ChevronDown, MessageCircle } from "lucide-react";

export default function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isServicesOpen, setIsServicesOpen] = useState(false);

  const services = [
    {
      name: "Web Development",
      href: "/services/web-development",
      description: "Custom websites & applications",
    },
    {
      name: "Copywriting",
      href: "/services/copywriting",
      description: "Compelling content that converts",
    },
    {
      name: "Visual Media",
      href: "/services/visual-media",
      description: "Photos, videos & graphics",
    },
    {
      name: "Email Solutions",
      href: "/services/email-solutions",
      description: "Campaigns & automation",
    },
    {
      name: "Email Signature Design",
      href: "/services/email-signatures",
      description: "Custom responsive email signatures",
    },
  ];

  const otherLinks = [
    { name: "Home", href: "/" },
    // { name: "Portfolio", href: "/portfolio" },
    // { name: "About", href: "/about" },
    { name: "Contact", href: "/contact" },
  ];

  return (
    <header className="sticky top-0 bg-white/90 backdrop-blur-sm z-50 border-b border-[#e8e4e0]">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link
            href="/"
            className="font-serif text-xl font-bold text-[#1a1a1a]"
          >
            Bigchips Global
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {/* Services Dropdown */}
            <div className="relative">
              <div className="flex items-center gap-1 font-sans text-[#4a4a4a] hover:text-[#1a1a1a] transition-colors">
                <Link href={"/services"}>Services</Link>
                <button onClick={() => setIsServicesOpen(!isServicesOpen)}>
                  <ChevronDown
                    size={16}
                    className={`transition-transform ${
                      isServicesOpen ? "rotate-180" : ""
                    }`}
                  />
                </button>
              </div>

              {/* Dropdown Menu */}
              {isServicesOpen && (
                <>
                  {/* Backdrop */}
                  <div
                    className="fixed inset-0 z-10"
                    onClick={() => setIsServicesOpen(false)}
                  />

                  {/* Dropdown Content */}
                  <div className="absolute top-full left-0 mt-2 w-64 bg-white rounded-lg shadow-sm border border-[#e8e4e0] z-20">
                    <div className="p-2">
                      {services.map((service) => (
                        <Link
                          key={service.name}
                          href={service.href}
                          className="block px-3 py-2 rounded-md hover:bg-[#faf8f6] transition-colors group"
                          onClick={() => setIsServicesOpen(false)}
                        >
                          <div className="font-sans font-medium text-[#1a1a1a] group-hover:text-[#C46B5B] transition-colors">
                            {service.name}
                          </div>
                          <div className="font-sans text-sm text-[#7a6d65]">
                            {service.description}
                          </div>
                        </Link>
                      ))}
                    </div>
                  </div>
                </>
              )}
            </div>

            {/* Other Links */}
            {otherLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className="font-sans text-[#4a4a4a] hover:text-[#1a1a1a] transition-colors"
              >
                {link.name}
              </Link>
            ))}
          </div>

          {/* CTA Button - Desktop */}
          <div className="hidden md:flex items-center space-x-4">
            <Link
              href="/contact"
              className="bg-[#C46B5B] text-white px-6 py-2 rounded-full hover:bg-[#A85648] transition-all font-sans font-medium shadow-sm hover:shadow-md"
            >
              Request Quote
            </Link>
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden p-2 rounded-md text-[#4a4a4a] hover:text-[#1a1a1a] hover:bg-[#faf8f6] transition-colors"
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMobileMenuOpen && (
          <div className="md:hidden border-t border-[#e8e4e0]">
            <div className="px-2 pt-2 pb-3 space-y-1">
              {/* Mobile Services Dropdown */}
              <div className="border-b border-[#e8e4e0] pb-2">
                <button
                  onClick={() => setIsServicesOpen(!isServicesOpen)}
                  className="flex items-center justify-between w-full px-3 py-2 text-left font-sans text-[#4a4a4a] hover:text-[#1a1a1a]"
                >
                  <span className="font-medium">Services</span>
                  <ChevronDown
                    size={16}
                    className={`transition-transform ${
                      isServicesOpen ? "rotate-180" : ""
                    }`}
                  />
                </button>

                {/* Mobile Services Submenu */}
                {isServicesOpen && (
                  <div className="mt-2 space-y-1 bg-[#faf8f6] rounded-lg">
                    {services.map((service) => (
                      <Link
                        key={service.name}
                        href={service.href}
                        className="block px-6 py-3 font-sans text-[#4a4a4a] hover:text-[#1a1a1a] hover:bg-[#f8f6f4] transition-colors"
                        onClick={() => setIsMobileMenuOpen(false)}
                      >
                        <div className="font-medium">{service.name}</div>
                        <div className="text-sm text-[#7a6d65] mt-1">
                          {service.description}
                        </div>
                      </Link>
                    ))}
                  </div>
                )}
              </div>

              {/* Other Mobile Links */}
              {otherLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  className="block px-3 py-2 font-sans text-[#4a4a4a] hover:text-[#1a1a1a] hover:bg-[#faf8f6] rounded-md transition-colors"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {link.name}
                </Link>
              ))}

              {/* Mobile CTA Buttons */}
              <div className="pt-4 space-y-2">
                <Link
                  href="/contact"
                  className="block w-full bg-[#C46B5B] text-white text-center px-4 py-3 rounded-full hover:bg-[#A85648] transition-all font-sans font-medium shadow-sm"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  Request Quote
                </Link>
                <Link
                  href="https://wa.me/yournumber"
                  className="flex items-center justify-center gap-2 w-full border border-[#C46B5B] text-[#C46B5B] px-4 py-3 rounded-full hover:bg-[#C46B5B] hover:text-white transition-all font-sans"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  <MessageCircle size={18} />
                  WhatsApp Us
                </Link>
              </div>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}
