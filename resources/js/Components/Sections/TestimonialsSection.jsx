import { motion } from 'framer-motion';
import SectionHeading from '../UI/SectionHeading';
import { fadeUp, staggerContainer } from '../../utils/motion';

export default function TestimonialsSection({ testimonials }) {
    return (
        <section className="snap-section py-20">
            <div className="container-zulo">
                <SectionHeading
                    badge="Clientes"
                    title="Confianza construida con trabajo técnico y resultados medibles."
                    description="Comentarios de clientes que han trabajado con nuestro equipo en ejecución e interventoría."
                    align="center"
                />
                <motion.div
                    variants={staggerContainer}
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: false, amount: 0.2 }}
                    className="mt-12 grid gap-5 md:grid-cols-3"
                >
                    {testimonials.map((testimonial) => (
                        <motion.article
                            key={testimonial.name}
                            variants={fadeUp}
                            className="rounded-3xl border border-brand-border bg-white p-6 shadow-soft"
                        >
                            <p className="text-base leading-relaxed text-zinc-600">“{testimonial.content}”</p>
                            <div className="mt-5">
                                <p className="text-base font-semibold text-brand-charcoal">{testimonial.name}</p>
                                <p className="text-sm text-zinc-500">{testimonial.role}</p>
                            </div>
                        </motion.article>
                    ))}
                </motion.div>
            </div>
        </section>
    );
}
