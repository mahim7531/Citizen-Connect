import {
  FaFacebook,
  FaTwitter,
  FaInstagram,
  FaLinkedin,
  FaGithub,
} from "react-icons/fa";

import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-slate-900 text-gray-300 mt-16">
      <div className="max-w-7xl mx-auto px-6 py-12 grid gap-10 md:grid-cols-2 lg:grid-cols-4">

        {/* Logo & Description */}
        <div>
          <h2 className="text-2xl font-bold text-white">
            Citizen Connect
          </h2>

          <p className="mt-4 text-sm leading-6">
            AI-powered smart civic issue reporting platform that
            helps citizens report problems quickly and enables
            authorities to resolve them efficiently.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-lg font-semibold text-white mb-4">
            Quick Links
          </h3>

          <ul className="space-y-2">
            <li>
              <Link to="/" className="hover:text-blue-400">
                Home
              </Link>
            </li>

            <li>
              <Link to="/report" className="hover:text-blue-400">
                Report Issue
              </Link>
            </li>

            <li>
              <Link to="/map" className="hover:text-blue-400">
                Live Map
              </Link>
            </li>

            <li>
              <Link to="/dashboard" className="hover:text-blue-400">
                Dashboard
              </Link>
            </li>

            <li>
              <Link to="/about" className="hover:text-blue-400">
                About
              </Link>
            </li>
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h3 className="text-lg font-semibold text-white mb-4">
            Contact
          </h3>

          <p>Email: support@citizenconnect.com</p>

          <p className="mt-2">
            Phone: +880 1234-567890
          </p>

          <p className="mt-2">
            Dhaka, Bangladesh
          </p>
        </div>

        {/* Social */}
        <div>
          <h3 className="text-lg font-semibold text-white mb-4">
            Follow Us
          </h3>

          <div className="flex gap-4 text-2xl">

            <a href="#">
              <FaFacebook className="hover:text-blue-500" />
            </a>

            <a href="#">
              <FaTwitter className="hover:text-sky-400" />
            </a>

            <a href="#">
              <FaInstagram className="hover:text-pink-500" />
            </a>

            <a href="#">
              <FaLinkedin className="hover:text-blue-400" />
            </a>

            <a href="#">
              <FaGithub className="hover:text-white" />
            </a>

          </div>
        </div>

      </div>

      {/* Bottom Footer */}

      <div className="border-t border-slate-700 py-5 text-center text-sm text-gray-400">
        © {new Date().getFullYear()} Citizen Connect Bangladesh.
        All Rights Reserved.
      </div>

    </footer>
  );
};

export default Footer;