import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import HomePage from './components/HomePage';
import Section1 from './components/Section1';
import Section2 from './components/Section2';
import Section3 from './components/Section3';
import Section4 from './components/Section4';
import Section5 from './components/Section5';
import Section6 from './components/Section6';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/section-1" element={<Section1 />} />
        <Route path="/section-2" element={<Section2 />} />
        <Route path="/section-3" element={<Section3 />} />
        <Route path="/section-4" element={<Section4 />} />
        <Route path="/section-5" element={<Section5 />} />
        <Route path="/section-6" element={<Section6 />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </Router>
  );
}

export default App;