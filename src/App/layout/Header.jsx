import React from 'react'
import { Link } from 'react-router-dom'
import { menus } from 'shared/constants/menu'

const Header = () => {
  return (
    <header className='bg-white'>
      <div className='container 2xl:max-w-7xl mx-auto md:px-6 flex items-end justify-between max-sm:justify-center pt-2 pb-3'>
        <Link to='/'>
          <img className='w-24' src='./assets/logo.svg' alt='logo' />
        </Link>

        <nav className='space-x-6 sm:flex hidden'>
          {menus.map((item) => (
            <Link
              key={item.link}
              to={item.link}
              className={`inline-flex items-end space-x-2`}
            >
              <img
                className='w-8'
                src={`./assets/icons/${item.icon}.svg`}
                alt={item.icon}
              />
              <span
                className={`border-b text-${item.color} border-${item.color}`}
              >
                {item.name}
              </span>
            </Link>
          ))}
        </nav>
      </div>
    </header>
  )
}

export default Header
