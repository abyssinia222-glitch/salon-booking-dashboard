"use client";
import BookingTable from '../components/booking-table';

const Page = () => {
  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Salon Booking Dashboard</h1>
      <BookingTable />
    </div>
  );
};

export default Page;