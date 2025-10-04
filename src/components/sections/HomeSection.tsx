import { motion } from "motion/react";
import { useState } from "react";
import { Button } from "../ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "../ui/card";
import { Badge } from "../ui/badge";
import { ImageWithFallback } from "../figma/ImageWithFallback";
import {
  Smartphone,
  Tractor,
  Globe,
  Satellite,
  Sun,
  ArrowRight,
  X,
  Zap,
} from "lucide-react";

interface HomeSectionProps {
  onSectionChange: (section: string) => void;
}

export function HomeSection({ onSectionChange }: HomeSectionProps) {
  const [expandedCard, setExpandedCard] = useState<number | null>(null);

  const impactCards = [
    {
      id: 1,
      title: "Your Tech",
      icon: <Smartphone className="w-12 h-12 text-space-aurora-purple" />,
      description:
        "Solar storms can interrupt GPS and Wi-Fi. That means your games and maps might stop working!",
      expandedContent:
        "When solar storms hit Earth's magnetic field, they can interfere with satellite signals. This means your phone's GPS might show you in the wrong location, your internet might slow down, and even video calls might get choppy! It's like the Sun is playing pranks on our technology! 📱✨",
      bgColor: "bg-space-aurora-purple/20",
      borderColor: "border-space-aurora-purple/30",
    },
    {
      id: 2,
      title: "Farming & Food",
      icon: <Tractor className="w-12 h-12 text-space-earth-green" />,
      description:
        "Farmers use machines and satellites to grow food. Space weather can disturb electricity and signals.",
      expandedContent:
        "Modern farmers depend on GPS to plant crops in perfect rows and use satellites to monitor soil moisture. When space weather disrupts these systems, farmers might plant seeds in the wrong places or miss when crops need water. This can affect how much food is grown and even impact food prices at the grocery store! 🚜🌾",
      bgColor: "bg-space-earth-green/20",
      borderColor: "border-space-earth-green/30",
    },
    {
      id: 3,
      title: "Our Planet & Space",
      icon: <Globe className="w-12 h-12 text-space-earth-blue" />,
      description:
        "Solar storms can make auroras glow, but also damage satellites and even risk astronaut safety.",
      expandedContent:
        "Solar storms create the beautiful Northern and Southern Lights (auroras) that dance in the sky! But they can also damage expensive satellites and put astronauts in danger from harmful radiation. Space agencies have to constantly monitor space weather to keep our space explorers safe! 🌍✨",
      bgColor: "bg-space-earth-blue/20",
      borderColor: "border-space-earth-blue/30",
    },
  ];

  const nasaMissions = [
    { name: "SOHO", description: "watches Sun bursts", icon: "🔭" },
    { name: "SDO", description: "Sun pics", icon: "📸" },
    { name: "Parker", description: "close to Sun", icon: "🚀" },
    { name: "MMS", description: "Earth magnetic", icon: "🌍" },
    { name: "THEMIS", description: "Earth magnetic", icon: "⚡" },
    { name: "Curiosity", description: "Mars effects", icon: "🤖" },
  ];

  return (
    <div
      className="min-h-screen pt-20 pb-16"
      style={{
        paddingTop: "10rem",
      }}
    >
      {/* Hero Section */}
      <motion.section
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-16"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <div className="text-center">
          {/* Animated Banner with Sun sneezing */}
          <motion.div
            className="relative mb-8 max-w-5xl mx-auto rounded-2xl overflow-hidden"
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.8 }}
          >
            <ImageWithFallback
              src="https://images.unsplash.com/photo-1645235142939-096560a17aab?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzb2xhciUyMGZsYXJlJTIwc3VuJTIwZXhwbG9zaW9uJTIwYnJpZ2h0JTIwYnVyc3R8ZW58MXx8fHwxNzU5NTM1MzQ0fDA&ixlib=rb-4.1.0&q=80&w=1080"
              alt="Bright solar flare burst from the Sun's surface"
              className="w-full h-64 md:h-80 object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />

            {/* Animated Sun "sneezing" particles */}
            <motion.div
              className="absolute top-4 left-1/4 text-6xl"
              animate={{
                rotate: [0, 10, -5, 0],
                scale: [1, 1.1, 1],
              }}
              transition={{ duration: 3, repeat: Infinity }}
            >
              ☀️
            </motion.div>

            {/* Particle animation */}
            {[...Array(8)].map((_, i) => (
              <motion.div
                key={i}
                className="absolute text-2xl"
                style={{
                  top: `${30 + Math.random() * 40}%`,
                  left: `${40 + Math.random() * 20}%`,
                }}
                animate={{
                  x: [0, 100 + i * 20, 200 + i * 30],
                  y: [0, -20 + i * 10, 40 - i * 15],
                  opacity: [1, 0.7, 0],
                  scale: [1, 0.8, 0.5],
                }}
                transition={{
                  duration: 2 + i * 0.3,
                  repeat: Infinity,
                  delay: i * 0.2,
                }}
              >
                ✨
              </motion.div>
            ))}

            {/* Hero Text Overlay */}
            <div className="absolute bottom-8 left-8 right-8 text-center text-white">
              <motion.h1
                className="space-heading text-3xl md:text-5xl lg:text-6xl mb-4"
                animate={{
                  textShadow: [
                    "0 0 20px #FFD700",
                    "0 0 40px #FFD700",
                    "0 0 20px #FFD700",
                  ],
                }}
                transition={{ duration: 3, repeat: Infinity }}
              >
                When the Sun Sneezes, Earth Feels It! 🤧
              </motion.h1>
              <p className="text-lg md:text-xl mb-6 max-w-3xl mx-auto">
                Learn how the Sun and space weather affect our Earth in simple,
                fun, and interactive ways.
              </p>
            </div>
          </motion.div>

          {/* Main CTA Buttons */}
          <motion.div
            className="flex flex-col md:flex-row gap-6 justify-center items-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8, duration: 0.8 }}
          >
            <motion.button
              onClick={() => onSectionChange("learn")}
              className="bg-space-sun text-black px-8 py-4 rounded-xl text-lg space-heading shadow-lg"
              whileHover={{
                scale: 1.05,
                boxShadow: "0 0 25px rgba(255, 215, 0, 0.5)",
                y: -5,
              }}
              whileTap={{ scale: 0.95 }}
              transition={{ type: "spring", stiffness: 400, damping: 17 }}
            >
              🚀 Start Learning
            </motion.button>

            <motion.button
              onClick={() => onSectionChange("solar-storms")}
              className="bg-space-orange text-white px-8 py-4 rounded-xl text-lg space-heading shadow-lg"
              whileHover={{
                scale: 1.05,
                boxShadow: "0 0 25px rgba(255, 152, 0, 0.5)",
                y: -5,
              }}
              whileTap={{ scale: 0.95 }}
              transition={{ type: "spring", stiffness: 400, damping: 17 }}
            >
              ⚡ Explore Solar Storms & Flares
            </motion.button>
          </motion.div>
        </div>
      </motion.section>

      {/* What is Space Weather Section */}
      <motion.section
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-16"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1, duration: 0.8 }}
      >
        <Card className="bg-white/10 backdrop-blur-sm border-white/20 text-white">
          <CardHeader className="flex flex-row flex-wrap justify-between items-center gap-2">
            <div>
              <div className="relative mb-6">
                <motion.div
                  className="text-6xl mb-4 px-8"
                  animate={{
                    rotate: [0, 5, -5, 0],
                    scale: [1, 1.1, 1],
                  }}
                  transition={{ duration: 4, repeat: Infinity }}
                >
                  ☀️
                </motion.div>
                <motion.div
                  className="absolute -top-2 -right-2 text-2xl"
                  animate={{
                    x: [0, 10, 20],
                    y: [0, -5, 10],
                    opacity: [1, 0.7, 0],
                  }}
                  transition={{ duration: 2, repeat: Infinity }}
                >
                  💫
                </motion.div>
              </div>
              <CardTitle className="space-heading text-3xl text-space-sun mb-4">
                What is Space Weather?
              </CardTitle>
              <CardDescription className="text-gray-300 text-lg max-w-3xl mx-auto">
                Space weather is like the Earth's weather… but it happens in
                space! The Sun sends out energy that can affect Earth's
                satellites, power, and even farming.
              </CardDescription>
            </div>
            <div>
              <img
                src="/flare.jpg"
                alt="Solar Flare"
                className="rounded-lg shadow-lg"
                style={{ width: "100%", maxHeight: 350, objectFit: "cover" }}
              />
            </div>
          </CardHeader>
          <CardContent className="text-center">
            <Button
              onClick={() => onSectionChange("space-weather")}
              className="bg-space-aurora-purple text-white hover:bg-space-aurora-purple/80 text-lg px-8 py-3"
            >
              Know More <ArrowRight className="w-5 h-5 ml-2" />
            </Button>
          </CardContent>
        </Card>
      </motion.section>

      {/* Impact Section - Why Does Space Weather Matter? */}
      <motion.section
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-16"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.2, duration: 0.8 }}
      >
        <div className="text-center mb-12">
          <h2 className="space-heading text-3xl md:text-4xl text-space-sun mb-4">
            Why Does Space Weather Matter? 🤔
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            It doesn't just happen in space… it affects us here on Earth too!
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {impactCards.map((card, index) => (
            <motion.div
              key={card.id}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.4 + index * 0.2, duration: 0.6 }}
            >
              <Card
                className={`${card.bgColor} backdrop-blur-sm border ${
                  card.borderColor
                } text-white h-full transition-all duration-300 ${
                  expandedCard === card.id ? "transform scale-105" : ""
                }`}
              >
                <CardHeader className="text-center">
                  <motion.div
                    className="mb-4"
                    whileHover={{ scale: 1.1, rotate: 10 }}
                    transition={{ type: "spring", stiffness: 400, damping: 17 }}
                  >
                    {card.icon}
                  </motion.div>
                  <CardTitle className="text-xl space-heading">
                    {card.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm mb-4">{card.description}</p>
                  <Button
                    onClick={() =>
                      setExpandedCard(expandedCard === card.id ? null : card.id)
                    }
                    variant="outline"
                    size="sm"
                    className="w-full border-white/30 text-white hover:bg-white/10"
                  >
                    See How <ArrowRight className="w-4 h-4 ml-2" />
                  </Button>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Expanded Card Popup */}
        {expandedCard && (
          <motion.div
            className="fixed inset-0 bg-black/70 backdrop-blur-sm z-50 flex items-center justify-center p-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.3 }}
            onClick={() => setExpandedCard(null)}
          >
            <motion.div
              className="bg-space-navy border border-white/20 rounded-2xl p-8 max-w-lg mx-auto text-white relative"
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.3 }}
              onClick={(e) => e.stopPropagation()}
            >
              <Button
                onClick={() => setExpandedCard(null)}
                variant="ghost"
                size="sm"
                className="absolute top-4 right-4 text-white hover:bg-white/10"
              >
                <X className="w-5 h-5" />
              </Button>

              {impactCards.find((card) => card.id === expandedCard) && (
                <div className="text-center">
                  <div className="mb-4">
                    {impactCards.find((card) => card.id === expandedCard)?.icon}
                  </div>
                  <h3 className="space-heading text-2xl mb-4 text-space-sun">
                    {
                      impactCards.find((card) => card.id === expandedCard)
                        ?.title
                    }
                  </h3>
                  <p className="leading-relaxed">
                    {
                      impactCards.find((card) => card.id === expandedCard)
                        ?.expandedContent
                    }
                  </p>
                </div>
              )}
            </motion.div>
          </motion.div>
        )}
      </motion.section>

      {/* NASA Missions Section */}
      <motion.section
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-16"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.6, duration: 0.8 }}
      >
        <Card className="bg-white/10 backdrop-blur-sm border-white/20 text-white">
          <CardHeader className="text-center">
            <CardTitle className="space-heading text-3xl text-space-orange mb-4">
              Who's Studying Space Weather? 🚀
            </CardTitle>
            <CardDescription className="text-gray-300 text-lg max-w-3xl mx-auto mb-6">
              NASA has special missions watching the Sun and Earth to keep us
              safe.
            </CardDescription>
            <div className="relative">
              <motion.div
                className="text-4xl"
                animate={{
                  y: [0, -10, 0],
                  rotate: [0, 5, -5, 0],
                }}
                transition={{ duration: 3, repeat: Infinity }}
              >
                🛰️🌍🛰️
              </motion.div>
            </div>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mb-8">
              {nasaMissions.map((mission, index) => (
                <motion.div
                  key={mission.name}
                  className="bg-space-sun/20 rounded-xl p-4 text-center"
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 1.8 + index * 0.1, duration: 0.5 }}
                  whileHover={{
                    scale: 1.05,
                    backgroundColor: "rgba(255, 215, 0, 0.3)",
                  }}
                >
                  <div className="text-2xl mb-2">{mission.icon}</div>
                  <h4 className="space-heading text-space-sun mb-1">
                    {mission.name}
                  </h4>
                  <p className="text-xs text-gray-300">{mission.description}</p>
                </motion.div>
              ))}
            </div>
          </CardContent>
        </Card>
      </motion.section>

      {/* Final CTA Banner */}
      <motion.section
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 2, duration: 0.8 }}
      >
        <Card className="bg-gradient-to-r from-space-sun/20 to-space-aurora-purple/20 backdrop-blur-sm border-white/20 text-white text-center">
          <CardContent className="py-12">
            <motion.h2
              className="space-heading text-3xl md:text-4xl text-space-sun mb-6"
              animate={{
                textShadow: [
                  "0 0 20px #FFD700",
                  "0 0 30px #FFD700",
                  "0 0 20px #FFD700",
                ],
              }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              Ready to become a Space Weather Explorer? 🌟
            </motion.h2>
            <p className="text-xl mb-8 max-w-2xl mx-auto text-gray-300">
              Join millions of kids around the world learning about the amazing
              connection between our Sun and Earth!
            </p>
            <Button
              onClick={() => onSectionChange("learn")}
              className="bg-space-sun text-black hover:bg-space-sun/80 text-xl px-12 py-6 space-heading"
            >
              🚀 Start the Adventure
            </Button>
          </CardContent>
        </Card>
      </motion.section>
    </div>
  );
}
