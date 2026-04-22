import InputField from '../UI/InputField';
import { wizardOptions } from '../../data/landingData';

export default function StepContact({ form, setForm, errors }) {
    const updateField = (event) => {
        const { name, value } = event.target;
        setForm((prev) => ({ ...prev, [name]: value }));
    };

    return (
        <div>
            <h3 className="text-xl font-semibold text-brand-charcoal">Datos de contacto</h3>
            <div className="mt-6 grid gap-4 md:grid-cols-2">
                <InputField
                    label="Nombre completo"
                    name="name"
                    value={form.name}
                    onChange={updateField}
                    placeholder="Tu nombre"
                    error={errors.name}
                />
                <InputField
                    label="Empresa"
                    name="company"
                    value={form.company}
                    onChange={updateField}
                    placeholder="Empresa (opcional)"
                    error={errors.company}
                />
                <InputField
                    label="Teléfono"
                    name="phone"
                    value={form.phone}
                    onChange={updateField}
                    placeholder="Ej: 3001234567"
                    error={errors.phone}
                />
                <InputField
                    label="WhatsApp"
                    name="whatsapp"
                    value={form.whatsapp}
                    onChange={updateField}
                    placeholder="Ej: 3001234567"
                    error={errors.whatsapp}
                />
                <div className="md:col-span-2">
                    <InputField
                        label="Correo electrónico"
                        name="email"
                        type="email"
                        value={form.email}
                        onChange={updateField}
                        placeholder="correo@empresa.com"
                        error={errors.email}
                    />
                </div>
            </div>
            <div className="mt-5">
                <p className="mb-3 text-sm font-medium text-zinc-700">Medio preferido de contacto</p>
                <div className="grid gap-3 sm:grid-cols-3">
                    {wizardOptions.preferredContact.map((option) => (
                        <button
                            type="button"
                            key={option}
                            onClick={() => setForm((prev) => ({ ...prev, preferredContact: option }))}
                            className={`rounded-2xl border px-4 py-3 text-sm font-medium transition ${
                                form.preferredContact === option
                                    ? 'border-brand-gold bg-amber-50'
                                    : 'border-brand-border hover:border-brand-gold/60'
                            }`}
                        >
                            {option}
                        </button>
                    ))}
                </div>
                {errors.preferredContact && <p className="mt-3 text-xs text-red-600">{errors.preferredContact}</p>}
            </div>
        </div>
    );
}
