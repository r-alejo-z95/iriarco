import React from 'react';
import Image from 'next/image';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import type { Metadata } from "next";
import { Button } from '@/components/ui/button';
import Link from 'next/link';

export const metadata: Metadata = {
  title: "Servicios",
  description: "Descubre los servicios de Iriarco: proyectos de ingeniería eléctrica, instalación de sistemas de cableado Hendrix y mantenimiento de redes eléctricas.",
};

const mainServices = [
  {
    title: 'Proyectos de Ingeniería Eléctrica',
    description: 'Diseño, planificación y ejecución integral de proyectos eléctricos para empresas públicas y privadas. Desde la conceptualización hasta la puesta en marcha, garantizamos soluciones técnicas de vanguardia.',
    features: [
      'Estudios de factibilidad técnica y económica',
      'Diseño de redes de distribución aérea y subterránea',
      'Coordinación y supervisión de obras',
      'Gestión de permisos y trámites regulatorios',
      'Control de calidad y pruebas de funcionamiento'
    ],
    applications: [
      'Electrificación rural y urbana',
      'Modernización de redes existentes',
      'Proyectos industriales y comerciales',
      'Infraestructura crítica'
    ],
    image: '/servicios/ingenieria.avif',
  },
  {
    title: 'Instalación de Sistemas de Cableado Hendrix',
    description: 'Instalación profesional de sistemas de cableado Hendrix, redes compactas y protegidas utilizando las mejores prácticas internacionales y personal altamente capacitado.',
    features: [
      'Instalación de cables aislados aéreos',
      'Montaje en postes de concreto y fibra de vidrio',
      'Sistemas de separadores y accesorios',
      'Cruces especiales de quebradas y ríos',
      'Conexiones y terminaciones certificadas'
    ],
    applications: [
      'Redes de distribución primaria',
      'Zonas urbanas densas',
      'Áreas ambientalmente sensibles',
      'Cruces de infraestructura crítica'
    ],
    image: '/servicios/hendrix.JPG',
  },
  {
    title: 'Proyectos Fotovoltaicos',
    description: 'Planeación, diseño, instalación y mantenimiento integral de sistemas de paneles solares para autoconsumo, inyección a red y proyectos de gran escala.',
    features: [
      'Evaluación del recurso solar',
      'Diseño de sistemas on-grid y off-grid',
      'Instalación y puesta en marcha',
      'Monitoreo y mantenimiento preventivo',
      'Gestión de interconexión con la red'
    ],
    applications: [
      'Sistemas residenciales',
      'Instalaciones comerciales e industriales',
      'Granjas solares',
      'Sistemas híbridos con almacenamiento'
    ],
    image: '/productos/fotovoltaico.avif',
  },
];

const additionalServices = [
  {
    title: 'Consultoría Técnica',
    description: 'Asesoría especializada en selección de equipos, optimización de sistemas y eficiencia energética.',
    icon: '🔧'
  },
  {
    title: 'Mantenimiento Predictivo',
    description: 'Programas de mantenimiento preventivo y correctivo para garantizar la continuidad del servicio.',
    icon: '⚙️'
  },
  {
    title: 'Capacitación Técnica',
    description: 'Formación especializada para personal técnico en nuevas tecnologías y equipos.',
    icon: '📚'
  },
  {
    title: 'Suministro de Equipos',
    description: 'Importación y comercialización de equipos eléctricos de marcas reconocidas internacionalmente.',
    icon: '📦'
  },
  {
    title: 'Estudios de Factibilidad',
    description: 'Análisis técnico-económico para proyectos de inversión en infraestructura eléctrica.',
    icon: '📊'
  },
  {
    title: 'Soporte Técnico 24/7',
    description: 'Asistencia técnica continua para resolución de emergencias y consultas especializadas.',
    icon: '🛠️'
  }
];

const processSteps = [
  {
    step: '01',
    title: 'Consulta Inicial',
    description: 'Evaluamos tus necesidades y requerimientos específicos.'
  },
  {
    step: '02',
    title: 'Propuesta Técnica',
    description: 'Desarrollamos una solución personalizada con especificaciones detalladas.'
  },
  {
    step: '03',
    title: 'Planificación',
    description: 'Creamos un cronograma detallado y asignamos recursos especializados.'
  },
  {
    step: '04',
    title: 'Ejecución',
    description: 'Implementamos el proyecto con supervisión continua de calidad.'
  },
  {
    step: '05',
    title: 'Entrega y Soporte',
    description: 'Entregamos el proyecto terminado con capacitación y soporte post-venta.'
  }
];

