import Image from 'next/image'
import React from 'react'
import I1 from "@/public/beaches.jpg"
import I2 from "@/public/beautiful_scenery_fog_clouds_road_night_view_trees_grass_dark_wallpaper_sky_background_4k_hd_nature.jpg"
import I3 from "@/public/beautiful_lake_trees_branches_sunset_nature_dark_night_sky_wallpaper_background_4k_hd_nature.jpg"
import I4 from "@/public/beautiful_scenery_fog_clouds_road_night_view_trees_grass_dark_wallpaper_sky_background_4k_hd_nature.jpg"
import Link from 'next/link'

const Trips = [
    {
        image: I1,
        title: "Ooty, Hill Station",
        desc: "Nestled in the Nilgiris, Ooty offers scenic beauty, tea gardens, and a cool climate—a perfect getaway from the city hustle."
    },
    {
        image: I2,
        title: "Goa, Beaches",
        desc: "Known for its vibrant nightlife and serene beaches, Goa is the ultimate destination for relaxation and fun."
    },
    {
        image: I3,
        title: "Manali, Adventure",
        desc: "Manali is a haven for adventure lovers, offering activities like paragliding, trekking, and river rafting amidst snow-capped peaks."
    },
    {
        image: I4,
        title: "Jaisalmer, Desert Safari",
        desc: "Explore the golden sands of Jaisalmer with camel rides, cultural performances, and magnificent fort views."
    },
    {
        image: I1,
        title: "Andaman, Islands",
        desc: "Andaman is famous for its crystal-clear waters, coral reefs, and tranquil beaches, ideal for diving and snorkeling."
    },
    {
        image: I2,
        title: "Darjeeling, Tea Gardens",
        desc: "Experience the charm of Darjeeling with its lush tea gardens, toy train rides, and breathtaking Himalayan views."
    },
    {
        image: I3,
        title: "Leh-Ladakh, Mountains",
        desc: "Leh-Ladakh offers rugged terrains, serene monasteries, and the captivating beauty of Pangong Lake."
    },
    {
        image: I4,
        title: "Kerala, Backwaters",
        desc: "Known as 'God's Own Country,' Kerala's backwaters provide a tranquil experience with houseboat stays and lush greenery."
    },
]

function page() {
    return (
        <div className="flex flex-col items-center justify-center w-full gap-20">
            <div className="flex flex-col items-center gap-2">
                <h1 className="text-6xl font-bold tracking-tighter">Hot Trips</h1>
                <p>Turn your next trip into a hassle-free experience with Travel Planner AI.</p>
            </div>
            <div className="grid items-center grid-cols-1 gap-10 md:grid-cols-2 xl:grid-cols-3">

                {Trips.map((data, index) => (
                    <div key={index} className="flex flex-col border rounded-md group border-neutral-300">
                        <div className="overflow-hidden rounded-md h-min">
                            <Image src={data.image} alt="Images" width={500} className="object-cover transition-transform duration-300 group-hover:scale-110 rounded-t-md aspect-video" />
                        </div>
                        <div className="flex flex-col gap-4 p-5">
                            <div className="flex items-center gap-4">
                                <span className="px-4 py-1 font-medium text-white bg-black rounded-md">Nature</span>
                                <span className="font-medium">12-01-2024</span>
                            </div>
                            <h1 className="text-3xl font-bold tracking-tight">{data.title}</h1>
                            <p className="max-w-md text-ellipsis line-clamp-2">{data.desc}</p>
                            <Link href="" className="text-blue-700">Read More</Link>
                        </div>
                    </div>
                ))}

            </div>
        </div >
    )
}

export default page