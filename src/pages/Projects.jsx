const Projects = () => {
    const projects = [
        { id: 1, title: "Modern Residential Villa", category: "Residential", image: "https://images.unsplash.com/photo-1600596542815-e328701102b9?q=80&w=2074&auto=format&fit=crop" },
        { id: 2, title: "Corporate Office Complex", category: "Commercial", image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=2070&auto=format&fit=crop" },
        { id: 3, title: "Luxury Apartment Interior", category: "Interior", image: "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?q=80&w=2000&auto=format&fit=crop" },
        { id: 4, title: "Industrial Warehouse", category: "Industrial", image: "https://images.unsplash.com/photo-1581094794329-c8112a89af12?q=80&w=2070&auto=format&fit=crop" },
        { id: 5, title: "Shopping Mall Facade", category: "Commercial", image: "https://images.unsplash.com/photo-1555636222-cae831e670b3?q=80&w=2077&auto=format&fit=crop" },
        { id: 6, title: "Eco-Friendly Home", category: "Residential", image: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?q=80&w=2070&auto=format&fit=crop" },
    ];

    return (
        <div className="py-16 bg-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <h1 className="text-4xl font-bold text-primary mb-4">Our Projects</h1>
                    <p className="text-xl text-slate-600 max-w-2xl mx-auto">
                        A glimpse into our portfolio of excellence.
                        <br />
                        <span className="text-sm italic text-slate-500">(Sample visualization - actual project images to be updated)</span>
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {projects.map((project) => (
                        <div key={project.id} className="group relative overflow-hidden rounded-lg shadow-lg cursor-pointer">
                            <div className="aspect-w-4 aspect-h-3">
                                <img
                                    src={project.image}
                                    alt={project.title}
                                    className="w-full h-64 object-cover transform group-hover:scale-110 transition-transform duration-500"
                                />
                            </div>
                            <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6">
                                <span className="text-accent font-bold uppercase tracking-wider text-sm mb-1">{project.category}</span>
                                <h3 className="text-white text-xl font-bold">{project.title}</h3>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Projects;
