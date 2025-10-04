import { motion } from "motion/react";
import { Github, Linkedin, Mail } from "lucide-react";
import { ImageWithFallback } from "../figma/ImageWithFallback";

interface TeamMember {
  name: string;
  role: string;
  description: string;
  avatar: string;
  color: string;
  image?: string;
}

export function AboutSection() {
  const teamMembers: TeamMember[] = [
    {
      name: "Ramy",
      role: "Project Leader & Data Scientist",
      description:
        "Leads the project and handles data integration, storytelling, video production, and scenario development. Passionate about making space science accessible to kids!",
      avatar: "👨‍🚀",
      color: "bg-space-sun",
      image: "/ramy.png",
    },
    {
      name: "Ahmed",
      role: "AI Specialist",
      description:
        "Develops AstroBot to answer kids' questions about space weather. Creates smart, fun responses that make learning interactive and engaging!",
      avatar: "🤖",
      color: "bg-space-earth-green",
      image: "/ahmed.png",
    },
    {
      name: "Ayman",
      role: "Frontend Developer",
      description:
        "Builds the Home page, Learn section, and interactive elements. Makes sure the website is fun, colorful, and easy for kids to navigate!",
      avatar: "💻",
      color: "bg-space-earth-blue",
      image: "/ayman.png",
    },
    {
      name: "Mohamed",
      role: "Backend Developer",
      description:
        "Creates the AI integration, game mechanics, and video streaming features. Ensures everything works smoothly behind the scenes!",
      avatar: "⚙️",
      color: "bg-space-aurora-purple",
      image: "/mohamed.png",
    },
    {
      name: "Yosra",
      role: "Video Editor",
      description:
        "Transforms storyboards into amazing animated videos! Adds graphics, motion effects, and kid-friendly narration to bring space weather to life!",
      avatar: "🎬",
      color: "bg-space-aurora-pink",
      image: "/yosra.png",
    },
    {
      name: "Omar",
      role: "UI/UX Designer",
      description:
        "Creates all the cartoon illustrations including the Sun, Earth, kids, and space weather phenomena for both the website and videos!",
      avatar: "🎨",
      color: "bg-space-orange",
      image: "/omar.png",
    },
  ];

  return (
    <section className="min-h-screen pt-20 pb-16 px-4">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="space-heading text-4xl md:text-5xl text-space-sun mb-6">
            👨‍🚀 Meet Our Space Team! 👩‍🚀
          </h1>

          <motion.div
            className="flex justify-center mb-8"
            animate={{
              y: [0, -20, 0],
              rotate: [0, 5, -5, 0],
            }}
            transition={{ duration: 4, repeat: Infinity }}
          >
            <ImageWithFallback
              src="https://images.unsplash.com/photo-1579388654549-1f4e8c79b5a4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxraWRzJTIwc3BhY2UlMjBhc3Ryb25hdXQlMjBpbGx1c3RyYXRpb258ZW58MXx8fHwxNzU5MzQ2MTgzfDA&ixlib=rb-4.1.0&q=80&w=1080"
              alt="Space team illustration"
              className="w-64 h-64 rounded-full object-cover border-4 border-space-sun shadow-2xl"
            />
          </motion.div>

          <p className="text-xl text-white max-w-4xl mx-auto leading-relaxed">
            We're a team of space enthusiasts who love sharing the wonders of
            space weather with kids around the world! 🌍✨
          </p>
        </motion.div>

        {/* Team Members Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {teamMembers.map((member, index) => (
            <motion.div
              key={index}
              className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 text-center"
              initial={{ opacity: 0, y: 50, rotateY: -90 }}
              animate={{ opacity: 1, y: 0, rotateY: 0 }}
              transition={{
                delay: index * 0.15,
                duration: 0.6,
                type: "spring",
                stiffness: 100,
              }}
              whileHover={{
                scale: 1.05,
                rotateY: 10,
                boxShadow: "0 20px 40px rgba(0, 0, 0, 0.3)",
              }}
            >
              <motion.div
                className={`w-20 h-20 ${member.color} rounded-full flex items-center justify-center text-3xl mx-auto mb-4 shadow-lg`}
                whileHover={{
                  scale: 1.2,
                  rotate: 360,
                  boxShadow: "0 0 30px rgba(255, 215, 0, 0.5)",
                }}
                transition={{ duration: 0.5 }}
              >
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-16 h-16 rounded-full object-cover"
                />
              </motion.div>

              <h3 className="space-heading text-xl text-space-sun mb-2">
                {member.name}
              </h3>

              <h4 className="text-white mb-4">{member.role}</h4>

              <p className="text-white/80 text-sm leading-relaxed">
                {member.description}
              </p>

              {/* Social Links Placeholder */}
              <div className="flex justify-center space-x-3 mt-4">
                <motion.button
                  className="p-2 bg-white/10 rounded-full text-white/60 hover:text-white hover:bg-white/20 transition-colors"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                >
                  <Github size={16} />
                </motion.button>
                <motion.button
                  className="p-2 bg-white/10 rounded-full text-white/60 hover:text-white hover:bg-white/20 transition-colors"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                >
                  <Mail size={16} />
                </motion.button>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Mission Statement */}
        <motion.div
          className="bg-gradient-to-r from-space-earth-blue/20 to-space-earth-green/20 rounded-xl p-8 border border-white/20 mb-12"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 1, duration: 0.8 }}
        >
          <h3 className="space-heading text-2xl text-space-sun mb-6 text-center">
            🚀 Our Mission 🚀
          </h3>

          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <p className="text-white leading-relaxed mb-4">
                We created SUN SIGHT for the NASA Space Apps Challenge 2025 to
                make space weather education fun and accessible for kids and
                young teens. Our goal is to teach how solar activity affects
                Earth through engaging stories, interactive games, and beautiful
                animations.
              </p>
              <p className="text-white leading-relaxed">
                We believe that understanding space weather helps kids
                appreciate both the beauty and power of our cosmic environment,
                inspiring the next generation of space scientists and engineers!
                🌟
              </p>
            </div>

            <div className="text-center">
              <motion.div
                className="text-8xl mb-4"
                animate={{
                  rotate: [0, 360],
                  scale: [1, 1.1, 1],
                }}
                transition={{ duration: 8, repeat: Infinity }}
              >
                🌌
              </motion.div>
              <p className="text-space-sun space-heading">
                Making Space Science Fun!
              </p>
            </div>
          </div>
        </motion.div>

        {/* Project Timeline */}
        <motion.div
          className="bg-white/10 backdrop-blur-sm rounded-xl p-8 border border-white/20"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.2 }}
        >
          <h3 className="space-heading text-2xl text-space-sun mb-8 text-center">
            📅 NASA Space Apps Challenge 2025 📅
          </h3>

          <div className="max-w-3xl mx-auto">
            <div className="relative">
              {/* Timeline line */}
              <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-space-sun/30"></div>

              <div className="space-y-8">
                <motion.div
                  className="flex items-center"
                  initial={{ opacity: 0, x: -50 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 1.4 }}
                >
                  <div className="flex-1 text-right pr-8">
                    <h4 className="space-heading text-white">
                      Challenge Selected
                    </h4>
                    <p className="text-white/80 text-sm">October 1, 2025</p>
                  </div>
                  <div className="w-4 h-4 bg-space-sun rounded-full relative z-10"></div>
                  <div className="flex-1 pl-8">
                    <p className="text-white/80 text-sm">
                      "Tell Us a Story: Space Weather Through the Eyes of
                      Earthlings"
                    </p>
                  </div>
                </motion.div>

                <motion.div
                  className="flex items-center"
                  initial={{ opacity: 0, x: 50 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 1.6 }}
                >
                  <div className="flex-1 text-right pr-8">
                    <p className="text-white/80 text-sm">
                      Team formation and project planning
                    </p>
                  </div>
                  <div className="w-4 h-4 bg-space-earth-green rounded-full relative z-10"></div>
                  <div className="flex-1 pl-8">
                    <h4 className="space-heading text-white">
                      Development Begins
                    </h4>
                    <p className="text-white/80 text-sm">October 2, 2025</p>
                  </div>
                </motion.div>

                <motion.div
                  className="flex items-center"
                  initial={{ opacity: 0, x: -50 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 1.8 }}
                >
                  <div className="flex-1 text-right pr-8">
                    <h4 className="space-heading text-white">
                      Submission Ready!
                    </h4>
                    <p className="text-white/80 text-sm">October 3, 2025</p>
                  </div>
                  <div className="w-4 h-4 bg-space-aurora-purple rounded-full relative z-10 animate-pulse"></div>
                  <div className="flex-1 pl-8">
                    <p className="text-white/80 text-sm">
                      Complete educational platform with stories, games, and AI
                      chat!
                    </p>
                  </div>
                </motion.div>
              </div>
            </div>
          </div>

          <motion.div
            className="text-center mt-8"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 2 }}
          >
            <p className="text-space-sun space-heading text-lg">
              🎯 Goal: Inspire kids to love space science! 🎯
            </p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
