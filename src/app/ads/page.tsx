'use client';

import { motion } from 'framer-motion';
import { Megaphone, TrendingUp, Users } from 'lucide-react';
import { Tilt } from 'react-tilt';

export default function AdsPage() {
    return (
        <div className="min-h-screen pt-32 pb-20 px-4 sm:px-6 lg:px-8">
            <div className="max-w-5xl mx-auto">
                <div className="text-center mb-20">
                    <motion.h1
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="text-5xl md:text-7xl font-black text-white mb-6 bg-clip-text text-transparent bg-gradient-to-r from-yellow-400 to-amber-600"
                    >
                        Advertise with Tech Nova
                    </motion.h1>
                    <p className="text-xl text-gray-400 max-w-2xl mx-auto">
                        Reach a global audience of tech enthusiasts, developers, and innovators.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
                    {[
                        { icon: Users, title: "Global Reach", desc: "Connect with millions of tech-savvy readers worldwide." },
                        { icon: TrendingUp, title: "High Engagement", desc: "Our interactive 3D platform keeps users engaged longer." },
                        { icon: Megaphone, title: "Premium Spots", desc: "Exclusive ad placements that blend seamlessly with our design." }
                    ].map((item, i) => (
                        <Tilt key={i} options={{ max: 15, scale: 1.05 }}>
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ delay: i * 0.1 }}
                                className="glass-panel p-8 rounded-2xl text-center h-full border-t-4 border-t-yellow-500"
                            >
                                <div className="w-16 h-16 mx-auto bg-yellow-500/10 rounded-full flex items-center justify-center text-yellow-500 mb-6">
                                    <item.icon className="w-8 h-8" />
                                </div>
                                <h3 className="text-xl font-bold text-white mb-4">{item.title}</h3>
                                <p className="text-gray-400">{item.desc}</p>
                            </motion.div>
                        </Tilt>
                    ))}
                </div>

                <div className="glass-panel p-12 rounded-3xl text-center max-w-3xl mx-auto">
                    <h2 className="text-3xl font-bold text-white mb-6">Ready to Grow?</h2>
                    <p className="text-gray-400 mb-8">
                        Contact our ad sales team to discuss custom packages and partnerships.
                    </p>
                    <a
                        href="mailto:vinayaksoni446@gmail.com?subject=Advertising Inquiry"
                        className="inline-block px-10 py-4 bg-gradient-to-r from-yellow-500 to-amber-600 text-black font-bold rounded-full hover:scale-105 transition-transform"
                    >
                        Contact Sales Team
                    </a>
                </div>
            </div>
        </div>
    );
}
