import React from 'react'

const Points = ({ num }) => {
  const points = new Array(5).fill(null)

  return (
    <div className='w-full flex-1 flex gap-2'>
      {points.map((point, index) => (
        <div key={index} className={`w-[min(20%,60px)] h-3 rounded-full ${index < num ? 'bg-gray-700' : 'bg-gray-300'}`}></div>
      ))}
    </div>
  )
}

export default Points