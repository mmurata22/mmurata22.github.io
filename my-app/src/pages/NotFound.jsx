import { Link } from 'react-router-dom';

function NotFound() {
  return (
    <header
      className="hero-header"
      style={{
        background: 'linear-gradient(135deg, #00FFFF 0%, #3a60ff 50%, #FF00FF 100%)',
        minHeight: '80vh',
        flexDirection: 'column',
        textAlign: 'center',
        padding: '2rem',
        boxSizing: 'border-box',
      }}
    >
      <div className="hero-content" style={{ position: 'relative', zIndex: 2, color: 'white' }}>
        <h1 style={{ fontSize: '7rem', margin: 0, lineHeight: 1 }}>404</h1>
        <p style={{ fontSize: '1.3rem', margin: '1rem 0 2rem' }}>
          Looks like this page wandered off the map.
        </p>
        <Link to="/" className="cta-button" style={{ color: '#3a60ff' }}>
          Back to Home
        </Link>
      </div>
    </header>
  );
}

export default NotFound;