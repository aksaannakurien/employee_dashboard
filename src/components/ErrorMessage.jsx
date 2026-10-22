import React from 'react';

const ErrorMessage = ({ error, onRetry }) => {
  return (
    <div className="card border-danger my-5 p-4 text-center mx-auto" style={{ maxWidth: '540px' }}>
      <div className="card-body">
        <div className="text-danger mb-3">
          <i className="bi bi-exclamation-triangle-fill" style={{ fontSize: '3rem' }}></i>
        </div>
        <h5 className="card-title text-danger fw-bold">Failed to Load Dashboard Data</h5>
        <p className="card-text text-muted mb-4">
          {error || 'An unexpected error occurred while communicating with the API.'}
        </p>
        {onRetry && (
          <button className="btn btn-outline-danger px-4" onClick={onRetry}>
            <i className="bi bi-arrow-clockwise me-2"></i>
            Retry
          </button>
        )}
      </div>
    </div>
  );
};

export default ErrorMessage;
