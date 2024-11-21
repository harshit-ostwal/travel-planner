import React from 'react';
import { Users, Globe, Shield, Award } from 'lucide-react';

export default function About() {
  return (
    <div className="min-h-screen py-20">
      <div className="container px-4 py-16 mx-auto">
        {/* Hero Section */}
        <div className="mb-16 text-center">
          <h1 className="mb-4 text-4xl font-bold">About TravelPlanner</h1>
          <p className="max-w-2xl mx-auto text-lg text-gray-600">
            We're on a mission to make travel planning simple, enjoyable, and accessible to everyone.
          </p>
        </div>

        {/* Story Section */}
        <div className="grid items-center gap-12 mb-20 md:grid-cols-2">
          <div>
            <h2 className="mb-6 text-3xl font-bold">Our Story</h2>
            <p className="mb-4 text-gray-600">
              Founded in 2024, TravelPlanner emerged from a simple idea: travel planning should be as enjoyable as the journey itself. Our team of passionate travelers and tech enthusiasts came together to create a platform that combines intelligent planning tools with human expertise.
            </p>
            <p className="text-gray-600">
              Today, we serve millions of travelers worldwide, helping them create unforgettable experiences with confidence and ease.
            </p>
          </div>
          <div>
            <img 
              src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&q=80" 
              alt="Our Team" 
              className="shadow-lg rounded-xl"
            />
          </div>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 gap-8 mb-20 md:grid-cols-4">
          <div className="text-center">
            <div className="mb-2 text-4xl font-bold text-blue-600">2M+</div>
            <div className="text-gray-600">Active Users</div>
          </div>
          <div className="text-center">
            <div className="mb-2 text-4xl font-bold text-blue-600">150+</div>
            <div className="text-gray-600">Countries</div>
          </div>
          <div className="text-center">
            <div className="mb-2 text-4xl font-bold text-blue-600">10M+</div>
            <div className="text-gray-600">Trips Planned</div>
          </div>
          <div className="text-center">
            <div className="mb-2 text-4xl font-bold text-blue-600">24/7</div>
            <div className="text-gray-600">Support</div>
          </div>
        </div>

        {/* Values */}
        <div className="mb-20">
          <h2 className="mb-12 text-3xl font-bold text-center">Our Values</h2>
          <div className="grid gap-8 md:grid-cols-4">
            {[
              { icon: Users, title: "Community First", desc: "Building a global community of travelers" },
              { icon: Globe, title: "Accessibility", desc: "Making travel planning accessible to everyone" },
              { icon: Shield, title: "Trust & Safety", desc: "Ensuring secure and reliable travel experiences" },
              { icon: Award, title: "Excellence", desc: "Committed to providing the best service" }
            ].map((value, index) => {
              const Icon = value.icon;
              return (
                <div key={index} className="text-center">
                  <div className="flex items-center justify-center w-16 h-16 mx-auto mb-4 bg-blue-100 rounded-full">
                    <Icon className="w-8 h-8 text-blue-600" />
                  </div>
                  <h3 className="mb-2 font-bold">{value.title}</h3>
                  <p className="text-gray-600">{value.desc}</p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}