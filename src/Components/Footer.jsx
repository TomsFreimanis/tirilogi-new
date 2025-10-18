export default function Footer() {
  return (
    <footer className="relative mt-0 bg-gradient-to-b from-blue-100 via-blue-300/50 to-blue-700 text-white py-12">
      <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-8">
        
        {/* Kreisā puse */}
        <div className="text-center md:text-left">
          <h3 className="text-2xl font-bold text-blue-900 drop-shadow-sm">Tirilogi.lv</h3>
          <p className="text-blue-800 mt-2 font-medium">
            Tīri logi – mūsu prioritāte.
          </p>
        </div>

        {/* Labā puse */}
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
      <div className="mt-10 border-t border-white/30 pt-4 text-center text-sm text-blue-200">
        © {new Date().getFullYear()}{" "}
        <span className="text-blue-50 font-semibold">Tirilogi</span>. Visas tiesības aizsargātas.
      </div>

      {/* Gaismas akcenti */}
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-blue-200/50 to-transparent opacity-40"></div>
      <div className="absolute bottom-0 left-0 w-full h-2 bg-gradient-to-r from-transparent via-blue-400/60 to-transparent opacity-40"></div>
    </footer>
  );
}
