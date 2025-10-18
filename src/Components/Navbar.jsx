import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import logo from "../assets/logo.png";
import { Menu, X } from "lucide-react"; // Lucide ikonas (automātiski pieejamas)

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const links = [
    { name: "Sākums", path: "/" },
    { name: "Par mums", path: "/par-mums" },
    { name: "Pakalpojumi", path: "/pakalpojumi" },
    { name: "Atsauksmes", path: "/atsauksmes" },
    { name: "Kontakti", path: "/kontakti" },
  ];

  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-white/60 backdrop-blur-lg border-b border-blue-100 shadow-sm">
      <div className="max-w-7xl mx-auto flex justify-between items-center px-6 py-3 md:py-4">
        {/* 🔹 Logo */}
        <Link to="/" className="flex items-center gap-3">
          <img src={logo} alt="Tirilogi" className="h-10 w-auto" />
          <span className="font-bold text-xl text-blue-700">Tirilogi</span>
        </Link>

        {/* 🔹 Desktop links */}
        <div className="hidden md:flex gap-8">
          {links.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              className={`relative text-gray-700 font-medium transition-colors hover:text-blue-600 ${
                location.pathname === link.path ? "text-blue-700" : ""
              }`}
            >
              {link.name}
              {location.pathname === link.path && (
                <motion.div
                  layoutId="underline"
                  className="absolute -bottom-1 left-0 w-full h-[2px] bg-blue-600 rounded-full"
                />
              )}
            </Link>
          ))}
        </div>

        {/* 🔹 Mobile button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden text-blue-700 focus:outline-none"
        >
          {isOpen ? <X size={26} /> : <Menu size={26} />}
        </button>
      </div>

      {/* 🔹 Mobile menu */}
      <AnimatePresence>
        {isOpen && (
          <>
            {/* Overlay */}
            <motion.div
              className="fixed inset-0 bg-black/30 backdrop-blur-sm md:hidden z-40"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsOpen(false)}
            />

            {/* Slide-in panel */}
            <motion.div
              className="fixed top-0 right-0 w-3/4 h-full bg-white/90 backdrop-blur-lg shadow-2xl md:hidden z-50 flex flex-col items-center justify-center gap-8 p-10 border-l border-blue-100"
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", stiffness: 80, damping: 15 }}
            >
              {links.map((link) => (
                <motion.div
                  key={link.path}
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.2 }}
                >
                  <Link
                    to={link.path}
                    className={`text-2xl font-semibold ${
                      location.pathname === link.path
                        ? "text-blue-700"
                        : "text-gray-700"
                    }`}
                    onClick={() => setIsOpen(false)}
                  >
                    {link.name}
                  </Link>
                </motion.div>
              ))}

              <motion.a
                href="/kontakti"
                className="mt-8 bg-blue-600 hover:bg-blue-700 text-white font-semibold px-8 py-3 rounded-full shadow-lg transition-all"
                whileHover={{ scale: 1.08 }}
              >
                Sazināties
              </motion.a>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </nav>
  );
}
