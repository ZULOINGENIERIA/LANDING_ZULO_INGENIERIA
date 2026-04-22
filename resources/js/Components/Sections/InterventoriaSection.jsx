import { motion } from 'framer-motion';
import { Shield } from 'lucide-react';
import SectionBadge from '../UI/SectionBadge';
import { fadeUp, staggerContainer } from '../../utils/motion';

export default function InterventoriaSection({ blocks }) {
    return (
        <section id="interventoria" className="snap-section bg-[rgb(22,34,56)] py-20 text-white">
            <div className="container-zulo">
                <motion.div
                    initial={{ opacity: 0, y: 24 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: false, amount: 0.2 }}
                    className="max-w-3xl"
                >
                    <SectionBadge>Interventoría técnica</SectionBadge>
                    <h2 className="mt-4 text-4xl font-semibold leading-tight md:text-5xl">
                        Supervisión rigurosa para proteger alcance, costo, calidad y cronograma.
                    </h2>
                    <p className="mt-4 text-lg leading-relaxed text-zinc-300 md:text-xl">
                        Nuestra interventoría permite identificar riesgos tempranos, corregir desviaciones y mantener trazabilidad técnica y documental durante toda la ejecución.
                    </p>
                </motion.div>

                <motion.div
                    variants={staggerContainer}
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: false, amount: 0.2 }}
                    className="mt-10 grid gap-4 md:grid-cols-2 lg:grid-cols-3"
                >
                    {blocks.map((item) => (
                        <motion.div
                            key={item}
                            variants={fadeUp}
                            className="flex items-center gap-3 rounded-2xl border border-white/15 bg-white/5 p-4"
                        >
                            <Shield className="h-4 w-4 text-brand-gold" />
                            <span className="text-base text-zinc-100">{item}</span>
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
}
