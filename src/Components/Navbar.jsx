
import { Link, useLocation } from "react-router-dom";
import logo from "../assets/logo.png";

export default function Navbar() {
  const location = useLocation();
  const isHome = location.pathname === "/";

  const links = [
    { path: "/", label: "Sākums" },
    { path: "/par-mums", label: "Par mums" },
    { path: "/pakalpojumi", label: "Pakalpojumi" },
    { path: "/atsauksmes", label: "Atsauksmes" },
    { path: "/kontakti", label: "Kontakti" },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${
        isHome
          ? "bg-white/30 backdrop-blur-lg text-gray-800 shadow-sm"
          : "bg-white/80 backdrop-blur-lg text-gray-800 shadow-md"
      }`}
    >
      <div className="max-w-7xl mx-auto flex justify-between items-center py-4 px-6">
        {/* 🔹 Logo */}
        <div className="flex items-center gap-3">
          <img
            src={logo}
            alt="Tirilogi logo"
            className="w-10 h-10 object-contain drop-shadow-md"
          />
          <span className="text-xl font-semibold text-blue-700">Tirilogi</span>
        </div>

        {/* 🔹 Navigācijas saites */}
        <ul className="hidden md:flex gap-8 font-medium">
          {links.map(({ path, label }) => (
            <li key={path}>
              <Link
                to={path}
                className={`relative transition-all duration-300 hover:text-blue-600 ${
                  location.pathname === path
                    ? "text-blue-700 font-semibold"
                    : "text-gray-700"
                }`}
              >
                {label}
                {location.pathname === path && (
                  <span className="absolute left-0 -bottom-1 w-full h-[2px] bg-blue-600 rounded-full animate-[fadeIn_0.3s_ease-in-out]" />
                )}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
}
