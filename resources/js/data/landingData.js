import {
    BadgeCheck,
    Building2,
    ClipboardCheck,
    Compass,
    DraftingCompass,
    Factory,
    Hammer,
    HardHat,
    MapPin,
    Ruler,
    ShieldCheck,
    Timer,
    Users2,
    Wrench,
} from 'lucide-react';

export const navLinks = [
    { label: 'Inicio', href: '#inicio' },
    { label: 'Nosotros', href: '#nosotros' },
    { label: 'Servicios', href: '#servicios' },
    { label: 'Proyectos', href: '#proyectos' },
    { label: 'Interventoría', href: '#interventoria' },
    { label: 'Contacto', href: '#contacto' },
];

export const metrics = [
    { value: '120+', label: 'Proyectos ejecutados', icon: Building2 },
    { value: '85+', label: 'Obras supervisadas', icon: ClipboardCheck },
    { value: '14', label: 'Años de experiencia', icon: Timer },
    { value: '7', label: 'Departamentos atendidos', icon: MapPin },
];

export const aboutHighlights = [
    { title: 'Planeación técnica', icon: Compass },
    { title: 'Ejecución responsable', icon: HardHat },
    { title: 'Supervisión en campo', icon: ShieldCheck },
    { title: 'Calidad y seguimiento', icon: BadgeCheck },
];

export const services = [
    {
        title: 'Construcción de edificaciones',
        description: 'Desarrollo y ejecución de proyectos constructivos con control técnico en cada fase.',
        icon: Hammer,
    },
    {
        title: 'Acueductos y alcantarillados',
        description: 'Diseño y ejecución de redes hidráulicas y sanitarias para infraestructura urbana.',
        icon: Building2,
    },
    {
        title: 'Obras de urbanismo',
        description: 'Construcción de vías, andenes, redes y espacios públicos con enfoque integral.',
        icon: Wrench,
    },
    {
        title: 'Levantamientos topográficos',
        description: 'Levantamiento y análisis de terreno para planeación y ejecución precisa de obras.',
        icon: DraftingCompass,
    },
    {
        title: 'Proyectos eléctricos',
        description: 'Planeación y desarrollo de soluciones eléctricas para proyectos civiles y comerciales.',
        icon: Ruler,
    },
    {
        title: 'Gerencia de proyectos',
        description: 'Gestión de alcance, costos, riesgos y cronograma para asegurar cumplimiento de objetivos.',
        icon: ClipboardCheck,
    },
    {
        title: 'Gerencia integral de obras',
        description: 'Dirección técnica de obras civiles, urbanísticas y arquitectónicas con enfoque estratégico.',
        icon: Users2,
    },
    {
        title: 'Interventoría',
        description: 'Control técnico, administrativo y documental para garantizar calidad y trazabilidad.',
        icon: ShieldCheck,
    },
];

export const projectCategories = [
    'Todos',
    'Vivienda',
    'Comercial',
    'Industrial',
    'Interventoría',
    'Adecuaciones',
];

