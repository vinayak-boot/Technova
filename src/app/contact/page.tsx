'use client';

import { motion } from 'framer-motion';
import { Mail, MapPin, Phone, Send } from 'lucide-react';

export default function ContactPage() {
    return (
        <div className="min-h-screen pt-32 pb-20 px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto">
                <motion.div
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="text-center mb-16"
                >
                    <h1 className="text-5xl font-black text-white mb-4 bg-clip-text text-transparent bg-gradient-to-r from-pink-500 to-orange-500">
                        Get in Touch
                    </h1>
                    <p className="text-xl text-gray-400">
                        Have a project in mind? Let's build something amazing together.
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                    {/* Contact Info */}
                    <div className="space-y-8">
                        <div className="glass-panel p-8 rounded-2xl space-y-6">
                            <div className="flex items-center space-x-4">
                                <div className="w-12 h-12 rounded-full bg-pink-500/20 flex items-center justify-center text-pink-500">
                                    <Mail className="w-6 h-6" />
                                </div>
                                <div>
                                    <h3 className="text-white font-bold">Email</h3>
                                    <p className="text-gray-400">vinayaksoni446@gmail.com</p>
                                </div>
                            </div>

                            <div className="flex items-center space-x-4">
                                <div className="w-12 h-12 rounded-full bg-orange-500/20 flex items-center justify-center text-orange-500">
                                    <MapPin className="w-6 h-6" />
                                </div>
                                <div>
                                    <h3 className="text-white font-bold">Location</h3>
                                    <p className="text-gray-400">Global / Remote</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Form */}
                    <motion.form
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.2 }}
                        className="glass-panel p-8 rounded-2xl space-y-6"
                        onSubmit={(e) => e.preventDefault()}
                    >
                        <div>
                            <label className="block text-sm font-medium text-gray-400 mb-2">Name</label>
                            <input type="text" className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-pink-500 transition-colors" placeholder="Your Name" />
                        </div>
                        <div>
                            <label className="block text-sm font-medium text-gray-400 mb-2">Email</label>
                            <input type="email" className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-pink-500 transition-colors" placeholder="your@email.com" />
                        </div>
                        <div>
                            <label className="block text-sm font-medium text-gray-400 mb-2">Message</label>
                            <textarea rows={4} className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-pink-500 transition-colors" placeholder="Tell me about your project..."></textarea>
                        </div>
                        <button className="w-full py-4 bg-gradient-to-r from-pink-500 to-orange-500 text-white font-bold rounded-lg hover:opacity-90 transition-opacity flex items-center justify-center">
                            Send Message <Send className="ml-2 w-4 h-4" />
                        </button>
                    </motion.form>
                </div>
            </div>
        </div>
    );
}
