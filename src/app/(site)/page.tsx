import CallToAction from "@/components/CallToAction";
import Head from 'next/head';
import Features from "@/components/Home/Features";
import FeaturesList from "@/components/Home/FeaturesList";
import Hero from "@/components/Home/Hero";
import { Metadata } from "next";
import siteConfig from '../../../siteConfig';
import Faq from "@/components/Faq";

const pageTitle = `${siteConfig.siteTitle}`;
const pageDescription = `${siteConfig.siteDescription}`;

export const metadata: Metadata = {
  title: pageTitle,
  description: pageDescription,
};

export default function Home() {
  return (
    <>
      <Hero />
      <Features />
      <Faq />
      {/* <CallToAction /> */}
    </>
  );
}
