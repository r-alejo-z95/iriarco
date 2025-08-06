import React from 'react';
import Image from 'next/image';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Servicios",
  description: "Descubre los servicios de Iriarco: proyectos de ingeniería eléctrica, instalación de sistemas de cableado Hendrix y mantenimiento de redes eléctricas.",
};

const services = [
  {
    title: 'Proyectos de Ingeniería Eléctrica',
    description: 'Diseño, planificación y ejecución de proyectos eléctricos para empresas públicas y privadas.',
    image: '/servicios/diseno.jpg',
  },
  {
    title: 'Instalación de Sistemas de Cableado',
    description: 'Instalación profesional de sistemas de cableado Hendrix, redes compactas y protegidas.',
    image: '/servicios/instalacion.jpg',
  },
  {
    title: 'Proyectos Fotovoltaicos',
    description: 'Planeación, instalación y mantenimiento de paneles solares.',
    image: '/servicios/solar.jpg',
  },
];

const ServicesPage = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold mb-8 text-center">Nuestros Servicios</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {services.map((service) => (
          <Card key={service.title}>
            <Image src={service.image} alt={service.title} width={500} height={300} className="rounded-t-lg object-cover h-48 w-full" />
            <CardHeader>
              <CardTitle>{service.title}</CardTitle>
            </CardHeader>
            <CardContent>
              <p>{service.description}</p>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default ServicesPage;