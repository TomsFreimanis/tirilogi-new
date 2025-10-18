export default function Footer() {
  return (
    <footer className="relative mt-20">
      {/* Gradienta fons */}
      <div className="absolute inset-0 bg-gradient-to-tr from-blue-700 via-blue-600 to-indigo-500 blur-[2px]"></div>

      {/* Puscaurspīdīgs stikla laukums */}
      <div className="relative backdrop-blur-md bg-white/10 text-white py-12 border-t border-white/20">
        <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-6 text-center md:text-left">
          
          {/* Kreisā puse */}
          <div>
            <h3 className="text-3xl font-semibold mb-2 drop-shadow-md">Tirilogi.lv</h3>
            <p className="text-blue-100">Tīri logi – mūsu prioritāte.</p>
          </div>

          {/* Labā puse */}
          <div className="text-blue-100">
            <p className="mb-1">
              <strong>E-pasts:</strong> <a href="mailto:info@tirilogi.lv" className="hover:text-white">info@tirilogi.lv</a>
            </p>
            <p className="mb-1">
              <strong>Tālrunis:</strong> <a href="tel:+37127744509" className="hover:text-white">27744509</a>
            </p>
            <p className="mt-3 text-sm text-blue-200">
              © 2025 Tirilogi. Visas tiesības aizsargātas.
            </p>
          </div>
        </div>

        {/* Dekoratīvā līnija apakšā */}
        <div className="absolute bottom-0 left-0 w-full h-[3px] bg-gradient-to-r from-cyan-400 via-blue-400 to-indigo-500"></div>
      </div>
    </footer>
  );
}
