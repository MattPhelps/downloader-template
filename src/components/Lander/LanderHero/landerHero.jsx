import Link from 'next/link';
import React from 'react'
import { FaWindows } from "react-icons/fa";
import siteConfig from '../../../../siteConfig';

const LanderHero = () => {
    return (
        <div className='w-full hero-bg'>
            <div className='w-full center flex flex-col py-[40px] 700:py-[80px] px-[30px] 700:px-[50px] 800:px-[100px] 1000:px-[170px]'>
                <h1 className='text-[36px] text-center leading-[1.1] text-[black]'>{siteConfig.promotedBrand} Video Downloader</h1>
                <p className='700:text-[20px] text-center mt-[10px] 800:px-[100px] text-[black]'>
                    Download <span className='text-primary'>Video, Audio, Playlists</span> from 10,000+ websites, <span className='text-primary'>Convert Video</span> to MP4, MOV, AAC, WAV and More.
                </p>
                {/* buttons */}
                <div className='w-full center flex flex-col 600:flex-row  gap-[25px] 600:gap-[40px] pt-[30px] 600:mt-[80px]'>
                    <div className='flex flex-col gap-[5px] w-full 600:w-auto'>
                        <button className='bg-[#2A6DF4] hover:bg-blue-700 rounded-[10px] flex items-center gap-[20px] text-[white] text-[20px] font-[700] px-[1.8rem] 800:px-[2.2rem] py-[.8rem] 600:py-[1.25rem] justify-center'>Free Download
                            {/* eslint-disable-next-line */}
                            <img className='w-[27px] h-[27px]' src="/windows.svg" alt="" /></button>
                        <p className='text-[12px] text-center text-[black]'>
                            For Windows 7/8/10/11 (32 bit user? <Link href={"/"} className='text-blue-500' >click here</Link>)
                        </p>
                    </div>
                    <div className='flex flex-col gap-[5px] w-full 600:w-auto'>
                        <button className='bg-[#2A6DF4] hover:bg-blue-700 w-full 600:w-auto rounded-[10px] flex items-center justify-center gap-[20px] text-[white] text-[20px] font-[700] px-[1.8rem] 800:px-[2.2rem] py-[.8rem] 600:py-[1.25rem]'>Free Download
                            {/* eslint-disable-next-line */}
                            <img className='w-[27px] h-[27px]' src="/mac.svg" alt="" /></button>
                        <p className='text-[12px] text-center text-[black]'>
                            For MacOS 10.10 or later
                        </p>
                    </div>
                </div>
                {/* stars */}
                <div className='flex center mt-[40px]'>
                    <div className='flex items-center gap-[10px]'>
                        {/* eslint-disable-next-line */}
                        <img src="/star.png" className='max-w-[160px]' alt="" /> <p className='400:text-[18px] text-[black]'>4.8 / 5 (Trustpilot)</p>
                    </div>
                </div>
                {/* Brands */}
                <div className='center mt-[40px]'>
                    {/* eslint-disable-next-line */}
                    <img src="/banner-brands.png" className='w-full max-w-[440px]' alt="" />
                </div>
            </div>
        </div>
    )
}

export default LanderHero
