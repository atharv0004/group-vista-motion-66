
import CategoryHero from '@/components/CategoryHero';
import CategoryMission from '@/components/CategoryMission';
import CategoryClients from '@/components/CategoryClients';
import ServicePage from '@/components/ServicePage';

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

  const title="Economic Enviro Solutions"
  const subtitle="Sustainable Environmental Solutions"
  const description="We provide comprehensive environmental consulting and sustainable solutions that help organizations reduce their ecological footprint while maintaining operational excellence."
  const mission="To create a sustainable future through innovative environmental solutions, cutting-edge green technologies, and strategic environmental planning. We help organizations achieve their sustainability goals while driving positive environmental impact."
  const bgGradient="from-green-600 to-green-800"
  const textColor="text-green-50"
  const servicesLink = "#services";
  const accentColor = bgGradient.includes('red')
    ? 'text-red-600'
    : bgGradient.includes('blue')
    ? 'text-blue-600'
    : 'text-green-600';

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

      <CategoryClients clients={clients} />
    </div>
  );
};

export default EnviroHome;
