
import { Button } from "@/components/ui/button";
import { Phone, Mail, MapPin, Clock } from "lucide-react";
import Link from "next/link";

const contactInfo = [
  {
    icon: <Mail className="w-6 h-6 text-red-200" />,
    label: "Email",
    value: "galban@iriarco.com"
  },
  {
    icon: <Phone className="w-6 h-6 text-red-200" />,
    label: "Teléfono",
    value: "098 449 1120"
  },
  {
    icon: <MapPin className="w-6 h-6 text-red-200" />,
    label: "Ubicación",
    value: "San Salvador E7-85 y Martin Carrion, Quito, Ecuador"
  },
  {
    icon: <Clock className="w-6 h-6 text-red-200" />,
    label: "Horario",
    value: "Lun - Vie: 8:00 - 17:00"
  }
];

export default function CallToAction() {
  return (
    <section className="bg-gradient-to-br from-red-600 via-red-700 to-red-800 text-white py-16 md:py-24 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-0 w-96 h-96 bg-white rounded-full -translate-x-48 -translate-y-48"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-white rounded-full translate-x-48 translate-y-48"></div>
      </div>
      
      <div className="mx-auto max-w-6xl px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content Side */}
          <div>
            <div className="flex flex-col items-center lg:items-start text-center lg:text-left">
              <h2 className="text-4xl font-bold md:text-5xl mb-6 leading-tight">
                Hablemos de tu próximo proyecto
              </h2>
              <p className="text-xl text-red-100 leading-relaxed mb-8 max-w-2xl">
                ¿Listo para empezar? Nuestro equipo de expertos está preparado para ayudarte
                a encontrar la mejor solución para tus necesidades eléctricas más exigentes.
              </p>
              {/* Key Benefits */}
              <div className="grid sm:grid-cols-2 gap-4 mb-8 w-full max-w-md lg:max-w-none">
                {[
                  "Consulta gratuita inicial",
                  "+20 años de experiencia",
                  "Soluciones personalizadas",
                  "Soporte técnico 24/7"
                ].map((benefit, index) => (
                  <div key={index} className="flex items-center justify-center lg:justify-start">
                    <div className="w-2 h-2 bg-white rounded-full mr-3"></div>
                    <span className="text-red-100">{benefit}</span>
                  </div>
                ))}
              </div>
            </div>
            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Button asChild size="lg" variant="outline" className="border-white text-foreground hover:bg-accent hover:text-accent-foreground">
                <Link href="/contacto">Contáctanos</Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="border-white text-foreground hover:bg-accent hover:text-accent-foreground">
                <Link href="/proyectos">Ver Proyectos</Link>
              </Button>
            </div>
          </div>

          {/* Contact Info Side */}
          <div className="bg-black/20 p-8 rounded-lg backdrop-blur-sm">
            <h3 className="text-2xl font-bold mb-6">Información de Contacto</h3>
            <div className="space-y-6">
              {contactInfo.map((item, index) => (
                <div key={index} className="flex items-start gap-4">
                  <div className="flex-shrink-0 mt-1">
                    {item.icon}
                  </div>
                  <div>
                    <p className="font-semibold text-lg">{item.label}</p>
                    <p className="text-red-100">{item.value}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
