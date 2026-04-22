import TextAreaField from '../UI/TextAreaField';
import { wizardOptions } from '../../data/landingData';

export default function StepScope({ form, setForm, errors }) {
    const toggleScope = (value) => {
        setForm((prev) => {
            const exists = prev.scope.includes(value);
            return {
                ...prev,
                scope: exists ? prev.scope.filter((item) => item !== value) : [...prev.scope, value],
            };
        });
    };

    return (
        <div>
            <h3 className="text-xl font-semibold text-brand-charcoal">Alcance del servicio</h3>
            <p className="mt-2 text-sm text-zinc-600">Selecciona una o varias opciones según tu necesidad.</p>
            <div className="mt-6 grid gap-3 sm:grid-cols-2">
                {wizardOptions.scope.map((option) => (
                    <label
                        key={option}
                        className={`flex cursor-pointer items-center gap-3 rounded-2xl border p-4 text-sm transition ${
                            form.scope.includes(option)
                                ? 'border-brand-gold bg-amber-50'
                                : 'border-brand-border bg-white hover:border-brand-gold/60'
                        }`}
                    >
                        <input
                            type="checkbox"
                            className="h-4 w-4 accent-brand-gold"
                            checked={form.scope.includes(option)}
                            onChange={() => toggleScope(option)}
                        />
                        {option}
                    </label>
                ))}
            </div>
            {errors.scope && <p className="mt-3 text-xs text-red-600">{errors.scope}</p>}
            <div className="mt-5">
                <TextAreaField
                    label="Cuéntanos brevemente tu necesidad"
                    name="details"
                    value={form.details}
                    onChange={(event) => setForm((prev) => ({ ...prev, details: event.target.value }))}
                    placeholder="Describe el alcance, estado actual y cualquier dato técnico relevante."
                    error={errors.details}
                />
            </div>
        </div>
    );
}
