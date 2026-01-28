import { useState } from 'react';
import './Contact.css';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 3000);
  };

  return (
    <div className="contact-page">
      <div className="page-hero">
        <h1>Contact Us</h1>
        <p>We're here to help with all your delivery needs</p>
      </div>

      <div className="contact-container">
        <div className="contact-info-cards">
          <div className="info-card">
            <div className="info-icon">📞</div>
            <h3>Phone</h3>
            <p><a href="tel:+254700000000">+254 700 000 000</a></p>
            <p><a href="tel:+254711000000">+254 711 000 000</a></p>
            <span className="info-hours">Mon-Sat: 8AM - 6PM</span>
          </div>
          <div className="info-card">
            <div className="info-icon">📧</div>
            <h3>Email</h3>
            <p><a href="mailto:info@sobaafrica.co.ke">info@sobaafrica.co.ke</a></p>
            <p><a href="mailto:support@sobaafrica.co.ke">support@sobaafrica.co.ke</a></p>
            <span className="info-hours">24-hour response time</span>
          </div>
          <div className="info-card">
            <div className="info-icon">📍</div>
            <h3>Office Location</h3>
            <p>Moi Avenue, 3rd Floor</p>
            <p>Nairobi CBD, Kenya</p>
            <span className="info-hours">Visit us Mon-Fri: 9AM - 5PM</span>
          </div>
          <div className="info-card">
            <div className="info-icon">💬</div>
            <h3>WhatsApp</h3>
            <p><a href="https://wa.me/254700000000">+254 700 000 000</a></p>
            <p>Quick responses</p>
            <span className="info-hours">Available 24/7</span>
          </div>
        </div>

        <div className="contact-form-section">
          <div className="form-container">
            <h2>Send Us a Message</h2>
            <p className="form-subtitle">Fill out the form below and we'll get back to you within 24 hours</p>
            
            {submitted && (
              <div className="success-message">
                ✓ Thank you! Your message has been sent successfully.
              </div>
            )}

            <form onSubmit={handleSubmit}>
              <div className="form-row">
                <div className="form-group">
                  <label>Full Name *</label>
                  <input 
                    type="text" 
                    value={formData.name}
                    onChange={(e) => setFormData({...formData, name: e.target.value})}
                    required 
                  />
                </div>
                <div className="form-group">
                  <label>Email Address *</label>
                  <input 
                    type="email" 
                    value={formData.email}
                    onChange={(e) => setFormData({...formData, email: e.target.value})}
                    required 
                  />
                </div>
              </div>

              <div className="form-row">
                <div className="form-group">
                  <label>Phone Number *</label>
                  <input 
                    type="tel" 
                    placeholder="+254..."
                    value={formData.phone}
                    onChange={(e) => setFormData({...formData, phone: e.target.value})}
                    required 
                  />
                </div>
                <div className="form-group">
                  <label>Subject *</label>
                  <select 
                    value={formData.subject}
                    onChange={(e) => setFormData({...formData, subject: e.target.value})}
                    required
                  >
                    <option value="">Select a subject</option>
                    <option value="general">General Inquiry</option>
                    <option value="quote">Request Quote</option>
                    <option value="tracking">Tracking Issue</option>
                    <option value="complaint">Complaint</option>
                    <option value="partnership">Partnership</option>
                  </select>
                </div>
              </div>

              <div className="form-group">
                <label>Message *</label>
                <textarea 
                  rows="6"
                  value={formData.message}
                  onChange={(e) => setFormData({...formData, message: e.target.value})}
                  required
                ></textarea>
              </div>

              <button type="submit" className="btn-primary">Send Message</button>
            </form>
          </div>

          <div className="map-container">
            <div className="map-placeholder">
              <div className="map-content">
                <h3>📍 Visit Our Office</h3>
                <p>Moi Avenue, 3rd Floor<br/>Nairobi CBD, Kenya</p>
                <button className="btn-secondary">Get Directions</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
