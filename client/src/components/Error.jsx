import React from 'react'
import { Link } from 'react-router-dom'


import { BsArrowLeft } from 'react-icons/bs'
import error from '../assets/error.jpg'

const Error = () => {
  return (
    <div className='bg-white text-center w-full p-4 xl:w-[1248px] xl:px-0 mx-auto pt-16 md:pt-24 h-[calc(100vh-112px)] md:h-[calc(100vh-96px)] flex flex-col items-center justify-center'>
      <img src={error} alt='error 404' className='w-full h-[92%] object-cover' />
      <div className='w-40'>
        <Link to='/'>
          <p className='text-lg font-medium hover:font-semibold flex items-center justify-center gap-2'>
            <BsArrowLeft /> Go back
          </p>
        </Link>
      </div>
    </div>
  )
}

export default Error