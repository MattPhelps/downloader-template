import Image from 'next/image'
import React from 'react'
import siteConfig from "../../../siteConfig";

// thumnail.jpg
const Render = () => {
    const color = siteConfig.buttonColor
    return (
        <div className='flex items-center gap-[10px] flex-col justify-center mt-[10px]'>
            <p className='text-[17px] text-center leading-[1] max-w-[380px] lg:max-w-[540px]'>
                Maximize your Dating App Profile Lifespan Hight Quanlity Tind... 
            </p>
            <div className='flex flex-col lg:flex-row gap-[0px] lg:gap-[10px] items-center lg:items-center rounded-[10px] px-[10px]' >
                <div className='px-[10px] sm:px-0'>
                    <Image style={{ width: "auto", height: "auto" }} className='max-h-[210px] lg:max-h-[190px] rounded-[10px]' src="/thumnail.jpg" alt="" width={800} height={400} />
                </div>
                <div className='flex flex-col gap-[20px] justify-center lg:px-0 px-[40px] sm:px-0 sm:max-w-[300px] h-full lg:max-w-[210px] py-[15px] items-center'>
                    <div className='flex flex-col gap-[5px] lg:gap-[20px] w-full h-full'>
                        <div className='w-full flex flex-col gap-[5px]'>
                            <button className={`${`bg-[#de2500]`} text-[white] text-[16px] px-[25px] py-[12px] w-full rounded-[7px] hover:opacity-[.9] border`}>
                                Download 360p
                            </button>
                            <p className='text-center text-[13px] justify-center gap-[5px] flex items-center'>
                                Preview Image154 × 155 <ToolBox text={"up to 0.25 megapixels"} />
                            </p>
                        </div>
                        <div className='w-full flex flex-col gap-[5px]'>
                            <button title="This is a tooltip message" className={`${`bg-[#de2500]`} text-[white] text-[16px] py-[12px] w-full rounded-[7px] hover:opacity-[.9] border`}>
                                Download 720p
                            </button>
                            <p className='text-center text-[13px] justify-center gap-[5px] flex items-center'>
                                Preview Image154 × 155 <ToolBox text={"Please upload a higher resolution image or download the preview image."} />
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Render


const ToolBox = ({ text }) => {
    return (
        <span className="tooltip bg-[gray] w-[17px] h-[17px] flex items-center justify-center text-[14px] rounded-full text-[white]">
            <span className="tooltiptext">{text}</span>
            ?
        </span>
    )
}