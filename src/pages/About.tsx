import { motion } from 'framer-motion';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ArrowRight, Users, Globe, Award, Target, Eye, Heart } from 'lucide-react';
import { useState } from 'react';
import IndiaMap from "../components/IndiaMap.jsx"

interface CoFounder {
  id: number;
  name: string;
  position: string;
  image: string;
  education: string;
  expertise: string;
}

const About = () => {
  const [coFounders] = useState<CoFounder[]>([
    {
      id: 1,
      name: 'Mr Sainath Tatewar',
      position: 'Founder - Economic Logistics and Enterprises',
      image: 'https://images.unsplash.com/photo-1581092795360-fd1ca04f0952?w=400&h=400&fit=crop&crop=center',
      education: 'PGDBA - Supply Chain & Operations.',
      expertise: '25+ years of experience in Supply Chain & Business strategy.'
    },
    {
      id: 2,
      name: 'Mr Pramod Kadam',
      position: 'Founder - Economic Logistics and Enterprises',
      image: 'https://res.cloudinary.com/dxqsygmg1/image/upload/v1750073564/crop_pramod_lh3frj.jpg',
      education: 'ICWA',
      expertise: '30+ years of experience in business strategy and logistics'
    },
  ]);

  const values = [
    {
      icon: Target,
      title: 'Excellence',
      description: 'We strive for excellence in everything we do, delivering superior quality and exceeding expectations.'
    },
    {
      icon: Heart,
      title: 'Integrity',
      description: 'Honesty and transparency guide our relationships with clients, partners, and team members.'
    },
    {
      icon: Users,
      title: 'Collaboration',
      description: 'We believe in the power of teamwork and building strong partnerships for mutual success.'
    },
    {
      icon: Globe,
      title: 'Innovation',
      description: 'Continuous improvement and innovative solutions drive our approach to solving complex challenges.'
    }
  ];

  return (
    <div className="min-h-screen pt-16">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-red-600 to-red-800 relative overflow-hidden">
        <div className="absolute inset-0 bg-black/20" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              About Economic Group
            </h1>
            <p className="text-xl md:text-2xl text-white/90 mb-8 max-w-3xl mx-auto">
              Pioneering business solutions across logistics, enterprises, and environmental sectors for over a decade
            </p>
          </motion.div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <Card className="p-8 h-full border-0 shadow-lg bg-gradient-to-br from-red-50 to-red-100">
                <CardContent className="p-0">
                  <div className="flex items-center mb-6">
                    <Target className="w-12 h-12 text-red-600 mr-4" />
                    <h2 className="text-3xl font-bold text-foreground">Our Mission</h2>
                  </div>
                  <p className="text-lg text-muted-foreground leading-relaxed">
                    To empower businesses worldwide through innovative logistics solutions, strategic enterprise 
                    development, and sustainable environmental practices. We are committed to delivering excellence 
                    while fostering long-term partnerships that drive mutual growth and success.
                  </p>
                </CardContent>
              </Card>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <Card className="p-8 h-full border-0 shadow-lg bg-gradient-to-br from-green-50 to-green-100">
                <CardContent className="p-0">
                  <div className="flex items-center mb-6">
                    <Eye className="w-12 h-12 text-green-600 mr-4" />
                    <h2 className="text-3xl font-bold text-foreground">Our Vision</h2>
                  </div>
                  <p className="text-lg text-muted-foreground leading-relaxed">
                    To be the Pan India leader in integrated business solutions, recognized for our innovation, 
                    sustainability, and unwavering commitment to client success. We envision a future where 
                    businesses thrive through efficient logistics, strategic growth, and environmental responsibility.
                  </p>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Co-Founders Section */}
      <section className="py-20 bg-gradient-to-r from-red-50 to-red-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Meet Our Founders
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Visionary leaders driving Economic Group's mission to transform Pan India business solutions
            </p>
          </motion.div>

          <div className="flex justify-center flex-wrap gap-12">
            {coFounders.map((founder, index) => (
              <motion.div
                key={founder.id}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                viewport={{ once: true }}
              >
                <Card className="overflow-hidden border-0 shadow-xl hover:shadow-2xl transition-shadow duration-300">
                  <div className="relative">
                    <div className="h-72 overflow-hidden">
                      <img
                        src={founder.image}
                        alt={founder.name}
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                      />
                    </div>
                  </div>
                  
                  <CardContent className="p-6">
                    <div className="space-y-4">
                      <div className="space-y-1">
                        <h3 className="text-2xl font-bold text-gray-900">{founder.name}</h3>
                        <p className="text-base text-red-600 font-medium">{founder.position}</p>
                      </div>
                      
                      <div className="space-y-3 pt-2">
                        <div>
                          <strong className="text-sm font-semibold text-gray-700 uppercase tracking-wide">Education</strong>
                          <p className="mt-1 text-sm text-gray-600">{founder.education}</p>
                        </div>
                        <div>
                          <strong className="text-sm font-semibold text-gray-700 uppercase tracking-wide">Expertise</strong>
                          <p className="mt-1 text-sm text-gray-600">{founder.expertise}</p>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 bg-accent/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Our Core Values
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              The principles that guide our work and define our character as an organization
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => {
              const Icon = value.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  whileHover={{ y: -5 }}
                  className="group"
                >
                  <Card className="h-full border-0 shadow-lg hover:shadow-xl transition-all duration-300 text-center">
                    <CardContent className="p-8">
                      <Icon className="w-16 h-16 text-red-600 mx-auto mb-6 group-hover:scale-110 transition-transform duration-300" />
                      <h3 className="text-xl font-bold text-foreground mb-4">{value.title}</h3>
                      <p className="text-muted-foreground leading-relaxed">{value.description}</p>
                    </CardContent>
                  </Card>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Network Map Section */}
      <section className="py-20 bg-gradient-to-br from-blue-50 to-blue-100 relative z-0">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Our Network
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Strategically positioned across India to serve you better with our comprehensive logistics and business solutions
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="bg-white rounded-2xl shadow-2xl overflow-hidden border border-blue-200 relative z-0"
          >
            <div className="p-6 bg-gradient-to-r from-blue-600 to-blue-800">
              <h3 className="text-xl font-semibold text-white text-center">
                Pan-India Presence
              </h3>
            </div>
            <div className="p-8">
              <div className="bg-gradient-to-br from-blue-50 to-white rounded-xl border-2 border-blue-100 overflow-hidden shadow-inner relative z-0">
                <div className="relative z-0">
                  <IndiaMap />
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default About;