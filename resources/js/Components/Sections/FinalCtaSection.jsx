import PrimaryButton from '../UI/PrimaryButton';
import SecondaryButton from '../UI/SecondaryButton';

export default function FinalCtaSection() {
    return (
        <section className="snap-section py-20">
            <div className="container-zulo">
                <div className="rounded-4xl border border-brand-border bg-gradient-to-r from-[rgb(22,34,56)] to-zinc-800 px-6 py-12 text-white shadow-soft md:px-12">
                    <h2 className="max-w-3xl text-4xl font-semibold leading-tight md:text-5xl">
                        ¿Necesitas apoyo técnico para construir, supervisar o intervenir una obra?
                    </h2>
                    <p className="mt-4 max-w-2xl text-base leading-relaxed text-zinc-200 md:text-lg">
                        Te acompañamos desde la planeación hasta la entrega con enfoque técnico, control y ejecución confiable.
                    </p>
                    <div className="mt-8 flex flex-wrap gap-3">
                        <PrimaryButton href="#contacto">Solicitar cotización</PrimaryButton>
                        <SecondaryButton
                            href="https://wa.me/573105014968?text=Hola,%20quiero%20asesoria%20tecnica%20para%20un%20proyecto."
                            target="_blank"
                            rel="noreferrer"
                            className="border-white/30 bg-white/10 text-white hover:border-brand-gold hover:text-white"
                        >
                            Contactar por WhatsApp
                        </SecondaryButton>
                    </div>
                </div>
            </div>
        </section>
    );
}
