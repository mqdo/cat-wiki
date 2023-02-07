import React, { useState, useEffect } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import axios from 'axios'

import { BsArrowRight } from 'react-icons/bs'
import image2 from '../../assets/image 2.png'

const MostSearched = () => {
  const [topBreeds, setTopBreeds] = useState([]);

  const navigate = useNavigate();

  const getBreeds = async () => {
    const url = import.meta.env.VITE_SERVER_URL + 'cat/top';
    try {
      let { data } = await axios.get(url);
      setTopBreeds(data.data.slice(0, 4));
    } catch (e) {
      console.error(e);
      navigate('/error');
    }
  }

  useEffect(() => {
    getBreeds();
  }, [])

  return (
    <div className='w-full p-4 md:p-16 bg-[#E3E1DC] rounded-b-[2rem] md:rounded-b-[3rem] text-[hsla(25,73%,9%,1)] font-medium'>
      <div className='flex flex-row items-end justify-between'>
        <div className='flex flex-col gap-4 md:gap-8'>
          <div>
            <p className='text-sm md:text-lg pb-2 md:pb-4'>Most Searched Breeds</p>
            <div className='h-2 w-16 bg-[hsl(25,73%,9%,1)] rounded-full'></div>
          </div>
          <h2 className='font-bold text-lg md:text-5xl'>66+ Breeds For you to discover</h2>
        </div>
        <Link to='/top'>
          <p className='text-[hsla(25,71%,9%,0.6)] hover:text-[hsla(25,73%,9%,1)] uppercase text-sm md:text-lg flex items-center sm:gap-2'>
            <span>See more</span>
            <BsArrowRight />
          </p>
        </Link>
      </div>
      <div className='pt-8 grid grid-cols-2 lg:grid-cols-4 gap-3 md:gap-12'>
        {topBreeds.map((breed) => (
          <Link key={breed.id} to={'/breed/' + breed.id} className='mx-auto'>
            <div className='flex flex-col mx-auto gap-3 md:gap-5 justify-around'>
              <img src={breed.image || image2} className='w-[150px] h-[150px] md:w-[220px] md:h-[220px] object-cover rounded-3xl' alt={breed.id || 'placeholder'} />
              <p className='font-semibold text-sm md:text-lg'>
                {breed.name || 'Breed Name'}
              </p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  )
}

export default MostSearched