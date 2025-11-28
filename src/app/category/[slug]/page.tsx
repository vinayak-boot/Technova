import CategoryClient from "./CategoryClient";

export async function generateStaticParams() {
    return [
        { slug: 'all' },
        { slug: 'ai' },
        { slug: 'gaming' },
        { slug: 'tech-startups' },
        { slug: 'gadgets' },
        { slug: 'cybersecurity' },
        { slug: 'programming' },
        { slug: 'crypto' },
    ];
}

export default function CategoryPage({ params }: { params: { slug: string } }) {
    return <CategoryClient slug={params.slug} />;
}
