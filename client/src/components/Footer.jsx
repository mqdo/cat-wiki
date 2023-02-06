import React from 'react'
import { Link } from 'react-router-dom'

import logo from '../assets/CatwikiLogoWhite.svg'

const Footer = () => {
  return (
    <div className='w-full p-4 md:px-14 bg-gray-900 xl:w-[1248px] xl:px-24 h-28 md:h-24 mx-auto text-white rounded-t-[2rem] md:rounded-t-[3rem] flex md:items-center flex-col md:flex-row justify-between'>
      <Link to='/'>
        <img src={logo} alt='logo' />
      </Link>
      <p className='text-sm md:text-lg'>
        <span>&#169;</span> created by <a target='_blank' href='https://github.com/mqdo/' className='font-bold underline'>mqdo</a> - devChallenge.io 2023
      </p>
    </div>
  )
}

export default Footer