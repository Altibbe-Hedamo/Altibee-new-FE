import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import HomePage from './pages/HomePage';
import BlogPage from './pages/BlogPage';
import BlogPostPage from './components/BlogPostPage';
import HedamoPage from './pages/HedamoPage';
import ContactPage from './components/ContactPage';
import About from './pages/About';
import Community from './pages/Community';
import NewsInsights from './pages/NewsInsights';
import XDCWeekly from './pages/XDCWeekly';
import Ecosystem from './pages/Ecosystem';
import './index.css';  // <- make sure this is imported
import PageWipe from './components/common/PageWipe';

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
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<About />} />
        <Route path="/community" element={<Community />} />
        <Route path="/news-insights" element={<NewsInsights />} />
        <Route path="/xdc-weekly" element={<XDCWeekly />} />
        <Route path="/ecosystem" element={<Ecosystem />} />
        <Route path="/blog" element={<BlogPage />} />
        <Route path="/blog/:slug" element={<BlogPostPage />} />
        <Route path="/hedamo" element={<HedamoPage />} />
        <Route path="/contact" element={<ContactPage />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;