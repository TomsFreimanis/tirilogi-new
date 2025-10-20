import { useEffect, useState } from "react";
import { Facebook, Instagram, ArrowUp } from "lucide-react"; // 🧩 nodrošina modernās ikonas

export default function Footer() {
  const [showScroll, setShowScroll] = useState(false);

  // Parāda "uz augšu" pogu, kad lapu noritina uz leju
  useEffect(() => {
    const handleScroll = () => {
      setShowScroll(window.scrollY > 300);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <footer className="relative mt-0 bg-gradient-to-b from-blue-100 via-blue-200/60 to-blue-700 text-white pt-12 pb-8 overflow-hidden backdrop-blur-md border-t border-white/10 shadow-inner">
      <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-8">

        {/* Kreisā puse */}
        <div className="text-center md:text-left">
          <h3 className="text-2xl font-bold text-blue-900 drop-shadow-sm">
            Tirilogi.lv
          </h3>
          <p className="text-blue-800 mt-2 font-medium">
            Tīri logi – mūsu prioritāte.
          </p>
        </div>

        {/* Vidējā daļa – sociālās ikonas */}
       {/* Vidējā daļa – sociālās ikonas */}
<div className="flex gap-6">
  <a
    href="https://www.facebook.com/"
    target="_blank"
    rel="noopener noreferrer"
    className="relative p-3 rounded-full bg-gradient-to-b from-blue-600 to-blue-800 text-white shadow-lg transition-all duration-300 hover:scale-110 hover:shadow-blue-400/40"
  >
    <Facebook className="w-5 h-5" />
    {/* neliels gaismas halo */}
    <span className="absolute inset-0 rounded-full bg-blue-300/20 blur-md opacity-0 hover:opacity-80 transition"></span>
  </a>
  <a
    href="https://www.instagram.com/"
    target="_blank"
    rel="noopener noreferrer"
    className="relative p-3 rounded-full bg-gradient-to-b from-pink-500 via-red-500 to-yellow-400 text-white shadow-lg transition-all duration-300 hover:scale-110 hover:shadow-pink-400/40"
  >
    <Instagram className="w-5 h-5" />
    <span className="absolute inset-0 rounded-full bg-pink-300/20 blur-md opacity-0 hover:opacity-80 transition"></span>
  </a>
</div>


        {/* Labā puse – kontakti */}
        <div className="text-center md:text-right space-y-1">
          <p>
            <strong className="text-blue-950">E-pasts:</strong>{" "}
            <a
              href="mailto:info@tirilogi.lv"
              className="text-blue-900 hover:text-blue-950 font-medium transition"
            >
              info@tirilogi.lv
            </a>
          </p>
          <p>
            <strong className="text-blue-950">Tālrunis:</strong>{" "}
            <a
              href="tel:+37127744509"
              className="text-blue-900 hover:text-blue-950 font-medium transition"
            >
              27744509
            </a>
          </p>
        </div>
      </div>

      {/* Apakšējā līnija */}
      <div className="mt-10 border-t border-white/20 pt-4 text-center text-sm text-blue-100">
        © {new Date().getFullYear()}{" "}
        <span className="text-blue-50 font-semibold">Tirilogi</span>. Visas tiesības aizsargātas.
      </div>

      {/* "Scroll uz augšu" poga */}
      {showScroll && (
        <button
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          className="fixed bottom-6 right-6 bg-blue-600 hover:bg-blue-700 text-white p-3 rounded-full shadow-lg transition-all animate-fade-in"
          aria-label="Atpakaļ uz augšu"
        >
          <ArrowUp className="w-5 h-5" />
        </button>
      )}

      {/* Gaismas efekts apakšā */}
      <div className="absolute bottom-0 left-0 w-full h-2 bg-gradient-to-r from-transparent via-blue-400/50 to-transparent opacity-40"></div>
    </footer>
  );
}
