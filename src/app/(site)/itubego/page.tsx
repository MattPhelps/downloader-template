import { Metadata } from "next";
import siteConfig from "../../../../siteConfig";
import LanderHero from "@/components/Lander/LanderHero/landerHero";
import SupportedSites from "@/components/Lander/SupportedSites/supportedSites";
import FeaturesSection from "@/components/Lander/Features/features";
import HowToSave from "@/components/Lander/HowToSave/howToSave";
import Reviews from "@/components/Lander/Reviews/reviews";
import DownloadBar from "@/components/Lander/DownloadBar/downloadBar";
import FaqsTips from "@/components/Lander/FaqsTips/faqTips";


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
      {/* <HowToSave/> */}
      <Reviews/>
      <FaqsTips/>
      <DownloadBar/>
    </div>
  );
};

export default landerPage;
