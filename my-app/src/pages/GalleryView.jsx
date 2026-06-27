import React, { useEffect } from 'react';
import { useLocation, Link, Navigate } from 'react-router-dom';

const GalleryView = () => {
  // Scroll to top on load
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const location = useLocation();
  const item = location.state?.galleryItem;

  // Security check: if someone types the URL directly without clicking a card, 
  // send them safely back to the Work page so the app doesn't crash.
  if (!item) {
    return <Navigate to="/work" />;
  }

  return (
    <div className="container page-content" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', paddingTop: '4rem' }}>
      
      {/* Back Button */}
      <div style={{ width: '100%', maxWidth: '1000px', marginBottom: '2rem' }}>
        <Link to="/work" style={{ textDecoration: 'none', color: '#666', fontWeight: 'bold' }}>
          ← Back to Selected Work
        </Link>
      </div>

      {/* The Full-Blown Image */}
      <div style={{ width: '100%', maxWidth: '1000px', backgroundColor: '#f9f9f9', borderRadius: '12px', overflow: 'hidden', border: '1px solid #eee' }}>
        {item.img ? (
            <img 
              src={item.img} 
              alt={item.title} 
              style={{ width: '100%', height: 'auto', display: 'block' }} 
            />
        ) : (
            <div style={{ width: '100%', height: '600px', display: 'flex', alignItems: 'center', justifyContent: 'center', backgroundColor: '#eee', color: '#999' }}>
              [Full Resolution Image Placeholder]
            </div>
        )}
      </div>

      {/* Title & Caption */}
      <div style={{ width: '100%', maxWidth: '1000px', marginTop: '2rem', textAlign: 'center' }}>
        <h1 style={{ fontFamily: "'Mukta', sans-serif", fontSize: '2.5rem', color: '#333', marginBottom: '1rem' }}>
          {item.title}
        </h1>
        <p style={{ fontSize: '1.2rem', color: '#666', maxWidth: '700px', margin: '0 auto', lineHeight: '1.6' }}>
          {item.caption}
        </p>
      </div>

    </div>
  );
};

export default GalleryView;