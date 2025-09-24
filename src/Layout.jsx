import React from "react";
import { AnimatePresence, motion } from "framer-motion";
import Navigation from "./components/navigation/Navigation.jsx";

const pageVariants = {
  initial: {
    opacity: 0,
    y: 20
  },
  in: {
    opacity: 1,
    y: 0
  },
  out: {
    opacity: 0,
    y: -20
  }
};

const pageTransition = {
  type: "tween",
  ease: "anticipate",
  duration: 0.5
};

export default function Layout({ children, currentPageName }) {
  return (
    <div className="min-h-screen bg-[#0D052B] text-white relative overflow-x-hidden">
      {/* Background Glows */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-purple-600/20 rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-fuchsia-500/20 rounded-full blur-3xl animate-pulse delay-1000"></div>

      <Navigation currentPageName={currentPageName} />
      
      <AnimatePresence mode="wait">
        <motion.main
          key={currentPageName}
          initial="initial"
          animate="in"
          exit="out"
          variants={pageVariants}
          transition={pageTransition}
          className="pt-24"
        >
          {children}
        </motion.main>
      </AnimatePresence>
    </div>
  );
}