"use client"

import React, { useState } from 'react'
import Header from '@/components/hr/Header'
import HrSiderbar from '@/components/hr/Siderbar'

const HrDashboardLayout = ({ children }) => {

  const [navOpen, setNavOpen] = useState(false)

    const handleNav = () => {
        setNavOpen(!navOpen)
    }
  
  return (
    <div className="flex h-full lg:max-h-screen flex-col md:flex-row md:overflow-hidden">
        <div className="w-full flex-none md:w-64">
            <HrSiderbar isOpen={navOpen} handleNav={handleNav} />
        </div>
        <div className="flex-grow md:overflow-y-auto">
            <div className='sticky top-0'>
                <Header isOpen={navOpen} handleNav={handleNav} />
            </div>
                <div className="p-4">{ children }</div>
        </div>
    </div>
  )
}

export default HrDashboardLayout