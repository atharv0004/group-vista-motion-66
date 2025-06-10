
import CategoryHome from '@/components/CategoryHome';

const EnviroHome = () => {
  const clients = [
    { name: 'Green Energy Corp', logo: 'https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=200&h=200&fit=crop&crop=center', industry: 'Renewable Energy' },
    { name: 'EcoSolutions Ltd', logo: 'https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=200&h=200&fit=crop&crop=center', industry: 'Environmental' },
    { name: 'Sustainable Systems', logo: 'https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=200&h=200&fit=crop&crop=center', industry: 'Sustainability' },
    { name: 'Clean Tech Innovations', logo: 'https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=200&h=200&fit=crop&crop=center', industry: 'Clean Technology' },
    { name: 'Environmental Partners', logo: 'https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=200&h=200&fit=crop&crop=center', industry: 'Consulting' },
    { name: 'Carbon Solutions', logo: 'https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=200&h=200&fit=crop&crop=center', industry: 'Carbon Management' }
  ];

  const features = [
    'Environmental Assessment',
    'Sustainability Planning',
    'Carbon Footprint Analysis',
    'Green Technology',
    'Waste Management',
    'Energy Efficiency',
    'Compliance Monitoring',
    'Environmental Impact',
    'Renewable Solutions',
    'Eco-friendly Practices'
  ];

  return (
    <CategoryHome
      title="Economic Enviro Solutions"
      subtitle="Sustainable Environmental Solutions"
      description="We provide comprehensive environmental consulting and sustainable solutions that help organizations reduce their ecological footprint while maintaining operational excellence."
      mission="To create a sustainable future through innovative environmental solutions, cutting-edge green technologies, and strategic environmental planning. We help organizations achieve their sustainability goals while driving positive environmental impact."
      bgGradient="from-green-600 to-green-800"
      textColor="text-green-50"
      servicesLink="/enviro/services"
      clients={clients}
      features={features}
    />
  );
};

export default EnviroHome;
