import Link from "next/link";
import React from "react";

function Navbar() {
  return (
    <div className="flex items-center justify-between px-20 py-10">
      <Link href="/"><h1 className="text-4xl font-black tracking-tighter">Travel Planner ✈️</h1></Link>
      <div className="flex items-center gap-10">
        <Link href="/CreateTrip" className="px-5 py-2 text-lg font-medium transition-colors duration-300 rounded-full bg-gradient-to-r from-purple-300 via-amber-300 to-red-300 text-neutral-600 hover:text-black">Create Trip</Link>
        <Link href="/Trips" className="text-lg font-medium transition-colors duration-300 text-neutral-600 hover:text-black">Trips</Link>
        <Link href="/About" className="text-lg font-medium transition-colors duration-300 text-neutral-600 hover:text-black">About Us</Link>
        <Link href="/Contact" className="text-lg font-medium transition-colors duration-300 text-neutral-600 hover:text-black">Contact</Link>
      </div>
    </div>
  );
}

export default Navbar;