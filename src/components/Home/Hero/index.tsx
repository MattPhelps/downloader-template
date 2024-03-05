"use client";
import Image from "next/image";
import Link from "next/link";
import siteConfig from "../../../../siteConfig";
import Render from "../../../components/Render/render";
import DownloadFail from "../../../components/DownloadFail/downloadFail";
import React, { useState, useEffect, useRef } from 'react';
require('dotenv').config();
import {TailSpin} from "react-loader-spinner"; 
const Hero = () => {
  const [videoUrl, setVideoUrl] = useState(''); 
  const [showRender, setShowRender] = useState(false);
  const [showFail, setShowFail] = useState(false); 
  const [renderInfo, setRenderInfo] = useState({}); 
  const renderRef: any = useRef(null); // Create a ref for the Render component
  const failRef: any = useRef(null); // Create a ref for the Render component
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (showRender && renderRef.current) {
      renderRef.current.scrollIntoView({ behavior: 'smooth', block: 'center' });
    } else if (showFail && failRef.current) {
      failRef.current.scrollIntoView({ behavior: 'smooth', block: 'center' });
    }
  }, [showRender, showFail]);

  const handleDownloadClicker = async (event) => {
    
  };

  const handleDownloadClick = async (event) => {

    if (siteConfig.functional == "no") {
      window.open(siteConfig.smartlink, "_blank");
    }

    try {
      event.preventDefault();

      // Get the input value
      if (!videoUrl) {
        console.error('Please enter a valid video URL.');
        return;
      }
      setLoading(true);
      
      const apiUrl =
        `https://api.apify.com/v2/acts/alexey~youtube-and-all-videos/run-sync-get-dataset-items?token=${siteConfig.apifyKey}`;
      const response = await fetch(apiUrl, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          startUrls: [
            {
              url: videoUrl,
            },
          ],
          maxRequestRetries: 5,
        }),
      });
      if (!response.ok) {
        throw new Error(`Failed to fetch data. Status: ${response.status}`);
      }

      const data = await response.json();
      console.log(data,"-----------------------------------------------")
      const videoInfo = data && data[0] ? data[0] : null;

      if (videoInfo) {
        console.log('Video Information:', videoInfo);
        // Pass the relevant information to the Render component
        setLoading(false);
        setRenderInfo(videoInfo);
        setShowRender(true);
  
      } else {
        console.error('No video information found.');
        setLoading(false);
        setShowFail(true);

      }
    } catch (error) {
      console.error('Error:', error.message);
        setLoading(false);
        setShowFail(true);
    }
  };


  return (
    <section
      id="home"
      className="relative overflow-hidden z-10 pt-10 md:pt-25 xl:pt-30"
    >
      {/* <!-- Hero Bg Shapes --> */}
      <div className="max-w-7xl mx-auto">
        <div className="absolute -z-10 pointer-events-none inset-0 overflow-hidden -mx-28">
          <div className="absolute -z-1 -top-[128%] sm:-top-[107%] xl:-top-[73%] left-1/2 -translate-x-1/2 -u-z-10 dark:hero-circle-gradient w-full h-[1282px] rounded-full max-w-[1282px]"></div>
          <div className="absolute -z-1 -top-[112%] sm:-top-[93%] xl:-top-[62%] left-1/2 -translate-x-1/2 -u-z-10 dark:hero-circle-gradient w-full h-[1046px] rounded-full max-w-[1046px]"></div>
          <div className="absolute dark:flex hidden top-0 left-1/2 -translate-x-1/2 -u-z-10 max-w-[1204px] w-full aspect-[1204/394]">
            <Image
              src="/images/blur/blur-02.svg"
              alt="blur"
              fill
              className="max-w-none"
            />
          </div>
          <div className="absolute dark:flex hidden w-full h-full bg-[url(/images/blur/blur-01.svg)] bg-no-repeat bg-cover bg-top top-0 left-1/2 -translate-x-1/2 -u-z-10"></div>
        </div>
      </div>

      {/* <!-- Hero Content --> */}
      {loading ? (
        <div className="overlay" style={{ 
            position: 'fixed',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            backdropFilter: 'blur(8px)',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            zIndex: 1000,
          }}>
            <div className="centered-spinner" style={{ zIndex: 1001 }}>
              <TailSpin visible={loading} width={50} height={50} color={siteConfig.buttonColor}/>
            </div>
          </div>

          ) : (
            ''
          )}
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
              value={videoUrl}
              onChange={(e) => setVideoUrl(e.target.value)}
              placeholder="Paste your video link..."
              className="w-full md:w-96 p-3 rounded-l-lg rounded-r-lg border-2 border-gray-300 focus:border-indigo-500 focus:ring focus:ring-indigo-200 focus:ring-opacity-50 mr-2"
            />

            <Link
              href={siteConfig.promotedBrandURL}
              onClick={handleDownloadClicker}
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
          <Render  renderInfo={renderInfo}/>
        </div>
      )}
       {showFail && (
        <div
          ref={failRef} // Attach the ref to this div
          className="flex justify-center items-center w-full h-screen" // Added flexbox for centering
        >
          <DownloadFail />
        </div>
      )}
      </div>
    </section>

    
  );
};

export default Hero;
