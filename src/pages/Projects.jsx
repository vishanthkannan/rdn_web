import { useState, useEffect } from 'react';
import { MapPin, ChevronDown, ArrowRight } from 'lucide-react';

const Projects = () => {
    const projects = [
        {
            id: 1,
            title: "Eicher Pro x",
            category: "Commercial",
            location: "Salem",
            description: "A state-of-the-art commercial facility designed for efficiency and modern aesthetics.",
            images: [
                "/projects/Eicher Pro x - Salem.jpg",
                "/projects/Eicher Pro x - Salem3.jpg",
                "/projects/Eicher Pro x - Salem1.jpg",
                "/projects/Eicher Pro x - Salem4.jpg",
            ]
        },
        {
            id: 2,
            title: "Maruti Suzuki",
            category: "Showroom & Service",
            location: "Sankarapuram",
            description: "An expansive automotive showroom combining luxury display areas with functional service bays.",
            images: [
                "/projects/Maruthi Suzuki -Sankarapuram.jpg",
                "/projects/Maruthi Suzuki -Sankarapuram1.jpg",
                "/projects/Maruthi Suzuki -Sankarapuram2.jpg",
                "/projects/Maruthi Suzuki -Sankarapuram3.jpg"
            ]
        },
            {
            id: 3,
            title: "Esaf Small Finance Bank",
            category: "Bank",
            location: "Thrissure-Kerala",
            description: "An expansive automotive showroom combining luxury display areas with functional service bays.",
            images: [
                "/projects/esaf.jpg",
                "/projects/esaf1.jpg",
                "/projects/esaf2.jpg",
                "/projects/esaf4.jpg",
                "/projects/esaf5.jpg",
                "/projects/esaf6.jpg",
                "/projects/esaf7.jpg",
                "/projects/esaf8.jpg",
                "/projects/esaf9.jpg",
                "/projects/esaf10.jpg",
                "/projects/esaf11.jpg",
                "/projects/esaf12.jpg",
                "/projects/esaf13.jpg",
                "/projects/esaf14.jpg",
                "/projects/esaf16.jpg",
                "/projects/esaf17.jpg",
                "/projects/esaf18.jpg",
                "/projects/esaf19.jpg",
            ]
        },
        {
            id: 3,
            title: "Suzuki",
            category: "Automotive Center",
            location: "Ranipet",
            description: "Modern automotive center featuring high-tech diagnostic areas and client lounges.",
            images: [
                "/projects/Suzuki -Ranipet.jpg",
                "/projects/Suzuki -Ranipet1.jpg",
                "/projects/Suzuki -Ranipet2.jpg",
                "/projects/Suzuki -Ranipet3.jpg"
            ]
        },
        {
            id: 4,
            title: "Giri Appartment",
            category: "Living Area",
            location: "Bangalore-Karnataka",
            description: "Bespoke residential designs that blend comfort, elegance, and sustainable living.",
            images: [
                "/projects/giri.jpg",
                "/projects/giri2.jpg",
            ]
        },
        {
            id: 5,
            title: "Godrej",
            category: "Living Area",
            location: "Kerala",
            description: "Bespoke residential designs that blend comfort, elegance, and sustainable living.",
            images: [
                "/projects/godrej.jpg",
                "/projects/godrej1.jpg",
                "/projects/godrej2.jpg",
                "/projects/godrej3.jpg",
                "/projects/godrej4.jpg",
            ]
        },
        {
            id: 6,
            title: "Esaf furnitures",
            category: "Furiture Works",
            location: "Kerala",
            description: "Bespoke residential designs that blend comfort, elegance, and sustainable Working.",
            images: [
                "/projects/Esaf-furnitures.jpg",
                "/projects/Esaf-furnitures1.jpg",
                "/projects/Esaf-furnitures2.jpg",
                "/projects/Esaf-furnitures3.jpg",
                "/projects/Esaf-furnitures4.jpg",
                "/projects/Esaf-furnitures5.jpg",
                "/projects/Esaf-furnitures6.jpg",
                "/projects/Esaf-furnitures7.jpg",
            ]
        },
        {
            id: 7,
            title: "Maruthi - Ambur cars",
            category: "Showroom & Service",
            location: "Ambur-TamilNadu",
            description: "Bespoke residential designs that blend comfort, elegance, and sustainable Working.",
            images: [
                "/projects/ambur.jpg",
                "/projects/ambur1.jpg",
                "/projects/ambur2.jpg",
                "/projects/ambur3.jpg",
                "/projects/ambur4.jpg",
            ]
        },
                {
            id: 7,
            title: "Maruthi - MSSSP",
            category: "Showroom & Service",
            location: "Thellar(Tiruvannamalai)-TamilNadu",
            description: "Bespoke residential designs that blend comfort, elegance, and sustainable Working.",
            images: [
                "/projects/msssp.jpg",
                "/projects/msssp1.jpg",
                "/projects/msssp3.jpg",
            ]
        },
        {
            id: 8,
            title: "Maruthi S-OutLet",
            category: "Showroom & Service",
            location: "Pallikonda-TamilNadu",
            description: "Bespoke residential designs that blend comfort, elegance, and sustainable Working.",
            images: [
                "/projects/vellor.jpg",
                "/projects/vellor1.jpg",
                "/projects/vellor2.jpg",
            ]
        },
        {
            id: 9,
            title: "PMS",
            category: "Showroom & Service",
            location: "Mettur-TamilNadu",
            description: "Bespoke residential designs that blend comfort, elegance, and sustainable Working.",
            images: [
                "/projects/pms.jpg",
                "/projects/pms1.jpg",
            ]
        },

        {
            id: 7,
            title: "Luxury Residential Collection",
            category: "Premium Living",
            location: "Various Locations",
            description: "Bespoke residential designs that blend comfort, elegance, and sustainable living.",
            layout: "cards",
            images: [
                "/projects/house1.jpg",
                "/projects/house2.jpg",
                "/projects/house3.jpg",
                "/projects/house4.jpg",
                "/projects/house5.jpg",
            ]
        },
        {
            id: 8,
            title: "Modern Interior Concepts",
            category: "Interior Design",
            location: "Chennai & Coimbatore",
            description: "Elegant and functional interior spaces designed to inspire and comfort.",
            layout: "masonry",
            images: [
                "/projects/1.jpg",
                "/projects/2.jpg",
                "/projects/3.jpg",
                "/projects/4.jpg"
            ]
        },

    ];

    return (
        <div className="bg-black flex flex-col">
            {projects.map((project, index) => (
                <div
                    key={project.id}
                    className="min-h-screen w-full border-b-8 border-black box-border relative"
                >
                    <ProjectSection project={project} isLast={index === projects.length - 1} />
                </div>
            ))}
        </div>
    );
};

