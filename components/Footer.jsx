import Link from 'next/link';
import React from 'react'

function Footer() {

  const year = new Date().getFullYear();

  return (
    <div className="flex w-full items-center gap-20 flex-col p-20">
      <div className="border-b border w-5/6 border-neutral-200"></div>

      <div className="flex items-center w-full justify-around">
        <div className="flex flex-col gap-4">
          <Link href="/"><h1 className="text-4xl font-black tracking-tighter">Travel Planner ✈️</h1></Link>
          <p className="text-xl max-w-xl">Turn your next trip into a hassle-free experience with Travel Planner AI.</p>
          <p className="text-neutral-500 font-mono">© {year} Trip Planner AI. All rights reserved</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-20 text-lg">
          <div className="flex flex-col gap-4">
            <h1 className="font-semibold">Legal</h1>
            <p>Terms & Conditions</p>
            <p>Privacy Policy</p>
          </div>
          <div className="flex flex-col gap-4">
            <h1 className="font-semibold">Support</h1>
            <p>Contact</p>
            <p>Medical Report</p>
          </div>
          <div className="flex flex-col gap-4">
            <h1 className="font-semibold">Itineraries</h1>
            <p>Hot Trips</p>
            <p>Find Distance</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Footer