
import HeroSub from "@/components/SharedComponent/HeroSub";
import Work from "@/components/Home/work";
import Timeline from "@/components/Home/timeline";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Us | Crypgo",
  description: "Learn about our company and cryptocurrency expertise",
};

const AboutPage = () => {
  return (
    <>
      <HeroSub title="About Us" />
      <Work />
      <Timeline />
    </>
  );
};

export default AboutPage;
