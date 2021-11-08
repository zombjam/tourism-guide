import Icon from 'components/Icon'
import React from 'react'

const Select = ({ className }) => {
  return (
    <div
      className={`${className} rounded-md shadow-base pl-4 pr-2 py-2 bg-white flex items-center cursor-pointer`}
    >
      <span className='flex-1'>Select</span>
      <Icon label='dropdown' />
    </div>
  )
}

export default Select
