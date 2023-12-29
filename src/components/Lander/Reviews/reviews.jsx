import React from 'react'
import landerConfig from '../../../../landerConfig';

const Reviews = () => {
    return (
        <div className='wrapper bg-[#F5F5F5]'>
            <div className='content center flex flex-col pt-[40px] sm:pt-[60px] pb-[50px] px-[10px] sm:px-[20px]'>
                <h2 className='text-center font-extrabold text-[34px] text-[black]'>
                    4.8 Trustpilot Rating
                </h2>
                <div className='w-full max-w-[1050px] grid grid-cols-1 700:grid-cols-2 gap-[10px] sm:gap-[30px] mt-[30px] sm:pt-[50px]'>
                    {
                        landerConfig.reviewsData.map((item, i) => (
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
