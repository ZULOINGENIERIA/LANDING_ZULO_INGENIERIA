import { motion } from 'framer-motion';

export default function InfoCard({ icon: Icon, title, description }) {
    return (
        <motion.article
            whileHover={{ y: -6 }}
            transition={{ duration: 0.2 }}
            className="rounded-3xl border border-brand-border bg-white p-6"
        >
            <div className="mb-5 inline-flex rounded-2xl bg-brand-stone p-3 text-brand-gold">
                <Icon className="h-5 w-5" />
            </div>
            <h3 className="text-xl font-semibold text-brand-charcoal">{title}</h3>
            <p className="mt-3 text-base leading-relaxed text-zinc-600">{description}</p>
        </motion.article>
    );
}
