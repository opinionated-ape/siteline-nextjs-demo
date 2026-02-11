import { NextResponse } from 'next/server'
import { withSiteline, SitelineConfig } from '@siteline/nextjs'

const sitelineConfig: SitelineConfig = {
  websiteKey: process.env.SITELINE_WEBSITE_KEY,
  debug: process.env.NODE_ENV === 'development',
}

export default withSiteline(sitelineConfig, () => {
  return NextResponse.next()
})

export const config = {
  matcher: [
    '/((?!_next/static|_next/image|favicon.ico).*)',
  ],
}
