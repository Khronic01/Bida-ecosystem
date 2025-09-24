import React from "react";
import { motion } from "framer-motion";
import { Brain, Shield, Zap, Globe } from "lucide-react";

const technologies = [
  {
    icon: Brain,
    title: "AI-Powered",
    description: "Advanced algorithms ensure fairness, prevent fraud, and optimize user experience across all rails.",
    color: "from-cyan-500 to-blue-500"
  },
  {
    icon: Shield,
    title: "Blockchain Security",
    description: "Immutable smart contracts guarantee trustless execution and transparent operations.",
    color: "from-green-500 to-emerald-500"
  },
  {
    icon: Zap,
    title: "Lightning Fast",
    description: "Optimized infrastructure delivers instant transactions with minimal fees.",
    color: "from-yellow-500 to-orange-500"
  },
  {
    icon: Globe,
    title: "Global Access",
    description: "Borderless platform enabling worldwide participation without geographical restrictions.",
    color: "from-purple-500 to-pink-500"
  }
];

export default function TechnologyHighlights() {
  return (
    <section className="py-20 px-6 relative overflow-hidden">
      {/* Background Animation */}
      <div className="absolute inset-0 pointer-events-none">
        <motion.div
          className="absolute top-1/4 left-1/4 w-64 h-64 bg-fuchsia-500/5 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.2, 1],
          }}
          transition={{ duration: 20, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-500/5 rounded-full blur-3xl"
          animate={{
            scale: [1.2, 1, 1.2],
          }}
          transition={{ duration: 25, repeat: Infinity, ease: "easeInOut" }}
        />
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-4xl md:text-6xl font-bold mb-6">
            <span className="text-transparent bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500 bg-clip-text">
              CUTTING-EDGE TECHNOLOGY
            </span>
          </h2>
          <p className="text-gray-400 text-lg md:text-xl max-w-3xl mx-auto">
            Built on advanced blockchain infrastructure with AI integration for unparalleled performance and security.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {technologies.map((tech, index) => (
            <motion.div
              key={tech.title}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ 
                duration: 0.6, 
                delay: index * 0.1
              }}
              whileHover={{ 
                y: -10,
                scale: 1.05 
              }}
              className="group relative"
            >
              <div className={`absolute -inset-0.5 bg-gradient-to-r ${tech.color} rounded-xl blur opacity-20 group-hover:opacity-40 transition duration-1000`}></div>
              <div className="relative bg-[#1A103A]/60 backdrop-blur-sm border border-white/10 rounded-xl p-6 text-center h-full">
                <motion.div 
                  className={`w-16 h-16 bg-gradient-to-r ${tech.color} rounded-full flex items-center justify-center mx-auto mb-4 relative overflow-hidden`}
                  whileHover={{ rotate: 15 }}
                >
                  <tech.icon className="w-8 h-8 text-white relative z-10" />
                </motion.div>
                
                <h3 className="text-xl font-bold text-white mb-3">
                  {tech.title}
                </h3>
                
                <p className="text-gray-300 text-sm leading-relaxed">
                  {tech.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}