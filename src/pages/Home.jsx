import React from "react";
import Hero from "../components/sections/Hero.jsx";
import ProblemSolution from "../components/sections/ProblemSolution.jsx";
import RailsOverview from "../components/sections/RailsOverview.jsx";
import TechnologyHighlights from "../components/sections/TechnologyHighlights.jsx";
import AppShowcase from "../components/sections/AppShowcase.jsx";
import CommunityStats from "../components/sections/CommunityStats.jsx";
import CallToAction from "../components/sections/CallToAction.jsx";

export default function Home() {
  return (
    <div className="relative">
      <Hero />
      <ProblemSolution />
      <RailsOverview />
      <TechnologyHighlights />
      <AppShowcase />
      <CommunityStats />
      <CallToAction />
    </div>
  );
}