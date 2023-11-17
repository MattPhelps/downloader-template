import Breadcrumb from "@/components/Breadcrumb";
import CallToAction from "@/components/CallToAction";
import Features from "@/components/Home/Features";
import { Metadata } from "next";
import siteConfig from "../../../../siteConfig";
import HeroSection from "@/components/itube-page-components/hero-section/HeroSection";
import HeroBottom from "@/components/itube-page-components/hero-bottom/HeroBottom";
import SupportedSites from "@/components/itube-page-components/supported-sites/SupportedSites";
import FeaturesSection from "@/components/itube-page-components/features/Features";
import HowToSaveSection from "@/components/itube-page-components/how-to-save/HowToSaveSection";
import AwardsAndReviews from "@/components/itube-page-components/awards-and-reviews/AwardsAndReviews";
import Reviews from "@/components/itube-page-components/reviews-section/Reviews";
import YtSaver from "@/components/itube-page-components/yt-saver-video-downloader-section/YtSaver";
import FAQAndTips from "@/components/itube-page-components/faqs-and-tips/FAQAndTips";
import FooterTop from "@/components/itube-page-components/footer-top-section/FooterTop";

const pageTitle = `Buy iTubeGo Today | ${siteConfig.siteName}`;
const pageDescription = `Welcome to iTubeGo, the premium video downloading solution! Experience high-quality, fast, and versatile video downloads from a wide range of platforms. Discover the advanced features and benefits of iTubeGo, your ultimate tool for seamless video saving and offline viewing.`;

export const metadata: Metadata = {
  title: pageTitle,
  description: pageDescription,
};

const itubegoLanderPage = () => {
  return (
    <div className="wrapper">
      <HeroSection />
      <HeroBottom />
      <SupportedSites/>
      <FeaturesSection/>
      <HowToSaveSection/>
      <AwardsAndReviews/>
      <Reviews/>
      <YtSaver/>
      <FAQAndTips/>
      <FooterTop/>
    </div>
  );
};

export default itubegoLanderPage;
