import React from 'react'
import Cities from './Cities'

import Icon from '../Icon'
import CityCard from 'components/PopularCity/CityCard/index'

import './Style.scss'

console.log(Cities)

const PopularCity = () => {
  return (
    <div>
      <h4 className='flex items-center text-xl mb-3'>
        <Icon label='triangle' className='mr-3.5' />
        熱門城市
      </h4>

      <ul className='wrapper'>
        {Cities.map((city, index) => (
          <CityCard key={city.label} city={city} index={index} />
        ))}
      </ul>
    </div>
  )
}

export default PopularCity
