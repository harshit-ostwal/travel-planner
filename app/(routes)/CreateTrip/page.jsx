"use client"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { useRouter } from "next/navigation"

function page() {

    const router = useRouter();

    const handleSubmit = (e) => {

        e.preventDefault();
        router.replace("/CreateTrip/Otty")
    }

    return (
        <div className="flex items-center justify-center w-full">
            <div className="flex flex-col items-center justify-center w-1/2 h-full gap-20">
                <div className="flex flex-col items-center gap-2">
                    <h1 className="text-6xl font-bold tracking-tighter">Create Trip</h1>
                    <p className="text-lg">Turn your next trip into a hassle-free experience with Travel Planner AI.</p>
                </div>
                <form onSubmit={handleSubmit} className="flex flex-col w-full gap-6">
                    <div className="flex flex-col w-full gap-4">
                        <Label>Current Location</Label>
                        <Input placeholder={"John Doe"} type="text" />
                    </div>
                    <div className="flex flex-col w-full gap-4">
                        <Label>Destination</Label>
                        <Input placeholder={"John Doe"} type="text" />
                    </div>
                    <div className="flex flex-col w-full gap-4">
                        <Label>Budget</Label>
                        <Input placeholder={"John Doe"} type="text" />
                    </div>
                    <Button>Generate Trip</Button>
                </form>
            </div>
        </div>
    )
}

export default page