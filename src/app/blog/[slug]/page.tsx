import { getPostBySlug, getPostSlugs } from '@/lib/blog';
import { marked } from 'marked';
import { notFound } from 'next/navigation';
import Head from 'next/head';
import Link from 'next/link';

// Generate static parameters for all blog posts at build time
export async function generateStaticParams() {
    const slugs = getPostSlugs();
    return slugs.map((slug) => ({
        slug: slug.replace(/\.md$/, ''),
    }));
}

// Generate dynamic metadata for each blog post for SEO
export async function generateMetadata({ params }: { params: { slug: string } }) {
    try {
        const post = getPostBySlug(params.slug);
        if (!post) return { title: 'Post Not Found' };

        return {
            title: `${post.title} | Kate Monroe`,
            description: post.description,
            openGraph: {
                title: post.title,
                description: post.description,
                type: 'article',
                publishedTime: post.date,
                authors: [post.author],
            },
            twitter: {
                card: 'summary_large_image',
                title: post.title,
                description: post.description,
            },
            alternates: {
                canonical: `https://katemonroeceo.com/blog/${params.slug}`,
            }
        };
    } catch (e) {
        return { title: 'Post Not Found' };
    }
}

export default async function BlogPostPage({ params }: { params: { slug: string } }) {
    let post;
    try {
        post = getPostBySlug(params.slug);
    } catch (e) {
        notFound();
    }

    // Convert markdown to HTML securely
    const htmlContent = marked.parse(post.content);

    // Generate structured data (Schema.org JSON-LD)
    const jsonLd = {
        '@context': 'https://schema.org',
        '@type': 'Article',
        headline: post.title,
        description: post.description,
        author: {
            '@type': 'Person',
            name: post.author,
        },
        datePublished: post.date,
        url: `https://katemonroeceo.com/blog/${params.slug}`
    };

    return (
        <article className="min-h-screen bg-background pt-32 pb-24 text-white">
            {/* Inject JSON-LD Structure Data for Google */}
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
            />

            <div className="max-w-3xl mx-auto px-6">
                <header className="mb-12 border-b border-white/10 pb-8 text-center md:text-left">
                    <Link href="/blog" className="inline-flex items-center text-sm font-semibold text-primary hover:text-white transition-colors mb-8">
                        <svg className="mr-2 w-4 h-4 transform rotate-180" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                        </svg>
                        Back to Blog
                    </Link>

                    <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading font-black uppercase tracking-wider mb-6 leading-tight">
                        {post.title}
                    </h1>

                    <div className="flex flex-wrap items-center justify-center md:justify-start gap-4 text-sm text-gray-400 font-sans">
                        <time dateTime={post.date}>{post.date}</time>
                        <span>•</span>
                        <span>{post.readingTime}</span>
                        <span>•</span>
                        <span className="text-primary font-semibold">{post.author}</span>
                    </div>
                </header>

                {/* Markdown Content */}
                <div
                    className="prose prose-invert prose-lg max-w-none font-sans prose-headings:font-heading prose-headings:uppercase prose-a:text-primary hover:prose-a:text-white prose-a:transition-colors"
                    dangerouslySetInnerHTML={{ __html: htmlContent }}
                ></div>

                {/* Social Share & Footer Component */}
                <footer className="mt-16 pt-8 border-t border-white/10">
                    <div className="flex flex-col md:flex-row items-center justify-between gap-6">
                        <div className="flex items-center gap-4">
                            <span className="font-heading uppercase tracking-wider text-sm text-gray-400">Share:</span>
                            <a href={`https://twitter.com/intent/tweet?text=${encodeURIComponent(post.title)}&url=https://katemonroeceo.com/blog/${params.slug}`} target="_blank" rel="noopener noreferrer" className="text-white hover:text-primary transition-colors">Twitter/X</a>
                            <a href={`https://www.linkedin.com/shareArticle?mini=true&url=https://katemonroeceo.com/blog/${params.slug}&title=${encodeURIComponent(post.title)}`} target="_blank" rel="noopener noreferrer" className="text-white hover:text-primary transition-colors">LinkedIn</a>
                        </div>

                        <div className="flex gap-2 text-sm font-semibold text-primary">
                            {post.tags?.map(tag => (
                                <span key={tag}>#{tag}</span>
                            ))}
                        </div>
                    </div>

                    {/* Author Bio Section */}
                    <div className="mt-12 bg-white/5 p-8 rounded-sm">
                        <h3 className="font-heading text-xl font-bold uppercase mb-2">About {post.author}</h3>
                        <p className="font-sans text-gray-300 text-sm leading-relaxed">
                            Kate Monroe is an unstoppable force in business and leadership. From the streets of San Diego to the boardrooms of America's fastest-growing companies, she teaches movement, momentum, and massive action.
                        </p>
                    </div>
                </footer>
            </div>
        </article>
    );
}
