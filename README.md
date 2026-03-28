# Salon Booking Dashboard

This project is a Next.js 14 application designed for managing salon booking statuses. It features a responsive dashboard that displays a table of bookings with their respective client information, service details, and status. The status can be toggled between confirmed and pending using a confirmation button.

## Features

- Responsive design using Tailwind CSS and Shadcn UI components.
- Booking status table with the following columns:
  - Client
  - Time
  - Service
  - Status (with badges: green for confirmed, gray for pending)
- Reception Confirmation button to toggle booking status.
- Email delivery through Resend.
- In-app business notifications backed by the database, with optional Supabase Realtime subscription support.
- Public salon profile pages at `/salon/[businessId]`.

## Installation

To get started with the project, follow these steps:

1. Clone the repository:
   ```
   git clone https://github.com/yourusername/salon-booking-dashboard.git
   ```

2. Navigate to the project directory:
   ```
   cd salon-booking-dashboard
   ```

3. Install the dependencies:
   ```
   npm install
   ```

4. Generate the Prisma client after schema changes:
   ```
   npx prisma generate
   ```

5. Run the development server:
   ```
   npm run dev
   ```

6. Open your browser and go to `http://localhost:3000` to view the dashboard.

## Usage

Once the application is running, you will see the dashboard displaying the booking table. You can toggle the status of each booking by clicking the Reception Confirmation button next to each entry.

## Contributing

Contributions are welcome! Please feel free to submit a pull request or open an issue for any enhancements or bug fixes.

## License

This project is licensed under the MIT License. See the LICENSE file for more details.