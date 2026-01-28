import './About.css';

const About = () => {
  return (
    <div className="about-page">
      <div className="page-hero">
        <h1>About Soba Africa</h1>
        <p>Bridging the gap between urban and rural Kenya</p>
      </div>

      <div className="about-container">
        <section className="story-section">
          <div className="story-content">
            <h2>Our Story</h2>
            <p>Founded in 2020, Soba Africa was born from a simple observation: while Nairobi thrived with countless delivery options, our families and friends in rural areas struggled to receive even basic parcels. We set out to change that.</p>
            <p>Today, we're proud to be Kenya's leading logistics provider connecting urban centers to the most remote corners of our beautiful country. Every parcel we deliver strengthens the bond between city and countryside, enabling commerce, connection, and opportunity.</p>
          </div>
          <div className="story-image">
            <div className="image-placeholder">
              <span>🚚</span>
              <p>Delivering Hope Across Kenya</p>
            </div>
          </div>
        </section>

        <section className="mission-vision">
          <div className="mv-card">
            <div className="mv-icon">🎯</div>
            <h3>Our Mission</h3>
            <p>To provide reliable, affordable, and accessible logistics services that connect every Kenyan, regardless of location, to opportunities and loved ones.</p>
          </div>
          <div className="mv-card">
            <div className="mv-icon">👁️</div>
            <h3>Our Vision</h3>
            <p>A Kenya where distance is no barrier to commerce, communication, and community. Where every village is as connected as the capital.</p>
          </div>
          <div className="mv-card">
            <div className="mv-icon">💎</div>
            <h3>Our Values</h3>
            <p>Reliability, Integrity, Innovation, Community Focus, and Unwavering Commitment to Customer Satisfaction.</p>
          </div>
        </section>

        <section className="team-section">
          <h2>Meet Our Team</h2>
          <p className="team-intro">Dedicated professionals committed to excellence</p>
          <div className="team-grid">
            <div className="team-member">
              <div className="member-photo">👨‍💼</div>
              <h4>James Kamau</h4>
              <p className="member-role">Founder & CEO</p>
              <p className="member-bio">15+ years in logistics and supply chain management</p>
            </div>
            <div className="team-member">
              <div className="member-photo">👩‍💼</div>
              <h4>Grace Achieng</h4>
              <p className="member-role">Operations Director</p>
              <p className="member-bio">Expert in rural logistics and last-mile delivery</p>
            </div>
            <div className="team-member">
              <div className="member-photo">👨‍💻</div>
              <h4>David Mwangi</h4>
              <p className="member-role">Technology Lead</p>
              <p className="member-bio">Building innovative tracking and routing systems</p>
            </div>
            <div className="team-member">
              <div className="member-photo">👩‍💼</div>
              <h4>Fatuma Hassan</h4>
              <p className="member-role">Customer Success Manager</p>
              <p className="member-bio">Ensuring every customer has an excellent experience</p>
            </div>
          </div>
        </section>

        <section className="achievements">
          <h2>Our Achievements</h2>
          <div className="achievements-grid">
            <div className="achievement-card">
              <div className="achievement-icon">🏆</div>
              <h4>Best Logistics Startup 2022</h4>
              <p>Kenya Startup Awards</p>
            </div>
            <div className="achievement-card">
              <div className="achievement-icon">⭐</div>
              <h4>4.8/5 Customer Rating</h4>
              <p>Based on 5,000+ reviews</p>
            </div>
            <div className="achievement-card">
              <div className="achievement-icon">🌍</div>
              <h4>50,000+ Deliveries</h4>
              <p>Across all 47 counties</p>
            </div>
            <div className="achievement-card">
              <div className="achievement-icon">🤝</div>
              <h4>500+ Business Partners</h4>
              <p>Trusting us with their logistics</p>
            </div>
          </div>
        </section>

        <section className="cta-section">
          <h2>Join Our Journey</h2>
          <p>Be part of connecting Kenya, one parcel at a time</p>
          <button className="btn-primary">Get Started Today</button>
        </section>
      </div>
    </div>
  );
};

export default About;
