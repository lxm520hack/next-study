import { Hero } from '@/components/hero'
import { Metadata } from 'next'
import React from 'react'

const performance = '/img/Performance.png'

export const metadata: Metadata = {
  title: 'Performance',
}
export default function Page() {
  return (
    <Hero imgUrl={performance} altTxt={'Performance'} content={'Performance!!!'} />
  )
}
