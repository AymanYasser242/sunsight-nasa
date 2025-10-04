import { motion } from "motion/react";
import { useState } from "react";
import { Send, Bot } from "lucide-react";
import { ImageWithFallback } from "../figma/ImageWithFallback";

interface ChatMessage {
  id: number;
  text: string;
  isBot: boolean;
  timestamp: Date;
}

export function InteractSection() {
  const [messages, setMessages] = useState<ChatMessage[]>([
    {
      id: 1,
      text: "Hi there, space explorer! 👋 I'm AstroBot, your friendly space weather guide! Ask me anything about the Sun, space weather, or how it affects Earth. Try asking 'Why do auroras glow?' or 'Can space storms hurt us?' Let's explore the cosmos together! 🌌🚀",
      isBot: true,
      timestamp: new Date(),
    },
  ]);
  const [inputText, setInputText] = useState("");

  const botResponses: { [key: string]: string } = {
    aurora: "Auroras are like nature's light show! 🌈 When solar particles hit Earth's magnetic field, they collide with gases in our atmosphere. Oxygen makes green and red lights, while nitrogen creates blue and purple! It's like cosmic fireworks! ✨",
    sun: "Our Sun is amazing! ☀️ It's a giant ball of hot gas (plasma) that's constantly bubbling and erupting. Solar flares are like huge explosions, and coronal mass ejections are like cosmic snowballs flying through space!",
    earth: "Earth has a superhero power - its magnetic field! 🌍 This invisible shield protects us from most harmful solar particles. Without it, space weather could strip away our atmosphere like it did to Mars!",
    storm: "Space storms can't hurt people directly, but they can cause problems! 🌪️ They might make satellites glitch, cause power outages, or make GPS less accurate. Astronauts have to hide in special shielded areas during big storms!",
    flare: "Solar flares are the biggest explosions in our solar system! 🔥 They can release as much energy as billions of atomic bombs! The biggest one we know about happened in 1859 and made telegraph wires spark!",
    satellite: "Satellites are like space weather reporters! 📡 They watch the Sun 24/7 and warn us when storms are coming. Some storms can even push satellites off course or damage their electronics!",
    default: "That's a great question! 🤔 Space weather is full of amazing phenomena. The Sun constantly sends particles our way, creating beautiful auroras and sometimes causing technological hiccups. What specific aspect interests you most? 🌟",
  };

  const suggestedQuestions = [
    "Why do auroras glow?",
    "Can space storms hurt us?",
    "What are solar flares?",
    "How do satellites help?",
    "What protects Earth?",
    "Tell me about the Sun!",
  ];

  const getBotResponse = (userMessage: string): string => {
    const message = userMessage.toLowerCase();
    
    if (message.includes("aurora") || message.includes("glow")) {
      return botResponses.aurora;
    } else if (message.includes("sun")) {
      return botResponses.sun;
    } else if (message.includes("earth") || message.includes("protect")) {
      return botResponses.earth;
    } else if (message.includes("storm") || message.includes("hurt") || message.includes("danger")) {
      return botResponses.storm;
    } else if (message.includes("flare") || message.includes("explosion")) {
      return botResponses.flare;
    } else if (message.includes("satellite")) {
      return botResponses.satellite;
    } else {
      return botResponses.default;
    }
  };

  const sendMessage = (text: string) => {
    if (!text.trim()) return;

    // Add user message
    const userMessage: ChatMessage = {
      id: Date.now(),
      text: text,
      isBot: false,
      timestamp: new Date(),
    };

    setMessages(prev => [...prev, userMessage]);

    // Add bot response after a delay
    setTimeout(() => {
      const botMessage: ChatMessage = {
        id: Date.now() + 1,
        text: getBotResponse(text),
        isBot: true,
        timestamp: new Date(),
      };
      setMessages(prev => [...prev, botMessage]);
    }, 1000);

    setInputText("");
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    sendMessage(inputText);
  };

  return (
    <section className="min-h-screen pt-20 pb-16 px-4">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <motion.div
          className="text-center mb-8"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="space-heading text-4xl md:text-5xl text-space-sun mb-6">
            🤖 Ask AstroBot! 🤖
          </h1>
          
          <motion.div
            className="flex justify-center mb-6"
            animate={{ y: [0, -10, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            <ImageWithFallback
              src="https://images.unsplash.com/photo-1728464864506-5c0e9adfb079?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzcGFjZSUyMHJvYm90JTIwbWFzY290fGVufDF8fHx8MTc1OTM0NjE4NXww&ixlib=rb-4.1.0&q=80&w=1080"
              alt="AstroBot - Your friendly space weather guide"
              className="w-32 h-32 rounded-full object-cover border-4 border-space-sun"
            />
          </motion.div>
        </motion.div>

        {/* Chat Interface */}
        <motion.div
          className="bg-white/10 backdrop-blur-sm rounded-xl border border-white/20 overflow-hidden"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.3, duration: 0.6 }}
        >
          {/* Chat Messages */}
          <div className="h-96 overflow-y-auto p-6 space-y-4">
            {messages.map((message) => (
              <motion.div
                key={message.id}
                className={`flex ${message.isBot ? "justify-start" : "justify-end"}`}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4 }}
              >
                <div className={`flex items-start space-x-3 max-w-xs md:max-w-md`}>
                  {message.isBot && (
                    <motion.div
                      className="w-8 h-8 bg-space-sun rounded-full flex items-center justify-center"
                      animate={{ rotate: [0, 360] }}
                      transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
                    >
                      <Bot size={16} className="text-space-navy" />
                    </motion.div>
                  )}
                  
                  <motion.div
                    className={`p-3 rounded-lg ${
                      message.isBot
                        ? "bg-space-earth-green text-white"
                        : "bg-space-earth-blue text-white"
                    }`}
                    whileHover={{ scale: 1.02 }}
                  >
                    <p className="text-sm leading-relaxed">{message.text}</p>
                  </motion.div>
                  
                  {!message.isBot && (
                    <div className="w-8 h-8 bg-space-aurora-purple rounded-full flex items-center justify-center">
                      <span className="text-white text-sm">👦</span>
                    </div>
                  )}
                </div>
              </motion.div>
            ))}
          </div>

          {/* Suggested Questions */}
          <div className="px-6 py-4 border-t border-white/20">
            <p className="text-sm text-white/80 mb-3">Try asking:</p>
            <div className="flex flex-wrap gap-2">
              {suggestedQuestions.map((question, index) => (
                <motion.button
                  key={index}
                  onClick={() => sendMessage(question)}
                  className="px-3 py-1 bg-white/10 hover:bg-white/20 rounded-full text-sm text-white border border-white/30 transition-colors"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  {question}
                </motion.button>
              ))}
            </div>
          </div>

          {/* Input Form */}
          <form onSubmit={handleSubmit} className="p-6 border-t border-white/20">
            <div className="flex space-x-3">
              <input
                type="text"
                value={inputText}
                onChange={(e) => setInputText(e.target.value)}
                placeholder="Ask AstroBot about space weather..."
                className="flex-1 px-4 py-3 bg-white/10 border border-white/30 rounded-lg text-white placeholder-white/60 focus:outline-none focus:border-space-sun focus:ring-2 focus:ring-space-sun/50"
              />
              <motion.button
                type="submit"
                className="px-6 py-3 bg-space-sun text-space-navy rounded-lg hover:bg-yellow-400 transition-colors"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                disabled={!inputText.trim()}
              >
                <Send size={20} />
              </motion.button>
            </div>
          </form>
        </motion.div>

        {/* Fun Facts */}
        <motion.div
          className="mt-8 text-center"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8 }}
        >
          <div className="bg-gradient-to-r from-space-aurora-purple/20 to-space-aurora-pink/20 rounded-xl p-6 border border-white/20">
            <h3 className="space-heading text-xl text-space-sun mb-3">
              🌟 AstroBot Fun Fact 🌟
            </h3>
            <p className="text-white leading-relaxed">
              I know over 1000 space weather facts! Did you know that the strongest 
              solar storm ever recorded could be seen from space as a bright flash? 
              Keep asking questions to learn more amazing facts! 🚀✨
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}