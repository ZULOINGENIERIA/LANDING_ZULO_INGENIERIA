import SelectCard from '../UI/SelectCard';
import { wizardOptions } from '../../data/landingData';

export default function StepService({ form, setForm, errors }) {
    return (
        <div>
            <h3 className="text-xl font-semibold text-brand-charcoal">¿Qué servicio necesitas?</h3>
            <div className="mt-6 grid gap-3 sm:grid-cols-2">
                {wizardOptions.service.map((option) => (
                    <SelectCard
                        key={option}
                        label={option}
                        selected={form.service === option}
                        onClick={() => setForm((prev) => ({ ...prev, service: option }))}
                    />
                ))}
            </div>
            {errors.service && <p className="mt-3 text-xs text-red-600">{errors.service}</p>}
        </div>
    );
}
