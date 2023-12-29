import React from 'react'
import landerConfig from '../../../../landerConfig';

const SupportedSites = () => {
    return (
        <div className='wrapper bg-[#F5F5F5]'>
            <div className='content center flex flex-col pt-[40px] sm:pt-[70px] pb-[60px] px-[10px] sm:px-[30px]'>
                <h2 className='text-center font-extrabold text-[34px] text-[black] leading-[1.2]'>
                    10,000+ Supported Sites
                </h2>
            
                    <div className='flex flex-wrap items-center gap-x-[2rem] gap-y-[1rem] sm:gap-y-[2.5rem] justify-center max-w-[1200px] pt-[30px] sm:pt-[40px]'>
                        {
                            landerConfig.supportedSitesData.map((item, i) => (
                                <div key={i} className='min-w-[150px] sm:min-w-[205px] min-h-[92px] center flex flex-col gap-[10px]'>
                                    {/* eslint-disable-next-line */}
                                    <img src={item.img} alt="" className='max-w-[120px] sm:max-w-[200px]' />
                                </div>
                            ))
                        }
                    </div>
                    <br></br>
                    <br></br>
                <br></br>
            </div>
        </div>
    )
}

export default SupportedSites
