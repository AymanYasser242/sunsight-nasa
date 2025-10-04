import { motion } from "motion/react";
import { useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";
import { ImageWithFallback } from "../figma/ImageWithFallback";

interface AccordionItem {
  id: string;
  title: string;
  content: string;
  image: string;
  emoji: string;
}

export function LearnSection() {
  const [openAccordion, setOpenAccordion] = useState<string | null>("what-is");

  const accordionData: AccordionItem[] = [
    {
      id: "what-is",
      title: "What is Space Weather?",
      emoji: "🌞",
      content: "Space weather comes from our Sun! It includes solar wind (streams of particles), solar flares (sudden bursts of energy), coronal mass ejections (huge clouds of plasma), and sunspots (dark spots on the Sun). These events happen in cycles and can travel to Earth super fast! Fun fact: Space weather can even disrupt pigeon races because birds use magnetic fields to navigate!",
      image: "https://images.unsplash.com/photo-1752643719495-b2917a2c9d4c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzcGFjZSUyMHdlYXRoZXIlMjBpbmZvZ3JhcGhpY3xlbnwxfHx8fDE3NTkzNDYxODN8MA&ixlib=rb-4.1.0&q=80&w=1080"
    },
    {
      id: "the-sun",
      title: "The Amazing Sun",
      emoji: "☀️",
      content: "Our Sun is a giant ball of super hot gas that's constantly active! Solar flares are like huge explosions that shoot energy into space. Coronal mass ejections send clouds of plasma toward Earth. Sunspots are cooler, darker areas caused by magnetic fields. Scientists use satellites to watch the Sun and predict space weather just like meteorologists predict regular weather!",
      image: "https://science.nasa.gov/wp-content/uploads/2024/05/sdo-x5pt8-flare-0122ut-may-11-2024-171-193-131.jpg"
    },
    {
      id: "effects",
      title: "Effects on Earth",
      emoji: "🌍",
      content: "When space weather reaches Earth, it can cause satellites to glitch, GPS to be inaccurate, radios to have static, and even power grids to fail! But it also creates beautiful auroras - those dancing lights in the sky! Earth's magnetic field acts like a protective shield, deflecting most harmful particles away from us.",
      image: "https://images.unsplash.com/photo-1694406805270-f3a93e91f4b6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhdXJvcmElMjBib3JlYWxpcyUyMHNwYWNlfGVufDF8fHx8MTc1OTM0NjE4NHww&ixlib=rb-4.1.0&q=80&w=1080"
    },
    {
      id: "stories",
      title: "Real Space Weather Stories",
      emoji: "📚",
      content: "In 1989, a huge solar storm caused a blackout in Canada, leaving 6 million people without power! The 1859 Carrington Event was so strong that telegraph wires sparked and people could see auroras as far south as the Caribbean! Pilots flying near the poles sometimes see amazing light shows, and astronauts have to hide in special areas of the space station during big storms!",
      image: "https://images.unsplash.com/photo-1579388654549-1f4e8c79b5a4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxraWRzJTIwc3BhY2UlMjBhc3Ryb25hdXQlMjBpbGx1c3RyYXRpb258ZW58MXx8fHwxNzU5MzQ2MTgzfDA&ixlib=rb-4.1.0&q=80&w=1080"
    }
  ];

  const toggleAccordion = (id: string) => {
    setOpenAccordion(openAccordion === id ? null : id);
  };

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
            🔬 Discover Space Weather! 🔬
          </h1>
          
          {/* Animated infographic placeholder */}
          <motion.div
            className="relative mb-8"
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.8 }}
          >
            <div className="flex items-center justify-center space-x-8 mb-6">
              <motion.div
                className="text-6xl"
                animate={{ rotate: [0, 360] }}
                transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
              >
                ☀️
              </motion.div>
              
              <motion.div
                className="flex space-x-2"
                animate={{ x: [0, 20, 0] }}
                transition={{ duration: 3, repeat: Infinity }}
              >
                {[...Array(5)].map((_, i) => (
                  <motion.div
                    key={i}
                    className="w-2 h-2 bg-space-sun rounded-full"
                    animate={{ opacity: [0.3, 1, 0.3] }}
                    transition={{ 
                      duration: 1, 
                      repeat: Infinity, 
                      delay: i * 0.2 
                    }}
                  />
                ))}
              </motion.div>
              
              <motion.div
                className="text-6xl"
                animate={{ 
                  scale: [1, 1.1, 1],
                  rotate: [0, 5, -5, 0]
                }}
                transition={{ duration: 4, repeat: Infinity }}
              >
                🌍
              </motion.div>
            </div>
            <p className="text-lg text-center">
              Solar particles travel from Sun to Earth!
            </p>
          </motion.div>
        </motion.div>

        {/* Accordion Cards */}
        <div className="space-y-6">
          {accordionData.map((item, index) => (
            <motion.div
              key={item.id}
              className="bg-white/10 backdrop-blur-sm rounded-xl overflow-hidden border border-white/20"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2, duration: 0.6 }}
            >
              <motion.button
                onClick={() => toggleAccordion(item.id)}
                className="w-full p-6 text-left flex items-center justify-between hover:bg-white/5 transition-colors"
                whileHover={{ scale: 1.01 }}
                whileTap={{ scale: 0.99 }}
              >
                <div className="flex items-center space-x-4">
                  <span className="text-3xl">{item.emoji}</span>
                  <h3 className="text-xl md:text-2xl space-heading text-white">
                    {item.title}
                  </h3>
                </div>
                <motion.div
                  animate={{ rotate: openAccordion === item.id ? 180 : 0 }}
                  transition={{ duration: 0.3 }}
                >
                  <ChevronDown className="text-white" size={24} />
                </motion.div>
              </motion.button>

              <motion.div
                initial={false}
                animate={{
                  height: openAccordion === item.id ? "auto" : 0,
                  opacity: openAccordion === item.id ? 1 : 0,
                }}
                transition={{ duration: 0.4, ease: "easeInOut" }}
                style={{ overflow: "hidden" }}
              >
                <div className="p-6 pt-0">
                  <div className="grid md:grid-cols-2 gap-6 items-center">
                    <motion.div
                      initial={{ x: -20, opacity: 0 }}
                      animate={{ 
                        x: openAccordion === item.id ? 0 : -20,
                        opacity: openAccordion === item.id ? 1 : 0
                      }}
                      transition={{ delay: 0.2 }}
                    >
                      <p className="text-white leading-relaxed text-lg">
                        {item.content}
                      </p>
                    </motion.div>
                    
                    <motion.div
                      initial={{ x: 20, opacity: 0 }}
                      animate={{ 
                        x: openAccordion === item.id ? 0 : 20,
                        opacity: openAccordion === item.id ? 1 : 0
                      }}
                      transition={{ delay: 0.3 }}
                    >
                      <ImageWithFallback
                        src={item.image}
                        alt={item.title}
                        className="w-full rounded-lg shadow-lg"
                      />
                    </motion.div>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          ))}
        </div>

        {/* Fun Facts Section */}
        <motion.div
          className="mt-12 text-center"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1 }}
        >
          <div className="bg-gradient-to-r from-space-aurora-purple/20 to-space-aurora-pink/20 rounded-xl p-8 border border-white/20">
            <h3 className="space-heading text-2xl text-space-sun mb-4">
              🌟 Did You Know? 🌟
            </h3>
            <p className="text-lg leading-relaxed">
              The fastest solar particles can travel from the Sun to Earth in just 8 minutes! 
              That's the same time it takes light to reach us. During major solar storms, 
              auroras can be seen as far south as Florida and Texas! 🌈✨
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}