import Footer from '@/components/landing/footer/Footer'
import Navbar from '@/components/landing/navbar/Navbar'
import MultiStepForm from '@/components/landing/register/RegisterCompany'
import React from 'react'

export default function page() {
  return (
    <div>
        <Navbar />
        <main>
            <MultiStepForm />
        </main>
        <Footer />
    </div>
  )
}
