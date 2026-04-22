import SelectCard from '../UI/SelectCard';
import { wizardOptions } from '../../data/landingData';

export default function StepProjectType({ form, setForm, errors }) {
    return (
        <div>
            <h3 className="text-xl font-semibold text-brand-charcoal">
                ¿Qué tipo de proyecto deseas desarrollar o supervisar?
            </h3>
            <div className="mt-6 grid gap-3 sm:grid-cols-2">
                {wizardOptions.projectType.map((option) => (
                    <SelectCard
                        key={option}
                        label={option}
                        selected={form.projectType === option}
                        onClick={() => setForm((prev) => ({ ...prev, projectType: option }))}
                    />
                ))}
            </div>
            {errors.projectType && <p className="mt-3 text-xs text-red-600">{errors.projectType}</p>}
        </div>
    );
}
