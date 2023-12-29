"use client"
import Link from 'next/link';
import React, { useState } from 'react'
import { FaCircleArrowRight, FaCircleArrowLeft } from "react-icons/fa6";

const data = [
    {
        title: "Download Videos in High Quality Easily",
        desc: "YT Saver offers video resolutions in a range of 480p, 360p, 720p, 1080p HD, 2K, 4K and 8K, and you can download videos to MP4, MOV, 3GP, AAC, WAV, and other 20+ output formats.",
        img: "/images/lander/screenshots/slide-1.webp"
    },
    {
        title: "Download Complete Playlist and Channel",
        desc: "YT Saver Video Downloader allows you to download playlists, channels, and multiple videos in one click to various formats with 10X faster speed.",
        img: "/images/lander/screenshots/slide-2.webp"
    },
    {
        title: "Convert Video Without Any Quality Loss",
        desc: "YT Saver Video Converter supports to convert video to MP4, 3GP, MOV, WMV, AAC, WAV, OGG, AIFF, HEVC MP4, HEVC MKV and other formats which is suitable for iPhone, iPad, Android, and Anroid Tablets.",
        img: "/images/lander/screenshots/slide-3.webp"
    },
    {
        title: "Cut Video and Audio with Built-in Browser",
        desc: "YT Saver allows you to cut, trim, and crop online videos to MP4, MOV, AAC and other formats you want by using built-in video cutter.",
        img: "/images/lander/screenshots/slide-4.webp"
    },
    {
        title: "Backup Audio up to 320kbps",
        desc: "YT Saver can extract audio from video and save it to any quality you want, like 64kbps, 128kbps, 256kbps, 320kbps, it also supports backup audio from most popular streaming sites.",
        img: "/images/lander/screenshots/slide-5.webp"
    },
]

const HeroBottom = () => {
    const [slide, setSlide] = useState(0)

    const prev = () => {
        setSlide(prev => {
            if (prev <= 0) return 4
            return prev - 1
        })
    }
    const next = () => {
        setSlide(prev => {
            if (prev >= 4) return 0

            return prev + 1
        })
    }
    return (
        <div className='flex flex-col w-full'>
            {/* top  */}
            <div className='center bg-[#F9FAFB] min-h-[160px] overflow-hidden'>
                <div onClick={prev} className='absolute left-[40px] 900:hidden z-50 cursor-pointer'>
                    <FaCircleArrowLeft className='text-[23px] text-gray-600' />
                </div>
                <div className='flex items-center sm:w-autooverflow-hidden relative'>
                    <div onClick={() => setSlide(0)} className={`flex flex-col center gap-[20px] py-[35px] min-w-[165px] cursor-pointer ${slide === 0 ? "flex border-b-[4px] border-[blue]" : "hidden 900:flex"}`}>
                        {/* eslint-disable-next-line */}
                        <img src="/images/lander/icons/ico1.png" className='w-[42px] h-[42px]' alt="" />
                        <p className='leading-[1] text-[black]'>Download Video</p>
                    </div>
                    <div onClick={() => setSlide(1)} className={`flex flex-col center gap-[20px] py-[35px] min-w-[165px] cursor-pointer ${slide === 1 ? "flex border-b-[4px] border-[blue]" : "hidden 900:flex"}`}>
                        {/* eslint-disable-next-line */}
                        <img src="/images/lander/icons/ico2.png" className='w-[42px] h-[42px]' alt="" />
                        <p className='leading-[1] text-[black]'>Download Playlist</p>
                    </div>
                    <div onClick={() => setSlide(2)} className={`flex flex-col center gap-[20px] py-[35px] min-w-[165px] cursor-pointer ${slide === 2 ? "flex border-b-[4px] border-[blue]" : "hidden 900:flex"}`}>
                        {/* eslint-disable-next-line */}
                        <img src="/images/lander/icons/ico3.png" className='w-[42px] h-[42px]' alt="" />
                        <p className='leading-[1] text-[black]'>Convert Video</p>
                    </div>
                    <div onClick={() => setSlide(3)} className={`flex flex-col center gap-[20px] py-[35px] min-w-[165px] cursor-pointer ${slide === 3 ? "flex border-b-[4px] border-[blue]" : "hidden 900:flex"}`}>
                        {/* eslint-disable-next-line */}
                        <img src="/images/lander/icons/ico4.png" className='w-[42px] h-[42px]' alt="" />
                        <p className='leading-[1] text-[black]'>Cut Video</p>
                    </div>
                    <div onClick={() => setSlide(4)} className={`flex flex-col center gap-[20px] py-[35px] min-w-[165px] cursor-pointer ${slide === 4 ? "flex border-b-[4px] border-[blue]" : "hidden 900:flex"}`}>
                        {/* eslint-disable-next-line */}
                        <img src="/images/lander/icons/ico5.png" className='w-[42px] h-[42px]' alt="" />
                        <p className='leading-[1] text-[black]'>Backup Video</p>
                    </div>
                </div>
                <div onClick={next} className='absolute 900:hidden right-[40px] z-50 cursor-pointer'>
                    <FaCircleArrowRight className='text-[23px] text-gray-600' />
                </div>
            </div>
            {/* bottom */}
            <div className='w-full center'>
                <div className='max-w-[700px] 900:max-w-[900px] center flex flex-col pt-[50px] sm:pt-[90px] pb-[20px] sm:pb-[40px] relative px-[20px] sm:px-0'>
                    <div onClick={prev} className='absolute top-[70%] sm:top-auto left-0 800:left-[-20px] z-50 cursor-pointer'>
                        <FaCircleArrowLeft className='text-[23px] text-gray-600' />
                    </div>
                    <h1 className='text-[30px] text-gray-800 text-center leading-[1.3] text-[black]'>
                        {data[slide].title}
                    </h1>
                    <p className='text-center sm:text-[18px] text-gray-800 max-w-[530px] text-[#000000ae] pt-[10px] sm:mt-[25px]'>
                        {data[slide].desc}
                    </p>
                     {/* eslint-disable-next-line */}
                    <img src={data[slide].img} alt="" className='pt-[10px] sm:pt-[20px]' />
                    <Link href={"/"} className='text-blue-600 mt-[10px]'>Watch YT Saver in Action {">>"}</Link>
                    <div onClick={next} className='absolute top-[70%] sm:top-auto right-0 800:right-[-20px] z-50 cursor-pointer'>
                        <FaCircleArrowRight className='text-[23px] text-gray-600' />
                    </div>
                </div>

            </div>
        </div>
    )
}

export default HeroBottom
