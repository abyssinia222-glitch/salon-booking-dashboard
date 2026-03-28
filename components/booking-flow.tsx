"use client"

import React, { useState } from "react"
import { X, CreditCard, CheckCircle2 } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardHeader, CardContent } from "@/components/ui/card"
import type { Slot } from "@/lib/types"

interface BookingFlowProps {
  slot: Slot
  salonName: string
  onClose: () => void
  onSubmit: (name: string, phone: string) => void
}

export default function BookingFlow({ slot, salonName, onClose, onSubmit }: BookingFlowProps) {
  const [step, setStep] = useState(1)
  const [name, setName] = useState("")
  const [phone, setPhone] = useState("")

  const handleSubmit = () => {
    onSubmit(name, phone)
    setStep(4)
  }

  return (
    <div className="fixed inset-0 z-50 bg-black/40 flex items-center justify-center p-4">
      <Card className="w-full max-w-md relative">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-softBrown hover:text-darkText transition"
        >
          <X className="h-5 w-5" />
        </button>

        <CardHeader>
          <p className="text-sm text-softBrown">{salonName}</p>
          <h2 className="text-xl font-bold text-darkText">{slot.service}</h2>
          <p className="text-sm text-softBrown">{slot.time} · ${slot.price}</p>

          {/* Step indicator */}
          <div className="flex gap-2 mt-4">
            {[1, 2, 3].map((s) => (
              <div
                key={s}
                className={`h-1.5 flex-1 rounded-full transition-colors ${
                  step >= s ? "bg-sage" : "bg-sage/20"
                }`}
              />
            ))}
          </div>
        </CardHeader>

        <CardContent className="space-y-4">
          {/* Step 1: Service + Time confirmation */}
          {step === 1 && (
            <div className="space-y-4 animate-fadeIn">
              <div className="p-4 rounded-lg bg-beige border border-sage/15">
                <p className="text-sm font-medium text-darkText">Booking Summary</p>
                <p className="text-sm text-softBrown mt-1">
                  {slot.service} at {slot.time}
                </p>
                <p className="text-sm text-softBrown">
                  Available in {slot.availableIn}
                </p>
              </div>
              <Button className="w-full" onClick={() => setStep(2)}>
                Continue
              </Button>
            </div>
          )}

          {/* Step 2: Name + Phone */}
          {step === 2 && (
            <div className="space-y-4 animate-fadeIn">
              <div>
                <label className="text-sm font-medium text-darkText block mb-1.5">Full Name</label>
                <input
                  type="text"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="Your full name"
                  className="w-full h-11 px-4 rounded-lg border border-sage/30 bg-white text-darkText placeholder:text-softBrown/50 focus:outline-none focus:ring-2 focus:ring-sage focus:border-transparent"
                />
              </div>
              <div>
                <label className="text-sm font-medium text-darkText block mb-1.5">Phone Number</label>
                <input
                  type="tel"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  placeholder="+1 555-000-0000"
                  className="w-full h-11 px-4 rounded-lg border border-sage/30 bg-white text-darkText placeholder:text-softBrown/50 focus:outline-none focus:ring-2 focus:ring-sage focus:border-transparent"
                />
              </div>
              <Button
                className="w-full"
                onClick={() => setStep(3)}
                disabled={!name.trim() || !phone.trim()}
              >
                Continue to Deposit
              </Button>
            </div>
          )}

          {/* Step 3: Deposit */}
          {step === 3 && (
            <div className="space-y-4 animate-fadeIn">
              <div className="p-4 rounded-lg bg-beige border border-sage/15 text-center">
                <CreditCard className="h-8 w-8 text-olive mx-auto mb-2" />
                <p className="text-2xl font-bold text-darkText">$20.00</p>
                <p className="text-sm text-softBrown mt-1">
                  Deposit secures your spot and goes toward your service
                </p>
              </div>
              <div className="p-3 rounded-lg bg-sage/10 text-sm text-olive">
                Your total service price is ${slot.price}. The $20 deposit will be deducted from the final amount.
              </div>
              <Button className="w-full" size="lg" onClick={handleSubmit}>
                Pay $20 Deposit & Book
              </Button>
            </div>
          )}

          {/* Step 4: Confirmation */}
          {step === 4 && (
            <div className="text-center space-y-4 py-4 animate-fadeIn">
              <CheckCircle2 className="h-12 w-12 text-olive mx-auto" />
              <div>
                <h3 className="text-lg font-bold text-darkText">Booking Requested!</h3>
                <p className="text-sm text-softBrown mt-1">
                  Pending salon confirmation. We'll notify you once {salonName} responds.
                </p>
              </div>
              <Button variant="outline" onClick={onClose}>
                Done
              </Button>
            </div>
          )}
        </CardContent>
      </Card>
    </div>
  )
}
