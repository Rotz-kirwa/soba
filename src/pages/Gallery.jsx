import { useState } from 'react';
import './Gallery.css';

const Gallery = () => {
  const [selectedImage, setSelectedImage] = useState(null);
  const [filter, setFilter] = useState('all');

  const images = [
    { id: 1, category: 'vehicles', title: 'Soba Africa Delivery Van', description: 'Our branded delivery vehicle ready for nationwide service', src: '/images/soba5.png', isReal: true },
    { id: 2, category: 'delivery', title: 'Professional Delivery Service', description: 'Connecting Nairobi to every corner of Kenya with reliable logistics', src: '/images/hero2.png', isReal: true },
    { id: 3, category: 'delivery', title: 'Fast & Reliable Delivery', description: 'Modern delivery solutions for urban and rural Kenya', src: '/images/hero1.png', isReal: true },
    { id: 4, category: 'vehicles', title: 'Cargo Delivery Truck', description: 'Heavy-duty truck for long-distance cargo transport', src: '/images/b1.jpg', isReal: true },
    { id: 5, category: 'vehicles', title: 'Fleet Delivery Vehicle', description: 'Reliable transport for parcels across Kenya', src: '/images/b2.jpg', isReal: true },
    { id: 6, category: 'vehicles', title: 'Commercial Delivery Truck', description: 'Professional logistics vehicle for bulk shipments', src: '/images/b3.jpg', isReal: true },
    { id: 7, category: 'delivery', title: 'Parcel Delivery in Action', description: 'Delivering packages safely to customers nationwide', src: '/images/s1.jpg', isReal: true },
    { id: 8, category: 'delivery', title: 'Customer Satisfaction', description: 'Ensuring every delivery brings smiles across Kenya', src: '/images/s2.jpg', isReal: true },
    { id: 9, category: 'vehicles', title: 'Delivery Truck Fleet', description: 'Professional logistics vehicles', src: 'https://i.pinimg.com/736x/13/28/ac/1328acd1eec9ca367167b584acdbef47.jpg', isReal: true },
    { id: 10, category: 'delivery', title: 'Package Handling', description: 'Careful handling of every parcel', src: 'https://i.pinimg.com/736x/0a/eb/3e/0aeb3ea13895bf06694135173b017f18.jpg', isReal: true },
    { id: 11, category: 'warehouse', title: 'Warehouse Operations', description: 'Organized storage and sorting', src: 'https://i.pinimg.com/1200x/59/60/4b/59604b197efabf28bab98c5f1906b2fa.jpg', isReal: true },
    { id: 12, category: 'delivery', title: 'Urban Delivery Service', description: 'Fast delivery in city areas', src: 'https://i.pinimg.com/1200x/00/9b/00/009b00fe20948a15dfc0494b1c4c8898.jpg', isReal: true },
    { id: 13, category: 'vehicles', title: 'Cargo Transport', description: 'Heavy cargo transportation', src: 'https://i.pinimg.com/1200x/27/34/71/2734711802c3ef20c5903829c0ff3d88.jpg', isReal: true },
    { id: 14, category: 'delivery', title: 'Parcel Sorting', description: 'Efficient package processing', src: 'https://i.pinimg.com/736x/44/d3/91/44d3917bae3d2f3677d3edaa47f546cf.jpg', isReal: true },
    { id: 15, category: 'warehouse', title: 'Distribution Center', description: 'Modern logistics facility', src: 'https://i.pinimg.com/1200x/4e/3a/4c/4e3a4c488a608d65ef22aa07af56add4.jpg', isReal: true },
    { id: 16, category: 'team', title: 'Delivery Team', description: 'Professional delivery staff', src: 'https://i.pinimg.com/736x/84/5c/39/845c39827c74f64196c67495740f3a2a.jpg', isReal: true },
    { id: 17, category: 'rural', title: 'Rural Logistics', description: 'Reaching remote areas', src: 'https://i.pinimg.com/736x/34/6a/cb/346acbae6ea6046e42097c4a9192735a.jpg', isReal: true },
    { id: 18, category: 'delivery', title: 'Package Delivery', description: 'Safe and secure delivery', src: 'https://i.pinimg.com/736x/4d/e5/b4/4de5b432a3ffafc65476f20f6f9f2291.jpg', isReal: true }
  ];

  const categories = [
    { id: 'all', label: 'All Photos', icon: '📷' },
    { id: 'vehicles', label: 'Vehicles', icon: '🚚' },
    { id: 'rural', label: 'Rural Delivery', icon: '🏔️' },
    { id: 'team', label: 'Our Team', icon: '👥' },
    { id: 'warehouse', label: 'Warehouse', icon: '🏢' },
    { id: 'delivery', label: 'Deliveries', icon: '📦' }
  ];

  const filteredImages = filter === 'all' ? images : images.filter(img => img.category === filter);

  return (
    <div className="gallery-page">
      <div className="page-hero">
        <h1>Photo Gallery</h1>
        <p>See our operations, team, and deliveries across Kenya</p>
      </div>

      <div className="gallery-container">
        <div className="gallery-filters">
          {categories.map(cat => (
            <button
              key={cat.id}
              className={`filter-btn ${filter === cat.id ? 'active' : ''}`}
              onClick={() => setFilter(cat.id)}
            >
              <span className="filter-icon">{cat.icon}</span>
              {cat.label}
            </button>
          ))}
        </div>

        <div className="gallery-grid">
          {filteredImages.map(image => (
            <div
              key={image.id}
              className="gallery-item"
              onClick={() => setSelectedImage(image)}
            >
              <div className="gallery-image">
                {image.isReal ? (
                  <img src={image.src} alt={image.title} className="real-image" />
                ) : (
                  <div className="image-placeholder">
                    <span className="placeholder-icon">
                      {image.category === 'vehicles' && '🚚'}
                      {image.category === 'rural' && '🏔️'}
                      {image.category === 'team' && '👥'}
                      {image.category === 'warehouse' && '🏢'}
                      {image.category === 'delivery' && '📦'}
                    </span>
                  </div>
                )}
                <div className="gallery-overlay">
                  <h3>{image.title}</h3>
                  <p>{image.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {filteredImages.length === 0 && (
          <div className="no-results">
            <p>No images found in this category</p>
          </div>
        )}
      </div>

      {selectedImage && (
        <div className="lightbox" onClick={() => setSelectedImage(null)}>
          <div className="lightbox-content" onClick={(e) => e.stopPropagation()}>
            <button className="lightbox-close" onClick={() => setSelectedImage(null)}>×</button>
            <div className="lightbox-image">
              {selectedImage.isReal ? (
                <img src={selectedImage.src} alt={selectedImage.title} className="real-image" />
              ) : (
                <div className="image-placeholder large">
                  <span className="placeholder-icon">
                    {selectedImage.category === 'vehicles' && '🚚'}
                    {selectedImage.category === 'rural' && '🏔️'}
                    {selectedImage.category === 'team' && '👥'}
                    {selectedImage.category === 'warehouse' && '🏢'}
                    {selectedImage.category === 'delivery' && '📦'}
                  </span>
                </div>
              )}
            </div>
            <div className="lightbox-info">
              <h2>{selectedImage.title}</h2>
              <p>{selectedImage.description}</p>
            </div>
          </div>
        </div>
      )}

      <div className="gallery-cta">
        <h2>Want to See More?</h2>
        <p>Follow us on social media for daily updates and behind-the-scenes content</p>
        <div className="social-buttons">
          <button className="social-btn facebook">📘 Facebook</button>
          <button className="social-btn instagram">📷 Instagram</button>
          <button className="social-btn twitter">🐦 Twitter</button>
        </div>
      </div>
    </div>
  );
};

export default Gallery;
