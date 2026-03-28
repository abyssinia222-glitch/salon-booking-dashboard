export interface Slot {
  id: string
  service: string
  time: string
  price: number
  availableIn: string
  isLastMinute: boolean
  slotsLeft: number
}

export interface Salon {
  id: string
  name: string
  distance: string
  area: string
  stylistCount: number
  openNow: boolean
  opensAt: string
  verified: boolean
  isLive: boolean
  slots: Slot[]
}

export interface Booking {
  id: string
  service: string
  time: string
  price: number
  deposit: number
  customerName: string
  status: "pending" | "confirmed" | "declined"
}
