import React from "react";
import { motion } from "framer-motion";
import { Users, TrendingUp, Globe, Zap } from "lucide-react";

const stats = [
  {
    icon: Users,
    number: "10K+",
    label: "Early Adopters",
    color: "from-blue-500 to-cyan-500"
  },
  {
    icon: TrendingUp,
    number: "$5M+",
    label: "Total Value Locked",
    color: "from-green-500 to-emerald-500"
  },
  {
    icon: Globe,
    number: "50+",
    label: "Countries",
    color: "from-purple-500 to-pink-500"
  },
  {
    icon: Zap,
    number: "99.9%",
    label: "Uptime",
    color: "from-yellow-500 to-orange-500"
  }
];

export default function CommunityStats() {
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
              GROWING ECOSYSTEM
            </span>
          </h2>
          <p className="text-gray-400 text-lg md:text-xl max-w-3xl mx-auto">
            Join thousands of users already building the future of decentralized asset distribution.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ 
                duration: 0.8, 
                delay: index * 0.2
              }}
              whileHover={{ 
                scale: 1.05,
                y: -5
              }}
              className="group text-center"
            >
              <div className="relative">
                <div className={`absolute -inset-4 bg-gradient-to-r ${stat.color} rounded-2xl blur opacity-20 group-hover:opacity-40 transition duration-1000`}></div>
                <div className="relative bg-[#1A103A]/60 backdrop-blur-sm border border-white/10 rounded-2xl p-8">
                  <motion.div 
                    className={`w-16 h-16 bg-gradient-to-r ${stat.color} rounded-full flex items-center justify-center mx-auto mb-4`}
                  >
                    <stat.icon className="w-8 h-8 text-white" />
                  </motion.div>
                  
                  <motion.div
                    className="text-4xl font-bold text-white mb-2"
                    initial={{ scale: 0.5, opacity: 0 }}
                    whileInView={{ scale: 1, opacity: 1 }}
                    transition={{ 
                      delay: index * 0.2 + 0.5,
                      type: "spring",
                      stiffness: 200
                    }}
                  >
                    {stat.number}
                  </motion.div>
                  
                  <motion.div 
                    className="text-gray-400 font-medium"
                    initial={{ y: 20, opacity: 0 }}
                    whileInView={{ y: 0, opacity: 1 }}
                    transition={{ delay: index * 0.2 + 0.7 }}
                  >
                    {stat.label}
                  </motion.div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}