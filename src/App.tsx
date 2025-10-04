import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";

// Components
import { StarField } from "./components/StarField";
import { FloatingParticles } from "./components/FloatingParticles";
import { Navigation } from "./components/Navigation";
import { BackToTop } from "./components/BackToTop";
import { Footer } from "./components/Footer";

// Sections
import { HomeSection } from "./components/sections/HomeSection";
import { LearnSection } from "./components/sections/LearnSection";
import { InteractSection } from "./components/sections/InteractSection";
import { PlaySection } from "./components/sections/PlaySection";
import { WatchSection } from "./components/sections/WatchSection";
import { AboutSection } from "./components/sections/AboutSection";
import { SolarStormsSection } from "./components/sections/SolarStormsSection";
import { SpaceWeatherSection } from "./components/sections/SpaceWeatherSection";

export default function App() {
  const [activeSection, setActiveSection] = useState("home");
  const [isLoading, setIsLoading] = useState(true);

  // Simulate loading for a better user experience
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  const renderSection = () => {
    switch (activeSection) {
      case "home":
        return <HomeSection onSectionChange={setActiveSection} />;
      case "learn":
        return <LearnSection />;
      case "interact":
        return <InteractSection />;
      case "play":
        return <PlaySection />;
      case "watch":
        return <WatchSection />;
      case "about":
        return <AboutSection />;
      case "solar-storms":
        return <SolarStormsSection onSectionChange={setActiveSection} />;
      case "space-weather":
        return <SpaceWeatherSection onSectionChange={setActiveSection} />;
      default:
        return <HomeSection onSectionChange={setActiveSection} />;
    }
  };

  if (isLoading) {
    return (
      <div className="min-h-screen bg-space-navy flex items-center justify-center overflow-hidden">
        <StarField />
        <motion.div
          className="text-center"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
        >
          <motion.h1
            className="space-heading text-4xl md:text-6xl text-space-sun mb-8"
            animate={{
              textShadow: [
                "0 0 20px #FFD700",
                "0 0 40px #FFD700",
                "0 0 20px #FFD700",
              ],
            }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            ✨ SUN SIGHT ✨
          </motion.h1>

          <motion.div
            className="flex items-center justify-center space-x-4 mb-8"
            animate={{ y: [0, -10, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            <motion.div
              className="text-4xl"
              animate={{ rotate: [0, 360] }}
              transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
            >
              🚀
            </motion.div>
            <span className="text-white text-xl">
              Loading your space adventure...
            </span>
            <motion.div
              className="text-4xl"
              animate={{ rotate: [0, -360] }}
              transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
            >
              🌟
            </motion.div>
          </motion.div>

          {/* Loading animation */}
          <div className="flex justify-center space-x-2">
            {[...Array(5)].map((_, i) => (
              <motion.div
                key={i}
                className="w-3 h-3 bg-space-sun rounded-full"
                animate={{
                  scale: [1, 1.5, 1],
                  opacity: [0.5, 1, 0.5],
                }}
                transition={{
                  duration: 1,
                  repeat: Infinity,
                  delay: i * 0.2,
                }}
              />
            ))}
          </div>
        </motion.div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-space-navy relative overflow-x-hidden">
      {/* Background Elements */}
      <StarField />
      <FloatingParticles />

      {/* Navigation */}
      <Navigation
        activeSection={activeSection}
        onSectionChange={setActiveSection}
      />

      {/* Main Content */}
      <main className="relative z-20">
        <AnimatePresence mode="wait">
          <motion.div
            key={activeSection}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.5 }}
          >
            {renderSection()}
          </motion.div>
        </AnimatePresence>
      </main>

      {/* Footer */}
      <Footer />

      {/* Back to Top Button */}
      <BackToTop />

      {/* Easter Eggs - Clickable Stars */}
      <motion.div
        className="fixed top-1/4 right-8 text-2xl cursor-pointer z-30"
        whileHover={{ scale: 1.2, rotate: 180 }}
        whileTap={{ scale: 0.8 }}
        onClick={() => {
          // Easter egg: Show a fun fact
          alert(
            "🌟 Fun Fact: The Sun's core is 27 million degrees Fahrenheit! That's 150 times hotter than boiling water! ☀️"
          );
        }}
        animate={{
          opacity: [0.7, 1, 0.7],
          rotate: [0, 5, -5, 0],
        }}
        transition={{ duration: 3, repeat: Infinity }}
      >
        ⭐
      </motion.div>

      <motion.div
        className="fixed bottom-1/3 left-8 text-xl cursor-pointer z-30"
        whileHover={{ scale: 1.3, rotate: -180 }}
        whileTap={{ scale: 0.8 }}
        onClick={() => {
          // Another easter egg
          alert(
            "🌌 Did you know? Aurora lights can be seen from space as a glowing ring around Earth's poles! 🛰️"
          );
        }}
        animate={{
          opacity: [0.5, 1, 0.5],
          scale: [1, 1.1, 1],
        }}
        transition={{ duration: 4, repeat: Infinity, delay: 1 }}
      >
        ✨
      </motion.div>

      {/* Accessibility Features */}
      <button
        className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 bg-white text-black px-4 py-2 rounded-lg z-50"
        onClick={() => setActiveSection("home")}
      >
        Skip to main content
      </button>
    </div>
  );
}
