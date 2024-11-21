"use client"

import React, { useState } from 'react'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"

export default function MedicalReportForm() {
  const [aadhaar, setAadhaar] = useState('')

  const formatAadhaar = (value) => {
    const cleaned = value.replace(/\D+/g, '')
    const limited = cleaned.slice(0, 12)
    return limited.match(/.{1,4}/g)?.join(' ') || ''
  }

  const handleAadhaarChange = (e) => {
    const formatted = formatAadhaar(e.target.value)
    setAadhaar(formatted)
  }

  return (
    <div className="flex items-center justify-center w-full py-20">
      <div className="relative z-10 flex flex-col items-center justify-center w-1/2 h-full gap-20">
        <div className="flex flex-col items-center gap-2">
          <h1 className="text-6xl font-bold tracking-tighter">Enter Patient Details</h1>
          <p className="text-lg">Please fill out the form below with the patient's information.</p>
        </div>
        <form className="flex flex-col w-full gap-6 p-8 bg-white rounded-lg shadow-xl bg-opacity-90">
          <div className="flex w-full gap-4">
            <div className="flex flex-col w-full gap-4">
              <Label htmlFor="firstName">First Name</Label>
              <Input id="firstName" placeholder="John" type="text" required />
            </div>
            <div className="flex flex-col w-full gap-4">
              <Label htmlFor="lastName">Last Name</Label>
              <Input id="lastName" placeholder="Doe" type="text" required />
            </div>
          </div>
          <div className="flex flex-col w-full gap-4">
            <Label htmlFor="age">Patient Age</Label>
            <Input id="age" placeholder="Enter Patient Age" type="number" min={1} max={100} required />
          </div>
          <div className="flex flex-col w-full gap-4">
            <Label htmlFor="gender">Patient Gender</Label>
            <Select required>
              <SelectTrigger id="gender">
                <SelectValue placeholder="Select gender" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="male">Male</SelectItem>
                <SelectItem value="female">Female</SelectItem>
                <SelectItem value="other">Other</SelectItem>
              </SelectContent>
            </Select>
          </div>
          <div className="flex flex-col w-full gap-4">
            <Label htmlFor="aadhaar">Patient Aadhaar Number</Label>
            <div className="flex gap-2">
              <Input
                id="aadhaar"
                placeholder="Enter Your Aadhaar Number"
                value={aadhaar}
                onChange={handleAadhaarChange}
                maxLength={14}
                required
              />
              <Button type="button" className="w-24">Verify</Button>
            </div>
          </div>
          <Button type="submit">Submit</Button>
        </form>
      </div>
    </div>
  )
}

