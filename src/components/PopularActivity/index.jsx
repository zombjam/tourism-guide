import React from 'react'

import Icon from '../Icon'
import Activities from './Activities'

import ActivityCard from './ActivityCard'

const PopularActivity = () => {
  return (
    <div className='space-y-3'>
      <h4 className='flex items-center text-xl'>
        <Icon label='triangle' className='mr-3.5' />
        熱門活動
      </h4>

      <div className='grid md:grid-cols-2 md:gap-x-5 md:gap-y-12 grid-cols-1 gap-5'>
        {Activities.map((activity) => (
          <ActivityCard key={activity.name} activity={activity} />
        ))}
      </div>
    </div>
  )
}

export default PopularActivity
