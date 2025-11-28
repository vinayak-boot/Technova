'use client';

import Link from 'next/link';

export default function Navbar() {
    return (
        <nav className="fixed top-0 left-0 right-0 z-50 px-4 py-6 pointer-events-none">
            <div className="max-w-7xl mx-auto flex justify-between items-center">
                {/* Spacer for balance */}
                <div className="w-48"></div>

                {/* Center TECH NOVA (Original) */}
                <div className="absolute left-1/2 transform -translate-x-1/2 pointer-events-auto">
                    <div className="group relative block cursor-default">
                        <div className="absolute -inset-1 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 rounded-lg blur opacity-75 group-hover:opacity-100 transition duration-1000 group-hover:duration-200 animate-gradient bg-[length:200%_200%]"></div>
                        <div className="relative px-8 py-4 bg-black rounded-lg leading-none flex items-center space-x-4 border border-white/10">
                            <span className="text-3xl font-black bg-clip-text text-transparent bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 group-hover:scale-110 transition-transform duration-300 inline-block animate-gradient bg-[length:200%_200%]">
                                TECH NOVA
                            </span>
                            <span className="text-xs text-gray-400 uppercase tracking-widest border-l border-gray-700 pl-4">
                                Future of News
                            </span>
                        </div>
                    </div>
                </div>

                {/* Top Right TECH NOVA - Links to Homepage */}
                <div className="pointer-events-auto">
                    <Link href="/" className="group block">
                        <div className="relative">
                            <div className="absolute -inset-1 bg-gradient-to-r from-cyan-500 to-pink-500 rounded-lg blur opacity-60 group-hover:opacity-100 transition duration-300"></div>
                            <div className="relative px-6 py-2 bg-black rounded-lg border border-white/10">
                                <span className="text-2xl font-black bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500 group-hover:scale-105 transition-transform duration-300 inline-block">
                                    TECH NOVA
                                </span>
                            </div>
                        </div>
                    </Link>
                </div>
            </div>
        </nav>
    );
}
