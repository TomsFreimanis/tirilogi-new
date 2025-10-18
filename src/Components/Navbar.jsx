import { Link } from "react-router-dom";
import { useState } from "react";
import logo from "../assets/logo.png";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const links = [
    { path: "/", label: "Sākums" },
    { path: "/par-mums", label: "Par mums" },
    { path: "/pakalpojumi", label: "Pakalpojumi" },
    { path: "/atsauksmes", label: "Atsauksmes" },
    { path: "/kontakti", label: "Kontakti" },
  ];

  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-white/30 backdrop-blur-lg text-gray-800 shadow-md">
      <div className="max-w-7xl mx-auto flex justify-between items-center px-6 py-3">
        {/* Logo */}
        <Link to="/" className="flex items-center gap-2">
          <img src={logo} alt="Tirilogi logo" className="w-10 h-10" />
          <span className="font-semibold text-xl text-blue-700">Tirilogi</span>
        </Link>

        {/* Desktop navigācija */}
        <ul className="hidden md:flex gap-8 font-medium">
          {links.map(({ path, label }) => (
            <li key={path}>
              <Link
                to={path}
                className="hover:text-blue-600 transition-colors duration-300"
              >
                {label}
              </Link>
            </li>
          ))}
        </ul>

        {/* Mobilā izvēlne */}
        <button
          className="md:hidden text-3xl text-blue-700"
          onClick={() => setIsOpen(!isOpen)}
        >
          ☰
        </button>
      </div>

      {/* Izkrītošā izvēlne uz mobilā */}
      {isOpen && (
        <div className="md:hidden bg-white/80 backdrop-blur-lg text-gray-700 px-6 py-4 flex flex-col gap-4 shadow-lg">
          {links.map(({ path, label }) => (
            <Link
              key={path}
              to={path}
              onClick={() => setIsOpen(false)}
              className="text-lg font-medium hover:text-blue-600"
            >
              {label}
            </Link>
          ))}
        </div>
      )}
    </nav>
  );
}
