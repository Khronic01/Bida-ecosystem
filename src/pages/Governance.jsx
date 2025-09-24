import React, { useState } from "react";
import { motion } from "framer-motion";
import { Vote, Shield, Brain, Globe, Users, CheckCircle, Clock, ArrowRight } from "lucide-react";

const features = [
  {
    icon: Vote,
    title: "Democratic Voting",
    description: "Token holders propose and vote on all protocol upgrades, fee changes, and ecosystem initiatives.",
    color: "fuchsia"
  },
  {
    icon: Shield,
    title: "Transparent Funding",
    description: "The community decides on treasury and funding allocations for development, marketing, and ecosystem growth.",
    color: "purple"
  },
  {
    icon: Brain,
    title: "AI Governance Assistants",
    description: "AI tools ensure efficiency, analyze proposal impacts, and reduce bias in the overall governance process.",
    color: "violet"
  }
];

const mockProposals = [
  {
    id: 1,
    title: "Increase Staking Rewards to 7%",
    description: "Proposal to increase annual staking rewards from 5% to 7% to incentivize more token holders to participate in governance.",
    status: "active",
    votes: { for: 75, against: 25 },
    timeLeft: "5 days",
    totalVotes: 12500
  },
  {
    id: 2,
    title: "Launch Charity Rail Beta",
    description: "Approve funding for the beta launch of the Charity Rail with initial allocation of 2M $BIDA tokens.",
    status: "passed",
    votes: { for: 88, against: 12 },
    timeLeft: "Ended",
    totalVotes: 18200
  },
  {
    id: 3,
    title: "Partnership with MetaMask",
    description: "Strategic partnership proposal to integrate BIDA ecosystem with MetaMask for improved user experience.",
    status: "pending",
    votes: { for: 0, against: 0 },
    timeLeft: "Starts in 2 days",
    totalVotes: 0
  }
];

