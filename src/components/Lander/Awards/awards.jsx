import React from 'react'

const data = [
    {
        img: "/awards/ar1d.png",
        hoverImg: "/awards/ar1.png"
    },
    {
        img: "/awards/ar2d.png",
        hoverImg: "/awards/ar2.png"
    },
    {
        img: "/awards/ar3d.png",
        hoverImg: "/awards/ar3.png"
    },
    {
        img: "/awards/ar4d.png",
        hoverImg: "/awards/ar4.png"
    },
    {
        img: "/awards/ar5d.png",
        hoverImg: "/awards/ar5.png"
    },
    {
        img: "/awards/ar6d.png",
        hoverImg: "/awards/ar6.png"
    },
]

const Awards = () => {
    return (
        <div className='wraper'>
            <div className="content">
                <div className='w-full center flex flex-col pt-[40px] sm:pt-[60px] pb-[50px] px-[20px]'>
                    <h1 className='text-[30px] text-center text-[black]'>Awards & Review</h1>
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
