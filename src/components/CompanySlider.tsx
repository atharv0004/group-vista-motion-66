
import { motion } from 'framer-motion';
import { Card, CardContent } from '@/components/ui/card';
import { useEffect, useState } from 'react';

interface Client {
  name: string;
  logo: string;
}

interface CompanySliderProps {
  clients: Client[];
}

const CompanySlider = ({ clients }: CompanySliderProps) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const itemsPerPage = 4;

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % Math.ceil(clients.length / itemsPerPage));
    }, 4000);

    return () => clearInterval(timer);
  }, [clients.length]);

  const visibleClients = clients.slice(currentIndex * itemsPerPage, (currentIndex + 1) * itemsPerPage);

  // Function to get fallback image based on company name
  const getFallbackImage = (companyName: string) => {
    // Create a simple placeholder with company initials
    const initials = companyName.split(' ').map(word => word.charAt(0)).join('').toUpperCase().slice(0, 2);
    return `https://via.placeholder.com/200x120/4f46e5/ffffff?text=${encodeURIComponent(initials)}`;
  };

  return (
    <div className="relative overflow-hidden">
      <motion.div
        key={currentIndex}
        initial={{ opacity: 0, x: 100 }}
        animate={{ opacity: 1, x: 0 }}
        exit={{ opacity: 0, x: -100 }}
        transition={{ duration: 0.8 }}
        className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-4"
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
              <CardContent className="p-6 text-center">
                <div className='flex items-center justify-center mb-4'>
                  <img
                    src={getFallbackImage(client.name)}
                    alt={client.name}
                    className="max-w-[200px] min-w-[200px] max-h-[120px] object-contain rounded-lg"
                    style={{ 
                      filter: 'brightness(1.1) contrast(1.1)',
                      backgroundColor: '#f8fafc'
                    }}
                  />
                </div>
                <h3 className="text-base font-semibold text-foreground">{client.name}</h3>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </motion.div>

      {/* Pagination dots */}
      <div className="flex justify-center mt-6 space-x-2">
        {Array.from({ length: Math.ceil(clients.length / itemsPerPage) }).map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentIndex(index)}
            className={`w-3 h-3 rounded-full transition-colors ${
              index === currentIndex ? 'bg-primary' : 'bg-gray-400'
            }`}
          />
        ))}
      </div>
    </div>
  );
};

export default CompanySlider;
