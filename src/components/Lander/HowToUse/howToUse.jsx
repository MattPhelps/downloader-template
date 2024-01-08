import React from 'react';
import siteConfig from '../../../../siteConfig';
import landerConfig from '../../../../landerConfig';
import Image from "next/image";
const HowToUse = () => {

    return (
        <div>
            {/* STEP 1 */}
            <div className='w-full flex flex-col lg:flex-row items-start py-[20px] lg:py-[10px]'>
                
                {/* Image */}
                <div className='hidden lg:flex lg:w-full p-[40px] flex-col justify-start items-center'>
                    <Image src={landerConfig.siteImagePath} alt='Your Image Description' className='max-w-full h-auto' />
                </div>

                {/* Text Content */}
                <div className='w-full lg:w-full flex flex-col pb-[40px] 700:py-[80px] px-[15px] 700:px-[25px] 800:px-[50px] 1000:px-[85px]'>
                    <h1 style={{ lineHeight: '1.4' }} className='text-[black] dark:text-white mb-6 800:px-[0px] text-xl font-bold sm:text-3xl xl:text-heading flex items-center'>
                        <Image src={landerConfig.iconPath1} alt='Step 1' style={{ marginRight: '10px' }} className='w-[40px] max-w-[40px]' />
                        Copy the Video URL
                    </h1>

                    <p className='700:text-[18px] text-left mt-[10px] 800:px-[0px] text-[black]'>
                    Copy your video&apos;s link from the browser address bar.
                    </p>
                </div>
            

            </div>

            {/* STEP 2 */}
            <div className='w-full flex flex-col lg:flex-row items-start py-[20px] lg:py-[10px]'>
                
                {/* Image */}
                <div className='hidden lg:flex lg:w-full p-[40px] flex-col justify-start items-center'>
                    <Image src={landerConfig.howToUse2} alt='Your Image Description' className='max-w-full h-auto' />
                </div>

                {/* Text Content */}
                <div className='w-full lg:w-full flex flex-col pb-[40px] 700:py-[80px] px-[15px] 700:px-[25px] 800:px-[50px] 1000:px-[85px]'>
                    <h1 style={{ lineHeight: '1.4' }} className='text-[black] dark:text-white mb-6 800:px-[0px] text-xl font-bold sm:text-3xl xl:text-heading flex items-center'>
                        <Image src={landerConfig.iconPath2} alt='Step 2' style={{ marginRight: '10px' }} className='w-[40px] max-w-[40px]' />
                        Choose Format and Quality
                    </h1>

                    <p className='700:text-[18px] text-left mt-[10px] 800:px-[0px] text-[black]'>
                      Set the output format as MP4 and quality as 1080p.
                    </p>
                </div>
            

            </div>

            {/* STEP 3 */}
            <div className='w-full flex flex-col lg:flex-row items-start py-[20px] lg:py-[10px]'>
                
                {/* Image */}
                <div className='hidden lg:flex lg:w-full p-[40px] flex-col justify-start items-center'>
                    <Image src={landerConfig.howToUse3} alt='Your Image Description' className='max-w-full h-auto' />
                </div>

                {/* Text Content */}
                <div className='w-full lg:w-full flex flex-col pb-[40px] 700:py-[80px] px-[15px] 700:px-[25px] 800:px-[50px] 1000:px-[85px]'>
                    <h1 style={{ lineHeight: '1.4' }} className='text-[black] dark:text-white mb-6 800:px-[0px] text-xl font-bold sm:text-3xl xl:text-heading flex items-center'>
                        <Image src={landerConfig.iconPath3} alt='Step 3' style={{ marginRight: '10px' }} className='w-[40px] max-w-[40px]' />
                        Paste Multiple URLs
                    </h1>

                    <p className='700:text-[18px] text-left mt-[10px] 800:px-[0px] text-[black]'>
                    Paste all the video links you want to download into the input box. Then Click &ldquo;Download&rdquo;.
                    </p>
                </div>
            

            </div>

            {/* STEP 4 */}
            <div className='w-full flex flex-col lg:flex-row items-start py-[20px] lg:py-[10px]'>
                
                {/* Image */}
                <div className='hidden lg:flex lg:w-full p-[40px] flex-col justify-start items-center'>
                    <Image src={landerConfig.howToUse4} alt='Your Image Description' className='max-w-full h-auto' />
                </div>

                {/* Text Content */}
                <div className='w-full lg:w-full flex flex-col pb-[40px] 700:py-[80px] px-[15px] 700:px-[25px] 800:px-[50px] 1000:px-[85px]'>
                    <h1 style={{ lineHeight: '1.4' }} className='text-[black] dark:text-white mb-6 800:px-[0px] text-xl font-bold sm:text-3xl xl:text-heading flex items-center'>
                        <Image src={landerConfig.iconPath4} alt='Step 4' style={{ marginRight: '10px' }} className='w-[40px] max-w-[40px]' />
                        DONE!
                    </h1>

                    <p className='700:text-[18px] text-left mt-[10px] 800:px-[0px] text-[black]'>
                    Your video is successfully downloaded in your private folder.
                    </p>
                </div>
            

            </div>
        </div>
    );
}

export default HowToUse;
