import React, { useState, useEffect } from 'react'
import axios from 'axios'

import BreedCard from './BreedCard'

const Top = () => {
  const [topBreeds, setTopBreeds] = useState([]);

  const getBreeds = async () => {
    const url = import.meta.env.VITE_SERVER_URL + 'cat/top';
    try {
      let { data } = await axios.get(url);
      setTopBreeds(data.data);
    } catch (e) {
      console.error(e);
      navigate('/error');
    }
  }

  useEffect(() => {
    getBreeds();
  }, [])

  return (
    <div className='bg-white text-gray-900 w-full p-4 xl:w-[1248px] xl:px-0 mx-auto pt-20 md:pt-28 min-h-[calc(100vh-112px)] md:min-h-[calc(100vh-96px)]'>
      <h2 className=' font-bold text-4xl'>Top 10 most searched breeds</h2>
      {topBreeds.map((breed) => <BreedCard key={breed.top} top={breed.top} name={breed.name} description={breed.description} id={breed.id} image={breed.image} />)}
    </div>
  )
}

export default Top