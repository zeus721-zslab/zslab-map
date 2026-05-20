import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'zslab-map',
  description: '부동산 실거래가 지도 서비스',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="ko">
      <body>{children}</body>
    </html>
  )
}
