import { Home, Building2, Hammer, Grid, Ruler, ClipboardCheck, ArrowUpRight } from 'lucide-react';

const Services = () => {
    const services = [
        {
            id: '01',
            title: "Residential Construction",
            description: "Building dream homes with personalized designs and high-quality materials, ensuring comfort and durability. We handle everything from foundation to the final coat of paint.",
            icon: Home,
            image: "/projects/house1.jpg"
        },
        {
            id: '02',
            title: "Commercial Construction",
            description: "Creating functional and impressive commercial spaces that drive business growth. From showrooms to office complexes, we build structures that reflect your brand identity.",
            icon: Building2,
            image: "/projects/Eicher Pro x - Salem.jpg" // Using one of the project images
        },
        {
            id: '03',
            title: "Turnkey Projects",
            description: "End-to-end project execution from planning to handover. We take full responsibility for the design, procurement, and construction, giving you a stress-free experience.",
            icon: ClipboardCheck,
            image: "/projects/1.jpg"
        },
        {
            id: '04',
            title: "Renovation & Remodeling",
            description: "Transforming existing spaces into modern, efficient, and beautiful environments. Whether it's a kitchen upgrade or a full structural renovation, we breathe new life into your property.",
            icon: Hammer,
            image: "/projects/3.jpg"
        },
        {
            id: '05',
            title: "Interior Works",
            description: "Designing and crafting stunning interiors that blend aesthetics with functionality. Custom furniture, lighting, and spatial planning tailored to your lifestyle.",
            icon: Grid,
            image: "/projects/house4.jpg"
        },
        {
            id: '06',
            title: "Project Management",
            description: "Professional supervision and management to ensure your project stays on time and within budget. We coordinate contractors, quality checks, and logistics so you don't have to.",
            icon: Ruler,
            image: "/projects/house2.jpg"
        }
    ];

    return (
        <div className="min-h-screen bg-slate-50 py-20 px-4 sm:px-6 lg:px-8">
            {/* Header Section */}
            <div className="max-w-7xl mx-auto mb-20 text-center">
                <span className="text-accent font-bold tracking-widest uppercase text-sm mb-2 block">What We Do</span>
                <h1 className="text-4xl md:text-6xl font-bold text-slate-900 leading-tight mb-6">
                    Building excellence <br />
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-slate-900 to-slate-600">in every detail.</span>
                </h1>
                <p className="max-w-2xl mx-auto text-slate-600 text-lg leading-relaxed">
                    We deliver comprehensive construction solutions tailored to meet your unique needs with precision and quality.
                </p>
            </div>

            {/* Services List */}
            <div className="max-w-7xl mx-auto flex flex-col gap-12 sm:gap-20">
                {services.map((service, index) => (
                    <div
                        key={service.id}
                        className={`grid grid-cols-1 lg:grid-cols-2 gap-0 shadow-2xl rounded-3xl overflow-hidden bg-white group hover:shadow-[0_20px_50px_rgba(8,_112,_184,_0.15)] transition-shadow duration-500`}
                    >
                        {/* Text Side - Alternates position */}
                        <div className={`bg-slate-900 text-white p-10 sm:p-12 lg:p-16 relative overflow-hidden flex flex-col justify-center order-2 ${index % 2 === 1 ? 'lg:order-2' : 'lg:order-1'}`}>
                            {/* Decorative Circle */}
                            <div className="absolute -top-24 -right-24 w-64 h-64 bg-accent/20 rounded-full blur-3xl opacity-50 pointer-events-none group-hover:bg-accent/30 transition-colors duration-500" />

                            <div className="relative z-10">
                                <div className="flex items-center gap-4 mb-6">
                                    <div className="p-3 bg-white/10 rounded-xl text-accent group-hover:bg-accent group-hover:text-white transition-all duration-300">
                                        <service.icon size={32} />
                                    </div>
                                    <span className="text-4xl font-bold text-white/10 font-serif select-none">
                                        {service.id}
                                    </span>
                                </div>

                                <h2 className="text-3xl font-bold mb-6 group-hover:text-accent transition-colors duration-300">{service.title}</h2>
                                <p className="text-slate-400 mb-8 text-lg leading-relaxed group-hover:text-slate-300 transition-colors duration-300">
                                    {service.description}
                                </p>

                                <button className="flex items-center gap-2 text-accent font-bold uppercase tracking-wide text-sm hover:text-white transition-colors duration-300 group/btn">
                                    Our Approach
                                    <ArrowUpRight size={16} className="transform group-hover/btn:translate-x-1 group-hover/btn:-translate-y-1 transition-transform duration-300" />
                                </button>
                            </div>
                        </div>

                        {/* Image Side */}
                        <div className={`relative h-[300px] lg:h-auto overflow-hidden order-1 ${index % 2 === 1 ? 'lg:order-1' : 'lg:order-2'}`}>
                            <div className="absolute inset-0 bg-slate-900/10 group-hover:bg-transparent transition-colors duration-500 z-10" />
                            <img
                                src={service.image}
                                alt={service.title}
                                className="absolute inset-0 w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
                            />
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Services;
