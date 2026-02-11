'use client'

import Link from 'next/link'
import { trackEvent } from '@/lib/track'

const stats = [
  { label: 'Total Events', value: '2,847,301', change: '+12.4%', positive: true },
  { label: 'Active Users', value: '14,290', change: '+3.2%', positive: true },
  { label: 'Conversion Rate', value: '3.87%', change: '–0.4%', positive: false },
  { label: 'Monthly Revenue', value: '$48,230', change: '+8.1%', positive: true },
]

const activity = [
  { event: 'plan_selected', user: 'ali@example.com', page: '/pricing', time: '2 min ago', tag: 'Pro' },
  { event: 'signup_submitted', user: 'nina@company.co', page: '/signup', time: '7 min ago', tag: null },
  { event: 'cta_clicked', user: '—', page: '/', time: '12 min ago', tag: null },
  { event: 'article_clicked', user: '—', page: '/blog', time: '18 min ago', tag: null },
  { event: 'plan_selected', user: 'dev@startup.io', page: '/pricing', time: '24 min ago', tag: 'Enterprise' },
  { event: 'billing_period_toggled', user: '—', page: '/pricing', time: '31 min ago', tag: null },
]

const navLinks = [
  { label: 'Overview', active: true },
  { label: 'Events', active: false },
  { label: 'Users', active: false },
  { label: 'Funnels', active: false },
  { label: 'Settings', active: false },
]

const chartBars = [42, 68, 55, 71, 83, 90, 78, 95, 87, 100, 92, 97]

export default function DashboardPage() {
  return (
    <div className="min-h-screen bg-gray-50 flex">
      <aside className="w-56 bg-white border-r border-gray-200 flex flex-col fixed h-screen">
        <div className="px-6 py-5 border-b border-gray-200">
          <Link href="/" className="text-lg font-bold text-gray-900">
            Novara
          </Link>
        </div>
        <nav className="flex-1 px-3 py-4 space-y-0.5">
          {navLinks.map((link) => (
            <button
              key={link.label}
              onClick={() => trackEvent('dashboard_nav_clicked', { section: link.label })}
              className={`w-full text-left px-3 py-2 rounded-lg text-sm font-medium transition-colors ${
                link.active
                  ? 'bg-indigo-50 text-indigo-700'
                  : 'text-gray-600 hover:bg-gray-50 hover:text-gray-900'
              }`}
            >
              {link.label}
            </button>
          ))}
        </nav>
        <div className="px-5 py-4 border-t border-gray-200">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-full bg-indigo-100 flex items-center justify-center text-xs font-semibold text-indigo-600 flex-shrink-0">
              AK
            </div>
            <div className="min-w-0">
              <p className="text-sm font-medium text-gray-900 truncate">Alex Kim</p>
              <p className="text-xs text-gray-400">Admin</p>
            </div>
          </div>
        </div>
      </aside>

      <main className="ml-56 flex-1 p-8 min-w-0">
        <div className="mb-8">
          <h1 className="text-2xl font-bold text-gray-900">Overview</h1>
          <p className="text-gray-500 text-sm mt-1">Jan 1 – Jan 31, 2025</p>
        </div>

        <div className="grid grid-cols-2 xl:grid-cols-4 gap-4 mb-8">
          {stats.map((stat) => (
            <div key={stat.label} className="bg-white rounded-xl p-5 border border-gray-200">
              <p className="text-xs text-gray-500 font-medium uppercase tracking-wide mb-1">
                {stat.label}
              </p>
              <p className="text-2xl font-bold text-gray-900">{stat.value}</p>
              <span
                className={`text-xs font-medium ${
                  stat.positive ? 'text-emerald-600' : 'text-red-500'
                }`}
              >
                {stat.change} vs last month
              </span>
            </div>
          ))}
        </div>

        <div className="bg-white rounded-xl border border-gray-200 p-6 mb-6">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-sm font-semibold text-gray-900">Events over time</h2>
            <span className="text-xs text-gray-400">Last 12 weeks</span>
          </div>
          <div className="flex items-end gap-1.5 h-24">
            {chartBars.map((height, i) => (
              <div
                key={i}
                className="flex-1 bg-indigo-100 rounded-sm hover:bg-indigo-400 transition-colors cursor-pointer"
                style={{ height: `${height}%` }}
                onClick={() => trackEvent('chart_bar_clicked', { week: i + 1 })}
              />
            ))}
          </div>
        </div>

        <div className="bg-white rounded-xl border border-gray-200 overflow-hidden">
          <div className="px-6 py-4 border-b border-gray-200">
            <h2 className="text-sm font-semibold text-gray-900">Recent events</h2>
          </div>
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b border-gray-100">
                <th className="text-left px-6 py-3 text-xs font-semibold text-gray-400 uppercase tracking-wide">
                  Event
                </th>
                <th className="text-left px-6 py-3 text-xs font-semibold text-gray-400 uppercase tracking-wide">
                  User
                </th>
                <th className="text-left px-6 py-3 text-xs font-semibold text-gray-400 uppercase tracking-wide">
                  Page
                </th>
                <th className="text-left px-6 py-3 text-xs font-semibold text-gray-400 uppercase tracking-wide">
                  Time
                </th>
              </tr>
            </thead>
            <tbody>
              {activity.map((row, i) => (
                <tr key={i} className="border-b border-gray-50 hover:bg-gray-50 transition-colors">
                  <td className="px-6 py-3.5">
                    <span className="font-mono text-xs bg-gray-100 text-gray-700 px-2 py-0.5 rounded">
                      {row.event}
                    </span>
                    {row.tag && (
                      <span className="ml-2 text-xs bg-indigo-50 text-indigo-600 px-2 py-0.5 rounded font-medium">
                        {row.tag}
                      </span>
                    )}
                  </td>
                  <td className="px-6 py-3.5 text-gray-500">{row.user}</td>
                  <td className="px-6 py-3.5 font-mono text-xs text-gray-500">{row.page}</td>
                  <td className="px-6 py-3.5 text-gray-400 text-xs">{row.time}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </main>
    </div>
  )
}
