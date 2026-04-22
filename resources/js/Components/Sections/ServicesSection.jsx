import { useLayoutEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import SectionHeading from '../UI/SectionHeading';
import InfoCard from '../UI/InfoCard';

gsap.registerPlugin(ScrollTrigger);

export default function ServicesSection({ services }) {
    const sectionRef = useRef(null);
    const pinRef = useRef(null);
    const viewportRef = useRef(null);
    const trackRef = useRef(null);

    useLayoutEffect(() => {
        if (!sectionRef.current || !pinRef.current || !viewportRef.current || !trackRef.current) return;

        const mm = gsap.matchMedia();
        const ctx = gsap.context(() => {
            mm.add('(min-width: 1024px)', () => {
                const setSnapPaused = (paused) => {
                    document.documentElement.classList.toggle('snap-paused', paused);
                };

                const getDistance = () => Math.max(0, trackRef.current.scrollWidth - viewportRef.current.clientWidth);
                const getCards = () => Array.from(trackRef.current.querySelectorAll('[data-service-card="true"]'));

                const getSnapStep = () => {
                    const cards = getCards();
                    if (cards.length < 2) return 1;
                    const distance = getDistance();
                    if (!distance) return 1;
                    const delta = cards[1].offsetLeft - cards[0].offsetLeft;
                    return Math.min(1, Math.max(0.001, delta / distance));
                };

                gsap.to(trackRef.current, {
                    x: () => -getDistance(),
                    ease: 'none',
                    scrollTrigger: {
                        trigger: sectionRef.current,
                        start: 'top top',
                        end: () => `+=${getDistance() + window.innerHeight * 0.7}`,
                        pin: pinRef.current,
                        scrub: 1.9,
                        anticipatePin: 1.2,
                        fastScrollEnd: false,
                        preventOverlaps: true,
                        invalidateOnRefresh: true,
                        onEnter: () => setSnapPaused(true),
                        onEnterBack: () => setSnapPaused(true),
                        onLeave: () => setSnapPaused(false),
                        onLeaveBack: () => setSnapPaused(false),
                        snap: getCards().length > 1
                            ? {
                                  snapTo: (value) => {
                                      const step = getSnapStep();
                                      return gsap.utils.clamp(0, 1, Math.round(value / step) * step);
                                  },
                                  duration: { min: 0.2, max: 0.55 },
                                  delay: 0.02,
                                  ease: 'power3.inOut',
                              }
                            : false,
                    },
                });
            });
        }, sectionRef);

        return () => {
            document.documentElement.classList.remove('snap-paused');
            mm.revert();
            ctx.revert();
        };
    }, [services.length]);

    return (
        <section
            id="servicios"
            ref={sectionRef}
            className="snap-none bg-[linear-gradient(180deg,rgba(22,34,56,0.06)_0%,rgba(255,255,255,1)_100%)]"
        >
            <div ref={pinRef} className="flex min-h-[100svh] items-center">
                <div className="container-zulo py-14 md:py-20">
                    <SectionHeading
                        badge="Servicios"
                        title="Soluciones técnicas para construcción, supervisión e interventoría."
                        description="Desplázate para recorrer nuestros servicios técnicos sin salir de esta sección."
                        align="center"
                    />

                    <div ref={viewportRef} className="mt-12 overflow-visible lg:overflow-hidden">
                        <div ref={trackRef} className="flex flex-col gap-5 lg:flex-row lg:will-change-transform">
                            {services.map((service) => (
                                <div
                                    key={service.title}
                                    data-service-card="true"
                                    className="w-full shrink-0 lg:w-[82vw] lg:max-w-[380px] xl:w-[42vw] 2xl:w-[30vw]"
                                >
                                    <InfoCard {...service} />
                                </div>
                            ))}
                            <div className="hidden w-1 shrink-0 lg:block" aria-hidden="true" />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
