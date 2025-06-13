import CategoryHero from '@/components/CategoryHero';
import CategoryMission from '@/components/CategoryMission';
import CategoryClients from '@/components/CategoryClients';
import ServicePage from '@/components/ServicePage';
import AchievementsSection from '@/components/AchievementsSection';

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

  const subtitle="Comprehensive Supply Chain & Logistics Solutions"
  const title="Economic Logistics"
  const description="We provide end-to-end logistics solutions that streamline your supply chain, reduce costs, and improve efficiency across global markets."
  const mission="To revolutionize global logistics through innovative technology, strategic partnerships, and uncompromising commitment to excellence. We connect businesses worldwide with reliable, efficient, and cost-effective logistics solutions."
  const bgGradient="from-red-600 to-red-800"
  const textColor="text-red-50"
  const servicesLink = "#services";

  const accentColor = bgGradient.includes('red')
    ? 'text-red-600'
    : bgGradient.includes('blue')
    ? 'text-blue-600'
    : 'text-green-600';

    const services = [
    {
      title: 'Supply Chain Management',
      description: 'End-to-end supply chain optimization and management solutions',
      features: [
        'Strategic supply chain planning',
        'Vendor management and sourcing',
        'Inventory optimization',
        'Risk management and mitigation',
        'Performance analytics and reporting'
      ],
      icon: '🚛',
      image: 'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=600&h=400&fit=crop&crop=center'
    },
    {
      title: 'Global Shipping & Freight',
      description: 'Comprehensive shipping solutions for international trade',
      features: [
        'Ocean and air freight services',
        'Door-to-door delivery solutions',
        'Customs clearance and documentation',
        'Multi-modal transportation',
        'Route optimization and planning'
      ],
      icon: '🌍',
      image: 'https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=600&h=400&fit=crop&crop=center'
    },
    {
      title: 'Warehouse Solutions',
      description: 'Advanced warehousing and distribution center management',
      features: [
        'Warehouse design and optimization',
        'Inventory management systems',
        'Order fulfillment and processing',
        'Cross-docking services',
        'Technology integration'
      ],
      icon: '📦',
      image: 'https://images.unsplash.com/photo-1553413077-190dd305871c?w=600&h=400&fit=crop&crop=center'
    },
    {
      title: 'Last Mile Delivery',
      description: 'Efficient final delivery solutions to end customers',
      features: [
        'Urban and rural delivery networks',
        'Real-time tracking and notifications',
        'Flexible delivery options',
        'Returns management',
        'Customer service support'
      ],
      icon: '🚚',
      image: 'https://images.unsplash.com/photo-1566576912321-d58ddd7a6088?w=600&h=400&fit=crop&crop=center'
    },
    {
      title: 'Logistics Technology',
      description: 'Cutting-edge technology solutions for logistics operations',
      features: [
        'Transportation management systems',
        'Real-time visibility platforms',
        'Predictive analytics',
        'IoT and sensor integration',
        'Automated reporting tools'
      ],
      icon: '💻',
      image: 'https://images.unsplash.com/photo-1531297484001-80022131f5a1?w=600&h=400&fit=crop&crop=center'
    },
    {
      title: 'Consulting Services',
      description: 'Expert consulting for logistics strategy and optimization',
      features: [
        'Logistics strategy development',
        'Process improvement consulting',
        'Cost reduction analysis',
        'Network optimization',
        'Change management support'
      ],
      icon: '📊',
      image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&h=400&fit=crop&crop=center'
    }
  ];

  return (
    <div className="min-h-screen pt-16">
      <CategoryHero
        title={title}
        subtitle={subtitle}
        description={description}
        bgGradient={bgGradient}
        textColor={textColor}
        servicesLink={servicesLink}
      />
      <CategoryMission
        mission={mission}
        features={features}
        accentColor={accentColor}
      />
      
      <div id="services" className="scroll-mt-20">
        <ServicePage
          bgGradient="from-red-600 to-red-800"
          textColor="text-red-50"
          services={services}
        />
      </div>

      <AchievementsSection />

      <CategoryClients clients={clients} />
    </div>
  );
};

export default LogisticsHome;