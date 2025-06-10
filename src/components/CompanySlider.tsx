
import { motion } from 'framer-motion';
import { Card, CardContent } from '@/components/ui/card';
import { useEffect, useState } from 'react';

interface Client {
  name: string;
  logo: string;
  industry: string;
}

interface CompanySliderProps {
  clients: Client[];
}

const CompanySlider = ({ clients }: CompanySliderProps) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % Math.ceil(clients.length / 3));
    }, 4000);

    return () => clearInterval(timer);
  }, [clients.length]);

  const visibleClients = clients.slice(currentIndex * 3, (currentIndex * 3) + 3);

  return (
    <div className="relative overflow-hidden">
      <motion.div
        key={currentIndex}
        initial={{ opacity: 0, x: 100 }}
        animate={{ opacity: 1, x: 0 }}
        exit={{ opacity: 0, x: -100 }}
        transition={{ duration: 0.8 }}
        className="grid md:grid-cols-3 gap-6"
      >
        {visibleClients.map((client, index) => (
          <motion.div
            key={`${currentIndex}-${index}`}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
            whileHover={{ y: -5 }}
            className="group"
          >
            <Card className="h-full border-0 shadow-md hover:shadow-lg transition-all duration-300">
              <CardContent className="p-8 text-center">
                <div className="w-24 h-24 bg-gradient-to-br from-primary/10 to-blue-600/10 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                  <img
                    src={client.logo}
                    alt={client.name}
                    className="w-16 h-16 object-contain"
                    onError={(e) => {
                      // Fallback to placeholder if image fails to load
                      e.currentTarget.src = `https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=200&h=200&fit=crop&crop=center`;
                    }}
                  />
                </div>
                <h3 className="text-lg font-semibold text-foreground mb-2">{client.name}</h3>
                <p className="text-sm text-muted-foreground">{client.industry}</p>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </motion.div>

      {/* Pagination dots */}
      <div className="flex justify-center mt-8 space-x-2">
        {Array.from({ length: Math.ceil(clients.length / 3) }).map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentIndex(index)}
            className={`w-3 h-3 rounded-full transition-colors ${
              index === currentIndex ? 'bg-primary' : 'bg-muted'
            }`}
          />
        ))}
      </div>
    </div>
  );
};

export default CompanySlider;
