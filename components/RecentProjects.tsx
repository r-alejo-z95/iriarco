import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import Image from "next/image";
import Link from "next/link";

const projects = [
  {
    image: "/proyectos/aerovia.jpg",
    title: "Aerovía 69 KV",
    description: "Instalación de cableado Hendrix desviando una línea de transmisión para evitar una estación de Aerovía.",
  },
  {
    image: "/proyectos/antenas.jpg",
    title: "Antenas del Pichincha",
    description: "Red Hendrix instalada para alimentar las antenas de telecomunicaciones sobre el Cerro Pichincha.",
  },
];

export default function RecentProjects() {
  return (
    <section className="bg-muted py-16 md:py-24">
      <div className="mx-auto max-w-5xl px-6">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-medium md:text-4xl">Proyectos Destacados</h2>
          <p className="text-muted-foreground mt-4 text-lg">
            Casos de éxito que demuestran nuestra experiencia y compromiso con la calidad.
          </p>
        </div>
        <div className="mt-12 flex gap-8 md:gap-0 flex-col md:flex-row justify-evenly">
          {projects.map((project, index) => (
            <Card key={index} className="overflow-hidden w-xs">
              <CardHeader className="p-0">
                <Image
                  src={project.image}
                  alt={project.title}
                  width={600}
                  height={400}
                  className="h-48 w-full object-cover"
                />
              </CardHeader>
              <CardContent className="p-6">
                <CardTitle className="mb-2">{project.title}</CardTitle>
                <CardDescription>{project.description}</CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
        <div className="mt-12 text-center">
          <Button asChild size="lg">
            <Link href="/proyectos">Ver todos los proyectos</Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
