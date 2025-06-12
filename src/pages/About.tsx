import { motion } from 'framer-motion';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ArrowRight, Users, Globe, Award, Target, Eye, Heart, Upload } from 'lucide-react';
import { useState } from 'react';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import IndiaMap from '@/components/IndiaMap';

const About = () => {
  const [coFounders, setCoFounders] = useState([
    {
      id: 1,
      name: 'John Smith',
      position: 'CEO & Co-Founder',
      image: 'https://images.unsplash.com/photo-1581092795360-fd1ca04f0952?w=400&h=400&fit=crop&crop=center',
      bio: 'With over 20 years of experience in business strategy and logistics, John has led Economic Group to become a global leader in integrated business solutions.',
      education: 'MBA from Harvard Business School',
      expertise: 'Strategic Planning, Business Development, Global Operations'
    },
    {
      id: 2,
      name: 'Sarah Johnson',
      position: 'COO & Co-Founder',
      image: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=400&h=400&fit=crop&crop=center',
      bio: 'Sarah brings extensive expertise in environmental sustainability and enterprise operations, driving our commitment to innovative and sustainable business practices.',
      education: 'PhD in Environmental Science from MIT',
      expertise: 'Environmental Solutions, Operations Management, Sustainability'
    }
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

  const timeline = [
    { year: '2008', event: 'Economic Group founded with a vision to transform business solutions' },
    { year: '2012', event: 'Expanded into logistics and supply chain management services' },
    { year: '2016', event: 'Launched environmental solutions division for sustainable practices' },
    { year: '2020', event: 'Achieved global reach with operations in 25+ countries' },
    { year: '2024', event: 'Leading provider with 500+ satisfied clients worldwide' }
  ];

  const handleImageUpload = (founderId: number, event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (e) => {
        const imageUrl = e.target?.result as string;
        setCoFounders(prev => prev.map(founder => 
          founder.id === founderId ? { ...founder, image: imageUrl } : founder
        ));
      };
      reader.readAsDataURL(file);
    }
  };

  const updateFounderInfo = (founderId: number, field: string, value: string) => {
    setCoFounders(prev => prev.map(founder => 
      founder.id === founderId ? { ...founder, [field]: value } : founder
    ));
  };

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
                    To be the global leader in integrated business solutions, recognized for our innovation, 
                    sustainability, and unwavering commitment to client success. We envision a future where 
                    businesses thrive through efficient logistics, strategic growth, and environmental responsibility.
                  </p>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </div>
      </section>

      {/* India Map Section */}
      <section className="py-20 bg-gradient-to-r from-gray-50 to-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Our National Network
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Strategically positioned across India to serve our clients with excellence and efficiency
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <IndiaMap />
          </motion.div>
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
              Meet Our Co-Founders
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Visionary leaders driving Economic Group's mission to transform global business solutions
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-12">
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
                    <div className="h-80 overflow-hidden">
                      <img
                        src={founder.image}
                        alt={founder.name}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="absolute top-4 right-4">
                      <label className="cursor-pointer bg-white/90 p-2 rounded-full shadow-lg hover:bg-white transition-colors">
                        <Upload className="w-5 h-5 text-red-600" />
                        <input
                          type="file"
                          accept="image/*"
                          className="hidden"
                          onChange={(e) => handleImageUpload(founder.id, e)}
                        />
                      </label>
                    </div>
                  </div>
                  
                  <CardContent className="p-8">
                    <div className="space-y-4">
                      <div>
                        <Input
                          value={founder.name}
                          onChange={(e) => updateFounderInfo(founder.id, 'name', e.target.value)}
                          className="text-2xl font-bold border-0 p-0 focus:ring-0 bg-transparent"
                          placeholder="Name"
                        />
                        <Input
                          value={founder.position}
                          onChange={(e) => updateFounderInfo(founder.id, 'position', e.target.value)}
                          className="text-lg text-red-600 font-semibold border-0 p-0 focus:ring-0 bg-transparent"
                          placeholder="Position"
                        />
                      </div>
                      
                      <Textarea
                        value={founder.bio}
                        onChange={(e) => updateFounderInfo(founder.id, 'bio', e.target.value)}
                        className="text-muted-foreground leading-relaxed border-0 p-0 focus:ring-0 bg-transparent resize-none"
                        placeholder="Biography"
                        rows={4}
                      />
                      
                      <div className="space-y-2">
                        <div>
                          <strong className="text-foreground">Education:</strong>
                          <Input
                            value={founder.education}
                            onChange={(e) => updateFounderInfo(founder.id, 'education', e.target.value)}
                            className="mt-1 border-0 p-0 focus:ring-0 bg-transparent"
                            placeholder="Education background"
                          />
                        </div>
                        <div>
                          <strong className="text-foreground">Expertise:</strong>
                          <Input
                            value={founder.expertise}
                            onChange={(e) => updateFounderInfo(founder.id, 'expertise', e.target.value)}
                            className="mt-1 border-0 p-0 focus:ring-0 bg-transparent"
                            placeholder="Areas of expertise"
                          />
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

      {/* Timeline Section */}
      <section className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Our Journey
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Milestones that have shaped our growth and success over the years
            </p>
          </motion.div>

          <div className="relative">
            <div className="absolute left-1/2 transform -translate-x-px h-full w-0.5 bg-red-600"></div>
            {timeline.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className={`relative flex items-center mb-12 ${
                  index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'
                }`}
              >
                <div className={`w-1/2 ${index % 2 === 0 ? 'pr-8 text-right' : 'pl-8 text-left'}`}>
                  <Card className="border-0 shadow-lg">
                    <CardContent className="p-6">
                      <div className="text-2xl font-bold text-red-600 mb-2">{item.year}</div>
                      <p className="text-muted-foreground">{item.event}</p>
                    </CardContent>
                  </Card>
                </div>
                <div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-red-600 rounded-full border-4 border-white shadow-lg"></div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-red-600 to-red-800">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Ready to Partner with Us?
            </h2>
            <p className="text-lg text-white/90 mb-8 max-w-2xl mx-auto">
              Join hundreds of satisfied clients who trust Economic Group for their business needs. 
              Let's build something great together.
            </p>
            <div className="space-y-4 sm:space-y-0 sm:space-x-4 sm:flex sm:justify-center">
              <Button size="lg" variant="secondary" className="text-lg px-8 py-3">
                Contact Us Today
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
              <Button size="lg" variant="outline" className="text-lg px-8 py-3 border-white text-white hover:bg-white hover:text-red-600">
                View Our Services
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default About;