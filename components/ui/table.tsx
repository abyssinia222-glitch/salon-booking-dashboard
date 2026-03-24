import React from 'react';

interface Booking {
  id: number;
  client: string;
  time: string;
  service: string;
  status: 'confirmed' | 'pending';
}

interface TableProps {
  bookings: Booking[];
  onToggleStatus: (id: number) => void;
}

const Table: React.FC<TableProps> = ({ bookings, onToggleStatus }) => {
  return (
    <div className="overflow-x-auto">
      <table className="min-w-full bg-white border border-gray-200">
        <thead>
          <tr>
            <th className="py-2 px-4 border-b">Client</th>
            <th className="py-2 px-4 border-b">Time</th>
            <th className="py-2 px-4 border-b">Service</th>
            <th className="py-2 px-4 border-b">Status</th>
            <th className="py-2 px-4 border-b">Action</th>
          </tr>
        </thead>
        <tbody>
          {bookings.map((booking) => (
            <tr key={booking.id} className="hover:bg-gray-100">
              <td className="py-2 px-4 border-b">{booking.client}</td>
              <td className="py-2 px-4 border-b">{booking.time}</td>
              <td className="py-2 px-4 border-b">{booking.service}</td>
              <td className="py-2 px-4 border-b">
                <span className={`inline-block px-2 py-1 text-white rounded-full ${booking.status === 'confirmed' ? 'bg-green-500' : 'bg-gray-500'}`}>
                  {booking.status}
                </span>
              </td>
              <td className="py-2 px-4 border-b">
                <button
                  className="text-blue-500 hover:underline"
                  onClick={() => onToggleStatus(booking.id)}
                >
                  Toggle Status
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Table;