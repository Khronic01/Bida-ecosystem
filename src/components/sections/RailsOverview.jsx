import React from "react";
import { motion } from "framer-motion";
import { Zap, Gavel, Heart, Coins } from "lucide-react";

const rails = [
  {
    icon: Zap,
    title: "Lottery Rail",
    description: "Decentralized, blockchain-verified lotteries with AI ensuring fairness and anti-fraud detection.",
    color: "from-fuchsia-500 to-purple-500",
    delay: 0
  },
  {
    icon: Gavel,
    title: "Auction Rail", 
    description: "Transparent, trustless auctions of RWAs with AI-driven valuation and fraud detection.",
    color: "from-purple-500 to-indigo-500",
    delay: 0.2
  },
  {
    icon: Heart,
    title: "Charity Rail",
    description: "Decentralized crowdfunding with AI verification, ensuring legitimacy and tokenized RWA distribution for impact.",
    color: "from-pink-500 to-rose-500",
    delay: 0.4
  },
  {
    icon: Coins,
    title: "Tokenization Rail",
    description: "AI-powered marketplace connecting freelancers and businesses, turning projects and services into tokenized RWAs.",
    color: "from-violet-500 to-fuchsia-500",
    delay: 0.6
  }
];

export default function RailsOverview() {
  return (
    <section className="py-20 px-6 relative">
      <div className="max-w-7xl mx-auto">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-4xl md:text-6xl font-bold mb-6">
            <span className="text-transparent bg-gradient-to-r from-fuchsia-500 to-purple-500 bg-clip-text">
              FOUR POWERFUL RAILS
            </span>
          </h2>
          <p className="text-gray-400 text-lg md:text-xl max-w-3xl mx-auto">
            Each rail empowers users to create, distribute, and interact with Real World Assets in a transparent ecosystem.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {rails.map((rail, index) => (
            <motion.div
              key={rail.title}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: rail.delay }}
              whileHover={{ y: -10 }}
              className="group"
            >
              <div className="relative h-full">
                <div className={`absolute -inset-0.5 bg-gradient-to-r ${rail.color} rounded-2xl blur opacity-30 group-hover:opacity-60 transition duration-1000 animate-tilt`}></div>
                <div className="relative bg-[#1A103A]/80 backdrop-blur-sm border border-purple-500/30 rounded-2xl p-8 h-full">
                  <motion.div 
                    className={`w-16 h-16 bg-gradient-to-r ${rail.color} rounded-xl flex items-center justify-center mb-6 relative overflow-hidden`}
                  >
                    <motion.div
                      className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent opacity-0 group-hover:opacity-100"
                      animate={{ x: [-100, 100] }}
                      transition={{ duration: 1.5, repeat: Infinity, ease: "linear" }}
                    />
                    <rail.icon className="w-8 h-8 text-white relative z-10" />
                  </motion.div>
                  
                  <h3 className="text-2xl font-bold text-white mb-4">
                    {rail.title}
                  </h3>
                  
                  <p className="text-gray-300 leading-relaxed">
                    {rail.description}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}