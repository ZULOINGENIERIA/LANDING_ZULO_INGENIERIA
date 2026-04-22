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
    return (
        <MainLayout>
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
