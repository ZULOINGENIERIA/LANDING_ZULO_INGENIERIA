import { motion } from 'framer-motion';
import SectionHeading from '../UI/SectionHeading';
import { fadeUp, staggerContainer } from '../../utils/motion';

export default function ProcessSection({ steps }) {
    return (
        <section className="snap-section py-20">
            <div className="container-zulo">
                <SectionHeading
                    badge="Metodología"
                    title="Un proceso claro desde la visita técnica hasta la entrega."
                    description="Trabajamos por etapas para asegurar trazabilidad, control técnico y toma de decisiones oportuna."
                    align="center"
                />
                <motion.div
                    variants={staggerContainer}
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: false, amount: 0.2 }}
                    className="mt-12 grid gap-5 lg:grid-cols-5"
                >
                    {steps.map((step, index) => (
                        <motion.article
                            key={step.title}
                            variants={fadeUp}
                            className="rounded-3xl border border-brand-border bg-white p-5 shadow-soft"
                        >
                            <span className="text-xs font-semibold uppercase tracking-[0.12em] text-brand-gold">
                                Paso {index + 1}
                            </span>
                            <h3 className="mt-3 text-lg font-semibold text-brand-charcoal">{step.title}</h3>
                            <p className="mt-3 text-base leading-relaxed text-zinc-600">{step.description}</p>
                        </motion.article>
                    ))}
                </motion.div>
            </div>
        </section>
    );
}
