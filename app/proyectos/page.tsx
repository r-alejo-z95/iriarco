import React from 'react';
import Image from 'next/image';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Proyectos | Iriarco",
  description: "Descubre los proyectos destacados de Iriarco: electrificación rural, parques solares fotovoltaicos y modernización de redes eléctricas en Ecuador.",
};

const projects = [
  {
    title: 'Electrificación Rural en la Amazonía',
    description: 'Implementación de redes de cableado protegido para llevar energía a comunidades remotas.',
    image: 'https://images.unsplash.com/photo-1598092655340-e281911919b9?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  },
  {
    title: 'Parque Solar Fotovoltaico en Manabí',
    description: 'Diseño e instalación de un parque solar de 5MW para una empresa privada.',
    image: 'https://images.unsplash.com/photo-1598092655340-e281911919b9?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  },
  {
    title: 'Modernización de Redes en Quito',
    description: 'Actualización de redes eléctricas con cableado ecológico Hendrix en la capital.',
    image: 'https://images.unsplash.com/photo-1598092655340-e281911919b9?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  },
];

const ProjectsPage = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold mb-8 text-center">Proyectos Destacados</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project) => (
          <Card key={project.title}>
            <Image src={project.image} alt={project.title} width={500} height={300} className="rounded-t-lg object-cover h-48 w-full" />
            <CardHeader>
              <CardTitle>{project.title}</CardTitle>
            </CardHeader>
            <CardContent>
              <p>{project.description}</p>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default ProjectsPage;