import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { ChevronRight } from 'lucide-react'
import Image from 'next/image'

export default function Hero() {
    return (
        <>
            <main className="overflow-hidden">
                <section className="bg-linear-to-b to-muted from-background">
                    <div className="relative pt-18 pb-36">
                        <div className="relative z-10 mx-auto w-full max-w-5xl px-6">
                            <div className="md:w-1/2">
                                <div>
                                    <h1 className="max-w-md text-balance text-5xl font-medium md:text-6xl">Soluciones Eléctricas de Alta y Media Tensión</h1>
                                    <p className="text-muted-foreground my-8 max-w-2xl text-balance text-xl">Con más de 20 años de experiencia, ofrecemos soluciones integrales y personalizadas para tus proyectos eléctricos.</p>

                                    <div className="flex items-center gap-3">
                                        <Button
                                            asChild
                                            size="lg"
                                            className="pr-4.5">
                                            <Link href="/contacto">
                                                <span className="text-nowrap">Contáctanos</span>
                                                <ChevronRight className="opacity-50" />
                                            </Link>
                                        </Button>
                                        <Button
                                            key={2}
                                            asChild
                                            size="lg"
                                            variant="outline">
                                            <Link href="/proyectos">
                                                <span className="text-nowrap">Ver Proyectos</span>
                                            </Link>
                                        </Button>
                                    </div>
                                </div>

                                <div className="mt-10">
                                    <p className="text-muted-foreground">Trabajamos con:</p>
                                    <div className="mt-6 grid max-w-sm grid-cols-3 gap-3">
                                        <div className="flex">
                                            <Image
                                                className="h-8 w-fit"
                                                src="/hero/eeq1.png"
                                                alt="Empresa Eléctrica Quito Logo 1"
                                                width={300}
                                                height={121}
                                            />
                                        </div>
                                        <div className="flex">
                                            <Image
                                                className="h-8 w-fit"
                                                src="/hero/eeq2.png"
                                                alt="Empresa Eléctrica Quito Logo 2"
                                                width={300}
                                                height={121}
                                            />
                                        </div>
                                        <div className="flex">
                                            <Image
                                                className="h-8 w-fit"
                                                src="/hero/eeq3.png"
                                                alt="Empresa Eléctrica Quito Logo 3"
                                                width={300}
                                                height={121}
                                            />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="perspective-near mt-24 translate-x-12 md:absolute md:-right-6 md:bottom-16 md:left-1/2 md:top-40 md:mt-0 md:translate-x-0">
                            <div className="before:border-foreground/5 before:bg-foreground/5 relative h-full before:absolute before:-inset-x-4 before:bottom-7 before:top-0 before:rounded-[calc(var(--radius)+1rem)] before:border">
                                <div className="bg-background rounded-(--radius) shadow-foreground/10 ring-foreground/5 relative h-full -translate-y-12 overflow-hidden border border-transparent shadow-md ring-1">
                                    <Image
                                        src="/Hero/hero.jpg"
                                        alt="A high voltage tower with a blue sky in the background"
                                        width="1024"
                                        height="682"
                                        sizes="(max-width: 768px) 100vw, 50vw"
                                        className="object-top-left size-full object-cover"
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </main>
        </>
    )
}