export default function Governance() {
  const [activeTab, setActiveTab] = useState("overview");

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
              DAO GOVERNANCE
            </span>
          </h1>
          <p className="text-gray-400 text-base md:text-xl max-w-3xl mx-auto">
            BIDA is governed by a decentralized autonomous organization where $BIDA holders 
            shape the future through transparent, AI-assisted decision making.
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
              { id: "overview", label: "Overview" },
              { id: "proposals", label: "Active Proposals" },
              { id: "voting", label: "Voting Power" }
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`px-6 py-3 rounded-lg transition-all duration-300 ${
                  activeTab === tab.id 
                    ? "bg-gradient-to-r from-fuchsia-500 to-purple-500 text-white" 
                    : "text-gray-400 hover:text-white"
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </motion.div>

        {activeTab === "overview" && (
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2, staggerChildren: 0.2 }}
              className="space-y-6"
            >
              {features.map((feature, index) => (
                <motion.div
                  key={feature.title}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.4 + index * 0.1 }}
                  whileHover={{ scale: 1.02, x: 5 }}
                  className={`flex items-start gap-4 p-6 bg-[#1A103A]/50 backdrop-blur-sm rounded-xl border border-purple-500/30 hover:shadow-lg hover:shadow-${feature.color}-500/20 transition-all duration-300 cursor-pointer group`}
                >
                  <div className={`w-12 h-12 bg-gradient-to-r from-${feature.color}-500 to-${feature.color}-600 rounded-lg flex items-center justify-center flex-shrink-0 group-hover:shadow-lg group-hover:shadow-${feature.color}-500/25 transition-all duration-300`}>
                    <feature.icon className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-white font-bold text-lg mb-2">{feature.title}</h3>
                    <p className="text-gray-300">{feature.description}</p>
                  </div>
                </motion.div>
              ))}
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1, type: "spring" }}
              className="relative"
            >
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
                <motion.div 
                  className="absolute inset-16 bg-gradient-to-br from-fuchsia-600 to-purple-800 rounded-full flex items-center justify-center"
                  animate={{ boxShadow: ["0 0 60px rgba(192, 38, 211, 0.4)", "0 0 100px rgba(168, 85, 247, 0.6)", "0 0 60px rgba(192, 38, 211, 0.4)"] }}
                  transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                >
                  <Globe className="w-16 h-16 text-white" />
                </motion.div>
              </div>
            </motion.div>
          </div>
        )}

        {activeTab === "proposals" && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-6"
          >
            {mockProposals.map((proposal, index) => (
              <motion.div
                key={proposal.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 + index * 0.1 }}
                whileHover={{ scale: 1.02 }}
                className="bg-[#1A103A]/60 backdrop-blur-sm border border-purple-500/30 rounded-2xl p-6 hover:border-fuchsia-400/50 transition-all duration-300"
              >
                <div className="flex items-start justify-between mb-4">
                  <div className="flex items-center gap-3">
                    <div className={`px-3 py-1 rounded-full text-xs font-semibold ${
                      proposal.status === 'active' ? 'bg-green-500/20 text-green-400' :
                      proposal.status === 'passed' ? 'bg-blue-500/20 text-blue-400' :
                      'bg-yellow-500/20 text-yellow-400'
                    }`}>
                      {proposal.status === 'active' ? <Clock className="w-3 h-3 inline mr-1" /> :
                       proposal.status === 'passed' ? <CheckCircle className="w-3 h-3 inline mr-1" /> :
                       <Clock className="w-3 h-3 inline mr-1" />}
                      {proposal.status.toUpperCase()}
                    </div>
                    <span className="text-gray-400 text-sm">{proposal.timeLeft}</span>
                  </div>
                  <span className="text-gray-400 text-sm">{proposal.totalVotes.toLocaleString()} votes</span>
                </div>

                <h3 className="text-xl font-bold text-white mb-2">{proposal.title}</h3>
                <p className="text-gray-300 mb-4">{proposal.description}</p>

                {proposal.status !== 'pending' && (
                  <div className="space-y-3 mb-4">
                    <div className="flex items-center justify-between text-sm">
                      <span className="text-green-400">For: {proposal.votes.for}%</span>
                      <span className="text-red-400">Against: {proposal.votes.against}%</span>
                    </div>
                    <div className="w-full bg-gray-700 rounded-full h-2">
                      <motion.div
                        className="bg-gradient-to-r from-green-500 to-green-400 h-2 rounded-full"
                        initial={{ width: 0 }}
                        animate={{ width: `${proposal.votes.for}%` }}
                        transition={{ delay: 0.5 + index * 0.1, duration: 1 }}
                      />
                    </div>
                  </div>
                )}

                <motion.button
                  whileHover={{ x: 5 }}
                  className="flex items-center gap-2 text-fuchsia-400 hover:text-fuchsia-300 transition-colors"
                >
                  <span className="font-semibold">
                    {proposal.status === 'active' ? 'Vote Now' :
                     proposal.status === 'passed' ? 'View Results' :
                     'View Proposal'}
                  </span>
                  <ArrowRight className="w-4 h-4" />
                </motion.button>
              </motion.div>
            ))}
          </motion.div>
        )}

        {activeTab === "voting" && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <div className="bg-[#1A103A]/60 backdrop-blur-sm border border-purple-500/30 rounded-2xl p-12 max-w-2xl mx-auto">
              <Users className="w-16 h-16 text-fuchsia-400 mx-auto mb-6" />
              <h3 className="text-2xl font-bold text-white mb-4">Your Voting Power</h3>
              <div className="text-4xl font-bold text-transparent bg-gradient-to-r from-fuchsia-500 to-purple-500 bg-clip-text mb-2">
                1,250 $BIDA
              </div>
              <p className="text-gray-400 mb-8">Connect your wallet to see your voting power and participate in governance</p>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-gradient-to-r from-fuchsia-500 to-purple-500 text-white px-8 py-3 rounded-lg font-semibold"
              >
                Connect Wallet
              </motion.button>
            </div>
          </motion.div>
        )}
      </div>
    </div>
  );
}