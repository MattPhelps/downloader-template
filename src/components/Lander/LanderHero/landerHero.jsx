import Link from 'next/link';
import React from 'react'
import { FaWindows } from "react-icons/fa";
import siteConfig from '../../../../siteConfig';
import landerConfig from '../../../../landerConfig';
import Image from "next/image";
const LanderHero = () => {


    return (
        <div className='w-full flex flex-col lg:flex-row items-center py-[20px] lg:py-[20px]'>
            {/* Image container */}
            <div className='hidden lg:flex lg:w-1/2 p-[40px] flex-col justify-center items-center -mt-[50px]'>
                {/* Label above the image */}
                <div className='flex items-center justify-center mb-8'>
                    {/* Logo */}
                    <Image src={landerConfig.brandLogoPath} alt='Brand Logo'  className='w-[24px] h-[25px] mr-2' />
                    
                    {/* Text */}
                    <span className='text-[24px] text-[black] font-bold'>{siteConfig.promotedBrand}</span>
                </div>
                {/* Replace with your image path */}
                <Image src={landerConfig.landerScreenshotPath} alt='Your Image Description' className='max-w-full h-auto' />
            </div>

            {/* Existing content */}
            <div className='w-full lg:w-1/2 flex flex-col pb-[40px] 700:py-[60px] px-[15px] 700:px-[25px] 800:px-[50px] 1000:px-[85px]'>
                {/* Headline with negative margin-top */}
                <h1 style={{ lineHeight: '1.6' }} className='text-[black] dark:text-white mb-6 800:px-[0px] text-xl font-bold sm:text-4xl xl:text-heading mt-[50px]'>
                    Batch download <span className='text-[#02b779]'>HD/4K</span> videos from <span className='bg-[black] text-[#fbfb04]' >&nbsp;{siteConfig.baseSiteName},</span><span className='bg-[black] text-white'> {landerConfig.siteList} and more!&nbsp;</span>
                </h1>

                <p 
                style={{ color: landerConfig.secondaryColor }}
                className='700:text-[18px] font-bold text-left mt-[10px] 800:px-[0px]'>
                    👍 100% Guaranteed Download
                </p>
                <p className='700:text-[18px] text-left mt-[40px] 800:px-[0px] text-[black]'>
                    Install {siteConfig.promotedBrand} and download any videos from 10,000+ websites with privacy mode in 20+ formats.
                </p>
                {/* buttons */}
                <div className='w-full left flex flex-col 600:flex-row  gap-[25px] 800:px-[10px] 600:gap-[z0px] 600:mt-[40px]'>
                    <div className='flex flex-col gap-[5px] w-full 600:w-auto'>
                        <a
                        rel="noopener noreferrer nofollow"
                        href={siteConfig.promotedBrandURL}
                        style={{ borderColor: 'black', borderWidth: '2px', borderStyle: 'solid', backgroundColor: landerConfig.buttonColor }}
                        className={`bg-[#ff7404] hover:bg-blue-700 rounded-[10px] flex items-center gap-[10px] text-[white] text-[20px] font-[700] px-[1.8rem] 800:px-[2.2rem] py-[.8rem] 600:py-[1.25rem] justify-center transition 
                        duration-500 
                        ease-in-out
                        shadow-lg 
                        transform 
                        hover:scale-110`}>
                            Get&nbsp;&nbsp;{siteConfig.promotedBrand}
                            <Image className='w-[20px] h-[20px]' src="/images/icons/white-download.png" alt="" />
                        </a>

                        <p className='text-[12px] text-center text-[black]'>
                        Works on all devices
                        </p>
                    </div>
                </div>
                {/* stars */}
                <div className='flex left 800:px-[10px] mt-[40px]'>
                    <div className='flex items-center gap-[10px]'>
                        <Image src="/images/lander/icons/star.png" className='max-w-[140px]' alt="" />
                        <p className='400:text-[16px] text-[black]'>4.8 / 5 (Trustpilot)</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default LanderHero
