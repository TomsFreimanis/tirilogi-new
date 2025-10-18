// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";

export default function Kontakti() {
  return (
    <motion.div
      className="relative min-h-screen bg-gradient-to-b from-white via-blue-50/40 to-blue-100/30 text-gray-800 overflow-hidden pt-28 pb-20 px-6"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.6 }}
    >
      {/* 🔹 Dekoratīvie blur apļi fonā */}
      <div className="absolute top-20 left-20 w-72 h-72 bg-blue-200/30 blur-[120px] rounded-full -z-10"></div>
      <div className="absolute bottom-40 right-20 w-96 h-96 bg-cyan-200/30 blur-[140px] rounded-full -z-10"></div>

      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-start relative z-10">
        {/* 🔹 Kontaktinformācija */}
        <motion.div
          initial={{ y: 30, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl font-bold text-blue-800 mb-6">Kontakti</h2>
          <p className="text-lg text-gray-700 mb-6">
            Sazinies ar mums jebkurā dienā — strādājam gan darbadienās, gan brīvdienās.
          </p>

          <div className="space-y-3 text-gray-700 mb-8">
            <p>
              <strong>E-pasts:</strong>{" "}
              <a
                href="mailto:info@tirilogi.lv"
                className="text-blue-700 hover:underline"
              >
                info@tirilogi.lv
              </a>
            </p>
            <p>
              <strong>Tālrunis:</strong>{" "}
              <a
                href="tel:+37127744509"
                className="text-blue-700 hover:underline"
              >
                27744509
              </a>
            </p>
            <p>
              <strong>Mājaslapa:</strong>{" "}
              <a
                href="https://www.tirilogi.lv"
                className="text-blue-700 hover:underline"
                target="_blank"
                rel="noreferrer"
              >
                www.tirilogi.lv
              </a>
            </p>
            <p>
              <strong>Darbadienas:</strong> 6:00–22:00
            </p>
            <p>
              <strong>Brīvdienas:</strong> 8:00–20:00
            </p>
          </div>

          {/* 🔹 Facebook poga */}
          <a
            href="https://www.facebook.com/"
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-600 to-cyan-500 hover:from-blue-700 hover:to-cyan-600 text-white px-6 py-3 rounded-xl shadow-md transition-transform hover:scale-105"
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
        </motion.div>

        {/* 🔹 Pieteikuma forma */}
        <motion.div
          className="bg-white/70 backdrop-blur-md rounded-3xl shadow-lg p-8 border border-blue-100 hover:shadow-2xl transition-all"
          initial={{ y: 30, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h3 className="text-2xl font-semibold text-blue-800 mb-4">
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
              <label className="block text-gray-700 mb-1">
                Papildu info (pēc izvēles)
              </label>
              <textarea
                rows="4"
                placeholder="Apraksti savu objektu vai vēlamo pakalpojumu"
                className="w-full border border-gray-300 rounded-lg p-3 focus:ring-2 focus:ring-blue-500 focus:outline-none resize-none"
              ></textarea>
            </div>
            <button
              type="submit"
              className="bg-gradient-to-r from-blue-600 to-cyan-500 text-white font-semibold py-3 rounded-lg hover:from-blue-700 hover:to-cyan-600 transition-all shadow-md hover:shadow-xl"
            >
              Nosūtīt pieteikumu
            </button>
          </form>
        </motion.div>
      </div>

      {/* 🔹 Google Maps */}
      <motion.div
        className="mt-20 rounded-3xl overflow-hidden shadow-lg border border-blue-100 max-w-6xl mx-auto"
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.7 }}
        viewport={{ once: true }}
      >
        <iframe
          title="Google Maps - Tirilogi"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d174738.87464452988!2d23.9813441!3d56.9713969!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x46eece1a4dfda1c1%3A0x400cfcd68f2fe30!2sR%C4%ABga!5e0!3m2!1slv!2slv!4v1699999999999!5m2!1slv!2slv"
          width="100%"
          height="400"
          style={{ border: 0 }}
          allowFullScreen=""
          loading="lazy"
        ></iframe>
      </motion.div>
    </motion.div>
  );
}
