import Link from 'next/link'

export default function Footer() {
  return (
    <footer className="border-t border-gray-200 bg-white mt-24">
      <div className="mx-auto max-w-6xl px-6 py-12 flex flex-col md:flex-row justify-between items-start gap-8">
        <div>
          <p className="text-lg font-bold text-gray-900">Novara</p>
          <p className="text-sm text-gray-500 mt-1">Team analytics that actually make sense.</p>
        </div>
        <div className="flex gap-12 text-sm">
          <div className="flex flex-col gap-2">
            <p className="font-semibold text-gray-900">Product</p>
            <Link href="/pricing" className="text-gray-500 hover:text-gray-900 transition-colors">Pricing</Link>
            <Link href="/blog" className="text-gray-500 hover:text-gray-900 transition-colors">Blog</Link>
            <Link href="/dashboard" className="text-gray-500 hover:text-gray-900 transition-colors">Dashboard</Link>
          </div>
          <div className="flex flex-col gap-2">
            <p className="font-semibold text-gray-900">Company</p>
            <Link href="/" className="text-gray-500 hover:text-gray-900 transition-colors">About</Link>
            <Link href="/signup" className="text-gray-500 hover:text-gray-900 transition-colors">Sign up</Link>
          </div>
        </div>
      </div>
      <div className="border-t border-gray-100">
        <div className="mx-auto max-w-6xl px-6 py-4 text-xs text-gray-400">
          © 2025 Novara. All rights reserved.
        </div>
      </div>
    </footer>
  )
}
