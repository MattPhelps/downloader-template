import React from 'react'

const data = [
    {
        img: "/images/lander/reviews/trustpilot-review-1.png"
    },
    {
        img: "/images/lander/reviews/trustpilot-review-2.png"
    },
    {
        img: "/images/lander/reviews/trustpilot-review-3.png"
    },
    {
        img: "/images/lander/reviews/trustpilot-review-9.png"
    },
    {
        img: "/images/lander/reviews/trustpilot-review-7.png"
    },
    {
        img: "/images/lander/reviews/trustpilot-review-6.png"
    },
    {
        img: "/images/lander/reviews/trustpilot-review-4.png"
    },
    {
        img: "/images/lander/reviews/trustpilot-review-5.png"
    },
    {
        img: "/images/lander/reviews/trustpilot-review-8.png"
    },
    {
        img: "/images/lander/reviews/trustpilot-review-10.png"
    },
]

const Reviews = () => {
    return (
        <div className='wrapper bg-[#F5F5F5]'>
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
