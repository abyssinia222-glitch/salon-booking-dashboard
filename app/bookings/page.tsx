"use client"

import React, { useState } from "react"
import { Clock, CheckCircle2, XCircle } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { mockBookings } from "@/lib/mock-data"
import type { Booking } from "@/lib/types"

const statusConfig = {
  pending: { icon: Clock, label: "Pending confirmation", variant: "pending" as const },
  confirmed: { icon: CheckCircle2, label: "Confirmed", variant: "confirmed" as const },
  declined: { icon: XCircle, label: "Declined", variant: "declined" as const },
}

export default function BookingsPage() {
  const [bookings] = useState<Booking[]>(mockBookings)

  return (
    <main className="max-w-3xl mx-auto px-4 py-8">
      <h1 className="text-2xl sm:text-3xl font-bold text-darkText mb-6">My Bookings</h1>

      {bookings.length === 0 ? (
        <div className="text-center py-20">
          <p className="text-lg text-softBrown">No bookings yet</p>
          <p className="text-sm text-softBrown/70 mt-1">Browse available slots to book your first appointment</p>
        </div>
      ) : (
        <div className="space-y-4">
          {bookings.map((booking) => {
            const config = statusConfig[booking.status]
            const Icon = config.icon
            return (
              <Card key={booking.id} className="animate-fadeIn">
                <CardContent className="p-5">
                  <div className="flex items-start justify-between">
                    <div className="space-y-1">
                      <h3 className="font-bold text-darkText">{booking.service}</h3>
                      <p className="text-sm text-softBrown">{booking.time} · ${booking.price}</p>
                      <p className="text-sm text-softBrown">{booking.customerName}</p>
                    </div>
                    <div className="text-right space-y-2">
                      <Badge variant={config.variant}>
                        <Icon className="h-3 w-3 mr-1" />
                        {config.label}
                      </Badge>
                      <p className="text-xs text-softBrown">Deposit: ${booking.deposit}</p>
                    </div>
                  </div>

                  {booking.status === "declined" && (
                    <div className="mt-3 p-3 rounded-lg bg-red-50 border border-red-200 text-sm text-red-600">
                      This booking was declined. Your $20 deposit will be refunded within 3–5 business days.
                    </div>
                  )}
                </CardContent>
              </Card>
            )
          })}
        </div>
      )}
    </main>
  )
}
