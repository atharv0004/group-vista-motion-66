import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { ArrowRight, ChevronRight, Users, Globe, Award, TrendingUp } from 'lucide-react';

const Index = () => {
  const categories = [
    {
      id: 'logistics',
      title: 'Economic Logistics',
      description: 'Comprehensive supply chain and logistics solutions for global trade',
      href: '/logistics',
      bgGradient: 'from-red-600 to-red-800',
      textColor: 'text-red-50',
      features: ['Supply Chain Management', 'Global Shipping', 'Warehouse Solutions'],
      image: 'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=800&h=600&fit=crop&crop=center'
    },
    {
      id: 'enterprises',
      title: 'Economic Enterprises',
      description: 'Business development and enterprise solutions for growth',
      href: '/enterprises',
      bgGradient: 'from-blue-600 to-blue-800',
      textColor: 'text-blue-50',
      features: ['Business Consulting', 'Enterprise Development', 'Strategic Planning'],
      image: 'https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?w=800&h=600&fit=crop&crop=center'
    },
    {
      id: 'enviro',
      title: 'Economic Enviro Solutions',
      description: 'Sustainable environmental solutions for a greener future',
      href: '/enviro',
      bgGradient: 'from-green-600 to-green-800',
      textColor: 'text-green-50',
      features: ['Environmental Consulting', 'Sustainability Solutions', 'Green Technology'],
      image: 'https://images.unsplash.com/photo-1501854140801-50d01698950b?w=800&h=600&fit=crop&crop=center'
    }
  ];

  const stats = [
    { icon: Users, value: '500+', label: 'Happy Clients' },
    { icon: Globe, value: '25+', label: 'Countries Served' },
    { icon: Award, value: '15+', label: 'Years Experience' },
    { icon: TrendingUp, value: '95%', label: 'Success Rate' }
  ];

  const scrollToBusinessSolutions = () => {
    const element = document.getElementById('business-solutions');
    if (element) {
      const elementPosition = element.offsetTop - 80; // Account for fixed navbar height
      window.scrollTo({
        top: elementPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <div className="min-h-screen w-full max-w-full overflow-x-hidden">
      {/* Hero Section with Fixed Background */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden w-full max-w-full">
        {/* Background with improved visibility and fallback */}
        <div className="absolute inset-0 z-0">
        <motion.div
            initial={{ scale: 1.1 }}
            animate={{ scale: 1 }}
            transition={{ duration: 20, repeat: Infinity, repeatType: "reverse" }}
            className="w-full h-full bg-cover bg-center"
            style={{
              backgroundImage:
                "linear-gradient(rgba(220,38,38,0.7), rgba(185,28,28,0.7)), url('https://images.unsplash.com/photo-1678182451047-196f22a4143e?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')",
            }}
          />
        </div>
        
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="relative z-10 text-center px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto"
        >
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-4 sm:mb-6"
          >
            WELCOME TO ECONOMIC GROUP
          </motion.h1>
          
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-lg sm:text-xl md:text-2xl text-white/90 mb-6 sm:mb-8 max-w-3xl mx-auto px-2"
          >
            Leading the way in logistics, enterprise solutions, and environmental innovation across global markets
          </motion.p>
          
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="flex flex-col sm:flex-row gap-4 justify-center px-2"
          >
            <Button 
              size="lg" 
              className="text-base sm:text-lg px-6 sm:px-8 py-3 bg-red-600 hover:bg-red-700 w-full sm:w-auto"
              onClick={scrollToBusinessSolutions}
            >
              Explore Our Solutions
              <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
            <Link to="/contact" className="w-full sm:w-auto">
              <Button size="lg" className="text-base sm:text-lg px-6 sm:px-8 py-3 bg-white text-red-600 hover:bg-gray-100 hover:text-red-700 w-full">
                Contact Us Today
              </Button>
            </Link>
          </motion.div>
        </motion.div>

        {/* Floating Animation Elements */}
        <motion.div
          animate={{ y: [-10, 10, -10] }}
          transition={{ duration: 4, repeat: Infinity }}
          className="absolute top-20 left-10 w-20 h-20 bg-red-500/20 rounded-full blur-xl"
        />
        <motion.div
          animate={{ y: [10, -10, 10] }}
          transition={{ duration: 6, repeat: Infinity }}
          className="absolute bottom-20 right-10 w-32 h-32 bg-orange-500/20 rounded-full blur-xl"
        />
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-gradient-to-r from-red-900 to-red-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => {
              const Icon = stat.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="text-center"
                >
                  <Icon className="w-12 h-12 text-red-200 mx-auto mb-4" />
                  <div className="text-3xl md:text-4xl font-bold text-white mb-2">{stat.value}</div>
                  <div className="text-red-100">{stat.label}</div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      <section id="business-solutions" className="py-20 bg-gradient-to-b from-background to-accent/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
              Our Business Solutions
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Discover our comprehensive range of services across three specialized divisions, 
              each designed to drive success and innovation in your industry
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-3 gap-8">
            {categories.map((category, index) => (
              <motion.div
                key={category.id}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                viewport={{ once: true }}
                whileHover={{ y: -10, scale: 1.02 }}
                className="group cursor-pointer"
              >
                <Card className="h-full overflow-hidden border-0 shadow-xl hover:shadow-2xl transition-all duration-500">
                  <div className="relative h-64 overflow-hidden">
                    <motion.img
                      whileHover={{ scale: 1.1 }}
                      transition={{ duration: 0.5 }}
                      src={category.image}
                      alt={category.title}
                      className="w-full h-full object-cover"
                    />
                    <div className={`absolute inset-0 bg-gradient-to-t ${category.bgGradient} opacity-80 group-hover:opacity-70 transition-opacity duration-300`} />
                    <div className="absolute inset-0 p-6 flex flex-col justify-end">
                      <CardHeader className="p-0 mb-4">
                        <CardTitle className={`text-2xl font-bold ${category.textColor} mb-2`}>
                          {category.title}
                        </CardTitle>
                        <CardDescription className={`${category.textColor}/90 text-base`}>
                          {category.description}
                        </CardDescription>
                      </CardHeader>
                    </div>
                  </div>
                  
                  <CardContent className="p-6">
                    <ul className="space-y-3 mb-6">
                      {category.features.map((feature, idx) => (
                        <motion.li
                          key={idx}
                          initial={{ opacity: 0, x: -20 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          transition={{ duration: 0.5, delay: idx * 0.1 }}
                          className="flex items-center text-muted-foreground"
                        >
                          <ChevronRight className="w-4 h-4 mr-2 text-red-600" />
                          {feature}
                        </motion.li>
                      ))}
                    </ul>
                    
                    <Link to={category.href} className="block">
                      <Button className="w-full group-hover:scale-105 transition-transform duration-200">
                        Explore {category.title.split(' ')[1]}
                        <ArrowRight className="ml-2 w-4 h-4" />
                      </Button>
                    </Link>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-gradient-to-r from-red-50 to-red-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h3 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
                Building Tomorrow's Economy Today
              </h3>
              <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                With decades of combined experience across logistics, enterprise development, 
                and environmental solutions, Economic Group stands at the forefront of 
                innovation and sustainable growth.
              </p>
              <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                Our integrated approach ensures that every client receives comprehensive 
                solutions tailored to their unique needs and challenges, delivered with 
                excellence and reliability.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link to="/about">
                  <Button size="lg" className="px-8 py-3 bg-red-600 hover:bg-red-700 w-full sm:w-auto">
                    Learn More About Us
                    <ArrowRight className="ml-2 w-5 h-5" />
                  </Button>
                </Link>
                <Link to="/contact">
                  <Button size="lg" variant="outline" className="px-8 py-3 border-red-600 text-red-600 hover:bg-red-600 hover:text-white w-full sm:w-auto">
                    Get In Touch
                  </Button>
                </Link>
              </div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="relative">
                <motion.img
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.3 }}
                  src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&h=400&fit=crop&crop=center"
                  alt="Modern business solutions"
                  className="rounded-2xl shadow-2xl"
                />
                <div className="absolute -bottom-6 -right-6 bg-white p-6 rounded-xl shadow-lg">
                  <div className="text-center">
                    <div className="text-3xl font-bold text-red-600 mb-2">25+</div>
                    <div className="text-sm text-gray-600">Years of Excellence</div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Index;