import ServiceLayout from "../../components/ServiceLayout";

// These would be your actual images
const heroImage = "/images/email-signature-hero.png";
const previewImage = "/images/email-signature-preview.png";
const portfolioImages = [
  "/images/img1.jpg",
  "/images/img2.jpg",
  "/images/img3.jpg",
];

export default function EmailSignatureService() {
  return (
    <ServiceLayout
      heroTitle="Web Development & UI Design"
      heroTagline="Crafting seamless digital experiences that connect and convert."
      heroImage={heroImage}
      previewImage={previewImage}
      philosophy={{
        line1: "Every interface tells a story; every interaction matters.",
        line2:
          "Our mission is to transform ideas into intuitive digital experiences.",
      }}
      deliverables={[
        {
          title: "Custom Websites",
          description:
            "Tailored interfaces designed for your brand and audience",
          icon: "palette",
        },
        {
          title: "Responsive Design",
          description:
            "Perfect user experience across mobile, tablet, and desktop",
          icon: "zap",
        },
        {
          title: "Optimized Performance",
          description:
            "Fast loading, SEO-friendly, and reliable across browsers",
          icon: "check",
        },
        {
          title: "Scalable Solutions",
          description: "Built to grow with your business and evolving needs",
          icon: "users",
        },
      ]}
      portfolioItems={[
        {
          id: 1,
          title: "Tech Startup Landing Page",
          description: "Modern, clean interface boosting user engagement",
          image: portfolioImages[0],
          link: "/work/tech-startup",
        },
        {
          id: 2,
          title: "Creative Agency Site",
          description: "Dynamic, visually-rich design with smooth interactions",
          image: portfolioImages[1],
          link: "/work/creative-agency",
        },
        {
          id: 3,
          title: "E-commerce Experience",
          description:
            "Intuitive layout optimized for conversion and usability",
          image: portfolioImages[2],
          link: "/work/ecommerce",
        },
      ]}
      processSteps={[
        {
          step: "01",
          title: "Discovery",
          description: "Identify your goals, audience, and brand vision",
          icon: "users",
        },
        {
          step: "02",
          title: "Design & Development",
          description:
            "Crafting interactive layouts and coding responsive pages",
          icon: "fileText",
        },
        {
          step: "03",
          title: "Launch & Support",
          description:
            "Deploying your site with performance and scalability in mind",
          icon: "check",
        },
      ]}
    />
  );
}
