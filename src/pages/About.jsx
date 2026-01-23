import { Award, Users, Target, ShieldCheck } from 'lucide-react';

const About = () => {
    return (
        <div className="bg-slate-50 min-h-screen">
            {/* Hero Section */}
            <div className="relative bg-slate-900 text-white py-24 overflow-hidden">
                <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1487958449943-2429e8be8625?q=80&w=2070&auto=format&fit=crop')] bg-cover bg-center opacity-20" />
                <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <span className="text-accent font-bold tracking-widest uppercase mb-4 block">Our Journey</span>
                    <h1 className="text-5xl md:text-7xl font-bold mb-6">Building Legacies Since 2016</h1>
                    <p className="text-xl text-slate-300 max-w-2xl mx-auto leading-relaxed">
                        From humble beginnings in Salem to becoming a premier construction partner across Tamil Nadu, RDN Creators is dedicated to transforming visions into reality.
                    </p>
                </div>
            </div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
                {/* Story Section */}
                <div className="flex flex-col lg:flex-row gap-16 items-start mb-24">
                    <div className="lg:w-1/2 relative">
                        <div className="absolute top-0 left-0 w-20 h-20 border-t-4 border-l-4 border-accent -translate-x-4 -translate-y-4" />
                        <img
                            src="https://images.unsplash.com/photo-1503387762-592deb58ef4e?q=80&w=2031&auto=format&fit=crop"
                            alt="Construction Site"
                            className="rounded-lg shadow-2xl w-full h-[500px] object-cover grayscale hover:grayscale-0 transition-all duration-700"
                        />
                        <div className="absolute -bottom-10 -right-10 bg-white p-8 shadow-xl rounded-lg border-l-4 border-accent hidden md:block">
                            <p className="text-4xl font-bold text-slate-900 mb-1">10+</p>
                            <p className="text-slate-500 font-medium uppercase tracking-wide text-sm">Years of Excellence</p>
                        </div>
                    </div>
                    <div className="lg:w-1/2 pt-8">
                        <h2 className="text-3xl font-bold text-slate-900 mb-6">Who We Are</h2>
                        <p className="text-slate-600 mb-6 leading-loose text-lg">
                            Founded on <span className="font-semibold text-slate-900">December 12, 2016</span>, RDN CREATORS began with a singular mission: to provide high-quality, reliable, turnkey construction solutions that people can trust.
                        </p>
                        <p className="text-slate-600 mb-8 leading-loose text-lg">
                            Based in <span className="text-accent font-medium">Omalur, Salem</span>, we have grown to serve clients across the region. We don't just build structures; we build relationships. Our integrity, transparency, and commitment to perfection have made us the go-to partner for residential, commercial, and industrial projects.
                        </p>

                        <div className="grid grid-cols-2 gap-8 mt-8">
                            <div>
                                <h3 className="text-4xl font-bold text-slate-900 mb-2">200+</h3>
                                <p className="text-slate-500">Projects Completed</p>
                            </div>
                            <div>
                                <h3 className="text-4xl font-bold text-slate-900 mb-2">98%</h3>
                                <p className="text-slate-500">Client Satisfaction</p>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Mission & Vision Cards */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-24">
                    <div className="group bg-white p-10 rounded-2xl shadow-sm border border-slate-100 hover:border-accent/30 hover:shadow-xl transition-all duration-300">
                        <div className="w-14 h-14 bg-accent/10 rounded-xl flex items-center justify-center mb-6 text-accent group-hover:scale-110 transition-transform">
                            <Target size={32} />
                        </div>
                        <h3 className="text-2xl font-bold text-slate-900 mb-4 group-hover:text-accent transition-colors">Our Mission</h3>
                        <p className="text-slate-600 leading-relaxed">
                            To deliver superior construction services by consistently improving quality, adding value through innovation, and serving with character and purpose.
                        </p>
                    </div>
                    <div className="group bg-white p-10 rounded-2xl shadow-sm border border-slate-100 hover:border-accent/30 hover:shadow-xl transition-all duration-300">
                        <div className="w-14 h-14 bg-blue-50 rounded-xl flex items-center justify-center mb-6 text-blue-600 group-hover:scale-110 transition-transform">
                            <Award size={32} />
                        </div>
                        <h3 className="text-2xl font-bold text-slate-900 mb-4 group-hover:text-blue-600 transition-colors">Our Vision</h3>
                        <p className="text-slate-600 leading-relaxed">
                            To be the leading turnkey construction company in the region, recognized for quality, safety, and building a legacy that stands the test of time.
                        </p>
                    </div>
                </div>

                {/* Core Values */}
                <div className="text-center mb-16">
                    <h2 className="text-3xl font-bold text-slate-900 mb-4">Core Values</h2>
                    <div className="flex flex-wrap justify-center gap-4 mt-8">
                        {["Integrity", "Quality", "Innovation", "Safety", "Collaboration"].map((val, idx) => (
                            <span key={idx} className="px-6 py-3 bg-white shadow-sm border border-slate-200 rounded-full text-slate-700 font-medium hover:border-accent hover:text-accent transition-colors cursor-default">
                                {val}
                            </span>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default About;
