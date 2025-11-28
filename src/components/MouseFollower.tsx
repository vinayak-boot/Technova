'use client';

import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

export default function MouseFollower() {
    const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
    const [cursorVariant, setCursorVariant] = useState("default");

    useEffect(() => {
        const mouseMove = (e: MouseEvent) => {
            setMousePosition({
                x: e.clientX,
                y: e.clientY
            });
        };

        window.addEventListener("mousemove", mouseMove);

        return () => {
            window.removeEventListener("mousemove", mouseMove);
        };
    }, []);

    const variants = {
        default: {
            x: mousePosition.x - 16,
            y: mousePosition.y - 16,
        }
    };

    return (
        <motion.div
            className="fixed top-0 left-0 w-8 h-8 bg-blue-500 rounded-full pointer-events-none z-[100] mix-blend-screen blur-md opacity-70"
            variants={variants}
            animate={cursorVariant}
            transition={{
                type: "spring",
                stiffness: 500,
                damping: 28,
                mass: 0.5
            }}
        />
    );
}
