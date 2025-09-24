import React from "react";
import { motion } from "framer-motion";
import { Zap, Gavel, Heart, Coins, ArrowUpRight, Crown, Users } from "lucide-react";

const PhoneScreen = ({ children, className }) => (
  <div className={`aspect-[9/19.5] w-full bg-[#1A103A] border-4 border-gray-800 rounded-[2.5rem] p-4 flex flex-col ${className}`}>
    {children}
  </div>
);

export default function AppShowcase() {
  const containerVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.8, staggerChildren: 0.3 }
    }
  };

  const phoneVariants = {
    hidden: { y: 100, opacity: 0, rotate: 5 },
    visible: { y: 0, opacity: 1, rotate: 0, transition: { duration: 0.8, ease: "easeOut" } }
  };

  return (
    <section className="py-20 px-6 relative overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: -50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <h2 className="text-4xl md:text-6xl font-bold mb-6">
            <span className="text-transparent bg-gradient-to-r from-fuchsia-500 to-purple-500 bg-clip-text">
              Experience the BIDA Rails
            </span>
          </h2>
          <p className="text-gray-400 text-lg md:text-xl max-w-3xl mx-auto">
            A seamless, intuitive interface for interacting with Real World Assets across our entire ecosystem.
          </p>
        </motion.div>

        <motion.div 
          className="grid md:grid-cols-3 gap-8 md:gap-4 lg:gap-8 items-center"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          {/* Left Phone: Charity */}
          <motion.div variants={phoneVariants} className="md:transform md:rotate-[-5deg] md:scale-95">
            <PhoneScreen>
              <div className="flex justify-between items-center mb-4">
                <Heart className="w-6 h-6 text-pink-400" />
                <span className="text-sm font-bold text-pink-400">Charity Rail</span>
              </div>
              <div className="bg-[#0D052B]/70 p-4 rounded-xl mb-4 text-center">
                <p className="text-gray-400 text-sm">Donation to</p>
                <h3 className="text-white text-lg font-bold">Save the Oceans Fund</h3>
              </div>
              <div className="bg-[#0D052B]/70 p-4 rounded-xl flex-grow flex flex-col justify-center items-center">
                <p className="text-gray-400 text-sm mb-2">Your Contribution</p>
                <p className="text-white text-4xl font-bold">$50.00</p>
                <p className="text-green-400 text-xs mt-1">Transaction Confirmed</p>
              </div>
            </PhoneScreen>
          </motion.div>

          {/* Center Phone: Auction */}
          <motion.div variants={phoneVariants} className="z-10 md:scale-110">
            <PhoneScreen>
              <div className="flex justify-between items-center mb-4">
                <Gavel className="w-6 h-6 text-purple-400" />
                <span className="text-sm font-bold text-purple-400">Auction Rail</span>
              </div>
              <div className="bg-[#0D052B]/70 rounded-xl mb-4 overflow-hidden">
                <img src="https://images.unsplash.com/photo-1551845811-16f3c662c1d5?q=80&w=800" alt="Auction Item" className="w-full h-32 object-cover"/>
                <div className="p-3">
                  <h3 className="text-white font-bold">Vintage Rolex Watch</h3>
                  <p className="text-gray-400 text-xs">Tokenized RWA</p>
                </div>
              </div>
              <div className="bg-[#0D052B]/70 p-4 rounded-xl flex-grow flex flex-col justify-between">
                <div>
                  <p className="text-gray-400 text-sm">Current Bid</p>
                  <p className="text-white text-3xl font-bold">$12,500</p>
                </div>
                <button className="w-full bg-gradient-to-r from-fuchsia-500 to-purple-500 text-white font-bold py-3 rounded-lg">
                  Place Bid
                </button>
              </div>
            </PhoneScreen>
          </motion.div>

          {/* Right Phone: Lottery/Tokenization */}
          <motion.div variants={phoneVariants} className="md:transform md:rotate-[5deg] md:scale-95">
            <PhoneScreen>
              <div className="flex justify-between items-center mb-4">
                <Crown className="w-6 h-6 text-amber-400" />
                <span className="text-sm font-bold text-amber-400">Leaderboard</span>
              </div>
              <div className="space-y-3 flex-grow">
                {[
                  { name: "QuantumLeap", score: "1.2M", color: "amber" },
                  { name: "NovaCore", score: "980K", color: "purple" },
                  { name: "Zenith", score: "750K", color: "fuchsia" },
                  { name: "YOU", score: "620K", color: "white" }
                ].map((user, index) => (
                  <div key={user.name} className={`bg-[#0D052B]/70 p-3 rounded-lg flex items-center justify-between ${user.name === 'YOU' ? 'border-2 border-fuchsia-500' : ''}`}>
                    <div className="flex items-center gap-3">
                      <span className="font-bold text-gray-400">{index + 1}</span>
                      <div className={`w-8 h-8 rounded-full bg-${user.color}-500/20 flex items-center justify-center text-${user.color}-400 font-bold`}>
                        {user.name.charAt(0)}
                      </div>
                      <p className={`font-bold ${user.name === 'YOU' ? 'text-white' : 'text-gray-300'}`}>{user.name}</p>
                    </div>
                    <p className="font-bold text-white">{user.score}</p>
                  </div>
                ))}
              </div>
            </PhoneScreen>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}