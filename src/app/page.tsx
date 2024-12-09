"use client"
import CategoriesImages from '@/components/CategoriesImages'
import HeroImage from '@/components/HeroImage'
import HeroSection from '@/components/HeroSection'
import OurServices from '@/components/OurServices'
import ProductList from '@/components/ProductList'
import React from 'react'

function page() {
  return (
    <div className='px-10 md:px-5 sm:px-5 xs:px-5'>
      <HeroSection />
      <ProductList />
      <HeroImage />
      <CategoriesImages />
      <OurServices />
    </div>
  )
}

export default page
