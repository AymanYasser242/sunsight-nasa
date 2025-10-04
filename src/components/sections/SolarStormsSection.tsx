import { motion } from "motion/react";
import { ArrowLeft, Zap, Sun, Globe, Satellite, Users, BookOpen, Lightbulb } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "../ui/card";
import { Button } from "../ui/button";
import { Badge } from "../ui/badge";
import { ImageWithFallback } from "../figma/ImageWithFallback";

interface SolarStormsSectionProps {
  onSectionChange: (section: string) => void;
}

export function SolarStormsSection({ onSectionChange }: SolarStormsSectionProps) {
  return (
    <div className="min-h-screen pt-20 pb-16">
      {/* Header */}
      <motion.div
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-12"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <Button
          variant="ghost"
          onClick={() => onSectionChange("home")}
          className="mb-6 text-white hover:text-space-sun hover:bg-white/10 transition-colors"
        >
          <ArrowLeft className="w-4 h-4 mr-2" />
          Back to Home
        </Button>
        
        <div className="text-center">
          <motion.h1
            className="space-heading text-4xl md:text-6xl text-space-sun mb-6"
            animate={{ 
              textShadow: [
                "0 0 20px #FFD700",
                "0 0 40px #FFD700", 
                "0 0 20px #FFD700"
              ]
            }}
            transition={{ duration: 3, repeat: Infinity }}
          >
            ☀️ Solar Storms & Flares ⚡
          </motion.h1>
          
          <motion.p
            className="text-xl text-gray-300 max-w-3xl mx-auto mb-8"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.8 }}
          >
            When the Sun gets angry, it sends powerful bursts of energy into space! 
            Let's explore these incredible solar explosions and how they affect our planet.
          </motion.p>
          
          {/* Hero Image */}
          <motion.div
            className="relative rounded-2xl overflow-hidden max-w-4xl mx-auto mb-12"
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ delay: 0.5, duration: 0.8 }}
          >
            <ImageWithFallback
              src="https://images.unsplash.com/photo-1645235142939-096560a17aab?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzb2xhciUyMGZsYXJlJTIwc3VuJTIwZXhwbG9zaW9uJTIwYnJpZ2h0JTIwYnVyc3R8ZW58MXx8fHwxNzU5NTM1MzQ0fDA&ixlib=rb-4.1.0&q=80&w=1080"
              alt="Brilliant solar flare explosion from the Sun's surface"
              className="w-full h-64 md:h-96 object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
            <div className="absolute bottom-4 left-4 text-white">
              <p className="text-sm opacity-80">🌟 A massive solar flare eruption!</p>
            </div>
          </motion.div>
        </div>
      </motion.div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid gap-8">
          
          {/* What Are Solar Storms? */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7, duration: 0.8 }}
          >
            <Card className="bg-white/10 backdrop-blur-sm border-white/20 text-white">
              <CardHeader>
                <CardTitle className="space-heading text-3xl text-space-sun flex items-center">
                  <Sun className="w-8 h-8 mr-3" />
                  What Are Solar Storms?
                </CardTitle>
                <CardDescription className="text-gray-300 text-lg">
                  Solar storms are like the Sun's temper tantrums! 🌪️
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <p className="text-lg leading-relaxed">
                  Imagine the Sun as a giant ball of super hot gas that sometimes gets really excited and 
                  throws energy into space! These are called <strong className="text-space-sun">solar storms</strong>. 
                  They happen when the Sun's magnetic fields get all tangled up and then SNAP! - 
                  releasing huge amounts of energy.
                </p>
                
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="bg-space-sun/20 p-6 rounded-xl">
                    <Zap className="w-10 h-10 text-space-sun mb-3" />
                    <h4 className="text-xl mb-2 text-space-sun">Solar Flares</h4>
                    <p>Sudden bright flashes of light and energy - like the Sun taking a super bright photo! 📸</p>
                  </div>
                  
                  <div className="bg-space-aurora-purple/20 p-6 rounded-xl">
                    <Globe className="w-10 h-10 text-space-aurora-purple mb-3" />
                    <h4 className="text-xl mb-2 text-space-aurora-purple">CMEs (Coronal Mass Ejections)</h4>
                    <p>Giant clouds of particles that the Sun throws into space - like cosmic snowballs! ❄️</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>

          {/* What Causes Solar Storms? */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.9, duration: 0.8 }}
          >
            <Card className="bg-white/10 backdrop-blur-sm border-white/20 text-white">
              <CardHeader>
                <CardTitle className="space-heading text-3xl text-space-aurora-pink flex items-center">
                  <Lightbulb className="w-8 h-8 mr-3" />
                  What Causes These Space Explosions?
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <p className="text-lg leading-relaxed">
                  The Sun has invisible magnetic field lines, kind of like rubber bands made of energy. 
                  Sometimes these "rubber bands" get twisted and stretched until they break and snap back! 
                  When this happens, it creates solar storms that race through space at super fast speeds.
                </p>
                
                <div className="bg-gradient-to-r from-space-sun/20 to-space-orange/20 p-6 rounded-xl">
                  <h4 className="text-xl mb-4 text-space-sun">🔥 Fun Fact!</h4>
                  <p>Solar storms can travel from the Sun to Earth in just 1-3 days - that's like driving 93 million miles at highway speed!</p>
                </div>
              </CardContent>
            </Card>
          </motion.div>

          {/* Effects on Earth */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.1, duration: 0.8 }}
          >
            <Card className="bg-white/10 backdrop-blur-sm border-white/20 text-white">
              <CardHeader>
                <CardTitle className="space-heading text-3xl text-space-earth-blue flex items-center">
                  <Globe className="w-8 h-8 mr-3" />
                  How Do Solar Storms Affect Earth?
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="grid md:grid-cols-3 gap-6">
                  <div className="text-center">
                    <div className="w-20 h-20 bg-space-aurora-purple/20 rounded-full flex items-center justify-center mx-auto mb-4">
                      <span className="text-3xl">📱</span>
                    </div>
                    <h4 className="text-lg mb-2 text-space-aurora-purple">Technology Effects</h4>
                    <p>GPS might get confused, phones could lose signal, and satellites might go "offline"</p>
                  </div>
                  
                  <div className="text-center">
                    <div className="w-20 h-20 bg-space-earth-green/20 rounded-full flex items-center justify-center mx-auto mb-4">
                      <span className="text-3xl">🌈</span>
                    </div>
                    <h4 className="text-lg mb-2 text-space-earth-green">Beautiful Auroras</h4>
                    <p>Creates amazing colorful lights in the sky - nature's own light show!</p>
                  </div>
                  
                  <div className="text-center">
                    <div className="w-20 h-20 bg-space-sun/20 rounded-full flex items-center justify-center mx-auto mb-4">
                      <span className="text-3xl">⚡</span>
                    </div>
                    <h4 className="text-lg mb-2 text-space-sun">Power Systems</h4>
                    <p>Can cause power outages and make electricity act strange</p>
                  </div>
                </div>
                
                {/* Aurora Image */}
                <div className="mt-8">
                  <motion.div
                    className="relative rounded-xl overflow-hidden"
                    whileHover={{ scale: 1.02 }}
                    transition={{ duration: 0.3 }}
                  >
                    <ImageWithFallback
                      src="https://images.unsplash.com/photo-1723561791365-cf12c5cb4c6a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhdXJvcmElMjBib3JlYWxpcyUyMG5vcnRoZXJuJTIwbGlnaHRzJTIwY29sb3JmdWx8ZW58MXx8fHwxNzU5NTM1MzQ2fDA&ixlib=rb-4.1.0&q=80&w=1080"
                      alt="Beautiful aurora borealis dancing in the night sky"
                      className="w-full h-48 md:h-64 object-cover"
                    />
                    <div className="absolute bottom-4 left-4 text-white">
                      <Badge className="bg-space-aurora-purple text-white">
                        🌌 Aurora caused by solar particles!
                      </Badge>
                    </div>
                  </motion.div>
                </div>
              </CardContent>
            </Card>
          </motion.div>

          {/* NASA Studies */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.3, duration: 0.8 }}
          >
            <Card className="bg-white/10 backdrop-blur-sm border-white/20 text-white">
              <CardHeader>
                <CardTitle className="space-heading text-3xl text-space-orange flex items-center">
                  <Satellite className="w-8 h-8 mr-3" />
                  How NASA Studies Solar Storms
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <p className="text-lg leading-relaxed">
                  NASA has special space detectives (satellites) that watch the Sun 24/7! 
                  They help us predict when solar storms are coming, just like weather forecasters 
                  predict rain. This helps protect our technology and astronauts in space.
                </p>
                
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="bg-space-orange/20 p-6 rounded-xl">
                    <h4 className="text-xl mb-3 text-space-orange">🛰️ Space Weather Satellites</h4>
                    <ul className="space-y-2">
                      <li>• <strong>SOHO:</strong> Watches the Sun's corona</li>
                      <li>• <strong>SDO:</strong> Takes amazing Sun photos</li>
                      <li>• <strong>Parker Solar Probe:</strong> Flies super close to the Sun!</li>
                    </ul>
                  </div>
                  
                  <div className="bg-space-earth-blue/20 p-6 rounded-xl">
                    <h4 className="text-xl mb-3 text-space-earth-blue">🌍 Earth Protection</h4>
                    <ul className="space-y-2">
                      <li>• Early warning systems</li>
                      <li>• Satellite protection protocols</li>
                      <li>• Astronaut safety measures</li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>

          {/* Get Involved */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.5, duration: 0.8 }}
          >
            <Card className="bg-gradient-to-r from-space-sun/20 to-space-aurora-purple/20 backdrop-blur-sm border-white/20 text-white">
              <CardHeader>
                <CardTitle className="space-heading text-3xl text-space-sun flex items-center">
                  <Users className="w-8 h-8 mr-3" />
                  Become a Solar Storm Detective! 🕵️
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <p className="text-lg leading-relaxed">
                  You can help study space weather too! Here's how kids and teens can get involved:
                </p>
                
                <div className="grid md:grid-cols-3 gap-6">
                  <div className="text-center">
                    <BookOpen className="w-12 h-12 text-space-sun mx-auto mb-3" />
                    <h4 className="text-lg mb-2">Learn More</h4>
                    <p>Visit NASA's Space Weather website and watch solar flare videos</p>
                  </div>
                  
                  <div className="text-center">
                    <span className="text-4xl block mb-3">📸</span>
                    <h4 className="text-lg mb-2">Aurora Photography</h4>
                    <p>Help scientists by taking pictures of auroras in your area</p>
                  </div>
                  
                  <div className="text-center">
                    <span className="text-4xl block mb-3">🎓</span>
                    <h4 className="text-lg mb-2">Future Scientists</h4>
                    <p>Study STEM subjects to become a space weather researcher!</p>
                  </div>
                </div>
                
                <div className="text-center mt-8">
                  <Button
                    onClick={() => onSectionChange("interact")}
                    className="bg-space-sun text-black hover:bg-space-sun/80 text-lg px-8 py-3"
                  >
                    Ask AstroBot About Solar Storms! 🤖
                  </Button>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </div>
    </div>
  );
}