import { useLayoutEffect, useMemo, useRef, useState } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import SectionHeading from '../UI/SectionHeading';
import ProjectCard from '../UI/ProjectCard';

gsap.registerPlugin(ScrollTrigger);

export default function ProjectsSection({ projects, categories }) {
    const [activeCategory, setActiveCategory] = useState('Todos');
    const desktopRevealRef = useRef(null);
    const desktopGridRef = useRef(null);

    const filteredProjects = useMemo(() => {
        if (activeCategory === 'Todos') {
            return projects;
        }
        return projects.filter((project) => project.category === activeCategory);
    }, [projects, activeCategory]);

    useLayoutEffect(() => {
        if (!desktopRevealRef.current || !desktopGridRef.current) return;

        const mm = gsap.matchMedia();
        const ctx = gsap.context(() => {
            mm.add('(min-width: 1024px)', () => {
                const cards = gsap.utils.toArray('[data-project-seq="true"]', desktopGridRef.current);
                if (!cards.length) return;

                const setSnapPaused = (paused) => {
                    document.documentElement.classList.toggle('snap-paused', paused);
                };

                gsap.set(cards, { autoAlpha: 0, y: 34, scale: 0.985 });

                const tl = gsap.timeline({
                    scrollTrigger: {
                        trigger: desktopRevealRef.current,
                        start: 'top top',
                        end: () => `+=${Math.max(1400, cards.length * 260)}`,
                        pin: true,
                        scrub: 1.6,
                        anticipatePin: 1,
                        invalidateOnRefresh: true,
                        onEnter: () => setSnapPaused(true),
                        onEnterBack: () => setSnapPaused(true),
                        onLeave: () => setSnapPaused(false),
                        onLeaveBack: () => setSnapPaused(false),
                    },
                });

                cards.forEach((card, index) => {
                    tl.to(
                        card,
                        {
                            autoAlpha: 1,
                            y: 0,
                            scale: 1,
                            duration: 0.48,
                            ease: 'power2.out',
                        },
                        index * 0.36
                    );
                });
            });
        }, desktopRevealRef);

        return () => {
            document.documentElement.classList.remove('snap-paused');
            mm.revert();
            ctx.revert();
        };
    }, [filteredProjects.length, activeCategory]);

    return (
        <section id="proyectos" className="snap-none bg-[linear-gradient(180deg,rgba(247,247,245,1)_0%,rgba(22,34,56,0.07)_100%)]">
            <div className="hidden min-h-[100svh] items-center lg:flex">
                <div className="container-zulo">
                    <SectionHeading
                        badge="Proyectos destacados"
                        title="Experiencia en obras reales de vivienda, comercio e industria."
                        description="Una muestra de proyectos ejecutados y supervisados con enfoque técnico y cumplimiento operativo."
                        align="center"
                    />
                </div>
            </div>

            <div ref={desktopRevealRef} className="hidden min-h-[100svh] items-center lg:flex">
                <div className="container-zulo">
                    <div className="flex flex-wrap justify-center gap-2">
                        {categories.map((category) => (
                            <button
                                type="button"
                                key={category}
                                onClick={() => setActiveCategory(category)}
                                className={`rounded-full border px-4 py-2 text-sm font-medium transition ${
                                    activeCategory === category
                                        ? 'border-brand-gold bg-amber-50 text-brand-charcoal'
                                        : 'border-brand-border bg-white text-zinc-600 hover:border-brand-gold/60'
                                }`}
                            >
                                {category}
                            </button>
                        ))}
                    </div>

                    <div ref={desktopGridRef} className="mt-10 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
                        {filteredProjects.map((project) => (
                            <div key={project.name} data-project-seq="true">
                                <ProjectCard project={project} />
                            </div>
                        ))}
                    </div>
                    <div className="mt-8 h-6" aria-hidden="true" />
                </div>
            </div>

            <div className="py-20 lg:hidden">
                <div className="container-zulo">
                    <SectionHeading
                        badge="Proyectos destacados"
                        title="Experiencia en obras reales de vivienda, comercio e industria."
                        description="Una muestra de proyectos ejecutados y supervisados con enfoque técnico y cumplimiento operativo."
                    />

                    <div className="mt-8 flex flex-wrap gap-2">
                        {categories.map((category) => (
                            <button
                                type="button"
                                key={category}
                                onClick={() => setActiveCategory(category)}
                                className={`rounded-full border px-4 py-2 text-sm font-medium transition ${
                                    activeCategory === category
                                        ? 'border-brand-gold bg-amber-50 text-brand-charcoal'
                                        : 'border-brand-border bg-white text-zinc-600 hover:border-brand-gold/60'
                                }`}
                            >
                                {category}
                            </button>
                        ))}
                    </div>

                    <div className="mt-10 grid gap-5">
                        {filteredProjects.map((project) => (
                            <ProjectCard key={project.name} project={project} />
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
