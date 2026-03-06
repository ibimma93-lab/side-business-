import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

const navLinks = [
  { label: "About", href: "#about" },
  { label: "Services", href: "#services" },
  { label: "Impact", href: "#impact" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.header 
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? "py-4" : "py-6"}`}
    >
      <nav className={`max-w-7xl mx-auto px-4 md:px-12 flex justify-between items-center transition-all duration-300 ${isScrolled ? "bg-white/70 backdrop-blur-md shadow-lg border border-white/20 rounded-2xl mx-4 md:mx-auto px-6 py-3" : ""}`}>
        <a href="#" className="text-2xl font-serif font-bold tracking-tight text-gray-900 relative group">
          ANNMARIE PINKNEY <span className="text-sm font-sans font-normal text-gray-500 ml-1">PMP</span>
          <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gray-900 transition-all duration-300 group-hover:w-full"></span>
        </a>
        
        <div className="hidden md:flex space-x-8">
          {navLinks.map((link) => (
            <a key={link.label} href={link.href} className="text-sm uppercase tracking-widest text-gray-600 hover:text-gray-900 transition-colors relative group">
              {link.label}
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gray-900 transition-all duration-300 group-hover:w-full"></span>
            </a>
          ))}
        </div>

        <button 
          className="md:hidden text-gray-900 focus:outline-none p-2 rounded-lg hover:bg-gray-100/50 transition-colors" 
          onClick={() => setIsOpen(!isOpen)} 
          aria-label="Toggle menu"
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </nav>

      <AnimatePresence>
        {isOpen && (
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.2 }}
            className="absolute top-full left-4 right-4 mt-2 bg-white/90 backdrop-blur-xl border border-white/20 rounded-2xl p-6 md:hidden flex flex-col space-y-4 shadow-xl z-50"
          >
            {navLinks.map((link) => (
              <a 
                key={link.label} 
                href={link.href} 
                className="text-lg font-medium text-gray-900 hover:text-gray-600 transition-colors p-2 rounded-lg hover:bg-gray-50/50" 
                onClick={() => setIsOpen(false)}
              >
                {link.label}
              </a>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
