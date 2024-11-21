// "use client"
// import { Button } from "@/components/ui/button"
// import { Input } from "@/components/ui/input"
// import { Label } from "@/components/ui/label"
// import { useRouter } from "next/navigation"

// function page() {

//     const router = useRouter();

//     const handleSubmit = (e) => {

//         e.preventDefault();
//         router.replace("/CreateTrip/Otty")
//     }

//     return (
//         <div className="flex items-center justify-center w-full">
//             <div className="flex flex-col items-center justify-center w-1/2 h-full gap-20">
//                 <div className="flex flex-col items-center gap-2">
//                     <h1 className="text-6xl font-bold tracking-tighter">Create Trip</h1>
//                     <p className="text-lg">Turn your next trip into a hassle-free experience with Travel Planner AI.</p>
//                 </div>
//                 <form onSubmit={handleSubmit} className="flex flex-col w-full gap-6">
//                     <div className="flex flex-col w-full gap-4">
//                         <Label>Current Location</Label>
//                         <Input placeholder={"John Doe"} type="text" />
//                     </div>
//                     <div className="flex flex-col w-full gap-4">
//                         <Label>Destination</Label>
//                         <Input placeholder={"John Doe"} type="text" />
//                     </div>
//                     <div className="flex flex-col w-full gap-4">
//                         <Label>Budget</Label>
//                         <Input placeholder={"John Doe"} type="text" />
//                     </div>
//                     <Button>Generate Trip</Button>
//                 </form>
//             </div>
//         </div>
//     )
// }

// export default page
"use client"
import React, { useState } from 'react';
import { Calendar, MapPin, Users, Clock } from 'lucide-react';

