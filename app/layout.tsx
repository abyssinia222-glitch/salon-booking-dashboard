import type { Metadata } from "next"
import Navbar from "@/components/navbar"
import "./globals.css"

export const metadata: Metadata = {
  title: "Shi-City Serve — Fill Empty Chairs. Instantly.",
  description: "Last-minute salon booking platform. Fill empty slots within hours.",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className="min-h-screen bg-beige antialiased">
        <Navbar />
        {children}
      </body>
    </html>
  )
}