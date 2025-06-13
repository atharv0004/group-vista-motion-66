// components/MissionFeaturesSection.tsx
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';

interface CategoryMissionProps {
  mission: string;
  features: string[];
  accentColor: string;
}

const CategoryMission = ({ mission, features, accentColor }: CategoryMissionProps) => {
  return (
    <section className="sm:pt-16 lg:pt-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center mb-12 lg:mb-20">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="order-2 lg:order-1"
          >
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-foreground mb-4 sm:mb-6">
              Our Mission
            </h2>
            <p className="text-base sm:text-lg text-muted-foreground mb-6 sm:mb-8">{mission}</p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
              {features.slice(0, 4).map((feature, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="flex items-center"
                >
                  <div className="w-2 h-2 bg-primary rounded-full mr-3 flex-shrink-0" />
                  <span className="text-foreground text-sm sm:text-base">{feature}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="relative order-1 lg:order-2"
          >
            <Card className="p-6 sm:p-8 border-0 shadow-lg bg-gradient-to-br from-accent/50 to-background">
              <CardContent className="p-0">
                <h3 className="text-xl sm:text-2xl font-bold text-foreground mb-4">Key Highlights</h3>
                <ul className="space-y-3">
                  {features.slice(4).map((feature, index) => (
                    <li key={index} className="flex items-start">
                      <ArrowRight className={`w-4 sm:w-5 h-4 sm:h-5 ${accentColor} mr-3 mt-0.5 flex-shrink-0`} />
                      <span className="text-muted-foreground text-sm sm:text-base">{feature}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default CategoryMission;
