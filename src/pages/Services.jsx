import { Home, Building2, Hammer, Grid, Ruler, ClipboardCheck, ArrowUpRight } from 'lucide-react';

const Services = () => {
    const services = [
        {
            id: '01',
            title: "Residential Construction",
            description: "Building dream homes with personalized designs and high-quality materials, ensuring comfort and durability.",
            icon: Home
        },
        {
            id: '02',
            title: "Commercial Construction",
            description: "Creating functional and impressive commercial spaces that drive business growth and reflect your brand.",
            icon: Building2
        },
        {
            id: '03',
            title: "Turnkey Projects",
            description: "End-to-end project execution from planning to handover, taking full responsibility for the entire build.",
            icon: ClipboardCheck
        },
        {
            id: '04',
            title: "Renovation & Remodeling",
            description: "Transforming existing spaces into modern, efficient, and beautiful environments.",
            icon: Hammer
        },
        {
            id: '05',
            title: "Interior Works",
            description: "Designing and crafting stunning interiors that blend aesthetics with functionality.",
            icon: Grid
        },
        {
            id: '06',
            title: "Project Management",
            description: "Professional supervision and management to ensure your project stays on time and within budget.",
            icon: Ruler
        }
    ];

    return (
        <div className="min-h-screen bg-slate-50 py-20 px-4 sm:px-6 lg:px-8">
            {/* Header Section */}
            <div className="max-w-7xl mx-auto mb-20">
                <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
                    <div className="max-w-2xl">
                        <span className="text-accent font-bold tracking-widest uppercase text-sm mb-2 block">What We Do</span>
                        <h1 className="text-4xl md:text-6xl font-bold text-slate-900 leading-tight">
                            Building excellence <br />
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-slate-900 to-slate-600">in every detail.</span>
                        </h1>
                    </div>
                    <p className="max-w-md text-slate-600 text-lg leading-relaxed">
                        We deliver comprehensive construction solutions tailored to meet your unique needs with precision and quality.
                    </p>
                </div>
            </div>

            {/* Services Grid */}
            <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {services.map((service) => (
                    <div
                        key={service.id}
                        className="group relative bg-white rounded-2xl p-8 hover:bg-accent transition-all duration-500 shadow-sm hover:shadow-2xl border border-slate-200 hover:border-accent overflow-hidden"
                    >
                        {/* Hover Gradient Background */}
                        <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                        {/* Top Row: Icon and Number */}
                        <div className="flex justify-between items-start mb-12 relative z-10">
                            <div className="w-14 h-14 bg-slate-100 group-hover:bg-white/20 rounded-xl flex items-center justify-center transition-colors duration-500">
                                <service.icon
                                    size={28}
                                    className="text-slate-900 group-hover:text-white transition-colors duration-500"
                                    strokeWidth={1.5}
                                />
                            </div>
                            <span className="text-5xl font-bold text-slate-100 group-hover:text-white/20 transition-colors duration-500 font-serif">
                                {service.id}
                            </span>
                        </div>

                        {/* Content */}
                        <div className="relative z-10">
                            <h3 className="text-2xl font-bold text-slate-900 group-hover:text-white mb-4 transition-colors duration-500">
                                {service.title}
                            </h3>
                            <p className="text-slate-600 group-hover:text-white/90 leading-relaxed mb-8 transition-colors duration-500">
                                {service.description}
                            </p>

                            {/* Action Arrow */}
                            <div className="flex items-center text-accent group-hover:text-white font-semibold group/link cursor-pointer transition-colors duration-500">
                                <span className="opacity-0 group-hover:opacity-100 -translate-x-4 group-hover:translate-x-0 transition-all duration-500">Discover</span>
                                <div className="w-8 h-8 rounded-full border border-slate-200 group-hover:border-white flex items-center justify-center ml-2 transition-colors duration-500">
                                    <ArrowUpRight size={16} className="transform group-hover:rotate-45 transition-transform duration-500" />
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Services;
