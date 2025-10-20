"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  ArrowRight,
  Check,
  Mail,
  Palette,
  Zap,
  Users,
  FileText,
  MessageCircle,
} from "lucide-react";

const iconMap = {
  mail: Mail,
  palette: Palette,
  zap: Zap,
  check: Check,
  users: Users,
  fileText: FileText,
  arrowRight: ArrowRight,
  messageCircle: MessageCircle,
} as const;

/* ---------- motion variants (elegant) ---------- */
const fadeInUp = {
  hidden: { opacity: 0, y: 18 },
  visible: (delay = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut", delay },
  }),
};

const stagger = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.14 } },
};

const cardHoverScale = { scale: 1.01 };

interface ServiceLayoutProps {
  heroTitle: string;
  heroTagline: string;
  heroImage: string;
  previewImage: string;
  philosophy: {
    line1: string;
    line2: string;
  };
  deliverables: Array<{
    title: string;
    description: string;
    icon: keyof typeof iconMap;
  }>;
  portfolioItems: Array<{
    id: number;
    title: string;
    description: string;
    image: string;
    link: string;
  }>;
  processSteps: Array<{
    step: string;
    title: string;
    description: string;
    icon: keyof typeof iconMap;
  }>;
}

export default function ServiceLayout({
  heroTitle,
  heroTagline,
  heroImage,
  previewImage,
  philosophy,
  deliverables,
  portfolioItems,
  processSteps,
}: ServiceLayoutProps) {
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);

  return (
    <div className="min-h-screen bg-[#fcfaf8] text-[#1a1a1a]">
      {/* ---------------- Hero ---------------- */}
      <motion.section
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        className="relative py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-[#fcfaf8] to-[#f7f4f0]"
      >
        <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-12 items-center">
          <motion.div variants={fadeInUp} className="space-y-6" custom={0}>
            <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl leading-[1.06] tracking-wide">
              {heroTitle}
            </h1>
            <p className="font-sans text-lg text-[#4a4a4a] max-w-md">
              {heroTagline}
            </p>

            <div className="flex flex-col sm:flex-row gap-3 mt-3">
              <motion.button
                whileHover={{ x: 4 }}
                className="inline-flex items-center gap-3 px-6 py-3 rounded-full bg-[#C46B5B] text-white border border-[#C46B5B] hover:bg-[#A85648] hover:border-[#A85648] transition-colors shadow-sm font-medium"
              >
                Start Your Design
                <ArrowRight size={16} />
              </motion.button>

              <motion.a
                whileHover={{ scale: 1.02 }}
                href="https://wa.me/XXXXXXXXXXX"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-full border border-[#C46B5B] text-[#C46B5B] bg-white hover:bg-[#C46B5B] hover:text-white transition-colors font-medium"
              >
                <MessageCircle size={16} />
                Chat on WhatsApp
              </motion.a>
            </div>
          </motion.div>

          <motion.div variants={fadeInUp} custom={0.05} className="relative">
            <div className="absolute inset-0 bg-[#f5f1ed] transform rotate-2 rounded-2xl -z-10" />
            <motion.div
              initial={{ scale: 0.99, rotate: -1 }}
              whileHover={{ scale: 1.02, rotate: 0 }}
              transition={{ duration: 0.6 }}
              className="relative bg-white p-6 rounded-2xl border border-[#f0ece8] shadow-sm overflow-hidden"
            >
              <div className="aspect-[4/3] relative rounded-lg overflow-hidden bg-gradient-to-br from-[#faf8f5] to-[#f5f1ec]">
                <Image
                  src={heroImage}
                  alt="Service hero"
                  fill
                  className="object-cover"
                  style={{ objectPosition: "center" }}
                />
              </div>
            </motion.div>
          </motion.div>
        </div>
      </motion.section>

      {/* ---------------- Preview Block ---------------- */}
      <motion.section
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        variants={stagger}
        className="py-12 px-4 sm:px-6 lg:px-8"
      >
        <motion.div variants={fadeInUp as any} className="max-w-4xl mx-auto">
          <div className="relative aspect-[16/9] bg-white rounded-xl overflow-hidden border border-[#f0f0f0] shadow-sm">
            <Image
              src={previewImage}
              alt="Service preview"
              fill
              className="object-cover"
              style={{ objectPosition: "center" }}
            />
          </div>
        </motion.div>
      </motion.section>

      {/* ---------------- Philosophy ---------------- */}
      <motion.section
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        className="py-16 px-4 sm:px-6 lg:px-8 bg-white"
      >
        <motion.div
          variants={fadeInUp as any}
          className="max-w-3xl mx-auto text-center"
        >
          <p className="font-serif text-2xl md:text-3xl text-[#1a1a1a] leading-relaxed mb-4">
            {philosophy.line1}
          </p>
          <p className="font-serif text-2xl md:text-3xl text-[#1a1a1a] leading-relaxed">
            {philosophy.line2}
          </p>
        </motion.div>
      </motion.section>

      {/* ---------------- Deliverables ---------------- */}
      <motion.section
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.15 }}
        className="py-16 px-4 sm:px-6 lg:px-8 bg-[#fcfaf8]"
      >
        <div className="max-w-6xl mx-auto">
          <motion.div
            variants={stagger}
            className="grid md:grid-cols-2 lg:grid-cols-4 gap-6"
          >
            {deliverables.map((item, index) => {
              const IconComponent = iconMap[item.icon];
              return (
                <motion.article
                  key={index}
                  variants={fadeInUp as any}
                  whileHover={cardHoverScale}
                  onHoverStart={() => setHoveredCard(index)}
                  onHoverEnd={() => setHoveredCard(null)}
                  className="group relative bg-white rounded-2xl p-6 border border-[#f0ece8] hover:border-[#C46B5B] hover:shadow-sm transition-all duration-300"
                >
                  <div
                    className={`w-12 h-12 rounded-full flex items-center justify-center mb-5 transition-colors ${
                      hoveredCard === index ? "bg-[#C46B5B]" : "bg-[#f8f6f4]"
                    }`}
                  >
                    <IconComponent
                      size={20}
                      className={`transition-colors ${
                        hoveredCard === index
                          ? "text-white"
                          : "text-[#7a6d65]"
                      }`}
                    />
                  </div>
                  <h3 className="font-serif text-lg text-[#1a1a1a] mb-2">
                    {item.title}
                  </h3>
                  <p className="font-sans text-[#4a4a4a] leading-relaxed text-sm">
                    {item.description}
                  </p>
                </motion.article>
              );
            })}
          </motion.div>
        </div>
      </motion.section>

      {/* ---------------- Portfolio Showcase ---------------- */}
      <motion.section
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        className="py-16 px-4 sm:px-6 lg:px-8 bg-white"
      >
        <div className="max-w-6xl mx-auto">
          <motion.div variants={stagger} className="grid md:grid-cols-3 gap-8">
            {portfolioItems.map((item, idx) => (
              <motion.article
                key={item.id}
                variants={fadeInUp as any}
                whileHover={{ scale: 1.03 }}
                className="group"
              >
                <div className="relative aspect-[4/5] rounded-xl overflow-hidden mb-4 border border-[#f0f0f0] bg-[#faf8f6] shadow-sm group-hover:shadow-md transition-all">
                  <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-700"
                    style={{ objectPosition: "center" }}
                  />
                  <motion.div
                    initial={{ opacity: 0 }}
                    whileHover={{ opacity: 1 }}
                    transition={{ duration: 0.3 }}
                    className="absolute inset-0 bg-black/6"
                  />
                </div>

                <div className="text-center">
                  <h3 className="font-serif text-lg text-[#1a1a1a] mb-2">
                    {item.title}
                  </h3>
                  <p className="font-sans text-[#4a4a4a] mb-4 text-sm">
                    {item.description}
                  </p>
                  <Link
                    href={item.link}
                    className="inline-flex items-center gap-2 text-[#5a4a3a] hover:text-[#C46B5B] font-medium transition-colors group/link"
                  >
                    View Case Study 
                    <ArrowRight size={14} className="group-hover/link:translate-x-1 transition-transform" />
                  </Link>
                </div>
              </motion.article>
            ))}
          </motion.div>
        </div>
      </motion.section>

      {/* ---------------- Process Section ---------------- */}
      <motion.section
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        className="py-16 px-4 sm:px-6 lg:px-8 bg-[#fcfaf8]"
      >
        <motion.div
          variants={stagger}
          className="max-w-4xl mx-auto grid md:grid-cols-3 gap-10"
        >
          {processSteps.map((step, index) => {
            const IconComponent = iconMap[step.icon];
            return (
              <motion.div
                key={index}
                variants={fadeInUp as any}
                className="text-center group"
              >
                <div className="relative mb-6">
                  <div className="w-16 h-16 rounded-full bg-white border border-[#e8e4e0] group-hover:border-[#C46B5B] flex items-center justify-center mx-auto mb-4 transition-colors">
                    <IconComponent 
                      size={20} 
                      className="text-[#5a4a3a] group-hover:text-[#C46B5B] transition-colors" 
                    />
                  </div>
                  {index < processSteps.length - 1 && (
                    <div className="hidden md:block absolute top-8 left-[62%] w-full h-0.5 bg-[#e8e4e0] group-hover:bg-[#C46B5B] transition-colors"></div>
                  )}
                </div>
                <div className="text-sm text-[#7a6d65] group-hover:text-[#C46B5B] mb-2 transition-colors">
                  Step {index + 1}
                </div>
                <h3 className="font-serif text-lg mb-3">{step.title}</h3>
                <p className="font-sans text-[#4a4a4a] text-sm leading-relaxed">
                  {step.description}
                </p>
              </motion.div>
            );
          })}
        </motion.div>
      </motion.section>

      {/* ---------------- Final CTA ---------------- */}
      <motion.section
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        className="py-20 px-4 sm:px-6 lg:px-8 bg-[#faf7f5]"
      >
        <motion.div
          variants={fadeInUp as any}
          className="max-w-3xl mx-auto text-center"
        >
          <p className="font-serif text-2xl md:text-3xl mb-6">
            Let's craft something personal and intentional for your brand.
          </p>

          <motion.button
            whileHover={{ scale: 1.02 }}
            className="inline-flex items-center gap-3 px-6 py-3 rounded-full bg-[#C46B5B] text-white border border-[#C46B5B] hover:bg-[#A85648] hover:border-[#A85648] transition-colors shadow-sm font-medium"
          >
            Start Request
            <ArrowRight size={16} />
          </motion.button>
        </motion.div>
      </motion.section>
    </div>
  );
}