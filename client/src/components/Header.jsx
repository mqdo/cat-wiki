import React from 'react'
import { Link } from 'react-router-dom'

import logo from '../assets/CatwikiLogo.svg'

const Header = () => {
  return (
    <div className='fixed z-20 bg-white w-full p-4 xl:w-[1248px] xl:px-0 h-16 md:h-24 top-0 left-[50%] -translate-x-[50%] flex items-center'>
      <Link to='/'>
        <h1 className='hidden'>Cat Wiki</h1>
        <img src={logo} alt='logo' />
      </Link>
    </div>
  )
}

export default Header