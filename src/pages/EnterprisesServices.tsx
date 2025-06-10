
import ServicePage from '@/components/ServicePage';

const EnterprisesServices = () => {
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

  return (
    <ServicePage
      categoryTitle="Economic Enterprises"
      subtitle="Enterprise Services"
      description="Strategic business solutions designed to drive growth, innovation, and operational excellence across your organization."
      backLink="/enterprises"
      bgGradient="from-red-600 to-red-800"
      textColor="text-red-50"
      services={services}
    />
  );
};

export default EnterprisesServices;
