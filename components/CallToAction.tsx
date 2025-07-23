import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function CallToAction() {
  return (
    <section className="bg-primary text-primary-foreground py-16 md:py-24">
      <div className="mx-auto max-w-5xl px-6 text-center">
        <h2 className="text-3xl font-medium md:text-4xl">Hablemos de tu próximo proyecto</h2>
        <p className="mx-auto mt-4 max-w-2xl text-lg text-primary-foreground/80">
          ¿Listo para empezar? Nuestro equipo de expertos está preparado para ayudarte a encontrar la mejor solución para tus necesidades.
        </p>
        <div className="mt-8">
          <Button asChild size="lg" variant="outline" className="text-primary hover:text-white">
            <Link href="/contacto">Ponte en contacto</Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
