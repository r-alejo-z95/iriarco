import React from 'react';
import Image from 'next/image';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import type { Metadata } from "next";
import { Button } from '@/components/ui/button';
import Link from 'next/link';

export const metadata: Metadata = {
  title: "Proyectos",
  description: "Descubre los proyectos destacados de Iriarco: electrificación rural, parques solares fotovoltaicos y modernización de redes eléctricas en Ecuador.",
};

interface MainProject {
  nombre: string;
  ubicacion?: string;
  voltaje: string;
  longitud: string;
  conductor: string;
  carga?: string;
  empresa?: string;
  anio: number | string;
  notas?: string;
  image: string;
  categoria: string;
  destacado?: boolean;
}

interface OtherProject {
  nombre: string;
  anio: number;
  longitud: string;
  voltaje: string;
  conductor: string;
}

const mainProjects: MainProject[] = [
  {
    nombre: "ANTENAS DEL PICHINCHA",
    ubicacion: "Quito, 4000 msnm",
    voltaje: "22.8 kV",
    longitud: "2.1 km",
    conductor: "2/0 AWG",
    carga: "1.4 MVA",
    empresa: "EMPRESA ELÉCTRICA QUITO",
    anio: 2018,
    notas: "Red Hendrix sobre postes de fibra de vidrio 12x500 kg, junto a red antigua",
    image: "/proyectos/antenas-pichincha.JPG",
    categoria: "Electrificación Urbana",
    destacado: true
  },
  {
    nombre: "VÍA AL SOL",
    ubicacion: "Vía a la Costa",
    voltaje: "13.8 kV",
    longitud: "4.3 km",
    conductor: "336 MCM",
    carga: "4 MVA",
    empresa: "CNEL GUAYAQUIL",
    anio: "2017-2019",
    notas: "Red Hendrix sobre postes de concreto 14x600 kg; cable con separadores sin talar árboles",
    image: "/proyectos/via-al-sol.png",
    categoria: "Infraestructura Vial",
    destacado: true
  },
  {
    nombre: "S/E CHILIBULO",
    voltaje: "22.8 kV",
    longitud: "3.7 km (3.2 km Hendrix)",
    conductor: "266 MCM",
    carga: "4 MVA",
    empresa: "EMPRESA ELÉCTRICA QUITO",
    anio: 2019,
    notas: "Cruce de quebrada de 470 m con Alumoweld Messenger Wire",
    image: "/proyectos/chilibulo.png",
    categoria: "Subestación",
    destacado: true
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
    image: "/proyectos/portal-shopping.png",
    categoria: "Comercial"
  },
  {
    nombre: "AEROVÍA 69 KV",
    voltaje: "69 kV",
    longitud: "285 m",
    conductor: "636 MCM",
    empresa: "RYNCONCIV",
    anio: 2020,
    notas: "Desvío de línea de transmisión por estación Aerovía",
    image: "/proyectos/aerovia.jpg",
    categoria: "Infraestructura"
  },
  { 
    nombre: "ANDES PETROLEUM FANY - DORINE", 
    longitud: "6 km", 
    voltaje: "34.5 kV", 
    conductor: "477 MCM", 
    empresa: "ANDES PETROLEUM",
    image: "/proyectos/andes.JPG",
    anio: 2020,
    categoria: "Industrial"
  },
  { 
    nombre: "S/E OLÍMPICO 2", 
    longitud: "2 km", 
    voltaje: "13.8 kV", 
    conductor: "266 MCM",
    empresa: "EMPRESA ELÉCTRICA QUITO", 
    image: "/proyectos/olimpico.jpg",
    anio: 2020,
    categoria: "Subestación"
  }
];

const otherProjects: OtherProject[] = [
  { nombre: "ANDES PETROLEUM", anio: 2013, longitud: "7 km", voltaje: "34.5 kV", conductor: "477 MCM" },
  { nombre: "GALÁPAGOS", anio: 2015, longitud: "2 km", voltaje: "13.8 kV", conductor: "2/0 AWG" },
  { nombre: "LANDEV - GUAYAQUIL", anio: 2014, longitud: "2 km", voltaje: "13.8 kV", conductor: "2/0 AWG" },
  { nombre: "PRIMARIO S/E OLÍMPICO - QUITO", anio: 2015, longitud: "1.9 km", voltaje: "22.8 kV", conductor: "396 MCM" }
];

