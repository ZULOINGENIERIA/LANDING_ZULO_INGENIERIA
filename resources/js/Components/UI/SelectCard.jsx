export default function SelectCard({ label, selected, onClick }) {
    return (
        <button
            type="button"
            onClick={onClick}
            className={`rounded-2xl border px-4 py-4 text-left text-sm font-medium transition ${
                selected
                    ? 'border-brand-gold bg-amber-50 text-brand-charcoal'
                    : 'border-brand-border bg-white text-zinc-700 hover:border-brand-gold/60'
            }`}
        >
            {label}
        </button>
    );
}
