import Destinations from '@/components/Destinations'
import EmergencyServices from '@/components/Emergency'
import Hero from '@/components/Hero'
import Newsletter from '@/components/NewsLetter'
import TripPlanner from '@/components/TripPlanner'
import { HeartPulseIcon } from 'lucide-react'
import React from 'react'

function page() {
  return (
    <>
      <Hero />
      <EmergencyServices />
      <TripPlanner />
      <Destinations />
      <Newsletter />
    </>
  )
}

export default page