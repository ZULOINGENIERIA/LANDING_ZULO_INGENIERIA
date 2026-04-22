import SelectCard from '../UI/SelectCard';
import { wizardOptions } from '../../data/landingData';

export default function StepTimeline({ form, setForm, errors }) {
    return (
        <div>
            <h3 className="text-xl font-semibold text-brand-charcoal">Tiempo estimado para iniciar</h3>
            <div className="mt-6 grid gap-3 sm:grid-cols-2">
                {wizardOptions.timeline.map((option) => (
                    <SelectCard
                        key={option}
                        label={option}
                        selected={form.timeline === option}
                        onClick={() => setForm((prev) => ({ ...prev, timeline: option }))}
                    />
                ))}
            </div>
            {errors.timeline && <p className="mt-3 text-xs text-red-600">{errors.timeline}</p>}
        </div>
    );
}