const stats = [
  { number: "15+", label: "Proyectos Principales", description: "Completados exitosamente" },
  { number: "50+", label: "Kilómetros", description: "De redes instaladas" },
  { number: "500kV", label: "Máximo Voltaje", description: "Manejado en proyectos" },
  { number: "20+", label: "Años", description: "De experiencia comprobada" }
];

const ProjectCard = ({ project }: { project: MainProject }) => (
  <Card className="hover:shadow-xl transition-shadow duration-300 overflow-hidden group">
    <div className="relative h-64 overflow-hidden">
      <Image 
        src={project.image} 
        alt={project.nombre} 
        fill
        className="object-cover transition-transform duration-300 group-hover:scale-105" 
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/10 to-transparent"/>
      
      {/* Category Badge */}
      <div className="absolute top-4 left-4">
        <Badge variant="secondary" className="bg-white/90 text-gray-800">
          {project.categoria}
        </Badge>
      </div>
      
      {/* Featured Badge */}
      {project.destacado && (
        <div className="absolute top-4 right-4">
          <Badge className="bg-gray-800 text-white">
            Destacado
          </Badge>
        </div>
      )}
      
      {/* Year Badge */}
      <div className="absolute bottom-4 right-4">
        <Badge variant="outline" className="bg-white/90 text-gray-800 border-white">
          {project.anio}
        </Badge>
      </div>
    </div>
    
    <CardHeader>
      <CardTitle className="text-lg leading-tight text-gray-900">
        {project.nombre}
      </CardTitle>
      {project.ubicacion && (
        <p className="text-sm text-gray-500">{project.ubicacion}</p>
      )}
    </CardHeader>
    
    <CardContent className="space-y-4">
      <div className="grid grid-cols-2 gap-4 text-sm">
        <div>
          <span className="font-semibold text-gray-700">Voltaje:</span>
          <p className="text-gray-600">{project.voltaje}</p>
        </div>
        <div>
          <span className="font-semibold text-gray-700">Longitud:</span>
          <p className="text-gray-600">{project.longitud}</p>
        </div>
        <div>
          <span className="font-semibold text-gray-700">Conductor:</span>
          <p className="text-gray-600">{project.conductor}</p>
        </div>
        {project.carga && (
          <div>
            <span className="font-semibold text-gray-700">Carga:</span>
            <p className="text-gray-600">{project.carga}</p>
          </div>
        )}
      </div>
      
      {project.empresa && (
        <div>
          <span className="font-semibold text-gray-700">Cliente:</span>
          <p className="text-sm text-gray-600">{project.empresa}</p>
        </div>
      )}
      
      {project.notas && (
        <div className="pt-3 border-t border-gray-100">
          <p className="text-sm text-gray-600 italic leading-relaxed">{project.notas}</p>
        </div>
      )}
    </CardContent>
  </Card>
);

const OtherProjectCard = ({ project }: { project: OtherProject }) => (
  <Card className="hover:shadow-lg transition-shadow duration-300">
    <CardHeader>
      <CardTitle className="text-base leading-tight text-gray-900">
        {project.nombre}
      </CardTitle>
    </CardHeader>
    <CardContent className="space-y-3">
      <div className="space-y-2 text-sm">
        <div className="flex justify-between">
          <span className="font-medium text-gray-700">Año:</span>
          <span className="text-gray-600">{project.anio}</span>
        </div>
        <div className="flex justify-between">
          <span className="font-medium text-gray-700">Voltaje:</span>
          <span className="text-gray-600">{project.voltaje}</span>
        </div>
        <div className="flex justify-between">
          <span className="font-medium text-gray-700">Longitud:</span>
          <span className="text-gray-600">{project.longitud}</span>
        </div>
        <div className="flex justify-between">
          <span className="font-medium text-gray-700">Conductor:</span>
          <span className="text-gray-600">{project.conductor}</span>
        </div>
      </div>
    </CardContent>
  </Card>
);

