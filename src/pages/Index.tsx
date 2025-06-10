
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { ArrowRight, ChevronRight } from 'lucide-react';

const Index = () => {
  const categories = [
    {
      id: 'logistics',
      title: 'Economic Logistics',
      description: 'Comprehensive supply chain and logistics solutions for global trade',
      href: '/logistics',
      bgGradient: 'from-blue-600 to-blue-800',
      textColor: 'text-blue-50',
      features: ['Supply Chain Management', 'Global Shipping', 'Warehouse Solutions']
    },
    {
      id: 'enterprises',
      title: 'Economic Enterprises',
      description: 'Business development and enterprise solutions for growth',
      href: '/enterprises',
      bgGradient: 'from-red-600 to-red-800',
      textColor: 'text-red-50',
      features: ['Business Consulting', 'Enterprise Development', 'Strategic Planning']
    },
    {
      id: 'enviro',
      title: 'Economic Enviro Solutions',
      description: 'Sustainable environmental solutions for a greener future',
      href: '/enviro',
      bgGradient: 'from-green-600 to-green-800',
      textColor: 'text-green-50',
      features: ['Environmental Consulting', 'Sustainability Solutions', 'Green Technology']
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="pt-20 pb-16 bg-gradient-to-br from-background via-accent/20 to-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <h1 className="text-4xl md:text-6xl font-bold text-foreground mb-6">
              Welcome to{' '}
              <span className="bg-gradient-to-r from-primary to-blue-600 bg-clip-text text-transparent">
                Economic Group
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-3xl mx-auto">
              Leading the way in logistics, enterprise solutions, and environmental innovation
            </p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              <Button size="lg" className="text-lg px-8 py-3">
                Explore Our Services
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Categories Section */}
      <section className="py-20 bg-gradient-to-b from-background to-accent/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Our Business Categories
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Discover our comprehensive range of services across three specialized divisions
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {categories.map((category, index) => (
              <motion.div
                key={category.id}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                viewport={{ once: true }}
                whileHover={{ y: -10 }}
                className="group"
              >
                <Card className="h-full overflow-hidden border-0 shadow-lg hover:shadow-2xl transition-all duration-300">
                  <div className={`bg-gradient-to-br ${category.bgGradient} p-8 relative overflow-hidden`}>
                    <div className="absolute inset-0 bg-black/10 group-hover:bg-black/5 transition-colors duration-300" />
                    <div className="relative z-10">
                      <CardHeader className="p-0 mb-6">
                        <CardTitle className={`text-2xl font-bold ${category.textColor} mb-2`}>
                          {category.title}
                        </CardTitle>
                        <CardDescription className={`${category.textColor}/90 text-base`}>
                          {category.description}
                        </CardDescription>
                      </CardHeader>
                      
                      <CardContent className="p-0">
                        <ul className="space-y-2 mb-6">
                          {category.features.map((feature, idx) => (
                            <li key={idx} className={`${category.textColor}/80 flex items-center`}>
                              <ChevronRight className="w-4 h-4 mr-2" />
                              {feature}
                            </li>
                          ))}
                        </ul>
                        
                        <Link to={category.href}>
                          <Button 
                            variant="secondary" 
                            className="w-full group-hover:scale-105 transition-transform duration-200"
                          >
                            Explore {category.title.split(' ')[1]}
                            <ArrowRight className="ml-2 w-4 h-4" />
                          </Button>
                        </Link>
                      </CardContent>
                    </div>
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-20 bg-accent/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h3 className="text-3xl font-bold text-foreground mb-6">
                Building Tomorrow's Economy Today
              </h3>
              <p className="text-lg text-muted-foreground mb-6">
                With decades of combined experience across logistics, enterprise development, 
                and environmental solutions, Economic Group stands at the forefront of 
                innovation and sustainable growth.
              </p>
              <p className="text-lg text-muted-foreground mb-8">
                Our integrated approach ensures that every client receives comprehensive 
                solutions tailored to their unique needs and challenges.
              </p>
              <Button size="lg">
                Learn More About Us
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="aspect-square bg-gradient-to-br from-primary/20 to-blue-600/20 rounded-2xl flex items-center justify-center">
                <div className="text-center">
                  <div className="text-4xl md:text-6xl font-bold text-primary mb-4">25+</div>
                  <div className="text-lg text-muted-foreground">Years of Excellence</div>
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
