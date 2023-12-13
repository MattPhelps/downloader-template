import { Metadata } from "next";
import siteConfig from "../../../../siteConfig";
import LanderHero from "@/components/iTubeGoLander/LanderHero/landerHero";
import SupportedSites from "@/components/iTubeGoLander/SupportedSites/supportedSites";
import FeaturesSection from "@/components/iTubeGoLander/Features/features";
import HowToUse from "@/components/iTubeGoLander/HowToUse/howToUse";
import HowToUseBar from "@/components/iTubeGoLander/HowToUseBar/howToUseBar";
import Reviews from "@/components/iTubeGoLander/Reviews/reviews";
import DownloadBar from "@/components/iTubeGoLander/DownloadBar/downloadBar";


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
