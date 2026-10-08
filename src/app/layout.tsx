import type { Metadata } from 'next'
import { Montserrat } from 'next/font/google'
import './globals.css'
import Nav from '@/components/nav'
import { ViewTransitions } from 'next-view-transitions'
import { ThemeProvider } from '@/components/theme-provider'

const montserrat = Montserrat({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Mai Xuân Dân — Digital Marketing | Content Marketing',
  description: 'Digital Marketing portfolio of Mai Xuân Dân, focusing on Content Marketing, Copywriting, Content Strategy and Web Analytics.',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <ViewTransitions>
      <html suppressHydrationWarning lang="vi">
        <body className={montserrat.className}>
          <ThemeProvider attribute="class" disableTransitionOnChange>
            <Nav />
            <div className="text-foreground mx-auto w-[950px] max-w-full px-5 pt-28 pb-10">
              {children}
            </div>
          </ThemeProvider>
        </body>
      </html>
    </ViewTransitions>
  )
}
