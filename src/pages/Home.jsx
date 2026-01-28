import { useState, useEffect } from 'react';
import './Home.css';

const Home = ({ setPage }) => {
  const [trackingNumber, setTrackingNumber] = useState('');
  const [stats, setStats] = useState({ parcels: 0, areas: 0, customers: 0 });

  useEffect(() => {
    const animateStats = () => {
      const targets = { parcels: 50000, areas: 47, customers: 15000 };
      const duration = 2000;
      const steps = 60;
      const increment = duration / steps;

      let current = { parcels: 0, areas: 0, customers: 0 };
      const interval = setInterval(() => {
        current.parcels = Math.min(current.parcels + targets.parcels / steps, targets.parcels);
        current.areas = Math.min(current.areas + targets.areas / steps, targets.areas);
        current.customers = Math.min(current.customers + targets.customers / steps, targets.customers);
        
        setStats({
          parcels: Math.floor(current.parcels),
          areas: Math.floor(current.areas),
          customers: Math.floor(current.customers)
        });

        if (current.parcels >= targets.parcels) clearInterval(interval);
      }, increment);
    };

    animateStats();
  }, []);

  const handleTrack = (e) => {
    e.preventDefault();
    if (trackingNumber.trim()) {
      setPage('tracking');
    }
  };

  return (
    <div className="home">
      <section className="hero">
        <div className="hero-content">
          <div className="hero-text">
            <h1>Connecting Nairobi to Every Corner of Kenya</h1>
            <p>Fast, reliable, and affordable parcel delivery from the city to the most remote villages. Your trusted logistics partner.</p>
          </div>
        </div>
        <div className="hero-buttons">
          <button className="btn-primary" onClick={() => setPage('booking')}>Book Now</button>
          <button className="btn-secondary" onClick={() => setPage('services')}>Our Services</button>
        </div>
        <button className="track-now-btn" onClick={() => setPage('tracking')}>
          📦 Track Now
        </button>
      </section>

      <section className="stats">
        <div className="stats-container">
          <div className="stat-item">
            <div className="stat-number">{stats.parcels.toLocaleString()}+</div>
            <div className="stat-label">Parcels Delivered</div>
          </div>
          <div className="stat-item">
            <div className="stat-number">{stats.areas}+</div>
            <div className="stat-label">Counties Covered</div>
          </div>
          <div className="stat-item">
            <div className="stat-number">{stats.customers.toLocaleString()}+</div>
            <div className="stat-label">Happy Customers</div>
          </div>
        </div>
      </section>

      <section className="services-preview">
        <div className="section-container">
          <h2>Our Services</h2>
          <p className="section-subtitle">Comprehensive logistics solutions for every need</p>
          <div className="services-grid">
            <div className="service-card">
              <div className="service-image-container">
                <img src="https://i.pinimg.com/736x/4d/e4/e5/4de4e523913b67db82b2818cc839aa1d.jpg" alt="Parcel Delivery" className="service-img" />
              </div>
              <div className="service-content">
                <div className="service-icon">📦</div>
                <h3>Parcel Delivery</h3>
                <p>Safe and secure delivery of packages from Nairobi to any location in Kenya.</p>
              </div>
            </div>
            <div className="service-card">
              <div className="service-image-container">
                <img src="/images/b1.jpg" alt="Bulk Cargo" className="service-img" />
              </div>
              <div className="service-content">
                <div className="service-icon">🚚</div>
                <h3>Bulk Cargo</h3>
                <p>Large shipments and commercial goods transported efficiently.</p>
              </div>
            </div>
            <div className="service-card">
              <div className="service-image-container">
                <img src="https://i.pinimg.com/736x/e8/8e/67/e88e6748360a35936dba3003e3af2112.jpg" alt="Express Delivery" className="service-img" />
              </div>
              <div className="service-content">
                <div className="service-icon">⚡</div>
                <h3>Express Delivery</h3>
                <p>Same-day and next-day delivery for urgent shipments.</p>
              </div>
            </div>
            <div className="service-card">
              <div className="service-image-container">
                <img src="https://i.pinimg.com/736x/6a/7d/a0/6a7da0668d2cf7f105aa9e64fdaedacd.jpg" alt="Rural Logistics" className="service-img" />
              </div>
              <div className="service-content">
                <div className="service-icon">🏔️</div>
                <h3>Rural Logistics</h3>
                <p>Specialized delivery to remote and hard-to-reach areas.</p>
              </div>
            </div>
          </div>
          <button className="btn-primary" onClick={() => setPage('services')}>View All Services</button>
        </div>
      </section>

      <section className="why-choose">
        <div className="section-container">
          <h2>Why Choose Soba Africa?</h2>
          <div className="features-grid">
            <div className="feature">
              <div className="feature-icon">✓</div>
              <h3>Nationwide Coverage</h3>
              <p>We reach all 47 counties, including the most remote villages.</p>
            </div>
            <div className="feature">
              <div className="feature-icon">✓</div>
              <h3>Real-Time Tracking</h3>
              <p>Monitor your shipment every step of the way with live updates.</p>
            </div>
            <div className="feature">
              <div className="feature-icon">✓</div>
              <h3>Affordable Rates</h3>
              <p>Competitive pricing with no hidden fees. Pay with M-Pesa.</p>
            </div>
            <div className="feature">
              <div className="feature-icon">✓</div>
              <h3>Secure Handling</h3>
              <p>Your parcels are insured and handled with utmost care.</p>
            </div>
            <div className="feature">
              <div className="feature-icon">✓</div>
              <h3>Fast Delivery</h3>
              <p>Express options available for time-sensitive shipments.</p>
            </div>
            <div className="feature">
              <div className="feature-icon">✓</div>
              <h3>24/7 Support</h3>
              <p>Our team is always ready to assist via phone or WhatsApp.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="testimonials">
        <div className="section-container">
          <h2>What Our Customers Say</h2>
          <div className="testimonials-grid">
            <div className="testimonial-card">
              <div className="stars">⭐⭐⭐⭐⭐</div>
              <p>"Soba Africa delivered my package to my grandmother in Turkana within 3 days. Excellent service!"</p>
              <div className="testimonial-author">
                <strong>Jane Wanjiku</strong>
                <span>Nairobi</span>
              </div>
            </div>
            <div className="testimonial-card">
              <div className="stars">⭐⭐⭐⭐⭐</div>
              <p>"Reliable and affordable. I use them for all my business shipments to upcountry. Highly recommended!"</p>
              <div className="testimonial-author">
                <strong>David Omondi</strong>
                <span>Small Business Owner</span>
              </div>
            </div>
            <div className="testimonial-card">
              <div className="stars">⭐⭐⭐⭐⭐</div>
              <p>"The tracking system is amazing. I could see exactly where my parcel was at all times. Very professional!"</p>
              <div className="testimonial-author">
                <strong>Amina Hassan</strong>
                <span>Mombasa</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="cta">
        <div className="cta-content">
          <h2>Ready to Send Your Parcel?</h2>
          <p>Get an instant quote and start shipping today</p>
          <button className="btn-primary" onClick={() => setPage('pricing')}>Get Started</button>
        </div>
      </section>
    </div>
  );
};

export default Home;
