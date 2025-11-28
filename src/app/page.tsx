'use client';

import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, Clock, Hash, Newspaper } from 'lucide-react';
import { generateClientSideNews, Article } from '@/lib/news-service';
import Image from 'next/image';
import Link from 'next/link';

const tiltOptions = {
  reverse: false,
  max: 8,
  perspective: 1000,
  scale: 1.01,
  speed: 500,
  transition: true,
  axis: null,
  reset: true,
  easing: "cubic-bezier(.03,.98,.52,.99)",
}

export default function Home() {
  const [news, setNews] = useState<Article[]>([]);
  const [featured, setFeatured] = useState<Article | null>(null);
  const [grid, setGrid] = useState<Article[]>([]);

  useEffect(() => {
    const allNews = generateClientSideNews();
    setNews(allNews);
    if (allNews.length > 0) {
      setFeatured(allNews[0]);
      setGrid(allNews.slice(1));
    }
  }, []);

  if (!featured) return null;

  return (
    <div className="min-h-screen pt-24 pb-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto space-y-24">

        {/* Featured Article - Hero Section */}
        <section className="relative">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <Link
              href={featured.url}
              target="_blank"
              rel="noopener noreferrer"
              className="block group relative h-[600px] rounded-3xl overflow-hidden"
            >
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent z-10" />
              <Image
                src={featured.image_url}
                alt={featured.title}
                loading="eager"
                decoding="async"
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-[20s] group-hover:scale-110"
                onError={(e) => {
                  (e.target as HTMLImageElement).src = 'https://images.unsplash.com/photo-1620712943543-bcc4688e7485?auto=format&fit=crop&w=1740&q=80';
                }}
              />

              <div className="relative z-20 h-full flex flex-col justify-end p-8 md:p-16 max-w-4xl space-y-6">
                <div className="flex items-center space-x-4">
                  <span className="px-4 py-1.5 rounded-full bg-cyan-400/20 border border-cyan-400/30 text-cyan-400 text-sm font-bold tracking-wide backdrop-blur-md">
                    {featured.category[0]}
                  </span>
                  <span className="text-gray-300 text-sm font-medium flex items-center">
                    <Clock className="w-4 h-4 mr-2" />
                    {new Date(featured.published_at).toLocaleDateString()}
                  </span>
                </div>

                <h1 className="text-4xl md:text-6xl font-black text-white leading-tight tracking-tight group-hover:text-cyan-400 transition-colors duration-300 line-clamp-3">
                  {featured.title}
                </h1>

                <p className="text-lg text-gray-300 line-clamp-2 max-w-2xl font-medium">
                  {featured.description}
                </p>

                <div className="flex items-center text-cyan-400 font-bold tracking-wide group-hover:translate-x-2 transition-transform duration-300">
                  READ FULL STORY <ExternalLink className="ml-2 w-5 h-5" />
                </div>
              </div>
            </Link>
          </motion.div>
        </section>

        {/* Trending Grid */}
        <section>
          <motion.h2
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="text-4xl font-black text-white mb-12 border-l-4 border-purple-500 pl-6"
          >
            Trending Now
          </motion.h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {grid.map((item, index) => (
              <Link
                key={item.id}
                href={item.url}
                target="_blank"
                rel="noopener noreferrer"
                className="block h-full group p-4 rounded-2xl hover:bg-white/5 transition-colors duration-300 animate-fade-in"
                style={{ animationDelay: `${index * 50}ms` }}
              >
                <div className="relative h-48 overflow-hidden rounded-xl mb-4 group-hover:shadow-lg transition-shadow duration-300">
                  <div className="absolute inset-0 bg-black/20 z-10 transition-opacity duration-300 group-hover:opacity-0" />
                  <Image
                    src={item.image_url}
                    alt={item.title}
                    loading="lazy"
                    decoding="async"
                    className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                    onError={(e) => {
                      (e.target as HTMLImageElement).src = 'https://images.unsplash.com/photo-1620712943543-bcc4688e7485?auto=format&fit=crop&w=800&q=80';
                    }}
                  />
                </div>
                <div className="space-y-2">
                  <div className="flex items-center space-x-2 text-xs text-cyan-400 font-medium">
                    <span className="px-2 py-1 rounded-full bg-cyan-400/10 border border-cyan-400/20">
                      {item.category[0]}
                    </span>
                    <span className="text-gray-500">•</span>
                    <span className="text-gray-400">{item.source}</span>
                  </div>
                  <h3 className="text-lg font-bold leading-tight group-hover:text-cyan-400 transition-colors line-clamp-2">
                    {item.title}
                  </h3>
                  <div className="flex items-center justify-between text-xs text-gray-500 pt-2 border-t border-white/5">
                    <span>5 min read</span>
                    <span>{new Date(item.published_at).toLocaleDateString()}</span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}
