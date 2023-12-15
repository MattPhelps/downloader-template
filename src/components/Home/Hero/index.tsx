"use client";
import Image from "next/image";
import Link from "next/link";
import siteConfig from "../../../../siteConfig";
import Render from "../../../components/Render/render";
import DownloadFail from "../../../components/DownloadFail/downloadFail";
import { useState, useRef } from "react";

const Hero = () => {

  const [showRender, setShowRender] = useState(false);
  const renderRef = useRef(null); // Create a ref for the Render component


  const handleDownloadClick = (event) => {
    
    if (siteConfig.functional == "no") {
      window.open(siteConfig.smartlink, '_blank');
    } 
    if (siteConfig.functional == "yes") {

      if (siteConfig.promotedBrand == "YTSaver") {
        window.open(siteConfig.promotedBrandURL);
      }

      if (siteConfig.promotedBrand == "iTubeGo") {
        window.open(siteConfig.promotedBrandSlug);
      }
      
    }

   event.preventDefault(); // Prevents the default link behavior - ADD or remove the href on the button once DONE UVA STUFF
    setShowRender(true); // Sets the showRender state to true
    // Scroll to the Render component after state update
    setTimeout(() => {
      renderRef.current?.scrollIntoView({ behavior: 'smooth', block: 'center' });
    }, 0);
  };

  return (
    <section
      id="home"
      className="relative overflow-hidden z-10 pt-10 md:pt-25 xl:pt-30"
    >

      {/* <!-- Hero Content --> */}
      <div className="mx-auto max-w-[900px] px-4 sm:px-8 xl:px-0 relative z-1">
        <div className="text-center">
          <h1 className="text-[black] dark:text-white mb-6 text-3xl font-extrabold sm:text-5xl xl:text-heading">
            {siteConfig.siteName}
          </h1>
          <p className="max-w-[500px] mx-auto mb-9 font-small md:text-md">
            Download {siteConfig.baseSiteName} videos as MP4
          </p>
          {/* Grouped Input and Button */}
          <div className="flex justify-center items-center mb-4">
            <input
              type="text"
              placeholder="Paste your video link..."
              className="w-full md:w-96 p-3 rounded-l-lg rounded-r-lg border-2 border-gray-300 focus:border-indigo-500 focus:ring focus:ring-indigo-200 focus:ring-opacity-50 mr-2"
            />

            <Link
              href="/itubego"
              onClick={handleDownloadClick}
              target="_blank"
              rel="noopener noreferrer"
              style={{ "--main-color": siteConfig.buttonColor } as any}
              className="button-styling inline-flex rounded-lg py-3 px-7 text-white font-medium ease-in duration-300 hover:opacity-80"
            >
              Download
            </Link>
          </div>
        </div>
      </div>
      <div className="flex justify-center items-center w-full"></div>

      <div
         className="aspect-[1170/411] bg-red-500 relative max-w-[1170px] w-full mx-auto" // Added margin-top (mt-4)
         data-wow-delay="0.1s"
      >
        {/* Conditionally render the Render component */}
      {showRender && (
        <div
          ref={renderRef} // Attach the ref to this div
          className="flex justify-center items-center w-full h-screen" // Added flexbox for centering
        >
          <Render />
        </div>
      )}
      </div>
    </section>
  );
};

export default Hero;
