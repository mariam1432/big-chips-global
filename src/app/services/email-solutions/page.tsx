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
      heroTitle="HTML Email Development"
      heroTagline="Bringing your campaigns to life with clean, responsive code."
      heroImage={heroImage}
      previewImage={previewImage}
      philosophy={{
        line1: "Emails are the bridge between your brand and audience.",
        line2:
          "We code with precision, so every campaign shines on every device.",
      }}
      deliverables={[
        {
          title: "Custom HTML Templates",
          description:
            "Responsive templates for newsletters, launches, and campaigns",
          icon: "palette",
        },
        {
          title: "Cross-Platform Compatibility",
          description: "Optimized for Gmail, Outlook, Apple Mail, and more",
          icon: "zap",
        },
        {
          title: "Editable Modules",
          description: "Easily update content without breaking layout",
          icon: "check",
        },
        {
          title: "Implementation Guidance",
          description:
            "Instructions and support to integrate into your email platform",
          icon: "mail",
        },
      ]}
      portfolioItems={[
        {
          id: 1,
          title: "Marketing Campaign Template",
          description:
            "Vibrant, modular HTML email template for high engagement",
          image: portfolioImages[0],
          link: "/work/marketing-email",
        },
        {
          id: 2,
          title: "Transactional Email System",
          description: "Clean and responsive transactional layouts",
          image: portfolioImages[1],
          link: "/work/transactional-email",
        },
        {
          id: 3,
          title: "Newsletter Design",
          description: "Interactive, brand-aligned newsletter templates",
          image: portfolioImages[2],
          link: "/work/newsletter",
        },
      ]}
      processSteps={[
        {
          step: "01",
          title: "Planning & Design",
          description: "Wireframes and mockups created for each template",
          icon: "users",
        },
        {
          step: "02",
          title: "Coding & Testing",
          description: "Pixel-perfect HTML with cross-client testing",
          icon: "fileText",
        },
        {
          step: "03",
          title: "Delivery & Integration",
          description: "Final templates ready to deploy in your email platform",
          icon: "check",
        },
      ]}
    />
  );
}
