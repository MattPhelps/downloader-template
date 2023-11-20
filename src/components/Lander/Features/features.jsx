import React from 'react'
import siteConfig from '../../../../siteConfig';

const Features = () => {
    return (
        <div className='wrapper'>
            <div className='content py-[60px]'>
                <div className='w-full center flex flex-col px-[20px]'>
                    <h1 className='text-[30px] text-[black]'>
                        Other Features
                    </h1>
                    <div className='mt-[50px] grid 800:grid-cols-2 gap-[10px] sm:gap-[30px] min-h-[400px] w-full max-w-[1000px]'>
                        <div className=''>
                            <div className='flex items-center  800:items-start flex-col 800:flex-row gap-[15px]'>
                                <div className='800:pt-[10px]'>
                                    {/* eslint-disable-next-line */}
                                    <img src="/images/lander/icons/f1.svg" alt="" className='w-[41px] max-w-[41px]' />
                                </div>
                                <div className='flex flex-col gap-[13px] max-w-[370px]'>
                                    <h1 className='text-[24px] text-[black] text-center 800:text-start leading-[1.1]'>
                                        Download Videos with Built-in Browser
                                    </h1>
                                    <p className='text-center text-[#000000cc] 800:text-start'>
                                    {siteConfig.promotedBrand} comes with a built-in web browser, which allows you to browse video/audio sharing sites easily and download videos direclty within the websites.
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className=''>
                            <div className='flex items-center  800:items-start flex-col 800:flex-row gap-[15px]'>
                                <div className='pt-[10px]'>
                                    {/* eslint-disable-next-line */}
                                    <img src="/images/lander/icons/f2.svg" alt="" className='w-[41px] max-w-[41px]' />
                                </div>
                                <div className='flex flex-col gap-[13px] max-w-[370px]'>
                                    <h1 className='text-[24px] text-[black] text-center 800:text-start leading-[1.1]'>
                                        Unlimited Download with {siteConfig.promotedBrand} Downloader
                                    </h1>
                                    <p className='text-center text-[#000000cc] 800:text-start'>
                                        With {siteConfig.promotedBrand} PRO you can download unlimited videos and playlists from streaming sites and access your videos when offline, and you can download multiple videos in bulk at the same time.
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className=''>
                            <div className='flex items-center  800:items-start flex-col 800:flex-row gap-[15px]'>
                                <div className='pt-[10px]'>
                                    {/* eslint-disable-next-line */}
                                    <img src="/images/lander/icons/f3.svg" alt="" className='w-[41px] max-w-[41px]' />
                                </div>
                                <div className='flex flex-col gap-[13px] max-w-[370px]'>
                                    <h1 className='text-[24px] text-[black] text-center 800:text-start leading-[1.1]'>
                                        Download Videos at Ultra Fast Speed
                                    </h1>
                                    <p className='text-center text-[#000000cd] 800:text-start'>
                                    {siteConfig.promotedBrand} Video Downloader gives you 10X faster video download speed, which allows you to downlaod videos at ultra fast speed and get the fastest conversion speed.
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className=''>
                            <div className='flex items-center  800:items-start flex-col 800:flex-row gap-[15px]'>
                                <div className='pt-[10px]'>
                                    {/* eslint-disable-next-line */}
                                    <img src="/images/lander/icons/f4.svg" alt="" className='w-[41px] max-w-[41px]' />
                                </div>
                                <div className='flex flex-col gap-[13px] max-w-[370px]'>
                                    <h1 className='text-[24px] text-center text-[black] 800:text-start leading-[1.1]'>
                                        Protect Your Downloaded Videos Privacy
                                    </h1>
                                    <p className='text-center 800:text-start text-[#000000ca]'>
                                        To protect your video and audio from prying eyes and miswatching by children, {siteConfig.promotedBrand} provides a Private Mode to keep your downloaded contents in a password-protected folder.
                                    </p>
                                </div>
                            </div>
                        </div>

                    </div>
                    {/* buttons */}
                    <div className='w-full center flex flex-col 600:flex-row  gap-[25px] 600:gap-[40px] pt-[30px] 600:mt-[50px]'>
                        <div className='flex flex-col gap-[5px] w-full 600:w-auto'>
                            <button className='bg-[#2A6DF4] hover:bg-blue-700 rounded-[10px] flex items-center gap-[20px] text-[white] text-[20px] font-[700] px-[1.8rem] 800:px-[2.2rem] py-[.8rem]  justify-center'>Free Download
                                {/* eslint-disable-next-line */}
                                <img className='w-[27px] h-[27px]' src="/images/lander/os/windows.svg" alt="" /></button>
                            <p className='text-[15px] text-[#000000d5] text-center'>
                                For Windows 7/8/10/11
                            </p>
                        </div>
                        <div className='flex flex-col gap-[5px] w-full 600:w-auto'>
                            <button className='bg-[#2A6DF4] hover:bg-blue-700 w-full 600:w-auto rounded-[10px] flex items-center justify-center gap-[20px] text-[white] text-[20px] font-[700] px-[1.8rem] 800:px-[2.2rem] py-[.8rem] '>Free Download
                                {/* eslint-disable-next-line */}
                                <img className='w-[27px] h-[27px]' src="/images/lander/os/mac.svg" alt="" /></button>
                            <p className='text-[15px] text-center text-[#000000d4]'>
                                For MacOS 10.10 or later
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Features
