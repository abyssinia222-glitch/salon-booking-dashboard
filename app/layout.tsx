import "./globals.css";

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <title>Salon Booking Dashboard</title>
      </head>
      <body>
        <main className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
          {children}
        </main>
      </body>
    </html>
  );
}