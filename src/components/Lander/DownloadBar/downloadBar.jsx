"use client"
import React, { useState } from 'react'
import siteConfig from '../../../../siteConfig';

const DownloadBar = () => {
    const [downloadFor, setDownloadFor] = useState("windows")
    return (
        <div className='wrapper bg-[#1F2937]'>
            <div className='content center flex flex-col py-[40px] sm:py-[50px] px-[20px]'>
                <h1 className='text-center text-white text-[30px]'>
                {siteConfig.promotedBrand} Video Downloader
                </h1>
                {/* buttons */}
                <div className='w-full center flex flex-col 600:flex-row  gap-[25px] 600:gap-[40px] pt-[30px]'>
                    <div className='flex flex-col gap-[5px] w-full 600:w-auto'>
                        <button className='bg-[#2A6DF4] hover:bg-blue-700 rounded-[10px] flex items-center gap-[20px] text-[white] text-[20px] font-[600] px-[1.8rem] 800:px-[2.2rem] py-[.8rem]  justify-center'>Free Download
                            {
                                downloadFor === "windows" ?
                                    <>
                                        {/* eslint-disable-next-line */}
                                        <img className='w-[27px] h-[27px]' src="/windows.svg" alt="" />
                                    </>

                                    :
                                    <>
                                        {/* eslint-disable-next-line */}
                                        <img className='w-[27px] h-[27px]' src="/mac.svg" alt="" />
                                    </>
                            }
                        </button>
                    </div>
                    <div className='flex flex-col gap-[5px] w-full 600:w-auto'>
                        <button className='bg-[#2A6DF4] hover:bg-blue-700 w-full 600:w-auto rounded-[10px] flex items-center justify-center gap-[20px] text-[white] text-[20px] font-[600] px-[1.8rem] 800:px-[2.2rem] py-[.8rem]'>Upgrade to PRO
                            {
                                downloadFor === "mac" ?
                                    <>
                                        {/* eslint-disable-next-line */}
                                        <img className='w-[27px] h-[27px]' src="/mac.svg" alt="" />
                                    </>

                                    :
                                    <>
                                        {/* eslint-disable-next-line */}
                                        <img className='w-[27px] h-[27px]' src="/windows.svg" alt="" />
                                    </>
                            }
                        </button>
                    </div>
                </div>
                <div className='center gap-[10px] text-[white] mt-[20px]'>
                    <p>Available for:</p>
                    {/* eslint-disable-next-line */}
                    <img onClick={() => setDownloadFor("windows")} className={`w-[35px] h-[35px] cursor-pointer ${downloadFor === "windows" ? "opacity-1" : "opacity-[.7]"}`} src="/windows.svg" alt="" />
                    {/* eslint-disable-next-line */}
                    <img onClick={() => setDownloadFor("mac")} className={`w-[35px] h-[35px] cursor-pointer ${downloadFor === "mac" ? "opacity-1" : "opacity-[.7]"}`} src="/mac.svg" alt="" />
                </div>
            </div>
        </div>
    )
}

export default DownloadBar
