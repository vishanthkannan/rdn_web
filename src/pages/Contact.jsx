import { MapPin, Phone, Mail, Clock, Send } from 'lucide-react';

const Contact = () => {
    const handleSubmit = (e) => {
        e.preventDefault();
        alert("The form was submitted! Since this is a demo, no data was sent.");
    };

    return (
        <div className="bg-slate-50 min-h-screen pt-16">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-0 shadow-2xl rounded-3xl overflow-hidden mb-20 bg-white">

                    {/* Left Side: Contact Info */}
                    <div className="bg-slate-900 text-white p-12 lg:p-16 relative overflow-hidden">
                        {/* Decorative Circle */}
                        <div className="absolute -top-24 -right-24 w-64 h-64 bg-accent/20 rounded-full blur-3xl opacity-50 pointer-events-none" />

                        <h2 className="text-3xl font-bold mb-2 relative z-10">Get in Touch</h2>
                        <p className="text-slate-400 mb-12 text-lg relative z-10">Have a project in mind? We'd love to hear from you.</p>

                        <div className="space-y-10 relative z-10">
                            <ContactItem
                                icon={Phone}
                                title="Call Us"
                                content={["+91 95133 33935", "+91 95133 33852"]}
                            />
                            <ContactItem
                                icon={Mail}
                                title="Email Us"
                                content={["rdncreators@gmail.com"]}
                            />
                            <ContactItem
                                icon={MapPin}
                                title="Visit Us"
                                content={[
                                    "5/17, Vellapillayar Kovil, Gobinathapuram,",
                                    "Sakkaraichettipatti, Omalur,",
                                    "Salem – 636305, Tamil Nadu, India"
                                ]}
                            />
                            <ContactItem
                                icon={Clock}
                                title="Working Hours"
                                content={["Mon - Sat: 9:00 AM - 6:00 PM", "Sun: Closed"]}
                            />
                        </div>
                    </div>

                    {/* Right Side: Form */}
                    <div className="p-12 lg:p-16 bg-white relative overflow-hidden">
                        {/* Background Logo Watermark */}
                        <img
                            src="/rdn-logo.png"
                            alt=""
                            className="absolute inset-0 w-full h-full object-contain opacity-10 pointer-events-none animate-float"
                        />

                        <form onSubmit={handleSubmit} className="space-y-6 relative z-10">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <InputField label="Your Name" type="text" placeholder="Vishanth" />
                                <InputField label="Phone Number" type="tel" placeholder="+91 98765 43210" />
                            </div>
                            <InputField label="Email Address" type="email" placeholder="vishanth@example.com" />

                            <div>
                                <label className="block text-sm font-bold text-slate-700 mb-2 uppercase tracking-wide">Subject</label>
                                <select className="w-full px-4 py-3 bg-white/50 backdrop-blur-sm border border-slate-200 rounded-lg focus:ring-2 focus:ring-accent/50 focus:border-accent outline-none transition-all text-slate-700">
                                    <option>General Inquiry</option>
                                    <option>New Construction Quote</option>
                                    <option>Renovation Quote</option>
                                    <option>Other</option>
                                </select>
                            </div>

                            <div>
                                <label className="block text-sm font-bold text-slate-700 mb-2 uppercase tracking-wide">Message</label>
                                <textarea rows="4" className="w-full px-4 py-3 bg-white/25 backdrop-blur-sm border border-slate-200 rounded-lg focus:ring-2 focus:ring-accent/50 focus:border-accent outline-none transition-all resize-none" placeholder="Tell us about your project..."></textarea>
                            </div>

                            <button type="submit" className="w-full bg-accent hover:bg-accent-hover text-white font-bold py-4 px-6 rounded-lg transition-all duration-300 transform hover:-translate-y-1 hover:shadow-lg flex items-center justify-center gap-2 group">
                                Send Message
                                <Send size={20} className="group-hover:translate-x-1 transition-transform" />
                            </button>
                        </form>
                    </div>
                </div>

                {/* Map Section */}
                <div className="mb-20 rounded-2xl overflow-hidden shadow-lg border border-slate-200 h-[500px] grayscale hover:grayscale-0 transition-all duration-700">
                    <iframe
                        src="https://maps.google.com/maps?q=11.7639317,78.1065992&hl=en&z=17&output=embed"
                        width="100%"
                        height="100%"
                        style={{ border: 0 }}
                        allowFullScreen=""
                        loading="lazy"
                        referrerPolicy="no-referrer-when-downgrade"
                        title="RDN Creators Location"
                    ></iframe>
                </div>
            </div>
        </div>
    );
};

// Helper Components
const ContactItem = ({ icon: Icon, title, content }) => (
    <div className="flex items-start gap-4">
        <div className="p-3 bg-white/10 rounded-lg text-accent">
            <Icon size={24} />
        </div>
        <div>
            <h3 className="font-bold text-lg mb-1">{title}</h3>
            {content.map((line, i) => (
                <p key={i} className="text-slate-400 text-sm leading-relaxed">{line}</p>
            ))}
        </div>
    </div>
);

const InputField = ({ label, type, placeholder }) => (
    <div>
        <label className="block text-sm font-bold text-slate-700 mb-2 uppercase tracking-wide">{label}</label>
        <input
            type={type}
            placeholder={placeholder}
            required
            className="w-full px-4 py-3 bg-white/50 backdrop-blur-sm border border-slate-200 rounded-lg focus:ring-2 focus:ring-accent/50 focus:border-accent outline-none transition-all placeholder:text-slate-400"
        />
    </div>
);

export default Contact;
