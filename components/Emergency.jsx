import React from 'react';
import { Phone, AlertTriangle, FileText, Scale } from 'lucide-react';
import Link from 'next/link';

const services = [
  {
    icon: AlertTriangle,
    href:"/SOS",
    title: "24/7 SOS Support",
    description: "Immediate emergency assistance available worldwide with local emergency contacts and real-time support.",
    buttonText: "Access Emergency Help"
  },
  {
    icon: FileText,
    href:"/MedicalReport",
    title: "Medical Reports & Support",
    description: "Quick access to medical facilities, digital health records, and multilingual medical assistance.",
    buttonText: "View Medical Services"
  },
  {
    icon: Scale,
    href:"/Legal",
    title: "Legal Assistance",
    description: "Connect with local legal experts and get immediate legal consultation while traveling.",
    buttonText: "Contact Legal Help"
  }
];

export default function EmergencyServices() {
  return (
    <section className="py-20 bg-gray-50">
      <div className="container px-4 mx-auto">
        <div className="mb-16 text-center">
          <h2 className="mb-4 text-4xl font-bold">Travel Safety & Support</h2>
          <p className="max-w-2xl mx-auto text-lg text-gray-600">
            Your safety is our priority. Access immediate assistance and support services anywhere in the world.
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-3">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <div key={index} className="p-8 transition-all bg-white shadow-lg rounded-xl hover:shadow-xl">
                <div className="mb-6">
                  <div className="flex items-center justify-center mb-4 bg-red-100 rounded-full w-14 h-14">
                    <Icon className="text-red-600 w-7 h-7" />
                  </div>
                  <h3 className="mb-3 text-xl font-bold">{service.title}</h3>
                  <p className="mb-6 text-gray-600">{service.description}</p>
                </div>
                <Link href={service.href} className="w-full px-6 py-3 font-semibold text-white transition-colors bg-red-600 rounded-lg hover:bg-red-700">
                  {service.buttonText}
                </Link>
              </div>
            );
          })}
        </div>

        <div className="mt-12 text-center">
          <div className="inline-flex items-center gap-2 px-6 py-3 text-red-700 bg-red-100 rounded-full">
            <Phone className="w-5 h-5" />
            <span className="font-semibold">Emergency Hotline: +1 (555) 911-0000</span>
          </div>
        </div>
      </div>
    </section>
  );
}