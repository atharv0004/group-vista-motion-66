
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
      icon: '🎯'
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
      icon: '🔄'
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
      icon: '⚙️'
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
      icon: '👥'
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
      icon: '📈'
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
      icon: '💡'
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
