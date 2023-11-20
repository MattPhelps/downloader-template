import React from 'react'

const data = [
    {
        name: "Video Downloader",
        img: "/images/lander/sites/site1.png"
    },
    {
        name: "Audio Downloader",
        img: "/images/lander/sites/site2.png"
    },
    {
        name: "Facebook Downloader",
        img: "/images/lander/sites/site3.png"
    },
    {
        name: "AM Downloader",
        img: "/images/lander/sites/site4.png"
    },
    {
        name: "Dailymotion Downloader",
        img: "/images/lander/sites/site5.png"
    },
    {
        name: "TikTok Downloader",
        img: "/images/lander/sites/site6.png"
    },
    {
        name: "Vimeo Downloader",
        img: "/images/lander/sites/site7.png"
    },
    {
        name: "NicoNico Downloader",
        img: "/images/lander/sites/site8.png"
    },
    {
        name: "Ok.ru Downloader",
        img: "/images/lander/sites/site9.png"
    },
    {
        name: "Twitch Downloader",
        img: "/images/lander/sites/site10.png"
    },
    {
        name: "Twitter Downloader",
        img: "/images/lander/sites/site11.png"
    },
    {
        name: "Bilibili Downloader",
        img: "/images/lander/sites/site12.png"
    },
    {
        name: "SoundCloud Downloader",
        img: "/images/lander/sites/site13.png"
    },
    {
        name: "Vlive Downloader",
        img: "/images/lander/sites/site14.png"
    },
    {
        name: "MixCloud Downloader",
        img: "/images/lander/sites/site15.png"
    },
]

const SupportedSites = () => {
    return (
        <div className='wrapper bg-[#EFF6FF]'>
            <div className='content center flex flex-col pt-[40px] sm:pt-[70px] pb-[60px] px-[10px] sm:px-[30px]'>
                <h1 className='text-center text-[30px] text-[black] leading-[1.2]'>
                    Supported Sites
                </h1>
                <p className='text-center sm:text-[18px] max-w-[330px] text-[black] sm:max-w-[700px] pt-[8px] sm:pt-[10px]'>
                    10,000+ sites like Facebook, Instagram, Dailymotion, TikTok, Apple Music, Ok.ru, adult sites, etc. have been supported by YT Saver, which helps you download free videos from your favorite sites.
                </p>
                <div className='flex flex-wrap items-center gap-y-[1rem] sm:gap-y-[2.5rem] justify-center max-w-[1200px] pt-[30px] sm:pt-[40px]'>
                    {
                        data.map((item, i) => (
                            <div key={i} className='min-w-[150px] sm:min-w-[205px] min-h-[92px] center flex flex-col gap-[10px]'>
                                {/* eslint-disable-next-line */}
                                <img src={item.img} alt="" className='max-w-[90px] sm:max-w-[145px]' />
                                <p className='text-[black]'>{item.name}</p>
                            </div>
                        ))
                    }
                </div>
                <div className='center pt-[30px] sm:mt-[40px]'>
                    <button className='py-[8px] rounded-[5px] px-[20px] sm:px-[32px] hover:text-white border-[2px] border-[blue] text-[blue] bg-white hover:bg-[blue]'>Complete List of Supported Sites</button>
                </div>
            </div>
        </div>
    )
}

export default SupportedSites
