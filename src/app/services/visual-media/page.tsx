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
      heroTitle="Visual Media & Photography"
      heroTagline="Capturing your brand story through intentional imagery."
      heroImage={heroImage}
      previewImage={previewImage}
      philosophy={{
        line1: "Images are more than visuals—they are your brand’s voice.",
        line2: "We create visuals that resonate, inspire, and convert.",
      }}
      deliverables={[
        {
          title: "Brand Photography",
          description: "Professional portraits, product, and lifestyle imagery",
          icon: "palette",
        },
        {
          title: "Creative Direction",
          description: "Concept-led shoots aligned with your brand identity",
          icon: "zap",
        },
        {
          title: "Visual Asset Library",
          description: "Organized files ready for web, social, and campaigns",
          icon: "check",
        },
        {
          title: "High-Quality Retouching",
          description: "Polished, professional images ready to publish",
          icon: "users",
        },
      ]}
      portfolioItems={[
        {
          id: 1,
          title: "Luxury Product Shoot",
          description:
            "Elegant, minimal photography highlighting premium features",
          image: portfolioImages[0],
          link: "/work/luxury-product",
        },
        {
          id: 2,
          title: "Creative Portraits",
          description:
            "Studio and environmental portraits reflecting personality",
          image: portfolioImages[1],
          link: "/work/creative-portraits",
        },
        {
          id: 3,
          title: "Lifestyle Branding",
          description: "Narrative-driven images that tell your brand story",
          image: portfolioImages[2],
          link: "/work/lifestyle-branding",
        },
      ]}
      processSteps={[
        {
          step: "01",
          title: "Concept Planning",
          description: "We define the story, style, and visual direction",
          icon: "users",
        },
        {
          step: "02",
          title: "Photography & Production",
          description: "Shoot executed with precision, style, and intention",
          icon: "fileText",
        },
        {
          step: "03",
          title: "Delivery & Usage",
          description: "Polished assets delivered ready for all channels",
          icon: "check",
        },
      ]}
    />
  );
}
