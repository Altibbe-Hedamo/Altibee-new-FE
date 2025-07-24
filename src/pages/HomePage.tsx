import React from 'react';
import Hero from '../components/Hero';
import GetStarted from '../components/GetStarted';
import PoweredBy from '../components/PoweredBy';
import NewsHighlight from '../components/NewsHighlight';
import WhatsHappening from '../components/WhatsHappening';

const HomePage = () => (
  <div className="font-mono">

    <Hero />
    <GetStarted />
    <PoweredBy />
    <NewsHighlight />
    <WhatsHappening />
  </div>
);

export default HomePage;