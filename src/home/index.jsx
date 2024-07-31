import Background from '@/components/custum/background'
import Header from '@/components/custum/Header'
import Testimonial from '@/components/custum/testimonial'
import { UserButton } from '@clerk/clerk-react'
import React from 'react'

const Home = () => {
  return (
    <div>
        <Header/>
        <Background/>
      <Testimonial/>
    </div>
  )
}

export default Home
