import React from 'react'
import { Link } from 'react-router-dom'

const BreedCard = ({ id, top, name, description, image }) => {
  return (
    <div className='py-4 md:py-8 flex flex-col md:flex-row items-center md:items-start gap-4 md:gap-8 xl:gap-16'>
      <div className=' w-full h-[280px] md:w-[170px] md:h-[170px]'>
        <img src={image} className='w-full h-full object-cover object-top rounded-lg' alt={name} />
      </div>
      <div className='h-[280px] md:h-[170px] flex-1 flex-col text-ellipsis'>
        <Link to={'/breed/' + id}>
          <h3 className='font-semibold text-2xl md:text-4xl'>{top}. {name}</h3>
        </Link>
        <p className='pt-4 font-medium text-sm md:text-lg'>{description}</p>
      </div>
    </div>
  )
}

export default BreedCard