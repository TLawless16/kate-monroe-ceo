import { getAllPosts } from '@/lib/blog';
import Link from 'next/link';

export const metadata = {
    title: 'Blog | Kate Monroe',
    description: 'Insights and articles from Kate Monroe, CEO and leadership expert.',
};

export default function BlogIndex() {
    const posts = getAllPosts();

    return (
        <main className="min-h-screen bg-background pt-32 pb-24 text-white">
            <div className="max-w-4xl mx-auto px-6">
                <h1 className="text-4xl md:text-5xl font-heading font-black uppercase tracking-wider mb-4">
                    The <span className="text-primary">Blog</span>
                </h1>
                <p className="text-xl text-gray-300 mb-12 font-sans font-light">
                    Insights on leadership, business growth, and unstoppable movement.
                </p>

                <div className="grid gap-12">
                    {posts.map((post) => (
                        <article key={post.slug} className="group border-b border-white/10 pb-12 last:border-0 last:pb-0">
                            <Link href={`/blog/${post.slug}`} className="block">
                                <p className="text-sm text-primary font-sans font-semibold mb-2">{post.date}</p>
                                <h2 className="text-2xl md:text-3xl font-heading font-bold mb-3 group-hover:text-primary transition-colors">
                                    {post.title}
                                </h2>
                                <p className="text-gray-400 font-sans leading-relaxed mb-4">
                                    {post.description}
                                </p>
                                <span className="inline-flex items-center text-sm font-semibold text-white group-hover:text-primary transition-colors">
                                    Read Article
                                    <svg className="ml-2 w-4 h-4 transform group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                                    </svg>
                                </span>
                            </Link>
                        </article>
                    ))}

                    {posts.length === 0 && (
                        <p className="text-gray-400 font-sans italic">No blog posts found. Check back soon!</p>
                    )}
                </div>
            </div>
        </main>
    );
}
