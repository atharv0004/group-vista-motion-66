
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
      icon: '🌱'
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
      icon: '♻️'
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
      icon: '⚡'
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
      icon: '🗂️'
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
      icon: '🔬'
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
      icon: '🌍'
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
