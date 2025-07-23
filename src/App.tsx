import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import GetStarted from './components/GetStarted';
import PoweredBy from './components/PoweredBy';
import NewsHighlight from './components/NewsHighlight';
import WhatsHappening from './components/WhatsHappening';
import Footer from './components/Footer';
import Community from './pages/Community';
import NewsInsights from './pages/NewsInsights';
import XDCWeekly from './pages/XDCWeekly';
import Ecosystem from './pages/Ecosystem';
import About from './pages/About';

const HomePage = () => (
  <>
    <Hero />
    <GetStarted />
    <PoweredBy />
    <NewsHighlight />
    <WhatsHappening />
  </>
);

function App() {
  return (
    <Router>
      <div className="min-h-screen">
        <Navbar />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<About />} />
          <Route path="/community" element={<Community />} />
          <Route path="/news-insights" element={<NewsInsights />} />
          <Route path="/xdc-weekly" element={<XDCWeekly />} />
          <Route path="/ecosystem" element={<Ecosystem />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;