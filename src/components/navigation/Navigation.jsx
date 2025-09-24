import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { createPageUrl } from "@/utils";
import { X } from "lucide-react";

export default function Navigation({ currentPageName }) {
  const [scrolled, setScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    
    // Lock body scroll when menu is open
    if (isMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }

    return () => {
      window.removeEventListener('scroll', handleScroll);
      document.body.style.overflow = 'unset'; // Cleanup on component unmount
    };
  }, [isMenuOpen]);

  const navItems = [
    { name: "HOME", page: "Home" },
    { name: "ECOSYSTEM", page: "Ecosystem" },
    { name: "TOKENOMICS", page: "Tokenomics" }, 
    { name: "ROADMAP", page: "Roadmap" },
    { name: "GOVERNANCE", page: "Governance" }
  ];

  const mobileMenuVariants = {
    hidden: { x: "100%", opacity: 0.5 },
    visible: { x: 0, opacity: 1, transition: { type: "spring", stiffness: 120, damping: 20 } },
    exit: { x: "100%", opacity: 0.5, transition: { duration: 0.3 } }
  };

  const mobileLinkVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  };

  return (
    <>
      <motion.nav 
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled ? 'bg-[#0D052B]/95 backdrop-blur-lg shadow-2xl' : 'bg-[#0D052B]/80 backdrop-blur-md'
        } border-b border-purple-500/30`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-4">
          <div className="flex items-center justify-between">
            {/* Animated Logo */}
            <Link to={createPageUrl("Home")} className="flex items-center gap-2 md:gap-4">
              <motion.img 
                src="https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/68d127ecb3377c13bc4c78d3/6ed19d091_WhatsAppImage2025-09-23at174716_4273e72e.jpg"
                alt="BIDA Logo"
                className="w-8 h-8 md:w-10 md:h-10 object-contain"
                whileHover={{ scale: 1.1, rotate: 10 }}
              />
              <motion.span 
                className="text-white font-bold text-base md:text-xl tracking-wider"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.3 }}
              >
                BIDA
              </motion.span>
            </Link>

            {/* Animated Navigation Links */}
            <div className="hidden md:flex items-center gap-8">
              {navItems.map((item, index) => (
                <motion.div
                  key={item.name}
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4 + index * 0.1 }}
                >
                  <Link to={createPageUrl(item.page)}>
                    <Button 
                      variant="ghost" 
                      className={`font-semibold tracking-wide transition-all duration-300 relative ${
                        currentPageName === item.page
                          ? 'text-fuchsia-400'
                          : 'text-white hover:text-fuchsia-400'
                      }`}
                    >
                      {item.name}
                      {currentPageName === item.page && (
                        <motion.div
                          layoutId="active-nav-item"
                          className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-fuchsia-500 to-purple-500"
                        />
                      )}
                    </Button>
                  </Link>
                </motion.div>
              ))}
            </div>

            {/* Mobile Menu Button */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6 }}
              className="md:hidden z-50"
            >
              <Button variant="ghost" size="icon" className="text-white hover:bg-purple-500/20" onClick={() => setIsMenuOpen(!isMenuOpen)}>
                {isMenuOpen ? (
                  <X className="w-6 h-6" />
                ) : (
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                  </svg>
                )}
              </Button>
            </motion.div>
          </div>
        </div>
      </motion.nav>

      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            variants={mobileMenuVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
            className="fixed inset-0 bg-[#0D052B]/95 backdrop-blur-xl z-40 flex flex-col items-center justify-center md:hidden"
          >
            <motion.div 
              className="flex flex-col items-center gap-10"
              transition={{ staggerChildren: 0.1 }}
            >
              {navItems.map((item) => (
                <motion.div key={item.name} variants={mobileLinkVariants}>
                  <Link 
                    to={createPageUrl(item.page)}
                    onClick={() => setIsMenuOpen(false)}
                  >
                    <Button 
                      variant="ghost" 
                      className={`text-2xl font-bold tracking-wider transition-all duration-300 ${
                        currentPageName === item.page
                          ? 'text-fuchsia-400'
                          : 'text-white hover:text-fuchsia-400'
                      }`}
                    >
                      {item.name}
                    </Button>
                  </Link>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}