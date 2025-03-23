import React, { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-blue-600 shadow-lg">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          {/* Logo */}
          <div className="flex-shrink-0 flex items-center">
            <Link to="/" className="text-white text-2xl font-bold">TEE Bounty</Link>
          </div>

          {/* Desktop Menu */}
          <div className="hidden sm:flex sm:items-center sm:space-x-4">
            <NavLink
              to="/"
              className={({ isActive }) =>
                `text-white px-3 py-2 rounded-md text-sm font-medium ${
                  isActive ? 'bg-blue-700' : 'hover:bg-blue-500'
                }`
              }
            >
              Home
            </NavLink>
            <NavLink
              to="/create"
              className={({ isActive }) =>
                `text-white px-3 py-2 rounded-md text-sm font-medium ${
                  isActive ? 'bg-blue-700' : 'hover:bg-blue-500'
                }`
              }
            >
              Create Bounty
            </NavLink>
            <NavLink
              to="/submit"
              className={({ isActive }) =>
                `text-white px-3 py-2 rounded-md text-sm font-medium ${
                  isActive ? 'bg-blue-700' : 'hover:bg-blue-500'
                }`
              }
            >
              Submit Code
            </NavLink>
            <NavLink
              to="/profile"
              className={({ isActive }) =>
                `text-white px-3 py-2 rounded-md text-sm font-medium ${
                  isActive ? 'bg-blue-700' : 'hover:bg-blue-500'
                }`
              }
            >
              Profile
            </NavLink>
          </div>

          {/* Mobile Menu Button */}
          <div className="sm:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-white focus:outline-none"
            >
              <svg
                className="h-6 w-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                {isOpen ? (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M6 18L18 6M6 6l12 12"
                  />
                ) : (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h16m-7 6h7"
                  />
                )}
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Menu (shown when isOpen is true) */}
        {isOpen && (
          <div className="sm:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1">
              <NavLink
                to="/"
                className={({ isActive }) =>
                  `block text-white px-3 py-2 rounded-md text-base font-medium ${
                    isActive ? 'bg-blue-700' : 'hover:bg-blue-500'
                  }`
                }
                onClick={() => setIsOpen(false)}
              >
                Home
              </NavLink>
              <NavLink
                to="/create"
                className={({ isActive }) =>
                  `block text-white px-3 py-2 rounded-md text-base font-medium ${
                    isActive ? 'bg-blue-700' : 'hover:bg-blue-500'
                  }`
                }
                onClick={() => setIsOpen(false)}
              >
                Create Bounty
              </NavLink>
              <NavLink
                to="/submit"
                className={({ isActive }) =>
                  `block text-white px-3 py-2 rounded-md text-base font-medium ${
                    isActive ? 'bg-blue-700' : 'hover:bg-blue-500'
                  }`
                }
                onClick={() => setIsOpen(false)}
              >
                Submit Code
              </NavLink>
              <NavLink
                to="/profile"
                className={({ isActive }) =>
                  `block text-white px-3 py-2 rounded-md text-base font-medium ${
                    isActive ? 'bg-blue-700' : 'hover:bg-blue-500'
                  }`
                }
                onClick={() => setIsOpen(false)}
              >
                Profile
              </NavLink>
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}

export default Navbar