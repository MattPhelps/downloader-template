import React from 'react'

const data = [
    {
        img: "/images/lander/awards/ar1d.png",
        hoverImg: "/images/lander/awards/ar1.png"
    },
    {
        img: "/images/lander/awards/ar2d.png",
        hoverImg: "/images/lander/awards/ar2.png"
    },
    {
        img: "/images/lander/awards/ar3d.png",
        hoverImg: "/images/lander/awards/ar3.png"
    },
    {
        img: "/images/lander/awards/ar4d.png",
        hoverImg: "/images/lander/awards/ar4.png"
    },
    {
        img: "/images/lander/awards/ar5d.png",
        hoverImg: "/images/lander/awards/awards/ar5.png"
    },
    {
        img: "/images/lander/awards/ar6d.png",
        hoverImg: "/images/lander/awards/ar6.png"
    },
]

const Awards = () => {
    return (
        <div className='wraper'>
            <div className="content">
                <div className='w-full center flex flex-col pt-[40px] sm:pt-[60px] pb-[50px] px-[20px]'>
                    <h1 className='font-extrabold text-[34px] text-center text-[black]'>Awards & Review</h1>
                    <div className='mt-[40px] sm:mt-[60px] w-full grid gap-y-[20px] gap-x-[30px] sm:gap-y-[40px] sm:gap-x-[40px] grid-cols-2 sm:grid-cols-3 900:grid-cols-6 max-w-[1000px]'>
                        {
                            data.map((item, i) => (
                                <div key={i} className='relative group cursor-pointer h-[40px] min-w-[120px]'>
                                    {/* eslint-disable-next-line */}
                                    <img src={item.img} alt=""
                                        className='h-[40px] absolute absolute-center z-[-1]'
                                    />
                                    {/* eslint-disable-next-line */}
                                    <img src={item.hoverImg} alt=""
                                        className='h-[40px] hidden group-hover:show-awards'
                                    />
                                </div>
                            ))
                        }
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Awards
