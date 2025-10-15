"use client";
import { Facebook, Twitter, Linkedin, Mail } from "lucide-react";

export default function Footer() {
  return (
    <footer className="relative bg-[#243e9d] text-gray-200 border-t border-blue-900">
      <div className="max-w-7xl mx-auto px-6 py-12 md:py-16">
        {/* Top Section */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 text-center md:text-left">
          {/* Logo & Firm Info */}
          <div>
            <h2 className="text-2xl font-bold text-white">People’s Legal Counsel</h2>
            <p className="mt-3 text-sm text-gray-300">
              Delivering exceptional legal representation across corporate law,
              litigation, family matters, and beyond.
            </p>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-lg font-semibold text-white">Services</h3>
            <ul className="mt-3 space-y-2 text-sm">
              {/* <li>
                <a href="#services" className="hover:text-[#f09f1a]">
                  Family Law
                </a>
              </li> */}
              <li>
                <a href="#services" className="hover:text-[#f09f1a]">
                  Criminal Defense
                </a>
              </li>
              <li>
                <a href="#services" className="hover:text-[#f09f1a]">
                  Estate Planning
                </a>
              </li>
              {/* <li>
                <a href="#services" className="hover:text-[#f09f1a]">
                  Traffic Violations
                </a>
              </li> */}
            </ul>
          </div>

          {/* Firm Links */}
          <div>
            <h3 className="text-lg font-semibold text-white">Firm</h3>
            <ul className="mt-3 space-y-2 text-sm">
              <li>
                <a href="#home" className="hover:text-[#f09f1a]">
                  Home
                </a>
              </li>
              <li>
                <a href="#contact" className="hover:text-[#f09f1a]">
                  Contact
                </a>
              </li>
              <li>
                <a href="#services" className="hover:text-[#f09f1a]">
                  Services
                </a>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-lg font-semibold text-white">Contact</h3>
            <p className="mt-3 text-sm text-gray-300">
              19000 Stratford Road, Unit 105<br />
              Minnetonka, MN, 55345, USA
            </p>
            <a
              href="tel:+17633571659"
              className="mt-4 block text-lg font-bold text-[#f09f1a] hover:text-[#d32524]"
            >
              📞 +1 (763) 357-1659
            </a>
            <a
              href="mailto:mike@getintocompliance.org"
              className="mt-2 block text-sm text-gray-300 hover:text-[#f09f1a]"
            >
              ✉️ mike@getintocompliance.org
            </a>
          </div>
        </div>

        {/* Divider */}
        <div className="my-8 border-t border-blue-800"></div>

        {/* Bottom Section */}
        <div className="flex flex-col md:flex-row justify-between items-center text-sm text-gray-300">
          <p>© {new Date().getFullYear()} People’s Legal Counsel. All rights reserved.</p>
          <div className="flex space-x-4 mt-4 md:mt-0">
            {/* <a href="https://facebook.com">
              <Facebook size={18} className="hover:text-[#f09f1a]" />
            </a>
            <a href="https://twitter.com">
              <Twitter size={18} className="hover:text-[#f09f1a]" />
            </a>
            <a href="https://linkedin.com">
              <Linkedin size={18} className="hover:text-[#f09f1a]" />
            </a>
            <a href="mailto:mike@getintocompliance.org">
              <Mail size={18} className="hover:text-[#f09f1a]" />
            </a> */}
          </div>
        </div>
      </div>
    </footer>
  );
}
