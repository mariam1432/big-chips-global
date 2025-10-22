"use client";
import Link from "next/link";
import { motion, Variants } from "framer-motion";
import {
  ArrowRight,
  Check,
  LayoutDashboard,
  Feather,
  Camera,
  Mails,
  Zap,
  MessageCircle,
  Star,
  Target,
  Lightbulb,
} from "lucide-react";

// export const metadata = {
//   title:
//     "Digital Services | Web Development, Copywriting & Visual Media - Bigchips Global",
//   description:
//     "Comprehensive digital solutions including web development, copywriting, visual media, and email design. Transform your digital presence with our expert services.",
//   keywords:
//     "web development, copywriting, visual media, email design, digital agency, UI design, content writing, photography, email signatures",
//   openGraph: {
//     title: "Digital Services | Bigchips Global",
//     description: "Comprehensive digital solutions for businesses and creators",
//     type: "website",
//   },
// };

const fadeInUp: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

const stagger = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.15 } },
};

const services = [
  {
    id: 1,
    title: "Web Development & UI Design",
    icon: LayoutDashboard,
    link: "/services/web-development",
    description:
      "Custom, responsive websites that elevate your brand and drive results.",
    features: [
      "Custom Web Development",
      "UI/UX Design",
      "E-commerce Solutions",
      "Website Maintenance",
    ],
    image: "/images/web-development-service.jpg",
    benefits: [
      "Increased online visibility and credibility",
      "Improved user experience and engagement",
      "Mobile-responsive across all devices",
      "Fast loading speeds and SEO optimization",
    ],
  },
  {
    id: 2,
    title: "Content & Copywriting",
    icon: Feather,
    link: "/services/copywriting",
    description:
      "Persuasive, brand-aligned content that engages your audience and converts.",
    features: [
      "Website Copy",
      "Blog Content",
      "Social Media Content",
      "Brand Storytelling",
    ],
    image: "/images/copywriting-service.jpg",
    benefits: [
      "Higher conversion rates and engagement",
      "Consistent brand voice across platforms",
      "SEO-optimized content for better rankings",
      "Compelling storytelling that resonates",
    ],
  },
  {
    id: 3,
    title: "Visual Media & Photography",
    icon: Camera,
    link: "/services/visual-media",
    description:
      "High-quality visuals and photography that capture your brand's story.",
    features: [
      "Product Photography",
      "Brand Photography",
      "Video Production",
      "Graphic Design",
    ],
    image: "/images/visual-media-service.jpg",
    benefits: [
      "Professional imagery that builds trust",
      "Consistent visual identity",
      "Enhanced social media presence",
      "Memorable brand storytelling",
    ],
  },
  {
    id: 4,
    title: "Email Design & HTML Development",
    icon: Mails,
    link: "/services/email-solutions",
    description:
      "Clean, responsive email templates and signatures that connect with your audience.",
    features: [
      "Email Template Design",
      "HTML Development",
      "Email Signatures",
      "Campaign Setup",
    ],
    image: "/images/email-design-service.jpg",
    benefits: [
      "Professional communication appearance",
      "Higher email engagement rates",
      "Consistent branding across emails",
      "Mobile-optimized templates",
    ],
  },
];

const stats = [
  { number: "50+", label: "Projects Completed" },
  { number: "95%", label: "Client Satisfaction" },
  { number: "24/7", label: "Support Available" },
  { number: "2x", label: "Growth Acceleration" },
];

const process = [
  {
    step: "01",
    title: "Discovery & Strategy",
    description:
      "We learn about your business, goals, and target audience to create a tailored strategy.",
    icon: Target,
  },
  {
    step: "02",
    title: "Design & Development",
    description:
      "Our team brings your vision to life with meticulous attention to detail and quality.",
    icon: Lightbulb,
  },
  {
    step: "03",
    title: "Review & Refine",
    description:
      "We collaborate with you to refine and perfect every aspect of the project.",
    icon: Check,
  },
  {
    step: "04",
    title: "Launch & Support",
    description:
      "We deploy your solution and provide ongoing support to ensure success.",
    icon: Zap,
  },
];

