"use client"

import React, { useState, useEffect } from "react"
import { MapPin } from "lucide-react"
import SalonCard from "@/components/salon-card"
import BookingFlow from "@/components/booking-flow"
import LiveIndicator from "@/components/live-indicator"
import { Skeleton } from "@/components/ui/skeleton"
import { mockSalons } from "@/lib/mock-data"
import type { Salon, Slot } from "@/lib/types"

export default function SlotsPage() {
  const [salons, setSalons] = useState<Salon[]>([])
  const [loading, setLoading] = useState(true)
  const [locationEnabled, setLocationEnabled] = useState(false)
  const [selectedSlot, setSelectedSlot] = useState<{ slot: Slot; salonName: string } | null>(null)
  const [lastRefresh, setLastRefresh] = useState(new Date())

  // Simulate loading
  useEffect(() => {
    const timer = setTimeout(() => {
      setSalons(mockSalons.filter((s) => s.isLive))
      setLoading(false)
    }, 1200)
    return () => clearTimeout(timer)
  }, [])

  // Auto-refresh every 30s
  useEffect(() => {
    const interval = setInterval(() => {
      setLastRefresh(new Date())
    }, 30000)
    return () => clearInterval(interval)
  }, [])

  // Request location
  useEffect(() => {
    if (typeof navigator !== "undefined" && navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        () => setLocationEnabled(true),
        () => setLocationEnabled(false)
      )
    }
  }, [])

  const handleBook = (slot: Slot, salonName: string) => {
    setSelectedSlot({ slot, salonName })
  }

  const handleBookingSubmit = (name: string, phone: string) => {
    console.log("Booking submitted:", { name, phone, slot: selectedSlot })
  }

  return (
    <main className="max-w-4xl mx-auto px-4 py-8">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-8">
        <div>
          <h1 className="text-2xl sm:text-3xl font-bold text-darkText">Available Now</h1>
          <div className="flex items-center gap-3 mt-2">
            <LiveIndicator label="Live availability" />
            <span className="text-xs text-softBrown">
              Updated {lastRefresh.toLocaleTimeString()}
            </span>
          </div>
        </div>

        {!locationEnabled && (
          <div className="flex items-center gap-2 bg-sage/10 text-olive text-sm px-4 py-2 rounded-lg border border-sage/20">
            <MapPin className="h-4 w-4" />
            Enable location for better results
          </div>
        )}
      </div>

      {/* Loading Skeletons */}
      {loading && (
        <div className="space-y-4">
          {[1, 2, 3].map((i) => (
            <div key={i} className="rounded-xl border border-sage/15 p-5 space-y-3 bg-cardBg">
              <Skeleton className="h-6 w-48" />
              <Skeleton className="h-4 w-32" />
              <Skeleton className="h-16 w-full" />
              <Skeleton className="h-16 w-full" />
            </div>
          ))}
        </div>
      )}

      {/* Salon List */}
      {!loading && (
        <div className="space-y-6">
          {salons.length === 0 ? (
            <div className="text-center py-20">
              <p className="text-lg text-softBrown">No salons available right now</p>
              <p className="text-sm text-softBrown/70 mt-1">Check back in a few minutes</p>
            </div>
          ) : (
            salons.map((salon) => (
              <SalonCard
                key={salon.id}
                salon={salon}
                onBook={(slot) => handleBook(slot, salon.name)}
              />
            ))
          )}
        </div>
      )}

      {/* Booking Modal */}
      {selectedSlot && (
        <BookingFlow
          slot={selectedSlot.slot}
          salonName={selectedSlot.salonName}
          onClose={() => setSelectedSlot(null)}
          onSubmit={handleBookingSubmit}
        />
      )}
    </main>
  )
}
