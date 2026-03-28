import Link from "next/link"
import { Scissors, MapPin, Zap, Shield } from "lucide-react"
import { Button } from "@/components/ui/button"
import LiveIndicator from "@/components/live-indicator"

export default function Home() {
  return (
    <main className="min-h-[calc(100vh-4rem)]">
      {/* Hero */}
      <section className="flex flex-col items-center justify-center text-center px-4 py-24 sm:py-32">
        <div className="animate-fadeIn space-y-6 max-w-2xl">
          <LiveIndicator label="Live availability near you" />

          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-darkText leading-tight">
            Fill Empty Chairs.{" "}
            <span className="text-olive">Instantly.</span>
          </h1>

          <p className="text-lg sm:text-xl text-softBrown max-w-lg mx-auto">
            Live last-minute bookings from clients near you. No ads needed.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-3 pt-4">
            <Link href="/slots">
              <Button size="lg" className="text-base px-8">
                Find Available Slots
              </Button>
            </Link>
            <Link href="/login">
              <Button variant="outline" size="lg" className="text-base px-8">
                List Your Salon
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Value Props */}
      <section className="max-w-5xl mx-auto px-4 pb-20">
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
          <div className="bg-cardBg rounded-xl p-6 border border-sage/15 shadow-sm text-center">
            <div className="bg-sage/15 rounded-full w-12 h-12 flex items-center justify-center mx-auto mb-4">
              <MapPin className="h-6 w-6 text-olive" />
            </div>
            <h3 className="font-bold text-darkText mb-1">Location-Aware</h3>
            <p className="text-sm text-softBrown">
              See salons sorted by distance. Closest empty chairs first.
            </p>
          </div>

          <div className="bg-cardBg rounded-xl p-6 border border-sage/15 shadow-sm text-center">
            <div className="bg-sage/15 rounded-full w-12 h-12 flex items-center justify-center mx-auto mb-4">
              <Zap className="h-6 w-6 text-olive" />
            </div>
            <h3 className="font-bold text-darkText mb-1">Real-Time Slots</h3>
            <p className="text-sm text-softBrown">
              Live availability that refreshes every 30 seconds. Book in minutes.
            </p>
          </div>

          <div className="bg-cardBg rounded-xl p-6 border border-sage/15 shadow-sm text-center">
            <div className="bg-sage/15 rounded-full w-12 h-12 flex items-center justify-center mx-auto mb-4">
              <Shield className="h-6 w-6 text-olive" />
            </div>
            <h3 className="font-bold text-darkText mb-1">Secure Deposit</h3>
            <p className="text-sm text-softBrown">
              $20 deposit secures your spot. Applied to your service total.
            </p>
          </div>
        </div>
      </section>
    </main>
  )
}