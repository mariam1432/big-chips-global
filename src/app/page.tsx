"use client";
import Image from "next/image";
import HeroImg from "../../public/images/img1.jpg";
import {
  LayoutDashboard,
  Feather,
  Camera,
  Mails,
  ArrowRight,
  CheckCircle,
  Zap,
  Users,
  Package,
  MessageCircle,
} from "lucide-react";
import Link from "next/link";
import { motion } from "framer-motion";

export default function Home() {
  const services = [
    {
      id: 1,
      title: "Web Development & UI Design",
      icon: LayoutDashboard,
      link: "/services/web-development",
      description:
        "Custom, responsive websites that elevate your brand and drive results.",
    },
    {
      id: 2,
      title: "Content & Copywriting",
      icon: Feather,
      link: "/services/copywriting",
      description:
        "Persuasive, brand-aligned content that engages your audience and converts.",
    },
    {
      id: 3,
      title: "Visual Media & Photography",
      icon: Camera,
      link: "/services/visual-media",
      description:
        "High-quality visuals and photography that capture your brand's story.",
    },
    {
      id: 4,
      title: "Email Design & HTML Development",
      icon: Mails,
      link: "/services/email-solutions",
      description:
        "Clean, responsive email templates and signatures that connect with your audience.",
    },
  ];

  const values = [
    {
      id: 1,
      title: "Fast Delivery",
      description: "Quick turnaround without compromising quality",
      icon: Zap,
    },
    {
      id: 2,
      title: "Modern Design",
      description: "Clean, contemporary aesthetics",
      icon: CheckCircle,
    },
    {
      id: 3,
      title: "Flexible Packages",
      description: "Tailored solutions for your budget",
      icon: Package,
    },
  ];

  const teams = [
    {
      id: 1,
      title: "Web Team",
      description: "Expert developers & designers",
      link: "/services/web-development",
    },
    {
      id: 2,
      title: "Copywriting Team",
      description: "Creative content specialists",
      link: "/services/copywriting",
    },
    {
      id: 3,
      title: "Visual Media Team",
      description: "Professional photographers & editors",
      link: "/services/visual-media",
    },
  ];

  const packages = [
    {
      id: 1,
      title: "Landing Page",
      price: "AED 1,499",
      features: ["Single page", "Mobile responsive", "Contact form"],
    },
    {
      id: 2,
      title: "Multi-Page Website",
      price: "AED 2,999",
      features: ["Up to 5 pages", "SEO optimized", "Content management"],
    },
    {
      id: 3,
      title: "E-Commerce Website",
      price: "AED 4,999",
      features: ["Product catalog", "Payment integration", "Order management"],
    },
  ];

  const processSteps = [
    {
      id: 1,
      title: "Send Requirements",
      description: "Share your project details",
      icon: MessageCircle,
    },
    {
      id: 2,
      title: "Get Proposal",
      description: "Receive tailored solution & quote",
      icon: Package,
    },
    {
      id: 3,
      title: "We Build & Deliver",
      description: "Professional execution & launch",
      icon: CheckCircle,
    },
  ];

  const fadeUp = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  return (
    <main className="min-h-screen bg-[#fcfaf8] text-[#1a1a1a] font-sans">
      {/* Hero Section */}
      <section className="relative py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-[#fcfaf8] to-[#f7f4f0]">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={fadeUp}
            className="space-y-8"
          >
            <h1 className="font-serif text-5xl md:text-6xl lg:text-7xl leading-[1.1] tracking-wide">
              Digital Solutions for Small Businesses & Creators
            </h1>
            <p className="text-xl text-[#4a4a4a] leading-relaxed max-w-lg">
              Transform your digital presence with our comprehensive services
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                href="/services"
                className="group relative inline-flex items-center justify-start px-8 py-4 overflow-hidden font-medium rounded-full bg-[#C46B5B] text-white border border-[#C46B5B] hover:bg-[#A85648] hover:border-[#A85648] transition-all shadow-sm hover:shadow-md"
              >
                <span className="relative flex items-center justify-center gap-3">
                  View Services{" "}
                  <ArrowRight
                    size={18}
                    className="group-hover:translate-x-1 transition-transform"
                  />
                </span>
              </Link>
              <button className="border-2 border-[#C46B5B] text-[#C46B5B] px-8 py-4 rounded-full hover:bg-[#C46B5B] hover:text-white transition-all flex items-center justify-center gap-2 font-medium">
                <MessageCircle size={20} />
                Chat on WhatsApp
              </button>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1, transition: { duration: 0.8 } }}
            className="relative"
          >
            <div className="absolute inset-0 bg-[#f5f1ed] transform rotate-3 scale-105 rounded-2xl"></div>
            <div className="relative bg-white p-8 rounded-2xl shadow-sm border border-[#f0ece8] transform -rotate-1 hover:rotate-0 transition-transform duration-500">
              <Image
                src={HeroImg}
                alt="Digital Agency"
                className="rounded-xl w-full"
                width={600}
                height={400}
                style={{ objectFit: "cover" }}
              />
            </div>
          </motion.div>
        </div>
      </section>

      {/* Services */}
      <section className="py-24 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="font-serif text-4xl mb-4">Our Services</h2>
            <p className="text-lg text-[#4a4a4a] max-w-2xl mx-auto">
              Comprehensive digital solutions for your business
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((service, i) => (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.2 }}
                viewport={{ once: true }}
                className="group relative bg-white rounded-2xl p-8 border border-[#e8e4e0] hover:border-[#C46B5B] hover:shadow-sm transition-all duration-500"
              >
                <div className="w-12 h-12 rounded-full bg-[#f8f6f4] flex items-center justify-center mb-6 group-hover:bg-[#C46B5B] transition-colors duration-300">
                  <service.icon className="text-[#5a4a3a] group-hover:text-white transition-colors" size={24} />
                </div>
                <h3 className="font-serif text-xl mb-3">{service.title}</h3>
                <p className="text-[#4a4a4a] mb-6 leading-relaxed">
                  {service.description}
                </p>
                <Link
                  href={service.link}
                  className="font-medium flex items-center gap-2 group-hover:gap-3 transition-all text-[#5a4a3a] group-hover:text-[#C46B5B]"
                >
                  View Details <ArrowRight size={16} />
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 bg-[#fcfaf8]">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="font-serif text-4xl mb-4">Why Choose Us</h2>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {values.map((value, i) => (
              <motion.div
                key={value.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.2 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <div className="bg-white w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6 shadow-sm border border-[#f0ece8] group hover:border-[#C46B5B] transition-colors">
                  <value.icon className="text-[#5a4a3a] group-hover:text-[#C46B5B] transition-colors" size={32} />
                </div>
                <h3 className="font-serif text-xl mb-3">{value.title}</h3>
                <p className="text-[#4a4a4a]">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Teams Section */}
      <section className="py-24 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="font-serif text-4xl mb-4">Our Teams</h2>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {teams.map((team, i) => (
              <motion.div
                key={team.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.2 }}
                viewport={{ once: true }}
                className="bg-[#faf8f6] rounded-2xl p-8 text-center group hover:shadow-sm transition-all border border-[#f0ece8] hover:border-[#C46B5B]"
              >
                <div className="w-20 h-20 rounded-full bg-[#f8f6f4] flex items-center justify-center mx-auto mb-6 group-hover:bg-[#C46B5B] transition-colors duration-300">
                  <Users className="text-[#5a4a3a] group-hover:text-white transition-colors" size={32} />
                </div>
                <h3 className="font-serif text-xl mb-3">{team.title}</h3>
                <p className="text-[#4a4a4a] mb-6">{team.description}</p>
                <Link href={team.link} className="font-medium text-[#5a4a3a] group-hover:text-[#C46B5B] transition-colors">
                  Explore Services
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Packages Section */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 bg-[#fcfaf8]">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="font-serif text-4xl mb-4">Web Packages</h2>
            <p className="text-lg text-[#4a4a4a] max-w-2xl mx-auto">
              Structured solutions for every need
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {packages.map((pkg, i) => (
              <motion.div
                key={pkg.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.2 }}
                viewport={{ once: true }}
                className="bg-white rounded-2xl p-8 border border-[#e8e4e0] hover:border-[#C46B5B] hover:shadow-sm transition-all duration-500 group"
              >
                <h3 className="font-serif text-2xl mb-4">{pkg.title}</h3>
                <div className="text-3xl font-bold mb-6 text-[#C46B5B]">
                  {pkg.price}
                </div>
                <ul className="space-y-3 mb-8">
                  {pkg.features.map((feature, idx) => (
                    <li
                      key={idx}
                      className="flex items-center gap-3 text-[#4a4a4a]"
                    >
                      <CheckCircle size={16} className="text-[#C46B5B]" />
                      {feature}
                    </li>
                  ))}
                </ul>
                <button className="w-full bg-[#f8f6f4] text-[#3a332c] py-3 rounded-full hover:bg-[#C46B5B] hover:text-white transition-all border border-transparent hover:border-[#C46B5B] font-medium">
                  Get Started
                </button>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-24 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="font-serif text-4xl mb-4">How It Works</h2>
          </div>
          <div className="grid md:grid-cols-3 gap-12">
            {processSteps.map((step, index) => (
              <motion.div
                key={step.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.2 }}
                viewport={{ once: true }}
                className="text-center relative group"
              >
                <div className="relative mb-8">
                  <div className="w-16 h-16 rounded-full bg-white border border-[#e8e4e0] flex items-center justify-center mx-auto mb-4 group-hover:border-[#C46B5B] transition-colors">
                    <step.icon size={24} className="text-[#5a4a3a] group-hover:text-[#C46B5B] transition-colors" />
                  </div>
                  {index < processSteps.length - 1 && (
                    <div className="hidden md:block absolute top-8 left-[62%] w-full h-0.5 bg-[#e8e4e0] group-hover:bg-[#C46B5B] transition-colors"></div>
                  )}
                </div>
                <div className="text-sm text-[#7a6d65] mb-2 group-hover:text-[#C46B5B] transition-colors">
                  Step {index + 1}
                </div>
                <h3 className="font-serif text-xl mb-4">{step.title}</h3>
                <p className="text-[#4a4a4a] leading-relaxed">
                  {step.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 bg-[#faf7f5]">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="font-serif text-4xl mb-6">
            Have a project in mind? Let's discuss.
          </h2>
          <p className="text-lg text-[#4a4a4a] mb-8 max-w-2xl mx-auto">
            Get in touch for a free consultation and quote
          </p>
          <button className="inline-flex items-center gap-3 px-8 py-4 bg-[#C46B5B] text-white rounded-full hover:bg-[#A85648] transition-all duration-300 font-medium shadow-sm hover:shadow-md">
            <MessageCircle size={20} />
            Start Chat on WhatsApp
          </button>
        </div>
      </section>

    
    </main>
  );
}