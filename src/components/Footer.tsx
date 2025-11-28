'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { Github, Linkedin, Youtube } from 'lucide-react';

export default function Footer() {
    return (
        <footer className="relative mt-32 pb-12 px-4 sm:px-6 lg:px-8 overflow-hidden font-inter">
            <div className="absolute inset-0 bg-gradient-to-t from-blue-900/30 via-purple-900/15 to-transparent pointer-events-none" />
            <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-blue-400/50 to-transparent opacity-70" />

            <div className="relative max-w-7xl mx-auto z-10">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
                    {/* Brand */}
                    <div className="space-y-6">
                        <h3 className="text-3xl font-black bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500 tracking-tighter">TECH NOVA</h3>
                        <p className="text-gray-400 text-sm leading-relaxed">
                            Delivering the future of technology news directly to your screen with immersive 3D experiences.
                        </p>
                    </div>

                    {/* Categories */}
                    <div>
                        <h4 className="text-sm font-bold text-white uppercase tracking-wider mb-6">Explore</h4>
                        <ul className="space-y-4">
                            <li>
                                <motion.a
                                    href="https://www.ibm.com/think/topics/artificial-intelligence"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    whileHover={{ x: 8, scale: 1.05 }}
                                    className="text-gray-400 hover:text-blue-400 transition-colors text-sm block transform duration-300"
                                >
                                    AI
                                </motion.a>
                            </li>
                            <li>
                                <motion.a
                                    href="https://www.youtube.com/gaming"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    whileHover={{ x: 8, scale: 1.05 }}
                                    className="text-gray-400 hover:text-blue-400 transition-colors text-sm block transform duration-300"
                                >
                                    Gaming
                                </motion.a>
                            </li>
                            <li>
                                <motion.a
                                    href="https://techstartups.com/"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    whileHover={{ x: 8, scale: 1.05 }}
                                    className="text-gray-400 hover:text-blue-400 transition-colors text-sm block transform duration-300"
                                >
                                    Startups
                                </motion.a>
                            </li>
                            <li>
                                <motion.a
                                    href="https://www.gadgets360.com/"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    whileHover={{ x: 8, scale: 1.05 }}
                                    className="text-gray-400 hover:text-blue-400 transition-colors text-sm block transform duration-300"
                                >
                                    Gadgets
                                </motion.a>
                            </li>
                            <li>
                                <motion.a
                                    href="https://www.fortinet.com/resources/cyberglossary/what-is-cybersecurity"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    whileHover={{ x: 8, scale: 1.05 }}
                                    className="text-gray-400 hover:text-blue-400 transition-colors text-sm block transform duration-300"
                                >
                                    Cybersecurity
                                </motion.a>
                            </li>
                            <li>
                                <motion.a
                                    href="https://www.kaspersky.com/resource-center/definitions/what-is-cryptocurrency"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    whileHover={{ x: 8, scale: 1.05 }}
                                    className="text-gray-400 hover:text-blue-400 transition-colors text-sm block transform duration-300"
                                >
                                    Crypto
                                </motion.a>
                            </li>
                        </ul>
                    </div>

                    {/* Company */}
                    <div>
                        <h4 className="text-sm font-bold text-white uppercase tracking-wider mb-6">Company</h4>
                        <ul className="space-y-4">
                            <li>
                                <motion.a
                                    href="about.html"
                                    whileHover={{ x: 8, scale: 1.05 }}
                                    className="text-gray-400 hover:text-blue-400 transition-colors text-sm block transform duration-300"
                                >
                                    About Us
                                </motion.a>
                            </li>
                            <li>
                                <motion.a
                                    href="contact.html"
                                    whileHover={{ x: 8, scale: 1.05 }}
                                    className="text-gray-400 hover:text-blue-400 transition-colors text-sm block transform duration-300"
                                >
                                    Contact
                                </motion.a>
                            </li>
                            <li>
                                <motion.a
                                    href="ads.html"
                                    whileHover={{ x: 8, scale: 1.05 }}
                                    className="text-gray-400 hover:text-blue-400 transition-colors text-sm block transform duration-300"
                                >
                                    Advertise
                                </motion.a>
                            </li>
                            <li>
                                <motion.a
                                    href="privacy.html"
                                    whileHover={{ x: 8, scale: 1.05 }}
                                    className="text-gray-400 hover:text-blue-400 transition-colors text-sm block transform duration-300"
                                >
                                    Privacy Policy
                                </motion.a>
                            </li>
                            <li>
                                <motion.a
                                    href="terms.html"
                                    whileHover={{ x: 8, scale: 1.05 }}
                                    className="text-gray-400 hover:text-blue-400 transition-colors text-sm block transform duration-300"
                                >
                                    Terms of Service
                                </motion.a>
                            </li>
                        </ul>
                    </div>

                    {/* Socials */}
                    <div>
                        <h4 className="text-sm font-bold text-white uppercase tracking-wider mb-6">Connect</h4>
                        <div className="flex justify-center md:justify-start space-x-6">
                            <motion.a
                                whileHover={{ scale: 1.3, rotate: 360 }}
                                whileTap={{ scale: 0.85 }}
                                transition={{ type: "spring", stiffness: 400, damping: 10 }}
                                href="https://github.com"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="w-12 h-12 rounded-full bg-gradient-to-br from-purple-500 to-pink-600 flex items-center justify-center hover:from-purple-600 hover:to-pink-700 transition-all duration-300 shadow-lg hover:shadow-pink-500/50"
                            >
                                <Github className="w-5 h-5 text-white" />
                            </motion.a>

                            <motion.a
                                whileHover={{ scale: 1.3, rotate: 360 }}
                                whileTap={{ scale: 0.85 }}
                                transition={{ type: "spring", stiffness: 400, damping: 10 }}
                                href="https://linkedin.com"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="w-12 h-12 rounded-full bg-gradient-to-br from-blue-500 to-cyan-600 flex items-center justify-center hover:from-blue-600 hover:to-cyan-700 transition-all duration-300 shadow-lg hover:shadow-cyan-500/50"
                            >
                                <Linkedin className="w-5 h-5 text-white" />
                            </motion.a>

                            <motion.a
                                whileHover={{ scale: 1.3, rotate: 360 }}
                                whileTap={{ scale: 0.85 }}
                                transition={{ type: "spring", stiffness: 400, damping: 10 }}
                                href="https://youtube.com"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="w-12 h-12 rounded-full bg-gradient-to-br from-red-500 to-orange-600 flex items-center justify-center hover:from-red-600 hover:to-orange-700 transition-all duration-300 shadow-lg hover:shadow-orange-500/50"
                            >
                                <Youtube className="w-5 h-5 text-white" />
                            </motion.a>
                        </div>
                    </div>
                </div>

                <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center text-xs text-gray-500 gap-4">
                    <p>&copy; {new Date().getFullYear()} Tech Nova. All rights reserved.</p>

                    <motion.div
                        className="flex items-center gap-3"
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: 0.5 }}
                    >
                        <motion.h3
                            className="text-2xl font-black tracking-tighter"
                            style={{
                                background: "linear-gradient(90deg, #22d3ee, #a855f7, #ec4899, #22d3ee)",
                                backgroundSize: "200% 100%",
                                WebkitBackgroundClip: "text",
                                backgroundClip: "text",
                                color: "transparent",
                            }}
                            animate={{
                                backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
                            }}
                            transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
                        >
                            TECH NOVA
                        </motion.h3>
                    </motion.div>

                    <motion.p
                        className="mt-2 md:mt-0 flex items-center bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent font-bold"
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.6 }}
                        whileHover={{ scale: 1.05 }}
                    >
                        <motion.span
                            animate={{
                                textShadow: [
                                    "0 0 4px rgba(59, 130, 246, 0.5)",
                                    "0 0 8px rgba(168, 85, 247, 0.5)",
                                    "0 0 4px rgba(59, 130, 246, 0.5)"
                                ]
                            }}
                            transition={{ duration: 2, repeat: Infinity }}
                        >
                            Created by Vinayak in Google Antigravity
                        </motion.span>
                    </motion.p>
                </div>
            </div>
        </footer>
    );
}
