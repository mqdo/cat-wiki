import React from 'react'

const Photos = ({ photos }) => {
  return (
    <div className='py-4 md:py-8 w-full flex flex-col gap-4 md:gap-8'>
      <h2 className='text-lg md:text-4xl font-bold'>Other photos</h2>
      <div className='w-full grid grid-cols-2 sm:grid-cols-4 place-items-center gap-4'>
        {photos.map((photo) => (
          <img key={photo?.id} src={photo?.url} alt={photo?.id} className='w-[150px] h-[150px] md:w-[220px] md:h-[220px] object-cover rounded-3xl' />
        ))}
      </div>
    </div>
  )
}

export default Photos