import { motion } from "motion/react";
import { useState } from "react";
import { Play, Shield, Star, Zap } from "lucide-react";

export function PlaySection() {
  const [gameScore, setGameScore] = useState(0);
  const [isGameActive, setIsGameActive] = useState(false);

  const startGame = () => {
    setIsGameActive(true);
    setGameScore(0);
  };

  const badges = [
    { name: "Solar Defender", icon: "🛡️", requirement: "Protect Earth from 5 solar storms" },
    { name: "Aurora Hunter", icon: "🌈", requirement: "Collect 10 aurora particles" },
    { name: "Space Weather Expert", icon: "🔬", requirement: "Answer 15 quiz questions correctly" },
    { name: "Cosmic Explorer", icon: "🚀", requirement: "Complete all mini-games" },
  ];

  return (
    <section className="min-h-screen pt-20 pb-16 px-4">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="space-heading text-4xl md:text-5xl text-space-sun mb-6">
            🎮 Play & Learn! 🎮
          </h1>
          
          <motion.div
            className="flex justify-center mb-6"
            animate={{ 
              scale: [1, 1.1, 1],
              rotate: [0, 5, -5, 0] 
            }}
            transition={{ duration: 3, repeat: Infinity }}
          >
            <div className="relative">
              {/* Floating aurora particles around the game area */}
              {[...Array(8)].map((_, i) => (
                <motion.div
                  key={i}
                  className="absolute w-3 h-3 rounded-full"
                  style={{
                    backgroundColor: i % 2 === 0 ? "#E91E63" : "#9C27B0",
                    left: `${Math.cos(i * 45 * Math.PI / 180) * 60 + 50}px`,
                    top: `${Math.sin(i * 45 * Math.PI / 180) * 60 + 50}px`,
                  }}
                  animate={{
                    y: [0, -20, 0],
                    opacity: [0.6, 1, 0.6],
                    scale: [0.8, 1.2, 0.8],
                  }}
                  transition={{
                    duration: 2 + i * 0.2,
                    repeat: Infinity,
                    delay: i * 0.3,
                  }}
                />
              ))}
              <div className="text-8xl">🌍</div>
            </div>
          </motion.div>
        </motion.div>

        {/* Game Cards Grid */}
        <div className="grid md:grid-cols-2 gap-8 mb-12">
          {/* Protect Earth Game */}
          <motion.div
            className="bg-white/10 backdrop-blur-sm rounded-xl p-8 border border-white/20"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3, duration: 0.6 }}
            whileHover={{ scale: 1.02 }}
          >
            <div className="text-center mb-6">
              <motion.div
                className="text-6xl mb-4"
                animate={{ rotate: [0, 10, -10, 0] }}
                transition={{ duration: 2, repeat: Infinity }}
              >
                🛡️
              </motion.div>
              <h3 className="space-heading text-2xl text-space-sun mb-4">
                Protect Planet Earth!
              </h3>
              <p className="text-white leading-relaxed">
                Use Earth's magnetic field to deflect incoming solar particles! 
                Learn how our planet's natural shield protects us from space weather.
              </p>
            </div>

            <div className="space-y-4">
              <div className="bg-space-navy/50 rounded-lg p-4">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-white">Score:</span>
                  <span className="text-space-sun">{gameScore}</span>
                </div>
                
                <motion.div
                  className="relative h-32 bg-gradient-to-b from-purple-900/30 to-blue-900/30 rounded-lg border border-white/20 overflow-hidden"
                  initial={{ opacity: 0.8 }}
                  animate={{ opacity: 1 }}
                >
                  {/* Earth representation */}
                  <motion.div
                    className="absolute bottom-4 left-1/2 transform -translate-x-1/2 text-3xl"
                    animate={{ scale: [1, 1.1, 1] }}
                    transition={{ duration: 2, repeat: Infinity }}
                  >
                    🌍
                  </motion.div>
                  
                  {/* Simulated solar particles */}
                  {isGameActive && (
                    <>
                      {[...Array(5)].map((_, i) => (
                        <motion.div
                          key={i}
                          className="absolute w-2 h-2 bg-space-sun rounded-full"
                          initial={{ x: Math.random() * 200, y: -10 }}
                          animate={{ y: 120 }}
                          transition={{
                            duration: 2 + Math.random(),
                            repeat: Infinity,
                            delay: i * 0.5,
                          }}
                        />
                      ))}
                    </>
                  )}
                  
                  {/* Magnetic field lines */}
                  <div className="absolute inset-0 pointer-events-none">
                    <svg className="w-full h-full">
                      <path
                        d="M 50 80 Q 100 40 150 80"
                        stroke="#4CAF50"
                        strokeWidth="2"
                        fill="none"
                        opacity="0.6"
                      />
                      <path
                        d="M 60 85 Q 100 45 140 85"
                        stroke="#4CAF50"
                        strokeWidth="2"
                        fill="none"
                        opacity="0.4"
                      />
                    </svg>
                  </div>
                </motion.div>
              </div>

              <motion.button
                onClick={startGame}
                className="w-full bg-space-earth-green text-white py-3 rounded-lg space-heading hover:bg-green-600 transition-colors"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Play className="inline mr-2" size={20} />
                {isGameActive ? "Game Active!" : "Start Protecting Earth!"}
              </motion.button>
            </div>
          </motion.div>

          {/* Aurora Collector Game */}
          <motion.div
            className="bg-white/10 backdrop-blur-sm rounded-xl p-8 border border-white/20"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.5, duration: 0.6 }}
            whileHover={{ scale: 1.02 }}
          >
            <div className="text-center mb-6">
              <motion.div
                className="text-6xl mb-4"
                animate={{ 
                  scale: [1, 1.2, 1],
                  rotateY: [0, 180, 360]
                }}
                transition={{ duration: 3, repeat: Infinity }}
              >
                🌈
              </motion.div>
              <h3 className="space-heading text-2xl text-space-sun mb-4">
                Catch the Aurora!
              </h3>
              <p className="text-white leading-relaxed">
                Collect beautiful aurora particles while avoiding harmful radiation! 
                Learn why some space weather creates pretty lights.
              </p>
            </div>

            <div className="space-y-4">
              <div className="grid grid-cols-2 gap-4 text-center">
                <div className="bg-space-aurora-purple/20 rounded-lg p-3">
                  <div className="text-2xl mb-1">⭐</div>
                  <div className="text-sm text-white">Collected</div>
                  <div className="text-space-sun">0</div>
                </div>
                <div className="bg-space-aurora-pink/20 rounded-lg p-3">
                  <div className="text-2xl mb-1">⚡</div>
                  <div className="text-sm text-white">Avoided</div>
                  <div className="text-space-sun">0</div>
                </div>
              </div>

              <motion.button
                className="w-full bg-space-aurora-purple text-white py-3 rounded-lg space-heading hover:bg-purple-600 transition-colors"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Star className="inline mr-2" size={20} />
                Start Aurora Hunt!
              </motion.button>
            </div>
          </motion.div>
        </div>

        {/* Game Tips */}
        <motion.div
          className="bg-gradient-to-r from-space-earth-blue/20 to-space-earth-green/20 rounded-xl p-8 border border-white/20 mb-12"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7 }}
        >
          <h3 className="space-heading text-2xl text-space-sun mb-6 text-center">
            🎯 Game Tips & Learning 🎯
          </h3>
          
          <div className="grid md:grid-cols-3 gap-6">
            <div className="text-center">
              <div className="text-4xl mb-3">🛡️</div>
              <h4 className="space-heading text-lg text-white mb-2">Earth's Shield</h4>
              <p className="text-sm text-white/80">
                Our magnetic field deflects most solar particles, protecting us like an invisible bubble!
              </p>
            </div>
            
            <div className="text-center">
              <div className="text-4xl mb-3">🌈</div>
              <h4 className="space-heading text-lg text-white mb-2">Aurora Magic</h4>
              <p className="text-sm text-white/80">
                When particles do get through, they create beautiful lights by exciting gas molecules!
              </p>
            </div>
            
            <div className="text-center">
              <div className="text-4xl mb-3">📡</div>
              <h4 className="space-heading text-lg text-white mb-2">Satellite Safety</h4>
              <p className="text-sm text-white/80">
                Strong storms can damage satellites, so we monitor space weather to protect them!
              </p>
            </div>
          </div>
        </motion.div>

        {/* Achievement Badges */}
        <motion.div
          className="text-center"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.9 }}
        >
          <h3 className="space-heading text-2xl text-space-sun mb-6">
            🏆 Unlock Space Badges! 🏆
          </h3>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {badges.map((badge, index) => (
              <motion.div
                key={index}
                className="bg-white/10 backdrop-blur-sm rounded-xl p-4 border border-white/20"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 1 + index * 0.1 }}
                whileHover={{ scale: 1.05 }}
              >
                <div className="text-3xl mb-2">{badge.icon}</div>
                <h4 className="space-heading text-sm text-white mb-2">{badge.name}</h4>
                <p className="text-xs text-white/70">{badge.requirement}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}