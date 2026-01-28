import React from 'react';
import { NavLink } from 'react-router-dom';
import { LayoutDashboard, Building2, FileText, MapPin } from 'lucide-react';

const Navigation = () => {
  const navItems = [
    { to: '/', icon: LayoutDashboard, label: 'Dashboard' },
    { to: '/properties', icon: Building2, label: 'All Properties' },
    { to: '/meetings', icon: FileText, label: 'Meeting Minutes' },
    { to: '/map', icon: MapPin, label: 'Map View' },
  ];

  return (
    <nav className="bg-stone-800 text-white shadow-lg">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex items-center justify-between h-20">
          <div className="flex items-center">
            <Building2 className="w-10 h-10 text-amber-400 mr-4" />
            <h1 className="text-2xl font-bold">Property Portfolio</h1>
          </div>
          <div className="flex space-x-2">
            {navItems.map(({ to, icon: Icon, label }) => (
              <NavLink
                key={to}
                to={to}
                className={({ isActive }) =>
                  `flex items-center px-6 py-3 rounded-lg text-lg font-semibold transition-colors duration-200 min-h-[44px] ${
                    isActive
                      ? 'bg-amber-600 text-white'
                      : 'text-stone-300 hover:bg-stone-700 hover:text-white'
                  }`
                }
              >
                <Icon className="w-6 h-6 mr-2" />
                {label}
              </NavLink>
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
