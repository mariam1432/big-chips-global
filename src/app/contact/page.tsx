"use client";
import { motion, Variants } from "framer-motion";
import {
  Phone,
  Mail,
  Clock,
  MessageCircle,
  Send,
  ArrowRight,
} from "lucide-react";

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
  visible: { transition: { staggerChildren: 0.1 } },
};

const contactInfo = [
  // {
  //   icon: MapPin,
  //   title: "Our Office",
  //   details: ["123 Business District", "Dubai, UAE"],
  //   description: "Visit us for a consultation",
  // },
  {
    icon: Phone,
    title: "Phone",
    details: ["+971 XX XXX XXXX", "+971 XX XXX XXXX"],
    description: "Mon to Fri 9am to 6pm",
  },
  {
    icon: Mail,
    title: "Email",
    details: ["hello@bigchipsglobal.com", "projects@bigchipsglobal.com"],
    description: "Send us your project details",
  },
  {
    icon: Clock,
    title: "Working Hours",
    details: ["Monday - Friday: 9:00 - 18:00", "Saturday: 10:00 - 14:00"],
    description: "We respond within 2 hours",
  },
];

const services = [
  "Web Development & UI Design",
  "Content & Copywriting",
  "Visual Media & Photography",
  "Email Design & HTML Development",
  "Brand Strategy",
  "Digital Marketing",
];

