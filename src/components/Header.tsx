'use client';

import { motion } from 'framer-motion';

export default function Header() {
    return (
        <header className="fixed top-0 left-0 right-0 h-14 sm:h-16 bg-black/50 backdrop-blur-md z-50 flex items-center justify-center px-2 sm:px-4 md:px-6 lg:px-8">
            {/* News Ticker */}
            <div className="flex-1 max-w-4xl overflow-hidden relative h-8 items-center bg-white/5 rounded-full px-3 sm:px-4 border border-white/5">
                <motion.div
                    className="whitespace-nowrap text-xs sm:text-sm text-gray-300 flex items-center space-x-8"
                    animate={{ x: ["100%", "-100%"] }}
                    transition={{ repeat: Infinity, duration: 20, ease: "linear" }}
                >
                    <span>AI takes over the world... peacefully! 🤖</span>
                    <span>Bitcoin hits new all-time high! 🚀</span>
                    <span>New quantum computer solves universe's secrets! 🌌</span>
                    <span>SpaceX lands on Mars! 🪐</span>
                </motion.div>
            </div>
        </header>
    );
}
