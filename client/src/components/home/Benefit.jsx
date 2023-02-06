import React from 'react'

import image1 from '../../assets/image 1.png'
import image2 from '../../assets/image 2.png'
import image3 from '../../assets/image 3.png'

const Benefit = () => {
  return (
    <div className='w-full flex flex-col md:flex-row items-center py-8 md:p-16'>
      <div className='flex flex-col gap-8 md:gap-16 flex-1'>
        <div className='h-2 w-16 bg-gray-900 rounded-full'></div>
        <h2 className='font-bold text-4xl md:text-5xl'>Why should you have a cat?</h2>
        <p className='text-lg font-medium'>Having a cat around you can actually trigger the release of calming chemicals in your body which lower your stress and anxiety levees</p>
      </div>
      <div className='pt-4 md:px-12 flex gap-4 flex-1'>
        <div>
          <img src={image2} alt="image 2" />
          <img src={image1} className='pt-4 float-right' alt="image 1" />
        </div>
        <div>
          <img src={image3} alt="image 3" />
        </div>
      </div>
    </div>
  )
}

export default Benefit