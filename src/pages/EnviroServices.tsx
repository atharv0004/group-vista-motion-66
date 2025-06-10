
import ServicePage from '@/components/ServicePage';

const EnviroServices = () => {
  const services = [
    {
      title: 'Environmental Assessment',
      description: 'Comprehensive environmental impact and compliance assessments',
      features: [
        'Environmental impact studies',
        'Site assessment and remediation',
        'Regulatory compliance audits',
        'Risk assessment and management',
        'Environmental monitoring programs'
      ],
      icon: '🌱',
      image: 'https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=600&h=400&fit=crop&crop=center'
    },
    {
      title: 'Sustainability Consulting',
      description: 'Strategic sustainability planning and implementation',
      features: [
        'Sustainability strategy development',
        'Carbon footprint analysis',
        'Life cycle assessments',
        'Sustainable supply chain design',
        'ESG reporting and frameworks'
      ],
      icon: '♻️',
      image: 'https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?w=600&h=400&fit=crop&crop=center'
    },
    {
      title: 'Renewable Energy Solutions',
      description: 'Clean energy system design and implementation',
      features: [
        'Solar and wind energy systems',
        'Energy efficiency audits',
        'Grid integration planning',
        'Energy storage solutions',
        'Renewable energy financing'
      ],
      icon: '⚡',
      image: 'https://images.unsplash.com/photo-1509391366360-2e959784a276?w=600&h=400&fit=crop&crop=center'
    },
    {
      title: 'Waste Management',
      description: 'Comprehensive waste reduction and management strategies',
      features: [
        'Waste audit and analysis',
        'Recycling program development',
        'Circular economy solutions',
        'Hazardous waste management',
        'Zero waste consulting'
      ],
      icon: '🗂️',
      image: 'https://images.unsplash.com/photo-1532996122724-e3c354a0b15b?w=600&h=400&fit=crop&crop=center'
    },
    {
      title: 'Green Technology',
      description: 'Innovative environmental technology solutions',
      features: [
        'Clean technology assessment',
        'Green product development',
        'Environmental monitoring systems',
        'Pollution control technologies',
        'Smart environmental solutions'
      ],
      icon: '🔬',
      image: 'https://images.unsplash.com/photo-1518709268805-4e9042af2176?w=600&h=400&fit=crop&crop=center'
    },
    {
      title: 'Climate Solutions',
      description: 'Climate change mitigation and adaptation strategies',
      features: [
        'Climate risk assessment',
        'Adaptation planning',
        'Carbon offset programs',
        'Climate resilience strategies',
        'Green finance solutions'
      ],
      icon: '🌍',
      image: 'https://images.unsplash.com/photo-1569163139394-de44cb5894c6?w=600&h=400&fit=crop&crop=center'
    }
  ];

  return (
    <ServicePage
      categoryTitle="Economic Enviro Solutions"
      subtitle="Environmental Services"
      description="Sustainable environmental solutions designed to help organizations achieve their sustainability goals while minimizing environmental impact."
      backLink="/enviro"
      bgGradient="from-green-600 to-green-800"
      textColor="text-green-50"
      services={services}
    />
  );
};

export default EnviroServices;
