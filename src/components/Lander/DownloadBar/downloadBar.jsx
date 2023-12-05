"use client"
import React, { useState } from 'react'
import siteConfig from '../../../../siteConfig';

const DownloadBar = () => {
    const [downloadFor, setDownloadFor] = useState("windows")
    return (
        <div className='wrapper bg-[#1F2937]'>
            <div className='content center flex flex-col py-[40px] sm:py-[50px] px-[20px]'>
                <h2 className='text-center text-white font-extrabold text-[34px]'>
                {siteConfig.promotedBrand} Video Downloader
                </h2>
                {/* buttons */}
                <div className='w-full center flex flex-col 600:flex-row  gap-[25px] 600:gap-[40px] pt-[30px] 600:mt-[50px]'>
                        <div className='flex flex-col gap-[5px] w-full 600:w-auto'>
                            <button
                            style={{ borderColor: 'black', borderWidth: '2px', borderStyle: 'solid' }}
                            className='bg-[#4bb5b4] hover:bg-blue-700 rounded-[10px] flex items-center gap-[20px] text-[white] text-[20px] font-[700] px-[1.8rem] 800:px-[2.2rem] py-[.8rem] 600:py-[1.25rem] justify-center'>Free Download
                                {/* eslint-disable-next-line */}
                                <img className='w-[27px] h-[27px]' src="/images/lander/os/windows.svg" alt="" /></button>
                            <p className='text-[12px] text-[white] text-center'>
                                For Windows 7/8/10/11
                            </p>
                        </div>
                        <div className='flex flex-col gap-[5px] w-full 600:w-auto'>
                            <button
                            style={{ borderColor: 'black', borderWidth: '2px', borderStyle: 'solid' }}
                            className='bg-[#4bb5b4] hover:bg-blue-700 rounded-[10px] flex items-center gap-[20px] text-[white] text-[20px] font-[700] px-[1.8rem] 800:px-[2.2rem] py-[.8rem] 600:py-[1.25rem] justify-center'>Free Download
                                {/* eslint-disable-next-line */}
                                <img className='w-[27px] h-[27px]' src="/images/lander/os/mac.svg" alt="" /></button>
                            <p className='text-[12px] text-center text-[white]'>
                                For MacOS 10.10 or later
                            </p>
                        </div>
                    </div>
                
            </div>
        </div>
    )
}

export default DownloadBar
