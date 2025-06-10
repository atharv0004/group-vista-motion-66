
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { ArrowRight, ArrowLeft } from 'lucide-react';
import CompanySlider from './CompanySlider';

interface CategoryHomeProps {
  title: string;
  subtitle: string;
  description: string;
  mission: string;
  bgGradient: string;
  textColor: string;
  servicesLink: string;
  clients: Array<{
    name: string;
    logo: string;
    industry: string;
  }>;
  features: string[];
}

const CategoryHome = ({
  title,
  subtitle,
  description,
  mission,
  bgGradient,
  textColor,
  servicesLink,
  clients,
  features
}: CategoryHomeProps) => {
  const buttonColorClass = bgGradient.includes('red') ? 'hover:bg-red-600/10' :
                          bgGradient.includes('blue') ? 'hover:bg-blue-600/10' : 
                          'hover:bg-green-600/10';
  
  const accentColor = bgGradient.includes('red') ? 'text-red-600' :
                     bgGradient.includes('blue') ? 'text-blue-600' : 
                     'text-green-600';

  return (
    <div className="min-h-screen pt-16">
      {/* Hero Section */}
      <section className={`py-20 bg-gradient-to-br ${bgGradient} relative overflow-hidden`}>
        <div className="absolute inset-0 bg-black/20" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <Link to="/" className={`inline-flex items-center ${textColor}/80 hover:${textColor} mb-6 transition-colors`}>
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to Economic Group
            </Link>
            
            <h1 className={`text-4xl md:text-6xl font-bold ${textColor} mb-6`}>
              {title}
            </h1>
            <p className={`text-xl md:text-2xl ${textColor}/90 mb-8 max-w-3xl mx-auto`}>
              {subtitle}
            </p>
            <p className={`text-lg ${textColor}/80 mb-8 max-w-4xl mx-auto`}>
              {description}
            </p>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="space-y-4 sm:space-y-0 sm:space-x-4 sm:flex sm:justify-center"
            >
              <Link to={servicesLink}>
                <Button size="lg" variant="secondary" className="text-lg px-8 py-3">
                  Explore Services
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Button>
              </Link>
              <Link to="/contact">
                <Button size="lg" variant="outline" className={`text-lg px-8 py-3 border-white/30 ${textColor} ${buttonColorClass}`}>
                  Contact Us
                </Button>
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Mission & Features Section */}
      <section className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center mb-20">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
                Our Mission
              </h2>
              <p className="text-lg text-muted-foreground mb-8">
                {mission}
              </p>
              <div className="grid sm:grid-cols-2 gap-4">
                {features.slice(0, 4).map((feature, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="flex items-center"
                  >
                    <div className={`w-2 h-2 bg-primary rounded-full mr-3`} />
                    <span className="text-foreground">{feature}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="relative"
            >
              <Card className="p-8 border-0 shadow-lg bg-gradient-to-br from-accent/50 to-background">
                <CardContent className="p-0">
                  <h3 className="text-2xl font-bold text-foreground mb-4">Key Highlights</h3>
                  <ul className="space-y-3">
                    {features.slice(4).map((feature, index) => (
                      <li key={index} className="flex items-start">
                        <ArrowRight className={`w-5 h-5 ${accentColor} mr-3 mt-0.5 flex-shrink-0`} />
                        <span className="text-muted-foreground">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Clients Section */}
      <section className="py-20 bg-accent/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Trusted by Industry Leaders
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              We're proud to partner with leading companies across various industries
            </p>
          </motion.div>
          
          <CompanySlider clients={clients} />
        </div>
      </section>
    </div>
  );
};

export default CategoryHome;
