import type React from "react"
import { Open_Sans } from "next/font/google"
import "./globals.css"
import { ThemeProvider } from "@/components/theme-provider"
import { AppWrapper } from "@/components/app-wrapper"

const openSans = Open_Sans({
  subsets: ["latin"],
  variable: "--font-open-sans",
  display: "swap",
})

export const metadata = {
  title: "FB Profile Viewer - View Facebook Profile Photos",
  description:
    "Advanced Facebook profile photo viewer tool. View and download Facebook profile pictures easily with our professional tool.",
  keywords: "facebook profile viewer, facebook photo viewer, profile picture viewer, fb profile photo",
  openGraph: {
    title: "FB Profile Viewer - View Facebook Profile Photos",
    description: "Advanced Facebook profile photo viewer tool. View and download Facebook profile pictures easily.",
    type: "website",
    url: "https://fbprofileviewer.com",
  },
  twitter: {
    card: "summary_large_image",
    title: "FB Profile Viewer - View Facebook Profile Photos",
    description: "Advanced Facebook profile photo viewer tool. View and download Facebook profile pictures easily.",
  },
  robots: "index, follow",
  viewport: "width=device-width, initial-scale=1",
    generator: 'v0.app'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${openSans.variable} antialiased`} suppressHydrationWarning>
      <body className="font-sans">
        <ThemeProvider attribute="class" defaultTheme="light" enableSystem disableTransitionOnChange={false}>
          <AppWrapper>{children}</AppWrapper>
        </ThemeProvider>
      </body>
    </html>
  )
}
