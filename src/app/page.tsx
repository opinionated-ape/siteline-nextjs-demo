'use client'

import Link from 'next/link'
import Nav from '@/components/nav'
import Footer from '@/components/footer'
import { trackEvent } from '@/lib/track'

const features = [
  {
    icon: '📊',
    title: 'Real-time dashboards',
    description: 'Monitor your team metrics live. No more waiting for scheduled reports.',
  },
  {
    icon: '🤝',
    title: 'Team collaboration',
    description: 'Share insights across your org with granular permissions and live annotations.',
  },
  {
    icon: '🔔',
    title: 'Smart alerts',
    description: 'Set thresholds and get notified the moment something needs attention.',
  },
]

const stats = [
  { label: 'Teams using Novara', value: '10,000+' },
  { label: 'Events tracked monthly', value: '500M+' },
  { label: 'Uptime', value: '99.9%' },
]

export default function HomePage() {
  return (
    <div className="min-h-screen bg-white">
      <Nav />

      <section className="mx-auto max-w-6xl px-6 pt-24 pb-20 text-center">
        <div className="inline-flex items-center gap-2 bg-indigo-50 text-indigo-600 text-sm font-medium px-3 py-1.5 rounded-full mb-6">
          <span className="w-1.5 h-1.5 bg-indigo-500 rounded-full inline-block" />
          Now in public beta
        </div>
        <h1 className="text-5xl font-bold text-gray-900 tracking-tight leading-tight mb-6">
          Analytics that move<br />with your team
        </h1>
        <p className="text-xl text-gray-500 max-w-xl mx-auto mb-10">
          Novara gives product and engineering teams a unified view of what's happening — and what to do next.
        </p>
        <div className="flex items-center justify-center gap-4 flex-wrap">
          <Link
            href="/signup"
            onClick={() => trackEvent('cta_clicked', { location: 'hero', variant: 'primary' })}
            className="bg-indigo-600 text-white px-8 py-3.5 rounded-lg font-medium hover:bg-indigo-700 transition-colors"
          >
            Start for free
          </Link>
          <Link
            href="/pricing"
            onClick={() => trackEvent('cta_clicked', { location: 'hero', variant: 'secondary' })}
            className="text-gray-700 px-8 py-3.5 rounded-lg font-medium border border-gray-300 hover:border-gray-400 transition-colors"
          >
            See pricing
          </Link>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 py-20">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Everything your team needs</h2>
          <p className="text-gray-500 max-w-lg mx-auto">
            Stop context-switching between tools. Novara brings all your metrics into one place.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {features.map((feature) => (
            <div key={feature.title} className="bg-gray-50 rounded-2xl p-8">
              <div className="text-3xl mb-4">{feature.icon}</div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">{feature.title}</h3>
              <p className="text-gray-500 text-sm leading-relaxed">{feature.description}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-indigo-600 py-20">
        <div className="mx-auto max-w-6xl px-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            {stats.map((stat) => (
              <div key={stat.label}>
                <p className="text-4xl font-bold text-white">{stat.value}</p>
                <p className="text-indigo-200 mt-2 text-sm">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 py-24 text-center">
        <h2 className="text-3xl font-bold text-gray-900 mb-4">Ready to get started?</h2>
        <p className="text-gray-500 mb-8">Join thousands of teams already using Novara.</p>
        <Link
          href="/signup"
          onClick={() => trackEvent('cta_clicked', { location: 'bottom', variant: 'primary' })}
          className="inline-block bg-indigo-600 text-white px-8 py-3.5 rounded-lg font-medium hover:bg-indigo-700 transition-colors"
        >
          Create your free account
        </Link>
      </section>

      <Footer />
    </div>
  )
}
