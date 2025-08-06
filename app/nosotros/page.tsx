import React from 'react';
import Image from 'next/image';
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Nosotros",
  description: "Conoce más sobre Iriarco, una empresa ecuatoriana con más de 20 años de experiencia en soluciones eléctricas, importación y comercialización de equipos de alta calidad.",
};

const AboutPage = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
        <div>
          <h1 className="text-4xl font-bold mb-4">Sobre Iriarco</h1>
          <p className="text-lg mb-4">
            Somos una empresa ecuatoriana con más de 20 años de experiencia en la importación y comercialización de materiales y equipos eléctricos de alta calidad. Nos especializamos en ofrecer soluciones innovadoras y sostenibles para el sector eléctrico, trabajando de la mano con empresas públicas y clientes particulares.
          </p>
          <p className="text-lg">
            Nuestro compromiso es con la excelencia, la seguridad y el desarrollo energético del país, impulsando proyectos que marcan la diferencia.
          </p>
        </div>
        <div>
          <Image
            src="https://images.unsplash.com/photo-1517048676732-d65bc937f952?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt="Equipo de Iriarco"
            width={500}
            height={300}
            className="rounded-lg shadow-lg"
          />
        </div>
      </div>
    </div>
  );
};

export default AboutPage;