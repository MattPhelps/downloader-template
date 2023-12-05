import React from 'react'

const data = [
    {
        name: "PornHub Downloader",
        img: "/images/lander/nsfw-sites/pornhub-logo.png"
    },
    {
        name: "XNXX Downloader",
        img: "/images/lander/nsfw-sites/xnxx-logo.jpeg"
    },
    {
        name: "Redtube Downloader",
        img: "/images/lander/nsfw-sites/redtube-logo.jpeg"
    },
    {
        name: "XVIDEOS Downloader",
        img: "/images/lander/nsfw-sites/xvideos-logo.png"
    },
    {
        name: "Spankbang Downloader",
        img: "/images/lander/nsfw-sites/spankbang-logo.jpeg"
    },
    {
        name: "xHamster Downloader",
        img: "/images/lander/nsfw-sites/xhamster-logo.jpeg"
    },
    {
        name: "Eporner Downloader",
        img: "/images/lander/nsfw-sites/eporner-logo.jpeg"
    },
    {
        name: "Motherless Downloader",
        img: "/images/lander/nsfw-sites/motherless-logo.jpeg"
    },
    {
        name: "YouPorn Downloader",
        img: "/images/lander/nsfw-sites/youporn-logo.png"
    },
    {
        name: "PornTrex Downloader",
        img: "/images/lander/nsfw-sites/porntrex-logo.png"
    },
    {
        name: "REDGIFS Downloader",
        img: "/images/lander/nsfw-sites/redgifs-logo.png"
    },
    {
        name: "PornTube Downloader",
        img: "/images/lander/nsfw-sites/porntube-logo.jpeg"
    },
    {
        name: "Tube8 Downloader",
        img: "/images/lander/nsfw-sites/tube8-logo.jpeg"
    },
    {
        name: "JavHD Downloader",
        img: "/images/lander/nsfw-sites/javhd-logo.jpeg"
    },
    {
        name: "YesPornPlease Downloader",
        img: "/images/lander/nsfw-sites/yespornplease-logo.jpeg"
    },
    {
        name: "PornZog Downloader",
        img: "/images/lander/nsfw-sites/pornzog-logo.png"
    },
    {
        name: "ModelHub Downloader",
        img: "/images/lander/nsfw-sites/modelhub-logo.jpeg"
    },
    {
        name: "YouJizz Downloader",
        img: "/images/lander/nsfw-sites/youjizz-logo.jpeg"
    },
    {
        name: "FapHouse Downloader",
        img: "/images/lander/nsfw-sites/faphouse-logo.jpeg"
    },
]

const SupportedSites = () => {
    return (
        <div className='wrapper bg-[#EFF6FF]'>
            <div className='content center flex flex-col pt-[40px] sm:pt-[70px] pb-[60px] px-[10px] sm:px-[30px]'>
                <h2 className='text-center font-extrabold text-[34px] text-[black] leading-[1.2]'>
                    Supported Sites
                </h2>
            
                    <div className='flex flex-wrap items-center gap-x-[2rem] gap-y-[1rem] sm:gap-y-[2.5rem] justify-center max-w-[1200px] pt-[30px] sm:pt-[40px]'>
                        {
                            data.map((item, i) => (
                                <div key={i} className='min-w-[150px] sm:min-w-[205px] min-h-[92px] center flex flex-col gap-[10px]'>
                                    {/* eslint-disable-next-line */}
                                    <img src={item.img} alt="" className='max-w-[120px] sm:max-w-[200px]' />
                                </div>
                            ))
                        }
                    </div>
                    <br></br>
                    <br></br>
                    <h3 className='text-center font-bold text-[24px] text-[black] leading-[1.2]'>
                    10,000+ Supported Websites
                </h3>
                <br></br>
            </div>
        </div>
    )
}

export default SupportedSites
