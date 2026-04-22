export default function MetricCard({ icon: Icon, value, label }) {
    return (
        <article className="rounded-3xl border border-brand-border bg-white p-6 shadow-soft">
            <div className="inline-flex rounded-2xl bg-brand-stone p-3 text-brand-gold">
                <Icon className="h-5 w-5" />
            </div>
            <p className="mt-5 text-5xl font-semibold text-brand-charcoal">{value}</p>
            <p className="mt-2 text-base text-zinc-600">{label}</p>
        </article>
    );
}
