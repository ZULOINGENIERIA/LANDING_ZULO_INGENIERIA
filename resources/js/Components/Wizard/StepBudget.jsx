import SelectCard from '../UI/SelectCard';
import { wizardOptions } from '../../data/landingData';

export default function StepBudget({ form, setForm, errors }) {
    return (
        <div>
            <h3 className="text-xl font-semibold text-brand-charcoal">Presupuesto estimado</h3>
            <div className="mt-6 grid gap-3 sm:grid-cols-2">
                {wizardOptions.budget.map((option) => (
                    <SelectCard
                        key={option}
                        label={option}
                        selected={form.budget === option}
                        onClick={() => setForm((prev) => ({ ...prev, budget: option }))}
                    />
                ))}
            </div>
            {errors.budget && <p className="mt-3 text-xs text-red-600">{errors.budget}</p>}
        </div>
    );
}
