import React from 'react'

const IconSize = {
  sm: 'w-6 h-6',
  md: 'w-8 h-8',
}

const Icon = ({ label, size, className }) => {
  const sizeClass = IconSize[size || 'sm']

  return (
    <svg className={`${sizeClass} ${className || ''}`}>
      <use xlinkHref={`/assets/icons/sprite.svg#${label}`}></use>
    </svg>
  )
}

export default Icon
