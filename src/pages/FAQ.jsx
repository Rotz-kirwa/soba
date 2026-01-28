import { useState } from 'react';
import './FAQ.css';

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const faqs = [
    {
      category: 'General',
      questions: [
        {
          q: 'What areas do you deliver to?',
          a: 'We deliver to all 47 counties in Kenya, from major cities to the most remote villages. Check our Coverage page for detailed information.'
        },
        {
          q: 'How long does delivery take?',
          a: 'Delivery times vary by location: Major cities (1-2 days), Regional towns (2-3 days), Rural areas (3-7 days). Express options available for faster delivery.'
        },
        {
          q: 'What are your operating hours?',
          a: 'Our offices are open Monday to Saturday, 8AM to 6PM. However, you can book online 24/7, and our WhatsApp support is always available.'
        }
      ]
    },
    {
      category: 'Pricing & Payment',
      questions: [
        {
          q: 'How much does shipping cost?',
          a: 'Prices start from KES 500 for standard delivery. The exact cost depends on weight, destination, and service type. Use our pricing calculator for an instant quote.'
        },
        {
          q: 'What payment methods do you accept?',
          a: 'We accept M-Pesa, bank transfers, cash on pickup, and credit/debit cards. Payment is required before pickup or at our office.'
        },
        {
          q: 'Are there any hidden fees?',
          a: 'No hidden fees! The quote you receive includes all costs: delivery, insurance, and tracking. What you see is what you pay.'
        }
      ]
    },
    {
      category: 'Booking & Pickup',
      questions: [
        {
          q: 'How do I book a delivery?',
          a: 'You can book online through our website, via WhatsApp (+254 700 000 000), by phone, or by visiting our Nairobi office. Booking takes just a few minutes.'
        },
        {
          q: 'Do you offer pickup services?',
          a: 'Yes! We offer free pickup within Nairobi CBD. For other Nairobi areas, a small pickup fee may apply. You can also drop off at our office.'
        },
        {
          q: 'Can I schedule a pickup time?',
          a: 'Absolutely! When booking, you can specify your preferred pickup time, and we\'ll coordinate with you to ensure convenience.'
        }
      ]
    },
    {
      category: 'Tracking & Delivery',
      questions: [
        {
          q: 'How do I track my parcel?',
          a: 'After booking, you\'ll receive a tracking number via SMS and email. Enter it on our Track page for real-time updates on your shipment\'s location and status.'
        },
        {
          q: 'Will I be notified when my parcel arrives?',
          a: 'Yes! The recipient receives SMS and phone call notifications when the parcel arrives at the destination. We also provide photo confirmation upon delivery.'
        },
        {
          q: 'What if no one is home during delivery?',
          a: 'Our driver will call the recipient to arrange a convenient time. If unreachable, we\'ll hold the parcel at the nearest pickup point and notify them.'
        }
      ]
    },
    {
      category: 'Parcels & Packaging',
      questions: [
        {
          q: 'What items can I send?',
          a: 'You can send most items including documents, electronics, clothing, food items, and gifts. Prohibited items include weapons, illegal substances, and hazardous materials.'
        },
        {
          q: 'Do I need to package my items?',
          a: 'Yes, please package items securely. We offer packaging services at our office for a small fee if you need assistance.'
        },
        {
          q: 'What is the maximum weight I can send?',
          a: 'Standard parcels: up to 30kg. Bulk cargo: up to 1000kg. For larger shipments, contact us for custom solutions.'
        },
        {
          q: 'Are my items insured?',
          a: 'Yes! All parcels include basic insurance up to KES 10,000. Additional insurance is available for valuable items.'
        }
      ]
    },
    {
      category: 'Issues & Support',
      questions: [
        {
          q: 'What if my parcel is delayed?',
          a: 'While rare, delays can occur due to weather or road conditions. Track your parcel online, and contact our support team for updates and assistance.'
        },
        {
          q: 'What if my parcel is damaged or lost?',
          a: 'We take utmost care, but if damage or loss occurs, file a claim within 48 hours. Our insurance will cover the value up to the insured amount.'
        },
        {
          q: 'How do I contact customer support?',
          a: 'Reach us via WhatsApp (+254 700 000 000), phone (+254 700 000 000), email (support@sobaafrica.co.ke), or visit our Nairobi office.'
        }
      ]
    }
  ];

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="faq-page">
      <div className="page-hero">
        <h1>Frequently Asked Questions</h1>
        <p>Find answers to common questions about our services</p>
      </div>

      <div className="faq-container">
        {faqs.map((category, catIndex) => (
          <div key={catIndex} className="faq-category">
            <h2>{category.category}</h2>
            <div className="faq-list">
              {category.questions.map((faq, qIndex) => {
                const globalIndex = `${catIndex}-${qIndex}`;
                const isOpen = openIndex === globalIndex;
                return (
                  <div key={qIndex} className={`faq-item ${isOpen ? 'open' : ''}`}>
                    <button className="faq-question" onClick={() => toggleFAQ(globalIndex)}>
                      <span>{faq.q}</span>
                      <span className="faq-icon">{isOpen ? '−' : '+'}</span>
                    </button>
                    {isOpen && <div className="faq-answer">{faq.a}</div>}
                  </div>
                );
              })}
            </div>
          </div>
        ))}

        <div className="faq-cta">
          <h2>Still Have Questions?</h2>
          <p>Our team is ready to help you with any inquiries</p>
          <div className="cta-buttons">
            <button className="btn-primary">Contact Us</button>
            <button className="btn-secondary">WhatsApp Us</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FAQ;
