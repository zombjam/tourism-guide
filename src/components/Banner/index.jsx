import React from 'react'

import SearchBar from '../SearchBar'

import './Style.scss'

const Banner = () => (
  <div className='bannerWrapper bg-white banner-shadow mb-20'>
    <div
      className='bannerBg'
      style={{ backgroundImage: "url('./assets/images/homeBg.png')" }}
    >
      <div className='relative h-full md:inline-flex px-2 flex-col justify-center left-1/2 transform -translate-x-1/2'>
        <div className='bannerLogo mb-2'>
          <h1
            className='h-16 bg-contain bg-center bg-no-repeat'
            style={{ backgroundImage: "url('./assets/images/home.svg')" }}
          ></h1>
          <span className='text-white text-sm pl-1.5 pr-40'>
            台北、台中、台南、屏東、宜蘭……遊遍台灣
          </span>
        </div>
        <SearchBar />
      </div>
    </div>
  </div>
)

export default Banner