export default function CreateTrip() {
  const [step, setStep] = useState(1);

  return (
    <div className="min-h-screen pt-20 bg-gray-50">
      <div className="container px-4 py-16 mx-auto">
        <div className="max-w-3xl mx-auto">
          <div className="mb-12 text-center">
            <h1 className="mb-4 text-4xl font-bold">Create Your Trip</h1>
            <p className="text-gray-600">Plan your perfect journey in a few simple steps</p>
          </div>

          {/* Progress Steps */}
          <div className="relative flex justify-between mb-12">
            <div className="absolute left-0 right-0 h-1 -translate-y-1/2 bg-gray-200 top-1/2"></div>
            {[1, 2, 3].map((number) => (
              <div key={number} className="relative z-10">
                <div className={`w-10 h-10 rounded-full flex items-center justify-center ${
                  step >= number ? 'bg-blue-600 text-white' : 'bg-gray-200 text-gray-600'
                }`}>
                  {number}
                </div>
                <div className="mt-2 text-sm text-gray-600">
                  {number === 1 ? 'Basic Info' : number === 2 ? 'Destinations' : 'Activities'}
                </div>
              </div>
            ))}
          </div>

          {/* Step 1: Basic Information */}
          {step === 1 && (
            <div className="p-8 bg-white shadow-lg rounded-xl">
              <h2 className="mb-6 text-2xl font-bold">Trip Details</h2>
              <div className="space-y-6">
                <div>
                  <label className="block mb-2 text-gray-700">Trip Name</label>
                  <input 
                    type="text"
                    placeholder="Summer Adventure 2024"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-400 focus:border-transparent"
                  />
                </div>
                <div className="grid gap-6 md:grid-cols-2">
                  <div>
                    <label className="block mb-2 text-gray-700">Start Date</label>
                    <div className="relative">
                      <input 
                        type="date"
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-400 focus:border-transparent"
                      />
                      <Calendar className="absolute text-gray-400 -translate-y-1/2 pointer-events-none right-4 top-1/2" />
                    </div>
                  </div>
                  <div>
                    <label className="block mb-2 text-gray-700">End Date</label>
                    <div className="relative">
                      <input 
                        type="date"
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-400 focus:border-transparent"
                      />
                      <Calendar className="absolute text-gray-400 -translate-y-1/2 pointer-events-none right-4 top-1/2" />
                    </div>
                  </div>
                </div>
                <div>
                  <label className="block mb-2 text-gray-700">Number of Travelers</label>
                  <div className="relative">
                    <input 
                      type="number"
                      min="1"
                      placeholder="2"
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-400 focus:border-transparent"
                    />
                    <Users className="absolute text-gray-400 -translate-y-1/2 pointer-events-none right-4 top-1/2" />
                  </div>
                </div>
              </div>
              <div className="flex justify-end mt-8">
                <button 
                  onClick={() => setStep(2)}
                  className="px-8 py-3 font-semibold text-white transition-colors bg-blue-600 rounded-lg hover:bg-blue-700"
                >
                  Next Step
                </button>
              </div>
            </div>
          )}

          {/* Step 2: Destinations */}
          {step === 2 && (
            <div className="p-8 bg-white shadow-lg rounded-xl">
              <h2 className="mb-6 text-2xl font-bold">Choose Destinations</h2>
              <div className="space-y-6">
                <div>
                  <label className="block mb-2 text-gray-700">Primary Destination</label>
                  <div className="relative">
                    <input 
                      type="text"
                      placeholder="e.g., Paris, France"
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-400 focus:border-transparent"
                    />
                    <MapPin className="absolute text-gray-400 -translate-y-1/2 pointer-events-none right-4 top-1/2" />
                  </div>
                </div>
                <div>
                  <label className="block mb-2 text-gray-700">Additional Stops</label>
                  <div className="space-y-4">
                    {[1, 2].map((stop) => (
                      <div key={stop} className="relative">
                        <input 
                          type="text"
                          placeholder={`Stop ${stop}`}
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-400 focus:border-transparent"
                        />
                        <MapPin className="absolute text-gray-400 -translate-y-1/2 pointer-events-none right-4 top-1/2" />
                      </div>
                    ))}
                  </div>
                </div>
              </div>
              <div className="flex justify-between mt-8">
                <button 
                  onClick={() => setStep(1)}
                  className="px-8 py-3 font-semibold text-gray-600 transition-colors rounded-lg hover:text-gray-900"
                >
                  Previous
                </button>
                <button 
                  onClick={() => setStep(3)}
                  className="px-8 py-3 font-semibold text-white transition-colors bg-blue-600 rounded-lg hover:bg-blue-700"
                >
                  Next Step
                </button>
              </div>
            </div>
          )}

          {/* Step 3: Activities */}
          {step === 3 && (
            <div className="p-8 bg-white shadow-lg rounded-xl">
              <h2 className="mb-6 text-2xl font-bold">Plan Activities</h2>
              <div className="space-y-6">
                <div>
                  <label className="block mb-2 text-gray-700">Preferred Activities</label>
                  <div className="grid grid-cols-2 gap-4 md:grid-cols-3">
                    {['Sightseeing', 'Museums', 'Food Tours', 'Adventure', 'Shopping', 'Relaxation'].map((activity) => (
                      <label key={activity} className="flex items-center space-x-2">
                        <input type="checkbox" className="text-blue-600 rounded focus:ring-blue-400" />
                        <span>{activity}</span>
                      </label>
                    ))}
                  </div>
                </div>
                <div>
                  <label className="block mb-2 text-gray-700">Daily Budget (per person)</label>
                  <select className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-400 focus:border-transparent">
                    <option>$0 - $100</option>
                    <option>$100 - $200</option>
                    <option>$200 - $500</option>
                    <option>$500+</option>
                  </select>
                </div>
                <div>
                  <label className="block mb-2 text-gray-700">Special Requirements</label>
                  <textarea 
                    rows={4}
                    placeholder="Any special requirements or preferences..."
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-400 focus:border-transparent"
                  ></textarea>
                </div>
              </div>
              <div className="flex justify-between mt-8">
                <button 
                  onClick={() => setStep(2)}
                  className="px-8 py-3 font-semibold text-gray-600 transition-colors rounded-lg hover:text-gray-900"
                >
                  Previous
                </button>
                <button 
                  className="px-8 py-3 font-semibold text-white transition-colors bg-blue-600 rounded-lg hover:bg-blue-700"
                >
                  Create Trip
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}