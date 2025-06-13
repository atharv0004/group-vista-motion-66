import { motion } from 'framer-motion';
import { useState } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Upload, X, Award, Trophy, Star } from 'lucide-react';

interface Achievement {
  id: number;
  title: string;
  description: string;
  image: string;
  year: string;
  category: string;
}

const AchievementsSection = () => {
  const [achievements, setAchievements] = useState<Achievement[]>([
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

  const [newAchievement, setNewAchievement] = useState({
    title: '',
    description: '',
    year: '',
    category: '',
    image: ''
  });

  const [isAddingNew, setIsAddingNew] = useState(false);

  const handleImageUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (e) => {
        const imageUrl = e.target?.result as string;
        setNewAchievement(prev => ({ ...prev, image: imageUrl }));
      };
      reader.readAsDataURL(file);
    }
  };

  const handleAddAchievement = () => {
    if (newAchievement.title && newAchievement.description && newAchievement.image) {
      const achievement: Achievement = {
        id: Date.now(),
        ...newAchievement
      };
      setAchievements(prev => [achievement, ...prev]);
      setNewAchievement({ title: '', description: '', year: '', category: '', image: '' });
      setIsAddingNew(false);
    }
  };

  const handleDeleteAchievement = (id: number) => {
    setAchievements(prev => prev.filter(achievement => achievement.id !== id));
  };

  const getCategoryIcon = (category: string) => {
    switch (category.toLowerCase()) {
      case 'partnership':
        return <Star className="w-5 h-5 text-yellow-500" />;
      case 'service excellence':
        return <Trophy className="w-5 h-5 text-gold-500" />;
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
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto mb-8">
            Celebrating our milestones, awards, and recognition that showcase our commitment 
            to excellence in logistics and supply chain solutions
          </p>
          
          <Button
            onClick={() => setIsAddingNew(true)}
            className="bg-red-600 hover:bg-red-700 text-white px-6 py-3"
          >
            <Upload className="w-5 h-5 mr-2" />
            Add New Achievement
          </Button>
        </motion.div>

        {/* Add New Achievement Form */}
        {isAddingNew && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="mb-12"
          >
            <Card className="p-6 border-2 border-red-200 bg-white shadow-lg">
              <CardContent className="p-0">
                <h3 className="text-xl font-bold text-foreground mb-4">Add New Achievement</h3>
                <div className="grid md:grid-cols-2 gap-4 mb-4">
                  <Input
                    placeholder="Achievement Title"
                    value={newAchievement.title}
                    onChange={(e) => setNewAchievement(prev => ({ ...prev, title: e.target.value }))}
                  />
                  <Input
                    placeholder="Year"
                    value={newAchievement.year}
                    onChange={(e) => setNewAchievement(prev => ({ ...prev, year: e.target.value }))}
                  />
                </div>
                <div className="grid md:grid-cols-2 gap-4 mb-4">
                  <Input
                    placeholder="Category"
                    value={newAchievement.category}
                    onChange={(e) => setNewAchievement(prev => ({ ...prev, category: e.target.value }))}
                  />
                  <div className="relative">
                    <Input
                      type="file"
                      accept="image/*"
                      onChange={handleImageUpload}
                      className="cursor-pointer"
                    />
                  </div>
                </div>
                <textarea
                  placeholder="Achievement Description"
                  value={newAchievement.description}
                  onChange={(e) => setNewAchievement(prev => ({ ...prev, description: e.target.value }))}
                  className="w-full p-3 border rounded-md mb-4 h-24 resize-none"
                />
                {newAchievement.image && (
                  <div className="mb-4">
                    <img
                      src={newAchievement.image}
                      alt="Preview"
                      className="w-32 h-24 object-cover rounded-md"
                    />
                  </div>
                )}
                <div className="flex gap-2">
                  <Button onClick={handleAddAchievement} className="bg-green-600 hover:bg-green-700">
                    Add Achievement
                  </Button>
                  <Button 
                    variant="outline" 
                    onClick={() => {
                      setIsAddingNew(false);
                      setNewAchievement({ title: '', description: '', year: '', category: '', image: '' });
                    }}
                  >
                    Cancel
                  </Button>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        )}

        {/* Achievements Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
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
                  
                  {/* Delete Button */}
                  <button
                    onClick={() => handleDeleteAchievement(achievement.id)}
                    className="absolute top-2 right-2 bg-red-500 hover:bg-red-600 text-white p-1 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-200"
                  >
                    <X className="w-4 h-4" />
                  </button>

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
            <p className="text-gray-500 text-lg">No achievements added yet. Click "Add New Achievement" to get started!</p>
          </motion.div>
        )}

        {/* Statistics */}
        {achievements.length > 0 && (
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="mt-16 text-center"
          >
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              <div className="text-center">
                <div className="text-3xl font-bold text-red-600 mb-2">{achievements.length}</div>
                <div className="text-muted-foreground">Total Achievements</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-red-600 mb-2">
                  {new Set(achievements.map(a => a.year)).size}
                </div>
                <div className="text-muted-foreground">Years of Recognition</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-red-600 mb-2">
                  {new Set(achievements.map(a => a.category)).size}
                </div>
                <div className="text-muted-foreground">Categories</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-red-600 mb-2">100%</div>
                <div className="text-muted-foreground">Excellence Rate</div>
              </div>
            </div>
          </motion.div>
        )}
      </div>
    </section>
  );
};

export default AchievementsSection;