import React, { useState, useEffect } from 'react';
import LoadingSpinner from '../components/LoadingSpinner';
import ErrorMessage from '../components/ErrorMessage';

const Dashboard = () => {
  const [employees, setEmployees] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [viewMode, setViewMode] = useState('table'); // 'table' or 'card'
  const [searchTerm, setSearchTerm] = useState('');

  const API_URL = 'https://jsonplaceholder.typicode.com/users';

  const fetchEmployees = async () => {
    try {
      setLoading(true);
      setError(null);
      const response = await fetch(API_URL);

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const data = await response.json();
      setEmployees(data);
    } catch (err) {
      setError(err.message || 'Unable to connect to the JSONPlaceholder server.');
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchEmployees();
  }, []);

  // Helper to extract initials for avatar
  const getInitials = (name) => {
    if (!name) return '??';
    return name
      .split(' ')
      .slice(0, 2)
      .map((part) => part[0])
      .join('')
      .toUpperCase();
  };

  // Filtered employees according to search query
  const filteredEmployees = employees.filter((emp) => {
    const term = searchTerm.toLowerCase();
    const matchesName = emp.name.toLowerCase().includes(term);
    const matchesEmail = emp.email.toLowerCase().includes(term);
    const matchesId = String(emp.id).includes(term);
    return matchesName || matchesEmail || matchesId;
  });

  return (
    <div className="container py-4 flex-grow-1">
      {/* Header Banner */}
      <div className="d-flex flex-column flex-md-row justify-content-between align-items-md-center gap-3 mb-4 pb-3 border-bottom">
        <div>
          <h2 className="fw-bold mb-1 d-flex align-items-center gap-2">
            <i className="bi bi-speedometer2 text-primary"></i>
            Employee Dashboard
          </h2>
          <p className="text-muted mb-0">
            Real-time employee directory retrieved from{' '}
            <code className="text-primary bg-light px-2 py-0.5 rounded">jsonplaceholder.typicode.com/users</code>
          </p>
        </div>

        {/* View Toggle & Refresh Buttons */}
        <div className="d-flex align-items-center gap-2">
          <button
            className="btn btn-outline-secondary btn-sm d-flex align-items-center gap-1"
            onClick={fetchEmployees}
            title="Refresh API Data"
            disabled={loading}
          >
            <i className={`bi bi-arrow-clockwise ${loading ? 'spin' : ''}`}></i>
            <span className="d-none d-sm-inline">Refresh</span>
          </button>

          <div className="btn-group" role="group" aria-label="View toggle">
            <button
              type="button"
              className={`view-toggle-btn ${viewMode === 'table' ? 'active' : ''}`}
              onClick={() => setViewMode('table')}
            >
              <i className="bi bi-table"></i>
              <span>Table</span>
            </button>
            <button
              type="button"
              className={`view-toggle-btn ${viewMode === 'card' ? 'active' : ''}`}
              onClick={() => setViewMode('card')}
            >
              <i className="bi bi-grid-fill"></i>
              <span>Cards</span>
            </button>
          </div>
        </div>
      </div>

      {/* Loading & Error States */}
      {loading && <LoadingSpinner message="Fetching employees from JSONPlaceholder API..." />}
      {error && !loading && <ErrorMessage error={error} onRetry={fetchEmployees} />}

      {/* Data Loaded View */}
      {!loading && !error && (
        <>
          {/* Controls Bar: Search & Stats */}
          <div className="row g-3 align-items-center mb-4">
            <div className="col-12 col-md-6 col-lg-5">
              <div className="input-group">
                <span className="input-group-text bg-white border-end-0 text-muted">
                  <i className="bi bi-search"></i>
                </span>
                <input
                  type="text"
                  className="form-control border-start-0 ps-0 shadow-none"
                  placeholder="Filter by name, email, or ID..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                />
                {searchTerm && (
                  <button
                    className="btn btn-outline-secondary border-start-0"
                    type="button"
                    onClick={() => setSearchTerm('')}
                  >
                    <i className="bi bi-x-lg"></i>
                  </button>
                )}
              </div>
            </div>

            <div className="col-12 col-md-6 col-lg-7 text-md-end">
              <span className="badge bg-primary-subtle text-primary border border-primary-subtle px-3 py-2 fs-6 rounded-pill">
                <i className="bi bi-people me-1"></i>
                Total Employees: <strong>{filteredEmployees.length}</strong> of {employees.length}
              </span>
            </div>
          </div>

          {filteredEmployees.length === 0 ? (
            <div className="text-center py-5 bg-white rounded-4 border my-4">
              <i className="bi bi-search text-muted" style={{ fontSize: '2.5rem' }}></i>
              <h5 className="mt-3 text-secondary">No matching employees found</h5>
              <p className="text-muted small">Try searching with a different name or email</p>
              <button
                className="btn btn-outline-primary btn-sm mt-2"
                onClick={() => setSearchTerm('')}
              >
                Clear Search
              </button>
            </div>
          ) : viewMode === 'table' ? (
            /* Tabular View (Fields: id, name, email) */
            <div className="custom-card overflow-hidden">
              <div className="table-responsive">
                <table className="table custom-table mb-0 align-middle">
                  <thead>
                    <tr>
                      <th style={{ width: '80px' }}>ID</th>
                      <th>Employee Name</th>
                      <th>Email Address</th>
                      <th className="d-none d-md-table-cell">Contact Action</th>
                    </tr>
                  </thead>
                  <tbody>
                    {filteredEmployees.map((emp) => (
                      <tr key={emp.id}>
                        <td>
                          <span className="badge-id">#{emp.id}</span>
                        </td>
                        <td>
                          <div className="d-flex align-items-center gap-3">
                            <div className="avatar-circle">
                              {getInitials(emp.name)}
                            </div>
                            <div>
                              <div className="fw-semibold text-dark fs-6">{emp.name}</div>
                              {emp.username && (
                                <small className="text-muted">@{emp.username}</small>
                              )}
                            </div>
                          </div>
                        </td>
                        <td>
                          <a
                            href={`mailto:${emp.email}`}
                            className="text-decoration-none text-primary d-inline-flex align-items-center gap-2 fw-medium"
                          >
                            <i className="bi bi-envelope-at text-muted"></i>
                            {emp.email}
                          </a>
                        </td>
                        <td className="d-none d-md-table-cell">
                          <a
                            href={`mailto:${emp.email}`}
                            className="btn btn-sm btn-outline-primary rounded-pill px-3"
                          >
                            <i className="bi bi-send me-1"></i>
                            Send Mail
                          </a>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          ) : (
            /* Card View (Fields: id, name, email) */
            <div className="row g-4">
              {filteredEmployees.map((emp) => (
                <div className="col-12 col-md-6 col-lg-4" key={emp.id}>
                  <div className="employee-card h-100 p-4 d-flex flex-column justify-content-between shadow-sm">
                    <div>
                      {/* Top Bar with ID Badge */}
                      <div className="d-flex justify-content-between align-items-start mb-3">
                        <div className="avatar-circle">
                          {getInitials(emp.name)}
                        </div>
                        <span className="badge-id">ID: #{emp.id}</span>
                      </div>

                      {/* Name */}
                      <h5 className="fw-bold text-dark mb-1">{emp.name}</h5>
                      {emp.username && (
                        <p className="text-muted small mb-3">@{emp.username}</p>
                      )}

                      {/* Email field (Prominently displayed) */}
                      <div className="p-3 bg-light rounded-3 mb-3">
                        <div className="text-muted small text-uppercase fw-bold mb-1" style={{ fontSize: '0.7rem' }}>
                          Email Address
                        </div>
                        <a
                          href={`mailto:${emp.email}`}
                          className="text-decoration-none text-primary d-flex align-items-center gap-2 text-break fw-semibold"
                        >
                          <i className="bi bi-envelope-fill text-primary"></i>
                          <span>{emp.email}</span>
                        </a>
                      </div>
                    </div>

                    {/* Card Footer Action */}
                    <div className="pt-2 border-top mt-2 d-flex justify-content-between align-items-center">
                      <span className="text-muted small">
                        <i className="bi bi-building me-1"></i>
                        {emp.company?.name || 'Company Profile'}
                      </span>
                      <a
                        href={`mailto:${emp.email}`}
                        className="btn btn-sm btn-primary rounded-pill px-3"
                      >
                        <i className="bi bi-envelope me-1"></i>
                        Contact
                      </a>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </>
      )}
    </div>
  );
};

export default Dashboard;
