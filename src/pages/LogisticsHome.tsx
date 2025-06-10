
import CategoryHome from '@/components/CategoryHome';

const LogisticsHome = () => {
  const clients = [
    { name: 'Global Shipping Co.', logo: 'https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=200&h=200&fit=crop&crop=center', industry: 'Maritime Logistics' },
    { name: 'FastTrack Express', logo: 'https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=200&h=200&fit=crop&crop=center', industry: 'Express Delivery' },
    { name: 'Supply Chain Solutions', logo: 'https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=200&h=200&fit=crop&crop=center', industry: 'Supply Chain' },
    { name: 'International Freight', logo: 'https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=200&h=200&fit=crop&crop=center', industry: 'Freight Services' },
    { name: 'Warehouse Pro', logo: 'https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=200&h=200&fit=crop&crop=center', industry: 'Warehousing' },
    { name: 'Logistics Tech', logo: 'https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=200&h=200&fit=crop&crop=center', industry: 'Technology' }
  ];

  const features = [
    'Supply Chain Optimization',
    'Global Shipping Network',
    'Warehouse Management',
    'Inventory Solutions',
    'Real-time Tracking',
    'Cost-effective Logistics',
    'Advanced Analytics',
    'Custom Integration',
    '24/7 Support',
    'Compliance Management'
  ];

  return (
    <CategoryHome
      title="Economic Logistics"
      subtitle="Comprehensive Supply Chain & Logistics Solutions"
      description="We provide end-to-end logistics solutions that streamline your supply chain, reduce costs, and improve efficiency across global markets."
      mission="To revolutionize global logistics through innovative technology, strategic partnerships, and uncompromising commitment to excellence. We connect businesses worldwide with reliable, efficient, and cost-effective logistics solutions."
      bgGradient="from-red-600 to-red-800"
      textColor="text-red-50"
      servicesLink="/logistics/services"
      clients={clients}
      features={features}
    />
  );
};

export default LogisticsHome;