export const projects = [
    {
        name: 'Conjunto Residencial Altos del Norte',
        category: 'Vivienda',
        location: 'Bucaramanga, Santander',
        description: 'Ejecución de estructura, redes y acabados en 3 torres de vivienda multifamiliar.',
        status: 'Finalizado',
        tags: ['Estructura', 'Acabados', 'Urbanismo'],
        gradient: 'from-stone-100 to-amber-100',
    },
    {
        name: 'Centro Logístico Puerta Oriente',
        category: 'Industrial',
        location: 'Girón, Santander',
        description: 'Construcción de bodegas metálicas, losas de alto tráfico y zonas operativas.',
        status: 'En ejecución',
        tags: ['Bodega', 'Concreto', 'Metálica'],
        gradient: 'from-zinc-100 to-stone-200',
    },
    {
        name: 'Interventoría Torre Empresarial 360',
        category: 'Interventoría',
        location: 'Bogotá D.C.',
        description: 'Supervisión técnica de estructura y acabados para torre de uso corporativo.',
        status: 'Finalizado',
        tags: ['Control técnico', 'Informes', 'Seguimiento'],
        gradient: 'from-slate-100 to-neutral-200',
    },
    {
        name: 'Adecuación Clínica Santa Helena',
        category: 'Adecuaciones',
        location: 'Floridablanca, Santander',
        description: 'Intervención de áreas asistenciales con fases de obra y operación simultánea.',
        status: 'Finalizado',
        tags: ['Hospitalario', 'Fases', 'Acabados'],
        gradient: 'from-stone-100 to-lime-100',
    },
    {
        name: 'Plaza Comercial Punto Sur',
        category: 'Comercial',
        location: 'Cúcuta, Norte de Santander',
        description: 'Construcción de locales, zonas comunes y sistemas técnicos para centro comercial.',
        status: 'En ejecución',
        tags: ['Comercial', 'MEP', 'Gestión'],
        gradient: 'from-amber-100 to-orange-100',
    },
    {
        name: 'Vivienda Campestre Los Robles',
        category: 'Vivienda',
        location: 'Piedecuesta, Santander',
        description: 'Diseño ejecutivo y construcción de vivienda unifamiliar con enfoque bioclimático.',
        status: 'Finalizado',
        tags: ['Diseño', 'Construcción', 'Campestre'],
        gradient: 'from-emerald-100 to-stone-100',
    },
];

export const processSteps = [
    {
        title: 'Diagnóstico y visita técnica',
        description: 'Levantamiento inicial, revisión de condiciones y entendimiento del objetivo del cliente.',
    },
    {
        title: 'Planeación y alcance',
        description: 'Definición técnica de actividades, recursos, alcance y entregables del proyecto.',
    },
    {
        title: 'Presupuesto y cronograma',
        description: 'Estructuración de costos y programación con base en condiciones reales de ejecución.',
    },
    {
        title: 'Ejecución o supervisión',
        description: 'Gestión de obra e interventoría con control continuo, reportes y toma de decisiones.',
    },
    {
        title: 'Entrega y seguimiento',
        description: 'Cierre técnico, verificación de calidad y acompañamiento posterior a la entrega.',
    },
];

export const interventoriaBlocks = [
    'Control técnico',
    'Seguimiento de cronograma',
    'Control documental',
    'Calidad de materiales',
    'Supervisión en sitio',
    'Informes y trazabilidad',
];

export const testimonials = [
    {
        name: 'Andrés Castellanos',
        role: 'Gerente de Proyecto - Constructora Terra',
        content: 'El equipo de Zulo mantuvo control técnico y cumplimiento del cronograma durante toda la obra.',
    },
    {
        name: 'Paula Ramírez',
        role: 'Directora Administrativa - Centro Empresarial Nova',
        content: 'La interventoría fue rigurosa y clara. Tuvimos reportes útiles para decisiones semanales.',
    },
    {
        name: 'Carlos Medina',
        role: 'Propietario - Proyecto Industrial Privado',
        content: 'Recibimos una ejecución ordenada, con seguimiento real en campo y alta calidad en acabados.',
    },
];

export const wizardOptions = {
    service: [
        'Construcción',
        'Interventoría',
        'Remodelación',
        'Consultoría técnica',
        'Presupuesto de obra',
        'Supervisión',
    ],
    projectType: [
        'Vivienda',
        'Comercial',
        'Industrial',
        'Bodega o galpón',
        'Infraestructura',
        'Adecuación interior',
        'Otro',
    ],
    stage: [
        'Idea inicial',
        'Planeación',
        'Listo para cotizar',
        'En ejecución',
        'Requiere interventoría',
        'Requiere mejoras',
    ],
    scope: [
        'Visita técnica',
        'Diseño y planeación',
        'Presupuesto',
        'Ejecución de obra',
        'Interventoría',
        'Supervisión',
        'Cronograma',
        'Otro',
    ],
    budget: [
        'Menos de 20 millones',
        '20 a 50 millones',
        '50 a 100 millones',
        '100 a 300 millones',
        'Más de 300 millones',
        'Aún no definido',
    ],
    timeline: [
        'De inmediato',
        'Este mes',
        '1 a 3 meses',
        'Más de 3 meses',
        'Solo estoy cotizando',
    ],
    preferredContact: ['Llamada', 'WhatsApp', 'Correo electrónico'],
};
