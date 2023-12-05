import React from 'react'
import siteConfig from '../../../../siteConfig';

const data = [
    {
        text: "Find the video you want to download, then copy the URL from the address bar.",
        img: "/images/lander/icons/ht1.webp"
    },
    {
        text: "Choose the output format and quality you want.",
        img: "/images/lander/icons/ht2.webp"
    },
    {
        text: `Click the "Paste" button to begin the download process.`,
        img: "/images/lander/icons/ht3.webp"
    },
]

const HowToSave = () => {
    return (
        <div className='wrapper bg-[#EFF6FF]'>
            <div className='content center mt-[40px] sm:pt-[60px] pb-[50px] px-[20px]'>
                <div className='w-full max-w-[1000px] center flex flex-col'>
                    <h2 className='font-extrabold text-[34px] text-center text-[black]'>
                        How to Download Videos with {siteConfig.promotedBrand}
                    </h2>
                    <div className='900:w-full flex flex-wrap justify-center 900:justify-between items-center gap-[30px] mt-[50px] max-w-[600px] 900:max-w-[1000px]'>
                        {
                            data.map((item, i) => (
                                <div key={i} className='sm:max-w-[250px] center flex flex-col'>
                                    <div className='w-[44px] aspect-square min-w-[44px] bg-[#6B7280] text-[white] font-[600] center text-[25px] rounded-full'>
                                        {i + 1}
                                    </div>
                                    <p className='text-center text-[black] mt-[10px] sm:min-h-[72px]'>
                                        {item.text}
                                    </p>
                                    {/* eslint-disable-next-line */}
                                    <img src={item.img} alt="" className='mt-[20px]' />
                                </div>
                            ))
                        }
                    </div>
                    <div className='center pt-[30px] sm:mt-[40px]'>
                        <button className='py-[8px] rounded-[5px] px-[20px] sm:px-[32px] hover:text-white border-[2px] border-[blue] text-[blue] bg-white hover:bg-[blue]'>View Full Guide →</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default HowToSave
