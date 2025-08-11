import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Image from "next/image";
import Link from "next/link";

const projects = [
  {
    image: "/proyectos/aerovia.jpg",
    title: "Aerovía 69 KV",
    description: "Desvío de línea de transmisión de 69 kV para evitar interferencia con estación de Aerovía. Instalación de 285 m con conductor 636 MCM.",
    specs: {
      voltaje: "69 kV",
      longitud: "285 m",
      conductor: "636 MCM",
      año: "2020"
    },
    category: "Infraestructura",
    featured: true
  },
  {
    image: "/proyectos/antenas-pichincha.JPG",
    title: "Antenas del Pichincha",
    description: "Red Hendrix instalada a 4000 msnm para alimentar antenas de telecomunicaciones. Postes de fibra de vidrio en condiciones extremas.",
    specs: {
      voltaje: "22.8 kV",
      longitud: "2.1 km",
      conductor: "2/0 AWG",
      año: "2018"
    },
    category: "Electrificación",
    featured: true
  },
  {
    image: "/proyectos/portal-shopping.png",
    title: "El Portal Shopping",
    description: "Alimentación eléctrica para centro comercial con tecnología Hendrix. Circuito lateral en postes de concreto.",
    specs: {
      voltaje: "22.8 kV",
      longitud: "3 km",
      conductor: "266 MCM",
      año: "2019"
    },
    category: "Comercial",
    featured: false
  }
];

const achievements = [
  {
    icon: "⚡",
    title: "Alta Tensión",
    description: "Experiencia hasta 69kV"
  },
  {
    icon: "🏔️",
    title: "Condiciones Extremas",
    description: "Instalaciones hasta 4000 msnm"
  },
  {
    icon: "🌿",
    title: "Tecnología Ecológica",
    description: "Sin talar árboles"
  },
  {
    icon: "🏗️",
    title: "Proyectos Complejos",
    description: "Cruces especiales y desvíos"
  }
];

export default function RecentProjects() {
  return (
    <section className="bg-gray-50 py-16 md:py-24">
      <div className="mx-auto max-w-6xl px-6">
        {/* Header */}
        <div className="mx-auto max-w-3xl text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 md:text-5xl mb-4">
            Proyectos Destacados
          </h2>
          <p className="text-xl text-gray-600 leading-relaxed">
            Casos de éxito que demuestran nuestra experiencia y compromiso con la excelencia 
            en proyectos eléctricos de alta complejidad.
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid gap-8 lg:grid-cols-3 mb-12">
          {projects.map((project, index) => (
            <Card key={index} className="overflow-hidden hover:shadow-xl transition-shadow duration-300 group">
              <div className="relative">
                <CardHeader className="p-0">
                  <div className="relative h-56 overflow-hidden">
                    <Image
                      src={project.image}
                      alt={project.title}
                      fill
                      className="object-cover transition-transform duration-300 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/10 to-transparent"/>
                  </div>
                  
                  {/* Overlaid badges */}
                  <div className="absolute top-4 left-4">
                    <Badge variant="secondary" className="bg-white/90 text-gray-800">
                      {project.category}
                    </Badge>
                  </div>
                  
                  {project.featured && (
                    <div className="absolute top-4 right-4">
                      <Badge className="bg-red-600 text-white">
                        Destacado
                      </Badge>
                    </div>
                  )}

                  <div className="absolute bottom-4 right-4">
                    <Badge variant="outline" className="bg-white/90 text-gray-800 border-white">
                      {project.specs.año}
                    </Badge>
                  </div>
                </CardHeader>
              </div>
              
              <CardContent className="p-6 space-y-4">
                <div>
                  <CardTitle className="text-xl text-gray-900 mb-2 leading-tight">
                    {project.title}
                  </CardTitle>
                  <CardDescription className="text-gray-600 leading-relaxed">
                    {project.description}
                  </CardDescription>
                </div>

                {/* Technical specs */}
                <div className="grid grid-cols-2 gap-3 pt-4 border-t border-gray-100">
                  <div>
                    <span className="text-xs font-semibold text-gray-500 uppercase tracking-wide">Voltaje</span>
                    <p className="text-sm font-medium text-gray-900">{project.specs.voltaje}</p>
                  </div>
                  <div>
                    <span className="text-xs font-semibold text-gray-500 uppercase tracking-wide">Longitud</span>
                    <p className="text-sm font-medium text-gray-900">{project.specs.longitud}</p>
                  </div>
                  <div className="col-span-2">
                    <span className="text-xs font-semibold text-gray-500 uppercase tracking-wide">Conductor</span>
                    <p className="text-sm font-medium text-gray-900">{project.specs.conductor}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Achievements Section */}
        <div className="mb-12">
          <h3 className="text-2xl font-bold text-center mb-8 text-gray-900">
            Nuestras Capacidades
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {achievements.map((achievement, index) => (
              <div key={index} className="text-center">
                <div className="bg-white rounded-lg p-6 hover:bg-red-50 transition-colors duration-300">
                  <div className="text-3xl mb-3">{achievement.icon}</div>
                  <h4 className="font-semibold text-gray-900 mb-2">{achievement.title}</h4>
                  <p className="text-sm text-gray-600">{achievement.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center bg-white rounded-lg p-8 shadow-sm">
          <h3 className="text-2xl font-bold text-gray-900 mb-4">
            ¿Quieres ver nuestro portafolio completo?
          </h3>
          <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
            Explora todos nuestros proyectos y descubre cómo hemos resuelto desafíos 
            similares al tuyo en más de 20 años de experiencia.
          </p>
          <div className="flex flex-col justify-center sm:flex-row gap-4">
            <Button asChild size="lg">
              <Link href="/proyectos">Ver todos los proyectos</Link>
            </Button>
            <Button asChild size="lg" variant="outline">
              <Link href="/contacto">Consultar Proyecto</Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}