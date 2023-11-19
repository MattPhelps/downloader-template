import React from 'react'
import siteConfig from '../../../../siteConfig';

const FooterTop = () => {
    return (
        <div className='wrapper text-[black]'>
            <div className='content center px-[20px] sm:px-[20px] pt-[40px] sm:pt-[60px] pb-[40px] sm:pb-[50px]'>
                <div className='w-full max-w-[1050px] flex flex-col gap-[15px]'>
                    {/* First Ul */}
                    <div className='flex flex-col gap-[15px]'>
                        <h1 className='text-[24px] leading-[1.3]'>
                        {siteConfig.promotedBrand} Video Downloader Release info
                        </h1>
                        <ul className='list-disc list-inside sm:text-[18px]'>
                            <li>
                                Latest Version: V6.9.7
                            </li>
                            <li>
                                Released: 04/06/2023
                            </li>
                            <li>
                                Size: 80MB
                            </li>
                            <li>
                                Licence: FREE
                            </li>
                        </ul>
                    </div>
                    {/* Second Ul */}
                    <div className='flex flex-col gap-[15px]'>
                    <h1 className='text-[24px] leading-[1.3]'>
                            System Requirements for {siteConfig.promotedBrand} Video Downloader

                        </h1>
                        <ul className='list-disc list-inside sm:text-[18px]'>
                            <li>
                                Windows 7 or later
                            </li>
                            <li>
                                MacOS 10.10 or later
                            </li>
                        </ul>
                    </div>
                    {/* Third Ul */}
                    <div className='flex flex-col gap-[15px]'>
                    <h1 className='text-[24px] leading-[1.3]'>
                            Supported Input Formats
                        </h1>
                        <ul className='list-disc list-inside sm:text-[18px]'>
                            <li>
                                Video: MP4, M4V, 3GP, MPEG, DAT, AVI, ASF, WMV, VOB, MKV, FLV, 3GS, 3G2, F4V, WEBM, TS, RMVB, MOV
                            </li>
                            <li>
                                Audio: AAC, AC3, FLAC, M4A, WAV, WMA, AMR, MKA, MP2, AIF, AU, AIFF, CAF, OGG, RAM, RA, M4B, M4R, APE, OPUS, WEBM
                            </li>
                        </ul>
                    </div>
                    {/* Fourth Ul */}
                    <div className='flex flex-col gap-[15px]'>
                    <h1 className='text-[24px] leading-[1.3]'>
                            Supported Output Formats
                        </h1>
                        <ul className='list-disc list-inside sm:text-[18px]'>
                            <li>
                                Video: MP4, MOV, WMV, AVI, FLV, MKV, HEVC MP4, HEVC MKV, 3GP, iPhone/iPod, iPad, Android Phone, Android Tablets
                            </li>
                            <li>
                                Audio: M4A, MKA, WAV, AAC, FLAC, AIFF, OGG
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default FooterTop
