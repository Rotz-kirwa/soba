import { useState } from 'react';
import './Pricing.css';

const Pricing = () => {
  const [formData, setFormData] = useState({
    from: 'Nairobi',
    to: '',
    weight: '',
    service: 'standard',
    name: '',
    phone: '',
    email: ''
  });
  const [quote, setQuote] = useState(null);

  const calculatePrice = () => {
    const baseRates = { standard: 500, express: 1200, bulk: 300, rural: 800 };
    const weightMultiplier = parseFloat(formData.weight) || 1;
    const price = baseRates[formData.service] + (weightMultiplier * 50);
    return Math.round(price);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const price = calculatePrice();
    setQuote({ price, ...formData });
  };

  return (
    <div className="pricing-page">
      <div className="page-hero">
        <h1>Get a Quote</h1>
        <p>Transparent pricing with no hidden fees</p>
      </div>

      <div className="pricing-container">
        <div className="quote-form-card">
          <h2>Calculate Shipping Cost</h2>
          <form onSubmit={handleSubmit}>
            <div className="form-row">
              <div className="form-group">
                <label>From</label>
                <input type="text" value={formData.from} readOnly />
              </div>
              <div className="form-group">
                <label>To (County/Town)</label>
                <input type="text" value={formData.to} onChange={(e) => setFormData({...formData, to: e.target.value})} required />
              </div>
            </div>

            <div className="form-row">
              <div className="form-group">
                <label>Weight (kg)</label>
                <input type="number" step="0.1" value={formData.weight} onChange={(e) => setFormData({...formData, weight: e.target.value})} required />
              </div>
              <div className="form-group">
                <label>Service Type</label>
                <select value={formData.service} onChange={(e) => setFormData({...formData, service: e.target.value})}>
                  <option value="standard">Standard (3-5 days)</option>
                  <option value="express">Express (1-2 days)</option>
                  <option value="bulk">Bulk Cargo</option>
                  <option value="rural">Rural Delivery</option>
                </select>
              </div>
            </div>

            <div className="form-group">
              <label>Full Name</label>
              <input type="text" value={formData.name} onChange={(e) => setFormData({...formData, name: e.target.value})} required />
            </div>

            <div className="form-row">
              <div className="form-group">
                <label>Phone Number</label>
                <input type="tel" placeholder="+254..." value={formData.phone} onChange={(e) => setFormData({...formData, phone: e.target.value})} required />
              </div>
              <div className="form-group">
                <label>Email</label>
                <input type="email" value={formData.email} onChange={(e) => setFormData({...formData, email: e.target.value})} required />
              </div>
            </div>

            <button type="submit" className="btn-primary">Get Quote</button>
          </form>
        </div>

        {quote && (
          <div className="quote-result">
            <h3>Your Quote</h3>
            <div className="quote-details">
              <div className="quote-item">
                <span>Route:</span>
                <strong>{quote.from} → {quote.to}</strong>
              </div>
              <div className="quote-item">
                <span>Weight:</span>
                <strong>{quote.weight} kg</strong>
              </div>
              <div className="quote-item">
                <span>Service:</span>
                <strong>{quote.service.charAt(0).toUpperCase() + quote.service.slice(1)}</strong>
              </div>
            </div>
            <div className="quote-price">
              <span>Total Cost:</span>
              <strong>KES {quote.price.toLocaleString()}</strong>
            </div>
            <p className="quote-note">✓ Insurance included • ✓ Real-time tracking • ✓ M-Pesa payment accepted</p>
            <button className="btn-primary">Book Now</button>
          </div>
        )}

        <div className="pricing-info">
          <h3>Cargo Pricing Structure</h3>
          <p className="pricing-subtitle">Flexible pricing from KES 500 to 50,000 based on cargo size & distance</p>
          
          <div className="pricing-tiers">
            <div className="tier-card tier-mini">
              <div className="tier-badge">🟢 TIER 1</div>
              <h4>Mini Cargo</h4>
              <p className="tier-price">KES 500 – 1,500</p>
              <p className="tier-desc">Documents, small boxes, electronics, light items</p>
              <table className="tier-table">
                <tbody>
                  <tr><td>Up to 2kg</td><td>Within town</td><td><strong>KES 500</strong></td></tr>
                  <tr><td>2–5kg</td><td>Within town</td><td><strong>KES 800</strong></td></tr>
                  <tr><td>Up to 5kg</td><td>Inter-town</td><td><strong>KES 1,200</strong></td></tr>
                  <tr><td>5–10kg</td><td>Inter-town</td><td><strong>KES 1,500</strong></td></tr>
                </tbody>
              </table>
              <p className="tier-ideal">✔ Ideal for individuals & online sellers</p>
            </div>

            <div className="tier-card tier-standard">
              <div className="tier-badge">🟡 TIER 2</div>
              <h4>Standard Cargo</h4>
              <p className="tier-price">KES 2,000 – 5,000</p>
              <p className="tier-desc">Medium cartons, school supplies, shop stock, equipment</p>
              <table className="tier-table">
                <tbody>
                  <tr><td>10–20kg</td><td>Short distance</td><td><strong>KES 2,000</strong></td></tr>
                  <tr><td>20–30kg</td><td>Inter-county</td><td><strong>KES 3,000</strong></td></tr>
                  <tr><td>30–50kg</td><td>Inter-county</td><td><strong>KES 4,000 – 5,000</strong></td></tr>
                </tbody>
              </table>
              <p className="tier-ideal">✔ SMEs, schools, pharmacies, offices</p>
            </div>

            <div className="tier-card tier-bulk">
              <div className="tier-badge">🟠 TIER 3</div>
              <h4>Bulk Cargo</h4>
              <p className="tier-price">KES 6,000 – 15,000</p>
              <p className="tier-desc">Wholesale goods, construction items, farm inputs</p>
              <table className="tier-table">
                <tbody>
                  <tr><td>50–100kg</td><td>Regional</td><td><strong>KES 6,000 – 8,000</strong></td></tr>
                  <tr><td>100–200kg</td><td>Inter-county</td><td><strong>KES 9,000 – 12,000</strong></td></tr>
                  <tr><td>Mixed bulk</td><td>Long-distance</td><td><strong>KES 13,000 – 15,000</strong></td></tr>
                </tbody>
              </table>
              <p className="tier-ideal">✔ Traders, distributors, institutions</p>
            </div>

            <div className="tier-card tier-heavy">
              <div className="tier-badge">🔵 TIER 4</div>
              <h4>Heavy / Commercial Cargo</h4>
              <p className="tier-price">KES 16,000 – 30,000</p>
              <p className="tier-desc">Machinery, pallets, shop restocking, large orders</p>
              <table className="tier-table">
                <tbody>
                  <tr><td>200–300kg</td><td>Inter-county</td><td><strong>KES 16,000 – 20,000</strong></td></tr>
                  <tr><td>300–500kg</td><td>Long haul</td><td><strong>KES 21,000 – 25,000</strong></td></tr>
                  <tr><td>Palletized cargo</td><td>Nationwide</td><td><strong>KES 26,000 – 30,000</strong></td></tr>
                </tbody>
              </table>
              <p className="tier-ideal">✔ Corporates, factories, large schools</p>
            </div>

            <div className="tier-card tier-enterprise">
              <div className="tier-badge">🔴 TIER 5</div>
              <h4>Full Load / Enterprise Cargo</h4>
              <p className="tier-price">KES 31,000 – 50,000</p>
              <p className="tier-desc">Truck-level or near-full capacity cargo</p>
              <table className="tier-table">
                <tbody>
                  <tr><td>Half truck</td><td>Regional</td><td><strong>KES 31,000 – 38,000</strong></td></tr>
                  <tr><td>Full truck</td><td>Inter-county</td><td><strong>KES 39,000 – 45,000</strong></td></tr>
                  <tr><td>Full truck + priority</td><td>Nationwide</td><td><strong>KES 46,000 – 50,000</strong></td></tr>
                </tbody>
              </table>
              <p className="tier-ideal">✔ Wholesalers, NGOs, government, large enterprises</p>
            </div>
          </div>

          <div className="addons-section">
            <h3>Optional Add-Ons</h3>
            <div className="addons-grid">
              <div className="addon-item">
                <span>Express / Same-day</span>
                <strong>+15–30%</strong>
              </div>
              <div className="addon-item">
                <span>Fragile handling</span>
                <strong>+KES 500 – 2,000</strong>
              </div>
              <div className="addon-item">
                <span>Insurance cover</span>
                <strong>1–2% cargo value</strong>
              </div>
              <div className="addon-item">
                <span>Door-to-door</span>
                <strong>+KES 300 – 2,500</strong>
              </div>
              <div className="addon-item">
                <span>Scheduled recurring delivery</span>
                <strong>Discounted</strong>
              </div>
            </div>
          </div>

          <div className="pricing-notes">
            <h4>Important Notes</h4>
            <ul>
              <li>All prices are starting from and may vary based on distance, weight, volume, urgency, and route accessibility</li>
              <li>Corporate & bulk clients receive custom quotes tailored to their needs</li>
              <li>Final pricing confirmed before booking</li>
              <li>M-Pesa payment accepted for all tiers</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Pricing;
