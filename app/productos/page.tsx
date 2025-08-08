import React from 'react';
import Image from 'next/image';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import type { Metadata } from "next";
import { Button } from '@/components/ui/button';
import Link from 'next/link';

export const metadata: Metadata = {
  title: "Productos",
  description: "Explora el catálogo de productos de Iriarco: cableado eléctrico ecológico, cableados de redes compactas, equipos de medición Sensorlink, paneles solares y sistemas de puesta a tierra Stavol.",
};

const products = [
  {
    category: "Equipos de Medición SensorLink",
    items: [
      {
        title: 'Ampstik+ - Amperímetro de Alta Tensión',
        description: 'Amperímetro para trabajo en línea viva que mide de 0.5A a 5000A en ambientes de hasta 500kV. Incluye sensor de corriente lineal con precisión del ±1% y capacidad para almacenar hasta 4 lecturas.',
        specs: [
          'Rango: 0.5A - 5000A',
          'Voltaje: 0-500kV',
          'Precisión: ±1%, ±2 cuentas',
          'Pantalla LCD retroiluminada',
          'Resistente al agua y fuego'
        ],
        image: '/productos/ampstik.png',
        models: ['8-020 XT PLUS', '8-024 PLUS (Mandíbula Ancha)']
      },
      {
        title: 'Medidor de Fases Inalámbrico',
        description: 'Sistema de medición inalámbrica para verificar relaciones de fase, desplazamientos de 120 grados y cargas balanceadas. Comunicación por radio hasta 50 pies.',
        specs: [
          'Voltaje: 100V - 500kV',
          'Resolución de fase: 1° - 359°',
          'Precisión de fase: ±2°',
          'Comunicación radio: hasta 50 pies',
          'Aplicaciones aéreas y subterráneas'
        ],
        image: '/productos/medidor-fase.jpg',
        models: ['6-303 SR', '6-303 SRD (con pantalla)']
      },
      {
        title: 'Radio Ampstik - Amperímetro por Radio',
        description: 'Amperímetro de alta tensión con enlace por radio para medición segura desde hasta 50 pies de distancia. Incluye indicación de dirección de flujo de corriente.',
        specs: [
          'Medición: 0.5A - 5000A',
          'Precisión: ±1%',
          'Voltaje: hasta 133kV',
          'Radio alcance: 50 pies',
          'Indicación de dirección de flujo'
        ],
        image: '/productos/radio-ampstik.png',
        models: ['6-122XT Kit', '6-122WJ Kit (mandíbula ancha)']
      },
      {
        title: 'Kit Troubleman',
        description: 'Conjunto completo con amperímetro y voltímetro por radio para resolución de problemas en circuitos de distribución de baja y media tensión.',
        specs: [
          'Voltímetro: 1-37kV',
          'Amperímetro: 0.5-5000A',
          'Pantalla remota por radio',
          'Operación con una sola pértiga',
          'Almacena 4 lecturas únicas'
        ],
        image: '/productos/troubleman.png',
        models: ['6-333 (Radio Ampstik + Voltstik)']
      },
      {
        title: 'Varcorder - Registrador de Carga',
        description: 'Registrador de amperios, factor de potencia y VARs para optimización de distribución aérea. Recolecta perfiles de carga durante más de 90 días.',
        specs: [
          'Corriente: 1-2000A',
          'Voltaje: hasta 69kV fase-fase',
          'Autonomía: 90+ días',
          'Intervalos definibles por usuario',
          'Descarga por IrDA a PC'
        ],
        image: '/productos/varcorder.png',
        models: ['6-910 Kit Trifásico', 'Kit Monofásico']
      }
    ]
  },
  {
    category: "Sistemas de Cableado Eléctrico",
    items: [
      {
        title: 'Cables Hendrix Ecológicos',
        description: 'Sistemas de cableado eléctrico amigables con el medio ambiente, diseñados para alta eficiencia energética y mínimo impacto ambiental.',
        specs: [
          'Materiales ecológicos',
          'Alta eficiencia energética',
          'Resistentes a condiciones climáticas',
          'Larga vida útil',
          'Certificaciones ambientales'
        ],
        image: '/productos/hendrix.jpg',
        models: ['Diversas especificaciones según aplicación']
      },
      {
        title: 'Redes Compactas y Protegidas',
        description: 'Soluciones de cableado para redes de distribución eléctrica compactas, optimizando el espacio disponible y maximizando la seguridad operacional.',
        specs: [
          'Diseño compacto',
          'Alta seguridad',
          'Fácil instalación',
          'Mantenimiento reducido',
          'Optimización de espacio'
        ],
        image: '/productos/compactas.jpg',
        models: ['Configuraciones personalizadas']
      }
    ]
  },
  {
    category: "Sistemas de Energía Renovable",
    items: [
      {
        title: 'Paneles Solares Fotovoltaicos',
        description: 'Sistemas fotovoltaicos de última generación para autoconsumo residencial, comercial e industrial, así como para proyectos de gran escala.',
        specs: [
          'Alta eficiencia de conversión',
          'Tecnología monocristalina',
          'Garantía extendida',
          'Resistentes a condiciones extremas',
          'Certificaciones internacionales'
        ],
        image: '/productos/fotovoltaico.avif',
        models: ['Residencial', 'Comercial', 'Industrial', 'Utility Scale']
      }
    ]
  },
  {
    category: "Sistemas de Protección",
    items: [
      {
        title: 'Sistemas de Puesta a Tierra Stavol',
        description: 'Sistemas completos de puesta a tierra para protección y seguridad de instalaciones eléctricas, garantizando la máxima seguridad operacional.',
        specs: [
          'Protección contra sobretensiones',
          'Materiales de alta conductividad',
          'Resistencia a la corrosión',
          'Fácil instalación',
          'Cumple normativas internacionales'
        ],
        image: '/productos/spt.jpg',
        models: ['Residencial', 'Industrial', 'Subestaciones']
      }
    ]
  }
];

