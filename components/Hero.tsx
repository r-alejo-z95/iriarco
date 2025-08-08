'use client'

import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { ChevronRight } from 'lucide-react'
import Image from 'next/image'
import LogoCarousel from './LogoCarousel'

export default function Hero() {
    return (
        <>
            <main className="overflow-hidden">
                <section className="bg-gradient-to-b from-gray-50 to-white">
                    <div className="relative pt-18 pb-36">
                        <div className="relative z-10 mx-auto w-full max-w-5xl px-6">
                            <div className="md:w-1/2">
                                <div>
                                    <h1 className="max-w-md text-balance text-5xl font-bold text-gray-900 md:text-6xl">
                                        Soluciones Eléctricas de Alta y Media Tensión
                                    </h1>
                                    <p className="text-gray-600 my-8 max-w-2xl text-balance text-xl leading-relaxed">
                                        Con más de 20 años de experiencia, ofrecemos soluciones integrales y personalizadas 
                                        para tus proyectos eléctricos más exigentes.
                                    </p>

                                    <div className="flex items-center gap-4">
                                        <Button
                                            asChild
                                            size="lg"
                                        >
                                            <Link href="/contacto">
                                                <span className="text-nowrap">Contáctanos</span>
                                                <ChevronRight className="ml-2 opacity-80" />
                                            </Link>
                                        </Button>
                                        <Button
                                            key={2}
                                            asChild
                                            size="lg"
                                            variant="outline"
                                        >
                                            <Link href="/proyectos">
                                                <span className="text-nowrap">Ver Proyectos</span>
                                            </Link>
                                        </Button>
                                    </div>
                                </div>

                                <div className="mt-12">
                                    <p className="text-gray-600 font-medium mb-2">Empresas que confían en nosotros:</p>
                                    <div className="mt-6 mr-6">
                                        <LogoCarousel />
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="perspective-near mt-24 translate-x-12 md:absolute md:-right-6 md:bottom-16 md:left-1/2 md:top-40 md:mt-0 md:translate-x-0">
                            <div className="before:border-gray-200 before:bg-gray-100/50 relative h-full before:absolute before:-inset-x-4 before:bottom-7 before:top-0 before:rounded-[calc(var(--radius)+1rem)] before:border">
                                <div className="bg-white rounded-xl shadow-xl ring-1 ring-gray-200 relative h-full -translate-y-12 overflow-hidden border border-transparent">
                                    <Image
                                        src="/hero/hero.jpg"
                                        alt="Torre de alta tensión con cielo azul de fondo - Proyectos eléctricos Iriarco"
                                        width="1024"
                                        height="682"
                                        sizes="(max-width: 768px) 100vw, 50vw"
                                        className="object-top-left size-full object-cover"
                                        priority
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