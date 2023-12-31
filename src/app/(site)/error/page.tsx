import Breadcrumb from "@/components/Breadcrumb";
import siteConfig from '../../../../siteConfig';
import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const pageTitle = `404 Error | ${siteConfig.siteTitle}`;
const pageDescription = ``;


export const metadata: Metadata = {
  title: pageTitle,
  description: pageDescription,
};

const ErrorPage = () => {
  return (
    <>
    <Header />
      <Breadcrumb pageTitle="404 Error Page" />

      <section className="pt-17.5 lg:pt-22.5 xl:pt-27.5 pb-20 lg:pb-25 xl:pb-30 2xl:pb-[150px]">
        <div
          className="wow fadeInUp mx-auto w-full max-w-[597px] text-center px-4 sm:px-8 lg:px-0"
          data-wow-delay="0.1s"
        >
          <div className="relative aspect-[191/143] max-w-[382px] mx-auto w-full mb-12.5">
            <Image src="/images/404.svg" alt="404" fill />
          </div>
          <h2 className="mb-5.5 text-heading-3 font-bold text-white">
            Oops! Page Not Found.
          </h2>
          <p className="font-medium mb-9">
            The page you are looking for is not available or has been moved. Try
            a different page or go to homepage with the button below.
          </p>
          <Link
            href="/"
            className="hero-button-gradient inline-flex rounded-lg py-3 px-7 text-white font-medium ease-in duration-300 hover:opacity-80"
          >
            Go To Home
          </Link>
        </div>
      </section>
      <Footer /> 
    </>
  );
};

export default ErrorPage;
