"use client"
import React, { useState } from 'react'
import siteConfig from '../../../../siteConfig';

const DownloadBar = () => {
    const [downloadFor, setDownloadFor] = useState("windows")
    return (
        <div className='wrapper bg-[#FFF]'>
            <div className='content center flex flex-col py-[40px] sm:py-[50px] px-[20px]'>
                <h2 className='text-center text-[black] font-extrabold text-[34px]'>
                👇&nbsp;iTubeGo Video Downloader👇
                </h2>
                {/* buttons */}
                <div className='w-full center flex flex-col 600:flex-row  gap-[25px] 600:gap-[40px] pt-[30px] 600:mt-[50px]'>
                        <div className='flex flex-col gap-[5px] w-full 600:w-auto'>
                        <a 
                        rel="noopener noreferrer nofollow"
                        href={siteConfig.promotedBrandURL}
                        style={{ borderColor: 'black', borderWidth: '2px', borderStyle: 'solid' }}
                        className={`bg-[#ff7404] hover:bg-blue-700 rounded-[10px] flex items-center gap-[10px] text-[white] text-[20px] font-[700] px-[1.8rem] 800:px-[2.2rem] py-[.8rem] 600:py-[1.25rem] justify-center
                        duration-500 
                        ease-in-out
                        shadow-lg 
                        transform 
                        hover:scale-110`}>
                            Get&nbsp;&nbsp;iTubeGo
                            <img className='w-[20px] h-[20px]' src="/images/icons/white-download.png" alt="" />
                        </a>
                            <p className='text-[12px] text-[black] text-center'>
                            Works on all devices
                            </p>
                        </div>
                    </div>
            </div>
        </div>
    )
}

export default DownloadBar
