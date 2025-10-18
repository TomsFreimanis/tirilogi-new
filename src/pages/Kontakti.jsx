// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";

export default function Kontakti() {
  return (
    <motion.section
      className="pt-28 pb-20 px-6 bg-gradient-to-b from-white to-blue-50 min-h-screen"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.5 }}
    >
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
        
        {/* Kontaktinformācija */}
        <div>
          <h2 className="text-4xl font-bold text-blue-700 mb-6">Kontakti</h2>
          <p className="text-lg text-gray-700 mb-6">
            Sazinies ar mums jebkurā dienā — strādājam gan darbadienās, gan brīvdienās.
          </p>

          <div className="space-y-3 text-gray-700 mb-8">
            <p><strong>E-pasts:</strong> <a href="mailto:info@tirilogi.lv" className="text-blue-700 hover:underline">info@tirilogi.lv</a></p>
            <p><strong>Tālrunis:</strong> <a href="tel:+37127744509" className="text-blue-700 hover:underline">27744509</a></p>
            <p><strong>Mājaslapa:</strong> <a href="https://www.tirilogi.lv" className="text-blue-700 hover:underline" target="_blank">www.tirilogi.lv</a></p>
            <p><strong>Darbadienas:</strong> 6:00–22:00</p>
            <p><strong>Brīvdienas:</strong> 8:00–20:00</p>
          </div>

          {/* Facebook poga */}
          <a
            href="https://www.facebook.com/"
            target="_blank"
            className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-xl shadow-md transition"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              viewBox="0 0 24 24"
              className="w-6 h-6"
            >
              <path d="M22.675 0h-21.35C.597 0 0 .597 0 1.326v21.348C0 23.403.597 24 1.326 
                24h11.495v-9.294H9.691v-3.622h3.13V8.413c0-3.1 1.893-4.788 4.659-4.788 
                1.325 0 2.463.099 2.795.143v3.24l-1.918.001c-1.504 0-1.795.716-1.795 
                1.763v2.313h3.587l-.467 3.622h-3.12V24h6.116C23.403 24 24 
                23.403 24 22.674V1.326C24 .597 23.403 0 22.675 0z" />
            </svg>
            Apskati mūs Facebook!
          </a>
        </div>

        {/* Pieteikuma forma */}
        <div className="bg-white rounded-2xl shadow-lg p-8 border border-blue-100">
          <h3 className="text-2xl font-semibold text-blue-700 mb-4">
            Pieteikt logu mazgāšanu!
          </h3>
          <form className="flex flex-col gap-4">
            <div>
              <label className="block text-gray-700 mb-1">E-pasts</label>
              <input
                type="email"
                placeholder="Tavs e-pasts"
                className="w-full border border-gray-300 rounded-lg p-3 focus:ring-2 focus:ring-blue-500 focus:outline-none"
              />
            </div>
            <div>
              <label className="block text-gray-700 mb-1">Telefons</label>
              <input
                type="tel"
                placeholder="Tavs tālrunis"
                className="w-full border border-gray-300 rounded-lg p-3 focus:ring-2 focus:ring-blue-500 focus:outline-none"
              />
            </div>
            <div>
              <label className="block text-gray-700 mb-1">Papildu info (pēc izvēles)</label>
              <textarea
                rows="4"
                placeholder="Apraksti savu objektu vai vēlamo pakalpojumu"
                className="w-full border border-gray-300 rounded-lg p-3 focus:ring-2 focus:ring-blue-500 focus:outline-none resize-none"
              ></textarea>
            </div>
            <button
              type="submit"
              className="bg-blue-600 text-white font-semibold py-3 rounded-lg hover:bg-blue-700 transition"
            >
              Nosūtīt pieteikumu
            </button>
          </form>
        </div>
      </div>

      {/* Google Maps (fona sekcija) */}
      <div className="mt-16 rounded-2xl overflow-hidden shadow-lg border border-blue-100">
        <iframe
          title="Google Maps - Tirilogi"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d174738.87464452988!2d23.9813441!3d56.9713969!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x46eece1a4dfda1c1%3A0x400cfcd68f2fe30!2sR%C4%ABga!5e0!3m2!1slv!2slv!4v1699999999999!5m2!1slv!2slv"
          width="100%"
          height="400"
          style={{ border: 0 }}
          allowFullScreen=""
          loading="lazy"
        ></iframe>
      </div>
    </motion.section>
  );
}
