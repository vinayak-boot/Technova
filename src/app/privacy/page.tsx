'use client';

export default function PrivacyPage() {
    return (
        <div className="min-h-screen pt-32 pb-20 px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto glass-panel p-8 md:p-16 rounded-3xl">
                <h1 className="text-4xl font-black text-white mb-12 border-b border-white/10 pb-8">Privacy Policy</h1>

                <div className="prose prose-invert prose-lg max-w-none space-y-8 text-gray-300">
                    <section>
                        <h2 className="text-2xl font-bold text-white mb-4">1. Information We Collect</h2>
                        <p>
                            We collect information you provide directly to us, such as when you create an account, subscribe to our newsletter, or contact us for support. This may include your name, email address, and any other information you choose to provide.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-2xl font-bold text-white mb-4">2. How We Use Your Information</h2>
                        <p>
                            We use the information we collect to operate, maintain, and improve our services, to communicate with you, and to personalize your experience. We do not sell your personal data to third parties.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-2xl font-bold text-white mb-4">3. Cookies and Tracking</h2>
                        <p>
                            We use cookies and similar tracking technologies to track the activity on our service and hold certain information. You can instruct your browser to refuse all cookies or to indicate when a cookie is being sent.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-2xl font-bold text-white mb-4">4. Contact Us</h2>
                        <p>
                            If you have any questions about this Privacy Policy, please contact us at: <a href="mailto:vinayaksoni446@gmail.com" className="text-blue-400 hover:underline">vinayaksoni446@gmail.com</a>
                        </p>
                    </section>
                </div>
            </div>
        </div>
    );
}
