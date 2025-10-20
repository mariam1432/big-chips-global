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
      heroTitle="Content Writing & Copywriting"
      heroTagline="Words that reflect your brand, engage your audience, and convert."
      heroImage={heroImage}
      previewImage={previewImage}
      philosophy={{
        line1: "Every brand has a voice; we help it speak clearly.",
        line2: "From web pages to campaigns, every word carries impact.",
      }}
      deliverables={[
        {
          title: "Website Copy",
          description: "Concise, engaging, and SEO-friendly web content",
          icon: "fileText",
        },
        {
          title: "Email & Marketing Copy",
          description: "Persuasive messaging for campaigns and newsletters",
          icon: "mail",
        },
        {
          title: "Brand Storytelling",
          description: "Narratives that resonate and humanize your brand",
          icon: "users",
        },
        {
          title: "Content Strategy",
          description:
            "Aligning messaging, tone, and channels for maximum impact",
          icon: "check",
        },
      ]}
      portfolioItems={[
        {
          id: 1,
          title: "Tech Startup Website Copy",
          description: "Clear, concise copy reflecting innovation & expertise",
          image: portfolioImages[0],
          link: "/work/tech-copy",
        },
        {
          id: 2,
          title: "Creative Agency Campaign",
          description: "Compelling copy for social media and newsletters",
          image: portfolioImages[1],
          link: "/work/creative-copy",
        },
        {
          id: 3,
          title: "Luxury Brand Storytelling",
          description:
            "Narrative-driven copy that elevates premium positioning",
          image: portfolioImages[2],
          link: "/work/luxury-copy",
        },
      ]}
      processSteps={[
        {
          step: "01",
          title: "Brief & Research",
          description: "Understand your brand, audience, and goals",
          icon: "users",
        },
        {
          step: "02",
          title: "Draft & Review",
          description: "Write content aligned to tone, style, and strategy",
          icon: "fileText",
        },
        {
          step: "03",
          title: "Final Delivery",
          description: "Refined copy delivered, ready to implement",
          icon: "check",
        },
      ]}
    />
  );
}
