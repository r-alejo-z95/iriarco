import React from 'react';
import Image from 'next/image';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

const services = [
  {
    title: 'Proyectos de Ingeniería Eléctrica',
    description: 'Diseño, planificación y ejecución de proyectos eléctricos para empresas públicas y privadas.',
    image: 'https://images.unsplash.com/photo-1598092655340-e281911919b9?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  },
  {
    title: 'Instalación de Sistemas de Cableado',
    description: 'Instalación profesional de sistemas de cableado Hendrix, redes compactas y protegidas.',
    image: 'https://images.unsplash.com/photo-1598092655340-e281911919b9?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  },
  {
    title: 'Mantenimiento de Redes Eléctricas',
    description: 'Servicios de mantenimiento preventivo y correctivo para garantizar la continuidad del servicio.',
    image: 'https://images.unsplash.com/photo-1598092655340-e281911919b9?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
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