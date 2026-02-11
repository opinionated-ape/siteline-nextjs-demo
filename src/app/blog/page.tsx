'use client'

import Link from 'next/link'
import Nav from '@/components/nav'
import Footer from '@/components/footer'
import { trackEvent } from '@/lib/track'

const posts = [
  {
    slug: 'how-we-scaled-to-500m-events',
    title: 'How we scaled to 500M events per month',
    excerpt:
      'A deep dive into our infrastructure evolution — from a single Postgres instance to a distributed event pipeline.',
    author: 'Sarah Chen',
    date: 'Jan 28, 2025',
    readTime: '8 min',
    tag: 'Engineering',
    featured: true,
  },
  {
    slug: 'product-analytics-mistakes',
    title: '5 product analytics mistakes that slow teams down',
    excerpt: 'Most teams track too much, analyze too little. Here\'s what actually moves the needle.',
    author: 'Marcus Reid',
    date: 'Jan 22, 2025',
    readTime: '5 min',
    tag: 'Product',
    featured: false,
  },
  {
    slug: 'building-alert-system',
    title: 'Building a low-noise alert system for analytics',
    excerpt:
      'Alert fatigue is real. Learn how we designed smart alerting with adaptive thresholds.',
    author: 'Lin Zhao',
    date: 'Jan 15, 2025',
    readTime: '6 min',
    tag: 'Engineering',
    featured: false,
  },
  {
    slug: 'data-driven-roadmap',
    title: 'Using data to build a roadmap your team will trust',
    excerpt:
      'Qualitative insights + quantitative signals = product decisions that actually stick.',
    author: 'Sarah Chen',
    date: 'Jan 8, 2025',
    readTime: '4 min',
    tag: 'Product',
    featured: false,
  },
]

export default function BlogPage() {
  const featured = posts[0]
  const rest = posts.slice(1)

  return (
    <div className="min-h-screen bg-white">
      <Nav />

      <main className="mx-auto max-w-6xl px-6 py-16">
        <h1 className="text-4xl font-bold text-gray-900 mb-2">Blog</h1>
        <p className="text-gray-500 mb-12">
          Insights from the Novara team on analytics, product, and engineering.
        </p>

        <Link
          href={`/blog/${featured.slug}`}
          onClick={() => trackEvent('article_clicked', { slug: featured.slug, position: 'featured' })}
          className="block bg-gray-50 rounded-2xl p-8 mb-8 group hover:bg-gray-100 transition-colors"
        >
          <span className="text-xs font-semibold uppercase tracking-wider text-indigo-600">
            {featured.tag}
          </span>
          <h2 className="text-2xl font-bold text-gray-900 mt-2 mb-3 group-hover:text-indigo-600 transition-colors">
            {featured.title}
          </h2>
          <p className="text-gray-500 leading-relaxed mb-6 max-w-2xl">{featured.excerpt}</p>
          <div className="flex items-center gap-3 text-sm text-gray-400">
            <span>{featured.author}</span>
            <span>·</span>
            <span>{featured.date}</span>
            <span>·</span>
            <span>{featured.readTime} read</span>
          </div>
        </Link>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {rest.map((post, i) => (
            <Link
              key={post.slug}
              href={`/blog/${post.slug}`}
              onClick={() => trackEvent('article_clicked', { slug: post.slug, position: i + 1 })}
              className="group border border-gray-200 rounded-xl p-6 hover:border-indigo-200 hover:shadow-sm transition-all"
            >
              <span className="text-xs font-semibold uppercase tracking-wider text-indigo-600">
                {post.tag}
              </span>
              <h3 className="text-lg font-semibold text-gray-900 mt-2 mb-2 group-hover:text-indigo-600 transition-colors leading-snug">
                {post.title}
              </h3>
              <p className="text-sm text-gray-500 leading-relaxed mb-4">{post.excerpt}</p>
              <div className="flex items-center gap-2 text-xs text-gray-400">
                <span>{post.author}</span>
                <span>·</span>
                <span>{post.readTime} read</span>
              </div>
            </Link>
          ))}
        </div>
      </main>

      <Footer />
    </div>
  )
}
