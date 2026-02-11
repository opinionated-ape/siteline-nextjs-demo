'use client'

import { useState } from 'react'
import Link from 'next/link'
import Nav from '@/components/nav'
import Footer from '@/components/footer'
import { trackEvent } from '@/lib/track'

const plans = [
  {
    name: 'Free',
    priceMonthly: 0,
    priceAnnual: 0,
    description: 'For individuals and small projects.',
    features: ['1 project', '10,000 events / month', '7-day data retention', 'Community support'],
    cta: 'Get started',
    href: '/signup',
    highlighted: false,
  },
  {
    name: 'Pro',
    priceMonthly: 29,
    priceAnnual: 23,
    description: 'For growing teams that need more power.',
    features: [
      '10 projects',
      '1M events / month',
      '90-day data retention',
      'Slack alerts',
      'Email support',
    ],
    cta: 'Start free trial',
    href: '/signup',
    highlighted: true,
  },
  {
    name: 'Enterprise',
    priceMonthly: null,
    priceAnnual: null,
    description: 'For teams that need full control and SLAs.',
    features: [
      'Unlimited projects',
      'Unlimited events',
      'Custom retention',
      'SSO / SAML',
      'Dedicated support',
      'SLA guarantee',
    ],
    cta: 'Contact sales',
    href: '/signup',
    highlighted: false,
  },
]

export default function PricingPage() {
  const [annual, setAnnual] = useState(false)

  return (
    <div className="min-h-screen bg-white">
      <Nav />

      <main className="mx-auto max-w-6xl px-6 py-16">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Simple, transparent pricing</h1>
          <p className="text-gray-500 max-w-md mx-auto mb-8">
            Start free. Upgrade when you need more. No surprises.
          </p>
          <div className="inline-flex items-center bg-gray-100 rounded-full p-1 gap-1">
            <button
              onClick={() => {
                setAnnual(false)
                trackEvent('billing_period_toggled', { period: 'monthly' })
              }}
              className={`px-5 py-2 rounded-full text-sm font-medium transition-colors ${
                !annual ? 'bg-white shadow text-gray-900' : 'text-gray-500 hover:text-gray-700'
              }`}
            >
              Monthly
            </button>
            <button
              onClick={() => {
                setAnnual(true)
                trackEvent('billing_period_toggled', { period: 'annual' })
              }}
              className={`px-5 py-2 rounded-full text-sm font-medium transition-colors ${
                annual ? 'bg-white shadow text-gray-900' : 'text-gray-500 hover:text-gray-700'
              }`}
            >
              Annual{' '}
              <span className="text-indigo-500 text-xs font-semibold ml-1">–20%</span>
            </button>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {plans.map((plan) => (
            <div
              key={plan.name}
              className={`rounded-2xl p-8 flex flex-col ${
                plan.highlighted ? 'bg-indigo-600' : 'border border-gray-200 bg-white'
              }`}
            >
              <div className="mb-6">
                <h2
                  className={`text-lg font-semibold mb-1 ${
                    plan.highlighted ? 'text-white' : 'text-gray-900'
                  }`}
                >
                  {plan.name}
                </h2>
                <p
                  className={`text-sm ${
                    plan.highlighted ? 'text-indigo-200' : 'text-gray-500'
                  }`}
                >
                  {plan.description}
                </p>
              </div>

              <div className="mb-8">
                {plan.priceMonthly === null ? (
                  <p
                    className={`text-4xl font-bold ${
                      plan.highlighted ? 'text-white' : 'text-gray-900'
                    }`}
                  >
                    Custom
                  </p>
                ) : (
                  <div className="flex items-end gap-1">
                    <span
                      className={`text-4xl font-bold ${
                        plan.highlighted ? 'text-white' : 'text-gray-900'
                      }`}
                    >
                      ${annual ? plan.priceAnnual : plan.priceMonthly}
                    </span>
                    <span
                      className={`text-sm mb-1.5 ${
                        plan.highlighted ? 'text-indigo-200' : 'text-gray-500'
                      }`}
                    >
                      /month
                    </span>
                  </div>
                )}
              </div>

              <ul className="space-y-3 flex-1 mb-8">
                {plan.features.map((f) => (
                  <li
                    key={f}
                    className={`flex items-center gap-2.5 text-sm ${
                      plan.highlighted ? 'text-indigo-100' : 'text-gray-600'
                    }`}
                  >
                    <span
                      className={`w-4 h-4 rounded-full flex items-center justify-center text-xs flex-shrink-0 ${
                        plan.highlighted
                          ? 'bg-indigo-500 text-white'
                          : 'bg-indigo-100 text-indigo-600'
                      }`}
                    >
                      ✓
                    </span>
                    {f}
                  </li>
                ))}
              </ul>

              <Link
                href={plan.href}
                onClick={() =>
                  trackEvent('plan_selected', {
                    plan: plan.name,
                    period: annual ? 'annual' : 'monthly',
                  })
                }
                className={`text-center py-3 rounded-lg text-sm font-medium transition-colors ${
                  plan.highlighted
                    ? 'bg-white text-indigo-600 hover:bg-indigo-50'
                    : 'bg-indigo-600 text-white hover:bg-indigo-700'
                }`}
              >
                {plan.cta}
              </Link>
            </div>
          ))}
        </div>
      </main>

      <Footer />
    </div>
  )
}
