
import React, { useState, useEffect } from "react";
import { motion, useScroll, useTransform, useInView } from "framer-motion";
import { Calendar, Target, Rocket, Users, CheckCircle } from "lucide-react";

const milestones = [
  {
    quarter: "Q1 2025",
    title: "Conceptualization & Whitepaper",
    description: "Laying the foundation, defining the core architecture, and publishing the official whitepaper.",
    icon: Target,
    color: "fuchsia",
    status: "completed"
  },
  {
    quarter: "Q2 2025", 
    title: "Prototype of Raffle & Auction Rails",
    description: "Development and internal testing of the core decentralized raffle and auction functionalities on testnet.",
    icon: Rocket,
    color: "purple",
    status: "current"
  },
  {
    quarter: "Q3 2025",
    title: "Launch of Charity Rail + Tokenization Rail Beta",
    description: "Public beta release of the Charity and Tokenization rails, with community feedback integration.",
    icon: Calendar,
    color: "violet",
    status: "upcoming"
  },
  {
    quarter: "Q4 2025",
    title: "Full Ecosystem Launch & Governance DAO",
    description: "Mainnet launch of all four BIDA RAILS and the activation of the decentralized governance DAO.",
    icon: Users,
    color: "indigo",
    status: "upcoming"
  }
];

// Animation variants
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.3,
      delayChildren: 0.2
    }
  }
};

const titleVariants = {
  hidden: { opacity: 0, y: -50, scale: 0.8 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      type: "spring",
      stiffness: 100,
      damping: 15,
      duration: 0.8
    }
  }
};

const timelineVariants = {
  hidden: { scaleY: 0, originY: 0 },
  visible: {
    scaleY: 1,
    transition: {
      duration: 2,
      ease: "easeInOut",
      delay: 0.5
    }
  }
};

const milestoneVariants = {
  hidden: { opacity: 0, x: -100, scale: 0.8 },
  visible: {
    opacity: 1,
    x: 0,
    scale: 1,
    transition: {
      type: "spring",
      stiffness: 80,
      damping: 15,
      duration: 0.8
    }
  }
};

const iconVariants = {
  hidden: { scale: 0, rotate: -180 },
  visible: {
    scale: 1,
    rotate: 0,
    transition: {
      type: "spring",
      stiffness: 200,
      damping: 15,
      duration: 0.6
    }
  },
  hover: {
    scale: 1.2,
    rotate: 15,
    transition: {
      type: "spring",
      stiffness: 400,
      damping: 10
    }
  },
  float: {
    y: [-5, 5, -5],
    transition: {
      duration: 3,
      repeat: Infinity,
      ease: "easeInOut"
    }
  }
};

const cardVariants = {
  hidden: { opacity: 0, y: 50, rotateX: -15 },
  visible: {
    opacity: 1,
    y: 0,
    rotateX: 0,
    transition: {
      type: "spring",
      stiffness: 100,
      damping: 15,
      duration: 0.8
    }
  },
  hover: {
    y: -10,
    rotateX: 5,
    rotateY: 5,
    scale: 1.02,
    transition: {
      type: "spring",
      stiffness: 300,
      damping: 20
    }
  }
};

// Progress indicator component
const ProgressIndicator = ({ progress }) => (
  <motion.div 
    className="w-full bg-gray-800/50 rounded-full h-2 mb-8 overflow-hidden"
    initial={{ opacity: 0, scaleX: 0 }}
    animate={{ opacity: 1, scaleX: 1 }}
    transition={{ duration: 1, delay: 1 }}
  >
    <motion.div
      className="h-full bg-gradient-to-r from-fuchsia-500 via-purple-500 to-indigo-500 rounded-full"
      initial={{ scaleX: 0, originX: 0 }}
      animate={{ scaleX: progress / 100, originX: 0 }}
      transition={{ duration: 2, delay: 1.5, ease: "easeInOut" }}
    />
  </motion.div>
);

