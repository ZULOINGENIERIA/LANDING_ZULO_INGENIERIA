import { motion } from 'framer-motion';
import MetricCard from '../UI/MetricCard';
import { fadeUp, staggerContainer } from '../../utils/motion';

export default function MetricsSection({ metrics }) {
    return (
        <section className="snap-section bg-[rgb(237,180,75)] py-14 md:py-20">
            <div className="container-zulo">
                <motion.div
                    variants={staggerContainer}
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: false, amount: 0.2 }}
                    className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4"
                >
                    {metrics.map((metric) => (
                        <motion.div key={metric.label} variants={fadeUp}>
                            <MetricCard {...metric} />
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
}
