export default function SecondaryButton({ href, children, className = '', ...props }) {
    const Component = href ? 'a' : 'button';

    return (
        <Component
            href={href}
            className={`inline-flex items-center justify-center rounded-full border border-brand-border bg-white px-6 py-3 text-base font-semibold text-brand-charcoal transition duration-300 hover:-translate-y-0.5 hover:border-brand-gold hover:text-brand-gold focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-gold focus-visible:ring-offset-2 ${className}`}
            {...props}
        >
            {children}
        </Component>
    );
}
