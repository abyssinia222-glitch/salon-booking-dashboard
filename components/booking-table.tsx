"use client";
import React, { useState } from 'react';
import Table from './ui/table';

const initialBookings = [
  { id: 1, client: 'Alice', time: '10:00 AM', service: 'Haircut', status: 'confirmed' as const },
  { id: 2, client: 'Bob', time: '11:00 AM', service: 'Manicure', status: 'pending' as const },
  { id: 3, client: 'Charlie', time: '12:00 PM', service: 'Massage', status: 'confirmed' as const },
];

const BookingTable = () => {
  const [bookings, setBookings] = useState(initialBookings);

  const toggleStatus = (id: number) => {
    setBookings((prevBookings) =>
      prevBookings.map((booking) =>
        booking.id === id
          ? { ...booking, status: booking.status === 'confirmed' ? 'pending' : 'confirmed' }
          : booking
      )
    );
  };

  return (
    <Table bookings={bookings} onToggleStatus={toggleStatus} />
  );
};

export default BookingTable;