"use client"
import React, { useState } from 'react'
import siteConfig from '../../../../siteConfig';

const DownloadBar = () => {
    const [downloadFor, setDownloadFor] = useState("windows")
    return (
        <div className='wrapper bg-[#F5F5F5]'>
            <div className='content center flex flex-col py-[40px] sm:py-[50px] px-[20px]'>
                <h2 className='text-center text-[black] font-extrabold text-[34px]'>
                Download Videos in 3 Steps
                </h2>
            </div>
        </div>
    )
}

export default DownloadBar
