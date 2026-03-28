"use client"

import Link from "next/link"
import { Scissors } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function Navbar() {
  return (
    <nav className="sticky top-0 z-50 bg-beige/80 backdrop-blur-md border-b border-sage/15 shadow-sm">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 h-16 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2 group">
          <div className="bg-sage rounded-lg p-1.5 group-hover:bg-olive transition-colors">
            <Scissors className="h-5 w-5 text-white" />
          </div>
          <span className="text-lg font-bold text-darkText tracking-tight">
            Shi-City <span className="text-olive">Serve</span>
          </span>
        </Link>

        <div className="flex items-center gap-3">
          <Link href="/slots">
            <Button variant="ghost" size="sm">Browse</Button>
          </Link>
          <Link href="/bookings">
            <Button variant="ghost" size="sm">My Bookings</Button>
          </Link>
          <Link href="/login">
            <Button variant="default" size="sm">Sign In</Button>
          </Link>
        </div>
      </div>
    </nav>
  )
}
