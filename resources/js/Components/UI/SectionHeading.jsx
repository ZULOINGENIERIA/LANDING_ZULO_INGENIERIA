import { motion } from 'framer-motion';
import SectionBadge from './SectionBadge';
import { fadeUp } from '../../utils/motion';

export default function SectionHeading({
    badge,
    title,
    description,
    align = 'left',
    titleClassName = '',
    descriptionClassName = '',
}) {
    const alignClass =
        align === 'center'
            ? 'text-center mx-auto'
            : align === 'responsive'
              ? 'text-center mx-auto md:mx-0 md:text-left'
              : 'text-left';

    return (
        <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            viewport={{ once: false, amount: 0.2 }}
            className={`max-w-3xl ${alignClass}`}
        >
            {badge && <SectionBadge>{badge}</SectionBadge>}
            <h2 className={`mt-4 text-5xl font-semibold leading-tight text-brand-charcoal md:text-6xl ${titleClassName}`}>
                {title}
            </h2>
            {description && (
                <p className={`mt-4 text-xl leading-relaxed text-zinc-600 md:text-2xl ${descriptionClassName}`}>{description}</p>
            )}
        </motion.div>
    );
}
