import { useEffect, useRef } from 'react';
import { BadgeCheck, Building2, ShieldCheck } from 'lucide-react';
import { gsap } from 'gsap';
import PrimaryButton from '../UI/PrimaryButton';
import SecondaryButton from '../UI/SecondaryButton';

const HERO_TITLE = '¡Construimos, tus sueños!';

export default function HeroSection() {
    const titleTextRef = useRef(null);
    const paragraphRef = useRef(null);
    const buttonsRef = useRef(null);
    const badgesRef = useRef(null);

    useEffect(() => {
        const titleEl = titleTextRef.current;
        const paragraphEl = paragraphRef.current;
        const buttonsEl = buttonsRef.current;
        const badgesEl = badgesRef.current;

        if (!titleEl || !paragraphEl || !buttonsEl || !badgesEl) return;

        titleEl.textContent = '';
        gsap.set([paragraphEl, buttonsEl, badgesEl], { autoAlpha: 0, y: 20 });

        const counter = { value: 0 };
        const titleTween = gsap.to(counter, {
            value: HERO_TITLE.length,
            duration: 3.8,
            ease: 'none',
            onUpdate: () => {
                titleEl.textContent = HERO_TITLE.slice(0, Math.floor(counter.value));
            },
            onComplete: () => {
                gsap.to([paragraphEl, buttonsEl, badgesEl], {
                    autoAlpha: 1,
                    y: 0,
                    duration: 0.55,
                    ease: 'power2.out',
                    stagger: 0.14,
                });
            },
        });

        return () => {
            titleTween.kill();
        };
    }, []);

    return (
        <section id="inicio" className="snap-section relative overflow-hidden bg-[rgba(237,180,75,0.12)] pt-20 md:pt-28">
            <div className="pointer-events-none absolute inset-0">
                <video
                    className="h-full w-full object-cover opacity-45"
                    autoPlay
                    muted
                    loop
                    playsInline
                    preload="metadata"
                    poster="/videos/hero-overlay-poster.jpg"
                    aria-hidden="true"
                >
                    <source src="/videos/hero-overlay-mobile.mp4" type="video/mp4" media="(max-width: 767px)" />
                    <source src="/videos/hero-overlay.mp4" type="video/mp4" media="(min-width: 768px)" />
                    <source src="/videos/hero-overlay.mp4" type="video/mp4" />
                </video>
                <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(255,255,255,0.78)_0%,rgba(255,255,255,0.38)_45%,rgba(255,255,255,0.82)_100%)]" />
                <div className="absolute inset-x-0 top-0 h-32 bg-gradient-to-b from-white/70 to-transparent" />
                <div className="absolute inset-x-0 bottom-0 h-36 bg-gradient-to-t from-white/80 to-transparent" />
            </div>

            <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,_rgba(200,155,60,0.22),_transparent_45%)]" />

            <div className="container-zulo relative py-6 md:py-14 lg:py-24">
                <div className="flex justify-center">
                    <div className="mx-auto max-w-4xl space-y-7 text-center">
                        <div className="inline-flex rounded-full border border-brand-border bg-brand-stone px-4 py-2 text-xs font-semibold uppercase tracking-[0.14em] text-zinc-700">
                            Ingeniería y construcción con ejecución real
                        </div>

                        <h1 className="mx-auto max-w-3xl text-5xl font-semibold leading-tight text-brand-charcoal md:text-6xl">
                            <span ref={titleTextRef} />
                        </h1>

                        <p ref={paragraphRef} className="mx-auto max-w-2xl text-lg leading-relaxed text-zinc-700 md:text-xl">
                            Empresa de ingeniería y construcción especializada en obras civiles, interventoría, supervisión
                            técnica, adecuaciones y consultoría para proyectos residenciales, comerciales e industriales.
                        </p>

                        <div ref={buttonsRef} className="flex flex-wrap justify-center gap-3">
                            <PrimaryButton href="#contacto">Solicitar asesoría</PrimaryButton>
                            <SecondaryButton href="#proyectos">Ver proyectos</SecondaryButton>
                        </div>

                        <div ref={badgesRef} className="flex flex-wrap justify-center gap-3 pt-2">
                            {[
                                { icon: ShieldCheck, text: 'Control técnico continuo' },
                                { icon: Building2, text: 'Obras civiles y adecuaciones' },
                                { icon: BadgeCheck, text: 'Equipo experto en campo' },
                            ].map((item) => (
                                <span
                                    key={item.text}
                                    className="inline-flex items-center gap-2 rounded-full border border-brand-border bg-white/95 px-4 py-2 text-sm font-medium text-zinc-700 md:text-base"
                                >
                                    <item.icon className="h-4 w-4 text-brand-gold md:h-[18px] md:w-[18px]" />
                                    {item.text}
                                </span>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
