import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Lightbulb, Wrench, Zap, CheckCircle } from "lucide-react";
import Link from "next/link";

const services = [
  {
    icon: <Zap className="size-8" />,
    title: "Instalaciones de Alta Tensión",
    description: "Diseño y ejecución de subestaciones y líneas de transmisión de alta tensión, garantizando la máxima eficiencia y seguridad.",
    features: ["Hasta 500kV", "Certificación internacional", "Equipos SensorLink"],
  },
  {
    icon: <Lightbulb className="size-8" />,
    title: "Mantenimiento de Redes Eléctricas", 
    description: "Ofrecemos programas de mantenimiento preventivo y correctivo para asegurar la continuidad y confiabilidad de tu suministro eléctrico.",
    features: ["Mantenimiento 24/7", "Tecnología Hendrix", "Respuesta inmediata"],
  },
  {
    icon: <Wrench className="size-8" />,
    title: "Consultoría y Proyectos a Medida",
    description: "Desarrollamos soluciones de ingeniería personalizadas que se adaptan a las necesidades específicas de tu proyecto.",
    features: ["Análisis técnico", "Soluciones ecológicas", "Gestión integral"],
  },
];

const stats = [
  { number: "20+", label: "Años de experiencia" },
  { number: "100+", label: "Proyectos completados" },
  { number: "500kV", label: "Máximo voltaje" },
  { number: "24/7", label: "Soporte técnico" }
];

export default function FeaturedServices() {
  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="mx-auto max-w-6xl px-6">
        {/* Header */}
        <div className="mx-auto max-w-3xl text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 md:text-5xl mb-4">
            Nuestros Servicios
          </h2>
          <p className="text-xl text-gray-600 leading-relaxed">
            Desde la planificación hasta la ejecución, ofrecemos soluciones completas 
            para tus necesidades eléctricas más exigentes.
          </p>
        </div>

        {/* Stats Bar */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
          {stats.map((stat, index) => (
            <div key={index} className="text-center">
              <div className="bg-gray-50 rounded-lg p-6 hover:bg-red-50 transition-colors duration-300">
                <div className="text-3xl font-bold text-gray-900 mb-2">{stat.number}</div>
                <div className="text-sm text-gray-600 font-medium">{stat.label}</div>
              </div>
            </div>
          ))}
        </div>

        {/* Services Grid */}
        <div className="grid gap-8 md:grid-cols-3 mb-12">
          {services.map((service, index) => (
            <Card key={index} className="hover:shadow-xl transition-shadow duration-300 border-gray-200">
              <CardHeader className="text-center pb-4">
                <div className="bg-red-100 text-red-600 mb-4 rounded-full p-4 w-16 h-16 flex items-center justify-center mx-auto">
                  {service.icon}
                </div>
                <CardTitle className="text-xl text-gray-900 leading-tight">
                  {service.title}
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <CardDescription className="text-gray-600 leading-relaxed text-center">
                  {service.description}
                </CardDescription>
                
                <div className="pt-4 border-t border-gray-100">
                  <ul className="space-y-2">
                    {service.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center text-sm text-gray-600">
                        <CheckCircle className="w-4 h-4 text-red-500 mr-2 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center bg-gray-50 rounded-lg p-8">
          <h3 className="text-2xl font-bold text-gray-900 mb-4">
            ¿Necesitas una solución personalizada?
          </h3>
          <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
            Nuestro equipo de expertos está listo para analizar tu proyecto y ofrecerte 
            la mejor solución técnica.
          </p>
          <div className="flex flex-col justify-center sm:flex-row gap-4">
            <Button asChild size="lg">
              <Link href="/servicios">Ver todos los servicios</Link>
            </Button>
            <Button asChild size="lg" variant="outline">
              <Link href="/contacto">Solicitar Cotización</Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}