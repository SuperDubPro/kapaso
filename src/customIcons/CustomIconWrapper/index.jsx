import React from 'react'
import CUSTOM_ICONS_DATA from '../data'

const { SIZES } = CUSTOM_ICONS_DATA

export function CustomIconWrapper({ children, size = 'm', ...props }) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width={`${SIZES[size] || size}px`}
      height={`${SIZES[size] || size}px`}
    >
      {children}
    </svg>
  )
}
