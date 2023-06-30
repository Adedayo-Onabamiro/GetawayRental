import { Navigation } from '../src/Components/General/Navigation/Navigation';
import { Home } from './Pages/Home';
import { About } from './Pages/About';
import { VehicleModels } from './Pages/VehicleModels';
import { TestimonialPage } from './Pages/TestimonialPage';
import { OurTeam } from './Pages/OurTeam';
import { Contact } from './Pages/Contact';
import { PageLoader } from './Components/General/PageLoader/PageLoader';
import './index.css';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import { useState, useEffect } from 'react';
function App() {
  const [isLoading, setIsLoading] = useState(true);

  // Simulate a loading delay using useEffect
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2000); // Change the duration to match your desired loading time

    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      {isLoading ? (
        <PageLoader/>
      ) : (
        <Router>
          <Navigation />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/vehicleModels" element={<VehicleModels />} />
            <Route path="/testimonialPage" element={<TestimonialPage />} />
            <Route path="/ourteam" element={<OurTeam />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/*" element={<Navigate to="/" />} />
          </Routes>
        </Router>
      )}
    </>
  );
}

export default App;

