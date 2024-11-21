import React from 'react';
import { Facebook, Twitter, Instagram, Youtube } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="text-gray-300 bg-gray-900">
      <div className="container px-4 py-16 mx-auto">
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-4">
          <div>
            <h3 className="mb-4 text-xl font-bold text-white">TravelPlanner</h3>
            <p className="mb-4">Making travel planning simple and enjoyable. Your journey begins here.</p>
            <div className="flex gap-4">
              <a href="#" className="transition-colors hover:text-blue-400"><Facebook className="w-5 h-5" /></a>
              <a href="#" className="transition-colors hover:text-blue-400"><Twitter className="w-5 h-5" /></a>
              <a href="#" className="transition-colors hover:text-blue-400"><Instagram className="w-5 h-5" /></a>
              <a href="#" className="transition-colors hover:text-blue-400"><Youtube className="w-5 h-5" /></a>
            </div>
          </div>
          
          <div>
            <h4 className="mb-4 text-lg font-semibold text-white">Quick Links</h4>
            <ul className="space-y-2">
              <li><a href="#" className="transition-colors hover:text-blue-400">About Us</a></li>
              <li><a href="#" className="transition-colors hover:text-blue-400">Destinations</a></li>
              <li><a href="#" className="transition-colors hover:text-blue-400">Travel Guides</a></li>
              <li><a href="#" className="transition-colors hover:text-blue-400">Contact</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="mb-4 text-lg font-semibold text-white">Resources</h4>
            <ul className="space-y-2">
              <li><a href="#" className="transition-colors hover:text-blue-400">Travel Blog</a></li>
              <li><a href="#" className="transition-colors hover:text-blue-400">Trip Planning</a></li>
              <li><a href="#" className="transition-colors hover:text-blue-400">Travel Insurance</a></li>
              <li><a href="#" className="transition-colors hover:text-blue-400">FAQs</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="mb-4 text-lg font-semibold text-white">Contact Us</h4>
            <ul className="space-y-2">
              <li>1234 Travel Street</li>
              <li>Adventure City, AC 12345</li>
              <li>contact@travelplanner.com</li>
              <li>+1 (555) 123-4567</li>
            </ul>
          </div>
        </div>
        
        <div className="pt-8 mt-12 text-center border-t border-gray-800">
          <p>&copy; {new Date().getFullYear()} TravelPlanner. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}