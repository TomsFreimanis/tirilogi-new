// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";

export default function ParMums() {
  return (
    <motion.section
      className="pt-28 pb-16 px-6 bg-gradient-to-b from-white to-blue-50 min-h-screen"
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -30 }}
      transition={{ duration: 0.6 }}
    >
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-10">
        <img
          src="https://images.unsplash.com/photo-1603791452906-bbca4d3d85d3?auto=format&fit=crop&w=800&q=80"
          alt="Par mums"
          className="rounded-2xl shadow-xl md:w-1/2"
        />
        <div className="md:w-1/2">
          <h2 className="text-4xl font-bold mb-6 text-blue-700">Par mums</h2>
          <p className="text-gray-700 mb-4 leading-relaxed">
            Logu mazgāšanas pakalpojumus <span className="font-semibold text-blue-700">Tirilogi.lv</span> Jums piedāvā par draudzīgām cenām.
            Apkalpojam gan privātpersonas, gan uzņēmumus.
          </p>
          <ul className="grid grid-cols-2 gap-2 text-gray-700 mb-6 list-disc list-inside">
            <li>Dzīvokļiem</li>
            <li>Privātmājām</li>
            <li>Veikaliem</li>
            <li>Ofisiem</li>
            <li>Citiem objektiem</li>
          </ul>
          <p className="text-gray-700 mb-4">
            Savu darbu paveicam kārtīgi, termiņos un arī brīvdienās.
            Logu mazgāšanu uzticot <span className="font-semibold text-blue-700">Tirilogi.lv</span>, Jūs ietaupīsiet laiku un iegūsiet rezultātu.
          </p>
          <div className="bg-white p-6 rounded-xl shadow-md border border-blue-100">
            <h3 className="text-2xl font-semibold mb-4 text-blue-700">
              Kāpēc uzticēt logu mazgāšanu mums?
            </h3>
            <ul className="space-y-2 text-gray-700">
              <li>✅ Nav minimālās maksas</li>
              <li>✅ Plašs reģions</li>
              <li>✅ Kvalitatīvs darbs</li>
              <li>✅ Elastīgs darba laiks (6:00–22:00)</li>
              <li>✅ Strādājam arī brīvdienās</li>
            </ul>
          </div>
        </div>
      </div>
    </motion.section>
  );
}
