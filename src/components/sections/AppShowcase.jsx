import React, { useState, useRef } from "react";
import { motion, useInView, useSpring, useTransform } from "framer-motion";
import { Zap, Gavel, Heart, Coins, ArrowUpRight, Crown, Users, Play, Pause, Volume2, VolumeX } from "lucide-react";

const PhoneScreen = ({ children, className, isActive = false, onTap }) => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(false);

  return (
    <motion.div 
      className={`aspect-[9/19.5] w-full bg-[#1A103A] border-4 border-gray-800 rounded-[2.5rem] p-4 flex flex-col relative overflow-hidden ${className}`}
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      onClick={onTap}
      style={{ 
        transformStyle: "preserve-3d",
        perspective: "1000px"
      }}
    >
      {/* Phone notch */}
      <div className="absolute top-2 left-1/2 transform -translate-x-1/2 w-20 h-6 bg-black rounded-full z-10" />
      
      {/* Status bar */}
      <div className="flex justify-between items-center text-xs text-white mb-4 mt-6">
        <span>9:41</span>
        <div className="flex items-center gap-1">
          <div className="w-4 h-2 bg-white rounded-sm">
            <div className="w-3/4 h-full bg-green-500 rounded-sm" />
          </div>
          <span>100%</span>
        </div>
      </div>

      {/* Media controls overlay */}
      {isActive && (
        <motion.div
          className="absolute top-16 right-2 flex flex-col gap-2 z-20"
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.5 }}
        >
          <motion.button
            onClick={(e) => {
              e.stopPropagation();
              setIsPlaying(!isPlaying);
            }}
            className="w-8 h-8 bg-black/70 backdrop-blur-sm border border-white/20 rounded-full flex items-center justify-center text-white"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            {isPlaying ? <Pause className="w-3 h-3" /> : <Play className="w-3 h-3" />}
          </motion.button>
          <motion.button
            onClick={(e) => {
              e.stopPropagation();
              setIsMuted(!isMuted);
            }}
            className="w-8 h-8 bg-black/70 backdrop-blur-sm border border-white/20 rounded-full flex items-center justify-center text-white"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            {isMuted ? <VolumeX className="w-3 h-3" /> : <Volume2 className="w-3 h-3" />}
          </motion.button>
        </motion.div>
      )}

      {children}
    </motion.div>
  );
};

