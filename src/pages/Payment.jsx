import { useState } from 'react';
import './Payment.css';

const Payment = ({ bookingData, setPage }) => {
  const [paymentMethod, setPaymentMethod] = useState('mpesa');
  const [mpesaPhone, setMpesaPhone] = useState('');
  const [processing, setProcessing] = useState(false);

  const cart = bookingData?.cart || [];
  const totalItems = cart.length;
  
  // Calculate total estimated price range
  const calculateTotal = () => {
    if (totalItems === 0) return '0';
    return `${totalItems * 500} - ${totalItems * 50000}`;
  };

  const handlePayment = (e) => {
    e.preventDefault();
    setProcessing(true);
    
    setTimeout(() => {
      alert('Payment initiated! You will receive an M-Pesa prompt on your phone.');
      setProcessing(false);
      setPage('tracking');
    }, 2000);
  };

  return (
    <div className="payment-page">
      <div className="page-hero">
        <h1>Payment</h1>
        <p>Complete your booking payment securely</p>
      </div>

      <div className="payment-container">
        <div className="payment-summary">
          <h2>Booking Summary</h2>
          <div className="summary-shipments">
            <h3>{totalItems} {totalItems === 1 ? 'Shipment' : 'Shipments'}</h3>
            {cart.map((item, index) => (
              <div key={item.id} className="summary-shipment">
                <h4>Shipment {index + 1}</h4>
                <div className="summary-item">
                  <span>Cargo Type:</span>
                  <strong>{item.cargoType}</strong>
                </div>
                <div className="summary-item">
                  <span>Route:</span>
                  <strong>{item.from} → {item.to}</strong>
                </div>
                <div className="summary-item">
                  <span>Weight:</span>
                  <strong>{item.weight} kg</strong>
                </div>
                <div className="summary-item">
                  <span>Date:</span>
                  <strong>{item.pickupDate}</strong>
                </div>
              </div>
            ))}
          </div>
          <div className="summary-divider"></div>
          <div className="summary-total">
            <span>Estimated Total:</span>
            <strong>KES {calculateTotal()}</strong>
          </div>
          <p className="summary-note">Final prices will be confirmed after pickup</p>
        </div>

        <div className="payment-methods">
          <h2>Select Payment Method</h2>
          
          <div className="payment-options">
            <div 
              className={`payment-option ${paymentMethod === 'mpesa' ? 'selected' : ''}`}
              onClick={() => setPaymentMethod('mpesa')}
            >
              <div className="payment-icon">📱</div>
              <div className="payment-info">
                <h3>M-Pesa</h3>
                <p>Pay with M-Pesa mobile money</p>
              </div>
            </div>

            <div 
              className={`payment-option ${paymentMethod === 'card' ? 'selected' : ''}`}
              onClick={() => setPaymentMethod('card')}
            >
              <div className="payment-icon">💳</div>
              <div className="payment-info">
                <h3>Debit/Credit Card</h3>
                <p>Visa, Mastercard accepted</p>
              </div>
            </div>

            <div 
              className={`payment-option ${paymentMethod === 'bank' ? 'selected' : ''}`}
              onClick={() => setPaymentMethod('bank')}
            >
              <div className="payment-icon">🏦</div>
              <div className="payment-info">
                <h3>Bank Transfer</h3>
                <p>Direct bank payment</p>
              </div>
            </div>

            <div 
              className={`payment-option ${paymentMethod === 'cash' ? 'selected' : ''}`}
              onClick={() => setPaymentMethod('cash')}
            >
              <div className="payment-icon">💵</div>
              <div className="payment-info">
                <h3>Cash on Pickup</h3>
                <p>Pay when we collect</p>
              </div>
            </div>
          </div>

          <form onSubmit={handlePayment} className="payment-form">
            {paymentMethod === 'mpesa' && (
              <div className="mpesa-form">
                <h3>M-Pesa Payment</h3>
                <div className="form-group">
                  <label>M-Pesa Phone Number</label>
                  <input 
                    type="tel" 
                    value={mpesaPhone} 
                    onChange={(e) => setMpesaPhone(e.target.value)}
                    placeholder="+254 7XX XXX XXX" 
                    required 
                  />
                </div>
                <p className="payment-instruction">
                  You will receive an M-Pesa prompt on your phone to complete the payment
                </p>
              </div>
            )}

            {paymentMethod === 'card' && (
              <div className="card-form">
                <h3>Card Payment</h3>
                <div className="form-group">
                  <label>Card Number</label>
                  <input type="text" placeholder="1234 5678 9012 3456" required />
                </div>
                <div className="form-row">
                  <div className="form-group">
                    <label>Expiry Date</label>
                    <input type="text" placeholder="MM/YY" required />
                  </div>
                  <div className="form-group">
                    <label>CVV</label>
                    <input type="text" placeholder="123" required />
                  </div>
                </div>
              </div>
            )}

            {paymentMethod === 'bank' && (
              <div className="bank-form">
                <h3>Bank Transfer Details</h3>
                <div className="bank-details">
                  <p><strong>Bank:</strong> Equity Bank</p>
                  <p><strong>Account Name:</strong> Soba Africa Ltd</p>
                  <p><strong>Account Number:</strong> 0123456789</p>
                  <p><strong>Branch:</strong> Upper Hill</p>
                </div>
                <p className="payment-instruction">
                  Please use your booking reference as the payment reference
                </p>
              </div>
            )}

            {paymentMethod === 'cash' && (
              <div className="cash-form">
                <h3>Cash on Pickup</h3>
                <p className="payment-instruction">
                  You will pay in cash when our driver arrives to collect your cargo. Please have the exact amount ready.
                </p>
              </div>
            )}

            <button 
              type="submit" 
              className="btn-primary btn-large"
              disabled={processing}
            >
              {processing ? 'Processing...' : `Pay with ${paymentMethod === 'mpesa' ? 'M-Pesa' : paymentMethod === 'card' ? 'Card' : paymentMethod === 'bank' ? 'Bank Transfer' : 'Cash'}`}
            </button>
          </form>

          <div className="payment-security">
            <p>🔒 Secure payment • Your information is encrypted and safe</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Payment;
