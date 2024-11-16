import { useState, useEffect, useRef } from 'react';
import { Phone, Mail, MessageCircle, Menu, X, Copy, Check } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';

const navItems = [
  { name: 'Accueil', href: 'home' },
  { name: 'Notre Flotte', href: 'fleet' },
  { name: 'Services', href: 'services' },
  { name: 'Contact', href: 'contact' }
];

const PHONE_NUMBER = '06 00 46 42 36';

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const [isPhoneDropdownOpen, setIsPhoneDropdownOpen] = useState(false);
  const [isCopied, setIsCopied] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
      
      // Update active section based on scroll position
      const sections = navItems.map(item => document.getElementById(item.href));
      const scrollPosition = window.scrollY + 100;

      sections.forEach((section) => {
        if (section) {
          const sectionTop = section.offsetTop;
          const sectionHeight = section.clientHeight;
          if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
            setActiveSection(section.id);
          }
        }
      });
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsPhoneDropdownOpen(false);
      }
    }

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const section = document.getElementById(sectionId);
    if (section) {
      const offset = 80; // Header height
      const elementPosition = section.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
    setIsMobileMenuOpen(false);
  };

  const handleCopyClick = async () => {
    try {
      await navigator.clipboard.writeText(PHONE_NUMBER.replace(/\s/g, ''));
      setIsCopied(true);
      setTimeout(() => setIsCopied(false), 2000);
    } catch (err) {
      console.error('Failed to copy text: ', err);
    }
  };

  return (
    <header className={`fixed top-0 w-full z-50 transition-all duration-300 ${
      isScrolled ? 'bg-white/95 backdrop-blur-sm shadow-sm' : 'bg-transparent'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="text-2xl font-bold text-[#013298] cursor-pointer"
            onClick={() => scrollToSection('home')}
          >
            <Link to="/" className="flex items-center">
              <img 
                src="/prestlogo.png"
                alt="Prestige Car Logo" 
                className="h-8 w-auto"
              />
            </Link>
          </motion.div>

          <nav className="hidden md:flex space-x-8">
            {navItems.map((item, index) => (
              <motion.button
                key={item.href}
                onClick={() => scrollToSection(item.href)}
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className={`relative px-3 py-2 transition-colors ${
                  activeSection === item.href ? 'text-[#013298]' : 'text-gray-600 hover:text-[#048FD7]'
                }`}
              >
                {item.name}
                {activeSection === item.href && (
                  <motion.div
                    layoutId="activeSection"
                    className="absolute bottom-0 left-0 right-0 h-0.5 bg-[#013298]"
                    transition={{ type: "spring", stiffness: 380, damping: 30 }}
                  />
                )}
              </motion.button>
            ))}
          </nav>

          <div className="hidden md:flex items-center space-x-4">
            <div className="relative" ref={dropdownRef}>
              <motion.button
                whileHover={{ scale: 1.1 }}
                onClick={() => setIsPhoneDropdownOpen(!isPhoneDropdownOpen)}
                className="flex items-center text-gray-700 hover:text-[#048FD7]"
              >
                <Phone className="h-5 w-5" />
              </motion.button>

              <AnimatePresence>
                {isPhoneDropdownOpen && (
                  <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    className="absolute right-0 mt-2 w-48 rounded-lg bg-white shadow-lg ring-1 ring-black ring-opacity-5 z-50"
                  >
                    <div className="p-4">
                      <p className="text-sm font-medium text-gray-900 mb-2">Téléphone</p>
                      <div className="flex items-center justify-between bg-gray-50 rounded-md p-2">
                        <span className="text-sm text-gray-600">{PHONE_NUMBER}</span>
                        <button
                          onClick={handleCopyClick}
                          className="ml-2 p-1 hover:bg-gray-200 rounded-md transition-colors"
                        >
                          {isCopied ? (
                            <Check className="h-4 w-4 text-green-500" />
                          ) : (
                            <Copy className="h-4 w-4 text-gray-500" />
                          )}
                        </button>
                      </div>
                      {isCopied && (
                        <motion.p
                          initial={{ opacity: 0 }}
                          animate={{ opacity: 1 }}
                          className="text-xs text-green-500 mt-1"
                        >
                          Copié!
                        </motion.p>
                      )}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            <motion.a 
              whileHover={{ scale: 1.1 }}
              href="mailto:contact@prestigecar.ma" 
              className="flex items-center text-gray-700 hover:text-[#048FD7]"
            >
              <Mail className="h-5 w-5" />
            </motion.a>
            <motion.a 
              whileHover={{ scale: 1.05 }}
              href="https://wa.me/212707096730 " 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center bg-[#013298] text-white px-4 py-2 rounded-full hover:bg-[#048FD7] transition-colors"
            >
              <MessageCircle className="h-5 w-5 mr-2" />
              <span>WhatsApp</span>
            </motion.a>
          </div>

          <button 
            className="md:hidden"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X /> : <Menu />}
          </button>
        </div>
      </div>

      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-white border-t"
          >
            <div className="px-4 py-6 space-y-4">
              {navItems.map((item) => (
                <button
                  key={item.href}
                  onClick={() => scrollToSection(item.href)}
                  className={`block w-full text-left py-2 ${
                    activeSection === item.href ? 'text-[#013298]' : 'text-gray-600'
                  }`}
                >
                  {item.name}
                </button>
              ))}
              <div className="flex space-x-4 pt-4">
                <a href="tel:0600464236" className="text-gray-700 hover:text-[#048FD7]">
                  <Phone className="h-5 w-5" />
                </a>
                <a href="mailto:contact@prestigecar.ma" className="text-gray-700 hover:text-[#048FD7]">
                  <Mail className="h-5 w-5" />
                </a>
                <a 
                  href="https://wa.me/212707096730 "
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center text-[#013298] hover:text-[#048FD7]"
                >
                  <MessageCircle className="h-5 w-5" />
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}