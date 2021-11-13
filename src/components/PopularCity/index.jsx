import React, { useRef } from 'react'
import Cities from './Cities'

import Icon from '../Icon'
import CityCard from './CityCard'

import SwiperCore, { Navigation, Grid } from 'swiper'
import { Swiper, SwiperSlide } from 'swiper/react'

import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/grid'

import './Style.scss'

SwiperCore.use([Navigation, Grid])

const PopularCity = () => {
  const prevRef = useRef(null)
  const nextRef = useRef(null)

  const swiperConfig = {
    slidesPerView: 2,
    slidesPerGroup: 2,
    grid: {
      rows: 1.5,
    },
    spaceBetween: 12,
    breakpoints: {
      576: {
        slidesPerView: 4,
        slidesPerGroup: 4,
      },
      992: {
        slidesPerView: 5,
        slidesPerGroup: 7,
      },
    },
    wrapperTag: 'ul',
    onInit: (swiper) => {
      swiper.params.navigation.prevEl = prevRef.current
      swiper.params.navigation.nextEl = nextRef.current
      swiper.navigation.init()
      swiper.navigation.update()
    },
  }

  return (
    <div>
      <h4 className='flex items-center text-xl'>
        <Icon label='triangle' className='mr-3.5' />
        熱門城市
      </h4>

      <div className='w-full relative'>
        <button className='swiper-button-prev' ref={prevRef}>
          <Icon label='previous-1' className='w-full h-full px-1' hasHover />
        </button>
        <button className='swiper-button-next' ref={nextRef}>
          <Icon label='next-1' className='w-full h-full px-1' hasHover />
        </button>
        <div className='relative gallery'>
          <Swiper {...swiperConfig}>
            {Cities.map((city, index) => (
              <SwiperSlide key={city.label} tag='li'>
                <CityCard key={city.label} city={city} index={index} />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </div>
  )
}

export default PopularCity
