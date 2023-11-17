import DownloadersListSection from "@/components/DownloadersList";
import { Metadata } from "next";
import siteConfig from '../../../../siteConfig';

const pageTitle = `All Downloaders | ${siteConfig.siteName}`;
const pageDescription = `Explore our comprehensive collection of video downloaders for various websites. Our dedicated page provides easy access to tools for downloading videos from multiple platforms, all in one convenient location. Find the perfect downloader for your needs today.`;

export const metadata: Metadata = {
  title: pageTitle,
  description: pageDescription,
};

const DownloadersPage = () => {
  return (
    <>
      <DownloadersListSection />
    </>
  );
};

export default DownloadersPage;
