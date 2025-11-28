export interface Article {
    id: string;
    title: string;
    description: string;
    content: string;
    url: string;
    image_url: string;
    published_at: string;
    source: string;
    category: string[];
}

// Real external sources for redirection
const REAL_SOURCES: Record<string, { name: string; url: string }[]> = {
    'AI': [
        { name: 'Artificial Intelligence News', url: 'https://www.artificialintelligence-news.com' },
        { name: 'AI Magazine', url: 'https://aimagazine.com' },
        { name: 'AI Trends', url: 'https://www.aitrends.com' },
        { name: 'Analytics Vidhya', url: 'https://www.analyticsvidhya.com' },
        { name: 'MIT AI News', url: 'https://news.mit.edu/topic/artificial-intelligence2' }
    ],
    'Gaming': [
        { name: 'IGN', url: 'https://www.ign.com' },
        { name: 'GameSpot', url: 'https://www.gamespot.com' },
        { name: 'Polygon', url: 'https://www.polygon.com' },
        { name: 'Eurogamer', url: 'https://www.eurogamer.net' },
        { name: 'PC Gamer', url: 'https://www.pcgamer.com' }
    ],
    'Cybersecurity': [
        { name: 'The Hacker News', url: 'https://thehackernews.com' },
        { name: 'Bleeping Computer', url: 'https://www.bleepingcomputer.com' },
        { name: 'Dark Reading', url: 'https://www.darkreading.com' },
        { name: 'Cybersecurity News', url: 'https://cybersecuritynews.com' },
        { name: 'Krebs On Security', url: 'https://krebsonsecurity.com' }
    ],
    'Gadgets': [
        { name: 'The Verge', url: 'https://www.theverge.com' },
        { name: 'TechRadar', url: 'https://www.techradar.com' },
        { name: 'CNET', url: 'https://www.cnet.com' },
        { name: 'Enggadget', url: 'https://www.engadget.com' },
        { name: 'Gizmodo', url: 'https://gizmodo.com' }
    ],
    'Crypto': [
        { name: 'CoinDesk', url: 'https://www.coindesk.com' },
        { name: 'CoinTelegraph', url: 'https://cointelegraph.com' },
        { name: 'CryptoSlate', url: 'https://cryptoslate.com' },
        { name: 'Decrypt', url: 'https://decrypt.co' },
        { name: 'Bitcoin Magazine', url: 'https://bitcoinmagazine.com' }
    ],
    'Tech Startups': [
        { name: 'TechCrunch', url: 'https://techcrunch.com' },
        { name: 'VentureBeat', url: 'https://venturebeat.com' },
        { name: 'TechStartups', url: 'https://techstartups.com' },
        { name: 'YourStory', url: 'https://yourstory.com' },
        { name: 'Crunchbase News', url: 'https://news.crunchbase.com' }
    ],
    'Programming': [
        { name: 'Hacker News', url: 'https://news.ycombinator.com' },
        { name: 'Dev.to', url: 'https://dev.to' },
        { name: 'StackOverflow Blog', url: 'https://stackoverflow.blog' },
        { name: 'The Register', url: 'https://www.theregister.com' },
        { name: 'InfoQ', url: 'https://www.infoq.com' }
    ]
};

const TOPICS = [
    { name: 'AI', keywords: 'artificial-intelligence,robot,cyborg,neural-network,3d-render' },
    { name: 'Gaming', keywords: 'gaming,esports,playstation,xbox,pc-gaming,cyberpunk' },
    { name: 'Cybersecurity', keywords: 'hacker,security,cyber-attack,encryption,matrix' },
    { name: 'Gadgets', keywords: 'smartphone,drone,vr-headset,smartwatch,tech-gadgets' },
    { name: 'Crypto', keywords: 'bitcoin,blockchain,ethereum,crypto-coin,gold,digital-currency' },
    { name: 'Tech Startups', keywords: 'startup,unicorn,venture-capital,innovation,office' },
    { name: 'Programming', keywords: 'code,matrix,hacker,computer-screen,neon,cyberpunk' }
];

const PROGRAMMING_LANGS = [
    'Python', 'C', 'C++', 'C#', 'JavaScript', 'TypeScript', 'React', 'Angular', 'PHP', 'JSON', 'Tailwind CSS'
];

