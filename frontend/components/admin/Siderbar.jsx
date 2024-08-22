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
import Link from 'next/link';

const AdminSiderbar = () => {

  const pathname = usePathname()

  const isActive = (path) => pathname === path;
  
  return (
    <div className='bg-[#f5f4fc] h-screen py-20 px-10 rounded-lg'>
        <div>
            <div className='font-bold text-[20px] text-[#7152F3]'>OnboardingPro</div>
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
  )
}

export default AdminSiderbar