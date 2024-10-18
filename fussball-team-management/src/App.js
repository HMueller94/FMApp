import React from 'react';
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import ResponsiveAppBar from './components/navigation/responsiveAppBar';
import Players from './pages//player/player';
import Calender from './pages/calender/calender';
import Home from './pages/home/home';
import Training from './pages/training/training';

function App() {
  return (
    <Router>
      <ResponsiveAppBar></ResponsiveAppBar>
      <div style={{ paddingTop: '64px' }}>
        <Routes>
          <Route path="/home" element={<Home />} />
          <Route path="/players" element={<Players />} />
          <Route path="/training" element={<Training />} />
          <Route path="/calender" element={<Calender />} />
        </Routes>
      </div>
    </Router>
  );
}
  
export default App;

