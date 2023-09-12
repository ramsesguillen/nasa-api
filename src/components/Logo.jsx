import React from 'react'
import logo from '../assets/img/NASA_logo.png'
export const Logo = () => {
  return (
    <div
      style={{
        display: 'flex',
        alignItems: 'flex-end',
        gap: '16px'
      }}
    >
      <img
        src={ logo }
        alt="NASA import logo from './assets/img/NASA_logo.png'LOGO"
        className='img-thumbnail'
        style={{
          width: '100px'
        }}
      />
      <h1>{ '{ NASA APIs }' }</h1>
    </div>
  )
}
