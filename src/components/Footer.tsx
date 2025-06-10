
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
    <footer className="bg-gradient-to-br from-red-900 to-red-800 text-white">
      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid lg:grid-cols-4 md:grid-cols-2 gap-8">
          {/* Company Info */}
          <div className="lg:col-span-1">
            <Link to="/" className="inline-block mb-6">
              <h3 className="text-2xl font-bold text-white">Economic Group</h3>
            </Link>
            <p className="text-red-100 mb-6 leading-relaxed">
              Leading provider of logistics, enterprise, and environmental solutions. 
              Transforming businesses worldwide through innovation and excellence.
            </p>
            <div className="space-y-3">
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

          {/* Company Links */}
          <div>
            <h4 className="text-lg font-semibold mb-6 text-white">Company</h4>
            <ul className="space-y-3">
              {companyLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.href}
                    className="text-red-100 hover:text-white transition-colors duration-200 flex items-center group"
                  >
                    <ArrowRight className="w-4 h-4 mr-2 opacity-0 group-hover:opacity-100 transition-opacity duration-200" />
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services Links */}
          <div>
            <h4 className="text-lg font-semibold mb-6 text-white">Services</h4>
            <ul className="space-y-3">
              {serviceLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.href}
                    className="text-red-100 hover:text-white transition-colors duration-200 flex items-center group"
                  >
                    <ArrowRight className="w-4 h-4 mr-2 opacity-0 group-hover:opacity-100 transition-opacity duration-200" />
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources & Social */}
          <div>
            <h4 className="text-lg font-semibold mb-6 text-white">Resources</h4>
            <ul className="space-y-3 mb-8">
              {resourceLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.href}
                    className="text-red-100 hover:text-white transition-colors duration-200 flex items-center group"
                  >
                    <ArrowRight className="w-4 h-4 mr-2 opacity-0 group-hover:opacity-100 transition-opacity duration-200" />
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>

            {/* Social Links */}
            <div>
              <h5 className="text-sm font-semibold mb-4 text-white">Follow Us</h5>
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
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-red-700">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between space-y-4 md:space-y-0">
            <div className="text-center md:text-left">
              <p className="text-red-200 text-sm">
                © {currentYear} Economic Group. All rights reserved.
              </p>
            </div>
            <div className="text-center md:text-right">
              <div className="flex justify-center md:justify-end space-x-6 text-sm">
                <Link to="#" className="text-red-200 hover:text-white transition-colors duration-200">
                  Privacy Policy
                </Link>
                <Link to="#" className="text-red-200 hover:text-white transition-colors duration-200">
                  Terms of Service
                </Link>
                <Link to="#" className="text-red-200 hover:text-white transition-colors duration-200">
                  Cookie Policy
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
