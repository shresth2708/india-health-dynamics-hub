
import { Link } from 'react-router-dom';
import { useState } from 'react';
import { Menu, X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const navigation = [
    { name: 'Home', href: '/' },
    { name: 'System Analysis', href: '/system-analysis' },
    { name: 'Data Explorer', href: '/data-explorer' },
    { name: 'Solutions Lab', href: '/solutions-lab' },
    { name: 'Methodology', href: '/methodology' }
  ];

  return (
    <header className="bg-white shadow-sm border-b border-border sticky top-0 z-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex">
            <div className="flex-shrink-0 flex items-center">
              <Link to="/" className="flex items-center">
                <div className="h-8 w-8 bg-health-teal rounded-md flex items-center justify-center mr-2">
                  <span className="text-white font-bold">IH</span>
                </div>
                <span className="font-display text-xl font-semibold text-health-dark-blue">
                  India Health Dynamics
                </span>
              </Link>
            </div>
          </div>
          
          {/* Desktop navigation */}
          <nav className="hidden md:ml-6 md:flex md:space-x-5 items-center">
            {navigation.map((item) => (
              <Link
                key={item.name}
                to={item.href}
                className="px-2 py-1 text-sm font-medium text-health-dark hover:text-health-teal border-b-2 border-transparent hover:border-health-teal transition-colors"
              >
                {item.name}
              </Link>
            ))}
          </nav>

          {/* Mobile menu button */}
          <div className="flex items-center md:hidden">
            <Button
              variant="ghost"
              onClick={toggleMenu}
              className="inline-flex items-center justify-center p-2 rounded-md text-health-dark-blue hover:text-health-teal"
            >
              <span className="sr-only">Open main menu</span>
              {isMenuOpen ? <X className="block h-6 w-6" /> : <Menu className="block h-6 w-6" />}
            </Button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      <div className={cn("md:hidden", isMenuOpen ? "block" : "hidden")}>
        <div className="pt-2 pb-3 space-y-1">
          {navigation.map((item) => (
            <Link
              key={item.name}
              to={item.href}
              className="block px-4 py-2 text-base font-medium text-health-dark-blue hover:bg-health-light hover:text-health-teal border-l-4 border-transparent hover:border-health-teal transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              {item.name}
            </Link>
          ))}
        </div>
      </div>
    </header>
  );
}
