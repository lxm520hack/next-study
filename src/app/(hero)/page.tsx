import React from 'react'
import Image from 'next/image'
import { Hero } from '@/components/hero'
import { Metadata } from 'next'

const homeSrc = '/img/home.png'

export const metadata: Metadata = {  // 网页标题名字
  title: 'Home',
}

export default function Page() {
  return (
    <Hero imgUrl={homeSrc} altTxt={'Home'} content={'Welcome to our website'} />

    // <div className='h-screen relative'>
    //   <div className='absolute inset-0 -z-10'>
    //     <Image src="/img/home.png" alt='Home Image' fill style={{objectFit: 'cover'}}/>
    //     <div className='absolute inset-0 bg-gradient-to-r from-gray-800'></div>
    //   </div>
    //   <div className='flex justify-center pt-48'>
    //     <h1 className='text-white text-6xl'>Professional Cloud Hosting</h1>
    //   </div>
    // </div>
  )
}
