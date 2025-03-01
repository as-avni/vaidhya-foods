import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
// import Header from "@/components/Header"
import Footer from "@/components/Footer"
import SiteHeader from "@/components/site-header"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Vaidhya Foods - Premium Dairy Products",
  description: "Indulge in the creamy delight of fresh paneer and dairy products from Vaidhya Foods",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={inter.className}>
        <SiteHeader /
        {/* <Header /> */}
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  )
}

