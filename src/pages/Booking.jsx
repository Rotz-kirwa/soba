import { useState } from 'react';
import './Booking.css';

const Booking = ({ setPage, setBookingData }) => {
  const [selectedCargo, setSelectedCargo] = useState(null);
  const [cart, setCart] = useState([]);
  const [showCalculator, setShowCalculator] = useState(false);
  const [calculatorData, setCalculatorData] = useState({
    cargoType: '',
    weight: '',
    distance: ''
  });
  const [estimatedCost, setEstimatedCost] = useState(null);
  const [formData, setFormData] = useState({
    cargoType: '',
    weight: '',
    from: '',
    to: '',
    pickupDate: '',
    name: '',
    phone: '',
    email: '',
    description: ''
  });

  const cargoTypes = [
    { id: 'mini', name: 'Mini Cargo', price: '500 - 1,500', icon: '📦', weight: 'Up to 10kg', desc: 'Documents, small boxes, electronics' },
    { id: 'standard', name: 'Standard Cargo', price: '2,000 - 5,000', icon: '📫', weight: '10-50kg', desc: 'Medium cartons, supplies, equipment' },
    { id: 'bulk', name: 'Bulk Cargo', price: '6,000 - 15,000', icon: '🚚', weight: '50-200kg', desc: 'Wholesale goods, construction items' },
    { id: 'heavy', name: 'Heavy Cargo', price: '16,000 - 30,000', icon: '🏗️', weight: '200-500kg', desc: 'Machinery, pallets, large orders' },
    { id: 'enterprise', name: 'Full Load', price: '31,000 - 50,000', icon: '🚛', weight: '500kg+', desc: 'Truck-level capacity cargo' },
    { id: 'express', name: 'Express Delivery', price: '1,200+', icon: '⚡', weight: 'Up to 20kg', desc: 'Same/next day urgent delivery' },
    { id: 'rural', name: 'Rural Logistics', price: '800+', icon: '🏔️', weight: 'Up to 30kg', desc: 'Remote area delivery' },
    { id: 'perishable', name: 'Perishable Goods', price: '600+', icon: '🌾', weight: 'Varies', desc: 'Temperature-controlled transport' },
    { id: 'medical', name: 'Medical Supplies', price: '1,500+', icon: '🏥', weight: 'Varies', desc: 'Priority medical transport' }
  ];

  const calculateCost = () => {
    const { cargoType, weight, distance } = calculatorData;
    if (!cargoType || !weight || !distance) {
      alert('Please fill all calculator fields');
      return;
    }

    const baseRates = {
      'mini': 500,
      'standard': 2000,
      'bulk': 6000,
      'heavy': 16000,
      'enterprise': 31000,
      'express': 1200,
      'rural': 800,
      'perishable': 600,
      'medical': 1500
    };

    const baseRate = baseRates[cargoType] || 500;
    const weightFactor = parseFloat(weight) * 50;
    const distanceFactor = parseFloat(distance) * 10;
    
    const total = Math.round(baseRate + weightFactor + distanceFactor);
    setEstimatedCost(total);
  };

  const handleQuickAddToCart = (cargo, e) => {
    e.stopPropagation();
    
    if (!formData.name || !formData.phone || !formData.email) {
      alert('Please fill in your contact information first (Name, Phone, Email)');
      return;
    }
    
    const cartItem = {
      id: Date.now(),
      cargoType: cargo.name,
      selectedCargo: cargo,
      weight: 'TBD',
      from: 'TBD',
      to: 'TBD',
      pickupDate: 'TBD',
      name: formData.name,
      phone: formData.phone,
      email: formData.email,
      description: ''
    };
    setCart([...cart, cartItem]);
    alert(`✓ ${cargo.name} added to cart! You can add more or proceed to payment.`);
  };

  const handleCargoSelect = (cargo) => {
    setSelectedCargo(cargo);
    setFormData({ ...formData, cargoType: cargo.name });
  };

  const handleAddToCart = (e) => {
    e.preventDefault();
    const cartItem = {
      id: Date.now(),
      ...formData,
      selectedCargo
    };
    setCart([...cart, cartItem]);
    
    // Reset form but keep contact info
    setFormData({
      ...formData,
      cargoType: '',
      weight: '',
      from: '',
      to: '',
      pickupDate: '',
      description: ''
    });
    setSelectedCargo(null);
    alert('Added to cart! You can add more shipments or proceed to payment.');
  };

  const handleRemoveFromCart = (id) => {
    setCart(cart.filter(item => item.id !== id));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (cart.length === 0) {
      alert('Please add at least one shipment to cart');
      return;
    }
    setBookingData({ cart, contactInfo: { name: formData.name, phone: formData.phone, email: formData.email } });
    setPage('payment');
  };

  return (
    <div className="booking-page">
      <div className="page-hero">
        <h1>Book Your Delivery</h1>
        <p>Select cargo type and provide shipment details</p>
      </div>

      <div className="booking-container">
        <div className="top-actions">
          <button className="btn-calculator" onClick={() => setShowCalculator(!showCalculator)}>
            📊 {showCalculator ? 'Hide' : 'Show'} Cost Calculator
          </button>
        </div>

        {showCalculator && (
          <div className="cost-calculator">
            <h3>📊 Cost Calculator</h3>
            <p className="calculator-desc">Get an instant estimate for your shipment</p>
            <div className="calculator-form">
              <div className="calc-row">
                <div className="calc-group">
                  <label>Cargo Type</label>
                  <select value={calculatorData.cargoType} onChange={(e) => setCalculatorData({...calculatorData, cargoType: e.target.value})}>
                    <option value="">Select type</option>
                    <option value="mini">Mini Cargo</option>
                    <option value="standard">Standard Cargo</option>
                    <option value="bulk">Bulk Cargo</option>
                    <option value="heavy">Heavy Cargo</option>
                    <option value="enterprise">Full Load</option>
                    <option value="express">Express Delivery</option>
                    <option value="rural">Rural Logistics</option>
                    <option value="perishable">Perishable Goods</option>
                    <option value="medical">Medical Supplies</option>
                  </select>
                </div>
                <div className="calc-group">
                  <label>Weight (kg)</label>
                  <input type="number" step="0.1" value={calculatorData.weight} onChange={(e) => setCalculatorData({...calculatorData, weight: e.target.value})} placeholder="Enter weight" />
                </div>
                <div className="calc-group">
                  <label>Distance (km)</label>
                  <input type="number" value={calculatorData.distance} onChange={(e) => setCalculatorData({...calculatorData, distance: e.target.value})} placeholder="Approx. distance" />
                </div>
                <button className="btn-calculate" onClick={calculateCost}>Calculate</button>
              </div>
              {estimatedCost && (
                <div className="calculator-result">
                  <div className="result-label">Estimated Cost:</div>
                  <div className="result-amount">KES {estimatedCost.toLocaleString()}</div>
                  <p className="result-note">*This is an estimate. Final price confirmed after pickup.</p>
                </div>
              )}
            </div>
          </div>
        )}

        {cart.length > 0 && (
          <div className="cart-summary">
            <h2>🛒 Cart ({cart.length} {cart.length === 1 ? 'item' : 'items'})</h2>
            <div className="cart-items">
              {cart.map(item => (
                <div key={item.id} className="cart-item">
                  <div className="cart-item-info">
                    <h4>{item.cargoType}</h4>
                    <p>{item.from} → {item.to}</p>
                    <p>{item.weight}kg • {item.pickupDate}</p>
                  </div>
                  <button className="btn-remove" onClick={() => handleRemoveFromCart(item.id)}>✕</button>
                </div>
              ))}
            </div>
            <button className="btn-primary btn-checkout" onClick={handleSubmit}>
              Proceed to Payment ({cart.length} {cart.length === 1 ? 'shipment' : 'shipments'})
            </button>
          </div>
        )}

        <div className="cargo-selection">
          <h2>Select Cargo Type</h2>
          
          {(!formData.name || !formData.phone || !formData.email) && (
            <div className="contact-info-prompt">
              <p>💡 Fill in your contact info below to quickly add cargo types to cart</p>
              <div className="quick-contact-form">
                <input 
                  type="text" 
                  placeholder="Your Name" 
                  value={formData.name}
                  onChange={(e) => setFormData({...formData, name: e.target.value})}
                />
                <input 
                  type="tel" 
                  placeholder="Phone (+254...)" 
                  value={formData.phone}
                  onChange={(e) => setFormData({...formData, phone: e.target.value})}
                />
                <input 
                  type="email" 
                  placeholder="Email" 
                  value={formData.email}
                  onChange={(e) => setFormData({...formData, email: e.target.value})}
                />
              </div>
            </div>
          )}

          <div className="cargo-grid">
            {cargoTypes.map(cargo => (
              <div
                key={cargo.id}
                className={`cargo-card ${selectedCargo?.id === cargo.id ? 'selected' : ''}`}
              >
                <div onClick={() => handleCargoSelect(cargo)} style={{cursor: 'pointer'}}>
                  <div className="cargo-icon">{cargo.icon}</div>
                  <h3>{cargo.name}</h3>
                  <p className="cargo-weight">{cargo.weight}</p>
                  <p className="cargo-desc">{cargo.desc}</p>
                  <p className="cargo-price">KES {cargo.price}</p>
                </div>
                <button 
                  className="btn-add-to-cart"
                  onClick={(e) => handleQuickAddToCart(cargo, e)}
                  type="button"
                >
                  🛒 Add to Cart
                </button>
              </div>
            ))}
          </div>
        </div>

        {selectedCargo && (
          <div className="booking-form-section">
            <h2>Shipment Details</h2>
            <form onSubmit={handleAddToCart} className="booking-form">
              <div className="form-row">
                <div className="form-group">
                  <label>Pickup Location</label>
                  <input type="text" value={formData.from} onChange={(e) => setFormData({...formData, from: e.target.value})} placeholder="Enter pickup address" required />
                </div>
                <div className="form-group">
                  <label>Delivery Location</label>
                  <input type="text" value={formData.to} onChange={(e) => setFormData({...formData, to: e.target.value})} placeholder="Enter delivery address" required />
                </div>
              </div>

              <div className="form-row">
                <div className="form-group">
                  <label>Weight (kg)</label>
                  <input type="number" step="0.1" value={formData.weight} onChange={(e) => setFormData({...formData, weight: e.target.value})} placeholder="Estimated weight" required />
                </div>
                <div className="form-group">
                  <label>Pickup Date</label>
                  <input type="date" value={formData.pickupDate} onChange={(e) => setFormData({...formData, pickupDate: e.target.value})} required />
                </div>
              </div>

              <div className="form-group">
                <label>Full Name</label>
                <input type="text" value={formData.name} onChange={(e) => setFormData({...formData, name: e.target.value})} placeholder="Your full name" required />
              </div>

              <div className="form-row">
                <div className="form-group">
                  <label>Phone Number</label>
                  <input type="tel" value={formData.phone} onChange={(e) => setFormData({...formData, phone: e.target.value})} placeholder="+254..." required />
                </div>
                <div className="form-group">
                  <label>Email</label>
                  <input type="email" value={formData.email} onChange={(e) => setFormData({...formData, email: e.target.value})} placeholder="your@email.com" required />
                </div>
              </div>

              <div className="form-group">
                <label>Cargo Description (Optional)</label>
                <textarea value={formData.description} onChange={(e) => setFormData({...formData, description: e.target.value})} placeholder="Describe your cargo..." rows="3"></textarea>
              </div>

              <div className="form-buttons">
                <button type="submit" className="btn-secondary btn-large">🛒 Add to Cart</button>
                {cart.length > 0 && (
                  <button type="button" className="btn-primary btn-large" onClick={handleSubmit}>
                    Proceed to Payment ({cart.length})
                  </button>
                )}
              </div>
            </form>
          </div>
        )}
      </div>
    </div>
  );
};

export default Booking;
