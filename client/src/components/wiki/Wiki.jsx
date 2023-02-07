import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { useParams } from 'react-router-dom'

import Details from './Details'
import Photos from './Photos'

const Wiki = () => {
  const [info, setInfo] = useState({});

  const { id } = useParams();

  const getInfo = async () => {
    const url = import.meta.env.VITE_SERVER_URL + 'cat/breed/' + id;
    try {
      let { data } = await axios.get(url);
      setInfo(data.data);
      // console.log(data.data.images);
    } catch (e) {
      console.error(e);
    }
  }

  useEffect(() => {
    getInfo();
  }, [])

  return (
    <div className='bg-white text-gray-900 w-full p-4 xl:w-[1248px] xl:px-0 mx-auto pt-16 md:pt-24 min-h-[calc(100vh-112px)] md:min-h-[calc(100vh-96px)]'>
      <Details details={info.details} />
      <Photos photos={info.images} />
    </div>
  )
}

export default Wiki