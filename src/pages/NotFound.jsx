import React from 'react';
import { Link } from 'react-router-dom';

const NotFound = () => {
  return (
    <div className="container py-5 my-5 text-center flex-grow-1 d-flex flex-column justify-content-center align-items-center">
      <div className="avatar-circle mb-3" style={{ width: '64px', height: '64px', fontSize: '1.8rem' }}>
        <i className="bi bi-question-lg"></i>
      </div>
      <h2 className="fw-bold text-dark">404 - Page Not Found</h2>
      <p className="text-muted mb-4" style={{ maxWidth: '420px' }}>
        The page you are looking for does not exist or has been moved. Use the navigation links or return to the dashboard.
      </p>
      <Link to="/" className="btn btn-primary-gradient px-4">
        <i className="bi bi-house-door-fill me-2"></i>
        Go to Home / Dashboard
      </Link>
    </div>
  );
};

export default NotFound;
