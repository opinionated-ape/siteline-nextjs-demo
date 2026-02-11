'use client'

import { useState } from 'react'
import Link from 'next/link'
import { trackEvent } from '@/lib/track'

export default function SignupPage() {
  const [submitted, setSubmitted] = useState(false)

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    const data = new FormData(e.currentTarget)
    trackEvent('signup_submitted', {
      plan: 'free',
      source: 'signup_page',
      hasName: !!data.get('name'),
    })
    setSubmitted(true)
  }

  if (submitted) {
    return (
      <div className="min-h-screen bg-white flex items-center justify-center px-6">
        <div className="text-center max-w-md">
          <div className="w-16 h-16 bg-emerald-100 rounded-full flex items-center justify-center mx-auto mb-6 text-2xl">
            ✓
          </div>
          <h1 className="text-2xl font-bold text-gray-900 mb-2">Welcome to Novara</h1>
          <p className="text-gray-500 mb-6">
            Your account is ready. Check your email to confirm your address.
          </p>
          <Link
            href="/dashboard"
            className="inline-block bg-indigo-600 text-white px-6 py-3 rounded-lg font-medium hover:bg-indigo-700 transition-colors text-sm"
          >
            Go to dashboard
          </Link>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-white flex">
      <div className="hidden lg:flex lg:w-1/2 bg-indigo-600 flex-col justify-between p-12">
        <Link href="/" className="text-white font-bold text-xl">
          Novara
        </Link>
        <div>
          <h2 className="text-4xl font-bold text-white leading-tight mb-4">
            Start tracking what actually matters
          </h2>
          <p className="text-indigo-200 text-lg">
            Join 10,000+ teams making better product decisions with Novara.
          </p>
        </div>
        <div className="flex gap-2">
          {[0, 1, 2].map((i) => (
            <div key={i} className="w-2 h-2 bg-indigo-400 rounded-full" />
          ))}
        </div>
      </div>

      <div className="flex-1 flex items-center justify-center px-6 py-12">
        <div className="w-full max-w-sm">
          <div className="lg:hidden mb-8">
            <Link href="/" className="text-gray-900 font-bold text-xl">
              Novara
            </Link>
          </div>

          <h1 className="text-2xl font-bold text-gray-900 mb-2">Create your account</h1>
          <p className="text-gray-500 text-sm mb-8">
            Already have an account?{' '}
            <Link href="/dashboard" className="text-indigo-600 hover:underline font-medium">
              Sign in
            </Link>
          </p>

          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1.5">
                Full name
              </label>
              <input
                id="name"
                name="name"
                type="text"
                autoComplete="name"
                placeholder="Alex Kim"
                required
                className="w-full border border-gray-300 rounded-lg px-4 py-3 text-sm text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
              />
            </div>
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1.5">
                Work email
              </label>
              <input
                id="email"
                name="email"
                type="email"
                autoComplete="email"
                placeholder="alex@company.com"
                required
                className="w-full border border-gray-300 rounded-lg px-4 py-3 text-sm text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
              />
            </div>
            <div>
              <label htmlFor="password" className="block text-sm font-medium text-gray-700 mb-1.5">
                Password
              </label>
              <input
                id="password"
                name="password"
                type="password"
                autoComplete="new-password"
                placeholder="Min. 8 characters"
                minLength={8}
                required
                className="w-full border border-gray-300 rounded-lg px-4 py-3 text-sm text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
              />
            </div>
            <div className="flex items-start gap-2.5 pt-1">
              <input
                id="terms"
                name="terms"
                type="checkbox"
                required
                className="mt-0.5 rounded border-gray-300 text-indigo-600"
              />
              <label htmlFor="terms" className="text-sm text-gray-500">
                I agree to the{' '}
                <Link href="/" className="text-indigo-600 hover:underline">
                  Terms of Service
                </Link>{' '}
                and{' '}
                <Link href="/" className="text-indigo-600 hover:underline">
                  Privacy Policy
                </Link>
              </label>
            </div>
            <button
              type="submit"
              className="w-full bg-indigo-600 text-white py-3 rounded-lg text-sm font-medium hover:bg-indigo-700 transition-colors mt-2"
            >
              Create account
            </button>
          </form>

          <div className="relative my-6">
            <div className="absolute inset-0 flex items-center">
              <div className="w-full border-t border-gray-200" />
            </div>
            <div className="relative flex justify-center">
              <span className="text-xs text-gray-400 bg-white px-3">or continue with</span>
            </div>
          </div>

          <button
            onClick={() => trackEvent('oauth_clicked', { provider: 'google' })}
            className="w-full border border-gray-300 text-gray-700 py-3 rounded-lg text-sm font-medium hover:bg-gray-50 transition-colors flex items-center justify-center gap-2"
          >
            <svg width="16" height="16" viewBox="0 0 48 48" fill="none" aria-hidden="true">
              <path
                d="M43.611 20.083H42V20H24v8h11.303c-1.649 4.657-6.08 8-11.303 8-6.627 0-12-5.373-12-12s5.373-12 12-12c3.059 0 5.842 1.154 7.961 3.039l5.657-5.657C34.046 6.053 29.268 4 24 4 12.955 4 4 12.955 4 24s8.955 20 20 20 20-8.955 20-20c0-1.341-.138-2.65-.389-3.917z"
                fill="#FFC107"
              />
              <path
                d="M6.306 14.691l6.571 4.819C14.655 15.108 18.961 12 24 12c3.059 0 5.842 1.154 7.961 3.039l5.657-5.657C34.046 6.053 29.268 4 24 4 16.318 4 9.656 8.337 6.306 14.691z"
                fill="#FF3D00"
              />
              <path
                d="M24 44c5.166 0 9.86-1.977 13.409-5.192l-6.19-5.238C29.211 35.091 26.715 36 24 36c-5.202 0-9.619-3.317-11.283-7.946l-6.522 5.025C9.505 39.556 16.227 44 24 44z"
                fill="#4CAF50"
              />
              <path
                d="M43.611 20.083H42V20H24v8h11.303c-.792 2.237-2.231 4.166-4.087 5.571l6.19 5.238C42.022 35.244 44 30 44 24c0-1.341-.138-2.65-.389-3.917z"
                fill="#1976D2"
              />
            </svg>
            Continue with Google
          </button>
        </div>
      </div>
    </div>
  )
}
