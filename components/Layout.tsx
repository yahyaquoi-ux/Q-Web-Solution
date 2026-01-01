import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Rocket, MessageCircle, MapPin, Mail, Phone } from 'lucide-react';

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsMenuOpen(false);
    window.scrollTo(0, 0);
  }, [location]);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'Services', path: '/services' },
    { name: 'Projects', path: '/projects' },
    { name: 'Pricing', path: '/pricing' },
    { name: 'About', path: '/about' },
    { name: 'Contact', path: '/contact' },
  ];

  return (
    <div className="min-h-screen flex flex-col bg-brand-dark text-gray-100">
      {/* Navigation */}
      <nav 
        className={`fixed w-full z-50 transition-all duration-300 ${
          scrolled ? 'bg-black/90 backdrop-blur-md border-b border-gray-800 py-3' : 'bg-transparent py-5'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center">
            <Link to="/" className="flex items-center space-x-2 group">
              <div className="bg-gradient-to-br from-blue-600 to-brand-accent p-2 rounded-lg group-hover:shadow-lg group-hover:shadow-blue-500/30 transition-all">
                <Rocket className="w-6 h-6 text-white" />
              </div>
              <span className="text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-400">
                Q-Web Solution
              </span>
            </Link>

            {/* Desktop Menu */}
            <div className="hidden md:flex items-center space-x-8">
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  className={`text-sm font-medium transition-colors hover:text-brand-accent ${
                    location.pathname === link.path ? 'text-brand-accent' : 'text-gray-300'
                  }`}
                >
                  {link.name}
                </Link>
              ))}
              <Link 
                to="/contact"
                className="bg-brand-blue hover:bg-blue-700 text-white px-5 py-2 rounded-full text-sm font-semibold transition-all shadow-lg shadow-blue-900/20 hover:shadow-blue-900/40"
              >
                Get Started
              </Link>
            </div>

            {/* Mobile Menu Button */}
            <div className="md:hidden">
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="text-gray-300 hover:text-white focus:outline-none"
              >
                {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu Dropdown */}
        {isMenuOpen && (
          <div className="md:hidden absolute top-full left-0 w-full bg-black/95 backdrop-blur-xl border-b border-gray-800">
            <div className="px-4 pt-2 pb-6 space-y-2">
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  className={`block px-3 py-3 rounded-md text-base font-medium ${
                    location.pathname === link.path 
                      ? 'bg-brand-blue/10 text-brand-accent' 
                      : 'text-gray-300 hover:bg-white/5 hover:text-white'
                  }`}
                >
                  {link.name}
                </Link>
              ))}
              <Link 
                to="/contact"
                className="block mt-4 text-center bg-brand-blue text-white py-3 rounded-lg font-bold"
              >
                Book Consultation
              </Link>
            </div>
          </div>
        )}
      </nav>

      {/* Main Content */}
      <main className="flex-grow pt-20">
        {children}
      </main>

      {/* Footer */}
      <footer className="bg-black border-t border-gray-900 pt-16 pb-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
            <div className="space-y-4">
              <div className="flex items-center space-x-2">
                <Rocket className="w-6 h-6 text-brand-accent" />
                <span className="text-xl font-bold text-white">Q-Web Solution</span>
              </div>
              <p className="text-gray-400 text-sm leading-relaxed">
                Building the digital future for businesses in Liberia. We craft reliable, high-performance websites that drive growth.
              </p>
            </div>

            <div>
              <h3 className="text-white font-semibold mb-4">Services</h3>
              <ul className="space-y-2 text-sm text-gray-400">
                <li><Link to="/services" className="hover:text-brand-accent transition-colors">Web Development</Link></li>
                <li><Link to="/services" className="hover:text-brand-accent transition-colors">E-commerce</Link></li>
                <li><Link to="/services" className="hover:text-brand-accent transition-colors">UI/UX Design</Link></li>
                <li><Link to="/services" className="hover:text-brand-accent transition-colors">SEO Optimization</Link></li>
              </ul>
            </div>

            <div>
              <h3 className="text-white font-semibold mb-4">Company</h3>
              <ul className="space-y-2 text-sm text-gray-400">
                <li><Link to="/about" className="hover:text-brand-accent transition-colors">About Us</Link></li>
                <li><Link to="/projects" className="hover:text-brand-accent transition-colors">Portfolio</Link></li>
                <li><Link to="/pricing" className="hover:text-brand-accent transition-colors">Pricing</Link></li>
                <li><Link to="/contact" className="hover:text-brand-accent transition-colors">Contact</Link></li>
              </ul>
            </div>

            <div>
              <h3 className="text-white font-semibold mb-4">Connect</h3>
              <div className="space-y-3 text-sm text-gray-400">
                <div className="flex items-center space-x-2">
                  <MapPin className="w-4 h-4 text-brand-blue" />
                  <span>Airfield, Sinkor, Monrovia-Liberia</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Mail className="w-4 h-4 text-brand-blue" />
                  <span>yahyaquoi@gmail.com</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Phone className="w-4 h-4 text-brand-blue" />
                  <span>+231-770-025-099</span>
                </div>
              </div>
            </div>
          </div>
          
          <div className="border-t border-gray-900 pt-8 flex flex-col md:flex-row justify-between items-center text-sm text-gray-500">
            <div className="flex flex-col md:flex-row items-center md:space-x-4">
              <p>&copy; {new Date().getFullYear()} Q-Web Solution. All rights reserved.</p>
              <span className="hidden md:inline text-gray-700">|</span>
              <p className="mt-2 md:mt-0 text-brand-blue/80 font-medium">Powered By: Q-Web Solution</p>
            </div>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
              <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
            </div>
          </div>
        </div>
      </footer>

      {/* Floating WhatsApp Button */}
      <a 
        href="https://wa.me/231770025099" 
        target="_blank" 
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 bg-green-500 hover:bg-green-600 text-white p-4 rounded-full shadow-lg shadow-green-900/30 transition-all hover:scale-110 z-50 flex items-center justify-center"
      >
        <MessageCircle className="w-6 h-6" />
      </a>
    </div>
  );
};

export default Layout;