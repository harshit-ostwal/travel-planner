import React from 'react';
import { Send } from 'lucide-react';

export default function Newsletter() {
  return (
    <section className="py-24 bg-blue-600">
      <div className="container px-4 mx-auto">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="mb-4 text-4xl font-bold text-white">Get Travel Inspiration</h2>
          <p className="mb-8 text-lg text-blue-100">Subscribe to receive personalized travel recommendations and exclusive deals.</p>
          
          <div className="flex max-w-md gap-4 mx-auto">
            <input 
              type="email" 
              placeholder="Enter your email" 
              className="flex-1 px-6 py-3 text-gray-900 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
            <button className="flex items-center gap-2 px-6 py-3 font-semibold text-blue-600 transition-colors bg-white rounded-lg hover:bg-blue-50">
              Subscribe <Send className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}