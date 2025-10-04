import { motion } from "motion/react";
import { Home, Book, Bot, Gamepad2, Play, Users } from "lucide-react";

interface NavigationProps {
  activeSection: string;
  onSectionChange: (section: string) => void;
}

export function Navigation({
  activeSection,
  onSectionChange,
}: NavigationProps) {
  const navItems = [
    { id: "home", label: "Home", icon: Home },
    { id: "learn", label: "Learn", icon: Book },
    { id: "interact", label: "Interact", icon: Bot },
    { id: "play", label: "Play", icon: Gamepad2 },
    { id: "watch", label: "Watch", icon: Play },
    { id: "about", label: "About", icon: Users },
  ];

  return (
    <motion.nav
      className="fixed top-0 left-0 right-0 z-50 bg-space-navy/90 backdrop-blur-sm border-b border-white/20"
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="max-w-6xl mx-auto px-4 py-3">
        <div className="flex items-center justify-between">
          <motion.div
            className="space-heading text-2xl text-space-sun"
            whileHover={{ scale: 1.05 }}
          >
            <img
              src="/logo.png"
              alt="Sunsight Logo"
              className="inline-block mr-2"
              style={{ width: 200 }}
            />
          </motion.div>

          <div className="flex items-center space-x-1 md:space-x-4">
            {navItems.map((item) => {
              const Icon = item.icon;
              const isActive = activeSection === item.id;

              return (
                <motion.button
                  key={item.id}
                  onClick={() => onSectionChange(item.id)}
                  className={`flex items-center space-x-2 px-3 py-2 rounded-lg transition-all duration-200 ${
                    isActive
                      ? "bg-space-sun text-space-navy"
                      : "text-white hover:bg-white/10"
                  }`}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Icon size={20} />
                  <span className="hidden md:block">{item.label}</span>
                </motion.button>
              );
            })}
          </div>
        </div>
      </div>
    </motion.nav>
  );
}
