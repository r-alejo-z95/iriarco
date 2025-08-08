import React from 'react';
import Image from 'next/image';
import { Card, CardContent } from '@/components/ui/card';
import type { Metadata } from "next";
import { Button } from '@/components/ui/button';
import Link from 'next/link';

export const metadata: Metadata = {
  title: "Nosotros",
  description: "Conoce más sobre Iriarco, una empresa ecuatoriana con más de 20 años de experiencia en soluciones eléctricas, importación y comercialización de equipos de alta calidad.",
};

const values = [
  {
    title: "Excelencia",
    description: "Nos comprometemos a ofrecer productos y servicios de la más alta calidad, superando las expectativas de nuestros clientes.",
    icon: "⭐"
  },
  {
    title: "Innovación",
    description: "Incorporamos las últimas tecnologías y soluciones más avanzadas del mercado internacional.",
    icon: "💡"
  },
  {
    title: "Seguridad",
    description: "La seguridad es nuestra prioridad en todos los proyectos y productos que ofrecemos.",
    icon: "🛡️"
  },
  {
    title: "Sostenibilidad",
    description: "Promovemos soluciones ecológicas y sostenibles para un futuro energético responsable.",
    icon: "🌱"
  }
];

const achievements = [
  {
    number: "20+",
    label: "Años de experiencia",
    description: "Más de dos décadas sirviendo al sector eléctrico ecuatoriano"
  },
  {
    number: "100+",
    label: "Proyectos completados",
    description: "Proyectos exitosos en todo Ecuador, desde electrificación rural hasta grandes instalaciones"
  },
  {
    number: "50+",
    label: "Clientes satisfechos",
    description: "Empresas públicas y privadas que confían en nuestras soluciones"
  },
  {
    number: "24/7",
    label: "Soporte técnico",
    description: "Disponibilidad completa para resolver cualquier consulta o emergencia"
  }
];

const AboutPage = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      {/* Hero Section */}
      <div className="text-center mb-12">
        <h1 className="text-4xl md:text-5xl font-bold mb-4 text-gray-900">
          Sobre Iriarco
        </h1>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
          Líderes en soluciones eléctricas innovadoras para el desarrollo energético del Ecuador
        </p>
      </div>

      {/* Main Content Section */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
        <div className="space-y-6">
          <div>
            <h2 className="text-3xl font-bold mb-4 text-gray-800">
              Nuestra Historia
            </h2>
            <p className="text-lg text-gray-600 leading-relaxed mb-4">
              Somos una empresa ecuatoriana con más de 20 años de experiencia en la importación y comercialización de materiales y equipos eléctricos de alta calidad. Nos especializamos en ofrecer soluciones innovadoras y sostenibles para el sector eléctrico, trabajando de la mano con empresas públicas y clientes particulares.
            </p>
            <p className="text-lg text-gray-600 leading-relaxed">
              Nuestro compromiso es con la excelencia, la seguridad y el desarrollo energético del país, impulsando proyectos que marcan la diferencia en la modernización de la infraestructura eléctrica nacional.
            </p>
          </div>

          <div>
            <h3 className="text-2xl font-semibold mb-3 text-gray-800">
              Nuestra Misión
            </h3>
            <p className="text-gray-600 leading-relaxed">
              Proporcionar soluciones eléctricas integrales y de vanguardia que contribuyan al desarrollo energético sostenible del Ecuador, a través de la comercialización de equipos de primera calidad y la ejecución de proyectos especializados.
            </p>
          </div>

          <div>
            <h3 className="text-2xl font-semibold mb-3 text-gray-800">
              Nuestra Visión
            </h3>
            <p className="text-gray-600 leading-relaxed">
              Ser la empresa líder en Ecuador en la provisión de soluciones eléctricas innovadoras, reconocida por nuestra excelencia técnica, compromiso ambiental y contribución al desarrollo del sector energético nacional.
            </p>
          </div>
        </div>

        <div className="relative">
          <Image
            src="https://images.unsplash.com/photo-1517048676732-d65bc937f952?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt="Equipo de Iriarco trabajando en proyecto eléctrico"
            width={600}
            height={400}
            className="rounded-lg shadow-xl object-cover w-full h-96"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-gray-900/20 to-transparent rounded-lg"></div>
        </div>
      </div>

      {/* Values Section */}
      <div className="mb-16">
        <h2 className="text-3xl font-bold text-center mb-12 text-gray-800">
          Nuestros Valores
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {values.map((value, index) => (
            <Card key={index} className="text-center hover:shadow-lg transition-shadow duration-300">
              <CardContent className="p-6">
                <div className="text-4xl mb-4">{value.icon}</div>
                <h3 className="text-xl font-semibold mb-3 text-gray-800">{value.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{value.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>

      {/* Achievements Section */}
      <div className="mb-16">
        <h2 className="text-3xl font-bold text-center mb-12 text-gray-800">
          Nuestros Logros
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {achievements.map((achievement, index) => (
            <div key={index} className="text-center">
              <div className="bg-gray-50 rounded-lg p-6 hover:bg-gray-100 transition-colors duration-300">
                <div className="text-4xl font-bold text-gray-800 mb-2">{achievement.number}</div>
                <div className="text-lg font-semibold text-gray-700 mb-2">{achievement.label}</div>
                <p className="text-sm text-gray-600">{achievement.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Expertise Section */}
      <div className="bg-gray-50 rounded-lg p-8 mb-16">
        <h2 className="text-3xl font-bold text-center mb-8 text-gray-800">
          Nuestra Experiencia
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div>
            <h3 className="text-xl font-semibold mb-4 text-gray-800">Sectores que Atendemos</h3>
            <ul className="space-y-3">
              {[
                'Empresas eléctricas públicas y privadas',
                'Industria petrolera y minera',
                'Sector comercial y residencial',
                'Proyectos de infraestructura pública',
                'Centros comerciales y hospitales',
                'Instituciones educativas'
              ].map((sector, index) => (
                <li key={index} className="flex items-center text-gray-600">
                  <span className="w-2 h-2 bg-gray-400 rounded-full mr-3 flex-shrink-0"></span>
                  {sector}
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="text-xl font-semibold mb-4 text-gray-800">Especialidades Técnicas</h3>
            <ul className="space-y-3">
              {[
                'Redes de distribución aérea y subterránea',
                'Sistemas de medición de alta precisión',
                'Instalaciones fotovoltaicas',
                'Sistemas de puesta a tierra',
                'Automatización y control eléctrico',
                'Consultoría en eficiencia energética'
              ].map((specialty, index) => (
                <li key={index} className="flex items-center text-gray-600">
                  <span className="w-2 h-2 bg-gray-400 rounded-full mr-3 flex-shrink-0"></span>
                  {specialty}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* Call to Action */}
      <div className="text-center bg-gradient-to-r from-gray-50 to-gray-100 rounded-lg p-8">
        <h2 className="text-2xl font-bold text-gray-800 mb-4">
          ¿Listo para tu próximo proyecto?
        </h2>
        <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
          Con más de 20 años de experiencia, estamos preparados para hacer realidad tus proyectos eléctricos más ambiciosos.
        </p>
        <div className="space-x-4">
          <Button asChild size="lg">
            <Link href="/contacto">Contactar Ahora</Link>
          </Button>
          <Button asChild size="lg" variant="outline">
             <Link href="/proyectos">Ver proyectos</Link>
           </Button>
          </div>
      </div>
    </div>
  );
};

export default AboutPage;