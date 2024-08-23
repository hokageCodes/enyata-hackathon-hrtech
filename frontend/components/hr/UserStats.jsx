import React from 'react'
import { IoIosPeople } from "react-icons/io";

const UserStats = () => {
  return (
    <div className='lg:grid lg:grid-cols-2 lg:gap-5 space-y-5 lg:space-y-0'>
      <div className='border border-[#e5e2fc] lg:w-[16rem] h-[130px] rounded-lg  '>
        <div className=' flex justify-between mx-6  items-center gap-3 my-6'>
          <div className='w-[30px] text-center bg-[#e5e2fc] rounded-md'>
            <IoIosPeople className='w-[25px] h-[30px] text-[#7152F3] mx-0.5' />
          </div>
          <h1 className='text-md text-[#7152F3]'>Total Employee</h1>
        </div>

        <div className='flex justify-between items-center mx-6'>
          <small className='text-green-500 bg-green-200 w-9 text-center rounded-sm'>+19%</small>
          <p className='font-bold text-[20px]'>500</p>
        </div>
      </div>

      <div className='border border-[#e5e2fc] lg:w-[16rem] h-[130px] rounded-lg  '>
        <div className=' flex justify-between mx-6 items-center gap-1 my-6'>
          <div className='w-[30px] text-center bg-[#e5e2fc] rounded-md'>
            <IoIosPeople className='w-[25px] h-[30px] text-[#7152F3] mx-0.5' />
          </div>
          <h1 className='text-md text-[#7152F3]'>Total Employee</h1>
        </div>

        <div className='flex justify-between items-center mx-6'>
          <small className='text-green-500 bg-green-200 w-9 text-center rounded-sm'>+19%</small>
          <p className='font-bold text-[20px]'>500</p>
        </div>
      </div>

      <div className='border border-[#e5e2fc] lg:w-[16rem] h-[130px] rounded-lg  '>
        <div className=' flex justify-between mx-6 items-center gap-1 my-6'>
          <div className='w-[30px] text-center bg-[#e5e2fc] rounded-md'>
            <IoIosPeople className='w-[25px] h-[30px] text-[#7152F3] mx-0.5' />
          </div>
          <h1 className='text-md text-[#7152F3]'>Total Employee</h1>
        </div>

        <div className='flex justify-between items-center mx-6'>
          <small className='text-green-500 bg-green-200 w-9 text-center rounded-sm'>+19%</small>
          <p className='font-bold text-[20px]'>500</p>
        </div>
      </div>

      <div className='border border-[#e5e2fc] lg:w-[16rem] h-[130px] rounded-lg  '>
        <div className=' flex justify-between mx-6 items-center gap-1 my-6'>
          <div className='w-[30px] text-center bg-[#e5e2fc] rounded-md'>
            <IoIosPeople className='w-[25px] h-[30px] text-[#7152F3] mx-0.5' />
          </div>
          <h1 className='text-md text-[#7152F3]'>Total Employee</h1>
        </div>

        <div className='flex justify-between items-center mx-6'>
          <small className='text-red-500 bg-red-200 w-9 text-center rounded-sm'>-9%</small>
          <p className='font-bold text-[20px]'>500</p>
        </div>
      </div>
    </div>
  )
}

export default UserStats