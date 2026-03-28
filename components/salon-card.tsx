"use client"

import { MapPin, Users, Clock, BadgeCheck } from "lucide-react"
import { Card, CardHeader, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import type { Salon, Slot } from "@/lib/types"

interface SalonCardProps {
  salon: Salon
  onBook: (slot: Slot) => void
}

export default function SalonCard({ salon, onBook }: SalonCardProps) {
  return (
    <Card className="animate-fadeIn">
      <CardHeader>
        <div className="flex items-start justify-between">
          <div>
            <div className="flex items-center gap-2">
              <h3 className="text-lg font-bold text-darkText">{salon.name}</h3>
              {salon.verified && (
                <BadgeCheck className="h-4 w-4 text-olive" />
              )}
            </div>
            <div className="flex items-center gap-3 mt-1 text-sm text-softBrown">
              <span className="flex items-center gap-1">
                <MapPin className="h-3.5 w-3.5" /> {salon.distance} · {salon.area}
              </span>
              <span className="flex items-center gap-1">
                <Users className="h-3.5 w-3.5" /> {salon.stylistCount} stylist{salon.stylistCount > 1 ? "s" : ""}
              </span>
            </div>
          </div>
          <div className="text-right">
            {salon.openNow ? (
              <Badge variant="available">Open now</Badge>
            ) : (
              <Badge variant="secondary">Opens {salon.opensAt}</Badge>
            )}
          </div>
        </div>
      </CardHeader>

      <CardContent>
        <div className="space-y-3">
          {salon.slots.map((slot) => (
            <div
              key={slot.id}
              className="flex items-center justify-between p-3 rounded-lg bg-beige/60 border border-sage/10"
            >
              <div className="space-y-1">
                <div className="flex items-center gap-2">
                  <span className="font-semibold text-darkText">{slot.service}</span>
                  {slot.isLastMinute && (
                    <Badge variant="lastMinute">Last-minute</Badge>
                  )}
                  {slot.slotsLeft === 1 && (
                    <Badge variant="secondary">Only 1 left</Badge>
                  )}
                </div>
                <div className="flex items-center gap-3 text-sm text-softBrown">
                  <span className="flex items-center gap-1">
                    <Clock className="h-3.5 w-3.5" /> {slot.time}
                  </span>
                  <span>Available in {slot.availableIn}</span>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <span className="text-lg font-bold text-darkText">${slot.price}</span>
                <Button size="sm" onClick={() => onBook(slot)}>
                  Book Now
                </Button>
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  )
}
