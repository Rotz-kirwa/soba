import { useState } from 'react';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Services from './pages/Services';
import Tracking from './pages/Tracking';
import Pricing from './pages/Pricing';
import Coverage from './pages/Coverage';
import About from './pages/About';
import Contact from './pages/Contact';
import FAQ from './pages/FAQ';
import Gallery from './pages/Gallery';
import Booking from './pages/Booking';
import Payment from './pages/Payment';
import Footer from './components/Footer';
import WhatsAppButton from './components/WhatsAppButton';
import SocialProof from './components/SocialProof';
import './App.css';

function App() {
  const [currentPage, setCurrentPage] = useState('home');
  const [bookingData, setBookingData] = useState(null);

  const renderPage = () => {
    switch(currentPage) {
      case 'home': return <Home setPage={setCurrentPage} />;
      case 'services': return <Services setPage={setCurrentPage} />;
      case 'tracking': return <Tracking />;
      case 'pricing': return <Pricing />;
      case 'coverage': return <Coverage />;
      case 'about': return <About />;
      case 'contact': return <Contact />;
      case 'faq': return <FAQ />;
      case 'gallery': return <Gallery />;
      case 'booking': return <Booking setPage={setCurrentPage} setBookingData={setBookingData} />;
      case 'payment': return <Payment bookingData={bookingData} setPage={setCurrentPage} />;
      default: return <Home setPage={setCurrentPage} />;
    }
  };

  return (
    <div className="app">
      <Navbar currentPage={currentPage} setPage={setCurrentPage} />
      <main>{renderPage()}</main>
      <Footer setPage={setCurrentPage} />
      <WhatsAppButton />
      <SocialProof />
    </div>
  );
}

export default App;
