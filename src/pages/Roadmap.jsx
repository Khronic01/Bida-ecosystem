
import React from "react";
import { motion } from "framer-motion";
import { Calendar, Target, Rocket, Users } from "lucide-react";

const milestones = [
  {
    quarter: "Q1 2025",
    title: "Conceptualization & Whitepaper",
    description: "Laying the foundation, defining the core architecture, and publishing the official whitepaper.",
    icon: Target,
    color: "fuchsia"
  },
  {
    quarter: "Q2 2025", 
    title: "Prototype of Lottery & Auction Rails",
    description: "Development and internal testing of the core decentralized lottery and auction functionalities on testnet.",
    icon: Rocket,
    color: "purple"
  },
  {
    quarter: "Q3 2025",
    title: "Launch of Charity Rail + Tokenization Rail Beta",
    description: "Public beta release of the Charity and Tokenization rails, with community feedback integration.",
    icon: Calendar,
    color: "violet"
  },
  {
    quarter: "Q4 2025",
    title: "Full Ecosystem Launch & Governance DAO",
    description: "Mainnet launch of all four BIDA RAILS and the activation of the decentralized governance DAO.",
    icon: Users,
    color: "indigo"
  }
];

export default function Roadmap() {
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
            <span className="text-transparent bg-gradient-to-r from-purple-500 to-fuchsia-500 bg-clip-text">
              DEVELOPMENT ROADMAP
            </span>
          </h1>
          <p className="text-gray-400 text-lg md:text-xl max-w-3xl mx-auto">
            Our strategic timeline for building the future of decentralized RWA distribution.
          </p>
        </motion.div>

        <div className="relative">
          {/* Timeline for Desktop */}
          <div className="absolute left-1/2 -translate-x-1/2 w-1 h-full bg-gradient-to-b from-fuchsia-500/50 via-purple-500/50 to-indigo-500/50 hidden md:block"></div>
          
          <div className="space-y-16">
            {milestones.map((milestone, index) => (
              <motion.div
                key={milestone.quarter}
                initial={{ opacity: 0, x: -100 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.8, delay: 0.1 }}
                className="md:relative md:flex md:items-center"
              >
                {/* Desktop alternating layout */}
                <div className={`hidden md:flex md:w-1/2 ${index % 2 === 0 ? 'justify-end pr-8' : 'justify-start pl-8 order-3'}`}>
                  <motion.div
                    whileHover={{ scale: 1.03 }}
                    className="inline-block bg-[#1A103A]/80 backdrop-blur-sm border border-purple-500/30 rounded-2xl p-6 max-w-sm text-left"
                  >
                    <h3 className={`text-2xl font-bold text-${milestone.color}-400 mb-2`}>{milestone.quarter}</h3>
                    <h4 className="text-lg font-semibold text-white mb-2">{milestone.title}</h4>
                    <p className="text-gray-300">{milestone.description}</p>
                  </motion.div>
                </div>
                
                <div className="hidden md:block md:w-auto md:absolute md:left-1/2 md:-translate-x-1/2 flex-shrink-0 z-10">
                  <motion.div 
                    className={`w-16 h-16 bg-gradient-to-br from-${milestone.color}-500 to-${milestone.color}-700 rounded-full flex items-center justify-center border-4 border-[#0D052B] shadow-lg shadow-${milestone.color}-500/30`}
                    whileHover={{ scale: 1.2, rotate: 15 }}
                  >
                    <milestone.icon className="w-8 h-8 text-white" />
                  </motion.div>
                </div>

                {/* Mobile linear layout */}
                <div className="flex items-center gap-4 md:hidden">
                    <motion.div 
                        className={`w-16 h-16 bg-gradient-to-br from-${milestone.color}-500 to-${milestone.color}-700 rounded-full flex items-center justify-center border-4 border-[#0D052B] shadow-lg shadow-${milestone.color}-500/30 flex-shrink-0`}
                    >
                        <milestone.icon className="w-8 h-8 text-white" />
                    </motion.div>
                    <div className="bg-[#1A103A]/80 backdrop-blur-sm border border-purple-500/30 rounded-2xl p-4">
                        <h3 className={`text-xl font-bold text-${milestone.color}-400 mb-1`}>{milestone.quarter}</h3>
                        <h4 className="text-md font-semibold text-white mb-2">{milestone.title}</h4>
                        <p className="text-gray-300 text-sm">{milestone.description}</p>
                    </div>
                </div>
                 <div className="hidden md:block md:w-1/2"></div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
