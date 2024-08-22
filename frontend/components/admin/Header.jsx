import React from 'react'
import { MdOutlineDarkMode } from "react-icons/md";

const Header = () => {

  const getTimeOfDay = () => {
    return new Date().getHours() < 12 ? 
    "Good morning!" : new Date().getHours() < 18 ? 
    "Good afternoon!" : "Good evening!";
};
  
  return (
    <div className='shadow-md h-[4rem]'>
      <div className='flex justify-between items-center py-2 px-4'>
        <div>
          <h1 className='font-semibold'>Hello Admin!</h1>
          <small className='text-gray-500'>{getTimeOfDay()}</small>
        </div>

        <div>
          <MdOutlineDarkMode className='w-[30px] h-[40px]' />
        </div>
      </div>
    </div>
  )
}

export default Header