const ProductsPage = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="text-center mb-12">
        <h1 className="text-4xl md:text-5xl font-bold mb-4 text-gray-900">
          Nuestros Productos
        </h1>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
          Descubre nuestra amplia gama de equipos y soluciones para la industria eléctrica, 
          desde equipos de medición de precisión hasta sistemas de energía renovable.
        </p>
      </div>

      {products.map((category) => (
        <div key={category.category} className="mb-16">
          <h2 className="text-3xl font-bold mb-8 text-center text-gray-800 border-b-2 border-gray-200 pb-4">
            {category.category}
          </h2>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8">
            {category.items.map((product, index) => (
              <Card key={index} className="hover:shadow-xl transition-shadow duration-300 overflow-hidden">
                <div className="relative h-64 overflow-hidden">
                  <Image 
                    src={product.image} 
                    alt={product.title} 
                    fill
                    className="object-cover transition-transform duration-300 hover:scale-105" 
                  />
                </div>
                
                <CardHeader>
                  <CardTitle className="text-xl text-gray-900 leading-tight">
                    {product.title}
                  </CardTitle>
                </CardHeader>
                
                <CardContent className="space-y-4">
                  <p className="text-gray-600 text-sm leading-relaxed">
                    {product.description}
                  </p>
                  
                  <div>
                    <h4 className="font-semibold text-gray-800 mb-2">Características principales:</h4>
                    <ul className="space-y-1">
                      {product.specs.slice(0, 3).map((spec, specIndex) => (
                        <li key={specIndex} className="text-sm text-gray-600 flex items-center">
                          <span className="w-2 h-2 bg-gray-500 rounded-full mr-2 flex-shrink-0"></span>
                          {spec}
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  {product.models && (
                    <div>
                      <h4 className="font-semibold text-gray-800 mb-2">Modelos disponibles:</h4>
                      <div className="flex flex-wrap gap-2">
                        {product.models.map((model, modelIndex) => (
                          <Badge key={modelIndex} variant="secondary" className="text-xs">
                            {model}
                          </Badge>
                        ))}
                      </div>
                    </div>
                  )}
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      ))}

      <div className="mt-16 bg-gray-50 rounded-lg p-8 text-center">
        <h2 className="text-2xl font-bold text-gray-800 mb-4">
          ¿Necesitas más información?
        </h2>
        <p className="text-gray-700 mb-6">
          Nuestro equipo de expertos está listo para ayudarte a encontrar la solución perfecta para tu proyecto.
        </p>
        <div className="space-x-4">
          <Button asChild size="lg">
            <Link href="/contacto">Contactar Ventas</Link>
          </Button>
          </div>
      </div>
    </div>
  );
};

export default ProductsPage;