export default function AppShowcase() {
  const [activePhone, setActivePhone] = useState(1); // Center phone is active by default
  const containerRef = useRef(null);
  const isInView = useInView(containerRef, { once: true, amount: 0.3 });

  const containerVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.8, staggerChildren: 0.3 }
    }
  };

  const phoneVariants = {
    hidden: { y: 100, opacity: 0, rotate: 5, scale: 0.8 },
    visible: { 
      y: 0, 
      opacity: 1, 
      rotate: 0, 
      scale: 1,
      transition: { 
        duration: 0.8, 
        ease: "easeOut",
        type: "spring",
        stiffness: 100
      } 
    }
  };

  const handlePhoneTap = (index) => {
    setActivePhone(index);
  };

  return (
    <section ref={containerRef} className="py-20 px-6 relative overflow-hidden">
      {/* Enhanced Background */}
      <div className="absolute inset-0 pointer-events-none">
        <motion.div
          className="absolute top-1/3 left-1/3 w-96 h-96 bg-fuchsia-500/5 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.3, 1],
            opacity: [0.2, 0.4, 0.2]
          }}
          transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute bottom-1/3 right-1/3 w-80 h-80 bg-purple-500/5 rounded-full blur-3xl"
          animate={{
            scale: [1.2, 1, 1.2],
            opacity: [0.3, 0.5, 0.3]
          }}
          transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
        />
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: -50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <motion.h2 
            className="text-4xl md:text-6xl font-bold mb-6"
            initial={{ scale: 0.8, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <motion.span 
              className="text-transparent bg-gradient-to-r from-fuchsia-500 to-purple-500 bg-clip-text"
              animate={{
                backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"]
              }}
              transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
              style={{ backgroundSize: "200% 200%" }}
            >
              Experience the BIDA Rails
            </motion.span>
          </motion.h2>
          <motion.p 
            className="text-gray-400 text-lg md:text-xl max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            A seamless, intuitive interface for interacting with Real World Assets across our entire ecosystem.
          </motion.p>
        </motion.div>

        <motion.div 
          className="grid md:grid-cols-3 gap-8 md:gap-4 lg:gap-8 items-center"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          {/* Left Phone: Charity */}
          <motion.div 
            variants={phoneVariants} 
            className="md:transform md:rotate-[-8deg] md:scale-95 group"
            whileHover={{ 
              rotate: -5,
              scale: 1.05,
              y: -10,
              transition: { duration: 0.3 }
            }}
          >
            <PhoneScreen 
              isActive={activePhone === 0}
              onTap={() => handlePhoneTap(0)}
            >
              <motion.div 
                className="flex justify-between items-center mb-4"
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 }}
              >
                <motion.div
                  animate={{ rotate: [0, 10, 0] }}
                  transition={{ duration: 2, repeat: Infinity }}
                >
                  <Heart className="w-6 h-6 text-pink-400" />
                </motion.div>
                <span className="text-sm font-bold text-pink-400">Charity Rail</span>
              </motion.div>
              
              <motion.div 
                className="bg-[#0D052B]/70 p-4 rounded-xl mb-4 text-center"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.7 }}
                whileHover={{ scale: 1.02 }}
              >
                <p className="text-gray-400 text-sm">Donation to</p>
                <h3 className="text-white text-lg font-bold">Save the Oceans Fund</h3>
              </motion.div>
              
              <motion.div 
                className="bg-[#0D052B]/70 p-4 rounded-xl flex-grow flex flex-col justify-center items-center"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.9 }}
              >
                <p className="text-gray-400 text-sm mb-2">Your Contribution</p>
                <motion.p 
                  className="text-white text-4xl font-bold"
                  animate={{ scale: [1, 1.05, 1] }}
                  transition={{ duration: 2, repeat: Infinity }}
                >
                  $50.00
                </motion.p>
                <motion.p 
                  className="text-green-400 text-xs mt-1 flex items-center gap-1"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 1.2 }}
                >
                  <motion.div
                    className="w-2 h-2 bg-green-400 rounded-full"
                    animate={{ scale: [1, 1.2, 1] }}
                    transition={{ duration: 1.5, repeat: Infinity }}
                  />
                  Transaction Confirmed
                </motion.p>
              </motion.div>
            </PhoneScreen>
          </motion.div>

          {/* Center Phone: Auction */}
          <motion.div 
            variants={phoneVariants} 
            className="z-10 md:scale-110 group"
            whileHover={{ 
              scale: 1.15,
              y: -15,
              transition: { duration: 0.3 }
            }}
          >
            <PhoneScreen 
              isActive={activePhone === 1}
              onTap={() => handlePhoneTap(1)}
            >
              <motion.div 
                className="flex justify-between items-center mb-4"
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 }}
              >
                <motion.div
                  animate={{ rotate: [0, -10, 0] }}
                  transition={{ duration: 2, repeat: Infinity }}
                >
                  <Gavel className="w-6 h-6 text-purple-400" />
                </motion.div>
                <span className="text-sm font-bold text-purple-400">Auction Rail</span>
              </motion.div>
              
              <motion.div 
                className="bg-[#0D052B]/70 rounded-xl mb-4 overflow-hidden"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.7 }}
                whileHover={{ scale: 1.02 }}
              >
                <motion.img 
                  src="https://images.unsplash.com/photo-1551845811-16f3c662c1d5?q=80&w=800" 
                  alt="Auction Item" 
                  className="w-full h-32 object-cover"
                  whileHover={{ scale: 1.1 }}
                  transition={{ duration: 0.3 }}
                />
                <div className="p-3">
                  <h3 className="text-white font-bold">Vintage Rolex Watch</h3>
                  <p className="text-gray-400 text-xs">Tokenized RWA</p>
                </div>
              </motion.div>
              
              <motion.div 
                className="bg-[#0D052B]/70 p-4 rounded-xl flex-grow flex flex-col justify-between"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.9 }}
              >
                <div>
                  <p className="text-gray-400 text-sm">Current Bid</p>
                  <motion.p 
                    className="text-white text-3xl font-bold"
                    animate={{ scale: [1, 1.05, 1] }}
                    transition={{ duration: 2, repeat: Infinity }}
                  >
                    $12,500
                  </motion.p>
                </div>
                <motion.button 
                  className="w-full bg-gradient-to-r from-fuchsia-500 to-purple-500 text-white font-bold py-3 rounded-lg"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  animate={{ 
                    boxShadow: [
                      "0 0 0 rgba(236, 72, 153, 0.4)",
                      "0 0 20px rgba(236, 72, 153, 0.6)",
                      "0 0 0 rgba(236, 72, 153, 0.4)"
                    ]
                  }}
                  transition={{ duration: 2, repeat: Infinity }}
                >
                  Place Bid
                </motion.button>
              </motion.div>
            </PhoneScreen>
          </motion.div>

          {/* Right Phone: Lottery/Leaderboard */}
          <motion.div 
            variants={phoneVariants} 
            className="md:transform md:rotate-[8deg] md:scale-95 group"
            whileHover={{ 
              rotate: 5,
              scale: 1.05,
              y: -10,
              transition: { duration: 0.3 }
            }}
          >
            <PhoneScreen 
              isActive={activePhone === 2}
              onTap={() => handlePhoneTap(2)}
            >
              <motion.div 
                className="flex justify-between items-center mb-4"
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 }}
              >
                <motion.div
                  animate={{ rotate: [0, 15, 0] }}
                  transition={{ duration: 2, repeat: Infinity }}
                >
                  <Crown className="w-6 h-6 text-amber-400" />
                </motion.div>
                <span className="text-sm font-bold text-amber-400">Leaderboard</span>
              </motion.div>
              
              <motion.div 
                className="space-y-3 flex-grow"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.7 }}
              >
                {[
                  { name: "QuantumLeap", score: "1.2M", color: "amber", rank: 1 },
                  { name: "NovaCore", score: "980K", color: "purple", rank: 2 },
                  { name: "Zenith", score: "750K", color: "fuchsia", rank: 3 },
                  { name: "YOU", score: "620K", color: "white", rank: 4 }
                ].map((user, index) => (
                  <motion.div 
                    key={user.name} 
                    className={`bg-[#0D052B]/70 p-3 rounded-lg flex items-center justify-between ${
                      user.name === 'YOU' ? 'border-2 border-fuchsia-500' : ''
                    }`}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.9 + index * 0.1 }}
                    whileHover={{ scale: 1.02, x: 5 }}
                  >
                    <div className="flex items-center gap-3">
                      <motion.span 
                        className="font-bold text-gray-400"
                        animate={{ scale: [1, 1.1, 1] }}
                        transition={{ duration: 2, repeat: Infinity, delay: index * 0.2 }}
                      >
                        {user.rank}
                      </motion.span>
                      <motion.div 
                        className={`w-8 h-8 rounded-full bg-${user.color}-500/20 flex items-center justify-center text-${user.color}-400 font-bold`}
                        whileHover={{ rotate: 360 }}
                        transition={{ duration: 0.5 }}
                      >
                        {user.name.charAt(0)}
                      </motion.div>
                      <p className={`font-bold ${user.name === 'YOU' ? 'text-white' : 'text-gray-300'}`}>
                        {user.name}
                      </p>
                    </div>
                    <motion.p 
                      className="font-bold text-white"
                      animate={{ scale: [1, 1.05, 1] }}
                      transition={{ duration: 2, repeat: Infinity, delay: index * 0.3 }}
                    >
                      {user.score}
                    </motion.p>
                  </motion.div>
                ))}
              </motion.div>
            </PhoneScreen>
          </motion.div>
        </motion.div>

        {/* Interactive Demo Text */}
        <motion.div
          className="text-center mt-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 1 }}
        >
          <motion.p 
            className="text-gray-400 text-lg"
            animate={{ opacity: [0.5, 1, 0.5] }}
            transition={{ duration: 3, repeat: Infinity }}
          >
            Tap on any phone to explore different features
          </motion.p>
        </motion.div>
      </div>
    </section>
  );
}