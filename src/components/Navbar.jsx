import { Link, useLocation } from "react-router-dom";
import { motion } from "framer-motion";
import { Menu, X } from "lucide-react";
import { useState } from "react";

import { ThemeToggle } from "./ThemeToggle";

const links = [
  { path: "/", label: "Home" },
  { path: "/about", label: "About" },
  { path: "/skills", label: "Skills" },
  { path: "/projects", label: "Projects" },
];

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  return (
    <header className="sticky top-0 bg-gray-100 dark:bg-gray-800 shadow-sm z-50">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <Link
            to="/"
            className="text-2xl font-bold text-gray-800 dark:text-white"
          >
            Ramarak
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            <div className="flex gap-6">
              {links.map((link) => (
                <motion.div
                  key={link.path}
                  whileHover={{ scale: 1.05 }}
                  transition={{ type: "spring", stiffness: 300 }}
                  className="transform origin-center"
                >
                  <Link
                    to={link.path}
                    className={`${
                      location.pathname === link.path
                        ? "text-blue-600 dark:text-blue-400 font-semibold"
                        : "text-gray-800 dark:text-gray-300"
                    } hover:text-blue-600 dark:hover:text-blue-400 transition-colors`}
                  >
                    {link.label}
                  </Link>
                </motion.div>
              ))}
            </div>
            <ThemeToggle />
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center gap-4">
            <ThemeToggle />
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-800 dark:text-gray-300"
            >
              {isOpen ? (
                <X className="w-6 h-6" />
              ) : (
                <Menu className="w-6 h-6" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="md:hidden py-4"
          >
            <div className="flex flex-col gap-4">
              {links.map((link) => (
                <motion.div
                  key={link.path}
                  whileHover={{ scale: 1.05 }}
                  transition={{ type: "spring", stiffness: 300 }}
                  className="transform origin-center"
                >
                  <Link
                    to={link.path}
                    onClick={() => setIsOpen(false)}
                    className={`${
                      location.pathname === link.path
                        ? "text-blue-600 dark:text-blue-400 font-semibold"
                        : "text-gray-800 dark:text-gray-300"
                    } hover:text-blue-600 dark:hover:text-blue-400 transition-colors`}
                  >
                    {link.label}
                  </Link>
                </motion.div>
              ))}
            </div>
          </motion.div>
        )}
      </nav>
    </header>
  );
};
