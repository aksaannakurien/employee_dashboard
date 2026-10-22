import React from 'react';

const Footer = () => {
  return (
    <footer className="mt-auto py-4 bg-white border-top">
      <div className="container text-center">
        <p className="mb-1 text-muted small">
          <strong>Employee Dashboard</strong> &bull; Assignment 2 React Application
        </p>
        <p className="mb-0 text-secondary" style={{ fontSize: '0.8rem' }}>
          Data retrieved from <a href="https://jsonplaceholder.typicode.com/users" target="_blank" rel="noreferrer" className="text-decoration-none text-primary">JSONPlaceholder API</a>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