const ServicesPage = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      {/* Hero Section */}
      <div className="text-center mb-12">
        <h1 className="text-4xl md:text-5xl font-bold mb-4 text-gray-900">
          Nuestros Servicios
        </h1>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
          Soluciones eléctricas integrales desde el diseño hasta la implementación, 
          con más de 20 años de experiencia en el sector energético ecuatoriano.
        </p>
      </div>

      {/* Main Services */}
      <div className="mb-16">
        <h2 className="text-3xl font-bold text-center mb-12 text-gray-800">
          Servicios Principales
        </h2>
        
        <div className="space-y-16">
          {mainServices.map((service, index) => (
            <div key={index} className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ${
              index % 2 === 1 ? 'lg:grid-flow-col-dense' : ''
            }`}>
              <div className={index % 2 === 1 ? 'lg:col-start-2' : ''}>
                <h3 className="text-2xl font-bold mb-4 text-gray-800">{service.title}</h3>
                <p className="text-gray-600 mb-6 leading-relaxed">{service.description}</p>
                
                <div className="mb-6">
                  <h4 className="text-lg font-semibold mb-3 text-gray-800">¿Qué incluye?</h4>
                  <ul className="space-y-2">
                    {service.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-start text-gray-600">
                        <span className="w-2 h-2 bg-gray-400 rounded-full mr-3 mt-2 flex-shrink-0"></span>
                        <span className="text-sm">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div>
                  <h4 className="text-lg font-semibold mb-3 text-gray-800">Aplicaciones:</h4>
                  <div className="flex flex-wrap gap-2">
                    {service.applications.map((app, appIndex) => (
                      <Badge key={appIndex} variant="secondary" className="text-xs">
                        {app}
                      </Badge>
                    ))}
                  </div>
                </div>
              </div>
              
              <div className={index % 2 === 1 ? 'lg:col-start-1' : ''}>
                <div className="relative h-80 lg:h-96 overflow-hidden rounded-lg shadow-xl">
                  <Image
                    src={service.image}
                    alt={service.title}
                    fill
                    className="object-cover transition-transform duration-300 hover:scale-105"
                  />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Additional Services */}
      <div className="mb-16">
        <h2 className="text-3xl font-bold text-center mb-12 text-gray-800">
          Servicios Complementarios
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {additionalServices.map((service, index) => (
            <Card key={index} className="hover:shadow-lg transition-shadow duration-300">
              <CardContent className="p-6 text-center">
                <div className="text-4xl mb-4">{service.icon}</div>
                <h3 className="text-lg font-semibold mb-3 text-gray-800">{service.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{service.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>

      {/* Process Section */}
      <div className="mb-16 bg-gray-50 rounded-lg p-8">
        <h2 className="text-3xl font-bold text-center mb-12 text-gray-800">
          Nuestro Proceso de Trabajo
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-6">
          {processSteps.map((step, index) => (
            <div key={index} className="text-center">
              <div className="relative mb-4">
                <div className="w-16 h-16 bg-gray-800 text-white rounded-full flex items-center justify-center text-xl font-bold mx-auto">
                  {step.step}
                </div>
                {index < processSteps.length - 1 && (
                  <div className="hidden lg:block absolute top-8 left-full w-full h-0.5 bg-gray-300 transform -translate-y-0.5"></div>
                )}
              </div>
              <h3 className="text-lg font-semibold mb-2 text-gray-800">{step.title}</h3>
              <p className="text-sm text-gray-600">{step.description}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Industries Section */}
      <div className="mb-16">
        <h2 className="text-3xl font-bold text-center mb-12 text-gray-800">
          Industrias que Atendemos
        </h2>
        
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          {[
            { name: 'Empresas Eléctricas', icon: '⚡' },
            { name: 'Petróleo y Gas', icon: '🛢️' },
            { name: 'Minería', icon: '⛏️' },
            { name: 'Manufactura', icon: '🏭' },
            { name: 'Hospitales', icon: '🏥' },
            { name: 'Centros Comerciales', icon: '🏬' },
            { name: 'Educación', icon: '🏫' },
            { name: 'Residencial', icon: '🏠' }
          ].map((industry, index) => (
            <div key={index} className="p-4">
              <div className="text-4xl mb-3">{industry.icon}</div>
              <h3 className="text-sm font-medium text-gray-700">{industry.name}</h3>
            </div>
          ))}
        </div>
      </div>

      {/* Call to Action */}
      <div className="text-center bg-gradient-to-r from-gray-50 to-gray-100 rounded-lg p-8">
        <h2 className="text-2xl font-bold text-gray-800 mb-4">
          ¿Tienes un proyecto en mente?
        </h2>
        <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
          Nuestro equipo de expertos está listo para convertir tus ideas en realidad. 
          Contáctanos para una consulta gratuita y descubre cómo podemos ayudarte.
        </p>
        <div className="flex flex-col justify-center sm:flex-row gap-4">
          <Button asChild size="lg">
            <Link href="/contacto">Solicitar Cotización</Link>
          </Button>
          <Button asChild size="lg" variant="outline">
             <Link href="/proyectos">Ver proyectos</Link>
           </Button>
          </div>
      </div>
    </div>
  );
};

export default ServicesPage;