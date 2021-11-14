import Icon from 'components/Icon'
import React from 'react'

const Select = ({ className, title }) => {
  return (
    <div
      className={`${className} rounded-md shadow-base pl-4 pr-2 py-2 bg-white flex items-center cursor-pointer`}
    >
      <span
        className='flex-1'
        style={{ letterSpacing: title?.length === 2 ? '1em' : '' }}
      >
        {title}
      </span>
      <Icon label='dropdown' />
    </div>
  )
}

export default Select
