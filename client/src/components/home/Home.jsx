import React from 'react'

import Hero from './Hero'
import MostSearched from './MostSearched'
import Benefit from './Benefit'

const Home = () => {
  return (
    <div className='bg-white text-gray-900 w-full p-4 xl:w-[1248px] xl:px-0 mx-auto pt-16 md:pt-24 min-h-[calc(100vh-112px)] md:min-h-[calc(100vh-96px)]'>
      <Hero />
      <MostSearched />
      <Benefit />
    </div>
  )
}

export default Home