const ProjectsPage = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      {/* Hero Section */}
      <div className="text-center mb-12">
        <h1 className="text-4xl md:text-5xl font-bold mb-4 text-gray-900">
          Proyectos Destacados
        </h1>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
          Más de 20 años ejecutando proyectos eléctricos que transforman la infraestructura energética del Ecuador.
        </p>
      </div>

      {/* Stats Section */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
        {stats.map((stat, index) => (
          <div key={index} className="text-center">
            <div className="bg-gray-50 rounded-lg p-6 hover:bg-gray-100 transition-colors duration-300">
              <div className="text-3xl font-bold text-gray-800 mb-2">{stat.number}</div>
              <div className="text-lg font-semibold text-gray-700 mb-1">{stat.label}</div>
              <p className="text-sm text-gray-600">{stat.description}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Featured Projects Section */}
      <div className="mb-16">
        <h2 className="text-3xl font-bold mb-2 text-gray-800">Proyectos Principales</h2>
        <p className="text-gray-600 mb-8">
          Nuestros proyectos más representativos que demuestran nuestra capacidad técnica y compromiso con la excelencia.
        </p>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8">
          {mainProjects.map((project) => (
            <ProjectCard key={project.nombre} project={project} />
          ))}
        </div>
      </div>

      {/* Other Projects Section */}
      <div className="mb-16">
        <h2 className="text-3xl font-bold mb-2 text-gray-800">Proyectos Adicionales</h2>
        <p className="text-gray-600 mb-8">
          Otros proyectos importantes que forman parte de nuestro portafolio de experiencia.
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {otherProjects.map((project) => (
            <OtherProjectCard key={project.nombre} project={project} />
          ))}
        </div>
      </div>

      {/* Capabilities Section */}
      <div className="mb-16 bg-gray-50 rounded-lg p-8">
        <h2 className="text-3xl font-bold text-center mb-8 text-gray-800">
          Nuestras Capacidades
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="text-center">
            <div className="bg-white rounded-lg p-6 shadow-sm">
              <div className="text-4xl mb-4">⚡</div>
              <h3 className="text-lg font-semibold mb-2 text-gray-800">Alta Tensión</h3>
              <p className="text-sm text-gray-600">
                Experiencia en proyectos desde 13.8 kV hasta 69 kV, cumpliendo con los más altos estándares de seguridad.
              </p>
            </div>
          </div>
          
          <div className="text-center">
            <div className="bg-white rounded-lg p-6 shadow-sm">
              <div className="text-4xl mb-4">🏗️</div>
              <h3 className="text-lg font-semibold mb-2 text-gray-800">Infraestructura Compleja</h3>
              <p className="text-sm text-gray-600">
                Cruces especiales, instalaciones en altura y terrenos difíciles con soluciones innovadoras.
              </p>
            </div>
          </div>
          
          <div className="text-center">
            <div className="bg-white rounded-lg p-6 shadow-sm">
              <div className="text-4xl mb-4">🌿</div>
              <h3 className="text-lg font-semibold mb-2 text-gray-800">Respeto Ambiental</h3>
              <p className="text-sm text-gray-600">
                Tecnología Hendrix que permite instalaciones sin talar árboles, minimizando el impacto ambiental.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Industries Served */}
      <div className="mb-16">
        <h2 className="text-3xl font-bold text-center mb-8 text-gray-800">
          Sectores Atendidos
        </h2>
        
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
          {[
            { name: 'Empresas Eléctricas', count: '8+ proyectos', icon: '🏢' },
            { name: 'Sector Petrolero', count: '3+ proyectos', icon: '🛢️' },
            { name: 'Centros Comerciales', count: '5+ proyectos', icon: '🏬' },
            { name: 'Infraestructura Pública', count: '10+ proyectos', icon: '🏛️' }
          ].map((sector, index) => (
            <div key={index} className="p-4">
              <div className="text-3xl mb-3">{sector.icon}</div>
              <h3 className="font-semibold text-gray-800 mb-1">{sector.name}</h3>
              <p className="text-sm text-gray-600">{sector.count}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Call to Action */}
      <div className="text-center bg-gradient-to-r from-gray-50 to-gray-100 rounded-lg p-8">
        <h2 className="text-2xl font-bold text-gray-800 mb-4">
          ¿Tienes un proyecto similar en mente?
        </h2>
        <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
          Nuestra experiencia comprobada en más de 15 proyectos principales nos respalda. 
          Permítenos ser parte de tu próximo desafío eléctrico.
        </p>
        <div className="flex flex-col justify-center sm:flex-row gap-4">
          <Button asChild size="lg">
            <Link href="/contacto">Consultar Proyecto</Link>
          </Button>
          <Button asChild size="lg" variant="outline">
             <Link href="/productos">Ver Productos</Link>
           </Button>
          </div>
      </div>
    </div>
  );
};

export default ProjectsPage;