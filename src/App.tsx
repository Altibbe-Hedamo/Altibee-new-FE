import { useEffect, useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import './index.css';  
import PageWipe from './components/common/PageWipe';
import HomePage from './pages/v2/HomePage';
import NetworkPage from './pages/v2/NetworkPage';
import BuildPage from './pages/v2/BuildPage';
import ResourcesPage from './pages/v2/ResourcesPage';
import CommunityPage from './pages/v2/CommunityPage';
import FooterWithHoverWipe from './components/common/FooterWipe';

function App() {
  const [showWipe, setShowWipe] = useState(true);

  useEffect(() => {
    // Remove the wipe node after animation so it never blocks again
    const t = setTimeout(() => setShowWipe(false), 800);
    return () => clearTimeout(t);
  }, []);

  return (
    <Router>
      <PageWipe />
      {/* <Navbar /> */}
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/network" element={<NetworkPage />} />
        <Route path="/build" element={<BuildPage />} />
        <Route path="/resources" element={<ResourcesPage />} />
        <Route path="/community" element={<CommunityPage />} />

      </Routes>
      <FooterWithHoverWipe />
    </Router>
  );
}

export default App;