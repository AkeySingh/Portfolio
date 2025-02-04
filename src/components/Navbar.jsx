import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Menu, X } from "lucide-react"; // Install lucide-react: npm install lucide-react

const Navbar = () => {
  const [darkMode, setDarkMode] = useState(
    localStorage.getItem("theme") === "dark"
  );
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  }, [darkMode]);

  return (
    <motion.nav
      className="fixed top-0 left-0 w-full backdrop-blur-lg bg-white/20 dark:bg-gray-900/30 shadow-md p-4 z-50"
      initial={{ y: -50, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <div className="container mx-auto flex justify-between items-center">
        <h1 className="text-2xl font-bold text-gray-800 dark:text-white">
          Abhishek
        </h1>

        {/* Desktop Menu */}
        <ul className="hidden md:flex gap-6">
          {["About", "Skills", "Projects", "Testimonials", "Contact"].map(
            (item, index) => (
              <motion.li
                key={index}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                <a
                  href={`#${item.toLowerCase()}`}
                  className="text-gray-800 dark:text-white hover:text-blue-500 transition-all duration-300"
                >
                  {item}
                </a>
              </motion.li>
            )
          )}
        </ul>

        {/* Dark Mode & Mobile Menu Button */}
        <div className="flex items-center gap-4">
          <button
            className="bg-gray-700 px-3 py-1 rounded-lg hover:bg-gray-600 text-white"
            onClick={() => setDarkMode(!darkMode)}
          >
            {darkMode ? "☀️ Light" : "🌙 Dark"}
          </button>
          <button
            className="md:hidden text-gray-800 dark:text-white"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            {menuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <motion.ul
          className="md:hidden bg-white dark:bg-gray-800 absolute top-16 left-0 w-full flex flex-col gap-4 p-4 shadow-lg"
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3 }}
        >
          {["About", "Skills", "Projects", "Testimonials", "Contact"].map(
            (item, index) => (
              <li key={index} className="text-center">
                <a
                  href={`#${item.toLowerCase()}`}
                  className="text-gray-800 dark:text-white block py-2 hover:text-blue-500 transition-all"
                  onClick={() => setMenuOpen(false)}
                >
                  {item}
                </a>
              </li>
            )
          )}
        </motion.ul>
      )}
    </motion.nav>
  );
};

export default Navbar;
