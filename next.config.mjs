// If your deployment platform requires your production image's size to not exceed a certain limit,
// you can also install `@serwist/next` as one of your `devDependencies` and do this:
import { PHASE_DEVELOPMENT_SERVER, PHASE_PRODUCTION_BUILD } from 'next/constants.js'

/** @type {(phase: string, defaultConfig: import("next").NextConfig) => Promise<import("next").NextConfig>} */
export default async (phase) => {
  /** @type {import("next").NextConfig} */
  const nextConfig = {}

  if (phase === PHASE_DEVELOPMENT_SERVER || phase === PHASE_PRODUCTION_BUILD) {
    const withSerwist = (await import('@serwist/next')).default({
      // Note: This is only an example. If you use Pages Router,
      // use something else that works, such as "service-worker/index.ts".
      swSrc: 'src/service-worker/sw.ts',
      swDest: 'public/sw.js',
      reloadOnOnline: false,
    })
    return withSerwist(nextConfig)
  }

  return nextConfig
}
