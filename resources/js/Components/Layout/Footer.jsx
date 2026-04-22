import { Mail, MapPin, Phone } from 'lucide-react';

function InstagramIcon({ className = 'h-4 w-4' }) {
    return (
        <svg viewBox="0 0 24 24" fill="none" className={className} aria-hidden="true">
            <rect x="3" y="3" width="18" height="18" rx="5" stroke="currentColor" strokeWidth="1.8" />
            <circle cx="12" cy="12" r="4.2" stroke="currentColor" strokeWidth="1.8" />
            <circle cx="17.3" cy="6.7" r="1.1" fill="currentColor" />
        </svg>
    );
}

export default function Footer() {
    const quickLinks = [
        { label: 'Inicio', href: '#inicio' },
        { label: 'Nosotros', href: '#nosotros' },
        { label: 'Servicios', href: '#servicios' },
        { label: 'Proyectos', href: '#proyectos' },
        { label: 'Interventoria', href: '#interventoria' },
        { label: 'Contacto', href: '#contacto' },
    ];
    const services = ['Construccion', 'Interventoria', 'Remodelaciones', 'Consultoria', 'Supervision'];

    return (
        <footer className="border-t border-brand-border bg-brand-stone">
            <div className="container-zulo py-14">
                <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-4">
                    <div>
                        <h3 className="text-lg font-semibold text-brand-charcoal">Zulo Ingenieria y Construcciones S.A.S.</h3>
                        <p className="mt-4 text-sm leading-relaxed text-zinc-600">
                            Ingenieria civil, ejecucion de obras e interventoria tecnica con enfoque en resultados reales.
                        </p>
                    </div>
                    <div>
                        <h4 className="text-sm font-semibold uppercase tracking-[0.12em] text-zinc-500">Enlaces rapidos</h4>
                        <ul className="mt-4 space-y-2 text-sm text-zinc-600">
                            {quickLinks.map((item) => (
                                <li key={item.href}>
                                    <a href={item.href} className="hover:text-brand-gold">
                                        {item.label}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>
                    <div>
                        <h4 className="text-sm font-semibold uppercase tracking-[0.12em] text-zinc-500">Servicios</h4>
                        <ul className="mt-4 space-y-2 text-sm text-zinc-600">
                            {services.map((item) => (
                                <li key={item}>{item}</li>
                            ))}
                        </ul>
                    </div>
                    <div>
                        <h4 className="text-sm font-semibold uppercase tracking-[0.12em] text-zinc-500">Contacto</h4>
                        <ul className="mt-4 space-y-3 text-sm text-zinc-600">
                            <li className="flex items-center gap-2">
                                <Mail className="h-4 w-4" /> contacto@zuloingenieria.com
                            </li>
                            <li className="flex items-center gap-2">
                                <Phone className="h-4 w-4" /> +57 310 501 4968
                            </li>
                            <li className="flex items-center gap-2">
                                <MapPin className="h-4 w-4" /> Manizales, Colombia
                            </li>
                        </ul>
                        <div className="mt-5 flex items-center gap-3 text-zinc-600">
                            <a
                                href="https://www.instagram.com/zuloingenieria/"
                                target="_blank"
                                rel="noreferrer"
                                className="rounded-full border border-brand-border p-2 hover:text-brand-gold"
                                aria-label="Instagram"
                            >
                                <InstagramIcon className="h-4 w-4" />
                            </a>
                        </div>
                    </div>
                </div>
                <div className="mt-10 border-t border-brand-border pt-6 text-center text-sm text-zinc-500">
                    © {new Date().getFullYear()} Zulo Ingenieria y Construcciones S.A.S. Todos los derechos reservados.
                </div>
            </div>
        </footer>
    );
}
