"use client"

import React, { useState } from 'react'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"

const lawyerData = [
  { name: "John Smith", rating: 4.5, specialty: "family", distance: "2 miles", img: "./lwyer1.jpg" },
  { name: "Michael Brown", rating: 4.8, specialty: "criminal", distance: "1.5 miles", img: "./lwyer2.jpg" },
  { name: "Emily Johnson", rating: 4.2, specialty: "business", distance: "3 miles", img: "./lwyer3.jpg" },
  { name: "Sarah Davis", rating: 4.6, specialty: "personal_injury", distance: "2.5 miles", img: "./lwyer4.jpg" },
  { name: "David Wilson", rating: 4.3, specialty: "property", distance: "1 mile", img: "./lwyer5.jpg" },
  { name: "Laura Martinez", rating: 4.7, specialty: "family", distance: "0.5 miles", img: "./lwyer6.jpg" },
  { name: "James Taylor", rating: 4.9, specialty: "criminal", distance: "3.2 miles", img: "./lwyer7.jpg" },
  { name: "Jessica Thompson", rating: 4.1, specialty: "business", distance: "4 miles", img: "./lwyer8.jpg" }
]

export default function FindLawyer() {
  const [condition, setCondition] = useState('')
  const [location, setLocation] = useState('')
  const [specialty, setSpecialty] = useState('')
  const [results, setResults] = useState([])

  const handleSubmit = (e) => {
    e.preventDefault()
    const filteredResults = lawyerData.filter(lawyer => lawyer.specialty === specialty.toLowerCase())
    setResults(filteredResults)
  }

  const fetchLocation = () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          setLocation(`Lat: ${position.coords.latitude}, Lon: ${position.coords.longitude}`)
        },
        (error) => {
          console.error("Error fetching location:", error)
          alert("Unable to retrieve your location.")
        }
      )
    } else {
      alert("Geolocation is not supported by this browser.")
    }
  }

  return (
    <div className="flex items-center justify-center w-full gap-10 py-20">
      <div className="flex-col items-center justify-center w-full max-w-2xl gap-20 px-4 rflex">
        <div className="flex flex-col items-center gap-5">
          <h1 className="text-6xl font-bold tracking-tighter">Find a Lawyer</h1>
          <p className="text-lg">Input your details to find a suitable lawyer.</p>
        </div>
        <form onSubmit={handleSubmit} className="flex flex-col w-full gap-6 p-8 mt-10 rounded-lg shadow-xl">
          <div className="flex flex-col w-full gap-4">
            <Label htmlFor="condition">Client Condition</Label>
            <Input
              id="condition"
              placeholder="Describe the condition"
              value={condition}
              onChange={(e) => setCondition(e.target.value)}
              required
            />
          </div>
          <div className="flex flex-col w-full gap-4">
            <Label htmlFor="location">Location</Label>
            <div className="flex gap-2">
              <Input
                id="location"
                placeholder="Enter your location"
                value={location}
                onChange={(e) => setLocation(e.target.value)}
                required
              />
              <Button type="button" onClick={fetchLocation} className="w-40">
                Fetch Location
              </Button>
            </div>
          </div>
          <div className="flex flex-col w-full gap-4">
            <Label htmlFor="specialty">Specialty</Label>
            <Select value={specialty} onValueChange={setSpecialty} required>
              <SelectTrigger id="specialty">
                <SelectValue placeholder="Select Specialty" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="family">Family Law</SelectItem>
                <SelectItem value="criminal">Criminal Law</SelectItem>
                <SelectItem value="business">Business Law</SelectItem>
                <SelectItem value="personal_injury">Personal Injury</SelectItem>
                <SelectItem value="property">Property Law</SelectItem>
              </SelectContent>
            </Select>
          </div>
          <Button type="submit">Find Lawyers</Button>
        </form>
        {results.length > 0 && (
          <div className="w-full p-6 bg-white rounded-lg shadow-xl bg-opacity-90">
            <h2 className="mb-4 text-2xl font-bold">Lawyers Found:</h2>
            <div className="space-y-4">
              {results.map((lawyer, index) => (
                <div key={index} className="flex items-center gap-4 p-4 bg-gray-100 rounded-lg">
                  <img src={lawyer.img} alt={lawyer.name} className="w-16 h-16 rounded-full" />
                  <div>
                    <h3 className="text-lg font-semibold">{lawyer.name}</h3>
                    <p>Rating: {lawyer.rating} | Distance: {lawyer.distance}</p>
                    <p>Specialty: {lawyer.specialty.charAt(0).toUpperCase() + lawyer.specialty.slice(1)}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  )
}

