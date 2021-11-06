import React from 'react'

const Banner = () => (
  <div className='pt-2 pb-6 px-6 bg-white banner-shadow '>
    <div
      className='bg-homeBg bg-no-repeat bg-cover bg-center relative'
      style={{ height: '496px' }}
    >
      <div className='relative h-full inline-flex flex-col justify-center left-1/2 transform -translate-x-1/2'>
        <h1 className='bg-homeLogo h-16 bg-contain bg-center bg-no-repeat'></h1>
        <span className='text-white text-sm pl-1.5 pr-40'>
          台北、台中、台南、屏東、宜蘭……遊遍台灣
        </span>
      </div>
    </div>
  </div>
)

export default Banner
