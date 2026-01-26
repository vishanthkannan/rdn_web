import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, CheckCircle, Store, Users, Clock, Shield } from 'lucide-react';
import About from './About';
import Services from './Services';
import Projects from './Projects';
import Contact from './Contact';

const Home = () => {
    const [currentSlide, setCurrentSlide] = React.useState(0);

    const slides = [
        "https://www.uwplatt.edu/news/sites/default/files/2023-02/Construction%20Lab2.jpg", // Building construction
        "https://www.bilbrey-construction.com/wp-content/uploads/2021/08/2390330-scaled.jpg", // Excavator
        "https://images.unsplash.com/photo-1487958449943-2429e8be8625?q=80&w=2070&auto=format&fit=crop"  // Blueprint/Plan
    ];

    React.useEffect(() => {
        const timer = setInterval(() => {
            setCurrentSlide((prev) => (prev + 1) % slides.length);
        }, 2000);
        return () => clearInterval(timer);
    }, []);

    return (
        <div className="flex flex-col">
            {/* Hero Section */}
            <section className="relative h-[calc(100vh-80px)] min-h-[600px] flex items-center bg-slate-900 text-white overflow-hidden">
                {/* Slideshow Background */}
                {slides.map((slide, index) => (
                    <div
                        key={index}
                        className={`absolute inset-0 bg-cover bg-center transition-opacity duration-1000 ease-in-out ${index === currentSlide ? 'opacity-100' : 'opacity-0'
                            }`}
                        style={{ backgroundImage: `url('${slide}')` }}
                    >
                        <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/40 to-slate-900/30"></div>
                    </div>
                ))}

                <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center sm:text-left">
                    <h1 className="text-5xl sm:text-6xl md:text-7xl font-bold mb-6 leading-tight opacity-0 animate-fade-in-up">
                        Creating the Wonders<br />
                        <span className="text-accent">for the Future</span>
                    </h1>
                    <p className="text-xl md:text-2xl text-slate-200 mb-10 max-w-2xl opacity-0 animate-fade-in-up animation-delay-200 font-light">
                        Specializing in Turnkey Construction Projects since 2016. We bring your vision to life with precision, quality, and trust.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 mb-12 opacity-0 animate-fade-in-up animation-delay-400">
                        <Link to="/contact" className="bg-accent hover:bg-accent-hover text-white px-10 py-4 rounded-full font-bold text-lg transition-all shadow-lg hover:shadow-accent/40 hover:-translate-y-1 text-center">
                            Get a Quote
                        </Link>
                        <Link to="/projects" className="bg-white/10 backdrop-blur-md border border-white/30 hover:bg-white hover:text-primary text-white px-10 py-4 rounded-full font-bold text-lg transition-all hover:-translate-y-1 text-center">
                            View Projects
                        </Link>
                    </div>

                    {/* Slide Indicators */}
                    <div className="flex space-x-3 justify-center sm:justify-start opacity-0 animate-fade-in-up animation-delay-400">
                        {slides.map((_, index) => (
                            <button
                                key={index}
                                onClick={() => setCurrentSlide(index)}
                                className={`h-1.5 rounded-full transition-all duration-300 ${index === currentSlide ? 'bg-accent w-8' : 'bg-white/40 w-4 hover:bg-white hover:w-6'}`}
                                aria-label={`Go to slide ${index + 1}`}
                            />
                        ))}
                    </div>
                </div>
            </section>

            {/* Stats Section */}
            <section className="py-16 bg-white text-green-900 relative overflow-hidden">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
                        <div className="group hover:-translate-y-1 transition-transform duration-300">
                            <div className="text-4xl md:text-6xl font-bold mb-2 text-green-700 group-hover:scale-110 transition-transform duration-300 inline-block">200+</div>
                            <div className="text-sm md:text-base font-bold opacity-90 uppercase tracking-wider">Projects Completed</div>
                        </div>
                        <div className="group hover:-translate-y-1 transition-transform duration-300">
                            <div className="text-4xl md:text-6xl font-bold mb-2 text-green-700 group-hover:scale-110 transition-transform duration-300 inline-block">10+</div>
                            <div className="text-sm md:text-base font-bold opacity-90 uppercase tracking-wider">Years Experience</div>
                        </div>
                        <div className="group hover:-translate-y-1 transition-transform duration-300">
                            <div className="text-4xl md:text-6xl font-bold mb-2 text-green-700 group-hover:scale-110 transition-transform duration-300 inline-block">100+</div>
                            <div className="text-sm md:text-base font-bold opacity-90 uppercase tracking-wider">Expert Team Members</div>
                        </div>
                        <div className="group hover:-translate-y-1 transition-transform duration-300">
                            <div className="text-4xl md:text-6xl font-bold mb-2 text-green-700 group-hover:scale-110 transition-transform duration-300 inline-block">98%</div>
                            <div className="text-sm md:text-base font-bold opacity-90 uppercase tracking-wider">Client Satisfaction</div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Clients Section (Trust) */}
            <section className="py-20 bg-gradient-to-r from-slate-900 via-green-500 to-slate-900 animate-gradient-x text-white overflow-hidden">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-12">
                    <h2 className="text-4xl font-bold text-center text-white mb-2">Our Clients</h2>
                    <div className="w-24 h-1 bg-white/30 mx-auto rounded-full"></div>
                </div>

                <div className="relative w-full">
                    {/* Gradient Fade Edges removed for animated background compatibility */}

                    <div className="flex w-full overflow-hidden pause-on-hover py-4">
                        <div className="flex animate-scroll whitespace-nowrap gap-8 px-4">
                            {[
                                { name: "Eicher", logo: "/clients/eicher.png" },
                                { name: "Maruti Suzuki", logo: "/clients/maruti.png" },
                                { name: "JSW Steels", logo: "/clients/jsw.png" },
                                { name: "Radisson Hotel", logo: "/clients/radisson.png" },
                                { name: "Suzuki", logo: "/clients/suzuki.png" },
                                { name: "Tanishq (Tata)", logo: "/clients/tanishq.png" },
                                { name: "Godrej", logo: "/clients/godrej.png" },
                                { name: "PMS", logo: "/clients/pms.png" },
                                
                                // Set 2    
                                { name: "Eicher", logo: "/clients/eicher.png" },
                                { name: "Maruti Suzuki", logo: "/clients/maruti.png" },
                                { name: "JSW Steels", logo: "/clients/jsw.png" },
                                { name: "Radisson Hotel", logo: "/clients/radisson.png" },
                                { name: "Suzuki", logo: "/clients/suzuki.png" },
                                { name: "Tanishq (Tata)", logo: "/clients/tanishq.png" },
                                { name: "Godrej", logo: "/clients/godrej.png" },
                                { name: "PMS", logo: "/clients/pms.jpg" },
                                // Set 300px
                                { name: "Eicher", logo: "/clients/eicher.png" },
                                { name: "Maruti Suzuki", logo: "/clients/maruti.png" },
                                { name: "JSW Steels", logo: "/clients/jsw.png" },
                                { name: "Radisson Hotel", logo: "/clients/radisson.png" },
                                { name: "Suzuki", logo: "/clients/suzuki.png" },
                                { name: "Tanishq (Tata)", logo: "/clients/tanishq.png" },
                                { name: "Godrej", logo: "/clients/godrej.png" },
                                { name: "PMS", logo: "/clients/pms.png" },
                                // Set 4 (Ensures seamless loop on wide screens)
                                { name: "Eicher", logo: "/clients/eicher.png" },
                                { name: "Maruti Suzuki", logo: "/clients/maruti.png" },
                                { name: "JSW Steels", logo: "/clients/jsw.png" },
                                { name: "Radisson Hotel", logo: "/clients/radisson.png" },
                                { name: "Suzuki", logo: "/clients/suzuki.png" },
                                { name: "Tanishq (Tata)", logo: "/clients/tanishq.png" },
                                { name: "Godrej", logo: "/clients/godrej.png" },
                                { name: "PMS", logo: "/clients/pms.png" },
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
            <section className="py-24 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <h2 className="text-4xl font-bold text-primary mb-4">Why Choose RDN Creators</h2>
                        <p className="text-slate-600 max-w-2xl mx-auto text-lg">We are committed to delivering excellence in every project. Here is what sets us apart.</p>
                        <div className="w-20 h-1 bg-accent mx-auto rounded-full mt-6"></div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                        {[
                            { icon: Shield, title: "Reliable Quality", desc: "Top-tier materials and workmanship guaranteed." },
                            { icon: Clock, title: "On-Time Delivery", desc: "We respect deadlines and project timelines." },
                            { icon: Store, title: "Turnkey Solutions", desc: "End-to-end management from design to handover." },
                            { icon: Users, title: "Experienced Team", desc: "Skilled professionals with years of expertise." }
                        ].map((item, index) => (
                            <div key={index} className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-[0_20px_40px_rgba(22,163,74,0.15)] border border-slate-100 hover:border-accent/20 transition-all duration-300 hover:-translate-y-1 group relative overflow-hidden flex flex-col items-center text-center">
                                <div className="w-16 h-16 bg-green-50 rounded-2xl flex items-center justify-center mb-6 text-accent group-hover:scale-110 transition-transform duration-300">
                                    <item.icon size={32} />
                                </div>
                                <h3 className="text-xl font-bold mb-3 text-primary group-hover:text-accent transition-colors duration-300">{item.title}</h3>
                                <p className="text-slate-600 leading-relaxed text-sm">{item.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* About Section */}
            <div id="about" className="scroll-mt-24">
                <About />
            </div>

            {/* Services Section */}
            <div id="services" className="scroll-mt-24">
                <Services />
            </div>

            {/* Projects Section */}
            <div id="projects" className="scroll-mt-24">
                <Projects />
            </div>

            {/* Contact Section */}
            <div id="contact" className="scroll-mt-24">
                <Contact />
            </div>
        </div>
    );
};

export default Home;