// Status badge component
const StatusBadge = ({ status }) => {
  const statusConfig = {
    completed: { 
      text: "Completed", 
      icon: CheckCircle, 
      className: "bg-green-500/20 text-green-400 border-green-500/30" 
    },
    current: { 
      text: "In Progress", 
      icon: Target, 
      className: "bg-blue-500/20 text-blue-400 border-blue-500/30" 
    },
    upcoming: { 
      text: "Upcoming", 
      icon: Calendar, 
      className: "bg-gray-500/20 text-gray-400 border-gray-500/30" 
    }
  };

  const config = statusConfig[status];
  const Icon = config.icon;

  return (
    <motion.div
      className={`inline-flex items-center gap-2 px-3 py-1 rounded-full border text-sm font-medium ${config.className}`}
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ delay: 0.5 }}
    >
      <Icon className="w-4 h-4" />
      {config.text}
    </motion.div>
  );
};

export default function Roadmap() {
  const [progress, setProgress] = useState(0);
  const { scrollYProgress } = useScroll();
  
  // Calculate progress based on milestones
  useEffect(() => {
    const completedMilestones = milestones.filter(m => m.status === 'completed').length;
    const currentMilestones = milestones.filter(m => m.status === 'current').length;
    const totalMilestones = milestones.length;
    
    // Base progress from completed milestones + partial progress from current
    const baseProgress = (completedMilestones / totalMilestones) * 100;
    const currentProgress = (currentMilestones / totalMilestones) * 50; // 50% for current
    
    setProgress(baseProgress + currentProgress);
  }, []);

  return (
    <div className="py-20 px-4 sm:px-6 min-h-screen">
      <div className="max-w-7xl mx-auto">
        <motion.div 
          className="text-center mb-16"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <motion.div variants={titleVariants}>
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              <motion.span 
                className="text-transparent bg-gradient-to-r from-purple-500 to-fuchsia-500 bg-clip-text"
                initial={{ backgroundPosition: "0% 50%" }}
                animate={{ backgroundPosition: "100% 50%" }}
                transition={{ duration: 3, repeat: Infinity, repeatType: "reverse" }}
                style={{ backgroundSize: "200% 200%" }}
              >
                DEVELOPMENT ROADMAP
              </motion.span>
            </h1>
            <motion.p 
              className="text-gray-400 text-lg md:text-xl max-w-3xl mx-auto"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5, duration: 0.8 }}
            >
              Our strategic timeline for building the future of decentralized RWA distribution.
            </motion.p>
          </motion.div>
          
          <ProgressIndicator progress={progress} />
        </motion.div>

        <motion.div 
          className="relative"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {/* Enhanced Timeline for Desktop */}
          <motion.div 
            className="absolute left-1/2 -translate-x-1/2 w-1 h-full hidden md:block"
            variants={timelineVariants}
          >
            <div className="w-full h-full bg-gradient-to-b from-fuchsia-500/50 via-purple-500/50 to-indigo-500/50 rounded-full">
              <motion.div
                className="w-full bg-gradient-to-b from-fuchsia-500 via-purple-500 to-indigo-500 rounded-full"
                initial={{ scaleY: 0, originY: 0 }}
                animate={{ scaleY: 1, originY: 0 }}
                transition={{ duration: 2, delay: 1, ease: "easeInOut" }}
              />
            </div>
          </motion.div>
          
          <div className="space-y-16">
            {milestones.map((milestone, index) => (
              <motion.div
                key={milestone.quarter}
                variants={milestoneVariants}
                className="md:relative md:flex md:items-center"
              >
                {/* Desktop alternating layout */}
                <div className={`hidden md:flex md:w-1/2 ${index % 2 === 0 ? 'justify-end pr-8' : 'justify-start pl-8 order-3'}`}>
                  <motion.div
                    variants={cardVariants}
                    whileHover="hover"
                    className="inline-block bg-[#1A103A]/80 backdrop-blur-sm border border-purple-500/30 rounded-2xl p-6 max-w-sm text-left relative overflow-hidden group"
                    style={{ perspective: "1000px" }}
                  >
                    {/* Animated background gradient */}
                    <motion.div
                      className="absolute inset-0 bg-gradient-to-br from-purple-500/10 to-fuchsia-500/10 opacity-0 group-hover:opacity-100"
                      transition={{ duration: 0.3 }}
                    />
                    
                    {/* Status badge */}
                    <div className="mb-3">
                      <StatusBadge status={milestone.status} />
                    </div>
                    
                    <motion.h3 
                      className={`text-2xl font-bold text-${milestone.color}-400 mb-2`}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.3 + index * 0.1 }}
                    >
                      {milestone.quarter}
                    </motion.h3>
                    <motion.h4 
                      className="text-lg font-semibold text-white mb-2"
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.4 + index * 0.1 }}
                    >
                      {milestone.title}
                    </motion.h4>
                    <motion.p 
                      className="text-gray-300"
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.5 + index * 0.1 }}
                    >
                      {milestone.description}
                    </motion.p>
                  </motion.div>
                </div>
                
                <div className="hidden md:block md:w-auto md:absolute md:left-1/2 md:-translate-x-1/2 flex-shrink-0 z-10">
                  <motion.div 
                    className={`w-16 h-16 bg-gradient-to-br from-${milestone.color}-500 to-${milestone.color}-700 rounded-full flex items-center justify-center border-4 border-[#0D052B] shadow-lg shadow-${milestone.color}-500/30 relative overflow-hidden`}
                    variants={iconVariants}
                    whileHover="hover"
                    animate="float"
                  >
                    {/* Pulsing glow effect */}
                    <motion.div
                      className={`absolute inset-0 bg-gradient-to-br from-${milestone.color}-400 to-${milestone.color}-600 rounded-full opacity-0`}
                      animate={{ 
                        opacity: [0, 0.3, 0],
                        scale: [1, 1.2, 1]
                      }}
                      transition={{ 
                        duration: 2, 
                        repeat: Infinity, 
                        delay: index * 0.5 
                      }}
                    />
                    
                    <motion.div
                      initial={{ scale: 0, rotate: -180 }}
                      animate={{ scale: 1, rotate: 0 }}
                      transition={{ 
                        type: "spring", 
                        stiffness: 200, 
                        damping: 15, 
                        delay: 0.8 + index * 0.2 
                      }}
                    >
                      <milestone.icon className="w-8 h-8 text-white relative z-10" />
                    </motion.div>
                  </motion.div>
                </div>

                {/* Mobile linear layout */}
                <motion.div 
                  className="flex items-center gap-4 md:hidden"
                  initial={{ opacity: 0, x: -50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, amount: 0.3 }}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                >
                  <motion.div 
                    className={`w-16 h-16 bg-gradient-to-br from-${milestone.color}-500 to-${milestone.color}-700 rounded-full flex items-center justify-center border-4 border-[#0D052B] shadow-lg shadow-${milestone.color}-500/30 flex-shrink-0 relative overflow-hidden`}
                    whileHover={{ scale: 1.1, rotate: 10 }}
                    animate={{ 
                      y: [-3, 3, -3],
                      transition: { 
                        duration: 3, 
                        repeat: Infinity, 
                        ease: "easeInOut",
                        delay: index * 0.5 
                      }
                    }}
                  >
                    <motion.div
                      className={`absolute inset-0 bg-gradient-to-br from-${milestone.color}-400 to-${milestone.color}-600 rounded-full opacity-0`}
                      animate={{ 
                        opacity: [0, 0.3, 0],
                        scale: [1, 1.2, 1]
                      }}
                      transition={{ 
                        duration: 2, 
                        repeat: Infinity, 
                        delay: index * 0.5 
                      }}
                    />
                    <milestone.icon className="w-8 h-8 text-white relative z-10" />
                  </motion.div>
                  
                  <motion.div 
                    className="bg-[#1A103A]/80 backdrop-blur-sm border border-purple-500/30 rounded-2xl p-4 flex-1"
                    whileHover={{ scale: 1.02, y: -2 }}
                    transition={{ type: "spring", stiffness: 300, damping: 20 }}
                  >
                    <div className="mb-2">
                      <StatusBadge status={milestone.status} />
                    </div>
                    <h3 className={`text-xl font-bold text-${milestone.color}-400 mb-1`}>
                      {milestone.quarter}
                    </h3>
                    <h4 className="text-md font-semibold text-white mb-2">
                      {milestone.title}
                    </h4>
                    <p className="text-gray-300 text-sm">
                      {milestone.description}
                    </p>
                  </motion.div>
                </motion.div>
                
                <div className="hidden md:block md:w-1/2"></div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
}
