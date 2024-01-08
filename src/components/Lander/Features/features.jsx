import React from 'react'
import siteConfig from '../../../../siteConfig';
import landerConfig from '../../../../landerConfig';
import Image from "next/image";
const Features = () => {
    return (
        <div className='wrapper'>
            <div className='content py-[60px]'>
                <div className='w-full center flex flex-col px-[20px]'>
                    {/* <h2 className='font-extrabold text-[34px] text-[black]'>
                        Other Features
                        </h2> */}
                    <div className='mt-[50px] grid 800:grid-cols-2 gap-[10px] sm:gap-[60px] min-h-[400px] w-full max-w-[1000px]'>
                        <div className=''>
                            <div className='flex items-center  800:items-start flex-col 800:flex-row gap-[15px]'>
                                <div className='pt-[0px]'>
                                    {/* eslint-disable-next-line */}
                                    <Image src="/images/icons/tick.png" alt="" className='w-[40px] max-w-[40px]' />
                                </div>
                                <div className='flex flex-col gap-[13px] max-w-[370px]'>
                                    <h3 className='text-[24px] font-bold text-center text-[black] 800:text-start leading-[1.5]'>
                                        <i>Unlimited</i> Downloads
                                    </h3>
                                    <p className='text-center text-[#000000cc] 800:text-start'>
                                        Download unlimited videos in bulk at the same time from any social or streaming site and access your videos offline.
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className=''>
                            <div className='flex items-center  800:items-start flex-col 800:flex-row gap-[15px]'>
                                <div className='pt-[0px]'>
                                    {/* eslint-disable-next-line */}
                                    <Image src="/images/icons/tick.png" alt="" className='w-[40px] max-w-[40px]' />
                                </div>
                                <div className='flex flex-col gap-[13px] max-w-[370px]'>
                                    <h3 className='text-[24px] font-bold text-center text-[black] 800:text-start leading-[1.5]'>
                                    Supports 10,000+ Websites
                                    </h3>
                                    <p className='text-center 800:text-start text-[#000000ca]'>
                                        Any video content, from <i>any</i> website. Simple as that.
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className=''>
                            <div className='flex items-center  800:items-start flex-col 800:flex-row gap-[15px]'>
                                <div className='pt-[0px]'>
                                    {/* eslint-disable-next-line */}
                                    <Image src="/images/icons/tick.png" alt="" className='w-[40px] max-w-[40px]' />
                                </div>
                                <div className='flex flex-col gap-[13px] max-w-[370px]'>
                                    <h3 className='text-[24px] font-bold text-center text-[black] 800:text-start leading-[1.5]'>
                                        Protect Your Privacy
                                    </h3>
                                    <p className='text-center 800:text-start text-[#000000ca]'>
                                        Private Mode to keep your downloaded content in a password-protected folder.
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className=''>
                            <div className='flex items-center  800:items-start flex-col 800:flex-row gap-[15px]'>
                                <div className='pt-[0px]'>
                                    {/* eslint-disable-next-line */}
                                    <Image src="/images/icons/tick.png" alt="" className='w-[40px] max-w-[40px]' />
                                </div>
                                <div className='flex flex-col gap-[13px] max-w-[370px]'>
                                    <h3 className='text-[24px] font-bold text-center text-[black] 800:text-start leading-[1.5]'>
                                    HD/4K/8K Video Downloads
                                    </h3>
                                    <p className='text-center 800:text-start text-[#000000ca]'>
                                        Get your videos in the highest quality possible. No file compression or shortcuts.
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className=''>
                            <div className='flex items-center  800:items-start flex-col 800:flex-row gap-[15px]'>
                                <div className='pt-[0px]'>
                                    {/* eslint-disable-next-line */}
                                    <Image src="/images/icons/tick.png" alt="" className='w-[40px] max-w-[40px]' />
                                </div>
                                <div className='flex flex-col gap-[13px] max-w-[370px]'>
                                    <h3 className='text-[24px] font-bold text-center text-[black] 800:text-start leading-[1.5]'>
                                    10x Faster Download Speed
                                    </h3>
                                    <p className='text-center 800:text-start text-[#000000ca]'>
                                    Download videos at ultra fast speed and in bulk - save hours of time.
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className=''>
                            <div className='flex items-center  800:items-start flex-col 800:flex-row gap-[15px]'>
                                <div className='pt-[0px]'>
                                    {/* eslint-disable-next-line */}
                                    <Image src="/images/icons/tick.png" alt="" className='w-[40px] max-w-[40px]' />
                                </div>
                                <div className='flex flex-col gap-[13px] max-w-[370px]'>
                                    <h3 className='text-[24px] font-bold text-center text-[black] 800:text-start leading-[1.5]'>
                                        Multiple Output Formats
                                    </h3>
                                    <p className='text-center 800:text-start text-[#000000ca]'>
                                        Download in any format you like; MP4, AVI, MOV, WMV, FLV, WebM, 3GP and more!
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className=''>
                            <div className='flex items-center  800:items-start flex-col 800:flex-row gap-[15px]'>
                                <div className='pt-[0px]'>
                                    {/* eslint-disable-next-line */}
                                    <Image src="/images/icons/tick.png" alt="" className='w-[40px] max-w-[40px]' />
                                </div>
                                <div className='flex flex-col gap-[13px] max-w-[370px]'>
                                    <h3 className='text-[24px] font-bold text-center text-[black] 800:text-start leading-[1.5]'>
                                    Works On All Platforms
                                    </h3>
                                    <p className='text-center 800:text-start text-[#000000ca]'>
                                    Download videos effortlessly on any device - Windows, macOS, Linux, iOS, or Android.
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className=''>
                            <div className='flex items-center  800:items-start flex-col 800:flex-row gap-[15px]'>
                                <div className='pt-[0px]'>
                                    {/* eslint-disable-next-line */}
                                    <Image src="/images/icons/tick.png" alt="" className='w-[40px] max-w-[40px]' />
                                </div>
                                <div className='flex flex-col gap-[13px] max-w-[370px]'>
                                    <h3 className='text-[24px] font-bold text-center text-[black] 800:text-start leading-[1.5]'>
                                    No Watermarks and AD-FREE
                                    </h3>
                                    <p className='text-center 800:text-start text-[#000000ca]'>
                                        Watch your content advertisement-free and without any watermarks.
                                    </p>
                                </div>
                            </div>
                        </div>

                    </div>
                    {/* buttons */}
                    <div className='w-full center flex flex-col 600:flex-row  gap-[25px] 600:gap-[40px] pt-[30px] 600:mt-[50px]'>
                        <div className='flex flex-col gap-[5px] w-full 600:w-auto'>
                        <a
                        rel="noopener noreferrer nofollow"
                        href={siteConfig.promotedBrandURL}
                        style={{ borderColor: 'black', borderWidth: '2px', borderStyle: 'solid', backgroundColor: landerConfig.buttonColor }}
                        className={`hover:bg-blue-700 rounded-[10px] flex items-center gap-[10px] text-[white] text-[20px] font-[700] px-[1.8rem] 800:px-[2.2rem] py-[.8rem] 600:py-[1.25rem] justify-center
                        duration-500 
                        ease-in-out
                        shadow-lg 
                        transform 
                        hover:scale-110`}>
                            Get&nbsp;&nbsp;{siteConfig.promotedBrand}
                            <Image className='w-[20px] h-[20px]' src="/images/icons/white-download.png" alt="" />
                        </a>
                            <p className='text-[12px] text-[#000000d5] text-center'>
                                Works on all devices
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Features
