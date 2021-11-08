import React from 'react'
import { NavLink, useLocation } from 'react-router-dom'

import { mobileMenu } from 'shared/constants/menu'
import Icon from '../Icon'
import Select from '../Select'

const SearchBar = () => {
  const { pathname } = useLocation()
  const path = pathname.split('?')[0]

  return (
    <div className='flex flex-col'>
      <div className='space-x-2 items-center justify-center sm:flex hidden'>
        <input
          className='flex-1 rounded-md shadow-base px-4 py-2'
          type='text'
          placeholder='搜尋關鍵字'
        />
        <button
          type='button'
          className='text-white bg-pink w-10 h-10 rounded-md flex items-center justify-center'
          aria-label='搜尋 search'
        >
          <Icon label='search' />
        </button>
      </div>
      <div className='sm:hidden relative'>
        <button
          type='button'
          className='text-white bg-pink w-10 h-10 rounded-md flex items-center justify-center absolute right-0 -top-14'
          aria-label='搜尋 search'
        >
          <Icon label='search' />
        </button>
        <ul className='shadow-base rounded-md p-2 flex items-center justify-around'>
          {mobileMenu.map((item) => (
            <li key={item.name}>
              <NavLink
                exact='true'
                to={item.link}
                className={path === item.link ? `text-pink` : 'text-gray-300'}
              >
                {item.name}
              </NavLink>
            </li>
          ))}
        </ul>
      </div>
      <div className='mt-2 space-x-2 flex items-center justify-center'>
        <div className='flex-1 flex items-center space-x-2'>
          <Select className='w-1/2' />
          <Select className='w-1/2' />
        </div>
        <button
          type='button'
          className='text-white bg-yellow w-10 h-10 flex items-center justify-center rounded-md'
        >
          <Icon label='GPS' />
        </button>
      </div>
    </div>
  )
}

export default SearchBar
