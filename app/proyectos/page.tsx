import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

const projects = [
  {
    title: 'Electrificación Rural en la Amazonía',
    description: 'Implementación de redes de cableado protegido para llevar energía a comunidades remotas.',
    image: 'https://images.unsplash.com/photo-1618477388954-7852f32655ec?q=80&w=1964&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  },
  {
    title: 'Parque Solar Fotovoltaico en Manabí',
    description: 'Diseño e instalación de un parque solar de 5MW para una empresa privada.',
    image: 'https://images.unsplash.com/photo-1509391366360-2e959784a276?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  },
  {
    title: 'Modernización de Redes en Quito',
    description: 'Actualización de redes eléctricas con cableado ecológico Hendrix en la capital.',
    image: 'https://images.unsplash.com/photo-1580570598464-3a14a9b5b76d?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  },
];

const ProjectsPage = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold mb-8 text-center">Proyectos Destacados</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project) => (
          <Card key={project.title}>
            <img src={project.image} alt={project.title} className="rounded-t-lg object-cover h-48 w-full" />
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