const ProjectSection = ({ project, isLast }) => {
    const [currentImageIndex, setCurrentImageIndex] = useState(0);
    const [activeCard, setActiveCard] = useState(0);

    // Layout Flags
    const isCardLayout = project.layout === 'cards';
    const isMasonryLayout = project.layout === 'masonry';

    // Auto-advance slideshow (only for default layout)
    useEffect(() => {
        if (isCardLayout || isMasonryLayout) return;
        const timer = setInterval(() => {
            setCurrentImageIndex((prev) => (prev + 1) % project.images.length);
        }, 2000);

        return () => clearInterval(timer);
    }, [project.images.length, isCardLayout, isMasonryLayout]);

    // 1. Creative Card Layout (Accordion)
    if (isCardLayout) {
        return (
            <div className="relative h-screen w-full bg-slate-900 overflow-hidden flex flex-col md:flex-row">
                <div className="md:absolute md:top-12 md:left-12 z-20 p-6 md:p-0 bg-slate-900 md:bg-transparent pointer-events-none">
                    <span className="inline-block px-3 py-1 bg-accent/90 text-white text-xs font-bold uppercase tracking-wider rounded-sm mb-2">
                        {project.category}
                    </span>
                    <h2 className="text-3xl md:text-5xl font-bold text-white mb-2 shadow-sm">{project.title}</h2>
                    <p className="text-gray-300 max-w-md drop-shadow-md">{project.description}</p>
                </div>

                <div className="flex-1 flex flex-col md:flex-row h-full w-full">
                    {project.images.map((img, index) => (
                        <div
                            key={index}
                            onMouseEnter={() => setActiveCard(index)}
                            className={`relative h-full transition-all duration-700 ease-out cursor-pointer overflow-hidden
                                ${activeCard === index ? 'flex-[3]' : 'flex-[1]'}
                                border-b-4 md:border-b-0 md:border-r-4 border-black last:border-0
                            `}
                        >
                            <img
                                src={img}
                                alt={`View ${index + 1}`}
                                className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 hover:scale-110"
                            />
                            <div className={`absolute inset-0 bg-black/40 transition-opacity duration-300 ${activeCard === index ? 'opacity-0' : 'opacity-60 hover:opacity-40'}`} />

                            <div className={`absolute bottom-8 left-8 transition-all duration-500 z-30 ${activeCard === index ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
                                <div className="bg-accent/90 backdrop-blur-md px-4 py-2 text-white font-bold rounded-sm flex items-center gap-2 shadow-lg">
                                    View Detail <ArrowRight size={16} />
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        );
    }

    // 2. Modern Masonry/Grid Layout (For Interior)
    if (isMasonryLayout) {
        return (
            <div className="relative min-h-screen w-full bg-white flex flex-col md:flex-row overflow-hidden">
                {/* Left: Content */}
                <div className="w-full md:w-1/3 p-12 flex flex-col justify-center bg-slate-50 z-10 shadow-xl relative order-2 md:order-1">
                    <div className="animate-fade-in-up">
                        <span className="inline-block px-3 py-1 bg-accent/10 text-accent text-xs font-bold uppercase tracking-wider rounded-full mb-4">
                            {project.category}
                        </span>
                        <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6 leading-tight">
                            {project.title}
                        </h2>
                        <div className="flex items-center text-slate-500 mb-8 font-medium">
                            <MapPin className="w-5 h-5 mr-2 text-accent" />
                            {project.location}
                        </div>
                        <p className="text-lg text-slate-600 leading-relaxed mb-8 border-l-4 border-accent pl-6">
                            {project.description}
                        </p>
                        <button className="flex items-center gap-2 text-slate-900 font-bold hover:text-accent transition-colors group">
                            Explore Gallery <ArrowRight className="group-hover:translate-x-1 transition-transform" />
                        </button>
                    </div>
                </div>

                {/* Right: Grid */}
                <div className="w-full md:w-2/3 h-full bg-slate-100 overflow-y-auto order-1 md:order-2">
                    <div className="grid grid-cols-2 gap-2 h-full">
                        {project.images.map((img, index) => (
                            <div
                                key={index}
                                className={`relative overflow-hidden group hover:z-10 transition-all duration-500 ${index === 0 || index === 3 ? 'col-span-2 row-span-2 h-[400px]' : 'col-span-1 h-[250px]'}`}
                            >
                                <img
                                    src={img}
                                    alt={`Interior ${index + 1}`}
                                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                                />
                                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-500" />
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        );
    }

    // 3. Default Fullscreen Slideshow Layout (Commercial/Standard)
    return (
        <div className="relative h-screen w-full overflow-hidden">
            {/* Background Slideshow */}
            {project.images.map((img, index) => (
                <div
                    key={index}
                    className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${index === currentImageIndex ? 'opacity-100' : 'opacity-0'
                        }`}
                >
                    <img
                        src={img}
                        alt={`${project.title} - view ${index + 1}`}
                        className="w-full h-full object-cover"
                    />
                    {/* Dark Overlay for readability */}
                    <div className="absolute inset-0 bg-black/50" />
                </div>
            ))}

            {/* Content Overlay */}
            <div className="absolute inset-0 flex items-end justify-start p-8 md:p-16 pb-24">
                <div className="max-w-4xl w-full text-left text-white z-10">
                    <div className="animate-fade-in-up">
                        <span className="inline-block px-4 py-1.5 bg-accent text-white font-bold tracking-widest uppercase text-sm mb-4 rounded-sm">
                            {project.category}
                        </span>

                        <h2 className="text-5xl md:text-7xl font-bold mb-6 tracking-tight leading-tight shadow-sm">
                            {project.title}
                        </h2>

                        <div className="flex items-center justify-start text-xl text-gray-200 mb-6 font-light">
                            <MapPin className="w-5 h-5 mr-2 text-accent" />
                            {project.location}
                        </div>

                        <p className="text-lg md:text-xl text-gray-300 max-w-2xl leading-relaxed mb-8">
                            {project.description}
                        </p>

                        {/* Progress Indicators */}
                        <div className="flex justify-start space-x-3">
                            {project.images.map((_, idx) => (
                                <button
                                    key={idx}
                                    onClick={() => setCurrentImageIndex(idx)}
                                    className={`h-1.5 rounded-full transition-all duration-300 ${idx === currentImageIndex
                                        ? 'w-8 bg-accent'
                                        : 'w-2 bg-white/30 hover:bg-white/50'
                                        }`}
                                    aria-label={`Go to slide ${idx + 1}`}
                                />
                            ))}
                        </div>
                    </div>
                </div>
            </div>

            {/* Scroll Indicator (Show only if not the last project) */}
            {!isLast && (
                <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-white animate-bounce pointer-events-none">
                    <ChevronDown size={32} className="opacity-70" />
                </div>
            )}
        </div>
    );
};

export default Projects;
