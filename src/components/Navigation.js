import { useState } from "react";
import {
  Menu,
  X,
  Phone,
  Facebook,
  Twitter,
  Linkedin,
  Mail,
} from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export default function Navigation() {
  const [open, setOpen] = useState(false);

  const menuItems = [
    { name: "Home", href: "#home" },
    { name: "Services", href: "#services" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <header className="w-full fixed top-0 left-0 z-50 bg-white/95 backdrop-blur-md shadow">
      <div className="flex items-center justify-between h-20 px-6 md:px-16 relative">
        {/* Logo */}
        <motion.div
          className="cursor-pointer select-none flex items-center"
          whileHover={{ scale: 1.05 }}
          onClick={() => (window.location.href = "#home")}
        >
          <span className="text-2xl md:text-3xl font-bold text-[#243e9d]">
            LegalCounsel.law
          </span>
        </motion.div>

        {/* Centered Nav (Desktop) */}
        <nav className="hidden md:flex absolute left-1/2 transform -translate-x-1/2 gap-10">
          {menuItems.map((item) => (
            <a
              key={item.name}
              href={item.href}
              className="relative text-gray-800 font-medium transition-colors duration-300 hover:text-[#243e9d] group"
            >
              {item.name}
              <span className="absolute left-0 -bottom-1 w-0 h-[2px] bg-[#243e9d] transition-all duration-300 group-hover:w-full"></span>
            </a>
          ))}
        </nav>

        {/* Right Side → Phone + Social */}
        <div className="hidden md:flex items-center gap-4 ml-auto">
          <div className="flex items-center gap-2 text-[#d32524] font-semibold">
            <Phone size={20} className="text-[#d32524]" />
            <a href="tel:+17633571659" className="hover:underline">
              +1 (763) 357-1659
            </a>
          </div>
          {/* Social Icons */}
          {/* <div className="flex items-center gap-3 text-gray-700">
            <a href="#" className="hover:text-[#243e9d]">
              <Facebook size={18} />
            </a>
            <a href="#" className="hover:text-[#243e9d]">
              <Twitter size={18} />
            </a>
            <a href="#" className="hover:text-[#243e9d]">
              <Linkedin size={18} />
            </a>
            <a href="mailto:mike@getintocompliance.org" className="hover:text-[#243e9d]">
              <Mail size={18} />
            </a>
          </div> */}
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
            {menuItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                onClick={() => setOpen(false)}
                className="block w-full text-center py-2 text-gray-700 font-medium hover:text-[#243e9d] transition"
              >
                {item.name}
              </a>
            ))}

            {/* Phone + Social in Mobile Menu */}
            <div className="flex flex-col items-center gap-3 pt-4">
              <div className="flex items-center gap-2 text-[#d32524] font-semibold">
                <Phone size={20} className="text-[#d32524]" />
                <a href="tel:+17633571659">+1 (763) 357-1659</a>
              </div>
              <div className="flex items-center gap-3 text-gray-700">
                <a href="#" className="hover:text-[#243e9d]">
                  <Facebook size={18} />
                </a>
                <a href="#" className="hover:text-[#243e9d]">
                  <Twitter size={18} />
                </a>
                <a href="#" className="hover:text-[#243e9d]">
                  <Linkedin size={18} />
                </a>
                <a href="mailto:mike@getintocompliance.org" className="hover:text-[#243e9d]">
                  <Mail size={18} />
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
