'use client';

import { useEffect, useState } from 'react';
import { fetchLatestNews, Article } from "@/lib/news-service";
import { ExternalLink, Loader2 } from "lucide-react";

export default function CategoryClient({ slug }: { slug: string }) {
    const [news, setNews] = useState<Article[]>([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const loadNews = async () => {
            const allNews = await fetchLatestNews();
            const safeSlug = slug ? slug.toLowerCase().replace(/-/g, ' ') : '';

            const filtered = slug === 'all'
                ? allNews
                : allNews.filter(n => n.category && Array.isArray(n.category) && n.category.some(c => typeof c === 'string' && c.toLowerCase().includes(safeSlug)));

            setNews(filtered);
            setLoading(false);
        };
        loadNews();
    }, [slug]);

    const displayTitle = slug ? slug.replace(/-/g, ' ').split(' ').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ') : 'Latest Tech News';
    const title = (slug === 'all' || !slug) ? 'Latest Tech News' : `${displayTitle} News`;

    if (loading) {
        return (
            <div className="min-h-screen flex items-center justify-center">
                <Loader2 className="w-12 h-12 text-blue-500 animate-spin" />
            </div>
        );
    }

    return (
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
            <div className="mb-12 text-center space-y-4">
                <h1 className="text-4xl md:text-6xl font-bold text-white bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-400">
                    {title}
                </h1>
                <p className="text-gray-400 text-lg max-w-2xl mx-auto">
                    Explore the latest breakthroughs and updates in {title.toLowerCase()}.
                </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {news.map((item) => (
                    <a
                        key={item.id}
                        href={item.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="group"
                    >
                        <div className="glass-panel rounded-2xl overflow-hidden h-full hover:shadow-[0_0_30px_rgba(59,130,246,0.2)] transition-all duration-300 flex flex-col">
                            <div className="relative h-56 overflow-hidden">
                                <img
                                    src={item.image_url}
                                    alt={item.title}
                                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                                    onError={(e) => {
                                        (e.target as HTMLImageElement).src = 'https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=800&q=80';
                                    }}
                                />
                                <div className="absolute top-4 left-4 bg-black/60 backdrop-blur-md px-3 py-1 rounded-full text-xs text-white uppercase tracking-wider">
                                    {item.category[0]}
                                </div>
                            </div>
                            <div className="p-6 flex-1 flex flex-col">
                                <h3 className="text-xl font-bold text-white mb-3 group-hover:text-blue-400 transition-colors">
                                    {item.title}
                                </h3>
                                <p className="text-gray-400 text-sm line-clamp-3 mb-4 flex-1">
                                    {item.description}
                                </p>
                                <div className="flex items-center justify-between text-xs text-gray-500 pt-4 border-t border-white/10">
                                    <span>{new Date(item.published_at).toLocaleDateString()}</span>
                                    <span className="text-blue-400 font-medium group-hover:underline flex items-center">
                                        Read Article <ExternalLink className="ml-1 w-3 h-3" />
                                    </span>
                                </div>
                            </div>
                        </div>
                    </a>
                ))}
            </div>
        </div>
    );
}
