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
      heroTitle="Email Signature Design"
      heroTagline="Make every email feel like part of your brand story."
      heroImage={heroImage}
      previewImage={previewImage}
      philosophy={{
        line1: "In the quiet space between words, design speaks volumes.",
        line2: "Every pixel has a purpose. Every detail is part of your story.",
      }}
      deliverables={[
        {
          title: "Custom Design",
          description: "Crafted to echo your brand’s tone and visual presence",
          icon: "palette",
        },
        {
          title: "Responsive Layout",
          description:
            "Flawless display across all devices and email platforms",
          icon: "zap",
        },
        {
          title: "Brand Alignment",
          description: "Harmonized with your visual identity for consistency",
          icon: "check",
        },
        {
          title: "Effortless Setup",
          description:
            "Delivered with clean code and a frictionless install guide",
          icon: "mail",
        },
      ]}
      portfolioItems={[
        {
          id: 1,
          title: "Signature Suite · Modern Tech Firm",
          description:
            "Clean, scalable signature system for team-wide deployment",
          image: portfolioImages[0],
          link: "/work/tech-firm",
        },
        {
          id: 2,
          title: "Signature Identity · Creative Studio",
          description:
            "Art-led layouts reflecting creative energy and personality",
          image: portfolioImages[1],
          link: "/work/creative-studio",
        },
        {
          id: 3,
          title: "Signature Experience · Luxury Brand",
          description: "Minimal elegance with a refined, premium aesthetic",
          image: portfolioImages[2],
          link: "/work/luxury-brand",
        },
      ]}
      processSteps={[
        {
          step: "01",
          title: "Discovery",
          description:
            "A focused session to align on your voice, tone, and goals",
          icon: "users",
        },
        {
          step: "02",
          title: "Concept Preview",
          description: "Receive curated design concepts tailored to your brand",
          icon: "fileText",
        },
        {
          step: "03",
          title: "Final Delivery",
          description: "Optimized files with guidance for seamless rollout",
          icon: "check",
        },
      ]}
    />
  );
}
