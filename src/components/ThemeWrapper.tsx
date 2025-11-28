'use client';

import { usePathname } from 'next/navigation';
import { useEffect } from 'react';

const gradients = {
    '/': { primary: '#3b82f6', secondary: '#8b5cf6', accent: '#ec4899' }, // Blue/Purple
    '/category/ai': { primary: '#10b981', secondary: '#3b82f6', accent: '#6366f1' }, // Emerald/Blue
    '/category/crypto': { primary: '#f59e0b', secondary: '#ea580c', accent: '#ef4444' }, // Amber/Orange
    '/category/mobile': { primary: '#ec4899', secondary: '#d946ef', accent: '#8b5cf6' }, // Pink/Purple
    '/category/space': { primary: '#6366f1', secondary: '#8b5cf6', accent: '#d946ef' }, // Indigo/Purple
    'default': { primary: '#3b82f6', secondary: '#8b5cf6', accent: '#ec4899' },
};

export default function ThemeWrapper({ children }: { children: React.ReactNode }) {
    const pathname = usePathname();

    useEffect(() => {
        // Determine which gradient to use based on the current path
        // Simple matching logic - can be expanded
        let theme = gradients['default'];

        if (pathname === '/') {
            theme = gradients['/'];
        } else if (pathname.startsWith('/category/ai')) {
            theme = gradients['/category/ai'];
        } else if (pathname.startsWith('/category/crypto')) {
            theme = gradients['/category/crypto'];
        } else if (pathname.startsWith('/category/mobile')) {
            theme = gradients['/category/mobile'];
        } else if (pathname.startsWith('/category/space')) {
            theme = gradients['/category/space'];
        }

        // Update CSS variables
        const root = document.documentElement;
        root.style.setProperty('--gradient-primary', theme.primary);
        root.style.setProperty('--gradient-secondary', theme.secondary);
        root.style.setProperty('--gradient-accent', theme.accent);

    }, [pathname]);

    return <>{children}</>;
}
