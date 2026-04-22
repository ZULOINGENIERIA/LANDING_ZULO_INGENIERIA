export default function SectionBadge({ children }) {
    return (
        <span className="inline-flex items-center rounded-full border border-brand-border bg-white/80 px-4 py-1.5 text-sm font-semibold uppercase tracking-[0.16em] text-brand-gold">
            {children}
        </span>
    );
}
