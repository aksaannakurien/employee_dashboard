import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Dashboard from './pages/Dashboard';
import EmployeeForm from './pages/EmployeeForm';
import NotFound from './pages/NotFound';

function App() {
  return (
    <Router>
      <div className="d-flex flex-column min-vh-100">
        {/* Navigation Bar with Home and Employee Form links */}
        <Navbar />

        {/* Dynamic Route Content */}
        <main className="flex-grow-1 d-flex flex-column">
          <Routes>
            {/* Home / Employee Dashboard Route */}
            <Route path="/" element={<Dashboard />} />
            <Route path="/dashboard" element={<Dashboard />} />

            {/* Employee Form Route */}
            <Route path="/employee-form" element={<EmployeeForm />} />

            {/* Fallback 404 Route */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </main>

        {/* Global Footer */}
        <Footer />
      </div>
    </Router>
  );
}

export default App;
