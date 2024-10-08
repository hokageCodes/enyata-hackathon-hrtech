import React from 'react'
import { MdOutlineDarkMode } from "react-icons/md";
import { GiHamburgerMenu } from 'react-icons/gi'

const Header = ({ isOpen, handleNav }) => {

  const getTimeOfDay = () => {
    return new Date().getHours() < 12 ? 
    "Good morning!" : new Date().getHours() < 18 ? 
    "Good afternoon!" : "Good evening!";
};
  
  return (
    <div className='shadow-md h-[4rem] bg-[#fdfdfd]'>
      <div className='flex justify-between items-center py-2 px-4'>
        <div>
          <h1 className='font-semibold'>Hello Admin!</h1>
          <small className='text-gray-500'>{getTimeOfDay()}</small>
        </div>

        <div>
          <div className='flex cursor-pointer'>
              <MdOutlineDarkMode className='w-[30px] h-[40px] m-1' />
              {!isOpen && (
                <GiHamburgerMenu onClick={handleNav} className='duration-300 block md:hidden w-[30px] h-[40px] m-1 text-[#7152F3]' aria-hidden="true" />
              )}
          </div>
          </div>
      </div>
    </div>
  )
}

export default Header