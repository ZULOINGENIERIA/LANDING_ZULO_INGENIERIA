export default function PrimaryButton({ href, children, className = '', ...props }) {
    const Component = href ? 'a' : 'button';

    return (
        <Component
            href={href}
            className={`inline-flex items-center justify-center rounded-full bg-brand-gold px-6 py-3 text-base font-semibold text-white transition duration-300 hover:-translate-y-0.5 hover:bg-[#b58b34] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-gold focus-visible:ring-offset-2 ${className}`}
            {...props}
        >
            {children}
        </Component>
    );
}
