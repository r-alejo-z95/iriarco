import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";

export default function AboutUsSnippet() {
  return (
    <section className="py-16 md:py-24">
      <div className="mx-auto max-w-5xl px-6">
        <div className="grid gap-12 md:grid-cols-2 md:gap-16">
          <div className="flex flex-col justify-center">
            <h2 className="text-3xl font-medium md:text-4xl">Más de 20 Años de Experiencia y Compromiso</h2>
            <p className="text-muted-foreground mt-4 text-lg">
              En Iriarco, combinamos décadas de experiencia con un enfoque en la innovación para ofrecer soluciones eléctricas seguras, eficientes y confiables. Nuestra misión es impulsar el progreso a través de la excelencia en ingeniería.
            </p>
            <div className="mt-8">
              <Button asChild size="lg">
                <Link href="/nosotros">Conoce más sobre nosotros</Link>
              </Button>
            </div>
          </div>
          <div className="overflow-hidden rounded-lg">
            <Image
              src="/placeholder.svg"
              alt="Equipo de Iriarco trabajando en un proyecto"
              width={600}
              height={400}
              className="h-full w-full object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
