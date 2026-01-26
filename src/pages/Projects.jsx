import { useState, useEffect } from 'react';
import { MapPin, ChevronDown, ArrowRight } from 'lucide-react';

const Projects = () => {
    const projects = [
        {
            id: 1,
            title: "Eicher Pro x",
            category: "Commercial",
            location: "Salem",

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

            images: [
                "/projects/Suzuki -Ranipet.jpg",
                "/projects/Suzuki -Ranipet1.jpg",
                "/projects/Suzuki -Ranipet2.jpg",
                "/projects/Suzuki -Ranipet3.jpg"
            ]
        },
        {
            id: 4,
            title: "Appartment",
            category: "Living Area",
            location: "Bangalore-Karnataka",

            images: [
                "/projects/giri.jpg",
                "/projects/giri2.jpg",
            ]
        },
                {
            id: 4,
            title: "Maruti Aarni",
            category: "Showroom & Service",
            location: "Aarni-Tamil Nadu",

            images: [
                "/projects/aarai.jpg",
                "/projects/aarai1.jpg",
                "/projects/aarai2.jpg",
                "/projects/aarai3.jpg",
                "/projects/aarai4.jpg",
            ]
        },
        {
            id: 5,
            title: "Godrej",
            category: "Living Area",
            location: "Kerala",

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
            title: "Maruti - Ambur cars",
            category: "Showroom & Service",
            location: "Ambur-TamilNadu",

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
            title: "Maruti - MSSSP",
            category: "Showroom & Service",
            location: "Thellar(Tiruvannamalai)-TamilNadu",

            images: [
                "/projects/msssp.jpg",
                "/projects/msssp1.jpg",
                "/projects/msssp3.jpg",
            ]
        },
        {
            id: 8,
            title: "Maruti S-OutLet",
            category: "Showroom & Service",
            location: "Pallikonda-TamilNadu",

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

            layout: "cards",
            images: [
                "/projects/house1.jpg",
                "/projects/house2.jpg",
                "/projects/house3.jpg",

            ]
        },
                {
            id: 7,
            title: "Luxury Residential Collection",
            category: "Premium Living",
            location: "Various Locations",

            layout: "cards",
            images: [
                "/projects/house4.jpg",
                "/projects/house5.jpg",
                "/projects/house6.jpg",
            ]
        },
        {
            id: 8,
            title: "Modern Interior Concepts",
            category: "Interior Design",
            location: "Chennai & Coimbatore",

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


                        </div>
                    ))}
                </div>
            </div>
        );
    }

    // 2. Modern Masonry/Grid Layout (For Interior)
    if (isMasonryLayout) {
        return (

            <div className="relative h-screen w-full bg-slate-900 overflow-hidden">
                {/* Full Screen Bento Grid */}
                <div className="absolute inset-0 p-2 md:p-4 grid grid-cols-4 grid-rows-2 gap-2 md:gap-4">
                    {/* Image 1: Large Main Feature (Left) */}
                    <div className="col-span-2 row-span-2 relative rounded-xl overflow-hidden group">
                        <img
                            src={project.images[0]}
                            alt="Interior Main"
                            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-60" />
                    </div>

                    {/* Image 2: Top Right */}
                    <div className="col-span-1 row-span-1 relative rounded-xl overflow-hidden group">
                        <img
                            src={project.images[1]}
                            alt="Interior Detail 1"
                            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                        />
                    </div>

                    {/* Image 3: Top Far Right */}
                    <div className="col-span-1 row-span-1 relative rounded-xl overflow-hidden group">
                        <img
                            src={project.images[2]}
                            alt="Interior Detail 2"
                            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                        />
                    </div>

                    {/* Image 4: Bottom Right Wide */}
                    <div className="col-span-2 row-span-1 relative rounded-xl overflow-hidden group">
                        <img
                            src={project.images[3]}
                            alt="Interior Detail 3"
                            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                        />
                    </div>
                </div>

                {/* Floating Content Card (Bottom Left over the Main Image) */}
                <div className="absolute bottom-8 left-8 md:bottom-16 md:left-16 max-w-lg z-20 pointer-events-none">
                    <div className="bg-white/10 backdrop-blur-xl border border-white/20 p-8 rounded-2xl shadow-2xl animate-fade-in-up">
                        <span className="inline-block px-3 py-1 bg-accent text-white text-xs font-bold uppercase tracking-wider rounded-full mb-3 shadow-md">
                            {project.category}
                        </span>
                        <h2 className="text-3xl md:text-5xl font-bold text-white mb-4 leading-tight drop-shadow-lg">
                            {project.title}
                        </h2>
                        <div className="flex items-center text-gray-200 font-medium text-lg">
                            <MapPin className="w-5 h-5 mr-2 text-accent" />
                            {project.location}
                        </div>
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
