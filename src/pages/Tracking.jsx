import { useState } from 'react';
import './Tracking.css';

const Tracking = () => {
  const [trackingNumber, setTrackingNumber] = useState('');
  const [trackingResult, setTrackingResult] = useState(null);

  const handleTrack = (e) => {
    e.preventDefault();
    if (trackingNumber.trim()) {
      // Simulate tracking result
      setTrackingResult({
        number: trackingNumber,
        status: 'In Transit',
        from: 'Nairobi CBD',
        to: 'Kisumu',
        estimatedDelivery: 'Tomorrow, 2:00 PM',
        timeline: [
          { status: 'Order Placed', date: 'Jan 15, 10:30 AM', completed: true },
          { status: 'Picked Up', date: 'Jan 15, 2:45 PM', completed: true },
          { status: 'In Transit', date: 'Jan 16, 8:00 AM', completed: true },
          { status: 'Out for Delivery', date: 'Pending', completed: false },
          { status: 'Delivered', date: 'Pending', completed: false }
        ]
      });
    }
  };

  return (
    <div className="tracking-page">
      <div className="page-hero">
        <h1>Track Your Shipment</h1>
        <p>Enter your tracking number to see real-time updates</p>
      </div>

      <div className="tracking-container">
        <div className="tracking-form-card">
          <h2>Enter Tracking Number</h2>
          <form onSubmit={handleTrack}>
            <input
              type="text"
              placeholder="e.g., SA123456"
              value={trackingNumber}
              onChange={(e) => setTrackingNumber(e.target.value)}
              required
            />
            <button type="submit" className="btn-primary">Track Shipment</button>
          </form>
          <p className="tracking-hint">Your tracking number was sent via SMS and email</p>
        </div>

        {trackingResult && (
          <div className="tracking-result">
            <div className="result-header">
              <div>
                <h3>Tracking Number: {trackingResult.number}</h3>
                <p className="route">{trackingResult.from} → {trackingResult.to}</p>
              </div>
              <div className="status-badge">{trackingResult.status}</div>
            </div>

            <div className="delivery-estimate">
              <span className="estimate-label">Estimated Delivery:</span>
              <span className="estimate-time">{trackingResult.estimatedDelivery}</span>
            </div>

            <div className="tracking-timeline">
              {trackingResult.timeline.map((item, index) => (
                <div key={index} className={`timeline-item ${item.completed ? 'completed' : ''}`}>
                  <div className="timeline-marker"></div>
                  <div className="timeline-content">
                    <h4>{item.status}</h4>
                    <p>{item.date}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="tracking-actions">
              <button className="btn-secondary">Contact Support</button>
              <button className="btn-secondary">Report Issue</button>
            </div>
          </div>
        )}

        {!trackingResult && (
          <div className="tracking-info">
            <h3>How to Track Your Parcel</h3>
            <ul>
              <li>📱 Your tracking number was sent via SMS after booking</li>
              <li>📧 Check your email for tracking details</li>
              <li>🔔 Enable notifications for real-time updates</li>
              <li>💬 Contact us on WhatsApp for assistance</li>
            </ul>
          </div>
        )}
      </div>
    </div>
  );
};

export default Tracking;
