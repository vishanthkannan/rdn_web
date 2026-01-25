import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const location = useLocation();

    const navLinks = [
        { name: 'Home', path: '/' },
        { name: 'About Us', path: '/#about' },
        { name: 'Services', path: '/#services' },
        { name: 'Projects', path: '/#projects' },
        { name: 'Contact', path: '/#contact' },
    ];

    const isActive = (path) => {
        if (path === '/') return location.pathname === '/' && location.hash === '';
        if (path.includes('#')) {
            const hash = path.split('#')[1];
            return location.pathname === '/' && location.hash === `#${hash}`;
        }
        return location.pathname === path;
    };

    return (
        <nav className="bg-white/95 backdrop-blur-sm text-primary sticky top-0 z-50 shadow-md font-sans transition-all duration-300">
            <div className="max-w-8xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between h-20 items-center">
                    {/* Logo */}
                    <Link to="/" className="flex items-center group">
                        <img
                            src="/rdn-logo.png"
                            alt="RDN Creators"
                            className="h-20 w-auto object-contain transition-transform duration-300 group-hover:scale-105"
                        />
                    </Link>

                    {/* Desktop Menu */}
                    <div className="hidden md:flex space-x-8">
                        {navLinks.map((link) => (
                            <Link
                                key={link.name}
                                to={link.path}
                                className={`relative py-1 group transition-colors duration-300 font-bold text-lg tracking-wide ${isActive(link.path) ? 'text-accent' : 'text-slate-700 hover:text-accent'
                                    }`}
                            >
                                {link.name}
                                <span className={`absolute left-0 bottom-0 w-full h-0.5 bg-accent transform transition-transform duration-300 ease-out origin-left ${isActive(link.path) ? 'scale-x-100' : 'scale-x-0 group-hover:scale-x-100'}`} />
                            </Link>
                        ))}
                    </div>

                    {/* Mobile Menu Button */}
                    <div className="md:hidden">
                        <button
                            onClick={() => setIsOpen(!isOpen)}
                            className="text-primary hover:text-accent transition-colors"
                            aria-label="Toggle menu"
                        >
                            {isOpen ? <X size={28} /> : <Menu size={28} />}
                        </button>
                    </div>
                </div>
            </div>

            {/* Mobile Menu */}
            {isOpen && (
                <div className="md:hidden bg-white shadow-xl border-t border-slate-100">
                    <div className="px-4 pt-4 pb-6 space-y-2">
                        {navLinks.map((link) => (
                            <Link
                                key={link.name}
                                to={link.path}
                                onClick={() => setIsOpen(false)}
                                className={`block px-3 py-3 rounded-md text-base font-bold hover:text-accent hover:bg-slate-50 transition-colors ${isActive(link.path) ? 'text-accent bg-slate-50' : 'text-slate-700'
                                    }`}
                            >
                                {link.name}
                            </Link>
                        ))}
                    </div>
                </div>
            )}
        </nav>
    );
};

export default Navbar;
