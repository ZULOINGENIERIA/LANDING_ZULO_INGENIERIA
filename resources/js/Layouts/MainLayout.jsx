import Navbar from '../Components/Layout/Navbar';
import Footer from '../Components/Layout/Footer';

export default function MainLayout({ children }) {
    return (
        <div className="min-h-screen bg-white text-brand-charcoal">
            <Navbar />
            <main>{children}</main>
            <Footer />
        </div>
    );
}
