import { Link } from 'react-router-dom';
import { Facebook, Twitter, Linkedin, Instagram, Mail, Phone, MapPin, ArrowRight } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const companyLinks = [
    { name: 'About Us', href: '/about' },
    { name: 'Our Services', href: '/logistics' },
    { name: 'Contact', href: '/contact' },
    { name: 'Careers', href: '#' }
  ];

  const serviceLinks = [
    { name: 'Logistics Solutions', href: '/logistics/services' },
    { name: 'Enterprise Services', href: '/enterprises/services' },
    { name: 'Environmental Solutions', href: '/enviro/services' },
    { name: 'Consulting', href: '#' }
  ];

  const resourceLinks = [
    { name: 'Blog', href: '#' },
    { name: 'Case Studies', href: '#' },
    { name: 'White Papers', href: '#' },
    { name: 'FAQ', href: '#' }
  ];

  const socialLinks = [
    { Icon: Facebook, href: '#', label: 'Facebook' },
    { Icon: Twitter, href: '#', label: 'Twitter' },
    { Icon: Linkedin, href: '#', label: 'LinkedIn' },
    { Icon: Instagram, href: '#', label: 'Instagram' }
  ];

  return (
    <footer className="bg-gradient-to-br from-[#C62828] to-[#B71C1C] text-white">
      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-start">
          {/* Company Info */}
          <div>
            <Link to="/" className="inline-block mb-4">
              <h3 className="text-2xl font-bold text-white">Economic Group</h3>
            </Link>
            <p className="text-red-100 mb-4 leading-relaxed">
              Leading provider of logistics, enterprise, and environmental solutions.
            </p>
            <div className="space-y-2">
              <div className="flex items-center">
                <MapPin className="w-5 h-5 text-red-300 mr-3 flex-shrink-0" />
                <span className="text-red-100">123 Business District, Economic Plaza</span>
              </div>
              <div className="flex items-center">
                <Phone className="w-5 h-5 text-red-300 mr-3 flex-shrink-0" />
                <span className="text-red-100">+1 (555) 123-4567</span>
              </div>
              <div className="flex items-center">
                <Mail className="w-5 h-5 text-red-300 mr-3 flex-shrink-0" />
                <span className="text-red-100">info@economicgroup.com</span>
              </div>
            </div>
          </div>
          {/* Footer Navigation */}
          <div>
            <h5 className="text-lg font-semibold mb-4 text-white">Quick Links</h5>
            <ul className="space-y-2">
              <li><Link to="/" className="text-red-100 hover:text-white transition-colors duration-200">Home</Link></li>
              <li><Link to="/logistics" className="text-red-100 hover:text-white transition-colors duration-200">Logistics</Link></li>
              <li><Link to="/enterprises" className="text-red-100 hover:text-white transition-colors duration-200">Enterprises</Link></li>
              <li><Link to="/enviro" className="text-red-100 hover:text-white transition-colors duration-200">Enviro Solutions</Link></li>
              <li><Link to="/about" className="text-red-100 hover:text-white transition-colors duration-200">About Us</Link></li>
              <li><Link to="/contact" className="text-red-100 hover:text-white transition-colors duration-200">Contact</Link></li>
            </ul>
          </div>
          {/* Social Links */}
          <div>
            <h5 className="text-lg font-semibold mb-4 text-white">Follow Us</h5>
            <div className="flex space-x-4">
              {socialLinks.map(({ Icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  className="text-red-200 hover:text-white transition-colors duration-200 hover:scale-110 transform"
                  aria-label={label}
                >
                  <Icon className="w-6 h-6" />
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-red-700">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between space-y-2 md:space-y-0">
            <div className="text-center md:text-left">
              <p className="text-red-200 text-sm">
                © {currentYear} Economic Group. All rights reserved.
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
