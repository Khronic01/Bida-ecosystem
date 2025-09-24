import React from "react";
import { motion } from "framer-motion";
import { Zap, Gavel, Heart, Coins, ArrowRight, Shield, Users, Target } from "lucide-react";

const rails = [
  {
    icon: Zap,
    title: "Lottery Rail",
    description: "Create decentralized, blockchain-verified lotteries with AI ensuring fairness and anti-fraud detection.",
    features: ["AI-Powered Fraud Detection", "Transparent Distribution", "Global Accessibility", "Instant Payouts"],
    color: "from-fuchsia-500 to-purple-500"
  },
  {
    icon: Gavel,
    title: "Auction Rail", 
    description: "Transparent, trustless auctions of RWAs with AI-driven valuation and fraud detection.",
    features: ["Real-Time Bidding", "Asset Tokenization", "Smart Contract Security", "Global Marketplace"],
    color: "from-purple-500 to-indigo-500"
  },
  {
    icon: Heart,
    title: "Charity Rail",
    description: "Decentralized crowdfunding with AI verification, ensuring legitimacy and tokenized RWA distribution for impact.",
    features: ["Impact Verification", "Transparent Funding", "Community Governance", "Real-Time Tracking"],
    color: "from-pink-500 to-rose-500"
  },
  {
    icon: Coins,
    title: "Tokenization Rail",
    description: "AI-powered marketplace connecting freelancers and businesses, turning projects and services into tokenized RWAs.",
    features: ["Asset Tokenization", "Liquidity Pools", "Yield Generation", "Cross-Chain Support"],
    color: "from-violet-500 to-fuchsia-500"
  }
];

const benefits = [
  {
    icon: Shield,
    title: "Security First",
    description: "Military-grade encryption and blockchain verification ensure your assets are always protected."
  },
  {
    icon: Users,
    title: "Community Driven",
    description: "Governance by the community, for the community. Your voice shapes the future."
  },
  {
    icon: Target,
    title: "Precision AI",
    description: "Advanced algorithms optimize every transaction and prevent fraudulent activities."
  }
];

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.2
    }
  }
};

const itemVariants = {
  hidden: { y: 20, opacity: 0 },
  visible: { 
    y: 0, 
    opacity: 1,
    transition: {
      duration: 0.6,
      ease: "easeOut"
    }
  }
};

export default function Ecosystem() {
  return (
    <div className="py-20 px-4 sm:px-6">
      <div className="max-w-7xl mx-auto">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
        >
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            <span className="text-transparent bg-gradient-to-r from-fuchsia-500 to-purple-500 bg-clip-text">
              THE BIDA ECOSYSTEM
            </span>
          </h1>
          <p className="text-gray-400 text-base md:text-xl max-w-3xl mx-auto">
            BIDA operates a unified ecosystem of interoperable rails. AI algorithms enhance security, ensure fairness, and smart contracts guarantee trustless execution.
          </p>
        </motion.div>

        {/* Benefits Section */}
        <motion.div 
          className="grid md:grid-cols-3 gap-8 mb-20"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {benefits.map((benefit, index) => (
            <motion.div
              key={benefit.title}
              variants={itemVariants}
              whileHover={{ scale: 1.05, y: -5 }}
              className="text-center group"
            >
              <div className="w-16 h-16 bg-gradient-to-r from-fuchsia-500 to-purple-500 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:shadow-lg group-hover:shadow-fuchsia-500/25 transition-all duration-300">
                <benefit.icon className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-white mb-2">{benefit.title}</h3>
              <p className="text-gray-300">{benefit.description}</p>
            </motion.div>
          ))}
        </motion.div>

        {/* Rails Section */}
        <motion.div 
          className="grid md:grid-cols-2 gap-8"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {rails.map((rail, index) => (
            <motion.div
              key={rail.title}
              variants={itemVariants}
              whileHover={{ scale: 1.02, y: -10 }}
              className="relative group"
            >
              <div className={`absolute -inset-0.5 bg-gradient-to-r ${rail.color} rounded-2xl blur opacity-30 group-hover:opacity-60 transition duration-1000`}></div>
              <div className="relative bg-[#1A103A]/80 backdrop-blur-sm border border-purple-500/30 rounded-2xl p-8 h-full">
                <div className="flex items-center gap-4 mb-6">
                  <div className={`w-16 h-16 bg-gradient-to-r ${rail.color} rounded-xl flex items-center justify-center`}>
                    <rail.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-white">{rail.title}</h3>
                </div>
                
                <p className="text-gray-300 leading-relaxed mb-6">{rail.description}</p>
                
                <div className="space-y-3">
                  {rail.features.map((feature, featureIndex) => (
                    <motion.div
                      key={feature}
                      className="flex items-center gap-3"
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.8 + index * 0.2 + featureIndex * 0.1 }}
                    >
                      <div className="w-2 h-2 bg-gradient-to-r from-fuchsia-400 to-purple-400 rounded-full"></div>
                      <span className="text-gray-300 text-sm">{feature}</span>
                    </motion.div>
                  ))}
                </div>

                <motion.div
                  className="mt-6"
                  whileHover={{ x: 5 }}
                >
                  <div className="flex items-center gap-2 text-fuchsia-400 cursor-pointer">
                    <span className="text-sm font-semibold">Learn More</span>
                    <ArrowRight className="w-4 h-4" />
                  </div>
                </motion.div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  );
}