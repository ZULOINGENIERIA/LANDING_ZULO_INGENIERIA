export default function TextAreaField({ label, name, value, onChange, placeholder, error, rows = 4 }) {
    return (
        <label className="block space-y-2">
            <span className="text-sm font-medium text-zinc-700">{label}</span>
            <textarea
                name={name}
                value={value}
                onChange={onChange}
                rows={rows}
                placeholder={placeholder}
                className={`w-full rounded-2xl border bg-white px-4 py-3 text-sm text-brand-charcoal outline-none transition focus:border-brand-gold focus:ring-2 focus:ring-brand-gold/20 ${
                    error ? 'border-red-300' : 'border-brand-border'
                }`}
            />
            {error && <span className="text-xs text-red-600">{error}</span>}
        </label>
    );
}
