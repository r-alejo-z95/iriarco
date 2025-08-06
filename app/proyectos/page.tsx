import React from 'react';
import Image from 'next/image';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Proyectos",
  description: "Descubre los proyectos destacados de Iriarco: electrificación rural, parques solares fotovoltaicos y modernización de redes eléctricas en Ecuador.",
};

const mainProjects = [
  {
    nombre: "ANTENAS DEL PICHINCHA",
    ubicacion: "Quito, 4000 msnm",
    voltaje: "22.8 kV",
    longitud: "2.1 km",
    conductor: "2/0 AWG",
    carga: "1.4 MVA",
    empresa: "EMPRESA ELECTRICA QUITO",
    anio: 2018,
    notas: "Red Hendrix sobre postes de fibra de vidrio 12x500 kg, junto a red antigua",
    image: "/proyectos/antenas.JPG"
  },
  {
    nombre: "VIA AL SOL",
    ubicacion: "Vía a la Costa",
    voltaje: "13.8 kV",
    longitud: "4.3 km",
    conductor: "336 MCM",
    carga: "4 MVA",
    empresa: "CNEL GUAYAQUIL",
    anio: "2017-2019",
    notas: "Red Hendrix sobre postes de concreto 14x600 kg; cable con separadores sin talar árboles",
    image: "/proyectos/via-al-sol.png"
  },
  {
    nombre: "S/E CHILIBULO",
    voltaje: "22.8 kV",
    longitud: "3.7 km (3.2 km Hendrix)",
    conductor: "266 MCM",
    carga: "4 MVA",
    empresa: "EMPRESA ELECTRICA QUITO",
    anio: 2019,
    notas: "Cruce de quebrada de 470 m con Alumoweld Messenger Wire",
    image: "/proyectos/chilibulo.png"
  },
  {
    nombre: "EL PORTAL SHOPPING",
    voltaje: "22.8 kV",
    longitud: "3 km",
    conductor: "266 MCM",
    carga: "10 MVA",
    empresa: "DYCONEL",
    anio: 2019,
    notas: "Red Hendrix en postes de concreto 14x600 kg; circuito a un lado del poste",
    image: "/proyectos/portal-shopping.png"
  },
  {
    nombre: "AEROVIA 69 KV",
    voltaje: "69 kV",
    longitud: "285 m",
    conductor: "636 MCM",
    empresa: "RYNCONCIV",
    anio: 2020,
    notas: "Desvío de línea de transmisión por estación Aerovía",
    image: "/proyectos/aerovia.jpg"
  },
  { 
    nombre: "ANDES PETROLEUM FANY - DORINE", 
    longitud: "6 km", 
    voltaje: "34.5 kV", 
    conductor: "477 MCM", 
    image: "/proyectos/andes.JPG",
    anio: 2020
  },
  { 
    nombre: "ELECTRIC COMPANY QUITO S/E OLÍMPICO 2", 
    longitud: "2 km", 
    voltaje: "13.8 kV", 
    conductor: "266 MCM", 
    image: "/proyectos/olimpico.jpg",
    anio: 2020
  }
];

const otherProjects = [
  { nombre: "ANDES PETROLEUM", anio: 2013, longitud: "7 km", voltaje: "34.5 kV", conductor: "477 MCM" },
  { nombre: "GALÁPAGOS", anio: 2015, longitud: "2 km", voltaje: "13.8 kV", conductor: "2/0 AWG" },
  { nombre: "LANDEV - GUAYAQUIL", anio: 2014, longitud: "2 km", voltaje: "13.8 kV", conductor: "2/0 AWG" },
  { nombre: "PRIMARIO S/E OLÍMPICO - QUITO", anio: 2015, longitud: "1.9 km", voltaje: "22.8 kV", conductor: "396 MCM" }
];

const ProjectCard = ({ project }: { project: any }) => (
  <Card>
    <Image src={project.image} alt={project.nombre} width={500} height={300} className="rounded-t-lg object-cover h-48 w-full" />
    <CardHeader>
      <CardTitle>{project.nombre}</CardTitle>
    </CardHeader>
    <CardContent>
      <div className="text-sm text-gray-600 space-y-2">
        {project.ubicacion && <p><strong>Ubicación:</strong> {project.ubicacion}</p>}
        {project.voltaje && <p><strong>Voltaje:</strong> {project.voltaje}</p>}
        {project.longitud && <p><strong>Longitud:</strong> {project.longitud}</p>}
        {project.conductor && <p><strong>Conductor:</strong> {project.conductor}</p>}
        {project.carga && <p><strong>Carga:</strong> {project.carga}</p>}
        {project.empresa && <p><strong>Empresa:</strong> {project.empresa}</p>}
        {project.anio && <p><strong>Año:</strong> {project.anio}</p>}
        {project.notas && <p className="mt-2 italic"><strong>Notas:</strong> {project.notas}</p>}
      </div>
    </CardContent>
  </Card>
);

const OtherProjectCard = ({ project }: { project: any }) => (
  <Card>
    <CardHeader>
      <CardTitle>{project.nombre}</CardTitle>
    </CardHeader>
    <CardContent>
      <div className="text-sm text-gray-600 space-y-2">
        {project.voltaje && <p><strong>Voltaje:</strong> {project.voltaje}</p>}
        {project.longitud && <p><strong>Longitud:</strong> {project.longitud}</p>}
        {project.conductor && <p><strong>Conductor:</strong> {project.conductor}</p>}
        {project.anio && <p><strong>Año:</strong> {project.anio}</p>}
      </div>
    </CardContent>
  </Card>
);

const ProjectsPage = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold mb-8 text-center">Proyectos Destacados</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {mainProjects.map((project) => (
          <ProjectCard key={project.nombre} project={project} />
        ))}
      </div>

      <h2 className="text-3xl font-bold mt-16 mb-8 text-center">Otros Proyectos</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {otherProjects.map((project) => (
          <OtherProjectCard key={project.nombre} project={project} />
        ))}
      </div>
    </div>
  );
};

export default ProjectsPage;