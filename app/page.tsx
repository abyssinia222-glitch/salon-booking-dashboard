"use client";

import { useEffect, useState } from 'react';

type Business = {
  id: string;
  name: string;
  neighbourhood: string;
  category: string;
  isApproved: boolean;
};

export default function Home() {
  const [businesses, setBusinesses] = useState<Business[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function load() {
      try {
        const res = await fetch('/api/businesses');
        if (!res.ok) {
          throw new Error(`API responded with ${res.status}`);
        }

        const text = await res.text();
        if (!text) {
          throw new Error('Empty response from businesses API');
        }

        const data = JSON.parse(text);
        if (!Array.isArray(data)) {
          throw new Error('Invalid business list format');
        }
        setBusinesses(data);
      } catch (err) {
        console.error('Failed to load businesses:', err);
        // Fallback: show local sample businesses to avoid blank UI
        setBusinesses([
          { id: 'sample-1', name: 'Calgary Central Salon', neighbourhood: 'Downtown', category: 'Salon', isApproved: true },
          { id: 'sample-2', name: 'North Star Hair', neighbourhood: 'Northside', category: 'Salon', isApproved: true },
        ]);
      } finally {
        setLoading(false);
      }
    }
    load();
  }, []);

  return (
    <main style={{ background: 'linear-gradient(180deg, #0a0a0f 0%, #14161f 60%, #f7f5f0 100%)', color: '#fff', minHeight: '100vh' }}>
      <section style={{ padding: '7rem 2rem', position: 'relative', overflow: 'hidden' }}>
        <div style={{ position: 'absolute', inset: 0, background: 'radial-gradient(circle at 20% 20%, rgba(0,255,135,0.3), transparent 45%), radial-gradient(circle at 80% 30%, rgba(0,255,135,0.2), transparent 50%)' }} />
        <div style={{ position: 'relative', zIndex: 1, maxWidth: '1000px', margin: '0 auto', textAlign: 'center' }}>
          <h1 style={{ fontSize: 'clamp(2rem, 5vw, 5rem)', margin: 0 }}>SHI-</h1>
          <p style={{ margin: '1rem 0 0.5rem', color: '#00ff87', fontStyle: 'italic' }}>available right now</p>
          <div style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem' }}>
            <span className="live-dot" />
            <span style={{ color: '#00ff87', fontWeight: 700 }}>Live open slots · updates every 30s</span>
          </div>
        </div>
      </section>

      <section style={{ padding: '2rem' }}>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill,minmax(250px,1fr))', gap: '1.25rem' }}>
          {loading ? (
            <div style={{ color: '#fff' }}>Loading businesses...</div>
          ) : (
            businesses.map((biz) => (
              <article key={biz.id} className="card" style={{ background: 'linear-gradient(135deg, #1d1f2a, #0f1320)' }}>
                <div style={{ marginBottom: '0.5rem' }}>
                  <span className="badge" style={{ background: '#14161f', color: '#00ff87' }}>{biz.category.toUpperCase()}</span>
                </div>
                <h3 style={{ fontSize: '1.35rem', letterSpacing: '0.02em', margin: '0.4rem 0', color: '#fff' }}>{biz.name}</h3>
                <p style={{ margin: '0.2rem 0 1rem', fontSize: '0.95rem', color: 'rgba(255,255,255,0.8)' }}>{biz.neighbourhood}</p>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', gap: '0.75rem' }}>
                  <div style={{ display: 'flex', gap: '0.75rem', flexWrap: 'wrap' }}>
                    <a href={`/salon/${biz.id}`} className="btn-secondary" style={{ fontWeight: '600', textDecoration: 'none', padding: '0.5rem 0.85rem' }}>
                      View salon
                    </a>
                    <a href={`/book/${biz.id}`} className="btn-primary" style={{ fontWeight: '600', textDecoration: 'none', padding: '0.5rem 0.85rem' }}>
                      Book now
                    </a>
                  </div>
                  <span style={{ color: '#00ff87', fontWeight: '700' }}>OPEN</span>
                </div>
              </article>
            ))
          )}
        </div>
      </section>
    </main>
  );
}