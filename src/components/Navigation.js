import { useState } from "react";
import { Menu, X, Phone, ChevronDown, Facebook, Twitter, Linkedin, Mail } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";

export default function Navigation() {
  const [open, setOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const navigate = useNavigate();

  const practiceAreas = [
    { name: "Family Law", path: "/family-law" },
    { name: "Criminal Defense", path: "/criminal-defense" },
    { name: "Guardian Ad Litem", path: "/guardian-ad-litem" },
    { name: "Parenting Coordinator", path: "/parenting-coordinator" },
    { name: "Traffic Violations", path: "/traffic-violations" },
    { name: "Estate Planning", path: "/estate-planning" },
    { name: "Collaborative Law", path: "/collaborative-law" },
  ];

  const menuItems = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Practice Areas", dropdown: true },
    { name: "Contact", path: "/contact" },
  ];

  return (
    <header className="w-full fixed top-0 left-0 z-50 bg-white/95 backdrop-blur-md shadow">
      <div className="flex items-center justify-between h-20 px-6 md:px-16 relative">
        {/* Logo as Text */}
        <motion.div
          className="cursor-pointer select-none"
          whileHover={{ scale: 1.05 }}
          onClick={() => navigate("/")}
        >
          <span className="text-3xl md:text-4xl font-serif italic text-green-700">
            Court
          </span>
          <span className="text-lg md:text-xl font-sans text-gray-800 ml-1">
            Roller Law
          </span>
        </motion.div>

        {/* Centered Nav (Desktop) */}
        <nav className="hidden md:flex absolute left-1/2 transform -translate-x-1/2 gap-10">
          {menuItems.map((item) =>
            item.dropdown ? (
              <div key={item.name} className="relative">
                <button
                  onClick={() => setDropdownOpen(!dropdownOpen)}
                  className="flex items-center gap-1 text-gray-800 font-medium hover:text-green-600 transition"
                >
                  {item.name} <ChevronDown size={16} />
                </button>

                {/* Dropdown */}
                <AnimatePresence>
                  {dropdownOpen && (
                    <motion.div
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -10 }}
                      className="absolute top-full mt-2 bg-white shadow-lg rounded-md py-2 w-56 z-50"
                    >
                      {practiceAreas.map((sub) => (
                        <button
                          key={sub.name}
                          onClick={() => {
                            navigate(sub.path);
                            setDropdownOpen(false);
                          }}
                          className="block w-full text-left px-4 py-2 text-gray-700 hover:bg-gray-100 hover:text-green-600"
                        >
                          {sub.name}
                        </button>
                      ))}
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ) : (
              <button
                key={item.name}
                onClick={() => navigate(item.path)}
                className="relative text-gray-800 font-medium transition-colors duration-300 hover:text-green-600 group"
              >
                {item.name}
                <span className="absolute left-0 -bottom-1 w-0 h-[2px] bg-green-600 transition-all duration-300 group-hover:w-full"></span>
              </button>
            )
          )}
        </nav>

        {/* Right Side → Phone + Social */}
        <div className="hidden md:flex items-center gap-4 ml-auto">
          <div className="flex items-center gap-2 text-green-700 font-semibold">
            <Phone size={20} className="text-green-700" />
            <a href="tel:+11234567890" className="hover:underline">
              (123) 456-7890
            </a>
          </div>
          {/* Social Icons */}
          <div className="flex items-center gap-3 text-gray-700">
            <a href="#" className="hover:text-green-600"><Facebook size={18} /></a>
            <a href="#" className="hover:text-green-600"><Twitter size={18} /></a>
            <a href="#" className="hover:text-green-600"><Linkedin size={18} /></a>
            <a href="#" className="hover:text-green-600"><Mail size={18} /></a>
          </div>
        </div>

        {/* Mobile Hamburger */}
        <button
          onClick={() => setOpen(!open)}
          className="md:hidden p-2 rounded-md text-gray-700 focus:outline-none ml-auto"
        >
          {open ? <X size={26} /> : <Menu size={26} />}
        </button>
      </div>

      {/* Mobile Dropdown */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            className="md:hidden flex flex-col items-center gap-5 pb-6 bg-white shadow-inner"
          >
            {menuItems.map((item) =>
              item.dropdown ? (
                <div key={item.name} className="w-full">
                  <button
                    onClick={() => setDropdownOpen(!dropdownOpen)}
                    className="text-center w-full py-2 font-medium text-gray-800 flex items-center justify-center gap-1"
                  >
                    {item.name} <ChevronDown size={16} />
                  </button>

                  {dropdownOpen && (
                    <div className="flex flex-col gap-2">
                      {practiceAreas.map((sub) => (
                        <button
                          key={sub.name}
                          onClick={() => {
                            navigate(sub.path);
                            setOpen(false);
                            setDropdownOpen(false);
                          }}
                          className="block w-full text-center py-2 text-gray-700 hover:text-green-600 transition"
                        >
                          {sub.name}
                        </button>
                      ))}
                    </div>
                  )}
                </div>
              ) : (
                <button
                  key={item.name}
                  onClick={() => {
                    navigate(item.path);
                    setOpen(false);
                  }}
                  className="block w-full text-center py-2 text-gray-700 font-medium hover:text-green-600 transition"
                >
                  {item.name}
                </button>
              )
            )}

            {/* Phone + Social in Mobile Menu */}
            <div className="flex flex-col items-center gap-3 pt-4">
              <div className="flex items-center gap-2 text-green-700 font-semibold">
                <Phone size={20} className="text-green-700" />
                <a href="tel:+11234567890">(123) 456-7890</a>
              </div>
              <div className="flex items-center gap-3 text-gray-700">
                <a href="#" className="hover:text-green-600"><Facebook size={18} /></a>
                <a href="#" className="hover:text-green-600"><Twitter size={18} /></a>
                <a href="#" className="hover:text-green-600"><Linkedin size={18} /></a>
                <a href="#" className="hover:text-green-600"><Mail size={18} /></a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
