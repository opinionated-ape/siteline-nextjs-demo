import Link from 'next/link'

export default function Nav() {
  return (
    <nav className="border-b border-gray-200 bg-white">
      <div className="mx-auto max-w-6xl px-6 flex items-center justify-between h-16">
        <Link href="/" className="text-xl font-bold text-gray-900 tracking-tight">
          Novara
        </Link>
        <div className="hidden md:flex items-center gap-6 text-sm text-gray-600">
          <Link href="/blog" className="hover:text-gray-900 transition-colors">
            Blog
          </Link>
          <Link href="/pricing" className="hover:text-gray-900 transition-colors">
            Pricing
          </Link>
          <Link href="/dashboard" className="hover:text-gray-900 transition-colors">
            Dashboard
          </Link>
        </div>
        <div className="flex items-center gap-3">
          <Link
            href="/dashboard"
            className="text-sm text-gray-700 hover:text-gray-900 font-medium transition-colors"
          >
            Sign in
          </Link>
          <Link
            href="/signup"
            className="text-sm bg-gray-900 text-white px-4 py-2 rounded-lg hover:bg-gray-700 transition-colors font-medium"
          >
            Sign up
          </Link>
        </div>
      </div>
    </nav>
  )
}
