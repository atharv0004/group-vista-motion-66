import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Menu, X, Home, List, Users, Contact } from 'lucide-react';
import logo from '@/assets/logo.png';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const navigation = [
    { name: 'Home', href: '/', icon: Home },
    { name: 'Logistics', href: '/logistics', icon: List },
    { name: 'Enterprises', href: '/enterprises', icon: List },
    { name: 'Enviro Solutions', href: '/enviro', icon: List },
    { name: 'About Us', href: '/about', icon: Users },
    { name: 'Contact', href: '/contact', icon: Contact },
  ];

  return (
    <>
      <nav className="fixed top-0 w-full bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 z-50 border-b">
        <div className="w-full px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16 w-full">
            <div className="flex items-center flex-shrink-0 min-w-0">
              <Link to="/" className="flex-shrink-0 flex items-center space-x-2">
                <img
                  src={logo}
                  alt="Economic Group Logo"
                  className="h-8 w-8 rounded-sm"
                />
                <span className="text-xl font-bold text-red-600">Economic Group</span>
              </Link>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center space-x-4">
              {navigation.map((item) => {
                const Icon = item.icon;
                return (
                  <Link
                    key={item.name}
                    to={item.href}
                    className={`flex items-center px-3 py-2 rounded-md text-sm font-medium transition-colors hover:text-red-600 ${
                      location.pathname === item.href
                        ? 'text-red-600 bg-red-50'
                        : 'text-muted-foreground hover:text-foreground'
                    }`}
                  >
                    <Icon className="w-4 h-4 mr-2" />
                    {item.name}
                  </Link>
                );
              })}
            </div>

            {/* Mobile menu button - Fixed positioning and z-index */}
            <div className="lg:hidden flex items-center flex-shrink-0 relative z-[60]">
              <Button
                variant="ghost"
                size="sm"
                onClick={() => setIsOpen(!isOpen)}
                className="p-2 h-10 w-10 text-muted-foreground hover:text-foreground flex items-center justify-center relative z-[60]"
              >
                {isOpen ? (
                  <X className="w-6 h-6" />
                ) : (
                  <Menu className="w-6 h-6" />
                )}
              </Button>
            </div>
          </div>
        </div>
      </nav>

      {/* Mobile Navigation Overlay */}
      {isOpen && (
        <>
          {/* Backdrop */}
          <div 
            className="fixed inset-0 bg-black bg-opacity-50 z-40 lg:hidden"
            onClick={() => setIsOpen(false)}
          />
          
          {/* Mobile Navigation - Fixed z-index */}
          <div className="fixed top-16 left-0 right-0 bg-background border-b shadow-lg z-50 lg:hidden">
            <div className="px-4 pt-2 pb-3 space-y-2">
              {navigation.map((item) => {
                const Icon = item.icon;
                return (
                  <Link
                    key={item.name}
                    to={item.href}
                    className={`flex items-center px-3 py-3 rounded-md text-base font-medium transition-colors border-l-4 ${
                      location.pathname === item.href
                        ? 'text-red-600 bg-red-50 border-red-600'
                        : 'text-muted-foreground hover:text-foreground hover:bg-gray-50 border-transparent'
                    }`}
                    onClick={() => setIsOpen(false)}
                  >
                    <Icon className="w-5 h-5 mr-3" />
                    {item.name}
                  </Link>
                );
              })}
            </div>
          </div>
        </>
      )}
    </>
  );
};

export default Navbar;