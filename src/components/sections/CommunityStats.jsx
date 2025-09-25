import React, { useState, useEffect, useRef } from "react";
import { motion, useInView, useSpring, useTransform } from "framer-motion";
import { Users, TrendingUp, Globe, Zap, Star, Award, Target, Shield } from "lucide-react";

const stats = [
  {
    icon: Users,
    number: 10000,
    suffix: "+",
    label: "Early Adopters",
    color: "from-blue-500 to-cyan-500",
    description: "Active community members"
  },
  {
    icon: TrendingUp,
    number: 5.2,
    suffix: "M+",
    label: "Total Value Locked",
    color: "from-green-500 to-emerald-500",
    description: "Assets secured on platform"
  },
  {
    icon: Globe,
    number: 50,
    suffix: "+",
    label: "Countries",
    color: "from-purple-500 to-pink-500",
    description: "Global reach achieved"
  },
  {
    icon: Zap,
    number: 99.9,
    suffix: "%",
    label: "Uptime",
    color: "from-yellow-500 to-orange-500",
    description: "System reliability"
  }
];

// Animated Counter Component
const AnimatedCounter = ({ value, suffix, duration = 2 }) => {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  useEffect(() => {
    if (isInView) {
      const startTime = Date.now();
      const startValue = 0;
      const endValue = value;

      const timer = setInterval(() => {
        const elapsed = Date.now() - startTime;
        const progress = Math.min(elapsed / (duration * 1000), 1);
        
        // Easing function for smooth animation
        const easeOutQuart = 1 - Math.pow(1 - progress, 4);
        const currentValue = startValue + (endValue - startValue) * easeOutQuart;
        
        setCount(currentValue);
        
        if (progress >= 1) {
          clearInterval(timer);
        }
      }, 16); // ~60fps

      return () => clearInterval(timer);
    }
  }, [isInView, value, duration]);

  return (
    <span ref={ref}>
      {value >= 1000 ? Math.floor(count).toLocaleString() : count.toFixed(1)}
      {suffix}
    </span>
  );
};

