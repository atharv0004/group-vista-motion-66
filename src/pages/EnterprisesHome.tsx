import CategoryHero from '@/components/CategoryHero';
import CategoryMission from '@/components/CategoryMission';
import CategoryClients from '@/components/CategoryClients';
import ServicePage from '@/components/ServicePage';

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

  const services = [
    {
      title: 'Business Strategy Consulting',
      description: 'Strategic planning and business development solutions',
      features: [
        'Market analysis and research',
        'Competitive intelligence',
        'Strategic planning and roadmapping',
        'Business model innovation',
        'Performance measurement frameworks'
      ],
      icon: '🎯',
      image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&h=400&fit=crop&crop=center'
    },
    {
      title: 'Digital Transformation',
      description: 'Technology-driven business transformation initiatives',
      features: [
        'Digital strategy development',
        'Process automation solutions',
        'Technology platform selection',
        'Change management support',
        'Digital adoption training'
      ],
      icon: '🔄',
      image: 'https://images.unsplash.com/photo-1531297484001-80022131f5a1?w=600&h=400&fit=crop&crop=center'
    },
    {
      title: 'Process Optimization',
      description: 'Operational excellence and process improvement services',
      features: [
        'Business process reengineering',
        'Lean methodology implementation',
        'Quality management systems',
        'Workflow automation',
        'Continuous improvement programs'
      ],
      icon: '⚙️',
      image: 'https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?w=600&h=400&fit=crop&crop=center'
    },
    {
      title: 'Leadership Development',
      description: 'Executive coaching and leadership training programs',
      features: [
        'Executive coaching and mentoring',
        'Leadership assessment programs',
        'Succession planning',
        'Team building initiatives',
        'Management training workshops'
      ],
      icon: '👥',
      image: 'https://images.unsplash.com/photo-1460574283810-2aab119d8511?w=600&h=400&fit=crop&crop=center'
    },
    {
      title: 'Market Expansion',
      description: 'Strategic market entry and expansion support',
      features: [
        'Market opportunity assessment',
        'Go-to-market strategy',
        'Partnership development',
        'International expansion planning',
        'Revenue growth strategies'
      ],
      icon: '📈',
      image: 'https://images.unsplash.com/photo-1496307653780-42ee777d4833?w=600&h=400&fit=crop&crop=center'
    },
    {
      title: 'Innovation Management',
      description: 'Innovation strategy and new product development',
      features: [
        'Innovation strategy development',
        'R&D project management',
        'Product development processes',
        'Technology transfer programs',
        'Innovation culture building'
      ],
      icon: '💡',
      image: 'https://images.unsplash.com/photo-1487887235947-a955ef187fcc?w=600&h=400&fit=crop&crop=center'
    }
  ];

  const title = "Economic Enterprises";
  const subtitle = "Business Development & Enterprise Solutions";
  const description = "We empower businesses to achieve sustainable growth through strategic planning, process optimization, and innovative solutions tailored to your unique challenges.";
  const mission = "To drive business transformation and sustainable growth through strategic consulting, innovative solutions, and collaborative partnerships. We help enterprises navigate complex challenges and unlock their full potential.";
  const bgGradient = "from-blue-600 to-blue-800";
  const textColor = "text-blue-50";
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

export default EnterprisesHome;
