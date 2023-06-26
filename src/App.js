import { Navigation } from '../src/Components/General/Navigation/Navigation';
import { Home } from './Pages/Home';
import { About } from './Pages/About';
import { VehicleModels } from './Pages/VehicleModels';
import { TestimonialPage } from './Pages/TestimonialPage';
import { OurTeam } from './Pages/OurTeam';
import { Contact } from './Pages/Contact';

import './index.css';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';

function App() {
  return (
    <>
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
    </>
  );
}

export default App;
