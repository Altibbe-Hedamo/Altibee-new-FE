import React from 'react';
import { motion } from 'framer-motion';

const Footer = () => {
  return (
    <footer className="bg-neutral-900 text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-4 gap-8">
          <div>
            <h3 className="heading-sub text-2xl mb-4 text-white">XDC</h3>
            <p className="footer-text leading-relaxed">
              Enterprise-grade blockchain protocol for trade finance and real-world asset tokenization.
            </p>
          </div>
          
          <div>
            <h4 className="heading-sub text-lg mb-4 text-white">Network</h4>
            <ul className="space-y-2">
              <li><a href="#" className="footer-text hover:text-white transition-colors">Mainnet</a></li>
              <li><a href="#" className="footer-text hover:text-white transition-colors">Testnet</a></li>
              <li><a href="#" className="footer-text hover:text-white transition-colors">Explorer</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="heading-sub text-lg mb-4 text-white">Developers</h4>
            <ul className="space-y-2">
              <li><a href="#" className="footer-text hover:text-white transition-colors">Documentation</a></li>
              <li><a href="#" className="footer-text hover:text-white transition-colors">GitHub</a></li>
              <li><a href="#" className="footer-text hover:text-white transition-colors">Tools</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="heading-sub text-lg mb-4 text-white">Community</h4>
            <ul className="space-y-2">
              <li><a href="#" className="footer-text hover:text-white transition-colors">Discord</a></li>
              <li><a href="#" className="footer-text hover:text-white transition-colors">Twitter</a></li>
              <li><a href="#" className="footer-text hover:text-white transition-colors">Telegram</a></li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-neutral-800 mt-8 pt-8 text-center">
          <p className="footer-text">&copy; 2025 XDC Network. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;