import React from 'react'

const Select = ({ className }) => {
  return (
    <div
      className={`${className} rounded-md shadow-base pl-4 pr-2 py-2 bg-white flex items-center cursor-pointer`}
    >
      <span className='flex-1'>Select</span>
      <i className='w-4 h-4 bg-dropdown bg-no-repeat bg-center'></i>
    </div>
  )
}

export default Select
