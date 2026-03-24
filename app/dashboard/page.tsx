import React, { useState } from 'react';
import BookingTable from '@/components/booking-table';

const DashboardPage = () => {
  const [bookings, setBookings] = useState([
    { id: 1, client: 'Alice', time: '10:00 AM', service: 'Haircut', status: 'confirmed' },
    { id: 2, client: 'Bob', time: '11:00 AM', service: 'Manicure', status: 'pending' },
    { id: 3, client: 'Charlie', time: '12:00 PM', service: 'Massage', status: 'confirmed' },
  ]);

  const toggleStatus = (id) => {
    setBookings((prevBookings) =>
      prevBookings.map((booking) =>
        booking.id === id
          ? { ...booking, status: booking.status === 'confirmed' ? 'pending' : 'confirmed' }
          : booking
      )
    );
  };

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">Salon Booking Dashboard</h1>
      <BookingTable bookings={bookings} onToggleStatus={toggleStatus} />
    </div>
  );
};

export default DashboardPage;