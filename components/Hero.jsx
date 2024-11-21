import React from 'react';
import { ArrowRight } from 'lucide-react';
import Link from 'next/link';

export default function Hero() {
  return (
    <header className="relative h-screen">
      <div className="absolute inset-0">
        <img
          src="https://images.unsplash.com/photo-1488085061387-422e29b40080?auto=format&fit=crop&q=80"
          alt="Scenic Travel Destination"
          className="object-cover w-full h-full"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/70 to-black/50"></div>
      </div>

      <div className="relative flex items-center h-full">
        <div className="container px-4 mx-auto">
          <div className="max-w-2xl">
            <span className="block mb-4 font-semibold text-blue-400">Plan Your Dream Journey</span>
            <h1 className="mb-6 text-5xl font-bold text-white md:text-6xl">Discover the World with Confidence</h1>
            <p className="mb-8 text-xl text-gray-200">Create personalized itineraries, get local insights, and explore hidden gems with our AI-powered travel companion.</p>
            <div className="flex gap-4">
              <Link href="/CreateTrip" className="flex items-center gap-2 px-8 py-3 text-lg font-semibold text-white transition-all bg-blue-600 rounded-lg hover:bg-blue-700">
                Start Planning <ArrowRight className="w-5 h-5" />
              </Link>
              <Link href="/Trips" className="px-8 py-3 text-lg font-semibold text-white transition-all border-2 border-white rounded-lg hover:bg-white hover:text-gray-900">
                Learn More
              </Link>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}