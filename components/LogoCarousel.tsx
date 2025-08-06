
'use client'

import useEmblaCarousel from 'embla-carousel-react'
import Image from 'next/image'
import Autoscroll from 'embla-carousel-auto-scroll'

const logos = [
    '/hero/logo-carrousel/aps.svg',
    '/hero/logo-carrousel/centrosur.png',
    '/hero/logo-carrousel/cnelep.png',
    '/hero/logo-carrousel/eeq.png',
    '/hero/logo-carrousel/eersa.png',
    '/hero/logo-carrousel/emelnorte.png',
]

export default function LogoCarousel() {
    const [emblaRef] = useEmblaCarousel({ loop: true }, [Autoscroll({ speed: 1 })])

    return (
        <div className="embla" ref={emblaRef}>
            <div className="embla__container items-center">
                {logos.map((logo, index) => (
                    <div
                        className="embla__slide"
                        key={index}>
                        <Image
                            className="h-fit w-28"
                            src={logo}
                            alt="Logo"
                            width={300}
                            height={121}
                        />
                    </div>
                ))}
            </div>
        </div>
    )
}
