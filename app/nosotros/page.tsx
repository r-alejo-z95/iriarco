import React from 'react';

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
          <img src="https://images.unsplash.com/photo-1556761175-5973dc0f32e7?q=80&w=1932&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="Equipo de Iriarco" className="rounded-lg shadow-lg" />
        </div>
      </div>
    </div>
  );
};

export default AboutPage;