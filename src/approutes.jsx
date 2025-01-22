import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import App from './App'; // App as your main/home component
import Donate from './donate'; // Donate page component
import Support from './support'; // Support page component
import DonateForm from './pages/donateform';

function AppRoutes() {
  return (
    <Router>
      <Routes>
        {/* Define the main route for the App component */}
        <Route path="/" element={<App />} />
        {/* Define routes for Donate and Support pages */}
        <Route path="/donate" element={<Donate />} />
        <Route path="/support" element={<Support />} />
        <Route path="/donateform" element={<DonateForm />} />
      </Routes>
    </Router>
  );
}

export default AppRoutes;
