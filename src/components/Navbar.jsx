import { useState, useEffect } from 'react';
import './Navbar.css';

const Navbar = ({ currentPage, setPage }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (page) => {
    setPage(page);
    setIsMobileMenuOpen(false);
    window.scrollTo(0, 0);
  };

  return (
    <nav className={`navbar ${isScrolled ? 'scrolled' : ''}`}>
      <div className="nav-container">
        <div className="nav-logo" onClick={() => handleNavClick('home')}>
          <img src="https://www.soba.africa/_next/image?url=%2Fimages%2Fsoba-logo.png&w=128&q=75" alt="Soba Africa" className="logo-image" />
          <div className="logo-text">
            <span className="logo-name">Soba Africa</span>
            <span className="logo-tagline">Connecting Kenya</span>
          </div>
        </div>

        <div className={`nav-links ${isMobileMenuOpen ? 'active' : ''}`}>
          <button className="mobile-menu-close" onClick={() => setIsMobileMenuOpen(false)}>
            ✕
          </button>
          <a onClick={() => handleNavClick('home')} className={currentPage === 'home' ? 'active nav-home' : 'nav-home'}>Home</a>
          <a onClick={() => handleNavClick('services')} className={currentPage === 'services' ? 'active nav-services' : 'nav-services'}>Services</a>
          <a onClick={() => handleNavClick('tracking')} className={currentPage === 'tracking' ? 'active nav-track' : 'nav-track'}>Track</a>
          <a onClick={() => handleNavClick('pricing')} className={currentPage === 'pricing' ? 'active nav-pricing' : 'nav-pricing'}>Pricing</a>
          <a onClick={() => handleNavClick('coverage')} className={currentPage === 'coverage' ? 'active nav-coverage' : 'nav-coverage'}>Coverage</a>
          <a onClick={() => handleNavClick('about')} className={currentPage === 'about' ? 'active nav-about' : 'nav-about'}>About</a>
          <a onClick={() => handleNavClick('gallery')} className={currentPage === 'gallery' ? 'active nav-gallery' : 'nav-gallery'}>Gallery</a>
          <a onClick={() => handleNavClick('contact')} className={currentPage === 'contact' ? 'active nav-contact' : 'nav-contact'}>Contact</a>
          <a onClick={() => handleNavClick('faq')} className={currentPage === 'faq' ? 'active nav-faq' : 'nav-faq'}>FAQ</a>
        </div>

        <div className="social-icons-mobile">
          <a href="https://facebook.com/sobaafrica" target="_blank" rel="noopener noreferrer" className="social-icon">
            <svg viewBox="0 0 24 24" fill="#1877F2"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/></svg>
          </a>
          <a href="https://instagram.com/sobaafrica" target="_blank" rel="noopener noreferrer" className="social-icon">
            <svg viewBox="0 0 24 24" fill="url(#instagram-gradient)"><defs><linearGradient id="instagram-gradient" x1="0%" y1="100%" x2="100%" y2="0%"><stop offset="0%" style={{stopColor: '#FD5949'}} /><stop offset="50%" style={{stopColor: '#D6249F'}} /><stop offset="100%" style={{stopColor: '#285AEB'}} /></linearGradient></defs><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/></svg>
          </a>
          <a href="https://tiktok.com/@sobaafrica" target="_blank" rel="noopener noreferrer" className="social-icon">
            <svg viewBox="0 0 24 24" fill="#000000"><path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z"/></svg>
          </a>
          <a href="https://x.com/sobaafrica" target="_blank" rel="noopener noreferrer" className="social-icon">
            <svg viewBox="0 0 24 24" fill="#000000"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/></svg>
          </a>
        </div>

        <button className="btn-primary" onClick={() => handleNavClick('booking')}>Book Now</button>

        <button className="mobile-menu-btn" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
          <span></span>
          <span></span>
          <span></span>
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
