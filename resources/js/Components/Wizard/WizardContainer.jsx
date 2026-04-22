import { useMemo, useState } from 'react';
import axios from 'axios';
import { AnimatePresence, motion } from 'framer-motion';
import PrimaryButton from '../UI/PrimaryButton';
import SecondaryButton from '../UI/SecondaryButton';
import WizardProgress from './WizardProgress';
import StepService from './StepService';
import StepProjectType from './StepProjectType';
import StepStage from './StepStage';
import StepLocation from './StepLocation';
import StepScope from './StepScope';
import StepBudget from './StepBudget';
import StepTimeline from './StepTimeline';
import StepContact from './StepContact';
import StepSummary from './StepSummary';

const initialForm = {
    service: '',
    projectType: '',
    stage: '',
    department: '',
    city: '',
    address: '',
    scope: [],
    details: '',
    budget: '',
    timeline: '',
    name: '',
    company: '',
    phone: '',
    whatsapp: '',
    email: '',
    preferredContact: '',
};

const steps = [
    { key: 'service', component: StepService },
    { key: 'projectType', component: StepProjectType },
    { key: 'stage', component: StepStage },
    { key: 'location', component: StepLocation },
    { key: 'scope', component: StepScope },
    { key: 'budget', component: StepBudget },
    { key: 'timeline', component: StepTimeline },
    { key: 'contact', component: StepContact },
    { key: 'summary', component: StepSummary },
];

export default function WizardContainer() {
    const [form, setForm] = useState(initialForm);
    const [currentStep, setCurrentStep] = useState(0);
    const [errors, setErrors] = useState({});
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [successMessage, setSuccessMessage] = useState('');

    const CurrentStepComponent = useMemo(() => steps[currentStep].component, [currentStep]);

    const validateStep = (stepIndex) => {
        const nextErrors = {};

        if (stepIndex === 0 && !form.service) nextErrors.service = 'Selecciona un servicio.';
        if (stepIndex === 1 && !form.projectType) nextErrors.projectType = 'Selecciona un tipo de proyecto.';
        if (stepIndex === 2 && !form.stage) nextErrors.stage = 'Selecciona la etapa actual.';
        if (stepIndex === 3) {
            if (!form.department) nextErrors.department = 'El departamento es obligatorio.';
            if (!form.city) nextErrors.city = 'La ciudad o municipio es obligatorio.';
        }
        if (stepIndex === 4 && form.scope.length === 0) nextErrors.scope = 'Selecciona al menos un alcance.';
        if (stepIndex === 5 && !form.budget) nextErrors.budget = 'Selecciona un presupuesto estimado.';
        if (stepIndex === 6 && !form.timeline) nextErrors.timeline = 'Selecciona un tiempo estimado.';
        if (stepIndex === 7) {
            if (!form.name) nextErrors.name = 'El nombre es obligatorio.';
            if (!form.phone) nextErrors.phone = 'El teléfono es obligatorio.';
            if (!form.email) {
                nextErrors.email = 'El correo es obligatorio.';
            } else if (!/\S+@\S+\.\S+/.test(form.email)) {
                nextErrors.email = 'Ingresa un correo válido.';
            }
            if (!form.preferredContact) {
                nextErrors.preferredContact = 'Selecciona el medio preferido de contacto.';
            }
        }

        setErrors(nextErrors);
        return Object.keys(nextErrors).length === 0;
    };

    const handleNext = () => {
        setSuccessMessage('');
        if (!validateStep(currentStep)) return;
        setCurrentStep((prev) => Math.min(prev + 1, steps.length - 1));
    };

    const handlePrev = () => {
        setErrors({});
        setCurrentStep((prev) => Math.max(prev - 1, 0));
    };

    const handleSubmit = async () => {
        if (isSubmitting) return;

        setErrors({});
        setSuccessMessage('');
        setIsSubmitting(true);

        try {
            const response = await axios.post('/solicitud', form);
            if (response.data?.success) {
                setSuccessMessage('Solicitud enviada correctamente. Nuestro equipo te contactará pronto.');
                setForm(initialForm);
                setCurrentStep(0);
            }
        } catch (error) {
            if (error.response?.status === 422 && error.response.data?.errors) {
                setErrors(error.response.data.errors);
                setCurrentStep(7);
            } else {
                setErrors({
                    general: 'No fue posible enviar la solicitud. Intenta nuevamente en unos minutos.',
                });
            }
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <div className="rounded-4xl border border-brand-border bg-white p-6 shadow-soft md:p-8">
            <WizardProgress currentStep={currentStep} totalSteps={steps.length} />

            <AnimatePresence mode="wait">
                <motion.div
                    key={steps[currentStep].key}
                    initial={{ opacity: 0, x: 14 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -14 }}
                    transition={{ duration: 0.2 }}
                    className="mt-8"
                >
                    <CurrentStepComponent
                        form={form}
                        setForm={setForm}
                        errors={errors}
                        goToStep={setCurrentStep}
                    />
                </motion.div>
            </AnimatePresence>

            {errors.general && <p className="mt-5 text-sm text-red-600">{errors.general}</p>}
            {successMessage && <p className="mt-5 text-sm font-medium text-emerald-600">{successMessage}</p>}

            <div className="mt-8 flex flex-wrap items-center gap-3">
                <SecondaryButton
                    type="button"
                    onClick={handlePrev}
                    className={currentStep === 0 ? 'pointer-events-none opacity-40' : ''}
                >
                    Anterior
                </SecondaryButton>

                {currentStep < steps.length - 1 ? (
                    <PrimaryButton type="button" onClick={handleNext}>
                        Siguiente
                    </PrimaryButton>
                ) : (
                    <PrimaryButton type="button" onClick={handleSubmit} disabled={isSubmitting}>
                        {isSubmitting ? 'Enviando...' : 'Enviar solicitud'}
                    </PrimaryButton>
                )}
            </div>
        </div>
    );
}
