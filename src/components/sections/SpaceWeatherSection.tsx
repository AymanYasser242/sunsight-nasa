import { motion } from "motion/react";
import { ArrowLeft, Thermometer, Satellite, Tractor, Users, Rocket, Monitor, Globe2 } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "../ui/card";
import { Button } from "../ui/button";
import { Badge } from "../ui/badge";
import { ImageWithFallback } from "../figma/ImageWithFallback";

interface SpaceWeatherSectionProps {
  onSectionChange: (section: string) => void;
}

export function SpaceWeatherSection({ onSectionChange }: SpaceWeatherSectionProps) {
  const missions = [
    {
      name: "SOHO",
      description: "Solar and Heliospheric Observatory - watches the Sun's corona and solar wind",
      icon: "🛰️",
      color: "space-sun"
    },
    {
      name: "SDO",
      description: "Solar Dynamics Observatory - takes high-resolution images of the Sun",
      icon: "📷",
      color: "space-orange"
    },
    {
      name: "Parker Solar Probe",
      description: "Flies closer to the Sun than any spacecraft before!",
      icon: "🚀",
      color: "space-aurora-pink"
    },
    {
      name: "MMS",
      description: "Magnetospheric Multiscale - studies Earth's magnetic field",
      icon: "🌍",
      color: "space-earth-blue"
    },
    {
      name: "THEMIS",
      description: "Studies how Earth's magnetosphere responds to solar activity",
      icon: "⚡",
      color: "space-aurora-purple"
    },
    {
      name: "Curiosity",
      description: "Even on Mars, this rover studies space weather effects!",
      icon: "🤖",
      color: "space-earth-green"
    }
  ];

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
            className="space-heading text-4xl md:text-6xl text-space-aurora-purple mb-6"
            animate={{ 
              textShadow: [
                "0 0 20px #9C27B0",
                "0 0 40px #9C27B0", 
                "0 0 20px #9C27B0"
              ]
            }}
            transition={{ duration: 3, repeat: Infinity }}
          >
            🌌 Space Weather 🌡️
          </motion.h1>
          
          <motion.p
            className="text-xl text-gray-300 max-w-3xl mx-auto mb-8"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.8 }}
          >
            Just like Earth has weather with rain and sunshine, space has its own weather too! 
            Let's discover how space weather affects our daily lives on Earth.
          </motion.p>
        </div>
      </motion.div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid gap-8">
          
          {/* What is Space Weather? */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.8 }}
          >
            <Card className="bg-white/10 backdrop-blur-sm border-white/20 text-white">
              <CardHeader>
                <CardTitle className="space-heading text-3xl text-space-aurora-purple flex items-center">
                  <Thermometer className="w-8 h-8 mr-3" />
                  What is Space Weather?
                </CardTitle>
                <CardDescription className="text-gray-300 text-lg">
                  Think of space weather as the Sun's mood! ☀️
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <p className="text-lg leading-relaxed">
                  Space weather is all the different conditions in space around Earth that are caused by the Sun. 
                  Just like Earth's weather includes wind, rain, and storms, space weather includes:
                </p>
                
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="bg-space-sun/20 p-6 rounded-xl">
                    <h4 className="text-xl mb-3 text-space-sun">🌬️ Solar Wind</h4>
                    <p>A constant stream of particles flowing from the Sun - like an invisible cosmic breeze!</p>
                  </div>
                  
                  <div className="bg-space-orange/20 p-6 rounded-xl">
                    <h4 className="text-xl mb-3 text-space-orange">⚡ Solar Flares</h4>
                    <p>Sudden bursts of energy from the Sun - like cosmic lightning bolts!</p>
                  </div>
                  
                  <div className="bg-space-aurora-purple/20 p-6 rounded-xl">
                    <h4 className="text-xl mb-3 text-space-aurora-purple">☁️ Coronal Mass Ejections</h4>
                    <p>Giant clouds of particles thrown into space - cosmic storm clouds!</p>
                  </div>
                  
                  <div className="bg-space-earth-blue/20 p-6 rounded-xl">
                    <h4 className="text-xl mb-3 text-space-earth-blue">🌑 Solar Cycles</h4>
                    <p>The Sun gets more or less active every 11 years - its natural rhythm!</p>
                  </div>
                </div>
                
                <div className="bg-gradient-to-r from-space-sun/20 to-space-aurora-purple/20 p-6 rounded-xl">
                  <h4 className="text-xl mb-4 text-space-sun">🔬 Fun Science Fact!</h4>
                  <p>Space weather happens 93 million miles away from Earth, but it can still affect your smartphone and GPS!</p>
                </div>
              </CardContent>
            </Card>
          </motion.div>

          {/* Why Does Space Weather Matter? */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7, duration: 0.8 }}
          >
            <Card className="bg-white/10 backdrop-blur-sm border-white/20 text-white">
              <CardHeader>
                <CardTitle className="space-heading text-3xl text-space-earth-green flex items-center">
                  <Globe2 className="w-8 h-8 mr-3" />
                  Why Does Space Weather Matter to Us?
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-8">
                <p className="text-lg leading-relaxed">
                  Space weather might seem far away, but it actually affects many things we use every day! 
                  Here's how space weather impacts life on Earth:
                </p>
                
                {/* GPS and Technology */}
                <div className="grid md:grid-cols-2 gap-8 items-center">
                  <div>
                    <div className="bg-space-earth-blue/20 p-6 rounded-xl">
                      <Satellite className="w-12 h-12 text-space-earth-blue mb-4" />
                      <h4 className="text-2xl mb-3 text-space-earth-blue">GPS & Technology 📱</h4>
                      <p className="mb-4">
                        Space weather can mess with GPS satellites, making your phone's maps confused! 
                        It can also disrupt radio signals and internet connections.
                      </p>
                      <Badge className="bg-space-earth-blue text-white">
                        Real Example: In 2003, space weather knocked out GPS for hours!
                      </Badge>
                    </div>
                  </div>
                  <div>
                    <ImageWithFallback
                      src="https://images.unsplash.com/photo-1636565214233-6d1019dfbc36?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzcGFjZSUyMHN0YXRpb24lMjBzYXRlbGxpdGUlMjBlYXJ0aCUyMG9yYml0fGVufDF8fHx8MTc1OTUzNTM0OXww&ixlib=rb-4.1.0&q=80&w=1080"
                      alt="Satellite orbiting Earth in space"
                      className="w-full h-48 object-cover rounded-xl"
                    />
                  </div>
                </div>
                
                {/* Farming and Agriculture */}
                <div className="grid md:grid-cols-2 gap-8 items-center">
                  <div className="md:order-2">
                    <div className="bg-space-earth-green/20 p-6 rounded-xl">
                      <Tractor className="w-12 h-12 text-space-earth-green mb-4" />
                      <h4 className="text-2xl mb-3 text-space-earth-green">Farming & Food 🚜</h4>
                      <p className="mb-4">
                        Modern farmers use GPS to plant crops precisely and satellites to monitor their fields. 
                        Space weather can disrupt these systems, affecting how food is grown!
                      </p>
                      <Badge className="bg-space-earth-green text-white">
                        Space weather = Less efficient farming = Higher food prices!
                      </Badge>
                    </div>
                  </div>
                  <div className="md:order-1">
                    <ImageWithFallback
                      src="https://images.unsplash.com/photo-1708794666324-85ad91989d20?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmYXJtZXIlMjBmaWVsZCUyMGFncmljdWx0dXJlJTIwdGVjaG5vbG9neSUyMEdQU3xlbnwxfHx8fDE3NTk1MzUzNTF8MA&ixlib=rb-4.1.0&q=80&w=1080"
                      alt="Modern farming field with technology"
                      className="w-full h-48 object-cover rounded-xl"
                    />
                  </div>
                </div>
                
                {/* Power Systems */}
                <div className="bg-space-aurora-pink/20 p-6 rounded-xl">
                  <h4 className="text-2xl mb-3 text-space-aurora-pink flex items-center">
                    ⚡ Power & Electricity
                  </h4>
                  <p className="mb-4">
                    Strong space weather can overload power grids and cause blackouts! 
                    In 1989, a solar storm caused a 9-hour blackout in Quebec, Canada, affecting 6 million people.
                  </p>
                  <div className="grid md:grid-cols-3 gap-4 text-center">
                    <div>
                      <span className="text-3xl block mb-2">🏠</span>
                      <p>Homes without power</p>
                    </div>
                    <div>
                      <span className="text-3xl block mb-2">🏥</span>
                      <p>Hospitals on backup power</p>
                    </div>
                    <div>
                      <span className="text-3xl block mb-2">🚦</span>
                      <p>Traffic lights not working</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>

          {/* NASA Missions */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.9, duration: 0.8 }}
          >
            <Card className="bg-white/10 backdrop-blur-sm border-white/20 text-white">
              <CardHeader>
                <CardTitle className="space-heading text-3xl text-space-sun flex items-center">
                  <Rocket className="w-8 h-8 mr-3" />
                  NASA's Space Weather Missions 🚀
                </CardTitle>
                <CardDescription className="text-gray-300 text-lg">
                  Meet the space detectives keeping us safe!
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <p className="text-lg leading-relaxed">
                  NASA has an amazing fleet of spacecraft and missions dedicated to studying space weather. 
                  These cosmic guardians help us predict and prepare for space storms!
                </p>
                
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {missions.map((mission, index) => (
                    <motion.div
                      key={mission.name}
                      className={`bg-${mission.color}/20 p-6 rounded-xl border border-${mission.color}/30`}
                      initial={{ opacity: 0, scale: 0.9 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ delay: 1 + index * 0.1, duration: 0.5 }}
                      whileHover={{ scale: 1.05 }}
                    >
                      <div className="text-center mb-4">
                        <span className="text-4xl block mb-2">{mission.icon}</span>
                        <h4 className={`text-xl text-${mission.color}`}>{mission.name}</h4>
                      </div>
                      <p className="text-sm leading-relaxed">{mission.description}</p>
                    </motion.div>
                  ))}
                </div>
                
                {/* Special Programs */}
                <div className="mt-8 grid md:grid-cols-2 gap-6">
                  <div className="bg-space-aurora-purple/20 p-6 rounded-xl">
                    <h4 className="text-xl mb-3 text-space-aurora-purple">🌙 M2M SWAO</h4>
                    <p>Moon to Mars Space Weather Analysis Office - protects future astronauts on long journeys!</p>
                  </div>
                  
                  <div className="bg-space-orange/20 p-6 rounded-xl">
                    <h4 className="text-xl mb-3 text-space-orange">🔬 PROSWIFT</h4>
                    <p>Provides real-time space weather predictions to protect technology and people!</p>
                  </div>
                </div>
                
                {/* Mission Control Image */}
                <div className="mt-8">
                  <motion.div
                    className="relative rounded-xl overflow-hidden"
                    whileHover={{ scale: 1.02 }}
                    transition={{ duration: 0.3 }}
                  >
                    <ImageWithFallback
                      src="https://images.unsplash.com/photo-1669023414162-5bb06bbff0ec?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb21wdXRlciUyMGRhdGElMjBzY3JlZW4lMjBtb25pdG9yaW5nJTIwdGVjaG5vbG9neXxlbnwxfHx8fDE3NTk1MzUzNTR8MA&ixlib=rb-4.1.0&q=80&w=1080"
                      alt="Mission control room with data monitoring screens"
                      className="w-full h-48 md:h-64 object-cover"
                    />
                    <div className="absolute bottom-4 left-4 text-white">
                      <Badge className="bg-space-sun text-black">
                        🖥️ NASA monitors space weather 24/7!
                      </Badge>
                    </div>
                  </motion.div>
                </div>
              </CardContent>
            </Card>
          </motion.div>

          {/* Artemis and Future */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.1, duration: 0.8 }}
          >
            <Card className="bg-gradient-to-r from-space-aurora-purple/20 to-space-sun/20 backdrop-blur-sm border-white/20 text-white">
              <CardHeader>
                <CardTitle className="space-heading text-3xl text-space-aurora-purple flex items-center">
                  <Users className="w-8 h-8 mr-3" />
                  Protecting Future Space Explorers 👨‍🚀
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <p className="text-lg leading-relaxed">
                  As NASA prepares for the Artemis missions to return humans to the Moon and eventually go to Mars, 
                  understanding space weather becomes even more important! Astronauts need protection from cosmic storms.
                </p>
                
                <div className="grid md:grid-cols-3 gap-6">
                  <div className="text-center">
                    <span className="text-4xl block mb-3">🌙</span>
                    <h4 className="text-lg mb-2 text-space-sun">Moon Missions</h4>
                    <p>Artemis astronauts need early warning systems for solar storms</p>
                  </div>
                  
                  <div className="text-center">
                    <span className="text-4xl block mb-3">🔴</span>
                    <h4 className="text-lg mb-2 text-space-earth-green">Mars Journey</h4>
                    <p>Long trips to Mars require advanced space weather protection</p>
                  </div>
                  
                  <div className="text-center">
                    <span className="text-4xl block mb-3">🛡️</span>
                    <h4 className="text-lg mb-2 text-space-aurora-purple">Safety First</h4>
                    <p>Special shelters and suits protect against radiation</p>
                  </div>
                </div>
                
                <div className="text-center mt-8">
                  <Button
                    onClick={() => onSectionChange("learn")}
                    className="bg-space-aurora-purple text-white hover:bg-space-aurora-purple/80 text-lg px-8 py-3 mr-4"
                  >
                    Learn More About Space Science! 📚
                  </Button>
                  
                  <Button
                    onClick={() => onSectionChange("play")}
                    variant="outline"
                    className="border-space-sun text-space-sun hover:bg-space-sun hover:text-black text-lg px-8 py-3"
                  >
                    Play Space Weather Games! 🎮
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