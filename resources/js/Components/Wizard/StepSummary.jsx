const labels = {
    service: 'Servicio',
    projectType: 'Tipo de proyecto',
    stage: 'Etapa actual',
    department: 'Departamento',
    city: 'Ciudad o municipio',
    address: 'Dirección o zona aproximada',
    scope: 'Alcance',
    details: 'Necesidad',
    budget: 'Presupuesto',
    timeline: 'Tiempo estimado',
    name: 'Nombre',
    company: 'Empresa',
    phone: 'Teléfono',
    whatsapp: 'WhatsApp',
    email: 'Correo',
    preferredContact: 'Medio preferido',
};

const stepEditMap = {
    service: 0,
    projectType: 1,
    stage: 2,
    department: 3,
    city: 3,
    address: 3,
    scope: 4,
    details: 4,
    budget: 5,
    timeline: 6,
    name: 7,
    company: 7,
    phone: 7,
    whatsapp: 7,
    email: 7,
    preferredContact: 7,
};

export default function StepSummary({ form, goToStep }) {
    return (
        <div>
            <h3 className="text-xl font-semibold text-brand-charcoal">Resumen de tu solicitud</h3>
            <p className="mt-2 text-sm text-zinc-600">
                Verifica la información antes de enviar. Puedes editar cualquier dato.
            </p>
            <div className="mt-6 grid gap-3">
                {Object.entries(form).map(([key, value]) => {
                    const displayValue = Array.isArray(value) ? value.join(', ') : value;
                    return (
                        <article key={key} className="rounded-2xl border border-brand-border bg-white p-4">
                            <div className="flex items-start justify-between gap-4">
                                <div>
                                    <p className="text-xs font-semibold uppercase tracking-[0.12em] text-zinc-500">
                                        {labels[key]}
                                    </p>
                                    <p className="mt-1 text-sm text-zinc-700">
                                        {displayValue ? displayValue : 'No especificado'}
                                    </p>
                                </div>
                                <button
                                    type="button"
                                    onClick={() => goToStep(stepEditMap[key])}
                                    className="text-xs font-semibold text-brand-gold hover:underline"
                                >
                                    Editar
                                </button>
                            </div>
                        </article>
                    );
                })}
            </div>
        </div>
    );
}
