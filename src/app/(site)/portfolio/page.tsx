
import HeroSub from "@/components/SharedComponent/HeroSub";
import Portfolio from "@/components/Home/portfolio";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Portfolio | Crypgo",
  description: "Explore our cryptocurrency portfolio and projects",
};

const PortfolioPage = () => {
  return (
    <>
      <HeroSub title="Portfolio" />
      <Portfolio />
    </>
  );
};

export default PortfolioPage;
