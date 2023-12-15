import { Metadata } from "next";
import siteConfig from "../../../../siteConfig";
import LanderHero from "@/components/Lander/LanderHero/landerHero";
import SupportedSites from "@/components/Lander/SupportedSites/supportedSites";
import FeaturesSection from "@/components/Lander/Features/features";
import HowToUse from "@/components/Lander/HowToUse/howToUse";
import HowToUseBar from "@/components/Lander/HowToUseBar/howToUseBar";
import Reviews from "@/components/Lander/Reviews/reviews";
import DownloadBar from "@/components/Lander/DownloadBar/downloadBar";


const pageTitle = `Buy ${siteConfig.promotedBrand} | ${siteConfig.siteName}`;
const pageDescription = `Welcome to ${siteConfig.promotedBrand}, the premium video downloading solution! Experience high-quality, fast, and versatile video downloads from a wide range of platforms. Discover the advanced features and benefits of ${siteConfig.promotedBrand}, your ultimate tool for seamless video saving and offline viewing.`;

export const metadata: Metadata = {
  title: pageTitle,
  description: pageDescription,
};

const landerPage = () => {
  return (
    <div className="wrapper">
      <LanderHero />
      <SupportedSites/>
      <FeaturesSection/>
      <HowToUseBar/> 
      <HowToUse/> 
      <Reviews/>
      <DownloadBar/>
    </div>
  );
};

export default landerPage;
