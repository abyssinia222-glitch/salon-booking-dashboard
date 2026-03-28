import { businesses } from "@/lib/businesses";
import type { Business } from "@/lib/businesses";

export default function SlotsPage() {
  const salons: Business[] = businesses;

  return (
    <div className="p-6 max-w-2xl mx-auto">
      <h1 className="text-2xl font-bold mb-6">Available Salons</h1>

      {salons.length === 0 && (
        <p className="text-gray-500">No salons found.</p>
      )}

      <ul className="space-y-4">
        {salons.map((salon) => (
          <li
            key={salon.id}
            className="p-4 bg-white border border-gray-200 rounded-lg shadow-sm"
          >
            <h2 className="text-lg font-semibold">{salon.name}</h2>
            <p className="text-gray-600">{salon.address}</p>
            <p className="text-gray-500">{salon.city}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}
