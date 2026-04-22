import InputField from '../UI/InputField';

export default function StepLocation({ form, setForm, errors }) {
    const updateField = (event) => {
        const { name, value } = event.target;
        setForm((prev) => ({ ...prev, [name]: value }));
    };

    return (
        <div>
            <h3 className="text-xl font-semibold text-brand-charcoal">Ubicación del proyecto</h3>
            <div className="mt-6 grid gap-4 md:grid-cols-2">
                <InputField
                    label="Departamento"
                    name="department"
                    value={form.department}
                    onChange={updateField}
                    placeholder="Ej: Santander"
                    error={errors.department}
                />
                <InputField
                    label="Ciudad o municipio"
                    name="city"
                    value={form.city}
                    onChange={updateField}
                    placeholder="Ej: Bucaramanga"
                    error={errors.city}
                />
            </div>
            <div className="mt-4">
                <InputField
                    label="Dirección o zona aproximada"
                    name="address"
                    value={form.address}
                    onChange={updateField}
                    placeholder="Ej: Zona norte, km 5 vía Girón"
                    error={errors.address}
                />
            </div>
        </div>
    );
}
