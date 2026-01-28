import './Coverage.css';

const Coverage = () => {
  const counties = [
    'Nairobi', 'Mombasa', 'Kisumu', 'Nakuru', 'Eldoret', 'Thika', 'Malindi', 'Kitale',
    'Garissa', 'Kakamega', 'Meru', 'Nyeri', 'Machakos', 'Kiambu', 'Kericho', 'Naivasha',
    'Bungoma', 'Kisii', 'Embu', 'Nanyuki', 'Voi', 'Homa Bay', 'Migori', 'Busia',
    'Kitui', 'Kajiado', 'Narok', 'Bomet', 'Murang\'a', 'Nyahururu', 'Isiolo', 'Marsabit',
    'Mandera', 'Wajir', 'Turkana', 'West Pokot', 'Samburu', 'Trans Nzoia', 'Uasin Gishu',
    'Elgeyo Marakwet', 'Nandi', 'Baringo', 'Laikipia', 'Makueni', 'Taita Taveta', 'Lamu', 'Tana River'
  ];

  return (
    <div className="coverage-page">
      <div className="page-hero">
        <h1>Coverage Areas</h1>
        <p>Delivering to all 47 counties across Kenya</p>
      </div>

      <div className="coverage-container">
        <div className="map-section">
          <div className="map-placeholder">
            <div className="map-content">
              <h3>🗺️ Kenya Coverage Map</h3>
              <p>We deliver to every corner of Kenya</p>
              <div className="map-stats">
                <div className="map-stat">
                  <strong>47</strong>
                  <span>Counties</span>
                </div>
                <div className="map-stat">
                  <strong>290+</strong>
                  <span>Sub-Counties</span>
                </div>
                <div className="map-stat">
                  <strong>1000+</strong>
                  <span>Delivery Points</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="coverage-info">
          <h2>All Counties Covered</h2>
          <p className="coverage-desc">From bustling cities to remote villages, we ensure your parcels reach their destination safely and on time.</p>
          
          <div className="counties-grid">
            {counties.map((county, index) => (
              <div key={index} className="county-item">
                <span className="check-icon">✓</span>
                {county}
              </div>
            ))}
          </div>
        </div>

        <div className="delivery-zones">
          <h2>Delivery Zones & Timelines</h2>
          <div className="zones-grid">
            <div className="zone-card">
              <div className="zone-icon">🏙️</div>
              <h3>Zone 1: Major Cities</h3>
              <p className="zone-areas">Nairobi, Mombasa, Kisumu, Nakuru, Eldoret</p>
              <p className="zone-time">⏱️ 1-2 business days</p>
            </div>
            <div className="zone-card">
              <div className="zone-icon">🏘️</div>
              <h3>Zone 2: Regional Towns</h3>
              <p className="zone-areas">Thika, Nyeri, Meru, Kakamega, Kitale, Machakos</p>
              <p className="zone-time">⏱️ 2-3 business days</p>
            </div>
            <div className="zone-card">
              <div className="zone-icon">🏞️</div>
              <h3>Zone 3: Rural Areas</h3>
              <p className="zone-areas">All other counties and remote locations</p>
              <p className="zone-time">⏱️ 3-7 business days</p>
            </div>
          </div>
        </div>

        <div className="coverage-cta">
          <h2>Not Sure If We Deliver to Your Area?</h2>
          <p>Contact us and we'll confirm coverage for your specific location</p>
          <div className="cta-buttons">
            <button className="btn-primary">Contact Us</button>
            <button className="btn-secondary">WhatsApp Us</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Coverage;
