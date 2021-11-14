import React from 'react'

import Icon from '../Icon'

const Pagination = () => {
  return (
    <div className='flex items-center justify-center space-x-8 pt-6'>
      <button
        type='button'
        className='w-8 h-8 bg-pink rounded-md shadow-base hover:bg-black transition-all'
      >
        <Icon label='previous-1-hover' className='w-full h-full px-1' />
      </button>
      <span className='text-xl'>1</span>
      <button
        type='button'
        className='w-8 h-8 bg-pink rounded-md shadow-base hover:bg-black transition-all'
      >
        <Icon label='next-1-hover' className='w-full h-full px-1' />
      </button>
    </div>
  )
}

export default Pagination
