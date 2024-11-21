"use client"
import React, { useState } from 'react';
import { Menu, X, Globe } from 'lucide-react';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="sticky z-50 w-full bg-white shadow-sm">
      <div className="container px-4 mx-auto">
        <div className="flex items-center justify-between h-20">
          <div className="flex items-center gap-2">
            <Globe className="w-8 h-8 text-blue-600" />
            <span className="text-2xl font-bold text-gray-900">TravelPlanner</span>
          </div>

          {/* Desktop Navigation */}
          <div className="items-center hidden gap-8 md:flex">
            <a href="/" className="text-gray-700 transition-colors hover:text-blue-600">Home</a>
            <a href="/CreateTrip" className="text-gray-700 transition-colors hover:text-blue-600">Create Trip</a>
            <a href="/Trips" className="text-gray-700 transition-colors hover:text-blue-600">My Trips</a>
            <a href="/About" className="text-gray-700 transition-colors hover:text-blue-600">About</a>
            <a href="/Contact" className="text-gray-700 transition-colors hover:text-blue-600">Contact</a>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="py-4 md:hidden">
            <div className="flex flex-col gap-4">
              <a href="/" className="text-gray-700 transition-colors hover:text-blue-600">Home</a>
              <a href="/CreateTrip" className="text-gray-700 transition-colors hover:text-blue-600">Create Trip</a>
              <a href="/Trips" className="text-gray-700 transition-colors hover:text-blue-600">My Trips</a>
              <a href="/About" className="text-gray-700 transition-colors hover:text-blue-600">About</a>
              <a href="/Contact" className="text-gray-700 transition-colors hover:text-blue-600">Contact</a>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}