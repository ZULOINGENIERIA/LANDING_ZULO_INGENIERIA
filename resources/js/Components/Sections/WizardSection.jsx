import SectionHeading from '../UI/SectionHeading';
import WizardContainer from '../Wizard/WizardContainer';

export default function WizardSection() {
    return (
        <section id="contacto" className="snap-section bg-brand-stone py-20">
            <div className="container-zulo">
                <SectionHeading
                    badge="Solicitud técnica"
                    title="Cuéntanos tu proyecto y recibe una asesoría técnica inicial."
                    description="Completa este formulario para que nuestro equipo revise tu necesidad y te contacte con una propuesta ajustada."
                />
                <div className="mt-10">
                    <WizardContainer />
                </div>
            </div>
        </section>
    );
}
