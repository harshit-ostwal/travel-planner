import React from 'react'
import I1 from "@/public/beaches.jpg"
import I2 from "@/public/reccommedation-image-1.jpg"
import I3 from "@/public/beautiful_lake_trees_branches_sunset_nature_dark_night_sky_wallpaper_background_4k_hd_nature.jpg"
import I4 from "@/public/beautiful_scenery_fog_clouds_road_night_view_trees_grass_dark_wallpaper_sky_background_4k_hd_nature.jpg"
import I5 from "@/public/hyatt_residency.jpg"
import Image from 'next/image'
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Plane, Clock, DollarSign, Building, MapPin, Star } from 'lucide-react'

function page() {

  const flights = [
    { from: 'New York', to: 'Miami', duration: '3h 20m', price: 123 },
    { from: 'Los Angeles', to: 'San Francisco', duration: '1h 30m', price: 99 },
    { from: 'Chicago', to: 'Denver', duration: '2h 45m', price: 149 },
  ]

  const hotels = [
    { name: 'Luxury Resort & Spa', location: 'Maldives', rating: 4.9, price: 299, image: I5 },
    { name: 'City Center Hotel', location: 'New York', rating: 4.5, price: 199, image: I5},
    { name: 'Mountain Retreat', location: 'Colorado', rating: 4.7, price: 249, image: I5 },
  ]

  const places = [
    { name: 'Eiffel Tower', location: 'Paris, France', image: I4 },
    { name: 'Machu Picchu', location: 'Cusco Region, Peru', image: I2 },
    { name: 'Great Barrier Reef', location: 'Queensland, Australia', image: I3 },
  ]

  return (
    <div className="flex flex-col items-center justify-center gap-20">
      <div className="flex justify-center overflow-hidden rounded-md h-96">
        <Image src={I1} alt="Image" className="object-cover w-5/6 rounded-md aspect-video" />
      </div>
      <div className="flex flex-col items-start justify-center w-5/6 gap-20">
        <div className="flex flex-col items-start w-full gap-4">
          <h1 className="text-5xl font-bold tracking-tighter">Discover Your Next Adventure</h1>
          <p className="text-xl">Explore breathtaking destinations, find the best flight deals, and book luxurious accommodations for your dream vacation.</p>
        </div>

        <Card className="w-full">
          <CardHeader>
            <CardTitle className="flex items-center gap-2 text-4xl font-bold tracking-tight">
              <Plane className="w-8 h-8" />
              Flights
            </CardTitle>
          </CardHeader>
          <CardContent className="grid gap-4">
            {flights.map((flight, index) => (
              <Card key={index} className="overflow-hidden">
                <CardContent className="p-0">
                  <div className="flex flex-col items-center justify-between gap-4 p-6 sm:flex-row bg-gradient-to-r from-purple-100 to-blue-100">
                    <div className="flex flex-col items-center text-center sm:items-start sm:text-left">
                      <h2 className="mb-1 text-2xl font-semibold">{flight.from} to {flight.to}</h2>
                      <p className="flex items-center gap-1 text-muted-foreground">
                        <Clock className="w-4 h-4" />
                        Non-stop, {flight.duration}
                      </p>
                    </div>
                    <div className="flex flex-col items-center gap-4 sm:flex-row">
                      <Badge variant="secondary" className="px-3 py-1 text-lg">
                        <DollarSign className="inline w-4 h-4 mr-1" />
                        {flight.price}
                      </Badge>
                      <Button className="w-full sm:w-auto">Book Now</Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </CardContent>
        </Card>

        <div className="w-full">
          <h2 className="mb-8 text-4xl font-bold tracking-tighter">Hotels</h2>
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
            {hotels.map((hotel, index) => (
              <Card key={index} className="overflow-hidden group">
                <div className="overflow-hidden h-96">
                  <Image src={hotel.image} alt={hotel.name} className="object-cover w-full h-full transition-transform duration-300 group-hover:scale-110" />
                </div>
                <CardContent className="p-4">
                  <h3 className="mb-2 text-xl font-semibold">{hotel.name}</h3>
                  <p className="flex items-center mb-2 text-muted-foreground">
                    <Building className="w-4 h-4 mr-1" />
                    {hotel.location}
                  </p>
                  <div className="flex items-center justify-between">
                    <Badge variant="secondary" className="flex items-center">
                      <Star className="w-4 h-4 mr-1 fill-current" />
                      {hotel.rating}
                    </Badge>
                    <p className="font-semibold">${hotel.price} / night</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        <div className="w-full">
          <h2 className="mb-8 text-4xl font-bold tracking-tighter">Places to Visit</h2>
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
            {places.map((place, index) => (
              <Card key={index} className="overflow-hidden group">
                <div className="overflow-hidden h-96">
                  <Image src={place.image} alt={place.name} className="object-cover w-full h-full transition-transform duration-300 group-hover:scale-110" />
                </div>
                <CardContent className="p-4">
                  <h3 className="mb-2 text-xl font-semibold">{place.name}</h3>
                  <p className="flex items-center text-muted-foreground">
                    <MapPin className="w-4 h-4 mr-1" />
                    {place.location}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default page