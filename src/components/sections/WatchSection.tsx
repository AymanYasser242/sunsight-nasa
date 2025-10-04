import { motion } from "motion/react";
import { useState } from "react";
import { Play, Pause, Volume2, Subtitles } from "lucide-react";
import { ImageWithFallback } from "../figma/ImageWithFallback";

export function WatchSection() {
  const [isPlaying, setIsPlaying] = useState(true);
  const [hasSubtitles, setHasSubtitles] = useState(true);

  const videoClips = [
    {
      title: "The Solar Storm Adventure",
      duration: "3:45",
      description: "Join Captain Cosmos as solar storms race toward Earth!",
      thumbnail: "/storm.webp",
    },
    {
      title: "Aurora Lights Explained",
      duration: "2:30",
      description: "Discover why the sky dances with colorful lights!",
      thumbnail:
        "https://images.unsplash.com/photo-1694406805270-f3a93e91f4b6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhdXJvcmElMjBib3JlYWxpcyUyMHNwYWNlfGVufDF8fHx8MTc1OTM0NjE4NHww&ixlib=rb-4.1.0&q=80&w=1080",
    },
    {
      title: "Space Weather Heroes",
      duration: "4:20",
      description: "Meet the scientists who protect us from solar storms!",
      thumbnail:
        "https://images.unsplash.com/photo-1579388654549-1f4e8c79b5a4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxraWRzJTIwc3BhY2UlMjBhc3Ryb25hdXQlMjBpbGx1c3RyYXRpb258ZW58MXx8fHwxNzU5MzQ2MTgzfDA&ixlib=rb-4.1.0&q=80&w=1080",
    },
  ];

  const togglePlay = () => {
    setIsPlaying(!isPlaying);
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
            🎬 Watch Space Stories! 🎬
          </h1>

          <p className="text-xl text-white max-w-3xl mx-auto leading-relaxed">
            Join us on amazing animated adventures through space weather! Learn
            with fun characters and real NASA data! 🚀✨
          </p>
        </motion.div>

        {/* Main Video Player */}
        <motion.div
          className="mb-12"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.3, duration: 0.6 }}
        >
          <div className="bg-white/10 backdrop-blur-sm rounded-xl overflow-hidden border border-white/20">
            {/* Video Area */}
            <div className="relative aspect-video bg-gradient-to-br from-space-navy to-purple-900">
              <ImageWithFallback
                src="/storm3.gif"
                alt="Space weather adventure video thumbnail"
                className="w-full h-full object-cover"
              />

              {/* Play/Pause Overlay */}
              <div className="absolute inset-0 flex items-center justify-center bg-black/30">
                <motion.button
                  onClick={togglePlay}
                  className="bg-space-sun/90 text-space-navy p-6 rounded-full shadow-2xl"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  animate={
                    isPlaying
                      ? {
                          scale: [1, 1.05, 1],
                          boxShadow: [
                            "0 0 20px rgba(255, 215, 0, 0.5)",
                            "0 0 30px rgba(255, 215, 0, 0.8)",
                            "0 0 20px rgba(255, 215, 0, 0.5)",
                          ],
                        }
                      : {}
                  }
                  transition={{ duration: 1, repeat: isPlaying ? Infinity : 0 }}
                >
                  {isPlaying ? <Pause size={32} /> : <Play size={32} />}
                </motion.button>
              </div>

              {/* Floating space elements when playing */}
              {isPlaying && (
                <>
                  {[...Array(8)].map((_, i) => (
                    <motion.div
                      key={i}
                      className="absolute w-2 h-2 bg-white rounded-full"
                      style={{
                        left: `${Math.random() * 100}%`,
                        top: `${Math.random() * 100}%`,
                      }}
                      animate={{
                        opacity: [0, 1, 0],
                        scale: [0, 1, 0],
                      }}
                      transition={{
                        duration: 3,
                        repeat: Infinity,
                        delay: i * 0.5,
                      }}
                    />
                  ))}
                </>
              )}

              {/* Progress Bar */}
              <div className="absolute bottom-0 left-0 right-0 h-1 bg-black/50">
                <motion.div
                  className="h-full bg-space-sun"
                  initial={{ width: "0%" }}
                  animate={{ width: isPlaying ? "100%" : "0%" }}
                  transition={{ duration: isPlaying ? 180 : 0 }} // 3 minutes
                />
              </div>
            </div>

            {/* Video Controls */}
            <div className="p-6">
              <div className="flex items-center justify-between mb-4">
                <h3 className="space-heading text-xl text-white">
                  The Solar Storm Adventure
                </h3>
                <span className="text-space-sun">3:45</span>
              </div>

              <p className="text-white/80 leading-relaxed mb-6">
                Join Captain Cosmos and Luna the Lunar Bot as they witness an
                amazing solar storm journey from the Sun to Earth! See how
                coronal mass ejections race through space, interact with Earth's
                magnetic field, and create beautiful auroras. Includes real NASA
                data and kid-friendly explanations!
              </p>

              <div className="flex items-center space-x-4">
                <motion.button
                  onClick={() => setHasSubtitles(!hasSubtitles)}
                  className={`flex items-center space-x-2 px-4 py-2 rounded-lg transition-colors ${
                    hasSubtitles
                      ? "bg-space-earth-green text-white"
                      : "bg-white/10 text-white/80"
                  }`}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Subtitles size={16} />
                  <span>Subtitles</span>
                </motion.button>

                <motion.button
                  className="flex items-center space-x-2 px-4 py-2 bg-white/10 rounded-lg text-white/80 hover:bg-white/20 transition-colors"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Volume2 size={16} />
                  <span>Audio</span>
                </motion.button>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Video Clips Grid */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
        >
          <h3 className="space-heading text-2xl text-space-sun mb-8 text-center">
            🎥 More Space Adventures 🎥
          </h3>

          <div className="grid md:grid-cols-3 gap-6 mb-12">
            {videoClips.map((clip, index) => (
              <motion.div
                key={index}
                className="bg-white/10 backdrop-blur-sm rounded-xl overflow-hidden border border-white/20 cursor-pointer"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.7 + index * 0.1 }}
                whileHover={{ scale: 1.02, y: -5 }}
                whileTap={{ scale: 0.98 }}
              >
                <div className="relative">
                  <ImageWithFallback
                    src={clip.thumbnail}
                    alt={clip.title}
                    className="w-full h-40 object-cover"
                  />
                  <div className="absolute inset-0 bg-black/40 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity">
                    <motion.div
                      className="bg-space-sun/90 text-space-navy p-3 rounded-full"
                      whileHover={{ scale: 1.1 }}
                    >
                      <Play size={20} />
                    </motion.div>
                  </div>
                  <div className="absolute bottom-2 right-2 bg-black/70 text-white px-2 py-1 rounded text-xs">
                    {clip.duration}
                  </div>
                </div>

                <div className="p-4">
                  <h4 className="space-heading text-lg text-white mb-2">
                    {clip.title}
                  </h4>
                  <p className="text-white/80 text-sm">{clip.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Fun Facts */}
        <motion.div
          className="bg-gradient-to-r from-space-aurora-purple/20 to-space-aurora-pink/20 rounded-xl p-8 border border-white/20"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1 }}
        >
          <h3 className="space-heading text-2xl text-space-sun mb-6 text-center">
            🌟 Behind the Scenes 🌟
          </h3>

          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h4 className="space-heading text-lg text-white mb-4">
                Real Science!
              </h4>
              <p className="text-white/90 leading-relaxed">
                Our videos use actual NASA and ESA data to show how space
                weather really works! The animations are based on satellite
                observations and computer models that scientists use to predict
                solar storms.
              </p>
            </div>

            <div>
              <h4 className="space-heading text-lg text-white mb-4">
                Kid-Friendly Voice!
              </h4>
              <p className="text-white/90 leading-relaxed">
                All our videos feature kid narrators and use simple language
                that's fun and easy to understand. Subtitles are available in
                multiple languages, and we include sound effects that make space
                weather come alive! 🎵
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
