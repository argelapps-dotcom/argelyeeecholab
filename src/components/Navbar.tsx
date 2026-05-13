import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Music, Youtube, Facebook, Instagram } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { clsx } from 'clsx';

export const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'Music', path: '/music' },
    { name: 'About', path: '/about' },
  ];

  const socialLinks = [
    { icon: <Youtube size={20} />, url: 'https://youtube.com', label: 'YouTube' },
    { icon: <Facebook size={20} />, url: 'https://facebook.com', label: 'Facebook' },
    { icon: <Instagram size={20} />, url: 'https://instagram.com', label: 'Instagram' },
  ];

  return (
    <header 
      className={clsx(
        'fixed top-0 left-0 right-0 z-50 transition-all duration-300',
        isScrolled ? 'bg-dark-900/90 backdrop-blur-md border-b border-white/10 py-4' : 'bg-transparent py-6'
      )}
    >
      <div className="container mx-auto px-6 flex items-center justify-between">
        <Link to="/" className="flex items-center gap-2 group">
          <div className="w-10 h-10 rounded-full bg-brand flex items-center justify-center group-hover:bg-brand-accent transition-colors">
            <Music className="text-white" size={24} />
          </div>
          <span className="font-display font-bold text-xl tracking-wider uppercase text-white">
            Echo Waves
          </span>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8">
          <ul className="flex items-center gap-8">
            {navLinks.map((link) => (
              <li key={link.name}>
                <Link 
                  to={link.path}
                  className={clsx(
                    'text-sm font-medium uppercase tracking-widest transition-colors hover:text-brand-accent',
                    location.pathname === link.path ? 'text-brand-accent' : 'text-gray-300'
                  )}
                >
                  {link.name}
                </Link>
              </li>
            ))}
          </ul>
          <div className="h-6 w-px bg-white/20"></div>
          <div className="flex items-center gap-4">
            {socialLinks.map((social) => (
              <a 
                key={social.label}
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white transition-colors"
                aria-label={social.label}
              >
                {social.icon}
              </a>
            ))}
          </div>
        </nav>

        {/* Mobile Menu Toggle */}
        <button 
          className="md:hidden text-white"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Nav */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="absolute top-full left-0 right-0 bg-dark-900 border-b border-white/10 p-6 md:hidden"
          >
            <ul className="flex flex-col gap-6">
              {navLinks.map((link) => (
                <li key={link.name}>
                  <Link 
                    to={link.path}
                    onClick={() => setIsMobileMenuOpen(false)}
                    className={clsx(
                      'text-lg font-medium uppercase tracking-widest block',
                      location.pathname === link.path ? 'text-brand-accent' : 'text-gray-300'
                    )}
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
            <div className="mt-8 pt-8 border-t border-white/10 flex items-center gap-6">
              {socialLinks.map((social) => (
                <a 
                  key={social.label}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};