import React from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight, Download, MessageCircle } from "lucide-react";

export default function CallToAction() {
  return (
    <section className="py-20 px-6 relative overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 bg-[#0D052B]"></div>
      <motion.div
        className="absolute inset-0 opacity-20"
        animate={{
          background: [
            "radial-gradient(circle at 20% 80%, rgba(192, 38, 211, 0.2) 0%, transparent 40%)",
            "radial-gradient(circle at 80% 20%, rgba(168, 85, 247, 0.2) 0%, transparent 40%)",
            "radial-gradient(circle at 40% 40%, rgba(219, 39, 119, 0.2) 0%, transparent 40%)",
            "radial-gradient(circle at 20% 80%, rgba(192, 38, 211, 0.2) 0%, transparent 40%)",
          ]
        }}
        transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
      />

      <div className="max-w-4xl mx-auto text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-4xl md:text-6xl font-bold mb-6">
            <span className="text-transparent bg-gradient-to-r from-fuchsia-400 via-purple-400 to-pink-400 bg-clip-text">
              JOIN THE REVOLUTION
            </span>
          </h2>
          <p className="text-gray-300 text-lg md:text-xl mb-12 max-w-2xl mx-auto leading-relaxed">
            Be part of the movement that's redefining how the world interacts with digital assets. 
            The future of decentralized distribution starts now.
          </p>
        </motion.div>

        <motion.div 
          className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-12"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <motion.div 
            whileHover={{ scale: 1.05, y: -5 }} 
            whileTap={{ scale: 0.95 }}
            className="relative group"
          >
            <div className="absolute -inset-0.5 bg-gradient-to-r from-fuchsia-600 to-purple-600 rounded-lg blur opacity-40 group-hover:opacity-100 transition duration-1000"></div>
            <Button 
              className="relative bg-gradient-to-r from-fuchsia-500 to-purple-600 text-white hover:from-fuchsia-600 hover:to-purple-700 px-8 py-4 text-lg font-semibold tracking-wide transition-all duration-300 flex items-center gap-2"
            >
              <Download className="w-5 h-5" />
              DOWNLOAD WHITEPAPER
              <motion.div className="group-hover:translate-x-1 transition-transform">
                <ArrowRight className="w-5 h-5" />
              </motion.div>
            </Button>
          </motion.div>
          
          <motion.div 
            whileHover={{ scale: 1.05, y: -5 }} 
            whileTap={{ scale: 0.95 }}
          >
            <Button 
              variant="outline" 
              className="border-2 border-purple-500 text-purple-400 hover:bg-purple-500 hover:text-white px-8 py-4 text-lg font-semibold tracking-wide transition-all duration-300 flex items-center gap-2"
            >
              <MessageCircle className="w-5 h-5" />
              JOIN COMMUNITY
            </Button>
          </motion.div>
        </motion.div>

        {/* Newsletter Signup */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="bg-[#1A103A]/60 backdrop-blur-sm border border-purple-500/30 rounded-2xl p-8 max-w-2xl mx-auto"
        >
          <h3 className="text-2xl font-bold text-white mb-4">Stay Updated</h3>
          <p className="text-gray-400 mb-6">Get the latest news and updates about BIDA development.</p>
          <div className="flex flex-col sm:flex-row gap-4">
            <input
              type="email"
              placeholder="Enter your email address"
              className="flex-1 px-4 py-3 bg-black/50 border border-purple-500/30 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-purple-400 transition-colors"
            />
            <Button className="bg-gradient-to-r from-purple-500 to-fuchsia-500 text-white px-6 py-3 font-semibold">
              Subscribe
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}