export default function CommunityStats() {
  const containerRef = useRef(null);
  const isInView = useInView(containerRef, { once: true, amount: 0.3 });

  return (
    <section ref={containerRef} className="py-20 px-6 relative overflow-hidden">
      {/* Enhanced Background */}
      <div className="absolute inset-0 pointer-events-none">
        <motion.div
          className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.6, 0.3]
          }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-purple-500/5 rounded-full blur-3xl"
          animate={{
            scale: [1.2, 1, 1.2],
            opacity: [0.4, 0.7, 0.4]
          }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
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
              GROWING ECOSYSTEM
            </motion.span>
          </motion.h2>
          <motion.p 
            className="text-gray-400 text-lg md:text-xl max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            Join thousands of users already building the future of decentralized asset distribution.
          </motion.p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 50, rotateX: -15 }}
              whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
              viewport={{ once: true }}
              transition={{ 
                duration: 0.8, 
                delay: index * 0.1,
                type: "spring",
                stiffness: 100
              }}
              whileHover={{ 
                scale: 1.05,
                y: -10,
                rotateY: 5,
                transition: { duration: 0.3 }
              }}
              className="group text-center"
              style={{ transformStyle: "preserve-3d" }}
            >
              <div className="relative h-full">
                <motion.div 
                  className={`absolute -inset-4 bg-gradient-to-r ${stat.color} rounded-2xl blur opacity-20 group-hover:opacity-50 transition duration-1000`}
                  animate={{
                    scale: [1, 1.05, 1],
                    opacity: [0.2, 0.4, 0.2]
                  }}
                  transition={{ 
                    duration: 4, 
                    repeat: Infinity, 
                    delay: index * 0.5 
                  }}
                />
                <div className="relative bg-[#1A103A]/80 backdrop-blur-sm border border-white/10 rounded-2xl p-8 h-full flex flex-col justify-center">
                  <motion.div 
                    className={`w-16 h-16 bg-gradient-to-r ${stat.color} rounded-full flex items-center justify-center mx-auto mb-6 relative overflow-hidden`}
                    whileHover={{ 
                      scale: 1.1, 
                      rotate: 15,
                      transition: { duration: 0.3 }
                    }}
                  >
                    {/* Icon glow effect */}
                    <motion.div
                      className={`absolute inset-0 bg-gradient-to-r ${stat.color} rounded-full opacity-0 group-hover:opacity-30`}
                      animate={{
                        scale: [1, 1.2, 1],
                        opacity: [0, 0.3, 0]
                      }}
                      transition={{ 
                        duration: 2, 
                        repeat: Infinity, 
                        delay: index * 0.3 
                      }}
                    />
                    <stat.icon className="w-8 h-8 text-white relative z-10" />
                  </motion.div>
                  
                  <motion.div
                    className="text-4xl md:text-5xl font-bold text-white mb-2"
                    initial={{ scale: 0.5, opacity: 0 }}
                    whileInView={{ scale: 1, opacity: 1 }}
                    transition={{ 
                      delay: index * 0.1 + 0.5,
                      type: "spring",
                      stiffness: 200
                    }}
                  >
                    <AnimatedCounter 
                      value={stat.number} 
                      suffix={stat.suffix}
                      duration={2 + index * 0.2}
                    />
                  </motion.div>
                  
                  <motion.h3 
                    className="text-gray-300 font-semibold text-lg mb-2"
                    initial={{ y: 20, opacity: 0 }}
                    whileInView={{ y: 0, opacity: 1 }}
                    transition={{ delay: index * 0.1 + 0.7 }}
                  >
                    {stat.label}
                  </motion.h3>

                  <motion.p 
                    className="text-gray-500 text-sm"
                    initial={{ y: 20, opacity: 0 }}
                    whileInView={{ y: 0, opacity: 1 }}
                    transition={{ delay: index * 0.1 + 0.9 }}
                  >
                    {stat.description}
                  </motion.p>

                  {/* Progress bar */}
                  <motion.div
                    className="w-full bg-gray-800/50 rounded-full h-1 mt-4 overflow-hidden"
                    initial={{ opacity: 0, scaleX: 0 }}
                    whileInView={{ opacity: 1, scaleX: 1 }}
                    transition={{ delay: index * 0.1 + 1.1, duration: 1 }}
                  >
                    <motion.div
                      className={`h-full bg-gradient-to-r ${stat.color} rounded-full`}
                      initial={{ scaleX: 0, originX: 0 }}
                      whileInView={{ scaleX: 1, originX: 0 }}
                      transition={{ 
                        delay: index * 0.1 + 1.3, 
                        duration: 1.5,
                        ease: "easeOut"
                      }}
                    />
                  </motion.div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Additional Stats Row */}
        <motion.div
          className="mt-16 grid md:grid-cols-3 gap-8"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.5 }}
        >
          {[
            { icon: Star, label: "Community Rating", value: "4.9/5", color: "from-yellow-500 to-orange-500" },
            { icon: Award, label: "Awards Won", value: "12+", color: "from-purple-500 to-pink-500" },
            { icon: Shield, label: "Security Score", value: "A+", color: "from-green-500 to-emerald-500" }
          ].map((item, index) => (
            <motion.div
              key={item.label}
              className="text-center group"
              whileHover={{ scale: 1.05, y: -5 }}
              transition={{ duration: 0.3 }}
            >
              <div className="relative">
                <div className={`absolute -inset-2 bg-gradient-to-r ${item.color} rounded-xl blur opacity-20 group-hover:opacity-40 transition duration-500`} />
                <div className="relative bg-[#1A103A]/60 backdrop-blur-sm border border-white/10 rounded-xl p-6">
                  <motion.div 
                    className={`w-12 h-12 bg-gradient-to-r ${item.color} rounded-full flex items-center justify-center mx-auto mb-3`}
                    whileHover={{ rotate: 15 }}
                  >
                    <item.icon className="w-6 h-6 text-white" />
                  </motion.div>
                  <div className="text-2xl font-bold text-white mb-1">{item.value}</div>
                  <div className="text-gray-400 text-sm">{item.label}</div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}