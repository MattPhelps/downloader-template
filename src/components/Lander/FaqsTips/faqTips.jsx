"use client"
import Link from 'next/link';
import React, { useState } from 'react'
import { IoIosArrowDroprightCircle } from "react-icons/io";
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";
import siteConfig from '../../../../siteConfig';

const data = [
    {
        question: "1. Is it illegal to download videos from any streaming sites to your devices?",
        answer: "Generally, it is only illegal to download videos to your devices if the content is copyrighted and you have not obtained permission to make the downloaded contents for business, but it is legal to download videos to your devices for personal use."
    },
    {
        question: `2. Is ${siteConfig.promotedBrand} secure?`,
        answer: `Yes, ${siteConfig.promotedBrand} is 100% safe to use. No malware or trojans will be added when you download this software to your computer, and your personal information will remain confidential.`
    },
    {
        question: "3. What is the difference between the free and the paid version?",
        answer: `Although the free trial version is limited, we always recommend our new users to try the free version first before buying ${siteConfig.promotedBrand}. The trial version only provides you 3 downloads, 1 playlist, limited output formats, while the paid version doesn't have any limitations.`
    },
    {
        question: "4. How to transfer downloaded video or audio files to mobile phone?",
        answer: "For Android, you can use our video downloader for Android to download videos directly to your phone; For iPhone, you can download videos or audio to your computer, then sync the downloaded files with your iPhone by using USB."
    },
]

const FaqsTips = () => {
    return (
        <div className='wrapper bg-[#F5F6F6]'>
            <div className='content py-[50px] center px-[10px] sm:px-[20px]'>

                <div className='w-full grid lg:grid-cols-12 min-h-[300px] gap-[30px] max-w-[1050px] '>
                    <div className='lg:col-span-8 flex flex-col gap-[30px]'>
                        <h2 className='text-[36px] text-[black]'>
                            {"FAQ's"}
                        </h2>
                        <div className='w-full bg-white'>
                            <FAQ />
                        </div>
                    </div>
                    <div className=' lg:col-span-4 flex flex-col gap-[10px] sm:gap-[30px]'>
                        <h1 className='text-[36px] text-[black]'>
                            Tips
                        </h1>
                        <div className='w-full h-full bg-white px-[10px] sm:px-[30px] py-[30px] sm:py-[40px] flex flex-col gap-[10px] text-gray-600'>
                            <Link href={"/"} className='flex items-start gap-[6px] text-[17px] hover:text-blue-600 hover:underline text-[black]'>
                                <IoIosArrowDroprightCircle className='text-[22px] min-h-[22px] min-w-[22px] mt-[3px]  text-[#000000a3]' /> How to Download TikTok Video on iPhone/Android/PC/Mac
                            </Link>
                            <Link href={"/"} className='flex items-start gap-[6px] text-[17px] hover:text-blue-600 hover:underline text-[black]'>
                                <IoIosArrowDroprightCircle className='text-[22px] min-h-[22px] min-w-[22px] mt-[3px] text-[#000000a3]' />Top Best 10 Spotify Downloader to Download Spotify Songs
                            </Link>
                            <Link href={"/"} className='flex items-start gap-[6px] text-[17px] hover:text-blue-600 hover:underline text-[black]'>
                                <IoIosArrowDroprightCircle className='text-[22px] min-h-[22px] min-w-[22px] mt-[3px] text-[#000000a3]' />[Solved] YouTube Downloader Not Working? Find Solution Here
                            </Link>
                            <Link href={"/"} className='flex items-start gap-[6px] text-[17px] hover:text-blue-600 hover:underline text-[black]'>
                                <IoIosArrowDroprightCircle className='text-[22px] min-h-[22px] min-w-[22px] mt-[3px] text-[#000000a3]' />How to Download Bandcamp to MP3 320kbps
                            </Link>
                            <Link href={"/"} className='flex items-start gap-[6px] text-[17px] hover:text-blue-600 hover:underline text-[black]'>
                                <IoIosArrowDroprightCircle className='text-[22px] min-h-[22px] min-w-[22px] mt-[3px] text-[#000000a3]' />How to Download Niconico Video
                            </Link>
                            <Link href={"/"} className='flex items-start gap-[6px] text-[17px] hover:text-blue-600 hover:underline text-[black]'>
                                <IoIosArrowDroprightCircle className='text-[22px] min-h-[22px] min-w-[22px] mt-[3px] text-[#000000a3]' />How to Download Bilbili Video
                            </Link>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default FaqsTips


const FAQ = () => {
    const [active, setActive] = useState(0)
    return (
        <>
            {
                data.map((item, i) => (
                    <div onClick={() => setActive(i)} key={i} className='w-full group'>
                        <div className={`w-full flex px-[10px] sm:px-[30px] py-[15px] sm:py-[20px]  cursor-pointer ${active === i ? "bg-[#2e2effe6] text-white" : "hover:bg-[#cde2fe96] text-[black]"}`}>
                            <p className='flex-1 text-[17px] sm:text-[18px] font-[600] '>{item.question}</p>
                            <div className='py-[10px]'>
                                <IoIosArrowDown className='text-[23px] ml-[10px] text-gray-400' />
                            </div>
                        </div>
                        {active === i && <div className='w-full px-[10px] text-[black] sm:px-[30px] py-[20px] sm:py-[40px] border-x border-b group-hover:bg-[#cde2fe96] border-[blue]'>
                            <p>
                               {item.answer}
                            </p>
                        </div>}
                    </div>
                ))
            }
        </>
    )
}