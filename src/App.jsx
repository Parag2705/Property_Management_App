import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navigation from './components/Navigation';
import Dashboard from './pages/Dashboard';
import AllProperties from './pages/AllProperties';
import MeetingMinutes from './pages/MeetingMinutes';
import MapView from './pages/MapView';

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-stone-50">
        <Navigation />
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/properties" element={<AllProperties />} />
          <Route path="/meetings" element={<MeetingMinutes />} />
          <Route path="/map" element={<MapView />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
