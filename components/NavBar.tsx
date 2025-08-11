'use client';

import Link from 'next/link'
import { Logo } from '@/components/Logo'
import { Menu, X } from 'lucide-react'
import { Button } from '@/components/ui/button'
import {useState, useEffect, useRef} from 'react'
import { cn } from '@/lib/utils'
import { motion, AnimatePresence } from 'framer-motion'

interface MenuItem {
    name: string;
    href: string;
}

const menuItems: MenuItem[] = [
    { name: 'Nosotros', href: '/nosotros' },
    { name: 'Servicios', href: '/servicios' },
    { name: 'Productos', href: '/productos' },
    { name: 'Proyectos', href: '/proyectos' },
    { name: 'Contacto', href: '/contacto' },
]

export default function NavBar() {
    const [menuState, setMenuState] = useState<boolean>(false)
    const [isScrolled, setIsScrolled] = useState<boolean>(false)
    const navRef = useRef<HTMLElement>(null)

    useEffect(() => {
        const handleScroll = (): void => {
            setIsScrolled(window.scrollY > 50)
        }
        window.addEventListener('scroll', handleScroll)
        return () => window.removeEventListener('scroll', handleScroll)
    }, [])

    useEffect(() => {
        const handleClickOutside = (event: MouseEvent): void => {
            if (navRef.current && !navRef.current.contains(event.target as Node)) {
                setMenuState(false)
            }
        }

        if (menuState) {
            document.addEventListener('mousedown', handleClickOutside)
        }

        return () => {
            document.removeEventListener('mousedown', handleClickOutside)
        }
    }, [menuState])

    return (
        <nav
            ref={navRef}
            data-state={menuState && 'active'}
            className={cn('sticky top-0 z-20 w-full transition-all duration-300', isScrolled && 'bg-background/75 border-b border-black/5 backdrop-blur-lg')}>
            <div className="mx-auto max-w-5xl px-6">
                <div className="relative flex flex-wrap items-center justify-between gap-6 py-3 lg:gap-0">
                    <div className="flex w-full justify-between gap-6 lg:w-auto">
                        <Link
                            href="/"
                            aria-label="home"
                            className="flex items-center space-x-2"
                            onClick={() => setMenuState(false)}>
                            <Logo />
                        </Link>

                        <button
                            onClick={() => setMenuState(!menuState)}
                            aria-label={menuState === true ? 'Close Menu' : 'Open Menu'}
                            className="relative z-20 -m-2.5 -mr-4 block cursor-pointer p-2.5 lg:hidden">
                            <Menu className="in-data-[state=active]:rotate-180 in-data-[state=active]:scale-0 in-data-[state=active]:opacity-0 m-auto size-6 duration-200" />
                            <X className="in-data-[state=active]:rotate-0 in-data-[state=active]:scale-100 in-data-[state=active]:opacity-100 absolute inset-0 m-auto size-6 -rotate-180 scale-0 opacity-0 duration-200" />
                        </button>
                    </div>

                    <AnimatePresence>
                        {menuState && (
                            <motion.div 
                                initial={{ opacity: 0, y: -200 }}
                                animate={{ opacity: 1, y: 0 }}
                                exit={{ opacity: 0, y: -200 }}
                                transition={{ duration: 0.2 }}
                                className="absolute left-0 top-full mt-3 w-full rounded-3xl border bg-background p-6 shadow-2xl shadow-zinc-300/20 lg:hidden">
                                <div className="w-full">
                                    <ul className="space-y-6 text-base">
                                        {menuItems.map((item, index) => (
                                            <li key={index}>
                                                <Button
                                                    asChild
                                                    variant="ghost"
                                                    size="sm"
                                                    className="w-full justify-start"
                                                    onClick={() => setMenuState(false)}>
                                                    <Link
                                                        href={item.href}
                                                        className="text-muted-foreground hover:text-accent-foreground block duration-150">
                                                        <span>{item.name}</span>
                                                    </Link>
                                                </Button>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </motion.div>
                        )}
                    </AnimatePresence>

                    <div className="hidden lg:relative lg:mt-0 lg:w-fit lg:flex lg:items-center lg:justify-end lg:gap-6 lg:space-y-0 lg:border-transparent lg:bg-transparent lg:p-0 lg:shadow-none dark:shadow-none">
                        <div className="w-full">
                            <ul className="space-y-6 text-base lg:flex lg:gap-1 lg:space-y-0">
                                {menuItems.map((item, index) => (
                                    <li key={index}>
                                        <Button
                                            asChild
                                            variant="ghost"
                                            size="sm"
                                            className="w-full justify-start lg:w-auto lg:justify-center">
                                            <Link
                                                href={item.href}
                                                className="text-muted-foreground hover:text-accent-foreground block duration-150 lg:text-base">
                                                <span>{item.name}</span>
                                            </Link>
                                        </Button>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </nav>
    )
}