import React from 'react'

import Icon from '../Icon'
import cardsData from './card'
import Pagination from '../Pagination'

const Cards = () => {
  return (
    <div className='space-y-3'>
      <h4 className='flex items-center text-xl'>
        <Icon label='rectangle' className='mr-3.5' />
        熱門餐飲
      </h4>

      <div className='grid lg:grid-cols-5 md:grid-cols-4 grid-cols-2 lg:gap-x-5 lg:gap-y-12 md:gap-x-3 md:gap-y-7 gap-x-1 gap-y-5'>
        {cardsData.map((card, index) => (
          <div
            key={card.name}
            className='p-3 flex flex-col banner-shadow bg-white'
          >
            <div className='aspect-w-3 aspect-h-2'>
              <img
                src={card.img}
                alt={card.name}
                className='w-full h-full object-cover object-center'
              />
            </div>
            <div className='pt-2.5'>
              <h5 className='line-clamp-2 text-sm'>{card.name}</h5>
              <p className='flex items-center pt-3 text-green text-xs font-light'>
                <Icon label='map' className='mr-1' />
                {card.location}
              </p>
            </div>
          </div>
        ))}
      </div>

      <Pagination />
    </div>
  )
}

export default Cards
