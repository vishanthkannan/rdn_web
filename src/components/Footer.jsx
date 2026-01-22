import { MapPin, Phone, Mail, Instagram, Facebook } from 'lucide-react';

const Footer = () => {
    return (
        <footer className="bg-primary text-slate-300 py-12 border-t border-slate-800">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
                    {/* Company Info */}
                    <div>
                        <div className="mb-4">
                            <img src="/rdn-logo.png" alt="RDN Creators" className="h-14 w-auto object-contain brightness-0 invert opacity-90" />
                        </div>
                        <p className="mb-4 text-sm leading-relaxed">
                            Creating the Wonders for the Future. We specialize in Turnkey Construction Projects, delivering excellence since 2016.
                        </p>
                        <div className="flex space-x-4">
                            <a href="https://www.instagram.com/rdncreators/" target="_blank" rel="noopener noreferrer" className="hover:text-accent transition-colors"><Instagram size={24} /></a>
                            <a href="#" className="hover:text-accent transition-colors"><Facebook size={24} /></a>
                        </div>
                    </div>

                    {/* Contact Info */}
                    <div>
                        <h3 className="text-xl font-bold text-white mb-4">Contact Us</h3>
                        <ul className="space-y-3 text-sm">
                            <li className="flex items-start space-x-3">
                                <MapPin size={20} className="text-accent flex-shrink-0 mt-1" />
                                <span>
                                    5/17, Vellapillayar Kovil,<br />
                                    Gobinathapuram, Sakkaraichettipatti,<br />
                                    Omalur, Salem – 636305,<br />
                                    Tamil Nadu, India
                                </span>
                            </li>
                            <li className="flex items-center space-x-3">
                                <Phone size={20} className="text-accent flex-shrink-0" />
                                <div className="flex flex-col">
                                    <a href="tel:9513333935" className="hover:text-white">+91 9513333935</a>
                                    <a href="tel:9513333852" className="hover:text-white">+91 9513333852</a>
                                </div>
                            </li>
                            <li className="flex items-center space-x-3">
                                <Mail size={20} className="text-accent flex-shrink-0" />
                                <a href="mailto:rdncreators@gmail.com" className="hover:text-white">rdncreators@gmail.com</a>
                            </li>
                        </ul>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h3 className="text-xl font-bold text-white mb-4">Our Services</h3>
                        <ul className="space-y-2 text-sm">
                            <li>Residential Construction</li>
                            <li>Commercial Construction</li>
                            <li>Turnkey Projects</li>
                            <li>Renovation & Remodeling</li>
                            <li>Interior Works</li>
                        </ul>
                    </div>
                </div>

                <div className="border-t border-slate-800 pt-8 text-center text-sm text-slate-500">
                    <p>&copy; {new Date().getFullYear()} RDN Creators. All rights reserved.</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
