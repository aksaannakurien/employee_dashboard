import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const EmployeeForm = () => {
  const initialFormState = {
    name: '',
    designation: '',
    location: '',
    salary: '',
  };

  const [formData, setFormData] = useState(initialFormState);
  const [errors, setErrors] = useState({});
  const [submittedData, setSubmittedData] = useState(null);
  const [showSuccessToast, setShowSuccessToast] = useState(false);

  // Designation suggestions for quick selection
  const designationSuggestions = [
    'Software Engineer',
    'Frontend Developer',
    'Backend Developer',
    'Full Stack Engineer',
    'DevOps Engineer',
    'Product Manager',
    'UI/UX Designer',
    'Data Scientist',
    'QA Automation Engineer',
    'Human Resources Specialist',
  ];

  const validate = () => {
    const newErrors = {};

    // Name validation
    if (!formData.name.trim()) {
      newErrors.name = 'Employee Name is required';
    } else if (formData.name.trim().length < 2) {
      newErrors.name = 'Name must be at least 2 characters long';
    }

    // Designation validation
    if (!formData.designation.trim()) {
      newErrors.designation = 'Designation is required';
    }

    // Location validation
    if (!formData.location.trim()) {
      newErrors.location = 'Location is required';
    }

    // Salary validation
    if (!formData.salary) {
      newErrors.salary = 'Salary is required';
    } else if (isNaN(formData.salary) || Number(formData.salary) <= 0) {
      newErrors.salary = 'Please enter a valid positive salary amount';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));

    // Clear error for field once user starts typing
    if (errors[name]) {
      setErrors((prev) => ({
        ...prev,
        [name]: '',
      }));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!validate()) {
      return;
    }

    // Per assignment requirements: No need to post data from Frontend.
    // We capture the submitted record in state to display feedback to the user.
    setSubmittedData({ ...formData });
    setShowSuccessToast(true);

    // Scroll smoothly to top
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleReset = () => {
    setFormData(initialFormState);
    setErrors({});
    setSubmittedData(null);
    setShowSuccessToast(false);
  };

  return (
    <div className="container py-4 flex-grow-1">
      {/* Page Header */}
      <div className="text-center mb-4">
        <h2 className="fw-bold d-flex align-items-center justify-content-center gap-2">
          <i className="bi bi-person-plus text-primary"></i>
          Employee Registration Form
        </h2>
        <p className="text-muted">
          Fill in the details below to add a new employee profile to the directory.
        </p>
      </div>

      {/* Success Notification Alert */}
      {showSuccessToast && submittedData && (
        <div className="alert alert-success alert-dismissible fade show mx-auto shadow-sm form-card mb-4" role="alert">
          <div className="d-flex gap-3">
            <div className="text-success fs-3">
              <i className="bi bi-check-circle-fill"></i>
            </div>
            <div className="flex-grow-1">
              <h5 className="alert-heading fw-bold mb-1">Employee Form Submitted!</h5>
              <p className="small mb-2 text-dark">
                The form was validated and captured successfully in the frontend state.
                <span className="text-muted d-block mt-1">
                  <em>(Note: As noted in assignment requirements, no backend POST request is made).</em>
                </span>
              </p>
              <div className="p-3 bg-white rounded-3 border border-success-subtle mb-3">
                <div className="row g-2 small">
                  <div className="col-sm-6">
                    <strong>Name:</strong> {submittedData.name}
                  </div>
                  <div className="col-sm-6">
                    <strong>Designation:</strong> {submittedData.designation}
                  </div>
                  <div className="col-sm-6">
                    <strong>Location:</strong> {submittedData.location}
                  </div>
                  <div className="col-sm-6">
                    <strong>Salary:</strong> ${Number(submittedData.salary).toLocaleString()}
                  </div>
                </div>
              </div>
              <div className="d-flex gap-2">
                <button
                  type="button"
                  className="btn btn-sm btn-outline-success"
                  onClick={handleReset}
                >
                  <i className="bi bi-plus-lg me-1"></i> Register Another Employee
                </button>
                <Link to="/" className="btn btn-sm btn-success">
                  <i className="bi bi-arrow-left me-1"></i> Back to Dashboard
                </Link>
              </div>
            </div>
            <button
              type="button"
              className="btn-close"
              aria-label="Close"
              onClick={() => setShowSuccessToast(false)}
            ></button>
          </div>
        </div>
      )}

      {/* Main Form Card */}
      <div className="card form-card bg-white p-4 p-md-5">
        <form onSubmit={handleSubmit} noValidate>
          {/* Field 1: Name */}
          <div className="mb-4">
            <label htmlFor="name" className="form-label fw-semibold text-secondary">
              Employee Name <span className="text-danger">*</span>
            </label>
            <div className="input-icon-wrapper">
              <i className="bi bi-person input-icon"></i>
              <input
                type="text"
                id="name"
                name="name"
                className={`form-control custom-input ${errors.name ? 'is-invalid' : ''}`}
                placeholder="e.g. Sarah Jenkins"
                value={formData.name}
                onChange={handleChange}
              />
            </div>
            {errors.name && (
              <div className="text-danger small mt-1 d-flex align-items-center gap-1">
                <i className="bi bi-exclamation-circle"></i>
                {errors.name}
              </div>
            )}
          </div>

          {/* Field 2: Designation */}
          <div className="mb-4">
            <label htmlFor="designation" className="form-label fw-semibold text-secondary">
              Designation <span className="text-danger">*</span>
            </label>
            <div className="input-icon-wrapper">
              <i className="bi bi-briefcase input-icon"></i>
              <input
                type="text"
                id="designation"
                name="designation"
                list="designation-list"
                className={`form-control custom-input ${errors.designation ? 'is-invalid' : ''}`}
                placeholder="e.g. Senior Software Engineer"
                value={formData.designation}
                onChange={handleChange}
              />
              <datalist id="designation-list">
                {designationSuggestions.map((title, idx) => (
                  <option key={idx} value={title} />
                ))}
              </datalist>
            </div>
            {errors.designation ? (
              <div className="text-danger small mt-1 d-flex align-items-center gap-1">
                <i className="bi bi-exclamation-circle"></i>
                {errors.designation}
              </div>
            ) : (
              <div className="form-text text-muted small">
                Type or choose from common roles in the dropdown.
              </div>
            )}
          </div>

          {/* Field 3: Location */}
          <div className="mb-4">
            <label htmlFor="location" className="form-label fw-semibold text-secondary">
              Location <span className="text-danger">*</span>
            </label>
            <div className="input-icon-wrapper">
              <i className="bi bi-geo-alt input-icon"></i>
              <input
                type="text"
                id="location"
                name="location"
                className={`form-control custom-input ${errors.location ? 'is-invalid' : ''}`}
                placeholder="e.g. New York, NY / Remote"
                value={formData.location}
                onChange={handleChange}
              />
            </div>
            {errors.location && (
              <div className="text-danger small mt-1 d-flex align-items-center gap-1">
                <i className="bi bi-exclamation-circle"></i>
                {errors.location}
              </div>
            )}
          </div>

          {/* Field 4: Salary */}
          <div className="mb-4">
            <label htmlFor="salary" className="form-label fw-semibold text-secondary">
              Salary (USD / Annual) <span className="text-danger">*</span>
            </label>
            <div className="input-icon-wrapper">
              <i className="bi bi-currency-dollar input-icon"></i>
              <input
                type="number"
                id="salary"
                name="salary"
                min="0"
                step="500"
                className={`form-control custom-input ${errors.salary ? 'is-invalid' : ''}`}
                placeholder="e.g. 85000"
                value={formData.salary}
                onChange={handleChange}
              />
            </div>
            {errors.salary && (
              <div className="text-danger small mt-1 d-flex align-items-center gap-1">
                <i className="bi bi-exclamation-circle"></i>
                {errors.salary}
              </div>
            )}
          </div>

          {/* Form Actions */}
          <div className="d-flex flex-column flex-sm-row gap-3 pt-3 border-top">
            <button
              type="submit"
              className="btn btn-primary-gradient flex-grow-1 d-flex align-items-center justify-content-center gap-2"
            >
              <i className="bi bi-check2-circle fs-5"></i>
              Submit Employee Details
            </button>

            <button
              type="button"
              className="btn btn-outline-secondary px-4 d-flex align-items-center justify-content-center gap-2"
              onClick={handleReset}
            >
              <i className="bi bi-arrow-counterclockwise"></i>
              Reset
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default EmployeeForm;
