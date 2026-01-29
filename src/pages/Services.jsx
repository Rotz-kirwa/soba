import { useState } from 'react';
import './Services.css';

const Services = ({ setPage }) => {
  const [activeTab, setActiveTab] = useState('all');

  const services = [
    {
      icon: '📦',
      title: 'Standard Parcel Delivery',
      description: 'Reliable delivery of packages up to 30kg from Nairobi to any location in Kenya.',
      features: ['1-2 day delivery', 'Package tracking', 'Insurance included', 'Door-to-door service'],
      price: 'From KES 500',
      category: 'parcel',
      image: '/images/p2.png'
    },
    {
      icon: '⚡',
      title: 'Express Delivery',
      description: 'Fast-track your urgent shipments with our express service.',
      features: ['Same-day (Nairobi)', 'Next-day (major towns)', 'Priority handling', 'Real-time updates'],
      price: 'From KES 1,200',
      category: 'parcel',
      image: 'https://i.pinimg.com/1200x/5f/30/e2/5f30e2c1a170e6228f0530a5e0add3ed.jpg'
    },
    {
      icon: '🚚',
      title: 'Bulk Cargo',
      description: 'Large shipments and commercial goods transported efficiently.',
      features: ['Up to 1000kg', 'Dedicated vehicle', 'Loading assistance', 'Flexible scheduling'],
      price: 'Custom quote',
      category: 'cargo',
      image: 'https://i.pinimg.com/736x/3e/88/c2/3e88c2581177f151e699f3f453c79278.jpg'
    },
    {
      icon: '🏔️',
      title: 'Rural Logistics',
      description: 'Specialized delivery to remote and hard-to-reach areas across Kenya.',
      features: ['All 47 counties', 'Village delivery', 'Local coordination', 'SMS notifications'],
      price: 'From KES 800',
      category: 'specialized',
      image: '/images/rural-logistics.png'
    },
    {
      icon: '📱',
      title: 'E-commerce Fulfillment',
      description: 'Complete logistics solution for online businesses.',
      features: ['Warehousing', 'Order processing', 'Returns handling', 'API integration'],
      price: 'Custom package',
      category: 'business',
      image: 'https://i.pinimg.com/1200x/88/ab/23/88ab238a4ab8b1026d0759ee38c55504.jpg'
    },
    {
      icon: '🎁',
      title: 'Gift & Special Items',
      description: 'Careful handling of fragile, valuable, or special occasion items.',
      features: ['Extra care packaging', 'Gift wrapping available', 'Timed delivery', 'Photo confirmation'],
      price: 'From KES 700',
      category: 'specialized',
      image: 'https://i.pinimg.com/1200x/0e/07/55/0e0755cac43ebef9095cd1fae522412c.jpg'
    },
    {
      icon: '🏪',
      title: 'Business Solutions',
      description: 'Tailored logistics for SMEs and enterprises with regular shipping needs.',
      features: ['Volume discounts', 'Dedicated account manager', 'Monthly invoicing', 'Priority support'],
      price: 'Custom rates',
      category: 'business',
      image: '/images/business-solutions.png'
    },
    {
      icon: '🌾',
      title: 'Perishable Goods',
      description: 'Safe transport of fresh produce, food items, and temperature-sensitive goods.',
      features: ['Temperature control', 'Fast delivery', 'Bulk capacity', 'Market connections'],
      price: 'From KES 600',
      category: 'specialized',
      image: 'https://i.pinimg.com/736x/f3/a7/dd/f3a7dda3daec03c608b5ee070acc8514.jpg'
    },
    {
      icon: '🏥',
      title: 'Medical Supplies',
      description: 'Urgent delivery of medical equipment and pharmaceutical products.',
      features: ['Priority handling', 'Temperature monitoring', 'Secure transport', '24/7 availability'],
      price: 'From KES 1,500',
      category: 'specialized',
      image: 'https://i.pinimg.com/736x/5e/31/44/5e314449ca10fee5c29e0e73af29db67.jpg'
    }
  ];

  const filteredServices = activeTab === 'all' ? services : services.filter(s => s.category === activeTab);

  return (
    <div className="services-page">
      <div className="page-hero">
        <h1>Our Services</h1>
        <p>Comprehensive logistics solutions tailored to your needs</p>
      </div>

      <div className="services-tabs">
        <button className={activeTab === 'all' ? 'active' : ''} onClick={() => setActiveTab('all')}>All Services</button>
        <button className={activeTab === 'parcel' ? 'active' : ''} onClick={() => setActiveTab('parcel')}>Parcel Delivery</button>
        <button className={activeTab === 'cargo' ? 'active' : ''} onClick={() => setActiveTab('cargo')}>Cargo</button>
        <button className={activeTab === 'business' ? 'active' : ''} onClick={() => setActiveTab('business')}>Business</button>
        <button className={activeTab === 'specialized' ? 'active' : ''} onClick={() => setActiveTab('specialized')}>Specialized</button>
      </div>

      <div className="services-container">
        {filteredServices.map((service, index) => (
          <div key={index} className="service-detail-card">
            <div className="service-badge">{service.category}</div>
            {service.image && (
              <div className="service-image-container">
                <img src={service.image} alt={service.title} className="service-img" />
              </div>
            )}
            {!service.image && (
              <div className="service-icon-placeholder">
                <div className="service-icon-large">{service.icon}</div>
              </div>
            )}
            <div className="service-content">
              <h2>{service.title}</h2>
              <p className="service-price">{service.price}</p>
              <p className="service-description">{service.description}</p>
              <ul className="service-features">
                {service.features.map((feature, idx) => (
                  <li key={idx}>✓ {feature}</li>
                ))}
              </ul>
              <button className="btn-primary" onClick={() => setPage('pricing')}>Get Quote</button>
            </div>
          </div>
        ))}
      </div>

      <div className="comparison-section">
        <h2>Service Comparison</h2>
        <p className="section-subtitle">Choose the right service for your needs</p>
        <div className="comparison-table-wrapper">
          <table className="comparison-table">
            <thead>
              <tr>
                <th>Feature</th>
                <th>Standard</th>
                <th>Express</th>
                <th>Bulk Cargo</th>
                <th>Rural</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Delivery Time</td>
                <td>1-2 days</td>
                <td>Same/Next day</td>
                <td>2-4 days</td>
                <td>5-7 days</td>
              </tr>
              <tr>
                <td>Weight Limit</td>
                <td>Up to 30kg</td>
                <td>Up to 20kg</td>
                <td>Up to 1000kg</td>
                <td>Up to 30kg</td>
              </tr>
              <tr>
                <td>Tracking</td>
                <td>✓</td>
                <td>✓ Real-time</td>
                <td>✓</td>
                <td>✓ SMS</td>
              </tr>
              <tr>
                <td>Insurance</td>
                <td>Up to 10K</td>
                <td>Up to 20K</td>
                <td>Up to 50K</td>
                <td>Up to 10K</td>
              </tr>
              <tr>
                <td>Coverage</td>
                <td>Major towns</td>
                <td>Nairobi & cities</td>
                <td>Nationwide</td>
                <td>All 47 counties</td>
              </tr>
              <tr>
                <td>Starting Price</td>
                <td><strong>KES 500</strong></td>
                <td><strong>KES 1,200</strong></td>
                <td><strong>Custom</strong></td>
                <td><strong>KES 800</strong></td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      <div className="process-section">
        <h2>How It Works</h2>
        <div className="process-steps">
          <div className="step">
            <div className="step-number">1</div>
            <h3>Book Online</h3>
            <p>Get a quote and schedule pickup through our website or WhatsApp</p>
          </div>
          <div className="step">
            <div className="step-number">2</div>
            <h3>We Collect</h3>
            <p>Our team picks up your parcel from your location in Nairobi</p>
          </div>
          <div className="step">
            <div className="step-number">3</div>
            <h3>Track Progress</h3>
            <p>Monitor your shipment in real-time with our tracking system</p>
          </div>
          <div className="step">
            <div className="step-number">4</div>
            <h3>Delivered</h3>
            <p>Your parcel arrives safely at the destination</p>
          </div>
        </div>
      </div>

      <div className="benefits-section">
        <h2>Why Choose Our Services?</h2>
        <div className="benefits-grid">
          <div className="benefit-card">
            <div className="benefit-icon">🛡️</div>
            <h3>Fully Insured</h3>
            <p>All shipments covered with comprehensive insurance</p>
          </div>
          <div className="benefit-card">
            <div className="benefit-icon">📍</div>
            <h3>Real-Time Tracking</h3>
            <p>Know exactly where your parcel is at all times</p>
          </div>
          <div className="benefit-card">
            <div className="benefit-icon">💰</div>
            <h3>Competitive Pricing</h3>
            <p>Best rates with no hidden fees</p>
          </div>
          <div className="benefit-card">
            <div className="benefit-icon">🤝</div>
            <h3>Reliable Service</h3>
            <p>98% on-time delivery rate across Kenya</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
