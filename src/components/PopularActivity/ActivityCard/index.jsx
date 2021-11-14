import React from 'react'

import './Style.scss'
import Icon from '../../Icon'

const ActivityCard = ({ activity }) => {
  return (
    <div className='bg-white banner-shadow p-4 grid 2xl:grid-cols-3 grid-cols-5'>
      <div className='aspect-h-1 2xl:col-span-1 col-span-2'>
        <img
          className='object-center object-cover'
          src={activity.img}
          alt={activity.name}
        />
      </div>
      <div className='ml-3 flex flex-col justify-between 2xl:col-span-2 col-span-3'>
        <h3 className='mb-2'>{activity.name}</h3>
        <div className='desc text-gray-400 flex-1 2xl:line-clamp-5 line-clamp-3'>
          {activity.desc}
        </div>
        <div className='flex justify-between items-center sm:text-sm text-base pt-2'>
          <div className='flex justify-between items-center'>
            <Icon label='map' />
            <span className='ml-1'>{activity.location}</span>
          </div>
          <button className='xl:px-4 px-2 py-2 rounded-md border border-pink text-pink hover:bg-pink hover:text-white transition-all lg:block hidden ml-1 whitespace-nowrap'>
            活動詳情
          </button>
        </div>
      </div>
    </div>
  )
}

export default ActivityCard
