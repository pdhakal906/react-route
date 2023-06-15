import React from 'react'
import { NavLink } from 'react-router-dom'

const Header = () => {
  return (
    <header className='bg-black text-white flex justify-between px-4 py-2'>
      <h1 className='text-2xl'>Sample Web</h1>
      <nav>
        <NavLink to='/about'>About</NavLink>
      </nav>
    </header>
  )
}

export default Header
