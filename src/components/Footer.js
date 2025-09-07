"use client";
import { Facebook, Twitter, Linkedin, Mail } from "lucide-react";
import { useNavigate } from "react-router-dom";

export default function Footer() {
  const navigate = useNavigate();

  return (
    <footer className="relative bg-blue-950 text-gray-300 border-t border-blue-900">
      <div className="max-w-7xl mx-auto px-6 py-12 md:py-16">
        {/* Top Section */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 text-center md:text-left">
          {/* Logo & Firm Info */}
          <div>
            <h2 className="text-2xl font-bold text-white">Courtney Roller Law</h2>
            <p className="mt-3 text-sm text-gray-400">
              Dedicated to guiding you through family law matters with care,
              compassion, and strength.
            </p>
          </div>

          {/* Practice Areas */}
          <div>
            <h3 className="text-lg font-semibold text-white">Practice Areas</h3>
            <ul className="mt-3 space-y-2 text-sm">
              <li>
                <button
                  onClick={() => navigate("/family-law")}
                  className="hover:text-yellow-400"
                >
                  Family Law
                </button>
              </li>
              <li>
                <button
                  onClick={() => navigate("/divorce")}
                  className="hover:text-yellow-400"
                >
                  Divorce
                </button>
              </li>
              <li>
                <button
                  onClick={() => navigate("/child-custody")}
                  className="hover:text-yellow-400"
                >
                  Child Custody
                </button>
              </li>
              <li>
                <button
                  onClick={() => navigate("/mediation")}
                  className="hover:text-yellow-400"
                >
                  Mediation
                </button>
              </li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="text-lg font-semibold text-white">Firm</h3>
            <ul className="mt-3 space-y-2 text-sm">
              <li>
                <button
                  onClick={() => navigate("/about")}
                  className="hover:text-yellow-400"
                >
                  About Us
                </button>
              </li>
              <li>
                <button
                  onClick={() => navigate("/contact")}
                  className="hover:text-yellow-400"
                >
                  Contact
                </button>
              </li>
              <li>
                <button
                  onClick={() => navigate("/privacy-policy")}
                  className="hover:text-yellow-400"
                >
                  Privacy Policy
                </button>
              </li>
              <li>
                <button
                  onClick={() => navigate("/terms")}
                  className="hover:text-yellow-400"
                >
                  Terms of Service
                </button>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-lg font-semibold text-white">Contact</h3>
            <p className="mt-3 text-sm text-gray-400">
              123 Main Street<br />
              Anytown, USA
            </p>
            <a
              href="tel:+17633571659"
              className="mt-4 block text-lg font-bold text-yellow-400 hover:text-yellow-300"
            >
              📞 +1 (763) 357-1659
            </a>
            <a
              href="mailto:info@courtneyrollerlaw.com"
              className="mt-2 block text-sm text-gray-400 hover:text-yellow-400"
            >
              ✉️ info@courtneyrollerlaw.com
            </a>
          </div>
        </div>

        {/* Divider */}
        <div className="my-8 border-t border-blue-900"></div>

        {/* Bottom Section */}
        <div className="flex flex-col md:flex-row justify-between items-center text-sm text-gray-400">
          <p>© {new Date().getFullYear()} Courtney Roller Law. All rights reserved.</p>
          <div className="flex space-x-4 mt-4 md:mt-0">
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Facebook size={18} className="hover:text-yellow-400" />
            </a>
            <a
              href="https://twitter.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Twitter size={18} className="hover:text-yellow-400" />
            </a>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Linkedin size={18} className="hover:text-yellow-400" />
            </a>
            <a href="mailto:info@courtneyrollerlaw.com">
              <Mail size={18} className="hover:text-yellow-400" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
