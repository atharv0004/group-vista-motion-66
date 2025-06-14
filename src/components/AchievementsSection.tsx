import { motion } from 'framer-motion';
import { useState } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Award, Trophy, Star } from 'lucide-react';

interface Achievement {
  id: number;
  title: string;
  description: string;
  image: string;
  year: string;
  category: string;
}

const AchievementsSection = () => {
  const [achievements] = useState<Achievement[]>([
    {
      id: 1,
      title: 'FLYJAC Partnership Excellence Award',
      description: 'Recognized for outstanding contribution and partnership with Hitachi Transport System Group',
      image: 'https://images.unsplash.com/photo-1567427017947-545c5f8d16ad?w=600&h=400&fit=crop&crop=center',
      year: '2023',
      category: 'Partnership'
    },
    {
      id: 2,
      title: 'Logistics Meet Certificate of Appreciation',
      description: 'Certificate of appreciation for performance, commitment and lasting contribution in logistics industry',
      image: 'https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=600&h=400&fit=crop&crop=center',
      year: '2023',
      category: 'Industry Recognition'
    },
    {
      id: 3,
      title: 'Excellence in Service Award',
      description: 'Golden trophy for exceptional service delivery and customer satisfaction',
      image: 'https://images.unsplash.com/photo-1551698618-1dfe5d97d256?w=600&h=400&fit=crop&crop=center',
      year: '2022',
      category: 'Service Excellence'
    },
    {
      id: 4,
      title: 'Industry Leadership Recognition',
      description: 'Recognition ceremony for leadership and innovation in logistics solutions',
      image: 'https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=600&h=400&fit=crop&crop=center',
      year: '2022',
      category: 'Leadership'
    }
  ]);

  const getCategoryIcon = (category: string) => {
    switch (category.toLowerCase()) {
      case 'partnership':
        return <Star className="w-5 h-5 text-yellow-500" />;
      case 'service excellence':
        return <Trophy className="w-5 h-5 text-yellow-600" />;
      case 'leadership':
        return <Award className="w-5 h-5 text-blue-500" />;
      default:
        return <Award className="w-5 h-5 text-red-500" />;
    }
  };

  return (
    <section className="py-20 bg-gradient-to-br from-red-50 to-orange-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-red-600 mb-6">
            Our Achievements
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Celebrating our milestones, awards, and recognition that showcase our commitment 
            to excellence in logistics and supply chain solutions
          </p>
        </motion.div>

        {/* Achievements Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {achievements.map((achievement, index) => (
            <motion.div
              key={achievement.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -5 }}
              className="group relative"
            >
              <Card className="h-full overflow-hidden border-0 shadow-xl hover:shadow-2xl transition-all duration-300">
                <div className="relative h-48 overflow-hidden">
                  <motion.img
                    whileHover={{ scale: 1.1 }}
                    transition={{ duration: 0.5 }}
                    src={achievement.image}
                    alt={achievement.title}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />

                  {/* Category Badge */}
                  <div className="absolute top-2 left-2 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full flex items-center gap-1">
                    {getCategoryIcon(achievement.category)}
                    <span className="text-xs font-medium text-gray-700">{achievement.category}</span>
                  </div>

                  {/* Year Badge */}
                  <div className="absolute bottom-2 right-2 bg-red-600 text-white px-3 py-1 rounded-full">
                    <span className="text-sm font-bold">{achievement.year}</span>
                  </div>
                </div>

                <CardContent className="p-6">
                  <h3 className="text-xl font-bold text-foreground mb-3 line-clamp-2">
                    {achievement.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed line-clamp-3">
                    {achievement.description}
                  </p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        {achievements.length === 0 && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-center py-12"
          >
            <Award className="w-16 h-16 text-gray-300 mx-auto mb-4" />
            <p className="text-gray-500 text-lg">
              No achievements added yet.
            </p>
          </motion.div>
        )}
      </div>
    </section>
  );
};

export default AchievementsSection;
