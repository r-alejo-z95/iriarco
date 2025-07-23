import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Lightbulb, Wrench, Zap } from "lucide-react";
import Link from "next/link";

const services = [
  {
    icon: <Zap className="size-8" />,
    title: "Instalaciones de Alta Tensión",
    description: "Diseño y ejecución de subestaciones y líneas de transmisión de alta tensión, garantizando la máxima eficiencia y seguridad.",
  },
  {
    icon: <Lightbulb className="size-8" />,
    title: "Mantenimiento de Redes Eléctricas",
    description: "Ofrecemos programas de mantenimiento preventivo y correctivo para asegurar la continuidad y confiabilidad de tu suministro eléctrico.",
  },
  {
    icon: <Wrench className="size-8" />,
    title: "Consultoría y Proyectos a Medida",
    description: "Desarrollamos soluciones de ingeniería personalizadas que se adaptan a las necesidades específicas de tu proyecto.",
  },
];

export default function FeaturedServices() {
  return (
    <section className="py-16 md:py-24">
      <div className="mx-auto max-w-5xl px-6">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-medium md:text-4xl">Nuestros Servicios</h2>
          <p className="text-muted-foreground mt-4 text-lg">
            Desde la planificación hasta la ejecución, ofrecemos soluciones completas para tus necesidades eléctricas.
          </p>
        </div>
        <div className="mt-12 grid gap-8 md:grid-cols-3">
          {services.map((service, index) => (
            <Card key={index}>
              <CardHeader className="items-center">
                <div className="bg-primary/10 text-primary mb-4 rounded-full p-3">
                  {service.icon}
                </div>
                <CardTitle className="text-center">{service.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-center">
                  {service.description}
                </CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
        <div className="mt-12 text-center">
          <Button asChild size="lg">
            <Link href="/servicios">Ver todos los servicios</Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
