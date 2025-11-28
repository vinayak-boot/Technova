'use client';

export default function TermsPage() {
    return (
        <div className="min-h-screen pt-32 pb-20 px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto glass-panel p-8 md:p-16 rounded-3xl">
                <h1 className="text-4xl font-black text-white mb-12 border-b border-white/10 pb-8">Terms of Service</h1>

                <div className="prose prose-invert prose-lg max-w-none space-y-8 text-gray-300">
                    <section>
                        <h2 className="text-2xl font-bold text-white mb-4">1. Acceptance of Terms</h2>
                        <p>
                            By accessing and using Tech Nova, you accept and agree to be bound by the terms and provision of this agreement.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-2xl font-bold text-white mb-4">2. Use License</h2>
                        <p>
                            Permission is granted to temporarily download one copy of the materials (information or software) on Tech Nova's website for personal, non-commercial transitory viewing only.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-2xl font-bold text-white mb-4">3. Disclaimer</h2>
                        <p>
                            The materials on Tech Nova's website are provided on an 'as is' basis. Tech Nova makes no warranties, expressed or implied, and hereby disclaims and negates all other warranties including, without limitation, implied warranties or conditions of merchantability, fitness for a particular purpose, or non-infringement of intellectual property or other violation of rights.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-2xl font-bold text-white mb-4">4. Governing Law</h2>
                        <p>
                            These terms and conditions are governed by and construed in accordance with the laws and you irrevocably submit to the exclusive jurisdiction of the courts in that location.
                        </p>
                    </section>
                </div>
            </div>
        </div>
    );
}
