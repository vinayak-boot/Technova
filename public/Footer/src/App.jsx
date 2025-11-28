import { useEffect, useRef } from 'react';

function App() {
    const observerRef = useRef(null);

    useEffect(() => {
        // Intersection Observer for scroll animations
        observerRef.current = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add('revealed');
                    }
                });
            },
            { threshold: 0.1 }
        );

        const elements = document.querySelectorAll('.scroll-reveal');
        elements.forEach((el) => observerRef.current.observe(el));

        return () => {
            if (observerRef.current) {
                observerRef.current.disconnect();
            }
        };
    }, []);

    return (
        <div className="min-h-screen dot-pattern">
            {/* Hero Section */}
            <section className="min-h-screen flex items-center justify-center px-6 py-20 relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-b from-transparent via-accent-purple/5 to-transparent"></div>

                <div className="max-w-6xl mx-auto text-center relative z-10">
                    {/* Profile Image */}
                    <div className="mb-8 scroll-reveal">
                        <div className="inline-block relative float-animation">
                            <div className="w-48 h-48 mx-auto rounded-full overflow-hidden glow-effect border-4 border-accent-purple/30">
                                <img
                                    src="/profile.jpg"
                                    alt="Vinayak Soni"
                                    className="w-full h-full object-cover"
                                    onError={(e) => {
                                        e.target.src = 'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" width="200" height="200"%3E%3Crect fill="%23a855f7" width="200" height="200"/%3E%3Ctext fill="%23fff" font-size="80" font-family="Arial" x="50%25" y="50%25" text-anchor="middle" dy=".3em"%3EVS%3C/text%3E%3C/svg%3E';
                                    }}
                                />
                            </div>
                            <div className="absolute -inset-4 bg-gradient-to-r from-accent-cyan via-accent-purple to-accent-pink rounded-full opacity-20 blur-2xl -z-10"></div>
                        </div>
                    </div>

                    {/* Name & Title */}
                    <div className="scroll-reveal">
                        <h1 className="text-6xl md:text-7xl font-bold mb-4 gradient-text">
                            VINAYAK SONI
                        </h1>
                        <p className="text-2xl md:text-3xl text-accent-cyan font-semibold mb-6 animate-pulse">
                            MERN Stack Developer
                        </p>
                    </div>

                    {/* Contact Info */}
                    <div className="scroll-reveal flex flex-wrap justify-center gap-6 text-gray-300 mb-8">
                        <div className="flex items-center gap-2 hover:text-accent-cyan transition-colors">
                            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                                <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                            </svg>
                            <span>Bhopal, Madhya Pradesh</span>
                        </div>
                        <div className="flex items-center gap-2 hover:text-accent-cyan transition-colors">
                            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                                <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                                <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                            </svg>
                            <a href="mailto:vinayaksoni446@gmail.com" className="hover:underline">vinayaksoni446@gmail.com</a>
                        </div>
                        <div className="flex items-center gap-2 hover:text-accent-cyan transition-colors">
                            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                                <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                            </svg>
                            <a href="https://www.linkedin.com/in/vinayak-soni-593273397/" target="_blank" rel="noopener noreferrer" className="hover:underline">LinkedIn Profile</a>
                        </div>
                    </div>

                    {/* Quick Intro */}
                    <div className="scroll-reveal max-w-3xl mx-auto">
                        <p className="text-lg text-gray-300 leading-relaxed">
                            Enthusiastic MERN Stack Developer with a passion for creating dynamic web applications.
                            Combining technical expertise with strong interpersonal skills to deliver exceptional results.
                        </p>
                    </div>
                </div>
            </section>

            {/* Professional Summary Section */}
            <section className="py-20 px-6 relative">
                <div className="max-w-6xl mx-auto">
                    <h2 className="text-4xl md:text-5xl font-bold text-center mb-12 scroll-reveal gradient-text">
                        Professional Summary
                    </h2>

                    <div className="glass-card p-8 md:p-12 scroll-reveal animated-border">
                        <p className="text-lg text-gray-200 leading-relaxed mb-8">
                            Enthusiastic MERN Stack Fresher with a Bachelor's degree in Computer Applications and strong skills in
                            Technical and Interpersonal behaviour. Eager to contribute enthusiasm, adaptability, and a fresh
                            perspective to a dynamic team at your reputed organization.
                        </p>

                        {/* Skills */}
                        <h3 className="text-2xl font-semibold mb-6 text-accent-cyan">Core Competencies</h3>
                        <div className="flex flex-wrap gap-3">
                            {[
                                'HTML/CSS', 'JavaScript', 'React.js', 'Node.js', 'Express.js', 'MongoDB',
                                'Python (OOP)', 'Adobe Premiere Pro', 'Figma', 'GitHub',
                                'Communication', 'Problem-Solving', 'Customer Interaction'
                            ].map((skill, index) => (
                                <span key={index} className="skill-badge stagger-item">
                                    {skill}
                                </span>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* Education Section */}
            <section className="py-20 px-6 relative">
                <div className="max-w-6xl mx-auto">
                    <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 scroll-reveal gradient-text">
                        Education
                    </h2>

                    <div className="relative">
                        <div className="timeline-line"></div>

                        {/* Education Items */}
                        <div className="space-y-12">
                            {/* BCA */}
                            <div className="scroll-reveal flex gap-8 relative">
                                <div className="flex-shrink-0 w-12 h-12 rounded-full bg-gradient-to-br from-accent-purple to-accent-pink flex items-center justify-center glow-effect">
                                    <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 20 20">
                                        <path d="M10.394 2.08a1 1 0 00-.788 0l-7 3a1 1 0 000 1.84L5.25 8.051a.999.999 0 01.356-.257l4-1.714a1 1 0 11.788 1.838L7.667 9.088l1.94.831a1 1 0 00.787 0l7-3a1 1 0 000-1.838l-7-3zM3.31 9.397L5 10.12v4.102a8.969 8.969 0 00-1.05-.174 1 1 0 01-.89-.89 11.115 11.115 0 01.25-3.762zM9.3 16.573A9.026 9.026 0 007 14.935v-3.957l1.818.78a3 3 0 002.364 0l5.508-2.361a11.026 11.026 0 01.25 3.762 1 1 0 01-.89.89 8.968 8.968 0 00-5.35 2.524 1 1 0 01-1.4 0zM6 18a1 1 0 001-1v-2.065a8.935 8.935 0 00-2-.712V17a1 1 0 001 1z" />
                                    </svg>
                                </div>
                                <div className="glass-card p-6 flex-1 hover:scale-105 transition-transform duration-300">
                                    <div className="flex justify-between items-start flex-wrap gap-4 mb-3">
                                        <div>
                                            <h3 className="text-2xl font-bold text-white">Bachelor of Computer Applications</h3>
                                            <p className="text-accent-cyan font-semibold">IES University</p>
                                        </div>
                                        <span className="px-4 py-1 bg-accent-purple/20 text-accent-purple rounded-full text-sm font-medium">2025</span>
                                    </div>
                                    <p className="text-gray-300">CGPA: <span className="text-white font-semibold">7.26</span></p>
                                    <p className="text-gray-400 mt-2">Specialization in Information Technology</p>
                                </div>
                            </div>

                            {/* DCA */}
                            <div className="scroll-reveal flex gap-8 relative">
                                <div className="flex-shrink-0 w-12 h-12 rounded-full bg-gradient-to-br from-accent-cyan to-accent-blue flex items-center justify-center glow-effect">
                                    <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 20 20">
                                        <path d="M10.394 2.08a1 1 0 00-.788 0l-7 3a1 1 0 000 1.84L5.25 8.051a.999.999 0 01.356-.257l4-1.714a1 1 0 11.788 1.838L7.667 9.088l1.94.831a1 1 0 00.787 0l7-3a1 1 0 000-1.838l-7-3zM3.31 9.397L5 10.12v4.102a8.969 8.969 0 00-1.05-.174 1 1 0 01-.89-.89 11.115 11.115 0 01.25-3.762zM9.3 16.573A9.026 9.026 0 007 14.935v-3.957l1.818.78a3 3 0 002.364 0l5.508-2.361a11.026 11.026 0 01.25 3.762 1 1 0 01-.89.89 8.968 8.968 0 00-5.35 2.524 1 1 0 01-1.4 0zM6 18a1 1 0 001-1v-2.065a8.935 8.935 0 00-2-.712V17a1 1 0 001 1z" />
                                    </svg>
                                </div>
                                <div className="glass-card p-6 flex-1 hover:scale-105 transition-transform duration-300">
                                    <div className="flex justify-between items-start flex-wrap gap-4 mb-3">
                                        <div>
                                            <h3 className="text-2xl font-bold text-white">Diploma in Computer Applications</h3>
                                            <p className="text-accent-cyan font-semibold">Makhanlal Chaturvedi University</p>
                                        </div>
                                        <span className="px-4 py-1 bg-accent-cyan/20 text-accent-cyan rounded-full text-sm font-medium">2024</span>
                                    </div>
                                    <p className="text-gray-300">Percentage: <span className="text-white font-semibold">66.5%</span></p>
                                    <p className="text-gray-400 mt-2">University of Journalism and Mass Communication</p>
                                </div>
                            </div>

                            {/* Higher Secondary */}
                            <div className="scroll-reveal flex gap-8 relative">
                                <div className="flex-shrink-0 w-12 h-12 rounded-full bg-gradient-to-br from-accent-pink to-accent-purple flex items-center justify-center glow-effect">
                                    <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 20 20">
                                        <path d="M10.394 2.08a1 1 0 00-.788 0l-7 3a1 1 0 000 1.84L5.25 8.051a.999.999 0 01.356-.257l4-1.714a1 1 0 11.788 1.838L7.667 9.088l1.94.831a1 1 0 00.787 0l7-3a1 1 0 000-1.838l-7-3zM3.31 9.397L5 10.12v4.102a8.969 8.969 0 00-1.05-.174 1 1 0 01-.89-.89 11.115 11.115 0 01.25-3.762zM9.3 16.573A9.026 9.026 0 007 14.935v-3.957l1.818.78a3 3 0 002.364 0l5.508-2.361a11.026 11.026 0 01.25 3.762 1 1 0 01-.89.89 8.968 8.968 0 00-5.35 2.524 1 1 0 01-1.4 0zM6 18a1 1 0 001-1v-2.065a8.935 8.935 0 00-2-.712V17a1 1 0 001 1z" />
                                    </svg>
                                </div>
                                <div className="glass-card p-6 flex-1 hover:scale-105 transition-transform duration-300">
                                    <div className="flex justify-between items-start flex-wrap gap-4 mb-3">
                                        <div>
                                            <h3 className="text-2xl font-bold text-white">Higher Secondary (PCB)</h3>
                                            <p className="text-accent-cyan font-semibold">Mother Teresa Sr. Sec Co-Ed School</p>
                                        </div>
                                        <span className="px-4 py-1 bg-accent-pink/20 text-accent-pink rounded-full text-sm font-medium">2022</span>
                                    </div>
                                    <p className="text-gray-400 mt-2">Ex-NEET, CDS, IBPS Aspirant</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Certifications Section */}
            <section className="py-20 px-6 relative">
                <div className="max-w-6xl mx-auto">
                    <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 scroll-reveal gradient-text">
                        Certifications & Courses
                    </h2>

                    <div className="grid md:grid-cols-2 gap-8">
                        {/* Body Language Course */}
                        <div className="glass-card p-8 scroll-reveal hover:scale-105 transition-transform duration-300 animated-border">
                            <div className="flex items-start gap-4 mb-4">
                                <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-accent-purple to-accent-pink flex items-center justify-center flex-shrink-0">
                                    <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 20 20">
                                        <path fillRule="evenodd" d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                                    </svg>
                                </div>
                                <div>
                                    <h3 className="text-2xl font-bold text-white mb-2">Body Language: Key to Professional Success</h3>
                                    <p className="text-accent-cyan font-semibold">NPTEL Skill India / Govt. of India</p>
                                    <span className="inline-block mt-2 px-3 py-1 bg-accent-purple/20 text-accent-purple rounded-full text-sm">2025</span>
                                </div>
                            </div>
                            <ul className="space-y-3 text-gray-300">
                                <li className="flex items-start gap-2">
                                    <svg className="w-5 h-5 text-accent-cyan flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                                    </svg>
                                    <span>Improved Communication & Presentation Skills through non-verbal cues</span>
                                </li>
                                <li className="flex items-start gap-2">
                                    <svg className="w-5 h-5 text-accent-cyan flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                                    </svg>
                                    <span>Professional Behavior & Confidence Building for customer interactions</span>
                                </li>
                            </ul>
                        </div>

                        {/* Front End Development */}
                        <div className="glass-card p-8 scroll-reveal hover:scale-105 transition-transform duration-300 animated-border">
                            <div className="flex items-start gap-4 mb-4">
                                <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-accent-cyan to-accent-blue flex items-center justify-center flex-shrink-0">
                                    <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 20 20">
                                        <path fillRule="evenodd" d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                                    </svg>
                                </div>
                                <div>
                                    <h3 className="text-2xl font-bold text-white mb-2">Front End Development</h3>
                                    <p className="text-accent-cyan font-semibold">Simplilearn SkillUp</p>
                                    <span className="inline-block mt-2 px-3 py-1 bg-accent-cyan/20 text-accent-cyan rounded-full text-sm">2025</span>
                                </div>
                            </div>
                            <ul className="space-y-3 text-gray-300">
                                <li className="flex items-start gap-2">
                                    <svg className="w-5 h-5 text-accent-cyan flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                                    </svg>
                                    <span>Technical Understanding & Attention to Detail in HTML and web development</span>
                                </li>
                                <li className="flex items-start gap-2">
                                    <svg className="w-5 h-5 text-accent-cyan flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                                    </svg>
                                    <span>Analytical Thinking & Problem Solving through logical front-end development</span>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>

            {/* Experience Section */}
            <section className="py-20 px-6 relative">
                <div className="max-w-6xl mx-auto">
                    <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 scroll-reveal gradient-text">
                        Professional Experience
                    </h2>

                    <div className="space-y-8">
                        {/* Shree Bhavans */}
                        <div className="glass-card p-8 scroll-reveal animated-border hover:scale-105 transition-transform duration-300">
                            <div className="flex justify-between items-start flex-wrap gap-4 mb-6">
                                <div>
                                    <h3 className="text-2xl font-bold text-white mb-2">Computer Operator and Website Manager</h3>
                                    <p className="text-accent-cyan text-xl font-semibold">Shree Bhavans' Bharti Public School</p>
                                    <p className="text-gray-400 mt-1">Bhopal, Madhya Pradesh</p>
                                </div>
                                <span className="px-4 py-2 bg-gradient-to-r from-accent-purple to-accent-pink text-white rounded-full font-medium">2025</span>
                            </div>
                            <ul className="space-y-3 text-gray-300">
                                <li className="flex items-start gap-3">
                                    <svg className="w-5 h-5 text-accent-purple flex-shrink-0 mt-1" fill="currentColor" viewBox="0 0 20 20">
                                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                                    </svg>
                                    <span>Maintain accuracy in data entry tasks resulting in improved overall data quality</span>
                                </li>
                                <li className="flex items-start gap-3">
                                    <svg className="w-5 h-5 text-accent-purple flex-shrink-0 mt-1" fill="currentColor" viewBox="0 0 20 20">
                                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                                    </svg>
                                    <span>React with compliance during times of highly stressed or emergency situations</span>
                                </li>
                                <li className="flex items-start gap-3">
                                    <svg className="w-5 h-5 text-accent-purple flex-shrink-0 mt-1" fill="currentColor" viewBox="0 0 20 20">
                                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                                    </svg>
                                    <span>Ensured smooth workflow through effective coordination with other IT professionals on projects and tasks</span>
                                </li>
                                <li className="flex items-start gap-3">
                                    <svg className="w-5 h-5 text-accent-purple flex-shrink-0 mt-1" fill="currentColor" viewBox="0 0 20 20">
                                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                                    </svg>
                                    <span>Enhanced system efficiency with regular maintenance checks and updates</span>
                                </li>
                            </ul>
                        </div>

                        {/* Leelavati International */}
                        <div className="glass-card p-8 scroll-reveal animated-border hover:scale-105 transition-transform duration-300">
                            <div className="flex justify-between items-start flex-wrap gap-4 mb-6">
                                <div>
                                    <h3 className="text-2xl font-bold text-white mb-2">Computer Faculty</h3>
                                    <p className="text-accent-cyan text-xl font-semibold">Leelavati International School</p>
                                    <p className="text-gray-400 mt-1">Bhopal, Madhya Pradesh</p>
                                </div>
                                <span className="px-4 py-2 bg-gradient-to-r from-accent-cyan to-accent-blue text-white rounded-full font-medium">2025</span>
                            </div>
                            <ul className="space-y-3 text-gray-300">
                                <li className="flex items-start gap-3">
                                    <svg className="w-5 h-5 text-accent-cyan flex-shrink-0 mt-1" fill="currentColor" viewBox="0 0 20 20">
                                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                                    </svg>
                                    <span>Self-motivated with a strong sense of personal responsibility</span>
                                </li>
                                <li className="flex items-start gap-3">
                                    <svg className="w-5 h-5 text-accent-cyan flex-shrink-0 mt-1" fill="currentColor" viewBox="0 0 20 20">
                                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                                    </svg>
                                    <span>Skilled at working independently and collaboratively in a team environment</span>
                                </li>
                                <li className="flex items-start gap-3">
                                    <svg className="w-5 h-5 text-accent-cyan flex-shrink-0 mt-1" fill="currentColor" viewBox="0 0 20 20">
                                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                                    </svg>
                                    <span>Worked well in a team setting, providing support and guidance</span>
                                </li>
                                <li className="flex items-start gap-3">
                                    <svg className="w-5 h-5 text-accent-cyan flex-shrink-0 mt-1" fill="currentColor" viewBox="0 0 20 20">
                                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                                    </svg>
                                    <span>Managed time efficiency in order to complete all tasks within the deadline</span>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>

            {/* Footer CTA */}
            <section className="py-20 px-6 relative">
                <div className="max-w-4xl mx-auto text-center scroll-reveal">
                    <div className="glass-card p-12 animated-border">
                        <h2 className="text-3xl md:text-4xl font-bold mb-6 gradient-text">
                            Let's Build Something Amazing Together
                        </h2>
                        <p className="text-gray-300 text-lg mb-8">
                            Ready to bring fresh perspectives and technical expertise to your team
                        </p>
                        <div className="flex flex-wrap justify-center gap-4">
                            <a
                                href="mailto:vinayaksoni446@gmail.com"
                                className="px-8 py-4 bg-gradient-to-r from-accent-purple to-accent-pink text-white font-semibold rounded-full hover:scale-110 transition-transform duration-300 glow-effect"
                            >
                                Get In Touch
                            </a>
                            <a
                                href="https://www.linkedin.com/in/vinayak-soni-593273397/"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="px-8 py-4 bg-gradient-to-r from-accent-cyan to-accent-blue text-white font-semibold rounded-full hover:scale-110 transition-transform duration-300 glow-effect"
                            >
                                Connect on LinkedIn
                            </a>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}

export default App;
