"use client";

import React from 'react';
import BookingTable from '@/components/booking-table';

const DashboardPage = () => {
  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">Salon Booking Dashboard</h1>
      <BookingTable />
    </div>
  );
};

export default DashboardPage;