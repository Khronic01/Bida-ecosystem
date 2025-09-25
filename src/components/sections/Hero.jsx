
import React, { useState, useEffect, useRef } from "react";
import { motion, useScroll, useTransform, useSpring, useMotionValue } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight, Sparkles, Zap, Shield, Play, Pause, Volume2, VolumeX, X } from "lucide-react";
import { Link } from "react-router-dom";
import { createPageUrl } from "@/utils";

export default function Hero() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(false);
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"]
  });

  const y = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

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
    hidden: { opacity: 0, y: 50, rotateX: -90 },
    visible: { 
      opacity: 1, 
      y: 0,
      rotateX: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut"
      }
    }
  };

  const title = "BIDA";

  // Typewriter state (looping)
  const [typedText, setTypedText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const [typingIndex, setTypingIndex] = useState(0);

  useEffect(() => {
    const typeSpeedMs = isDeleting ? 80 : 120;
    const endPauseMs = 1200;
    const startPauseMs = 400;

    let timer;

    if (!isDeleting && typingIndex === 0 && typedText.length === 0) {
      // initial small delay before typing starts
      timer = setTimeout(() => {
        setTypedText(title[0] ?? "");
        setTypingIndex(1);
      }, startPauseMs);
      return () => clearTimeout(timer);
    }

    if (!isDeleting) {
      if (typingIndex <= title.length) {
        timer = setTimeout(() => {
          setTypedText(title.slice(0, typingIndex));
          setTypingIndex(typingIndex + 1);
        }, typeSpeedMs);
      } else {
        // finished typing, pause then start deleting
        timer = setTimeout(() => {
          setIsDeleting(true);
          setTypingIndex(title.length - 1);
        }, endPauseMs);
      }
    } else {
      if (typingIndex >= 0) {
        timer = setTimeout(() => {
          setTypedText(title.slice(0, typingIndex));
          setTypingIndex(typingIndex - 1);
        }, typeSpeedMs);
      } else {
        // finished deleting, restart
        timer = setTimeout(() => {
          setIsDeleting(false);
          setTypingIndex(1);
          setTypedText(title.slice(0, 1));
        }, startPauseMs);
      }
    }

    return () => clearTimeout(timer);
  }, [title, typedText, typingIndex, isDeleting]);

  const handleGetToken = () => {
    alert("Token purchase functionality coming soon!");
  };

  const togglePlay = () => setIsPlaying(!isPlaying);
  const toggleMute = () => setIsMuted(!isMuted);

  return (
    <section 
      ref={containerRef}
      id="hero" 
      className="pt-10 pb-20 md:py-20 px-4 sm:px-6 text-center relative overflow-hidden min-h-screen flex items-start md:items-center"
      style={{ perspective: "1000px" }}
    >
      {/* Advanced Background Elements */}
      <div className="absolute inset-0 pointer-events-none">
        {/* Interactive Mouse Follower */}
        <motion.div
          className="absolute w-96 h-96 bg-gradient-to-r from-fuchsia-500/10 to-purple-500/10 rounded-full blur-3xl"
          animate={{
            x: mousePosition.x - 200,
            y: mousePosition.y - 200,
          }}
          transition={{
            type: "spring",
            stiffness: 50,
            damping: 15
          }}
        />

        {/* Enhanced Floating Particles */}
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 md:w-2 md:h-2 bg-gradient-to-r from-fuchsia-400 to-purple-400 rounded-full opacity-20"
            style={{
              x: Math.random() * (typeof window !== 'undefined' ? window.innerWidth : 1200),
              y: Math.random() * (typeof window !== 'undefined' ? window.innerHeight : 800),
            }}
            animate={{
              opacity: [0.1, 0.4, 0.1],
              scale: [0.5, 1.2, 0.5],
              y: [0, -20, 0]
            }}
            transition={{
              duration: 6 + Math.random() * 4,
              repeat: Infinity,
              ease: "easeInOut",
              delay: Math.random() * 2
            }}
          />
        ))}

        {/* 3D Geometric Shapes */}
        <motion.div
          className="absolute top-20 left-20 w-16 h-16 md:w-32 md:h-32 border-2 border-purple-500/20 rounded-lg"
          animate={{ 
            rotate: 360,
            rotateX: [0, 180, 360],
            rotateY: [0, 180, 360]
          }}
          transition={{ 
            duration: 60, 
            repeat: Infinity, 
            ease: "linear" 
          }}
          style={{ transformStyle: "preserve-3d" }}
        />
        <motion.div
          className="absolute bottom-20 right-20 w-12 h-12 md:w-24 md:h-24 border-2 border-fuchsia-500/20 rounded-full"
          animate={{ 
            rotate: -360,
            scale: [1, 1.2, 1]
          }}
          transition={{ 
            duration: 45, 
            repeat: Infinity, 
            ease: "linear" 
          }}
        />

        {/* Animated Grid */}
        <motion.div
          className="absolute inset-0 opacity-5"
          animate={{
            backgroundImage: [
              "radial-gradient(circle at 20% 80%, rgba(192, 38, 211, 0.1) 0%, transparent 50%)",
              "radial-gradient(circle at 80% 20%, rgba(168, 85, 247, 0.1) 0%, transparent 50%)",
              "radial-gradient(circle at 40% 40%, rgba(219, 39, 119, 0.1) 0%, transparent 50%)",
            ]
          }}
          transition={{ duration: 20, repeat: Infinity, ease: "easeInOut" }}
        />
      </div>

      <motion.div 
        className="max-w-7xl mx-auto z-10 relative"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        style={{ y, opacity }}
      >
        {/* Interactive Media Controls */}
        <motion.div
          className="absolute top-4 right-4 flex gap-2 z-20"
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 1 }}
        >
          <motion.button
            onClick={togglePlay}
            className="w-10 h-10 bg-black/50 backdrop-blur-sm border border-purple-500/30 rounded-full flex items-center justify-center text-white hover:bg-purple-500/20 transition-colors"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            {isPlaying ? <Pause className="w-4 h-4" /> : <Play className="w-4 h-4" />}
          </motion.button>
          <motion.button
            onClick={toggleMute}
            className="w-10 h-10 bg-black/50 backdrop-blur-sm border border-purple-500/30 rounded-full flex items-center justify-center text-white hover:bg-purple-500/20 transition-colors"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            {isMuted ? <VolumeX className="w-4 h-4" /> : <Volume2 className="w-4 h-4" />}
          </motion.button>
        </motion.div>

        {/* Main Heading with 3D Animation */}
        <motion.div
          variants={itemVariants}
          className="relative mb-6 md:mb-8"
        >
          <motion.h1 
            className="text-4xl sm:text-6xl md:text-8xl font-bold tracking-wider leading-tight relative"
            style={{ transformStyle: "preserve-3d" }}
          >
            {/* Reserve space to prevent layout shifts */}
            <div className="relative inline-block">
              <div className="invisible">
                <span className="text-transparent bg-gradient-to-r from-fuchsia-500 via-purple-500 to-fuchsia-400 bg-clip-text">
                  {title}
                </span>
              </div>
              <div className="absolute inset-0 flex justify-center">
                <motion.div className="flex justify-center flex-wrap gap-2 md:gap-4">
                  {(typedText.length ? typedText : "").split('').map((char, index) => (
                    <motion.span
                      key={index}
                      className="inline-block text-transparent bg-gradient-to-r from-fuchsia-500 via-purple-500 to-fuchsia-400 bg-clip-text relative"
                      variants={letterVariants}
                      initial="hidden"
                      animate="visible"
                      transition={{ delay: index * 0.1 }}
                      whileHover={{ 
                        scale: 1.2,
                        rotateY: 15,
                        rotateX: 15,
                        transition: { duration: 0.3 }
                      }}
                      style={{ transformStyle: "preserve-3d" }}
                    >
                      {char === ' ' ? '\u00A0' : char}
                      <motion.span
                        className="absolute inset-0 text-transparent bg-gradient-to-r from-fuchsia-500/20 via-purple-500/20 to-fuchsia-400/20 bg-clip-text blur-sm"
                        initial={{ opacity: 0, z: -10 }}
                        whileHover={{ opacity: 1, z: -20 }}
                        transition={{ duration: 0.3 }}
                      >
                        {char === ' ' ? '\u00A0' : char}
                      </motion.span>
                    </motion.span>
                  ))}
                  {/* blinking caret with fixed height to avoid line jump */}
                  <span className="inline-block w-0.5 h-[1.6rem] sm:h-[2.2rem] md:h-[3rem] bg-white ml-1 align-middle animate-pulse" aria-hidden="true" />
                </motion.div>
              </div>
            </div>
          </motion.h1>
          
          {/* Animated Icons */}
          <motion.div 
            className="absolute -top-4 -right-4 hidden md:block"
            animate={{ 
              rotate: 360,
              scale: [1, 1.2, 1]
            }}
            transition={{ 
              duration: 8, 
              repeat: Infinity, 
              ease: "easeInOut" 
            }}
          >
            <Sparkles className="w-8 h-8 text-fuchsia-400/60" />
          </motion.div>
          <motion.div 
            className="absolute -bottom-2 -left-4 hidden md:block"
            animate={{ 
              rotate: -360,
              y: [0, -10, 0]
            }}
            transition={{ 
              duration: 6, 
              repeat: Infinity, 
              ease: "easeInOut" 
            }}
          >
            <Zap className="w-6 h-6 text-purple-400/60" />
          </motion.div>
        </motion.div>
        
        <motion.h2 
          className="text-xl sm:text-2xl md:text-4xl font-bold mb-8 tracking-wider"
          variants={itemVariants}
        >
          <motion.span 
            className="text-transparent bg-gradient-to-r from-gray-300 to-white bg-clip-text"
            animate={{
              backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"]
            }}
            transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
            style={{ backgroundSize: "200% 200%" }}
          >
            AI-POWERED DECENTRALIZED RWA ECOSYSTEM
          </motion.span>
        </motion.h2>
        
        <motion.p 
          className="text-gray-400 text-base md:text-xl mb-12 max-w-4xl mx-auto leading-relaxed"
          variants={itemVariants}
        >
          <span>
            Revolutionizing real-world asset distribution through blockchain technology and artificial intelligence. 
            Experience transparent, secure, and accessible opportunities across our four powerful rails: 
            <motion.span 
              className="text-fuchsia-400 font-semibold cursor-pointer"
              whileHover={{ scale: 1.1, textShadow: "0 0 10px rgba(236, 72, 153, 0.5)" }}
            > Lottery</motion.span>, 
            <motion.span 
              className="text-purple-400 font-semibold cursor-pointer"
              whileHover={{ scale: 1.1, textShadow: "0 0 10px rgba(168, 85, 247, 0.5)" }}
            > Auction</motion.span>, 
            <motion.span 
              className="text-pink-400 font-semibold cursor-pointer"
              whileHover={{ scale: 1.1, textShadow: "0 0 10px rgba(244, 114, 182, 0.5)" }}
            > Charity</motion.span>, and 
            <motion.span 
              className="text-violet-400 font-semibold cursor-pointer"
              whileHover={{ scale: 1.1, textShadow: "0 0 10px rgba(139, 92, 246, 0.5)" }}
            > Tokenization</motion.span>.
          </span>
        </motion.p>

        {/* Interactive Feature Pills */}
        <motion.div 
          className="flex flex-wrap justify-center gap-2 sm:gap-4 mb-12"
          variants={itemVariants}
        >
          {["AI-Powered", "Decentralized", "Transparent", "Borderless"].map((feature, index) => (
            <motion.div
              key={feature}
              className="px-4 py-2 text-sm sm:px-6 sm:py-2 bg-gradient-to-r from-purple-500/20 to-fuchsia-500/20 border border-purple-500/30 rounded-full backdrop-blur-sm cursor-pointer"
              initial={{ opacity: 0, scale: 0.8, rotateX: -90 }}
              animate={{ opacity: 1, scale: 1, rotateX: 0 }}
              transition={{ delay: 1.5 + index * 0.1 }}
              whileHover={{ 
                scale: 1.1,
                rotateY: 10,
                backgroundColor: "rgba(168, 85, 247, 0.3)",
                boxShadow: "0 10px 30px rgba(168, 85, 247, 0.3)"
              }}
              whileTap={{ scale: 0.95 }}
              style={{ transformStyle: "preserve-3d" }}
            >
              <span className="text-white font-semibold">{feature}</span>
            </motion.div>
          ))}
        </motion.div>

        {/* Enhanced Action Buttons */}
        <motion.div 
          className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center items-center"
          variants={itemVariants}
        >
          <motion.div 
            whileHover={{ scale: 1.05, y: -5 }} 
            whileTap={{ scale: 0.95 }}
            className="relative group w-full sm:w-auto"
          >
            <motion.div 
              className="absolute -inset-0.5 bg-gradient-to-r from-purple-600 to-fuchsia-600 rounded-lg blur opacity-30 group-hover:opacity-70 transition duration-500"
              animate={{
                background: [
                  "linear-gradient(45deg, rgba(168, 85, 247, 0.3), rgba(236, 72, 153, 0.3))",
                  "linear-gradient(45deg, rgba(236, 72, 153, 0.3), rgba(168, 85, 247, 0.3))",
                  "linear-gradient(45deg, rgba(168, 85, 247, 0.3), rgba(236, 72, 153, 0.3))"
                ]
              }}
              transition={{ duration: 3, repeat: Infinity }}
            />
            <Link to={createPageUrl("Ecosystem")}>
              <Button 
                variant="outline" 
                className="relative bg-black/80 backdrop-blur-sm border-2 border-purple-500 text-purple-400 hover:bg-purple-500 hover:text-white px-8 py-4 w-full text-base sm:text-lg font-semibold tracking-wide transition-all duration-300 group"
              >
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-purple-500/10 to-fuchsia-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                />
                <Shield className="w-5 h-5 mr-2 relative z-10" />
                <span className="relative z-10">EXPLORE ECOSYSTEM</span>
              </Button>
            </Link>
          </motion.div>
          
          <motion.div 
            whileHover={{ scale: 1.05, y: -5 }} 
            whileTap={{ scale: 0.95 }}
            className="relative group w-full sm:w-auto"
          >
            <motion.div 
              className="absolute -inset-0.5 bg-gradient-to-r from-fuchsia-600 to-purple-600 rounded-lg blur opacity-40 group-hover:opacity-80 transition duration-500"
              animate={{
                background: [
                  "linear-gradient(45deg, rgba(236, 72, 153, 0.4), rgba(168, 85, 247, 0.4))",
                  "linear-gradient(45deg, rgba(168, 85, 247, 0.4), rgba(236, 72, 153, 0.4))",
                  "linear-gradient(45deg, rgba(236, 72, 153, 0.4), rgba(168, 85, 247, 0.4))"
                ]
              }}
              transition={{ duration: 2, repeat: Infinity }}
            />
            <Button 
              onClick={handleGetToken}
              className="relative bg-gradient-to-r from-fuchsia-500 to-purple-600 text-white hover:from-fuchsia-600 hover:to-purple-700 px-8 py-4 w-full text-base sm:text-lg font-semibold tracking-wide transition-all duration-300 flex items-center justify-center gap-2 shadow-lg shadow-fuchsia-500/25 group"
            >
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-white/10 to-white/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
              />
              <span className="relative z-10">GET $BIDA TOKEN</span>
              <motion.div 
                className="relative z-10"
                animate={{ x: [0, 5, 0] }}
                transition={{ duration: 2, repeat: Infinity }}
              >
                <ArrowRight className="w-5 h-5" />
              </motion.div>
            </Button>
          </motion.div>

          {/* Follow on X Button */}
          <motion.div 
            whileHover={{ scale: 1.05, y: -5 }} 
            whileTap={{ scale: 0.95 }}
            className="relative group w-full sm:w-auto"
          >
            <a href="https://x.com/bidauctiontoken" target="_blank" rel="noopener noreferrer">
              <Button 
                variant="outline"
                className="relative bg-black/70 backdrop-blur-sm border-2 border-white/20 text-white hover:bg-white/10 px-8 py-4 w-full text-base sm:text-lg font-semibold tracking-wide transition-all duration-300 flex items-center justify-center gap-2"
              >
                <X className="w-5 h-5" />
                FOLLOW ON X
              </Button>
            </a>
          </motion.div>
        </motion.div>

        {/* Enhanced Scroll Indicator */}
        <motion.div
          className="absolute -bottom-10 left-1/2 transform -translate-x-1/2 hidden sm:block"
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 3, repeat: Infinity }}
        >
          <motion.div 
            className="w-6 h-10 border-2 border-gray-400 rounded-full flex justify-center cursor-pointer"
            whileHover={{ scale: 1.1 }}
          >
            <motion.div
              className="w-1 h-3 bg-gradient-to-b from-fuchsia-400 to-purple-400 rounded-full mt-2"
              animate={{ y: [0, 8, 0] }}
              transition={{ duration: 3, repeat: Infinity }}
            />
          </motion.div>
        </motion.div>
      </motion.div>
    </section>
  );
}
