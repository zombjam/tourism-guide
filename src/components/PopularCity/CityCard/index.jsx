import React from 'react'

import Icon from 'components/Icon'

const CityCard = ({ city, index }) => {
  const widestLetterSpacing = {
    letterSpacing: '1em',
    paddingLeft: '1em',
  }

  return (
    <div
      className={`p-2 bg-white relative box${(index % 7) + 1} cursor-pointer`}
    >
      <div
        className='bg-no-repeat bg-cover bgImg h-full'
        style={{ backgroundImage: `url(${city.img})` }}
      ></div>
      <div className='flex flex-col items-center justify-center absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2'>
        <Icon label='map_M' />
        <span
          className='text-white sm:text-xl mt-2 whitespace-nowrap text-center'
          style={city.label.length === 2 ? widestLetterSpacing : undefined}
        >
          {city.label}
        </span>
      </div>
    </div>
  )
}

export default CityCard
