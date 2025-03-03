import { Hero } from '@/components/hero'
import { Metadata } from 'next'
import React from 'react'

const reliability = '/img/Reliability.png'

export const metadata: Metadata = {
  title: 'Reliability',
}
export default function Page() {
  return (
    <Hero imgUrl={reliability} altTxt={'Reliability'} content={'Reliability!!!'} />
  )
}
