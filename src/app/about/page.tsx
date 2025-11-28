'use client';
import React, { useEffect } from 'react';
import './about.css';

export default function About() {
    useEffect(() => {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('visible');
                }
            });
        }, { threshold: 0.1 });

        document.querySelectorAll('.fade-in').forEach(el => observer.observe(el));

        // Clean up
        return () => observer.disconnect();
    }, []);

    return (
        <div className="about-page-wrapper text-white overflow-x-hidden">
            {/* Hero Section - No Profile Image */}
            <section className="hero">
                <div className="container">
                    <h1 className="gradient-text">VINAYAK SONI</h1>
                    <p className="subtitle">Frontend Developer</p>

                    <div className="contact-info">
                        <div className="contact-item">
                            <svg width="20" height="20" fill="currentColor" viewBox="0 0 20 20">
                                <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                            </svg>
                            <span>Bhopal, Madhya Pradesh</span>
                        </div>
                        <div className="contact-item">
                            <svg width="20" height="20" fill="currentColor" viewBox="0 0 20 20">
                                <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                                <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                            </svg>
                            <a href="mailto:vinayaksoni446@gmail.com" style={{ color: 'inherit', textDecoration: 'none' }}>vinayaksoni446@gmail.com</a>
                        </div>
                        <div className="contact-item">
                            <svg width="20" height="20" fill="currentColor" viewBox="0 0 24 24">
                                <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                            </svg>
                            <a href="https://www.linkedin.com/in/vinayak-soni-593273397/" target="_blank" rel="noopener noreferrer" style={{ color: 'inherit', textDecoration: 'none' }}>LinkedIn Profile</a>
                        </div>
                    </div>

                    <p className="intro">
                        Enthusiastic Frontend Developer with a passion for creating dynamic web applications.
                        Combining technical expertise with strong interpersonal skills to deliver exceptional results.
                    </p>
                </div>
            </section>

            {/* Professional Summary */}
            <section>
                <div className="container">
                    <h2 className="section-title gradient-text">Professional Summary</h2>
                    <div className="glass-card" style={{ padding: '48px' }}>
                        <p style={{ fontSize: '1.125rem', lineHeight: '1.75', marginBottom: '32px', color: '#d1d5db' }}>
                            Enthusiastic Frontend Developer Fresher with a Bachelor&apos;s degree in Computer Applications and strong skills in Technical and Interpersonal behaviour. Eager to contribute enthusiasm, adaptability, and a fresh perspective to a dynamic team at your reputed organization.
                        </p>
                        <h3 style={{ fontSize: '1.5rem', color: '#00f5ff', marginBottom: '32px', borderBottom: '2px solid rgba(0, 245, 255, 0.3)', paddingBottom: '12px' }}>💻 Code Craft</h3>
                        <div className="skills" style={{ marginBottom: '40px' }}>
                            <span className="skill-badge">HTML</span>
                            <span className="skill-badge">CSS</span>
                            <span className="skill-badge">JavaScript</span>
                            <span className="skill-badge">React JS</span>
                            <span className="skill-badge">Tailwind CSS</span>
                            <span className="skill-badge">Python</span>
                            <span className="skill-badge">OOP</span>
                        </div>

                        <h3 style={{ fontSize: '1.5rem', color: '#ec4899', marginBottom: '32px', borderBottom: '2px solid rgba(236, 72, 153, 0.3)', paddingBottom: '12px' }}>🎨 Design Studio</h3>
                        <div className="skills" style={{ marginBottom: '40px' }}>
                            <span className="skill-badge">Adobe Premiere Pro</span>
                            <span className="skill-badge">Figma</span>
                            <span className="skill-badge">Canva</span>
                            <span className="skill-badge">Adobe Express</span>
                        </div>

                        <h3 style={{ fontSize: '1.5rem', color: '#10b981', marginBottom: '32px', borderBottom: '2px solid rgba(16, 185, 129, 0.3)', paddingBottom: '12px' }}>🛠️ Dev Arsenal</h3>
                        <div className="skills">
                            <span className="skill-badge">GitHub</span>
                            <span className="skill-badge">Vercel</span>
                            <span className="skill-badge">Visual Studio Code</span>
                            <span className="skill-badge">Google Antigravity</span>
                            <span className="skill-badge">Prompt Engineering</span>
                        </div>
                    </div>
                </div>
            </section>

            {/* Education */}
            <section>
                <div className="container">
                    <h2 className="section-title gradient-text">Education</h2>
                    <div className="timeline">
                        {/* BCA */}
                        <div className="timeline-item fade-in">
                            <div className="timeline-icon">
                                <svg width="24" height="24" fill="white" viewBox="0 0 20 20">
                                    <path d="M10.394 2.08a1 1 0 00-.788 0l-7 3a1 1 0 000 1.84L5.25 8.051a.999.999 0 01.356-.257l4-1.714a1 1 0 11.788 1.838L7.667 9.088l1.94.831a1 1 0 00.787 0l7-3a1 1 0 000-1.838l-7-3zM3.31 9.397L5 10.12v4.102a8.969 8.969 0 00-1.05-.174 1 1 0 01-.89-.89 11.115 11.115 0 01.25-3.762zM9.3 16.573A9.026 9.026 0 007 14.935v-3.957l1.818.78a3 3 0 002.364 0l5.508-2.361a11.026 11.026 0 01.25 3.762 1 1 0 01-.89.89 8.968 8.968 0 00-5.35 2.524 1 1 0 01-1.4 0zM6 18a1 1 0 001-1v-2.065a8.935 8.935 0 00-2-.712V17a1 1 0 001 1z" />
                                </svg>
                            </div>
                            <div className="glass-card timeline-card">
                                <div className="timeline-header">
                                    <div>
                                        <div className="timeline-title">Bachelor of Computer Applications</div>
                                        <div className="timeline-subtitle">IES University</div>
                                    </div>
                                    <span className="timeline-year">2025</span>
                                </div>
                                <p style={{ color: '#d1d5db' }}>CGPA: <span style={{ color: 'white', fontWeight: 600 }}>7.26</span></p>
                                <p style={{ color: '#9ca3af', marginTop: '8px' }}>Specialization in Information Technology</p>
                            </div>
                        </div>

                        {/* DCA */}
                        <div className="timeline-item fade-in">
                            <div className="timeline-icon">
                                <svg width="24" height="24" fill="white" viewBox="0 0 20 20">
                                    <path d="M10.394 2.08a1 1 0 00-.788 0l-7 3a1 1 0 000 1.84L5.25 8.051a.999.999 0 01.356-.257l4-1.714a1 1 0 11.788 1.838L7.667 9.088l1.94.831a1 1 0 00.787 0l7-3a1 1 0 000-1.838l-7-3zM3.31 9.397L5 10.12v4.102a8.969 8.969 0 00-1.05-.174 1 1 0 01-.89-.89 11.115 11.115 0 01.25-3.762zM9.3 16.573A9.026 9.026 0 007 14.935v-3.957l1.818.78a3 3 0 002.364 0l5.508-2.361a11.026 11.026 0 01.25 3.762 1 1 0 01-.89.89 8.968 8.968 0 00-5.35 2.524 1 1 0 01-1.4 0zM6 18a1 1 0 001-1v-2.065a8.935 8.935 0 00-2-.712V17a1 1 0 001 1z" />
                                </svg>
                            </div>
                            <div className="glass-card timeline-card">
                                <div className="timeline-header">
                                    <div>
                                        <div className="timeline-title">Diploma in Computer Applications</div>
                                        <div className="timeline-subtitle">Makhanlal Chaturvedi University</div>
                                    </div>
                                    <span className="timeline-year">2024</span>
                                </div>
                                <p style={{ color: '#d1d5db' }}>Percentage: <span style={{ color: 'white', fontWeight: 600 }}>66.5%</span></p>
                                <p style={{ color: '#9ca3af', marginTop: '8px' }}>University of Journalism and Mass Communication</p>
                            </div>
                        </div>

                        {/* Higher Secondary */}
                        <div className="timeline-item fade-in">
                            <div className="timeline-icon">
                                <svg width="24" height="24" fill="white" viewBox="0 0 20 20">
                                    <path d="M10.394 2.08a1 1 0 00-.788 0l-7 3a1 1 0 000 1.84L5.25 8.051a.999.999 0 01.356-.257l4-1.714a1 1 0 11.788 1.838L7.667 9.088l1.94.831a1 1 0 00.787 0l7-3a1 1 0 000-1.838l-7-3zM3.31 9.397L5 10.12v4.102a8.969 8.969 0 00-1.05-.174 1 1 0 01-.89-.89 11.115 11.115 0 01.25-3.762zM9.3 16.573A9.026 9.026 0 007 14.935v-3.957l1.818.78a3 3 0 002.364 0l5.508-2.361a11.026 11.026 0 01.25 3.762 1 1 0 01-.89.89 8.968 8.968 0 00-5.35 2.524 1 1 0 01-1.4 0zM6 18a1 1 0 001-1v-2.065a8.935 8.935 0 00-2-.712V17a1 1 0 001 1z" />
                                </svg>
                            </div>
                            <div className="glass-card timeline-card">
                                <div className="timeline-header">
                                    <div>
                                        <div className="timeline-title">Higher Secondary</div>
                                        <div className="timeline-subtitle">Mother Teresa Sr. Sec Co-Ed School</div>
                                    </div>
                                    <span className="timeline-year">2022</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Certifications */}
            <section>
                <div className="container">
                    <h2 className="section-title gradient-text">Certifications & Courses</h2>
                    <div className="grid">
                        {/* Body Language */}
                        <div className="glass-card card fade-in">
                            <div className="card-icon">
                                <svg width="24" height="24" fill="white" viewBox="0 0 20 20">
                                    <path fillRule="evenodd" d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                                </svg>
                            </div>
                            <div className="card-title">Body Language: Key to Professional Success</div>
                            <div className="card-subtitle">NPTEL Skill India / Govt. of India</div>
                            <span className="timeline-year">2025</span>
                            <ul>
                                <li>
                                    <svg className="checkmark" width="20" height="20" fill="currentColor" viewBox="0 0 20 20">
                                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                                    </svg>
                                    <span>Improved Communication & Presentation Skills</span>
                                </li>
                                <li>
                                    <svg className="checkmark" width="20" height="20" fill="currentColor" viewBox="0 0 20 20">
                                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                                    </svg>
                                    <span>Professional Behavior & Confidence Building</span>
                                </li>
                                <li>
                                    <svg className="checkmark" width="20" height="20" fill="currentColor" viewBox="0 0 20 20">
                                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                                    </svg>
                                    <span>Mastered Non-verbal Communication Cues</span>
                                </li>
                                <li>
                                    <svg className="checkmark" width="20" height="20" fill="currentColor" viewBox="0 0 20 20">
                                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                                    </svg>
                                    <span>Enhanced Public Speaking Confidence</span>
                                </li>
                            </ul>
                        </div>

                        {/* Front End Development */}
                        <div className="glass-card card fade-in">
                            <div className="card-icon">
                                <svg width="24" height="24" fill="white" viewBox="0 0 20 20">
                                    <path fillRule="evenodd" d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                                </svg>
                            </div>
                            <div className="card-title">Front End Development</div>
                            <div className="card-subtitle">Simplilearn SkillUp</div>
                            <span className="timeline-year">2025</span>
                            <ul>
                                <li>
                                    <svg className="checkmark" width="20" height="20" fill="currentColor" viewBox="0 0 20 20">
                                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                                    </svg>
                                    <span>Technical Understanding & Attention to Detail</span>
                                </li>
                                <li>
                                    <svg className="checkmark" width="20" height="20" fill="currentColor" viewBox="0 0 20 20">
                                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                                    </svg>
                                    <span>Analytical Thinking & Problem Solving</span>
                                </li>
                                <li>
                                    <svg className="checkmark" width="20" height="20" fill="currentColor" viewBox="0 0 20 20">
                                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                                    </svg>
                                    <span>Built Responsive Web Layouts</span>
                                </li>
                                <li>
                                    <svg className="checkmark" width="20" height="20" fill="currentColor" viewBox="0 0 20 20">
                                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                                    </svg>
                                    <span>Implemented Modern CSS Techniques</span>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>

            {/* Experience */}
            <section>
                <div className="container">
                    <h2 className="section-title gradient-text">Professional Experience</h2>
                    <div className="grid">
                        <div className="glass-card card fade-in">
                            <div className="card-icon">
                                <svg width="24" height="24" fill="white" viewBox="0 0 20 20">
                                    <path fillRule="evenodd" d="M6 6V5a3 3 0 013-3h2a3 3 0 013 3v1h2a2 2 0 012 2v3.57A22.952 22.952 0 0110 13a22.95 22.95 0 01-8-1.43V8a2 2 0 012-2h2zm2-1a1 1 0 011-1h2a1 1 0 011 1v1H8V5zm1 5a1 1 0 011-1h.01a1 1 0 110 2H10a1 1 0 01-1-1z" clipRule="evenodd" />
                                    <path d="M2 13.692V16a2 2 0 002 2h12a2 2 0 002-2v-2.308A24.974 24.974 0 0110 15c-2.796 0-5.487-.46-8-1.308z" />
                                </svg>
                            </div>
                            <div className="card-title">Computer Operator and Website Manager</div>
                            <div className="card-subtitle">Shree Bhavans' Bharti Public School</div>
                            <div style={{ color: '#9ca3af', marginBottom: '8px' }}>Bhopal, Madhya Pradesh</div>
                            <span className="timeline-year">2025</span>
                            <ul>
                                <li>
                                    <svg className="checkmark" width="20" height="20" fill="currentColor" viewBox="0 0 20 20">
                                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                                    </svg>
                                    <span>Maintain accuracy in data entry tasks</span>
                                </li>
                                <li>
                                    <svg className="checkmark" width="20" height="20" fill="currentColor" viewBox="0 0 20 20">
                                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                                    </svg>
                                    <span>React with compliance during emergencies</span>
                                </li>
                                <li>
                                    <svg className="checkmark" width="20" height="20" fill="currentColor" viewBox="0 0 20 20">
                                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                                    </svg>
                                    <span>Effective coordination with IT professionals</span>
                                </li>
                            </ul>
                        </div>

                        {/* Leelavati */}
                        <div className="glass-card card fade-in">
                            <div className="card-icon">
                                <svg width="24" height="24" fill="white" viewBox="0 0 20 20">
                                    <path fillRule="evenodd" d="M6 6V5a3 3 0 013-3h2a3 3 0 013 3v1h2a2 2 0 012 2v3.57A22.952 22.952 0 0110 13a22.95 22.95 0 01-8-1.43V8a2 2 0 012-2h2zm2-1a1 1 0 011-1h2a1 1 0 011 1v1H8V5zm1 5a1 1 0 011-1h.01a1 1 0 110 2H10a1 1 0 01-1-1z" clipRule="evenodd" />
                                    <path d="M2 13.692V16a2 2 0 002 2h12a2 2 0 002-2v-2.308A24.974 24.974 0 0110 15c-2.796 0-5.487-.46-8-1.308z" />
                                </svg>
                            </div>
                            <div className="card-title">Computer Faculty</div>
                            <div className="card-subtitle">Leelavati International School</div>
                            <div style={{ color: '#9ca3af', marginBottom: '8px' }}>Bhopal, Madhya Pradesh</div>
                            <span className="timeline-year">2025</span>
                            <ul>
                                <li>
                                    <svg className="checkmark" width="20" height="20" fill="currentColor" viewBox="0 0 20 20">
                                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                                    </svg>
                                    <span>Self-motivated with personal responsibility</span>
                                </li>
                                <li>
                                    <svg className="checkmark" width="20" height="20" fill="currentColor" viewBox="0 0 20 20">
                                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                                    </svg>
                                    <span>Skilled at working independently and collaboratively</span>
                                </li>
                                <li>
                                    <svg className="checkmark" width="20" height="20" fill="currentColor" viewBox="0 0 20 20">
                                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                                    </svg>
                                    <span>Managed time efficiency for deadlines</span>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="cta">
                <div className="container glass-card">
                    <h2 className="cta-title gradient-text">Let&apos;s Build Something Amazing Together</h2>
                    <p className="cta-text">
                        Ready to bring your ideas to life? I&apos;m excited to collaborate on your next project!
                    </p>
                    <div className="cta-buttons">
                        <a href="mailto:vinayaksoni446@gmail.com" className="btn btn-primary">Get In Touch</a>
                        <a href="https://www.linkedin.com/in/vinayak-soni-593273397/" target="_blank" rel="noopener noreferrer" className="btn btn-secondary">View LinkedIn</a>
                    </div>
                </div>
            </section>
        </div>
    );
}
