import { Hero } from '@/components/hero'
import { Metadata } from 'next'
import React from 'react'

const scale = '/img/Scale.png'

export const metadata: Metadata = {
  title: 'Scale',
}
export default function Page() {
  return (
    <Hero imgUrl={scale} altTxt={'Scale'} content={'Scale'} />
  )
}
