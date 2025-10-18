// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";

export default function Pakalpojumi() {
  return (
    <motion.section
      className="pt-28 pb-10 px-6 bg-gradient-to-b from-white via-blue-50/40 to-blue-100/30 min-h-screen"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.5 }}
    >
      <div className="max-w-6xl mx-auto text-center">
        {/* Virsraksts */}
        <h2 className="text-4xl font-bold text-blue-700 mb-6">
          Mūsu pakalpojumi un cenrādis
        </h2>
        <p className="text-gray-600 mb-12 max-w-2xl mx-auto">
          Piedāvājam logu mazgāšanas pakalpojumus dažādu veidu objektiem — no
          privātmājām līdz biroju ēkām. Strādājam ātri, droši un kvalitatīvi.
        </p>

        {/* PAKALPOJUMU KARTIŅAS */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {[
            {
              title: "Dzīvokļu logu mazgāšana",
              price: "No 25 €",
              desc: "Logu un stikla virsmu mazgāšana, palodžu tīrīšana, iekšpuse/ārpuse.",
              icon: "🏠",
            },
            {
              title: "Privātmāju logu mazgāšana",
              price: "No 40 €",
              desc: "Visu mājas logu, vitrīnu un stiklotu terasu tīrīšana ar profesionālu aprīkojumu.",
              icon: "🌿",
            },
            {
              title: "Biroju un veikalu logi",
              price: "No 50 €",
              desc: "Komercobjektu stiklojuma mazgāšana — veikalu skatlogi, ofisi, fasādes.",
              icon: "🏢",
            },
          ].map(({ title, desc, price, icon }, i) => (
            <motion.div
              key={i}
              className="bg-white/80 backdrop-blur-lg p-8 rounded-2xl shadow-md border border-blue-100 hover:shadow-xl transition-transform transform hover:-translate-y-2"
              whileHover={{ scale: 1.03 }}
            >
              <div className="text-5xl mb-4">{icon}</div>
              <h3 className="text-2xl font-semibold mb-2 text-blue-700">
                {title}
              </h3>
              <p className="text-gray-600 mb-4">{desc}</p>
              <div className="text-xl font-bold text-blue-700">{price}</div>
            </motion.div>
          ))}
        </div>

        {/* BONUS BLOKS */}
        <motion.div
          className="mt-16 bg-gradient-to-r from-blue-600 to-cyan-500 text-white rounded-2xl p-10 shadow-lg max-w-4xl mx-auto"
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h3 className="text-2xl font-semibold mb-4">
            Piedāvājam arī individuālus risinājumus
          </h3>
          <p className="text-blue-100 mb-6 max-w-3xl mx-auto">
            Katrs objekts ir unikāls — sazinieties ar mums, lai aprēķinātu
            precīzu cenu. Mēs vienmēr piedāvājam draudzīgus nosacījumus un
            elastīgu grafiku.
          </p>
          <a
            href="/kontakti"
            className="inline-block bg-white text-blue-700 font-semibold px-8 py-3 rounded-xl shadow hover:bg-blue-100 transition"
          >
            Sazināties ar mums
          </a>
        </motion.div>
      </div>
    </motion.section>
  );
}
