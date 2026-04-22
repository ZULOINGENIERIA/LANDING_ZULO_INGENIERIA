import { Head } from '@inertiajs/react';
import MainLayout from '../Layouts/MainLayout';
import HeroSection from '../Components/Sections/HeroSection';
import MetricsSection from '../Components/Sections/MetricsSection';
import AboutSection from '../Components/Sections/AboutSection';
import ServicesSection from '../Components/Sections/ServicesSection';
import ProjectsSection from '../Components/Sections/ProjectsSection';
import ProcessSection from '../Components/Sections/ProcessSection';
import InterventoriaSection from '../Components/Sections/InterventoriaSection';
import TestimonialsSection from '../Components/Sections/TestimonialsSection';
import WizardSection from '../Components/Sections/WizardSection';
import FinalCtaSection from '../Components/Sections/FinalCtaSection';
import {
    aboutHighlights,
    interventoriaBlocks,
    metrics,
    processSteps,
    projectCategories,
    projects,
    services,
    testimonials,
} from '../data/landingData';

export default function Home() {
    const pageTitle = 'Zulo Ingenieria | Diseno, Construccion e Interventoria';
    const pageDescription =
        'Soluciones integrales de ingenieria para proyectos residenciales, comerciales e industriales: diseno, ejecucion e interventoria con enfoque tecnico y cumplimiento.';
    const pageUrl = typeof window !== 'undefined' ? window.location.href : '';
    const pageImage =
        typeof window !== 'undefined' ? `${window.location.origin}/images/og-zulo.png` : '';

    return (
        <MainLayout>
            <Head title={pageTitle}>
                <meta head-key="description" name="description" content={pageDescription} />
                <meta
                    head-key="keywords"
                    name="keywords"
                    content="ingenieria civil, construccion, interventoria, diseno estructural, proyectos civiles, obras civiles, Zulo Ingenieria, Colombia"
                />
                <meta head-key="robots" name="robots" content="index,follow" />
                <meta head-key="og:type" property="og:type" content="website" />
                <meta head-key="og:locale" property="og:locale" content="es_CO" />
                <meta head-key="og:title" property="og:title" content={pageTitle} />
                <meta head-key="og:description" property="og:description" content={pageDescription} />
                <meta head-key="og:url" property="og:url" content={pageUrl} />
                <meta head-key="og:image" property="og:image" content={pageImage} />
                <meta head-key="og:image:alt" property="og:image:alt" content="Marca de Zulo Ingenieria" />
                <meta head-key="twitter:card" name="twitter:card" content="summary_large_image" />
                <meta head-key="twitter:title" name="twitter:title" content={pageTitle} />
                <meta head-key="twitter:description" name="twitter:description" content={pageDescription} />
                <meta head-key="twitter:image" name="twitter:image" content={pageImage} />
                <link head-key="canonical" rel="canonical" href={pageUrl} />
            </Head>
            <HeroSection />
            <MetricsSection metrics={metrics} />
            <AboutSection highlights={aboutHighlights} />
            <ServicesSection services={services} />
            <ProjectsSection projects={projects} categories={projectCategories} />
            <ProcessSection steps={processSteps} />
            <InterventoriaSection blocks={interventoriaBlocks} />
            <TestimonialsSection testimonials={testimonials} />
            <WizardSection />
            <FinalCtaSection />
        </MainLayout>
    );
}
