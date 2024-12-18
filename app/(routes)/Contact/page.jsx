"use client"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"

function page() {

  return (
    <div className="flex items-center justify-center w-full py-20">
      <div className="flex flex-col items-center justify-center w-1/2 h-full gap-20">
        <div className="flex flex-col items-center gap-2">
          <h1 className="text-6xl font-bold tracking-tighter">Contact Us</h1>
          <p className="text-lg">Turn your next trip into a hassle-free experience with Travel Planner AI.</p>
        </div>
        <form className="flex flex-col w-full gap-6">
          <div className="flex flex-col w-full gap-4">
            <Label>Name</Label>
            <Input placeholder={"John Doe"} type="text" />
          </div>
          <div className="flex flex-col w-full gap-4">
            <Label>Email</Label>
            <Input placeholder={"John Doe"} type="text" />
          </div>
          <div className="flex flex-col w-full gap-4">
            <Label>Destination</Label>
            <Input placeholder={"John Doe"} type="text" />
          </div>
          <div className="flex flex-col w-full gap-4">
            <Label>Duration</Label>
            <Input placeholder={"John Doe"} type="text" />
          </div>
          <div className="flex flex-col w-full gap-4">
            <Label>Message</Label>
            <Textarea className="resize-none"></Textarea>
          </div>
          <Button>Submit</Button>
        </form>
      </div>
    </div>
  )
}

export default page
