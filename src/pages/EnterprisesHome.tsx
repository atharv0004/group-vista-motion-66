
import CategoryHome from '@/components/CategoryHome';

const EnterprisesHome = () => {
  const clients = [
    { name: 'Tech Innovators Inc.', logo: 'https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=200&h=200&fit=crop&crop=center', industry: 'Technology' },
    { name: 'Growth Partners LLC', logo: 'https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=200&h=200&fit=crop&crop=center', industry: 'Business Development' },
    { name: 'Strategic Solutions', logo: 'https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=200&h=200&fit=crop&crop=center', industry: 'Consulting' },
    { name: 'Enterprise Dynamics', logo: 'https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=200&h=200&fit=crop&crop=center', industry: 'Management' },
    { name: 'Business Accelerators', logo: 'https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=200&h=200&fit=crop&crop=center', industry: 'Startups' },
    { name: 'Corporate Excellence', logo: 'https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=200&h=200&fit=crop&crop=center', industry: 'Enterprise' }
  ];

  const features = [
    'Business Strategy',
    'Market Analysis',
    'Growth Planning',
    'Process Optimization',
    'Digital Transformation',
    'Leadership Development',
    'Performance Metrics',
    'Change Management',
    'Innovation Programs',
    'Partnership Development'
  ];

  return (
    <CategoryHome
      title="Economic Enterprises"
      subtitle="Business Development & Enterprise Solutions"
      description="We empower businesses to achieve sustainable growth through strategic planning, process optimization, and innovative solutions tailored to your unique challenges."
      mission="To drive business transformation and sustainable growth through strategic consulting, innovative solutions, and collaborative partnerships. We help enterprises navigate complex challenges and unlock their full potential."
      bgGradient="from-blue-600 to-blue-800"
      textColor="text-blue-50"
      servicesLink="/enterprises/services"
      clients={clients}
      features={features}
    />
  );
};

export default EnterprisesHome;
