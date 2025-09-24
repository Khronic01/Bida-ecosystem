
import React from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight, Sparkles, Zap, Shield } from "lucide-react";
import { Link } from "react-router-dom";
import { createPageUrl } from "@/utils";

export default function Hero() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { y: 50, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.8,
        ease: "easeOut"
      }
    }
  };

  const letterVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: {
        duration: 0.5
      }
    }
  };

  const title = "BIDA";

  const handleGetToken = () => {
    alert("Token purchase functionality coming soon!");
  };

  return (
    <section id="hero" className="py-20 px-4 sm:px-6 text-center relative overflow-hidden min-h-screen flex items-center">
      {/* Simplified Background Elements */}
      <div className="absolute inset-0 pointer-events-none">
        {/* Reduced Floating Particles */}
        {[...Array(8)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 md:w-2 md:h-2 bg-gradient-to-r from-fuchsia-400 to-purple-400 rounded-full opacity-10"
            style={{
              x: Math.random() * window.innerWidth,
              y: Math.random() * window.innerHeight,
            }}
            animate={{
              opacity: [0.1, 0.3, 0.1],
            }}
            transition={{
              duration: 8,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          />
        ))}

        {/* Subtle Geometric Shapes */}
        <motion.div
          className="absolute top-20 left-20 w-16 h-16 md:w-32 md:h-32 border-2 border-purple-500/10 rounded-lg"
          animate={{ rotate: 360 }}
          transition={{ duration: 60, repeat: Infinity, ease: "linear" }}
        />
        <motion.div
          className="absolute bottom-20 right-20 w-12 h-12 md:w-24 md:h-24 border-2 border-fuchsia-500/10 rounded-full"
          animate={{ rotate: -360 }}
          transition={{ duration: 45, repeat: Infinity, ease: "linear" }}
        />
      </div>

      <motion.div 
        className="max-w-7xl mx-auto z-10 relative"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {/* Main Heading with Advanced Animation */}
        <motion.div
          variants={itemVariants}
          className="relative mb-6 md:mb-8"
        >
          <motion.h1 
            className="text-4xl sm:text-6xl md:text-7xl font-bold tracking-wider leading-tight relative"
          >
            <motion.div className="flex justify-center flex-wrap gap-2 md:gap-4">
              {title.split('').map((char, index) => (
                <motion.span
                  key={index}
                  className="inline-block text-transparent bg-gradient-to-r from-fuchsia-500 via-purple-500 to-fuchsia-400 bg-clip-text"
                  variants={letterVariants}
                  initial="hidden"
                  animate="visible"
                  transition={{ delay: index * 0.05 }}
                  whileHover={{ 
                    scale: 1.1,
                    transition: { duration: 0.2 }
                  }}
                >
                  {char === ' ' ? '\u00A0' : char}
                </motion.span>
              ))}
            </motion.div>
          </motion.h1>
          
          {/* Static Icons */}
          <div className="absolute -top-4 -right-4 hidden md:block">
            <Sparkles className="w-8 h-8 text-fuchsia-400/60" />
          </div>
          <div className="absolute -bottom-2 -left-4 hidden md:block">
            <Zap className="w-6 h-6 text-purple-400/60" />
          </div>
        </motion.div>
        
        <motion.h2 
          className="text-xl sm:text-2xl md:text-4xl font-bold mb-8 tracking-wider"
          variants={itemVariants}
        >
          <span className="text-transparent bg-gradient-to-r from-gray-300 to-white bg-clip-text">
            AI-POWERED DECENTRALIZED RWA ECOSYSTEM
          </span>
        </motion.h2>
        
        <motion.p 
          className="text-gray-400 text-base md:text-xl mb-12 max-w-4xl mx-auto leading-relaxed"
          variants={itemVariants}
        >
          <span>
            Revolutionizing real-world asset distribution through blockchain technology and artificial intelligence. 
            Experience transparent, secure, and accessible opportunities across our four powerful rails: 
            <span className="text-fuchsia-400 font-semibold"> Lottery</span>, 
            <span className="text-purple-400 font-semibold"> Auction</span>, 
            <span className="text-pink-400 font-semibold"> Charity</span>, and 
            <span className="text-violet-400 font-semibold"> Tokenization</span>.
          </span>
        </motion.p>

        {/* Feature Pills */}
        <motion.div 
          className="flex flex-wrap justify-center gap-2 sm:gap-4 mb-12"
          variants={itemVariants}
        >
          {["AI-Powered", "Decentralized", "Transparent", "Borderless"].map((feature, index) => (
            <motion.div
              key={feature}
              className="px-4 py-2 text-sm sm:px-6 sm:py-2 bg-gradient-to-r from-purple-500/20 to-fuchsia-500/20 border border-purple-500/30 rounded-full backdrop-blur-sm"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 1.5 + index * 0.1 }}
              whileHover={{ 
                scale: 1.05,
                backgroundColor: "rgba(168, 85, 247, 0.3)",
              }}
            >
              <span className="text-white font-semibold">{feature}</span>
            </motion.div>
          ))}
        </motion.div>

        {/* Action Buttons */}
        <motion.div 
          className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center items-center"
          variants={itemVariants}
        >
          <motion.div 
            whileHover={{ scale: 1.02, y: -2 }} 
            whileTap={{ scale: 0.98 }}
            className="relative group w-full sm:w-auto"
          >
            <div className="absolute -inset-0.5 bg-gradient-to-r from-purple-600 to-fuchsia-600 rounded-lg blur opacity-30 group-hover:opacity-50 transition duration-500"></div>
            <Link to={createPageUrl("Ecosystem")}>
              <Button 
                variant="outline" 
                className="relative bg-black border-2 border-purple-500 text-purple-400 hover:bg-purple-500 hover:text-white px-8 py-3 w-full text-base sm:text-lg font-semibold tracking-wide transition-all duration-300"
              >
                <Shield className="w-5 h-5 mr-2" />
                EXPLORE ECOSYSTEM
              </Button>
            </Link>
          </motion.div>
          
          <motion.div 
            whileHover={{ scale: 1.02, y: -2 }} 
            whileTap={{ scale: 0.98 }}
            className="relative group w-full sm:w-auto"
          >
            <div className="absolute -inset-0.5 bg-gradient-to-r from-fuchsia-600 to-purple-600 rounded-lg blur opacity-30 group-hover:opacity-50 transition duration-500"></div>
            <Button 
              onClick={handleGetToken}
              className="relative bg-gradient-to-r from-fuchsia-500 to-purple-600 text-white hover:from-fuchsia-600 hover:to-purple-700 px-8 py-3 w-full text-base sm:text-lg font-semibold tracking-wide transition-all duration-300 flex items-center justify-center gap-2 shadow-lg shadow-fuchsia-500/25"
            >
              GET $BIDA TOKEN
              <ArrowRight className="w-5 h-5" />
            </Button>
          </motion.div>
        </motion.div>

        {/* Scroll Indicator */}
        <motion.div
          className="absolute -bottom-10 left-1/2 transform -translate-x-1/2 hidden sm:block"
          animate={{ y: [0, 5, 0] }}
          transition={{ duration: 3, repeat: Infinity }}
        >
          <div className="w-6 h-10 border-2 border-gray-400 rounded-full flex justify-center">
            <motion.div
              className="w-1 h-3 bg-gradient-to-b from-fuchsia-400 to-purple-400 rounded-full mt-2"
              animate={{ y: [0, 6, 0] }}
              transition={{ duration: 3, repeat: Infinity }}
            />
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
}
