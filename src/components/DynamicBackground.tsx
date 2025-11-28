'use client';

import { useEffect, useRef } from 'react';

export default function DynamicBackground() {
    const canvasRef = useRef<HTMLCanvasElement>(null);

    useEffect(() => {
        const canvas = canvasRef.current;
        if (!canvas) return;

        const ctx = canvas.getContext('2d');
        if (!ctx) return;

        let animationFrameId: number;
        let particles: Particle[] = [];

        const resizeCanvas = () => {
            canvas.width = window.innerWidth;
            canvas.height = window.innerHeight;
            initParticles();
        };

        class Particle {
            x: number;
            y: number;
            vx: number;
            vy: number;
            size: number;
            color: string;

            constructor() {
                this.x = Math.random() * canvas!.width;
                this.y = Math.random() * canvas!.height;
                this.vx = (Math.random() - 0.5) * 0.5;
                this.vy = (Math.random() - 0.5) * 0.5;
                this.size = Math.random() * 2 + 1;
                const colors = ['rgba(0, 245, 255, 0.5)', 'rgba(236, 72, 153, 0.5)', 'rgba(168, 85, 247, 0.5)'];
                this.color = colors[Math.floor(Math.random() * colors.length)];
            }

            update() {
                this.x += this.vx;
                this.y += this.vy;

                if (this.x < 0 || this.x > canvas!.width) this.vx *= -1;
                if (this.y < 0 || this.y > canvas!.height) this.vy *= -1;
            }

            draw() {
                if (!ctx) return;
                ctx.beginPath();
                ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
                ctx.fillStyle = this.color;
                ctx.fill();
            }
        }

        const initParticles = () => {
            particles = [];
            // Extreme optimization: Max 15 particles
            const particleCount = Math.min(window.innerWidth / 50, 15);
            for (let i = 0; i < particleCount; i++) {
                particles.push(new Particle());
            }
        };

        let lastTime = 0;
        const fps = 30;
        const interval = 1000 / fps;

        const animate = (currentTime: number) => {
            if (!ctx || !canvas) return;

            animationFrameId = requestAnimationFrame(animate);

            const deltaTime = currentTime - lastTime;
            if (deltaTime < interval) return;

            lastTime = currentTime - (deltaTime % interval);

            ctx.clearRect(0, 0, canvas.width, canvas.height);

            particles.forEach((p, index) => {
                p.update();
                p.draw();

                // Ultra-light connections: Only check 2 nearest neighbors
                for (let j = index + 1; j < Math.min(index + 3, particles.length); j++) {
                    const p2 = particles[j];
                    const dx = p.x - p2.x;
                    const dy = p.y - p2.y;
                    const distance = Math.sqrt(dx * dx + dy * dy);

                    if (distance < 100) {
                        ctx.beginPath();
                        ctx.strokeStyle = `rgba(255, 255, 255, ${0.1 * (1 - distance / 100)})`;
                        ctx.lineWidth = 0.5;
                        ctx.moveTo(p.x, p.y);
                        ctx.lineTo(p2.x, p2.y);
                        ctx.stroke();
                    }
                }
            });
        };

        window.addEventListener('resize', resizeCanvas);
        resizeCanvas();
        animationFrameId = requestAnimationFrame(animate);

        return () => {
            window.removeEventListener('resize', resizeCanvas);
            cancelAnimationFrame(animationFrameId);
        };
    }, []);

    return (
        <div className="fixed inset-0 -z-10 bg-black">
            <div className="absolute inset-0 bg-gradient-to-br from-black via-gray-900 to-black opacity-80" />
            <canvas
                ref={canvasRef}
                className="absolute inset-0 w-full h-full"
            />
        </div>
    );
}