export default function ContactPage() {
  return (
    <main className="min-h-screen bg-[#fcfaf8] text-[#1a1a1a]">
      {/* Hero Section */}
      <section className="relative py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-[#fcfaf8] to-[#f7f4f0]">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={fadeInUp}
            className="text-center"
          >
            <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl leading-[1.1] tracking-wide mb-6">
              Let's Start Something Great
            </h1>
            <p className="font-sans text-xl text-[#4a4a4a] max-w-3xl mx-auto leading-relaxed">
              Ready to transform your digital presence? Get in touch with our
              team and let's discuss how we can bring your vision to life with
              our comprehensive digital solutions.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16">
            {/* Contact Form */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeInUp}
              className="bg-white rounded-2xl p-8 border border-[#e8e4e0] shadow-sm"
            >
              <h2 className="font-serif text-2xl md:text-3xl mb-2">
                Send us a message
              </h2>
              <p className="font-sans text-[#4a4a4a] mb-8">
                Fill out the form below and we'll get back to you within 2
                hours.
              </p>

              <form className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label
                      htmlFor="firstName"
                      className="block font-sans font-medium text-[#1a1a1a] mb-2"
                    >
                      First Name *
                    </label>
                    <input
                      type="text"
                      id="firstName"
                      required
                      className="w-full px-4 py-3 rounded-lg border border-[#e8e4e0] bg-[#fcfaf8] focus:border-[#C46B5B] focus:ring-2 focus:ring-[#C46B5B]/20 transition-colors outline-none"
                      placeholder="Your first name"
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="lastName"
                      className="block font-sans font-medium text-[#1a1a1a] mb-2"
                    >
                      Last Name *
                    </label>
                    <input
                      type="text"
                      id="lastName"
                      required
                      className="w-full px-4 py-3 rounded-lg border border-[#e8e4e0] bg-[#fcfaf8] focus:border-[#C46B5B] focus:ring-2 focus:ring-[#C46B5B]/20 transition-colors outline-none"
                      placeholder="Your last name"
                    />
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label
                      htmlFor="email"
                      className="block font-sans font-medium text-[#1a1a1a] mb-2"
                    >
                      Email Address *
                    </label>
                    <input
                      type="email"
                      id="email"
                      required
                      className="w-full px-4 py-3 rounded-lg border border-[#e8e4e0] bg-[#fcfaf8] focus:border-[#C46B5B] focus:ring-2 focus:ring-[#C46B5B]/20 transition-colors outline-none"
                      placeholder="your.email@example.com"
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="phone"
                      className="block font-sans font-medium text-[#1a1a1a] mb-2"
                    >
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      className="w-full px-4 py-3 rounded-lg border border-[#e8e4e0] bg-[#fcfaf8] focus:border-[#C46B5B] focus:ring-2 focus:ring-[#C46B5B]/20 transition-colors outline-none"
                      placeholder="+971 XX XXX XXXX"
                    />
                  </div>
                </div>

                <div>
                  <label
                    htmlFor="service"
                    className="block font-sans font-medium text-[#1a1a1a] mb-2"
                  >
                    Service Interested In *
                  </label>
                  <select
                    id="service"
                    required
                    className="w-full px-4 py-3 rounded-lg border border-[#e8e4e0] bg-[#fcfaf8] focus:border-[#C46B5B] focus:ring-2 focus:ring-[#C46B5B]/20 transition-colors outline-none"
                  >
                    <option value="">Select a service</option>
                    {services.map((service, index) => (
                      <option key={index} value={service}>
                        {service}
                      </option>
                    ))}
                    <option value="other">Other</option>
                  </select>
                </div>

                <div>
                  <label
                    htmlFor="budget"
                    className="block font-sans font-medium text-[#1a1a1a] mb-2"
                  >
                    Project Budget *
                  </label>
                  <select
                    id="budget"
                    required
                    className="w-full px-4 py-3 rounded-lg border border-[#e8e4e0] bg-[#fcfaf8] focus:border-[#C46B5B] focus:ring-2 focus:ring-[#C46B5B]/20 transition-colors outline-none"
                  >
                    <option value="">Select budget range</option>
                    <option value="1k-3k">AED 1,000 - 3,000</option>
                    <option value="3k-5k">AED 3,000 - 5,000</option>
                    <option value="5k-10k">AED 5,000 - 10,000</option>
                    <option value="10k+">AED 10,000+</option>
                    <option value="not-sure">Not sure yet</option>
                  </select>
                </div>

                <div>
                  <label
                    htmlFor="message"
                    className="block font-sans font-medium text-[#1a1a1a] mb-2"
                  >
                    Project Details *
                  </label>
                  <textarea
                    id="message"
                    required
                    rows={6}
                    className="w-full px-4 py-3 rounded-lg border border-[#e8e4e0] bg-[#fcfaf8] focus:border-[#C46B5B] focus:ring-2 focus:ring-[#C46B5B]/20 transition-colors outline-none resize-none"
                    placeholder="Tell us about your project, goals, timeline, and any specific requirements..."
                  />
                </div>

                <button
                  type="submit"
                  className="w-full inline-flex items-center justify-center gap-3 px-8 py-4 rounded-full bg-[#C46B5B] text-white border border-[#C46B5B] hover:bg-[#A85648] hover:border-[#A85648] transition-colors font-medium shadow-sm group"
                >
                  Send Message
                  <Send
                    size={18}
                    className="group-hover:translate-x-1 transition-transform"
                  />
                </button>
              </form>
            </motion.div>

            {/* Contact Information */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={stagger}
              className="space-y-8"
            >
              {/* Contact Info Cards */}
              <div className="grid md:grid-cols-2 gap-6">
                {contactInfo.map((item, index) => (
                  <motion.div
                    key={index}
                    variants={fadeInUp}
                    className="bg-white rounded-2xl p-6 border border-[#e8e4e0] hover:border-[#C46B5B] transition-colors group"
                  >
                    <div className="w-12 h-12 rounded-full bg-[#f8f6f4] flex items-center justify-center mb-4 group-hover:bg-[#C46B5B] transition-colors">
                      <item.icon
                        className="text-[#5a4a3a] group-hover:text-white transition-colors"
                        size={20}
                      />
                    </div>
                    <h3 className="font-serif text-lg text-[#1a1a1a] mb-3">
                      {item.title}
                    </h3>
                    <div className="space-y-1 mb-3">
                      {item.details.map((detail, idx) => (
                        <p key={idx} className="font-sans text-[#4a4a4a]">
                          {detail}
                        </p>
                      ))}
                    </div>
                    <p className="font-sans text-sm text-[#7a6d65]">
                      {item.description}
                    </p>
                  </motion.div>
                ))}
              </div>

              {/* Quick Action Cards */}
              <motion.div
                variants={fadeInUp}
                className="bg-gradient-to-br from-[#C46B5B] to-[#A85648] rounded-2xl p-8 text-white"
              >
                <h3 className="font-serif text-2xl mb-4">
                  Prefer a quicker response?
                </h3>
                <p className="font-sans mb-6 opacity-90">
                  Connect with us directly on WhatsApp for instant assistance
                  with your project inquiries.
                </p>
                <a
                  href="https://wa.me/971XXXXXXXXX"
                  className="inline-flex items-center gap-3 px-6 py-3 rounded-full bg-white text-[#C46B5B] hover:bg-[#f8f6f4] transition-colors font-medium group"
                >
                  <MessageCircle size={20} />
                  Chat on WhatsApp
                  <ArrowRight
                    size={16}
                    className="group-hover:translate-x-1 transition-transform"
                  />
                </a>
              </motion.div>

              {/* FAQ Section */}
              <motion.div
                variants={fadeInUp}
                className="bg-white rounded-2xl p-8 border border-[#e8e4e0]"
              >
                <h3 className="font-serif text-2xl mb-6">Common Questions</h3>
                <div className="space-y-4">
                  <div>
                    <h4 className="font-sans font-medium text-[#1a1a1a] mb-2">
                      What's your typical response time?
                    </h4>
                    <p className="font-sans text-[#4a4a4a] text-sm">
                      We respond to all inquiries within 2 hours during business
                      hours, and within 24 hours on weekends.
                    </p>
                  </div>
                  <div>
                    <h4 className="font-sans font-medium text-[#1a1a1a] mb-2">
                      Do you offer free consultations?
                    </h4>
                    <p className="font-sans text-[#4a4a4a] text-sm">
                      Yes, we offer complimentary 30-minute consultations to
                      discuss your project requirements and provide initial
                      recommendations.
                    </p>
                  </div>
                  <div>
                    <h4 className="font-sans font-medium text-[#1a1a1a] mb-2">
                      What information should I include in my project details?
                    </h4>
                    <p className="font-sans text-[#4a4a4a] text-sm">
                      Please include your project goals, target audience,
                      timeline, budget range, and any specific features or
                      requirements you have in mind.
                    </p>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

    </main>
  );
}
