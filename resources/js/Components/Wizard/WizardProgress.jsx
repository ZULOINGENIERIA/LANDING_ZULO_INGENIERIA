export default function WizardProgress({ currentStep, totalSteps }) {
    const progress = Math.round(((currentStep + 1) / totalSteps) * 100);

    return (
        <div className="space-y-2">
            <div className="flex items-center justify-between text-xs font-medium text-zinc-500">
                <span>Paso {currentStep + 1} de {totalSteps}</span>
                <span>{progress}% completado</span>
            </div>
            <div className="h-2 overflow-hidden rounded-full bg-zinc-200">
                <div
                    className="h-full rounded-full bg-brand-gold transition-all duration-500"
                    style={{ width: `${progress}%` }}
                />
            </div>
        </div>
    );
}
