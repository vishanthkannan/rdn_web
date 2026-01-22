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
                        <div key={index} className="bg-white p-8 rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300 border-t-4 border-transparent hover:border-accent group">
                            <div className="w-16 h-16 bg-slate-100 rounded-full flex items-center justify-center mb-6 text-primary group-hover:bg-accent group-hover:text-white transition-colors duration-300">
                                <service.icon size={32} />
                            </div>
                            <h3 className="text-2xl font-bold mb-3 text-primary">{service.title}</h3>
                            <p className="text-slate-600 leading-relaxed">{service.description}</p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Services;
