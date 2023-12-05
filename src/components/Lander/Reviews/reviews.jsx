import React from 'react'

const data = [
    {
        img: "/images/lander/reviews/review1.webp"
    },
    {
        img: "/images/lander/reviews/review2.webp"
    },
    {
        img: "/images/lander/reviews/review3.webp"
    },
    {
        img: "/images/lander/reviews/review4.webp"
    },
]

const Reviews = () => {
    return (
        <div className='wrapper bg-[#EFF6FF]'>
            <div className='content center flex flex-col pt-[40px] sm:pt-[60px] pb-[50px] px-[10px] sm:px-[20px]'>
                <h2 className='text-center font-extrabold text-[34px] text-[black]'>
                    What Others are Saying...
                </h2>
                <div className='w-full max-w-[1050px] grid grid-cols-1 700:grid-cols-2 gap-[10px] sm:gap-[30px] mt-[30px] sm:pt-[50px]'>
                    {
                        data.map((item, i) => (
                            <div key={i}>
                                {/* eslint-disable-next-line */}
                                <img src={item.img} alt="" className='shadow-lg w-full' />
                            </div>
                        ))
                    }
                </div>
            </div>
        </div>
    )
}

export default Reviews
