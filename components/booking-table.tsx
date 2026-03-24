"use client";
import React, { useState } from 'react';
import Table from './ui/table';
import Button from './ui/button';

const initialBookings = [
  { id: 1, client: 'Alice', time: '10:00 AM', service: 'Haircut', status: 'confirmed' },
  { id: 2, client: 'Bob', time: '11:00 AM', service: 'Manicure', status: 'pending' },
  { id: 3, client: 'Charlie', time: '12:00 PM', service: 'Massage', status: 'confirmed' },
];

const BookingTable = () => {
  const [bookings, setBookings] = useState(initialBookings);

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
    <div className="overflow-x-auto">
      <Table>
        <thead>
          <tr>
            <th>Client</th>
            <th>Time</th>
            <th>Service</th>
            <th>Status</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {bookings.map((booking) => (
            <tr key={booking.id}>
              <td>{booking.client}</td>
              <td>{booking.time}</td>
              <td>{booking.service}</td>
              <td>
                <span className={`badge ${booking.status === 'confirmed' ? 'bg-green-500' : 'bg-gray-500'}`}>
                  {booking.status}
                </span>
              </td>
              <td>
                <Button onClick={() => toggleStatus(booking.id)}>
                  {booking.status === 'confirmed' ? 'Cancel' : 'Confirm'}
                </Button>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
    </div>
  );
};

export default BookingTable;