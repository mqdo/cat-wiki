import React from 'react'

import Search from './Search'
import logo from '../../assets/CatwikiLogoWhite.svg'
import heroImageSm from '../../assets/HeroImagesm.png'
import heroImageMd from '../../assets/HeroImagemd.png'
import heroImageLg from '../../assets/HeroImagelg.png'

const Hero = () => {
  return (
    <div className='w-full relative text-white'>
      <img src={heroImageSm} alt='hero image' className='w-full h-auto md:hidden object-cover rounded-t-[2rem]' />
      <img src={heroImageMd} alt='hero image' className='w-full h-auto hidden md:block lg:hidden object-cover rounded-t-[3rem]' />
      <img src={heroImageLg} alt='hero image' className='w-full h-auto hidden lg:block object-cover rounded-t-[3rem]' />
      <div className='absolute top-8 left-4 right-[50%] md:top-12 md:left-12 lg:left-16 lg:top-16 flex flex-col'>
        <div className='w-full md:w-[400px]'>
          <img src={logo} alt='logo' className='w-24 md:w-[200px] lg:w-[330px] h-auto' />
          <p className='font-medium text-sm md:text-lg lg:text-2xl pt-4'>Get to know more about your cat breed</p>
        </div>
        <Search />
      </div>
    </div>
  )
}

export default Hero