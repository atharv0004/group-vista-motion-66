
import ServicePage from '@/components/ServicePage';

const LogisticsServices = () => {
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
    <ServicePage
      categoryTitle="Economic Logistics"
      subtitle="Logistics Services"
      description="Comprehensive logistics solutions designed to streamline your supply chain, reduce costs, and improve operational efficiency across global markets."
      backLink="/logistics"
      bgGradient="from-blue-600 to-blue-800"
      textColor="text-blue-50"
      services={services}
    />
  );
};

export default LogisticsServices;
