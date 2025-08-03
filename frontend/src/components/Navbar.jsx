import React, { useState } from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/solid';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const navLinks = [
    { to: '/', label: 'Home', active: '/' },
    { to: '/sorting/bubblesort', label: 'Sorting', active: '/sorting' },
    { to: '/searching/linearsearch', label: 'Searching', active: '/searching' },
    { to: '/graph/bfs', label: 'Graph', active: '/graph' }
  ];

  const toggleMenu = () => setIsOpen(!isOpen);
  const closeMenu = () => setIsOpen(false);

  return (
    <header className="sticky top-0 z-40 w-full bg-indigo-500 text-white shadow-md">
      <div className="container mx-auto px-4 h-16 flex items-center justify-between">
        <NavLink
          to="/"
          onClick={closeMenu}
          className="text-xl font-bold tracking-wide hover:text-white transition-colors"
        >
          DSA Visualizer
        </NavLink>

        {/* Mobile Menu Button */}
        <button className="sm:hidden focus:outline-none" onClick={toggleMenu}>
          {isOpen ? (
            <XMarkIcon className="w-6 h-6 text-white" />
          ) : (
            <Bars3Icon className="w-6 h-6 text-white" />
          )}
        </button>

        {/* Desktop Nav Links */}
        <nav className="hidden sm:flex gap-4">
          {navLinks.map(link => (
            <NavLink
              key={link.to}
              to={link.to}
              onClick={closeMenu}
              className={() =>
                `text-sm font-medium px-4 py-2 rounded-md transition-all duration-200
                hover:bg-white hover:text-indigo-600
                ${
                  (link.label === 'Home' && location.pathname === link.active) ||
                  (link.label !== 'Home' && location.pathname.startsWith(link.active))
                    ? 'bg-indigo-700'
                    : ''
                }`
              }
            >
              {link.label}
            </NavLink>
          ))}
        </nav>
      </div>

      {/* Mobile Nav Links */}
      {isOpen && (
        <div className="sm:hidden bg-indigo-500 px-4 pb-4 pt-2 space-y-2 transition-all">
          {navLinks.map(link => (
            <NavLink
              key={link.to}
              to={link.to}
              onClick={closeMenu}
              className={() =>
                `block text-sm font-medium w-fit px-4 py-2 rounded-md transition-all duration-200
                hover:bg-white hover:text-indigo-600
                ${
                  (link.label === 'Home' && location.pathname === link.active) ||
                  (link.label !== 'Home' && location.pathname.startsWith(link.active))
                    ? 'bg-indigo-700'
                    : ''
                }`
              }
            >
              {link.label}
            </NavLink>
          ))}
        </div>
      )}
    </header>
  );
};

export default Navbar;
