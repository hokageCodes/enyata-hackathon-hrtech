"use client"

import React, { useState } from 'react'
import { 
  MdOutlineDashboard,
  MdOutlinePeopleAlt,
  MdOutlineSettings,
  MdLogout
 } from 'react-icons/md'
 import { GoOrganization } from "react-icons/go";
import { FaXmark } from "react-icons/fa6";
import { usePathname } from 'next/navigation';
import Link from 'next/link';
import Logo from '@/assets/svgs/logo.svg'
import Image from 'next/image';

const HrSiderbar = ({ isOpen, handleNav }) => {

  const pathname = usePathname()

  const isActive = (path) => pathname === path;
  
  return (
    <div>
      {/* Pc sidebar */}
      <div className='hidden lg:block bg-[#f5f4fc] h-screen py-20 px-10 rounded-lg'>
          <div className='flex items-center gap-2 font-bold text-[20px] text-[#7152F3]'>
              <Image
                src={Logo}
                alt="Company Logo"
                width={32}
                height={32}
              />
              <h1>OnboardingPro</h1>
          </div>

        <div className='NavLinks pt-20 space-y-10 '>
          <div className={isActive('/admin') ? 'active text-[#7152F3] bg-[#e5e2fc] h-[40px] py-1.5 px-4 rounded-tr-lg rounded-br-lg border-l-2 border-[#7152F3] cursor-pointer' : ''}>
            <Link href='/admin' className='flex items-center gap-2 cursor-pointer'>
              <MdOutlineDashboard className='text-lg' />
              <h1>Dashboard</h1>
            </Link>
          </div>

          <div className={isActive('/admin/employees') ? 'active text-[#7152F3] bg-[#e5e2fc] h-[40px] py-1.5 px-4 rounded-tr-lg rounded-br-lg border-l-2 border-[#7152F3] cursor-pointer' : ''}>
            <Link href='/admin/employees' className='flex items-center gap-2 cursor-pointer'>
              <MdOutlinePeopleAlt className='text-lg' />
              <h1>All Employees</h1>
            </Link>
          </div>

          <div className={isActive('/admin/department') ? 'active text-[#7152F3] bg-[#e5e2fc] h-[40px] py-1.5 px-4 rounded-tr-lg rounded-br-lg border-l-2 border-[#7152F3] cursor-pointer' : ''}>
            <Link href='/admin/department' className='flex items-center gap-2 cursor-pointer'>
              <GoOrganization className='text-lg' />
              <h1>All Departments</h1>
            </Link>
          </div>

          <div className={isActive('/admin/setting') ? 'active text-[#7152F3] bg-[#e5e2fc] h-[40px] py-1.5 px-4 rounded-tr-lg rounded-br-lg border-l-2 border-[#7152F3] cursor-pointer' : ''}>
            <Link href='/admin/setting' className='flex items-center gap-2 cursor-pointer'>
              <MdOutlineSettings className='text-lg' />
              <h1>Settings</h1>
            </Link>
          </div>
        </div>

        <div className='pt-[8rem]'>
          <div className='flex items-center gap-2 cursor-pointer'>
            <MdLogout className='text-lg' />
            <h1>Logout</h1>
          </div>
        </div>
      </div>

        {/* mobile sidebar */}  
        <div onClick={handleNav} className={` ${
              isOpen ?
              "fixed left-0 top-0 z-20 w-[80%] sm:w-[50%] h-full p-7 sm:p-10 ease-in duration-700 lg:hidden bg-[#f5f4fc] text-black   "
              :
              "fixed left-[-100%] z-20 top-0 w-[80%] p-10 ease-in duration-700"
              }
              block lg:hidden text-sm mb-10`}>

          <div className='flex justify-between items-center'>
              <div className='flex items-center gap-2 font-bold text-[16px] text-[#7152F3]'>
                <Image
                  src={Logo}
                  alt="Company Logo"
                  width={32}
                  height={32}
                />
                <h1>OnboardingPro</h1>
              </div>
              <div>
                <FaXmark onClick={handleNav} className='cursor-pointer lg:hidden text-[#7152F3] w-[30px] h-[25px]' />
              </div> 
          </div>

          <div className='NavLinks pt-20 space-y-10 '>
            <div className={isActive('/admin') ? 'active text-[#7152F3] bg-[#e5e2fc] h-[40px] py-1.5 px-4 rounded-tr-lg rounded-br-lg border-l-2 border-[#7152F3] cursor-pointer' : ''}>
              <Link href='/admin' className='flex items-center gap-2 cursor-pointer'>
                <MdOutlineDashboard className='text-lg' />
                <h1>Dashboard</h1>
              </Link>
            </div>

            <div className={isActive('/admin/employees') ? 'active text-[#7152F3] bg-[#e5e2fc] h-[40px] py-1.5 px-4 rounded-tr-lg rounded-br-lg border-l-2 border-[#7152F3] cursor-pointer' : ''}>
              <Link href='/admin/employees' className='flex items-center gap-2 cursor-pointer'>
                <MdOutlinePeopleAlt className='text-lg' />
                <h1>All Employees</h1>
              </Link>
            </div>

            <div className={isActive('/admin/department') ? 'active text-[#7152F3] bg-[#e5e2fc] h-[40px] py-1.5 px-4 rounded-tr-lg rounded-br-lg border-l-2 border-[#7152F3] cursor-pointer' : ''}>
              <Link href='/admin/department' className='flex items-center gap-2 cursor-pointer'>
                <GoOrganization className='text-lg' />
                <h1>All Departments</h1>
              </Link>
            </div>

            <div className={isActive('/admin/setting') ? 'active text-[#7152F3] bg-[#e5e2fc] h-[40px] py-1.5 px-4 rounded-tr-lg rounded-br-lg border-l-2 border-[#7152F3] cursor-pointer' : ''}>
              <Link href='/admin/setting' className='flex items-center gap-2 cursor-pointer'>
                <MdOutlineSettings className='text-lg' />
                <h1>Settings</h1>
              </Link>
            </div>
          </div>

          <div className='pt-[8rem] sm:pt-[12rem]'>
            <div className='flex items-center gap-2 cursor-pointer'>
              <MdLogout className='text-lg' />
              <h1>Logout</h1>
            </div>
          </div>
        </div>

      
    </div>
  )
}

export default HrSiderbar