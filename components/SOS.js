"use client"

import { HeartPulseIcon } from "lucide-react" // Ensure you're importing the correct icon
import { useState } from "react"

export default function SOSButton() {
    const [isAlertSent, setIsAlertSent] = useState(false)

    const handleSOS = () => {
        setIsAlertSent(true)
        // Add your SOS functionality here, e.g., sending a request to a server or triggering an alert
        alert("SOS alert sent! Help is on the way.") // Replace this with actual logic for your presentation
    }

    return (
        <button
            onClick={handleSOS}
            className="fixed z-50 flex flex-col items-center justify-center w-20 h-20 font-bold text-white bg-red-500 rounded-full bottom-10 right-10"
        >
            <HeartPulseIcon className="w-8 h-8" />
            <h1>SOS</h1>
        </button>
    )
}