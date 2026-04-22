import { motion } from 'framer-motion';
import { CheckCircle2 } from 'lucide-react';
import SectionHeading from '../UI/SectionHeading';
import { fadeUp, staggerContainer } from '../../utils/motion';

export default function AboutSection({ highlights }) {
    return (
        <section id="nosotros" className="snap-section overflow-x-hidden bg-brand-stone py-20">
            <div className="container-zulo">
                <div className="grid items-center gap-10 lg:gap-12 lg:grid-cols-2">
                    <motion.div
                        initial={{ opacity: 0, x: -24 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: false, amount: 0.2 }}
                        className="grid grid-cols-1 gap-4 sm:grid-cols-2"
                    >
                        <div className="h-52 rounded-4xl bg-gradient-to-r from-zinc-200 to-stone-300 sm:col-span-2 md:h-64" />
                        <div className="h-40 rounded-3xl bg-gradient-to-br from-amber-100 to-stone-200 sm:h-44" />
                        <div className="h-40 rounded-3xl bg-gradient-to-br from-zinc-200 to-slate-200 sm:h-44" />
                    </motion.div>

                    <div className="min-w-0">
                        <SectionHeading
                            badge="Quienes somos"
                            title="Zulo Ingenieria & Construcciones S.A.S."
                            description="Somos una empresa colombiana comprometida con el desarrollo del pais a traves de la ingenieria, la arquitectura y la construccion."
                            align="responsive"
                            titleClassName="text-[45px] sm:text-4xl md:text-6xl"
                        />

                        <motion.p
                            variants={fadeUp}
                            initial="hidden"
                            whileInView="show"
                            viewport={{ once: false, amount: 0.2 }}
                            className="mt-6 text-lg leading-relaxed text-zinc-600 md:text-xl"
                        >
                            Nuestro diferencial esta en la presencia real en campo, el seguimiento tecnico continuo y la
                            capacidad de resolver con criterio profesional cada etapa del proyecto.
                        </motion.p>

                        <motion.ul
                            variants={staggerContainer}
                            initial="hidden"
                            whileInView="show"
                            viewport={{ once: false, amount: 0.2 }}
                            className="mt-7 grid gap-3 sm:grid-cols-2"
                        >
                            {highlights.map((item) => (
                                <motion.li
                                    key={item.title}
                                    variants={fadeUp}
                                    className="flex min-w-0 items-start gap-3 rounded-2xl border border-brand-border bg-white p-3 text-base font-medium text-zinc-700"
                                >
                                    <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-brand-gold" />
                                    <span className="min-w-0 break-words leading-snug">{item.title}</span>
                                </motion.li>
                            ))}
                        </motion.ul>
                    </div>
                </div>
            </div>
        </section>
    );
}
