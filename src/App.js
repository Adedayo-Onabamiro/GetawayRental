import { Navigation } from '../src/Components/General/Navigation/Navigation';
import { Home } from './Pages/Home';
import { About } from './Pages/About';
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
          <Route path="/*" element={<Navigate to="/" />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
