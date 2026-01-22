import { Home, Building2, Hammer, Grid, Ruler, ClipboardCheck } from 'lucide-react';

const Services = () => {
    const services = [
        {
            title: "Residential Construction",
            description: "Building dream homes with personalized designs and high-quality materials, ensuring comfort and durability.",
            icon: Home
        },
        {
            title: "Commercial Construction",
            description: "Creating functional and impressive commercial spaces that drive business growth and reflect your brand.",
            icon: Building2
        },
        {
            title: "Turnkey Projects",
            description: "End-to-end project execution from planning to handover, taking full responsibility for the entire build.",
            icon: ClipboardCheck // Using ClipboardCheck as a proxy for 'Key' or generic management
        },
        {
            title: "Renovation & Remodeling",
            description: "Transforming existing spaces into modern, efficient, and beautiful environments.",
            icon: Hammer
        },
        {
            title: "Interior Works",
            description: "Designing and crafting stunning interiors that blend aesthetics with functionality.",
            icon: Grid // Using Grid as a proxy for Layout/Interior
        },
        {
            title: "Project Management",
            description: "Professional supervision and management to ensure your project stays on time and within budget.",
            icon: Ruler
        }
    ];

    return (
        <div className="py-16 bg-slate-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <h1 className="text-4xl font-bold text-primary mb-4">Our Services</h1>
                    <p className="text-xl text-slate-600 max-w-2xl mx-auto">
                        Comprehensive construction solutions tailored to meet your unique needs.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {services.map((service, index) => (
                        <div key={index} className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-[0_20px_40px_rgba(22,163,74,0.15)] border border-slate-100 hover:border-accent/20 transition-all duration-300 hover:-translate-y-1 group relative overflow-hidden flex flex-col items-start h-full">

                            {/* Icon */}
                            <div className="w-14 h-14 bg-green-50 rounded-xl flex items-center justify-center mb-6 text-accent group-hover:scale-110 transition-transform duration-300">
                                <service.icon size={28} strokeWidth={2} />
                            </div>

                            {/* Content */}
                            <h3 className="text-xl font-bold mb-3 text-primary group-hover:text-accent transition-colors duration-300">{service.title}</h3>
                            <p className="text-slate-600 leading-relaxed text-sm mb-auto">{service.description}</p>

                            {/* Interactive Arrow Link */}
                            <div className="flex items-center text-sm font-semibold text-slate-400 group-hover:text-accent transition-colors mt-6">
                                <span>Learn More</span>
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="ml-2 transform group-hover:translate-x-1 transition-transform">
                                    <path d="M5 12h14"></path>
                                    <path d="m12 5 7 7-7 7"></path>
                                </svg>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Services;
