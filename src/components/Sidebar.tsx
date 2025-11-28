'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { Cpu, Code, Coins, Home, Info, Mail, Gamepad2, Rocket, Smartphone, Lock } from 'lucide-react';
import { Tilt } from 'react-tilt';

const menuItems = [
    { name: 'Home', icon: Home, href: 'file:///D:/CODING/Tech%20News%20Website/out/index.html', gradient: 'from-blue-500 to-cyan-500' },
    { name: 'AI', icon: Cpu, href: 'https://www.ibm.com/think/topics/artificial-intelligence', gradient: 'from-purple-500 to-pink-500' },
    { name: 'Gaming', icon: Gamepad2, href: 'https://www.youtube.com/gaming', gradient: 'from-red-500 to-orange-500' },
    { name: 'Tech Startups', icon: Rocket, href: 'https://techstartups.com/', gradient: 'from-green-500 to-emerald-500' },
    { name: 'Gadgets', icon: Smartphone, href: 'https://www.gadgets360.com/', gradient: 'from-cyan-500 to-blue-500' },
    { name: 'Cybersecurity', icon: Lock, href: 'https://www.fortinet.com/resources/cyberglossary/what-is-cybersecurity#:~:text=Cybersecurity%3A%20Meaning%20%26%20Definition,from%20cyberattacks%20and%20unauthorized%20access.', gradient: 'from-red-600 to-rose-600' },
    { name: 'Programming', icon: Code, href: 'https://www.w3schools.com/programming/index.php', gradient: 'from-indigo-500 to-purple-500' },
    { name: 'Crypto', icon: Coins, href: 'https://www.kaspersky.com/resource-center/definitions/what-is-cryptocurrency', gradient: 'from-yellow-500 to-amber-500' },
    { name: 'About', icon: Info, href: 'about.html', gradient: 'from-teal-500 to-cyan-500' },
    { name: 'Contact', icon: Mail, href: 'contact.html', gradient: 'from-pink-500 to-rose-500' },
];

export default function Sidebar() {
    const [isOpen, setIsOpen] = useState(false);
    const [gradientIndex, setGradientIndex] = useState(0);

    const gradients = [
        'from-gray-950 via-slate-900 to-black',
        'from-slate-950 via-gray-900 to-black',
        'from-neutral-950 via-zinc-900 to-black',
        'from-zinc-950 via-neutral-900 to-black',
        'from-stone-950 via-gray-900 to-black',
    ];

    useEffect(() => {
        const interval = setInterval(() => {
            setGradientIndex((prev) => (prev + 1) % gradients.length);
        }, 3000); // Change every 3 seconds
        return () => clearInterval(interval);
    }, []);

    return (
        <>
            {/* Toggle Button */}
            <button
                onClick={() => setIsOpen(!isOpen)}
                className="fixed top-8 left-8 z-[60] group"
            >
                <div className="space-y-2">
                    <span className={`block w-8 h-0.5 bg-white transition-all duration-300 ${isOpen ? 'rotate-45 translate-y-2.5' : ''}`}></span>
                    <span className={`block w-8 h-0.5 bg-white transition-all duration-300 ${isOpen ? 'opacity-0' : ''}`}></span>
                    <span className={`block w-8 h-0.5 bg-white transition-all duration-300 ${isOpen ? '-rotate-45 -translate-y-2.5' : ''}`}></span>
                </div>
            </button>

            {/* Sidebar Overlay */}
            <AnimatePresence>
                {isOpen && (
                    <>
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            transition={{ duration: 0.15 }}
                            onClick={() => setIsOpen(false)}
                            className="fixed inset-0 bg-black/80 backdrop-blur-sm z-40"
                        />

                        <motion.div
                            initial={{ x: '-100%' }}
                            animate={{ x: 0 }}
                            exit={{ x: '-100%' }}
                            transition={{ type: "spring", stiffness: 600, damping: 20 }}
                            className={`fixed top-0 left-0 bottom-0 w-full sm:w-80 bg-gradient-to-br ${gradients[gradientIndex]} border-r border-white/10 z-50 p-6 sm:p-8 pt-20 sm:pt-24 overflow-y-auto shadow-2xl transition-all duration-3000 ease-in-out font-roboto`}
                        >
                            <div className="space-y-4 sm:space-y-6">
                                <h3 className="text-xs font-bold text-gray-500 uppercase tracking-widest mb-4">Your Choice</h3>
                                {menuItems.map((item, index) => {
                                    const isExternal = item.href.startsWith('http') || item.href.startsWith('file');
                                    return (
                                        <Tilt key={item.name} options={{ max: 15, scale: 1.05 }}>
                                            <Link
                                                href={item.href}
                                                onClick={() => setIsOpen(false)}
                                                className="block"
                                                target={isExternal ? "_blank" : undefined}
                                                rel={isExternal ? "noopener noreferrer" : undefined}
                                            >
                                                <motion.div
                                                    initial={{ x: -20, opacity: 0 }}
                                                    animate={{ x: 0, opacity: 1 }}
                                                    transition={{ delay: index * 0.02, duration: 0.15 }}
                                                    whileHover={{
                                                        scale: 1.05,
                                                        x: 10,
                                                        boxShadow: "0 10px 30px rgba(59, 130, 246, 0.5)"
                                                    }}
                                                    whileTap={{ scale: 0.95 }}
                                                    className={`flex items-center space-x-4 p-4 rounded-xl bg-white/5 hover:bg-gradient-to-r hover:${item.gradient} border border-white/5 hover:border-white/20 transition-all duration-300 group cursor-pointer`}
                                                >
                                                    <motion.div
                                                        whileHover={{ rotate: 360 }}
                                                        transition={{ duration: 0.5 }}
                                                    >
                                                        <item.icon className="w-6 h-6 text-gray-400 group-hover:text-white transition-colors" />
                                                    </motion.div>
                                                    <span className="text-lg font-bold text-gray-200 group-hover:text-white transition-colors">{item.name}</span>
                                                </motion.div>
                                            </Link>
                                        </Tilt>
                                    );
                                })}
                            </div>
                        </motion.div>
                    </>
                )}
            </AnimatePresence>
        </>
    );
}
