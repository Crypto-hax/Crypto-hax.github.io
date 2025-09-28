
import HeroSub from "@/components/SharedComponent/HeroSub";
import Platform from "@/components/Home/platform";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Services | Crypgo",
  description: "Our cryptocurrency development and blockchain services",
};

const ServicesPage = () => {
  return (
    <>
      <HeroSub title="Our Services" />
      <Platform />
    </>
  );
};

export default ServicesPage;
