const NotFound = () => {
  return (
    <div style={{ textAlign: 'center', padding: '50px' }}>
      <h2>Page Not Found</h2>
      <svg 
        xmlns="http://www.w3.org/2000/svg" 
        width="200" 
        height="200" 
        viewBox="0 0 24 24" 
        fill="none" 
        stroke="currentColor" 
        strokeWidth="2" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
        style={{ marginBottom: '20px' }}
      >
        <circle cx="12" cy="12" r="10" />
        <line x1="15" y1="9" x2="9" y2="15" />
        <line x1="9" y1="9" x2="15" y2="15" />
      </svg>
      <p>The page you are looking for does not exist or has been moved.</p>
    </div>
  );
};

export default NotFound;
