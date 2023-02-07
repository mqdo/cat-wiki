import React from 'react'

import Points from './Points'

const Details = ({ details }) => {  
  return (
    <div className='w-full h-full md:px-4 xl:px-16 flex flex-col md:flex-row gap-4 md:gap-8 xl:gap-16'>
      <img src={details?.refImage} alt={details?.name} className='w-full md:w-[370px] md:h-[370px] object-cover rounded-3xl' />
      <div className='flex flex-col gap-4 md:gap-6'>
        <h2 className='text-lg md:text-4xl font-bold'>{details?.name}</h2>
        <p className='max-w-[600px] font-medium'>{details?.description}</p>
        <div className=' w-full flex flex-col md:flex-row md:justify-between gap-2 md:gap-4'>
          <h3 className='md:w-[150px] font-bold'>Temperament: </h3>
          <span className='flex-1 font-medium'>{details?.temperament}</span>
        </div>
        <div className=' w-full flex flex-col md:flex-row md:justify-between gap-2 md:gap-4'>
          <h3 className='md:w-[150px] font-bold'>Origin: </h3>
          <span className='flex-1 font-medium'>{details?.origin}</span>
        </div>
        <div className=' w-full flex flex-col md:flex-row md:justify-between gap-2 md:gap-4'>
          <h3 className='md:w-[150px] font-bold'>Life Span: </h3>
          <span className='flex-1 font-medium'>{details?.life_span}</span>
        </div>
        <div className=' w-full flex flex-col md:flex-row md:justify-between md:items-center gap-2 md:gap-4'>
          <h3 className='md:w-[150px] font-bold'>Adaptability: </h3>
          <Points num={details?.adaptability} />
        </div>
        <div className=' w-full flex flex-col md:flex-row md:justify-between md:items-center gap-2 md:gap-4'>
          <h3 className='md:w-[150px] font-bold'>Affection level: </h3>
          <Points num={details?.affection_level} />
        </div>
        <div className=' w-full flex flex-col md:flex-row md:justify-between md:items-center gap-2 md:gap-4'>
          <h3 className='md:w-[150px] font-bold'>Child Friendly: </h3>
          <Points num={details?.child_friendly} />
        </div>
        <div className=' w-full flex flex-col md:flex-row md:justify-between md:items-center gap-2 md:gap-4'>
          <h3 className='md:w-[150px] font-bold'>Grooming: </h3>
          <Points num={details?.grooming} />
        </div>
        <div className=' w-full flex flex-col md:flex-row md:justify-between md:items-center gap-2 md:gap-4'>
          <h3 className='md:w-[150px] font-bold'>Intelligence: </h3>
          <Points num={details?.intelligence} />
        </div>
        <div className=' w-full flex flex-col md:flex-row md:justify-between md:items-center gap-2 md:gap-4'>
          <h3 className='md:w-[150px] font-bold'>Health issues: </h3>
          <Points num={details?.health_issues} />
        </div>
        <div className=' w-full flex flex-col md:flex-row md:justify-between md:items-center gap-2 md:gap-4'>
          <h3 className='md:w-[150px] font-bold'>Social needs: </h3>
          <Points num={details?.social_needs} />
        </div>
        <div className=' w-full flex flex-col md:flex-row md:justify-between md:items-center gap-2 md:gap-4'>
          <h3 className='md:w-[150px] font-bold'>Stranger friendly: </h3>
          <Points num={details?.stranger_friendly} />
        </div>
      </div>
    </div>
  )
}

export default Details