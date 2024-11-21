import React from 'react';

const destinations = [
  {
    "name": "Taj Mahal, Agra",
    "image": "https://upload.wikimedia.org/wikipedia/commons/d/da/Taj-Mahal.jpg",
    "rating": 4.8,
    "price": "₹999"
  },
  {
    "name": "Jaipur, Rajasthan",
    "image": "https://images.unsplash.com/photo-1705861145876-2efd5e0392a5",
    "rating": 4.7,
    "price": "₹1,499"
  },
  {
    "name": "Backwaters, Kerala",
    "image": "https://images.unsplash.com/photo-1541233349642-6e425fe6190e?crop=entropy&cs=tinysrgb",
    "rating": 4.9,
    "price": "₹1,199"
  },
  {
    "name": "Leh-Ladakh",
    "image": "https://images.unsplash.com/photo-1547127678-a8619053611c",
    "rating": 4.9,
    "price": "₹2,499"
  },
  {
    "name": "Meghalaya, North East India",
    "image": "https://images.unsplash.com/photo-1717920961588-304eced6b8c6",
    "rating": 4.8,
    "price": "₹1,299"
  }
];

export default function Destinations() {
  return (
    <section className="py-24 bg-white">
      <div className="container px-4 mx-auto">
        <div className="max-w-3xl mx-auto mb-16 text-center">
          <h2 className="mb-4 text-4xl font-bold">Popular Destinations</h2>
          <p className="text-lg text-gray-600">Explore our hand-picked destinations loved by travelers worldwide</p>
        </div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {destinations.map((destination, index) => (
            <div key={index} className="relative overflow-hidden shadow-lg group rounded-xl">
              <img
                src={destination.image}
                alt={destination.name}
                className="object-cover w-full transition-transform duration-300 h-80 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
              <div className="absolute bottom-0 left-0 right-0 p-6">
                <div className="flex items-end justify-between">
                  <div>
                    <h3 className="mb-2 text-xl font-bold text-white">{destination.name}</h3>
                    <div className="flex items-center">
                      <span className="text-yellow-400">★</span>
                      <span className="ml-1 text-white">{destination.rating}</span>
                    </div>
                  </div>
                  <span className="font-semibold text-white">{destination.price}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}