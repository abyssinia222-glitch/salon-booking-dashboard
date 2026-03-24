import React from 'react';
import '../styles/globals.css';

const Layout = ({ children }) => {
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
};

export default Layout;