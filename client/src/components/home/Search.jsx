import React, { useState, useEffect } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import axios from 'axios'
import Popup from 'reactjs-popup'

import { BiSearch } from 'react-icons/bi'
import debounce from '../../utils/debounce'

const Search = () => {
  const [breeds, setBreeds] = useState([]);
  const [openPopup, setOpenPopup] = useState(false);

  const navigate = useNavigate();

  const handleClickOutside = (e) => {
    if (e.target.className.includes('popup-overlay')) setOpenPopup(false);
  };

  const closePopup = () => setOpenPopup(false);

  const getBreeds = async (query) => {
    if (query === '') {
      setBreeds([]);
      return;
    };
    const url = import.meta.env.VITE_SERVER_URL + 'cat/search?q=' + decodeURI(query);
    try {
      let { data } = await axios.get(url);
      setBreeds(data.data);
    } catch (e) {
      console.error(e);
      navigate('/error');
    }
  }

  const handleChangeInput = (e) => {
    debounce(getBreeds(e.target.value), 1000)
  }

  useEffect(() => {
    window.addEventListener('scroll', closePopup);
    window.addEventListener('resize', closePopup);
    document.addEventListener('click', handleClickOutside);
    return () => {
      window.removeEventListener('scroll', closePopup);
      window.removeEventListener('resize', closePopup);
      document.removeEventListener('click', handleClickOutside);
    }
  }, [])

  return (
    <div className='absolute top-[120%]'>
      <div className='hidden md:block w-full md:w-[400px] relative text-gray-900'>
        <button className='absolute right-4 top-[50%] -translate-y-[50%]'>
          <BiSearch size={24} fill={'rgb(55 65 81)'} />
        </button>
        <input
          type='text'
          placeholder='Enter your breed'
          className='w-full font-medium py-2 md:py-4 pl-6 pr-10 outline-none border-none rounded-full placeholder-gray-700'
          autoComplete='false'
          onChange={handleChangeInput}
        />
        <div className={`w-full h-40 pl-6 pr-2 py-4 bg-white absolute top-[110%] rounded-3xl ${breeds.length === 0 ? 'hidden' : ''}`}>
          <div className='w-full h-full text-ellipsis overflow-y-auto flex flex-col gap-2 font-medium'>
            {breeds.map((breed) => (
              <Link to={'/breed/' + breed.id} key={breed.id}>
                <div className='w-full p-2 rounded-lg hover:bg-gray-100'>
                  {breed.name}
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
      <div className='block md:hidden'>
        <button className='w-28 h-8 px-3 bg-white text-gray-900 rounded-full flex items-center justify-between' onClick={() => setOpenPopup(true)}>
          <span className='font-medium text-sm'>Search</span>
          <BiSearch size={16} fill={'rgb(55 65 81)'} />
        </button>
        <Popup open={openPopup} closeOnDocumentClick={false} modal>
          <div className=' w-80 p-4 bg-white rounded-xl shadow-2xl'>
            <div className='flex justify-end pb-4 -mr-2'>
              <button className='text-5xl p-2 leading-[1.25rem] text-gray-900 hover:bg-gray-100 flex items-center justify-center rounded-lg' onClick={closePopup}>
                &times;
              </button>
            </div>
            <div className='w-full relative'>
              <button className='absolute right-6 top-3'>
                <BiSearch size={24} fill={'rgb(55 65 81)'} />
              </button>
              <input
                type='text'
                placeholder='Enter your breed'
                className='w-full font-medium py-2 md:py-4 pl-6 pr-10 outline-none border-2 border-gray-900 rounded-full placeholder-gray-700'
                autoComplete='false'
                onChange={handleChangeInput}
              />
            </div>
            <div className={`w-full pt-4 ${breeds.length === 0 ? 'h-4' : 'h-48'}`}>
              <div className='w-full h-full text-ellipsis overflow-y-auto flex flex-col gap-2 font-medium'>
                {breeds.map((breed) => (
                  <Link to={'/breed/' + breed.id} key={breed.id}>
                    <div className='w-full p-2 rounded-lg hover:bg-gray-100'>
                      {breed.name}
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </Popup>
      </div>
    </div >
  )
}

export default Search