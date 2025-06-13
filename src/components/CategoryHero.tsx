// components/HeroSection.tsx
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowLeft, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';

interface CategoryHeroProps {
  title: string;
  subtitle: string;
  description: string;
  bgGradient: string;
  textColor: string;
  servicesLink: string;
}

const CategoryHero = ({
  title,
  subtitle,
  description,
  bgGradient,
  textColor,
  servicesLink
}: CategoryHeroProps) => {
  return (
    <section className={`py-12 sm:py-16 lg:py-20 bg-gradient-to-br ${bgGradient} relative overflow-hidden`}>
      <div className="absolute inset-0 bg-black/20" />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center"
        >
          <Link
            to="/"
            className={`inline-flex items-center ${textColor}/80 hover:${textColor} mb-4 sm:mb-6 transition-colors text-sm sm:text-base`}
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Economic Group
          </Link>

          <h1 className={`text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold ${textColor} mb-4 sm:mb-6 px-2`}>
            {title}
          </h1>
          <p className={`text-lg sm:text-xl md:text-2xl ${textColor}/90 mb-6 sm:mb-8 max-w-3xl mx-auto px-4`}>
            {subtitle}
          </p>
          <p className={`text-base sm:text-lg ${textColor}/80 mb-6 sm:mb-8 max-w-4xl mx-auto px-4`}>
            {description}
          </p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="flex flex-col sm:flex-row gap-4 justify-center px-4"
          >
            <a href={servicesLink}>
              <Button
                size="lg"
                variant="secondary"
                className="text-base sm:text-lg px-6 sm:px-8 py-3 w-full sm:w-auto"
              >
                Explore Services
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
            </a>
            <Link to="/contact">
              <Button
                size="lg"
                className="text-base sm:text-lg px-6 sm:px-8 py-3 bg-white text-red-600 hover:bg-gray-100 hover:text-red-700 w-full sm:w-auto"
              >
                Contact Us
              </Button>
            </Link>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default CategoryHero;
