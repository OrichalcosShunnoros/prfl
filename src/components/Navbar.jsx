import { Link, useLocation } from "react-router-dom";
import { motion } from "framer-motion";
import { Menu, X } from "lucide-react";
import { useState, useEffect } from "react";

import { ThemeToggle } from "./ThemeToggle";

const links = [
  { path: "/", label: "Home" },
  { path: "/about", label: "About" },
  { path: "/skills", label: "Skills" },
  { path: "/projects", label: "Projects" },
];

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <header
      className={`sticky top-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-gray-100/80 dark:bg-gray-800/80 shadow-md backdrop-blur-md"
          : "bg-gray-100 dark:bg-gray-800 shadow-sm"
      }`}
    >
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
              {links.map((link) => {
                const isActive = location.pathname === link.path;
                return (
                  <motion.div
                    key={link.path}
                    whileHover={isActive ? {} : { scale: 1.05 }}
                    transition={{ type: "spring", stiffness: 300 }}
                    className="transform origin-center"
                  >
                    <Link
                      to={link.path}
                      className={`${
                        isActive
                          ? "text-blue-600 dark:text-blue-400 font-semibold"
                          : "text-gray-800 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                      }`}
                    >
                      {link.label}
                    </Link>
                  </motion.div>
                );
              })}
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
              {links.map((link) => {
                const isActive = location.pathname === link.path;
                return (
                  <motion.div
                    key={link.path}
                    whileHover={isActive ? {} : { x: 10 }}
                    transition={{ type: "spring", stiffness: 300 }}
                    className="transform origin-center"
                  >
                    <Link
                      to={link.path}
                      onClick={() => setIsOpen(false)}
                      className={`${
                        isActive
                          ? "text-blue-600 dark:text-blue-400 font-extrabold"
                          : "text-gray-800 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                      }`}
                    >
                      {link.label}
                    </Link>
                  </motion.div>
                );
              })}
            </div>
          </motion.div>
        )}
      </nav>
    </header>
  );
};
