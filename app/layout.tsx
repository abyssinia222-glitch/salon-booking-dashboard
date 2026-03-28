import type { Metadata } from "next";
import "./globals.css";
import InstallPrompt from "@/components/pwa/InstallPrompt";
import ServiceWorkerRegister from "@/components/pwa/ServiceWorkerRegister";

const siteUrl = process.env.NEXT_PUBLIC_APP_URL || "http://localhost:3001";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: "Shi-City Serve ፲፻",
  description: "Elegant local booking for modern beauty businesses.",
  manifest: "/manifest.json",
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "any" },
      { url: "/favicon-32.png", sizes: "32x32", type: "image/png" },
      { url: "/favicon-16.png", sizes: "16x16", type: "image/png" },
    ],
    shortcut: "/favicon.ico",
    apple: "/icons/icon-192.png",
  },
  openGraph: {
    title: "Shi-City Serve ፲፻",
    description: "Elegant local booking for modern beauty businesses.",
    url: "/",
    siteName: "Shi-City Serve",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Shi-City Serve ፲፻ social preview",
      },
    ],
    locale: "en_CA",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Shi-City Serve ፲፻",
    description: "Elegant local booking for modern beauty businesses.",
    images: ["/og-image.png"],
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <meta name="theme-color" content="#0a0a0f" />
        <link rel="manifest" href="/manifest.json" />
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16.png" />
        <link rel="apple-touch-icon" sizes="192x192" href="/icons/icon-192.png" />
        <link
          rel="preconnect"
          href="https://fonts.googleapis.com"
        />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=DM+Sans:wght@300;400;500&family=Playfair+Display:wght@700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>
        <ServiceWorkerRegister />
        <InstallPrompt />
        <header style={{background:'#fff',borderBottom:'1.5px solid #e6e6e6',padding:'1.5rem 0',marginBottom:'2rem',boxShadow:'0 2px 12px rgba(0,185,124,0.03)'}}>
          <div style={{display:'flex',alignItems:'center',justifyContent:'center',gap:'1.5rem'}}>
            <img src="/shi-city-serve-badge.svg" alt="Shi-City Serve badge" style={{height:'48px',width:'48px',borderRadius:'12px',boxShadow:'0 2px 8px rgba(0,185,124,0.08)'}} />
            <div>
              <h1 style={{fontFamily:'Playfair Display,serif',fontWeight:700,fontSize:'2rem',margin:0,color:'#00b97c',letterSpacing:'-0.01em'}}>Shi-City Serve ፲፻</h1>
              <p style={{fontFamily:'DM Sans,sans-serif',fontWeight:400,fontSize:'1.1rem',margin:0,color:'#444'}}>Last-minute local salon booking</p>
            </div>
          </div>
        </header>
        {children}
      </body>
    </html>
  );
}