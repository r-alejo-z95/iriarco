import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import Image from "next/image";
import Link from "next/link";

const highlights = [
  { icon: "🏆", label: "20+ años", description: "de experiencia comprobada" },
  { icon: "⚡", label: "500kV", description: "máximo voltaje manejado" },
  { icon: "🌿", label: "Eco-friendly", description: "tecnología sustentable" },
  { icon: "🎯", label: "100%", description: "proyectos exitosos" }
];

const values = [
  "Excelencia técnica",
  "Innovación constante", 
  "Compromiso ambiental",
  "Seguridad integral"
];

export default function AboutUsSnippet() {
  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="mx-auto max-w-6xl px-6">
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-16 items-center">
          {/* Content Side */}
          <div className="flex flex-col justify-center space-y-8">
            <div>
              <Badge variant="secondary" className="mb-4 bg-red-100 text-red-800">
                Sobre Iriarco
              </Badge>
              <h2 className="text-4xl font-bold text-gray-900 md:text-5xl mb-6 leading-tight">
                Más de 20 Años de Experiencia y Compromiso
              </h2>
              <p className="text-xl text-gray-600 leading-relaxed mb-6">
                En Iriarco, combinamos décadas de experiencia con un enfoque en la innovación 
                para ofrecer soluciones eléctricas seguras, eficientes y confiables. 
                Nuestra misión es impulsar el progreso a través de la excelencia en ingeniería.
              </p>
              <p className="text-lg text-gray-600 leading-relaxed">
                Desde electrificación rural hasta grandes proyectos industriales, 
                hemos demostrado nuestra capacidad para enfrentar los desafíos más complejos 
                del sector eléctrico ecuatoriano.
              </p>
            </div>

            {/* Values */}
            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Nuestros valores:</h3>
              <div className="grid grid-cols-2 gap-3">
                {values.map((value, index) => (
                  <div key={index} className="flex items-center">
                    <span className="w-2 h-2 bg-red-500 rounded-full mr-3"></span>
                    <span className="text-gray-700 text-sm">{value}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Button asChild size="lg">
                <Link href="/nosotros">Conoce más sobre nosotros</Link>
              </Button>
              <Button asChild size="lg" variant="outline">
                <Link href="/proyectos">Ver nuestros proyectos</Link>
              </Button>
            </div>
          </div>

          {/* Image and Stats Side */}
          <div className="space-y-8">
            {/* Main Image */}
            <div className="relative overflow-hidden rounded-xl shadow-xl">
              <Image
                src="/crew.jpeg"
                alt="Equipo de Iriarco trabajando en proyecto eléctrico de alta tensión"
                width={600}
                height={400}
                className="h-80 w-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/10 to-transparent"/>
            </div>

            {/* Highlights Grid */}
            <div className="grid grid-cols-2 gap-4">
              {highlights.map((highlight, index) => (
                <div key={index} className="bg-gray-50 rounded-lg p-6 text-center hover:bg-red-50 transition-colors duration-300">
                  <div className="text-2xl mb-2">{highlight.icon}</div>
                  <div className="text-2xl font-bold text-gray-900 mb-1">{highlight.label}</div>
                  <p className="text-xs text-gray-600 uppercase tracking-wide">{highlight.description}</p>
                </div>
              ))}
            </div>

            {/* Experience Banner */}
            <div className="bg-gradient-to-r from-red-600 to-red-700 rounded-lg p-6 text-white text-center">
              <h3 className="text-2xl font-bold mb-2">Experiencia Comprobada</h3>
              <p className="text-red-100">
                Desde 2003 transformando la infraestructura eléctrica del Ecuador
              </p>
            </div>
          </div>
        </div>

        {/* Bottom Stats */}
        <div className="mt-16 pt-12 border-t border-gray-200">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-3xl font-bold text-gray-900 mb-2">15+</div>
              <p className="text-gray-600">Proyectos principales completados</p>
            </div>
            <div>
              <div className="text-3xl font-bold text-gray-900 mb-2">50+</div>
              <p className="text-gray-600">Kilómetros de red instalada</p>
            </div>
            <div>
              <div className="text-3xl font-bold text-gray-900 mb-2">8+</div>
              <p className="text-gray-600">Empresas eléctricas atendidas</p>
            </div>
            <div>
              <div className="text-3xl font-bold text-gray-900 mb-2">24/7</div>
              <p className="text-gray-600">Soporte técnico disponible</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}