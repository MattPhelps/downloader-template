import Link from 'next/link';
import React from 'react'
import { FaWindows } from "react-icons/fa";
import siteConfig from '../../../../siteConfig';

const LanderHero = () => {


    let siteList;

    switch (true) {
        case siteConfig.baseSiteName == "PornHub":
            siteList = "SpankBang, XVIDEOS, XNXX";
            break;
            case siteConfig.baseSiteName == "XNXX":
                siteList = "PornHub, XVIDEOS, SpankBang";
            break;
            case siteConfig.baseSiteName == "XVIDEOS":
                siteList = "PornHub, XNXX, SpankBang";
            break;
            case siteConfig.baseSiteName == "SpankBang":
                siteList = "XNXX, PornHub, XVIDEOS";
            break;
            case siteConfig.baseSiteName == "xHamster":
                siteList = "PornHub, XNXX, SpankBang";
            break;
            case siteConfig.baseSiteNamee == "RedTube":
                siteList = "XNXX, PornHub, XVIDEOS";
            break;
            default:
            siteList = "PornHub, XNXX, xHamster";
            break;
    }


    return (
        <div className='w-full flex flex-col lg:flex-row items-center py-[20px] lg:py-[20px]'>
            {/* Image container */}
            <div className='hidden lg:flex lg:w-1/2 p-[40px] flex-col justify-center items-center -mt-[50px]'>
                {/* Label above the image */}
                <div className='flex items-center justify-center mb-8'>
                    {/* Logo */}
                    <img src='/images/lander/icons/itubego-logo.webp' alt='iTubeGo Logo' className='w-[24px] h-[25px] mr-2' />
                    
                    {/* Text */}
                    <span className='text-[24px] text-[black] font-bold'>iTubeGo</span>
                </div>
                {/* Replace with your image path */}
                <img src='images/lander/screenshots/lander-main.jpeg' alt='Your Image Description' className='max-w-full h-auto' />
            </div>

            {/* Existing content */}
            <div className='w-full lg:w-1/2 flex flex-col pb-[40px] 700:py-[80px] px-[15px] 700:px-[25px] 800:px-[50px] 1000:px-[85px]'>
                {/* Headline with negative margin-top */}
                <h1 style={{ lineHeight: '1.4' }} className='text-[black] dark:text-white mb-6 800:px-[10px] text-xl font-bold sm:text-4xl xl:text-heading mt-[50px]'>
                    Batch download <span className='text-[#02b779]'>HD/4K</span> videos from <span className='bg-[black] text-[#fbfb04]' >{siteConfig.baseSiteName},</span><span className='bg-[black] text-white'> {siteList} and more!&nbsp;</span>
                </h1>

                <p className='700:text-[18px] font-bold text-left mt-[10px] 800:px-[10px] text-[#1894f4]'>
                    👍 100% Guaranteed Download
                </p>
                <p className='700:text-[18px] text-left mt-[40px] 800:px-[10px] text-[black]'>
                    Install iTubeGo and download any videos from 10,000+ websites with privacy mode in 20+ formats.
                </p>
                {/* buttons */}
                <div className='w-full center flex flex-col 600:flex-row  gap-[25px] 600:gap-[z0px] 600:mt-[40px]'>
                    <div className='flex flex-col gap-[5px] w-full 600:w-auto'>
                        <button
                        style={{ borderColor: 'black', borderWidth: '2px', borderStyle: 'solid' }}
                        className={`bg-[#ff7404] hover:bg-blue-700 rounded-[10px] flex items-center gap-[20px] text-[white] text-[20px] font-[700] px-[1.8rem] 800:px-[2.2rem] py-[.8rem] 600:py-[1.25rem] justify-center`}>Free Download
                            <img className='w-[27px] h-[27px]' src="/images/lander/os/windows.svg" alt="" />
                        </button>
                        <p className='text-[12px] text-center text-[black]'>
                            For Windows 7/8/10/11
                        </p>
                    </div>
                    <div className='flex flex-col gap-[5px] w-full 600:w-auto'>
                        <button
                        style={{ borderColor: 'black', borderWidth: '2px', borderStyle: 'solid' }}
                         className='bg-[#ff7404] border border-black hover:bg-blue-700 w-full 600:w-auto rounded-[10px] flex items-center justify-center gap-[20px] text-[white] text-[20px] font-[700] px-[1.8rem] 800:px-[2.2rem] py-[.8rem] 600:py-[1.25rem]'>Free Download
                            <img className='w-[27px] h-[27px]' src="/images/lander/os/mac.svg" alt="" />
                        </button>
                        <p className='text-[12px] text-center text-[black]'>
                            For MacOS 10.10 or later
                        </p>
                    </div>
                </div>
                {/* stars */}
                <div className='flex center mt-[40px]'>
                    <div className='flex items-center gap-[10px]'>
                        <img src="/images/lander/icons/star.png" className='max-w-[160px]' alt="" />
                        <p className='400:text-[18px] text-[black]'>4.8 / 5 (Trustpilot)</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default LanderHero
