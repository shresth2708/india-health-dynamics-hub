
import { Header } from './Header';
import { ReactNode } from 'react';

interface LayoutProps {
  children: ReactNode;
}

export function Layout({ children }: LayoutProps) {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1 container mx-auto px-4 py-6 sm:px-6 lg:px-8">
        {children}
      </main>
      <footer className="bg-health-dark-blue text-white py-8">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <h4 className="text-lg font-semibold mb-4">India Health Dynamics</h4>
              <p className="text-sm text-gray-300">
                A systems thinking approach to addressing lifestyle diseases in middle-class India.
              </p>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4">Resources</h4>
              <ul className="space-y-2 text-sm text-gray-300">
                <li>
                  <a href="#" className="hover:text-health-teal transition-colors">System Dynamics Society</a>
                </li>
                <li>
                  <a href="#" className="hover:text-health-teal transition-colors">Indian Health Ministry</a>
                </li>
                <li>
                  <a href="#" className="hover:text-health-teal transition-colors">WHO Global Health Observatory</a>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4">Contact</h4>
              <p className="text-sm text-gray-300">
                For more information about this project, contact us at:
                <br />
                <a href="mailto:info@indiahealthdynamics.org" className="text-health-teal hover:underline">
                  info@indiahealthdynamics.org
                </a>
              </p>
            </div>
          </div>
          <div className="mt-8 pt-4 border-t border-gray-600 text-sm text-gray-400 text-center">
            &copy; {new Date().getFullYear()} India Health Dynamics. All rights reserved.
          </div>
        </div>
      </footer>
    </div>
  );
}
