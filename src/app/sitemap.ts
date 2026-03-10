import { MetadataRoute } from 'next';
import { getPostSlugs } from '@/lib/blog';

export default function sitemap(): MetadataRoute.Sitemap {
    const baseUrl = 'https://katemonroeceo.com';

    // Core static pages
    const staticPages = [
        '',
        '/about',
        '/journey',
        '/books',
        '/speaking',
        '/press',
        '/movement',
        '/blog'
    ].map((route) => ({
        url: `${baseUrl}${route}`,
        lastModified: new Date(),
        changeFrequency: 'weekly' as const,
        priority: route === '' ? 1 : 0.8,
    }));

    // Dynamic Blog Posts
    const blogSlugs = getPostSlugs();
    const blogPages = blogSlugs.map((slug) => {
        const realSlug = slug.replace(/\.md$/, '');
        return {
            url: `${baseUrl}/blog/${realSlug}`,
            lastModified: new Date(),
            changeFrequency: 'monthly' as const,
            priority: 0.7,
        };
    });

    return [...staticPages, ...blogPages];
}
