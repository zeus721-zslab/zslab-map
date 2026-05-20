import type { NextConfig } from 'next'

const nextConfig: NextConfig = {
  output: 'standalone',
  env: {
    NEXT_PUBLIC_API_URL: process.env.NEXT_PUBLIC_API_URL,
    NEXT_PUBLIC_NAVER_MAP_CLIENT_ID: process.env.NEXT_PUBLIC_NAVER_MAP_CLIENT_ID,
  },
}

export default nextConfig
