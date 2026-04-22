import { ArrowRight, MapPin } from 'lucide-react';
import { motion } from 'framer-motion';

export default function ProjectCard({ project }) {
    return (
        <motion.article
            whileHover={{ y: -6 }}
            transition={{ duration: 0.2 }}
            className="group overflow-hidden rounded-3xl border border-brand-border bg-white shadow-soft"
        >
            <div className={`relative h-52 bg-gradient-to-br ${project.gradient}`}>
                <span className="absolute left-4 top-4 rounded-full bg-white/85 px-3 py-1 text-xs font-semibold text-zinc-700">
                    {project.category}
                </span>
                <div className="absolute inset-0 bg-black/0 transition duration-300 group-hover:bg-black/15" />
            </div>
            <div className="space-y-4 p-6">
                <div className="flex items-center justify-between gap-3">
                    <h3 className="text-xl font-semibold text-brand-charcoal">{project.name}</h3>
                    <span className="rounded-full bg-brand-stone px-3 py-1 text-xs font-medium text-zinc-600">
                        {project.status}
                    </span>
                </div>
                <p className="flex items-center gap-2 text-base text-zinc-500">
                    <MapPin className="h-4 w-4" />
                    {project.location}
                </p>
                <p className="text-base leading-relaxed text-zinc-600">{project.description}</p>
                <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag) => (
                        <span key={tag} className="rounded-full border border-brand-border px-2.5 py-1 text-xs text-zinc-600">
                            {tag}
                        </span>
                    ))}
                </div>
                <button
                    type="button"
                    className="inline-flex items-center gap-2 text-base font-semibold text-brand-gold transition hover:gap-3"
                >
                    Ver detalle <ArrowRight className="h-4 w-4" />
                </button>
            </div>
        </motion.article>
    );
}
