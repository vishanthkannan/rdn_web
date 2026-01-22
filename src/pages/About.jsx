const About = () => {
    return (
        <div className="py-16 bg-white transition-opacity duration-500">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <h1 className="text-4xl font-bold text-primary mb-4">About RDN Creators</h1>
                    <p className="text-xl text-slate-600 max-w-3xl mx-auto">
                        Established in 2016, we are a premier construction company based in Tamil Nadu, dedicated to transforming visions into reality.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center mb-20">
                    <div>
                        <img
                            src="https://images.unsplash.com/photo-1503387762-592deb58ef4e?q=80&w=2031&auto=format&fit=crop"
                            alt="Construction Site"
                            className="rounded-lg shadow-xl w-full h-[400px] object-cover"
                        />
                    </div>
                    <div>
                        <h2 className="text-3xl font-bold text-primary mb-6">Our Story</h2>
                        <p className="text-slate-600 mb-6 leading-relaxed">
                            RDN CREATORS was founded on December 12, 2016, with a mission to provide high-quality, reliable, and turnkey construction solutions.
                            Based in Omalur, Salem, we have grown to serve clients across Tamil Nadu, building a reputation for integrity and excellence.
                        </p>
                        <p className="text-slate-600 mb-6 leading-relaxed">
                            Our expertise spans across residential, commercial, and industrial projects. We take pride in our ability to manage complex projects
                            from conception to completion, ensuring every detail is perfect.
                        </p>
                        <div className="flex items-center space-x-4">
                            <div className="text-center p-4 bg-slate-50 rounded-lg border border-slate-100">
                                <span className="block text-3xl font-bold text-accent">2016</span>
                                <span className="text-sm text-slate-500">Founded</span>
                            </div>
                            <div className="text-center p-4 bg-slate-50 rounded-lg border border-slate-100">
                                <span className="block text-3xl font-bold text-accent">200+</span>
                                <span className="text-sm text-slate-500">Projects</span>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Mission & Vision */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div className="bg-slate-900 text-white p-8 rounded-xl shadow-lg">
                        <h3 className="text-2xl font-bold mb-4 text-accent">Our Mission</h3>
                        <p className="text-slate-300 leading-relaxed">
                            To deliver superior construction services by consistently improving the quality of our product;
                            to add value for clients through innovation, foresight, integrity, and aggressive performance;
                            and to serve with character and purpose.
                        </p>
                    </div>
                    <div className="bg-slate-50 p-8 rounded-xl shadow-lg border border-slate-100">
                        <h3 className="text-2xl font-bold mb-4 text-primary">Our Vision</h3>
                        <p className="text-slate-600 leading-relaxed">
                            To be the leading turnkey construction company in the region, recognized for our commitment to quality,
                            safety, and customer satisfaction, building a legacy that stands the test of time.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default About;
