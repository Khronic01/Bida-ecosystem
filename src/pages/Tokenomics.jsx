import React, { useState } from "react";
import { motion } from "framer-motion";
import { DollarSign, Users, Shield, TrendingUp, PieChart, BarChart3, Coins } from "lucide-react";

const features = [
  {
    icon: DollarSign,
    title: "Medium of Exchange",
    description: "Pay transaction fees, participate in auctions, and purchase lottery tickets across all BIDA rails."
  },
  {
    icon: Users,
    title: "Governance Utility", 
    description: "Stake $BIDA tokens to participate in DAO governance, vote on proposals, and shape the future of the ecosystem."
  },
  {
    icon: Shield,
    title: "Incentive Mechanism",
    description: "Earn rewards for active participation, such as providing liquidity, validating transactions, or creating high-value RWAs."
  },
  {
    icon: TrendingUp,
    title: "Deflationary Pressure",
    description: "Systematic token sinks and burning mechanisms from transaction fees ensure sustainable long-term economics."
  }
];

const tokenDistribution = [
  { label: "Public Sale", percentage: 35, color: "bg-fuchsia-500" },
  { label: "Team & Advisors", percentage: 20, color: "bg-purple-500" },
  { label: "Development", percentage: 25, color: "bg-indigo-500" },
  { label: "Marketing", percentage: 10, color: "bg-pink-500" },
  { label: "Reserve", percentage: 10, color: "bg-violet-500" }
];

export default function Tokenomics() {
  const [activeTab, setActiveTab] = useState("distribution");

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
              $BIDA TOKENOMICS
            </span>
          </h1>
          <p className="text-gray-400 text-base md:text-xl max-w-3xl mx-auto">
            The $BIDA token fuels the entire ecosystem, designed for utility, governance, and long-term value accrual.
          </p>
        </motion.div>

        {/* Tab Navigation */}
        <motion.div 
          className="flex justify-center mb-12"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
        >
          <div className="flex bg-[#1A103A]/60 backdrop-blur-sm border border-purple-500/30 rounded-xl p-2">
            {[
              { id: "distribution", label: "Distribution", icon: PieChart },
              { id: "utility", label: "Utility", icon: Coins },
              { id: "economics", label: "Economics", icon: BarChart3 }
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`flex items-center gap-2 px-6 py-3 rounded-lg transition-all duration-300 ${
                  activeTab === tab.id 
                    ? "bg-gradient-to-r from-fuchsia-500 to-purple-500 text-white" 
                    : "text-gray-400 hover:text-white"
                }`}
              >
                <tab.icon className="w-5 h-5" />
                {tab.label}
              </button>
            ))}
          </div>
        </motion.div>

        {/* Content Sections */}
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Side - Interactive Visual */}
          <motion.div
            initial={{ opacity: 0, x: -50, scale: 0.8 }}
            animate={{ opacity: 1, x: 0, scale: 1 }}
            transition={{ duration: 0.8 }}
          >
            {activeTab === "distribution" && (
              <div className="relative">
                <div className="w-80 h-80 mx-auto relative">
                  <motion.div 
                    className="absolute inset-0 bg-gradient-to-br from-fuchsia-600 to-purple-600 rounded-full"
                    animate={{ rotate: 360 }}
                    transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
                  />
                  <div className="absolute inset-4 bg-[#0D052B] rounded-full" />
                  <div className="absolute inset-0 flex items-center justify-center">
                    <motion.div
                      className="text-white font-bold text-4xl text-center"
                      animate={{ scale: [1, 1.05, 1]}}
                      transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                    >
                      <div className="text-transparent bg-gradient-to-tr from-fuchsia-500 to-purple-400 bg-clip-text">
                        $BIDA
                      </div>
                      <div className="text-sm text-gray-400 mt-2">TOKEN</div>
                    </motion.div>
                  </div>
                </div>
                
                {/* Distribution Legend */}
                <div className="mt-8 space-y-3">
                  {tokenDistribution.map((item, index) => (
                    <motion.div
                      key={item.label}
                      className="flex items-center justify-between p-3 bg-[#1A103A]/50 backdrop-blur-sm rounded-lg border border-purple-500/30"
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.5 + index * 0.1 }}
                    >
                      <div className="flex items-center gap-3">
                        <div className={`w-4 h-4 ${item.color} rounded-full`}></div>
                        <span className="text-white font-medium">{item.label}</span>
                      </div>
                      <span className="text-gray-300">{item.percentage}%</span>
                    </motion.div>
                  ))}
                </div>
              </div>
            )}

            {activeTab === "utility" && (
              <div className="relative">
                <div className="w-80 h-80 mx-auto relative">
                  <motion.div 
                    className="absolute inset-0 border-2 border-purple-400/50 rounded-full"
                    animate={{ rotate: 360, scale: [1, 1.05, 1] }}
                    transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                  />
                  <motion.div 
                    className="absolute inset-8 border-2 border-fuchsia-400/50 rounded-full"
                    animate={{ rotate: -360 }}
                    transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
                  />
                  <div className="absolute inset-16 bg-gradient-to-br from-fuchsia-600 to-purple-800 rounded-full flex items-center justify-center">
                    <Coins className="w-16 h-16 text-white" />
                  </div>
                </div>
              </div>
            )}

            {activeTab === "economics" && (
              <div className="relative">
                <div className="w-80 h-80 mx-auto bg-[#1A103A]/60 backdrop-blur-sm border border-purple-500/30 rounded-2xl p-8 flex flex-col justify-center">
                  <div className="space-y-6">
                    <div className="text-center">
                      <div className="text-3xl font-bold text-white mb-2">1B</div>
                      <div className="text-gray-400">Total Supply</div>
                    </div>
                    <div className="text-center">
                      <div className="text-3xl font-bold text-fuchsia-400 mb-2">2%</div>
                      <div className="text-gray-400">Annual Burn Rate</div>
                    </div>
                    <div className="text-center">
                      <div className="text-3xl font-bold text-purple-400 mb-2">5%</div>
                      <div className="text-gray-400">Staking Rewards</div>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </motion.div>

          {/* Right Side - Features */}
          <motion.div 
            className="grid grid-cols-1 gap-6"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            {features.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 + index * 0.1 }}
                whileHover={{ scale: 1.02, x: 5 }}
                className="flex items-start gap-4 p-6 bg-[#1A103A]/50 backdrop-blur-sm rounded-xl border border-purple-500/30 hover:border-fuchsia-400/50 transition-all duration-300 cursor-pointer group"
              >
                <div className="w-12 h-12 bg-gradient-to-r from-fuchsia-500 to-purple-500 rounded-lg flex items-center justify-center flex-shrink-0 group-hover:shadow-lg group-hover:shadow-fuchsia-500/25 transition-all duration-300">
                  <feature.icon className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="text-white font-bold text-lg mb-2">{feature.title}</h3>
                  <p className="text-gray-300">{feature.description}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </div>
  );
}