import SelectCard from '../UI/SelectCard';
import { wizardOptions } from '../../data/landingData';

export default function StepStage({ form, setForm, errors }) {
    return (
        <div>
            <h3 className="text-xl font-semibold text-brand-charcoal">¿En qué etapa se encuentra tu proyecto?</h3>
            <div className="mt-6 grid gap-3 sm:grid-cols-2">
                {wizardOptions.stage.map((option) => (
                    <SelectCard
                        key={option}
                        label={option}
                        selected={form.stage === option}
                        onClick={() => setForm((prev) => ({ ...prev, stage: option }))}
                    />
                ))}
            </div>
            {errors.stage && <p className="mt-3 text-xs text-red-600">{errors.stage}</p>}
        </div>
    );
}
