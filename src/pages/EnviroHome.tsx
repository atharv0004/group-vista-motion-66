import CategoryHero from '@/components/CategoryHero';
import CategoryMission from '@/components/CategoryMission';
import CategoryClients from '@/components/CategoryClients';
import ServicePage from '@/components/ServicePage';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { ArrowLeft, ArrowRight } from 'lucide-react';
import { useEffect, useState } from 'react';

const EnviroHome = () => {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const clients = [
  { name: 'Wipro', logo: '/assets/EnviroClients/wipro.webp' },
  { name: 'Uniliver', logo: '/assets/EnviroClients/' },
  { name: 'Carlsberg Group', logo: '/assets/EnviroClients/wipro.webp' },
  { name: 'Allana Consumer Products', logo: '/assets/EnviroClients/wipro.webp' },
  { name: 'Indofil Industries Limited', logo: '/assets/logisticsClients/Indofil.jpg' },
  { name: 'Mahindra Summit', logo: '/assets/logisticsClients/mahindra.jpg' },
  { name: 'Finerchem', logo: '/assets/logisticsClients/finorchem.png' },
  { name: 'Rasna', logo: '/assets/logisticsClients/rasna.jpg' },
  { name: 'Truefrost', logo: '/assets/logisticsClients/trufrost.jpg' },
  { name: 'Revival Engineers', logo: '/assets/logisticsClients/revival.jpg' },
  { name: 'Indiabulls Enterprises', logo: '/assets/logisticsClients/IndiaBulls.png' },
  { name: 'SML', logo: '/assets/logisticsClients/sml.jpg' },
  { name: 'Sumitomo Chemical', logo: '/assets/logisticsClients/sumitomo.png' },
  { name: 'Johnson', logo: '/assets/logisticsClients/johnson.jpg' },
  { name: 'Mahanand', logo: '/assets/logisticsClients/mahanand.jpg' },
  { name: 'Pittie', logo: '/assets/logisticsClients/Pittie.png' },
  { name: 'Seabird Int.', logo: '/assets/logisticsClients/seabird.png' }
];

  const services = [
  {
    title: 'Waste Management',
    description: 'End-to-end waste management services across India with certified destruction and regulatory compliance.',
    features: [
      'Pan-India pickup and disposal',
      'Recycling and destruction of expired/damaged goods',
      'Hazardous waste handling',
      'Regulatory and compliance documentation',
      'Single source implementation'
    ],
    icon: '🗑️',
    image: 'https://images.unsplash.com/photo-1532996122724-e3c354a0b15b?w=600&h=400&fit=crop&crop=center'
  },
  {
    title: 'Site Assessment',
    description: 'Thorough site assessments to ensure safe and compliant waste handling procedures.',
    features: [
      'Site surveys and risk identification',
      'Environmental safety evaluations',
      'Waste flow planning and logistics',
      'Compliance audits',
      'Customized action plans'
    ],
    icon: '📍',
    image: 'https://images.unsplash.com/photo-1581090700227-1e8a8c0c430b?w=600&h=400&fit=crop&crop=center'
  },
  {
    title: 'Climate Solutions',
    description: 'Strategies that support carbon footprint reduction and eco-efficiency.',
    features: [
      'Carbon reduction strategies',
      'Green logistics integration',
      'Sustainability awareness training',
      'Eco-efficiency planning',
      'Climate-conscious waste methods'
    ],
    icon: '🌍',
    image: 'https://images.unsplash.com/photo-1569163139394-de44cb5894c6?w=600&h=400&fit=crop&crop=center'
  },
  {
  title: 'Certified Destruction Services',
  description: 'Secure and compliant destruction and disposal of expired, damaged, or regulated goods across India.',
  features: [
    'Certificate of Destruction/Disposal',
    'Compliance with government regulations',
    'Destruction of pharmaceutical and FMCG products',
    'Trained and certified operational workforce',
    'End-to-end secure chain of custody'
  ],
  icon: '✅',
  image: 'https://images.unsplash.com/photo-1606923829579-3b1c4e3b5c31?w=600&h=400&fit=crop&crop=center'
}
];

  const title = "Economic Enviro Solutions";
const subtitle = "Eco-Friendly Waste Management for a Healthier World";
const description = "We provide clean, efficient, and compliant waste management solutions to leading pharmaceutical, FMCG, cosmetics, and personal care companies across India. Our Pan-India presence and logistics integration ensure seamless operations and certified destruction services.";
  const mission = "To lead India's waste management sector through eco-friendly, regulation-compliant destruction and logistics solutions. We are committed to reducing environmental impact for our clients through reliable service, strict safety standards, and a customer-first approach.";
const features = [
  "Pan-India Waste Collection & Disposal",
  "Site Assessment and Remediation",
  "Certified Destruction of Expired/Damaged Goods",
  "Carbon Footprint Reduction Strategies",
  "Logistics-Integrated Waste Management",
  "Hazardous Waste Handling",
  "Eco-Friendly Waste Practices",
  "Single Source Process Implementation",
  "Regulatory Compliance",
  "Workforce Trained in Safety Standards"
];

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
      {/* Parallax Hero Section */}
      <section className="py-12 sm:py-16 lg:py-20 relative overflow-hidden min-h-[60vh] flex items-center">
        {/* Parallax Background Image */}
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: 'url(https://cdn.pixabay.com/photo/2023/07/06/18/12/recycled-8111001_1280.jpg)',
            transform: `translateY(${scrollY * 0.5}px)`,
            willChange: 'transform',
          }}
        />
        
        {/* Green Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-green-600/90 to-green-800/90" />
        
        {/* Content */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <Link
              to="/"
              className="inline-flex items-center text-green-50/80 hover:text-green-50 mb-4 sm:mb-6 transition-colors text-sm sm:text-base"
            >
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to Economic Group
            </Link>

            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-green-50 mb-4 sm:mb-6 px-2">
              {title}
            </h1>
            <p className="text-lg sm:text-xl md:text-2xl text-green-50/90 mb-6 sm:mb-8 max-w-3xl mx-auto px-4">
              {subtitle}
            </p>
            <p className="text-base sm:text-lg text-green-50/80 mb-6 sm:mb-8 max-w-4xl mx-auto px-4">
              {description}
            </p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="flex flex-col sm:flex-row gap-4 justify-center px-4"
            >
              <a href={servicesLink}>
                <Button
                  size="lg"
                  variant="secondary"
                  className="text-base sm:text-lg px-6 sm:px-8 py-3 w-full sm:w-auto"
                >
                  Explore Services
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Button>
              </a>
              <Link to="/contact">
                <Button
                  size="lg"
                  className="text-base sm:text-lg px-6 sm:px-8 py-3 bg-white text-green-600 hover:bg-gray-100 hover:text-green-700 w-full sm:w-auto"
                >
                  Contact Us
                </Button>
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </section>

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