// Category-specific image libraries (restored full variety)
const CATEGORY_IMAGES: Record<string, string[]> = {
    'AI': ['images/ai_custom.jpg', 'images/ai_1.jpg', 'images/ai_2.jpg', 'images/ai_3.jpg', 'images/ai_chip.jpg'],
    'Crypto': ['images/crypto.jpg', 'images/crypto_1.jpg', 'images/crypto_2.jpg', 'images/crypto_circuit.jpg'],
    'Programming': ['images/programming.jpg', 'images/coding_1.jpg', 'images/coding_2.jpg', 'images/binary_code.jpg'],
    'Cybersecurity': ['images/cybersecurity.jpg', 'images/security_badge.jpg', 'images/cyber_1.jpg'],
    'Gadgets': ['images/gadgets.jpg', 'images/gadget_1.jpg', 'images/gadget_2.jpg', 'images/gadget_3.jpg'],
    'Gaming': ['images/gaming.jpg', 'images/gamer_room.jpg', 'images/vr_headset.jpg'],
    'Tech Startups': ['images/startups.jpg', 'images/office_team.jpg', 'images/startup_1.jpg', 'images/startup_2.jpg', 'images/startup_3.jpg']
};

// Fallback images (all optimized and small)
const FALLBACK_IMAGES = [
    'images/ai_custom.jpg',
    'images/crypto.jpg',
    'images/cybersecurity.jpg',
    'images/gadgets.jpg',
    'images/gaming.jpg',
    'images/programming.jpg',
    'images/startups.jpg'
];

// Generate realistic looking news with EXTERNAL links
export const generateClientSideNews = (): Article[] => {
    return Array.from({ length: 40 }).map((_, i) => {
        const topic = TOPICS[Math.floor(Math.random() * TOPICS.length)];
        const sources = REAL_SOURCES[topic.name] || REAL_SOURCES['AI'];
        const source = sources[Math.floor(Math.random() * sources.length)];

        const date = new Date(Date.now() - Math.floor(Math.random() * 86400000)).toISOString();

        let title = `${topic.name} Update: New Breakthrough in Technology`;
        let description = `Latest developments in ${topic.name} are reshaping the digital landscape.`;

        if (topic.name === 'Programming') {
            const lang = PROGRAMMING_LANGS[Math.floor(Math.random() * PROGRAMMING_LANGS.length)];
            title = `Major ${lang} Update: Revolutionizing ${topic.name} in 2024`;
            description = `Developers are excited about the new features in ${lang}. Experts say this will change how we build software using HTML, CSS, and JS.`;
        } else if (topic.name === 'AI') {
            title = `AI Revolution: New Generative Models Stun Researchers`;
            description = `The latest AI tools are creating 3D 4K visuals that are indistinguishable from reality.`;
        } else if (topic.name === 'Crypto') {
            title = `Crypto Market Surge: Bitcoin and Ethereum Hit New Milestones`;
            description = `Blockchain technology continues to evolve with new decentralized finance applications.`;
        } else if (topic.name === 'Gaming') {
            title = `Next-Gen Gaming: Console Wars Heat Up with New Releases`;
            description = `Gamers are blown away by the graphics and performance of the latest titles.`;
        } else if (topic.name === 'Cybersecurity') {
            title = `Global Cyber Threat: New Vulnerability Discovered in Major Systems`;
            description = `Security experts warn of a critical flaw affecting millions of devices worldwide.`;
        } else if (topic.name === 'Gadgets') {
            description = `We tested the latest gadget that everyone is talking about. Is it worth the hype?`;
        } else if (topic.name === 'Tech Startups') {
            title = `Unicorn Alert: This Startup Just Raised $100M Series A`;
            description = `Investors are betting big on this new tech company disrupting the industry.`;
        }

        // Select random image from category pool
        const categoryPool = CATEGORY_IMAGES[topic.name] || FALLBACK_IMAGES;
        const imageUrl = categoryPool[Math.floor(Math.random() * categoryPool.length)];

        return {
            id: `news-${i}-${Date.now()}`,
            title: title,
            description: description,
            content: '',
            url: source.url,
            image_url: imageUrl,
            published_at: date,
            source: source.name,
            category: [topic.name, 'Tech'],
        };
    });
};

export const fetchLatestNews = async (): Promise<Article[]> => {
    await new Promise(resolve => setTimeout(resolve, 800));
    return generateClientSideNews();
};
