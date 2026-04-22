import { useEffect, useState } from 'react';
import { Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import PrimaryButton from '../UI/PrimaryButton';
import { navLinks } from '../../data/landingData';

export default function Navbar() {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isOpen, setIsOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => setIsScrolled(window.scrollY > 20);
        handleScroll();
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <header
            className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
                isScrolled ? 'bg-white/90 shadow-sm backdrop-blur-lg' : 'bg-transparent'
            }`}
        >
            <div className="container-zulo">
                <div className="flex h-20 items-center justify-between">
                    <a href="#inicio" className="inline-flex items-center" aria-label="Zulo Ingeniería">
                        <picture>
                            <source srcSet="/images/zulo_brand_movil.png" media="(max-width: 767px)" />
                            <img
                                src="/images/zulo_brand.png"
                                alt="Zulo Ingeniería"
                                className="h-[40px] sm:h-[64px] md:h-[110px] w-auto object-contain"
                                loading="eager"
                            />
                        </picture>
                    </a>

                    <nav className="hidden items-center gap-8 lg:flex">
                        {navLinks.map((item) => (
                            <a
                                key={item.href}
                                href={item.href}
                                className="text-sm font-medium text-zinc-700 transition hover:text-brand-gold"
                            >
                                {item.label}
                            </a>
                        ))}
                    </nav>

                    <div className="hidden lg:block">
                        <PrimaryButton href="#contacto">Solicitar cotización</PrimaryButton>
                    </div>

                    <button
                        type="button"
                        onClick={() => setIsOpen((prev) => !prev)}
                        className="inline-flex rounded-xl border border-brand-border p-2 text-zinc-700 lg:hidden"
                        aria-label="Abrir menú"
                    >
                        {isOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
                    </button>
                </div>
            </div>

            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, y: -14 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -14 }}
                        className="border-t border-brand-border bg-white/95 backdrop-blur-xl lg:hidden"
                    >
                        <div className="container-zulo space-y-4 py-6">
                            {navLinks.map((item) => (
                                <a
                                    key={item.href}
                                    href={item.href}
                                    onClick={() => setIsOpen(false)}
                                    className="block text-sm font-medium text-zinc-700 transition hover:text-brand-gold"
                                >
                                    {item.label}
                                </a>
                            ))}
                            <PrimaryButton href="#contacto" className="w-full">
                                Solicitar cotización
                            </PrimaryButton>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </header>
    );
}
