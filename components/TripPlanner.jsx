import React from 'react';
import { Calendar, MapPin, Clock, Users } from 'lucide-react';
import Link from 'next/link';

export default function TripPlanner() {
  return (
    <section className="py-20 bg-white">
      <div className="container px-4 mx-auto">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          <div>
            <h2 className="mb-6 text-4xl font-bold">Plan Your Perfect Journey</h2>
            <p className="mb-8 text-lg text-gray-600">
              Create your dream itinerary with our intelligent trip planner. Get personalized recommendations and real-time updates.
            </p>

            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="flex items-center justify-center flex-shrink-0 w-12 h-12 bg-blue-100 rounded-full">
                  <Calendar className="w-6 h-6 text-blue-600" />
                </div>
                <div>
                  <h3 className="mb-2 text-xl font-semibold">Smart Scheduling</h3>
                  <p className="text-gray-600">Optimize your daily activities with AI-powered scheduling that considers opening hours and travel time.</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="flex items-center justify-center flex-shrink-0 w-12 h-12 bg-blue-100 rounded-full">
                  <MapPin className="w-6 h-6 text-blue-600" />
                </div>
                <div>
                  <h3 className="mb-2 text-xl font-semibold">Route Optimization</h3>
                  <p className="text-gray-600">Get the most efficient routes between destinations, saving you time and energy.</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="flex items-center justify-center flex-shrink-0 w-12 h-12 bg-blue-100 rounded-full">
                  <Users className="w-6 h-6 text-blue-600" />
                </div>
                <div>
                  <h3 className="mb-2 text-xl font-semibold">Group Planning</h3>
                  <p className="text-gray-600">Collaborate with travel companions in real-time to create the perfect group itinerary.</p>
                </div>
              </div>
            </div>

            <Link href="/CreateTrips" className="inline-flex items-center gap-2 px-8 py-3 mt-8 font-semibold text-white transition-colors bg-blue-600 rounded-lg hover:bg-blue-700">
              Start Planning <Clock className="w-5 h-5" />
            </Link>
          </div>

          <div className="relative">
            <img 
              src="https://images.unsplash.com/photo-1469474968028-56623f02e42e?auto=format&fit=crop&q=80" 
              alt="Scenic Travel Planning" 
              className="shadow-2xl rounded-2xl"
            />
            <div className="absolute p-6 bg-white shadow-xl -bottom-6 -left-6 rounded-xl">
              <div className="flex items-center gap-4">
                <div className="flex items-center justify-center w-12 h-12 bg-green-100 rounded-full">
                  <Users className="w-6 h-6 text-green-600" />
                </div>
                <div>
                  <p className="text-sm text-gray-600">Active Planners</p>
                  <p className="text-xl font-bold">2M+</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}