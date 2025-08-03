import React from 'react';
import { NavLink } from 'react-router-dom';

const GraphNavbar = () => {
  const navLinks = [
    { to: '/graph/bfs', label: 'Breadth-First Search' },
    { to: '/graph/dfs', label: 'Depth-First Search' },
  ];

  return (
    <header className="w-full bg-white shadow-md text-indigo-700">
      <div className="max-w-6xl mx-auto px-4 h-16 flex items-center justify-center">
        <nav className="flex gap-4 sm:gap-6">
          {navLinks.map((link) => (
            <NavLink
              key={link.to}
              to={link.to}
              className={({ isActive }) =>
                `px-4 py-2 text-sm font-semibold rounded-full transition-all duration-300 
                 ${
                   isActive
                     ? 'bg-indigo-100 text-indigo-800 shadow-sm'
                     : 'hover:bg-indigo-50 hover:text-indigo-900'
                 }`
              }
            >
              {link.label}
            </NavLink>
          ))}
        </nav>
      </div>
    </header>
  );
};

export default GraphNavbar;
