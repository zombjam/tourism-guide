import React from 'react'
import './Style.scss'
import Icon from 'components/Icon'

const CityCard = ({ city, index }) => {
  return (
    <li
      className={`p-3 bg-white relative box${(index % 3) + 1} cursor-pointer`}
    >
      <div
        className='h-full bg-no-repeat bg-cover bgImg'
        style={{ backgroundImage: `url(${city.img})` }}
      ></div>
      <div className='flex flex-col items-center justify-center absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2'>
        <Icon label='map_M' />
        <span className='text-white text-xl mt-2'>{city.label}</span>
      </div>
    </li>
  )
}

export default CityCard