export default function ServicesPage() {
  return (
    <main className="min-h-screen bg-[#fcfaf8] text-[#1a1a1a]">
      {/* Hero Section */}
      <section className="relative py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-[#fcfaf8] to-[#f7f4f0]">
        <div className="max-w-6xl mx-auto text-center">
          <motion.div initial="hidden" animate="visible" variants={fadeInUp}>
            <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl leading-[1.1] tracking-wide mb-6">
              Comprehensive Digital Services
            </h1>
            <p className="font-sans text-xl text-[#4a4a4a] max-w-3xl mx-auto leading-relaxed mb-8">
              Elevate your digital presence with our end-to-end solutions. From
              stunning websites to compelling content and professional
              visuals—we bring your brand to life.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/contact"
                className="inline-flex items-center gap-3 px-8 py-4 rounded-full bg-[#C46B5B] text-white border border-[#C46B5B] hover:bg-[#A85648] hover:border-[#A85648] transition-colors font-medium shadow-sm"
              >
                Start Your Project
                <ArrowRight size={18} />
              </Link>
              <button className="inline-flex items-center gap-2 px-8 py-4 rounded-full border border-[#C46B5B] text-[#C46B5B] bg-white hover:bg-[#C46B5B] hover:text-white transition-colors font-medium">
                <MessageCircle size={18} />
                Free Consultation
              </button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={stagger}
            className="grid grid-cols-2 md:grid-cols-4 gap-8"
          >
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                variants={fadeInUp}
                className="text-center"
              >
                <div className="font-serif text-3xl md:text-4xl text-[#C46B5B] font-bold mb-2">
                  {stat.number}
                </div>
                <div className="font-sans text-[#4a4a4a] text-sm md:text-base">
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-[#fcfaf8]">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
            className="text-center mb-16"
          >
            <h2 className="font-serif text-3xl md:text-4xl mb-6">
              Our Digital Services
            </h2>
            <p className="font-sans text-lg text-[#4a4a4a] max-w-3xl mx-auto">
              Each service is crafted to work independently or together,
              creating a cohesive digital ecosystem for your brand.
            </p>
          </motion.div>

          <motion.div
            variants={stagger}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="space-y-16"
          >
            {services.map((service, index) => (
              <motion.div
                key={service.id}
                variants={fadeInUp}
                className={`bg-white rounded-2xl p-8 md:p-12 border border-[#e8e4e0] hover:border-[#C46B5B] transition-all duration-300 ${
                  index % 2 === 0 ? "lg:flex-row" : "lg:flex-row-reverse"
                } lg:flex lg:items-center lg:gap-12`}
              >
                <div className="lg:w-1/2 mb-8 lg:mb-0">
                  <div className="flex items-center gap-4 mb-6">
                    <div className="w-12 h-12 rounded-full bg-[#f8f6f4] flex items-center justify-center group-hover:bg-[#C46B5B] transition-colors">
                      <service.icon
                        className="text-[#5a4a3a] group-hover:text-white"
                        size={24}
                      />
                    </div>
                    <h3 className="font-serif text-2xl md:text-3xl">
                      {service.title}
                    </h3>
                  </div>

                  <p className="font-sans text-[#4a4a4a] text-lg mb-6 leading-relaxed">
                    {service.description}
                  </p>

                  <div className="mb-6">
                    <h4 className="font-sans font-semibold text-[#1a1a1a] mb-3">
                      What&apos;s Included:
                    </h4>
                    <ul className="space-y-2">
                      {service.features.map((feature, idx) => (
                        <li
                          key={idx}
                          className="flex items-center gap-3 text-[#4a4a4a]"
                        >
                          <Check size={16} className="text-[#C46B5B]" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="mb-8">
                    <h4 className="font-sans font-semibold text-[#1a1a1a] mb-3">
                      Key Benefits:
                    </h4>
                    <ul className="space-y-2">
                      {service.benefits.map((benefit, idx) => (
                        <li
                          key={idx}
                          className="flex items-start gap-3 text-[#4a4a4a]"
                        >
                          <Star
                            size={16}
                            className="text-[#C46B5B] mt-0.5 flex-shrink-0"
                          />
                          {benefit}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <Link
                    href={service.link}
                    className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-[#f8f6f4] text-[#5a4a3a] hover:bg-[#C46B5B] hover:text-white transition-colors font-medium group/link"
                  >
                    Explore {service.title.split("&")[0]}
                    <ArrowRight
                      size={16}
                      className="group-hover/link:translate-x-1 transition-transform"
                    />
                  </Link>
                </div>

                <div className="lg:w-1/2">
                  <div className="relative aspect-[4/3] rounded-xl overflow-hidden bg-gradient-to-br from-[#faf8f5] to-[#f5f1ec]">
                    <div className="absolute inset-0 bg-gradient-to-t from-black/10 to-transparent" />
                    <div className="absolute bottom-4 left-4 right-4 text-white">
                      <div className="bg-black/30 backdrop-blur-sm rounded-lg p-4">
                        <p className="font-sans text-sm">
                          Professional {service.title.toLowerCase()} solutions
                          tailored to your brand
                        </p>
                      </div>
                    </div>
                    {/* Replace with actual image */}
                    <div className="w-full h-full bg-gradient-to-br from-[#C46B5B]/10 to-[#f5f1ec] flex items-center justify-center">
                      <service.icon size={48} className="text-[#C46B5B]/30" />
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
            className="text-center mb-16"
          >
            <h2 className="font-serif text-3xl md:text-4xl mb-6">
              Our Process
            </h2>
            <p className="font-sans text-lg text-[#4a4a4a] max-w-3xl mx-auto">
              A collaborative approach that ensures your vision is brought to
              life with precision and care.
            </p>
          </motion.div>

          <motion.div
            variants={stagger}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid md:grid-cols-2 lg:grid-cols-4 gap-8"
          >
            {process.map((step, index) => (
              <motion.div
                key={index}
                variants={fadeInUp}
                className="text-center group"
              >
                <div className="relative mb-6">
                  <div className="w-16 h-16 rounded-full bg-white border border-[#e8e4e0] group-hover:border-[#C46B5B] flex items-center justify-center mx-auto mb-4 transition-colors">
                    <step.icon
                      size={24}
                      className="text-[#5a4a3a] group-hover:text-[#C46B5B] transition-colors"
                    />
                  </div>
                  {index < process.length - 1 && (
                    <div className="hidden lg:block absolute top-8 left-[62%] w-full h-0.5 bg-[#e8e4e0] group-hover:bg-[#C46B5B] transition-colors"></div>
                  )}
                </div>
                <div className="text-sm text-[#7a6d65] group-hover:text-[#C46B5B] mb-2 transition-colors font-semibold">
                  {step.step}
                </div>
                <h3 className="font-serif text-xl mb-4">{step.title}</h3>
                <p className="font-sans text-[#4a4a4a] leading-relaxed">
                  {step.description}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-[#faf7f5]">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
          >
            <h2 className="font-serif text-3xl md:text-4xl mb-6">
              Ready to Transform Your Digital Presence?
            </h2>
            <p className="font-sans text-lg text-[#4a4a4a] mb-8 max-w-2xl mx-auto">
              Let&apos;s discuss your project and create something exceptional
              together. We&apos;re here to bring your vision to life.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/contact"
                className="inline-flex items-center gap-3 px-8 py-4 rounded-full bg-[#C46B5B] text-white border border-[#C46B5B] hover:bg-[#A85648] hover:border-[#A85648] transition-colors font-medium shadow-sm"
              >
                Start Your Project
                <ArrowRight size={18} />
              </Link>
              <Link
                href="/portfolio"
                className="inline-flex items-center gap-3 px-8 py-4 rounded-full border border-[#C46B5B] text-[#C46B5B] bg-white hover:bg-[#C46B5B] hover:text-white transition-colors font-medium"
              >
                View Our Work
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </main>
  );
}
