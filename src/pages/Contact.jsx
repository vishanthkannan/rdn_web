import { MapPin, Phone, Mail, Clock } from 'lucide-react';

const Contact = () => {
    const handleSubmit = (e) => {
        e.preventDefault();
        alert("The form was submitted! Since this is a demo, no data was sent.");
    };

    return (
        <div className="py-16 bg-slate-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <h1 className="text-4xl font-bold text-primary mb-4">Contact Us</h1>
                    <p className="text-xl text-slate-600 max-w-2xl mx-auto">
                        Get in touch with us effectively. We are here to answer your questions and discuss your project.
                    </p>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                    {/* Contact Information */}
                    <div className="bg-white p-8 rounded-lg shadow-md">
                        <h2 className="text-2xl font-bold text-primary mb-6">Get In Touch</h2>

                        <div className="space-y-8">
                            <div className="flex items-start space-x-4">
                                <div className="bg-slate-100 p-3 rounded-full text-accent">
                                    <MapPin size={24} />
                                </div>
                                <div>
                                    <h3 className="text-lg font-bold text-primary">Our Location</h3>
                                    <p className="text-slate-600 mt-1">
                                        5/17, Vellapillayar Kovil, Gobinathapuram,<br />
                                        Sakkaraichettipatti, Omalur,<br />
                                        Salem – 636305, Tamil Nadu, India
                                    </p>
                                </div>
                            </div>

                            <div className="flex items-start space-x-4">
                                <div className="bg-slate-100 p-3 rounded-full text-accent">
                                    <Phone size={24} />
                                </div>
                                <div>
                                    <h3 className="text-lg font-bold text-primary">Phone Numbers</h3>
                                    <p className="text-slate-600 mt-1">
                                        +91 95133 33935<br />
                                        +91 95133 33852
                                    </p>
                                </div>
                            </div>

                            <div className="flex items-start space-x-4">
                                <div className="bg-slate-100 p-3 rounded-full text-accent">
                                    <Mail size={24} />
                                </div>
                                <div>
                                    <h3 className="text-lg font-bold text-primary">Email Address</h3>
                                    <p className="text-slate-600 mt-1">rdncreators@gmail.com</p>
                                </div>
                            </div>

                            <div className="flex items-start space-x-4">
                                <div className="bg-slate-100 p-3 rounded-full text-accent">
                                    <Clock size={24} />
                                </div>
                                <div>
                                    <h3 className="text-lg font-bold text-primary">Working Hours</h3>
                                    <p className="text-slate-600 mt-1">
                                        Mon - Sat: 9:00 AM - 6:00 PM<br />
                                        Sun: Closed
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Contact Form */}
                    <div className="bg-white p-8 rounded-lg shadow-md">
                        <h2 className="text-2xl font-bold text-primary mb-6">Send us a Message</h2>
                        <form onSubmit={handleSubmit} className="space-y-6">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div>
                                    <label htmlFor="name" className="block text-sm font-medium text-slate-700 mb-1">Your Name</label>
                                    <input type="text" id="name" required className="w-full px-4 py-2 border border-slate-300 rounded-md focus:ring-2 focus:ring-accent focus:border-transparent outline-none transition-all" placeholder="vishanth" />
                                </div>
                                <div>
                                    <label htmlFor="phone" className="block text-sm font-medium text-slate-700 mb-1">Phone Number</label>
                                    <input type="tel" id="phone" required className="w-full px-4 py-2 border border-slate-300 rounded-md focus:ring-2 focus:ring-accent focus:border-transparent outline-none transition-all" placeholder="+91 1234567895" />
                                </div>
                            </div>
                            <div>
                                <label htmlFor="email" className="block text-sm font-medium text-slate-700 mb-1">Email Address</label>
                                <input type="email" id="email" required className="w-full px-4 py-2 border border-slate-300 rounded-md focus:ring-2 focus:ring-accent focus:border-transparent outline-none transition-all" placeholder="vishanth@gmail.com" />
                            </div>
                            <div>
                                <label htmlFor="subject" className="block text-sm font-medium text-slate-700 mb-1">Subject</label>
                                <select id="subject" className="w-full px-4 py-2 border border-slate-300 rounded-md focus:ring-2 focus:ring-accent focus:border-transparent outline-none transition-all">
                                    <option>General Inquiry</option>
                                    <option>New Construction Quote</option>
                                    <option>Renovation Quote</option>
                                    <option>Other</option>
                                </select>
                            </div>
                            <div>
                                <label htmlFor="message" className="block text-sm font-medium text-slate-700 mb-1">Message</label>
                                <textarea id="message" rows="4" required className="w-full px-4 py-2 border border-slate-300 rounded-md focus:ring-2 focus:ring-accent focus:border-transparent outline-none transition-all" placeholder="Tell us about your project requirements..."></textarea>
                            </div>
                            <button type="submit" className="w-full bg-accent hover:bg-accent-hover text-white font-bold py-3 px-6 rounded-md transition-colors duration-300">
                                Send Message
                            </button>
                        </form>
                    </div>
                </div>

                {/* Map Placeholder */}
                {/* Google Map */}
                <div className="mt-16 rounded-xl overflow-hidden shadow-lg h-[450px] border border-slate-200">
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

export default Contact;
