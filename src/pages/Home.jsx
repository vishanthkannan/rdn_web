import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, CheckCircle, Store, Users, Clock, Shield } from 'lucide-react';

const Home = () => {
    const [currentSlide, setCurrentSlide] = React.useState(0);

    const slides = [
        "https://images.unsplash.com/photo-1541888946425-d81bb19240f5?q=80&w=2070&auto=format&fit=crop", // Building construction
        "https://images.unsplash.com/photo-1504307651254-35680f356dfd?q=80&w=2070&auto=format&fit=crop", // Excavator
        "https://images.unsplash.com/photo-1487958449943-2429e8be8625?q=80&w=2070&auto=format&fit=crop"  // Blueprint/Plan
    ];

    React.useEffect(() => {
        const timer = setInterval(() => {
            setCurrentSlide((prev) => (prev + 1) % slides.length);
        }, 5000);
        return () => clearInterval(timer);
    }, []);

    return (
        <div className="flex flex-col">
            {/* Hero Section */}
            <section className="relative h-[600px] flex items-center bg-slate-900 text-white overflow-hidden">
                {/* Slideshow Background */}
                {slides.map((slide, index) => (
                    <div
                        key={index}
                        className={`absolute inset-0 bg-cover bg-center transition-opacity duration-1000 ease-in-out ${index === currentSlide ? 'opacity-100' : 'opacity-0'
                            }`}
                        style={{ backgroundImage: `url('${slide}')` }}
                    >
                        <div className="absolute inset-0 bg-black opacity-50"></div>
                    </div>
                ))}

                <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center sm:text-left">
                    <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6 leading-tight">
                        Creating the Wonders<br />
                        <span className="text-accent">for the Future</span>
                    </h1>
                    <p className="text-xl text-slate-200 mb-8 max-w-2xl">
                        Specializing in Turnkey Construction Projects since 2016. We bring your vision to life with precision, quality, and trust.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 mb-8">
                        <Link to="/contact" className="bg-accent hover:bg-accent-hover text-white px-8 py-3 rounded-md font-bold text-lg transition-colors inline-block text-center">
                            Get a Quote
                        </Link>
                        <Link to="/projects" className="bg-transparent border-2 border-white hover:bg-white hover:text-primary text-white px-8 py-3 rounded-md font-bold text-lg transition-colors inline-block text-center">
                            View Projects
                        </Link>
                    </div>

                    {/* Slide Indicators */}
                    <div className="flex space-x-2 justify-center sm:justify-start">
                        {slides.map((_, index) => (
                            <button
                                key={index}
                                onClick={() => setCurrentSlide(index)}
                                className={`w-3 h-3 rounded-full transition-colors ${index === currentSlide ? 'bg-accent' : 'bg-white/50 hover:bg-white'}`}
                                aria-label={`Go to slide ${index + 1}`}
                            />
                        ))}
                    </div>
                </div>
            </section>

            {/* Stats Section */}
            <section className="py-12 bg-accent text-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
                        <div>
                            <div className="text-4xl md:text-5xl font-bold mb-2">200+</div>
                            <div className="text-sm md:text-base font-medium opacity-90">Projects Completed</div>
                        </div>
                        <div>
                            <div className="text-4xl md:text-5xl font-bold mb-2">10+</div>
                            <div className="text-sm md:text-base font-medium opacity-90">Years Experience</div>
                        </div>
                        <div>
                            <div className="text-4xl md:text-5xl font-bold mb-2">100+</div>
                            <div className="text-sm md:text-base font-medium opacity-90">Expert Team Members</div>
                        </div>
                        <div>
                            <div className="text-4xl md:text-5xl font-bold mb-2">98%</div>
                            <div className="text-sm md:text-base font-medium opacity-90">Client Satisfaction</div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Clients Section (Trust) */}
            <section className="py-20 bg-slate-50 overflow-hidden">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-12">
                    <h2 className="text-4xl font-bold text-center text-primary mb-2">Trusted By Industry Leaders</h2>
                    <div className="w-24 h-1 bg-accent mx-auto rounded-full"></div>
                </div>

                <div className="relative w-full">
                    {/* Gradient Fade Edges */}
                    <div className="absolute left-0 top-0 bottom-0 w-24 sm:w-32 bg-gradient-to-r from-slate-50 to-transparent z-10 pointer-events-none"></div>
                    <div className="absolute right-0 top-0 bottom-0 w-24 sm:w-32 bg-gradient-to-l from-slate-50 to-transparent z-10 pointer-events-none"></div>

                    <div className="flex w-full overflow-hidden pause-on-hover py-4">
                        <div className="flex animate-scroll whitespace-nowrap gap-8 px-4">
                            {[
                                { name: "Eicher", logo: "/clients/eicher.png" },
                                { name: "Maruti Suzuki", logo: "/clients/maruti.png" },
                                { name: "JSW Steels", logo: "/clients/jsw.png" },
                                { name: "Radisson Hotel", logo: "/clients/radisson.png" },
                                { name: "Suzuki", logo: "/clients/suzuki.png" },
                                { name: "Tanishq (Tata)", logo: "/clients/tanishq.png" },
                                // Set 2
                                { name: "Eicher", logo: "/clients/eicher.png" },
                                { name: "Maruti Suzuki", logo: "/clients/maruti.png" },
                                { name: "JSW Steels", logo: "/clients/jsw.png" },
                                { name: "Radisson Hotel", logo: "/clients/radisson.png" },
                                { name: "Suzuki", logo: "/clients/suzuki.png" },
                                { name: "Tanishq (Tata)", logo: "/clients/tanishq.png" },
                                // Set 3
                                { name: "Eicher", logo: "/clients/eicher.png" },
                                { name: "Maruti Suzuki", logo: "/clients/maruti.png" },
                                { name: "JSW Steels", logo: "/clients/jsw.png" },
                                { name: "Radisson Hotel", logo: "/clients/radisson.png" },
                                { name: "Suzuki", logo: "/clients/suzuki.png" },
                                { name: "Tanishq (Tata)", logo: "/clients/tanishq.png" },
                                // Set 4 (Ensures seamless loop on wide screens)
                                { name: "Eicher", logo: "/clients/eicher.png" },
                                { name: "Maruti Suzuki", logo: "/clients/maruti.png" },
                                { name: "JSW Steels", logo: "/clients/jsw.png" },
                                { name: "Radisson Hotel", logo: "/clients/radisson.png" },
                                { name: "Suzuki", logo: "/clients/suzuki.png" },
                                { name: "Tanishq (Tata)", logo: "/clients/tanishq.png" }
                            ].map((client, index) => (
                                <div key={index} className="inline-flex flex-col items-center justify-center w-[280px] h-[160px] bg-white rounded-xl shadow-[0_4px_20px_rgb(0,0,0,0.03)] border border-slate-100 hover:border-accent/30 hover:shadow-[0_8px_30px_rgb(0,0,0,0.08)] transition-all duration-300 group cursor-pointer hover:-translate-y-1">
                                    <div className="h-24 w-full px-8 flex items-center justify-center overflow-hidden">
                                        <img
                                            src={client.logo}
                                            alt={client.name}
                                            className="max-h-full max-w-full object-contain transition-all duration-500 transform group-hover:scale-125"
                                            onError={(e) => {
                                                e.target.style.display = 'none';
                                                e.target.nextSibling.classList.remove('hidden');
                                            }}
                                        />
                                        <span className="hidden text-slate-400 font-bold text-xl text-center group-hover:text-primary transition-colors">{client.name}</span>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* Why Choose Us */}
            <section className="py-16 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl font-bold text-primary mb-4">Why Choose RDN Creators</h2>
                        <p className="text-slate-600 max-w-2xl mx-auto">We are committed to delivering excellence in every project. Here is what sets us apart.</p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                        <div className="p-6 bg-slate-50 rounded-lg shadow-sm hover:shadow-md transition-shadow">
                            <Shield className="text-accent w-12 h-12 mb-4" />
                            <h3 className="text-xl font-bold mb-2 text-primary">Reliable Quality</h3>
                            <p className="text-slate-600">Top-tier materials and workmanship guaranteed.</p>
                        </div>
                        <div className="p-6 bg-slate-50 rounded-lg shadow-sm hover:shadow-md transition-shadow">
                            <Clock className="text-accent w-12 h-12 mb-4" />
                            <h3 className="text-xl font-bold mb-2 text-primary">On-Time Delivery</h3>
                            <p className="text-slate-600">We respect deadlines and project timelines.</p>
                        </div>
                        <div className="p-6 bg-slate-50 rounded-lg shadow-sm hover:shadow-md transition-shadow">
                            <Store className="text-accent w-12 h-12 mb-4" />
                            <h3 className="text-xl font-bold mb-2 text-primary">Turnkey Solutions</h3>
                            <p className="text-slate-600">End-to-end management from design to handover.</p>
                        </div>
                        <div className="p-6 bg-slate-50 rounded-lg shadow-sm hover:shadow-md transition-shadow">
                            <Users className="text-accent w-12 h-12 mb-4" />
                            <h3 className="text-xl font-bold mb-2 text-primary">Experienced Team</h3>
                            <p className="text-slate-600">Skilled professionals with years of expertise.</p>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Home;
