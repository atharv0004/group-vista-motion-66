
import CategoryHero from '@/components/CategoryHero';
import CategoryMission from '@/components/CategoryMission';
import CategoryClients from '@/components/CategoryClients';
import ServicePage from '@/components/ServicePage';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { ArrowLeft, ArrowRight } from 'lucide-react';
import { useEffect, useState } from 'react';
import businessImage from '@/assets/business.jpg';

const EnterprisesHome = () => {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const clients = [
    { name: 'APL LOGISTICS', logo: '/assets/logisticsClients/apl.png', industry: 'Technology' },
    { name: 'METRO SHOES', logo: '/assets/logisticsClients/sml.jpg', industry: 'Business Development' },
    { name: 'HOMETOWN', logo: '/assets/logisticsClients/johnson.jpg', industry: 'Consulting' },
    { name: 'SEABIRD', logo: '/assets/logisticsClients/seabird.png', industry: 'Management' }
  ];

  // Add console logging to debug image loading
  useEffect(() => {
    console.log('Enterprise clients data:', clients);
    clients.forEach(client => {
      console.log(`Checking image: ${client.logo}`);
    });
  }, []);

  const title = "Economic Enterprises";
const subtitle = "One Stop Solution For All Manpower & Operational Needs";
const description =
  "From sourcing manpower and machinery to compliance, RTO, and real-time support, Economic Enterprises provides end-to-end business support across warehousing, facility management, trading, and beyond. We serve clients across India with scalable, reliable, and customized solutions.";
const mission =
  "To empower clients by delivering reliable manpower, equipment, and operational solutions—enabling efficiency, scalability, and business growth. We aim to be the trusted partner for businesses seeking real-time support, compliance, and expansion-ready services.";

const features = [
  "Works Contract Services",
  "Manpower Solutions",
  "Equipment Support",
  "Resources Management",
  "Facility Management",
  "Warehouse Manpower Support",
  "RTO & ODC Permissions",
  "Compliance Management & 24/7 Support",
  "Fundraising & Financial Management Solutions",
  "Commodity Trading – Fruits & Vegetables"
];

  const services = [
  {
    title: 'Manpower Solutions',
    description: 'Tailored manpower support for warehousing, retail, logistics, and corporate needs',
    features: [
      'Warehouse staff (pickers, loaders, SAP/ERP operators)',
      'Retail staff (packers, scanners, delivery personnel)',
      'Pantry & housekeeping staff',
      'Contract staffing & payroll solutions',
      'Scalable workforce across India',
    ],
    icon: '🧑‍💼',
    image: 'https://images.unsplash.com/photo-1596075780750-81249df16d67?w=600&h=400&fit=crop&crop=center',
  },
  {
    title: 'Financial & Strategic Solutions',
    description: 'Fuel your business growth with expert financial and strategic advisory',
    features: [
      'Fundraising advisory and solutions',
      'Financial management and cash flow planning',
      'Go-to-market strategies',
      'International expansion planning',
      'Strategic partnerships and deal sourcing',
    ],
    icon: '💼',
    image: 'https://images.unsplash.com/photo-1573164713347-df1e93c3258e?w=600&h=400&fit=crop&crop=center',
  },
  {
    title: 'Facility & Resource Management',
    description: 'End-to-end operational support for businesses to run efficiently',
    features: [
      'Facility upkeep and management',
      'Real-time operational support',
      'Compliance monitoring and management',
      '24/7 support infrastructure',
      'Works contract and outsourcing support',
    ],
    icon: '🏢',
    image: 'https://images.unsplash.com/photo-1529429611278-1dab569c6b3d?w=600&h=400&fit=crop&crop=center',
  },
  {
    title: 'Equipment & Machinery Support',
    description: 'Provision of reliable equipment and machinery for various operational needs',
    features: [
      'Material handling machinery',
      'Temporary equipment rentals',
      'Support for men, material, and machinery',
      'Customized logistics setup',
      'Heavy lifting and transport gear',
    ],
    icon: '⚙️',
    image: 'https://images.unsplash.com/photo-1581090700227-1b7c4e1ea8ae?w=600&h=400&fit=crop&crop=center',
  },
  {
    title: 'Compliance & Legal Services',
    description: 'Navigate legal requirements with ease and focus on operations',
    features: [
      'RTO/ODC permissions handling',
      'Labor law and Shops & Establishments compliance',
      '24/7 monitoring and documentation support',
      'PAN, GST, ESIC, PF, and PT management',
      'Audit readiness services',
    ],
    icon: '🛡️',
    image: 'https://images.unsplash.com/photo-1600121848594-60d4a72f2c89?w=600&h=400&fit=crop&crop=center',
  },
  {
  title: 'Commodity Trading Services',
  description: 'Efficient sourcing, storage, and trading of fruits and vegetables across PAN India',
  features: [
    'Fruit and vegetable sourcing from reliable producers',
    'Storage and warehousing solutions for perishables',
    'PAN India distribution and logistics network',
    'B2B trade partnerships with retailers and wholesalers',
    'Planning for future global market expansion',
  ],
  icon: '🛒',
  image: 'https://images.unsplash.com/photo-1565958011703-44b4ef2033c0?w=600&h=400&fit=crop&crop=center',
},
];

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
      {/* Parallax Hero Section */}
      <section className="py-12 sm:py-16 lg:py-20 relative overflow-hidden min-h-[60vh] flex items-center">
        {/* Parallax Background Image */}
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: `url(${businessImage})`,
            transform: `translateY(${scrollY * 0.5}px)`,
            willChange: 'transform',
          }}
        />
        
        {/* Blue Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-blue-600/90 to-blue-800/90" />
        
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
              className="inline-flex items-center text-blue-50/80 hover:text-blue-50 mb-4 sm:mb-6 transition-colors text-sm sm:text-base"
            >
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to Economic Group
            </Link>

            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-blue-50 mb-4 sm:mb-6 px-2">
              {title}
            </h1>
            <p className="text-lg sm:text-xl md:text-2xl text-blue-50/90 mb-6 sm:mb-8 max-w-3xl mx-auto px-4">
              {subtitle}
            </p>
            <p className="text-base sm:text-lg text-blue-50/80 mb-6 sm:mb-8 max-w-4xl mx-auto px-4">
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
                  className="text-base sm:text-lg px-6 sm:px-8 py-3 bg-white text-blue-600 hover:bg-gray-100 hover:text-blue-700 w-full sm:w-auto"
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

export default EnterprisesHome;
