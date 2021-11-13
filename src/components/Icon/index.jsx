import React, { useState } from 'react'

import './Style.scss'

const IconSize = {
  sm: 'w-6 h-6',
  md: 'w-8 h-8',
}

const Icon = ({ label, size, className, hasHover }) => {
  const [isHover, setHover] = useState(false)

  const sizeClass = IconSize[size || 'sm']

  return (
    <svg
      className={`${sizeClass} ${label} ${className || ''}`}
      onMouseEnter={() => hasHover && setHover(true)}
      onMouseLeave={() => hasHover && setHover(false)}
    >
      <use
        xlinkHref={`/assets/icons/sprite.svg#${label}${
          hasHover ? (isHover ? '-hover' : '') : ''
        }`}
      ></use>
    </svg>
  )
}

export default Icon
