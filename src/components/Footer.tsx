import { motion } from "motion/react";
import { Heart, Github, Twitter, Facebook, Instagram } from "lucide-react";

export function Footer() {
  const socialLinks = [
    { icon: Github, label: "GitHub", href: "#" },
    { icon: Twitter, label: "Twitter", href: "#" },
    { icon: Facebook, label: "Facebook", href: "#" },
    { icon: Instagram, label: "Instagram", href: "#" },
  ];

  return (
    <motion.footer
      className="bg-space-navy/90 backdrop-blur-sm border-t border-white/20 py-8 px-4"
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
    >
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-3 gap-8 items-center">
          {/* Copyright */}
          <div className="text-center md:text-left">
            <motion.div
              className="space-heading text-xl text-space-sun mb-2"
              whileHover={{ scale: 1.05 }}
            >
              ✨ SUN SIGHT
            </motion.div>
            <p className="text-white/80 text-sm">© 2025 SUN SIGHT Team</p>
            <p className="text-white/60 text-xs mt-1">
              NASA Space Apps Challenge 2025
            </p>
          </div>

          {/* Social Links */}
          <div className="flex justify-center space-x-4">
            {socialLinks.map((social, index) => {
              const Icon = social.icon;
              return (
                <motion.a
                  key={index}
                  href={social.href}
                  className="p-3 bg-white/10 rounded-full text-white/70 hover:text-white hover:bg-white/20 transition-colors"
                  whileHover={{ scale: 1.1, y: -2 }}
                  whileTap={{ scale: 0.9 }}
                  aria-label={social.label}
                >
                  <Icon size={18} />
                </motion.a>
              );
            })}
          </div>

          {/* Made with Love */}
          <div className="text-center md:text-right">
            <motion.p
              className="text-white/80 text-sm flex items-center justify-center md:justify-end"
              animate={{
                textShadow: [
                  "0 0 10px rgba(255, 255, 255, 0.3)",
                  "0 0 20px rgba(255, 255, 255, 0.5)",
                  "0 0 10px rgba(255, 255, 255, 0.3)",
                ],
              }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              Made with{" "}
              <motion.span
                className="mx-1 text-red-400"
                animate={{ scale: [1, 1.2, 1] }}
                transition={{ duration: 1, repeat: Infinity }}
              >
                <Heart size={16} fill="currentColor" />
              </motion.span>
              for kids everywhere
            </motion.p>
            <p className="text-white/60 text-xs mt-1">
              Inspiring the next generation of space scientists! 🚀
            </p>
          </div>
        </div>

        {/* Floating Stars */}
        <div className="relative mt-8 h-8">
          {[...Array(5)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-1 h-1 bg-white rounded-full"
              style={{
                left: `${20 + i * 15}%`,
                top: "50%",
              }}
              animate={{
                opacity: [0.3, 1, 0.3],
                scale: [0.5, 1, 0.5],
              }}
              transition={{
                duration: 2 + i * 0.5,
                repeat: Infinity,
                delay: i * 0.3,
              }}
            />
          ))}
        </div>

        {/* Educational Note */}
        <motion.div
          className="text-center mt-6 pt-6 border-t border-white/10"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
        >
          <p className="text-white/60 text-xs max-w-2xl mx-auto leading-relaxed">
            This educational platform uses real space weather data and
            scientific concepts to teach kids about solar activity and its
            effects on Earth. All content is designed to be fun, safe, and
            scientifically accurate! 🌟🔬
          </p>
        </motion.div>
      </div>
    </motion.footer>
  );
}
