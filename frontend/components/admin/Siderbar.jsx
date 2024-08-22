"use client"

import React from 'react'
import { 
  MdOutlineDashboard,
  MdOutlinePeopleAlt,
  MdOutlineSettings,
  MdLogout
 } from 'react-icons/md'
 import { GoOrganization } from "react-icons/go";
import { usePathname } from 'next/navigation';

const AdminSiderbar = () => {

  const pathname = usePathname()

  const isActive = (path) => pathname === path;
  
  return (
    <div className='bg-[#f5f4fc] h-screen py-20 px-10 rounded-lg'>
        <div>
            <div className='font-bold text-[20px] text-[#7152F3]'>OnboardingPro</div>
        </div>

        <div className='NavLinks pt-20 space-y-10 '>
          <div className={isActive ? 'active text-[#7152F3] bg-[#e5e2fc] h-[40px] py-1.5 px-4 rounded-tr-lg rounded-br-lg border-l-2 border-[#7152F3] cursor-pointer' : ''}>
            <div className='flex items-center gap-2 cursor-pointer'>
              <MdOutlineDashboard className='text-lg' />
              <h1>Dashboard</h1>
            </div>
          </div>

          <div>
            <div className='flex items-center gap-2 cursor-pointer'>
              <MdOutlinePeopleAlt className='text-lg' />
              <h1>All Employees</h1>
            </div>
          </div>

          <div className='flex items-center gap-2 cursor-pointer'>
            <GoOrganization className='text-lg' />
            <h1>All Departments</h1>
          </div>

          <div className='flex items-center gap-2 cursor-pointer'>
            <MdOutlineSettings className='text-lg' />
            <h1>Settings</h1>
          </div>
        </div>

        <div className='pt-[8rem]'>
          <div className='flex items-center gap-2 cursor-pointer'>
            <MdLogout className='text-lg' />
            <h1>Logout</h1>
          </div>
        </div>
    </div>
  )
}

export default AdminSiderbar