// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";

export default function Pakalpojumi() {
  return (
    <motion.div
      className="relative min-h-screen bg-gradient-to-b from-white via-blue-50/40 to-blue-100/30 text-gray-800 overflow-hidden pt-28 pb-20 px-6"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.6 }}
    >
      {/* 🔹 Dekoratīvs blur efekts fonā */}
      <div className="absolute top-20 left-20 w-72 h-72 bg-blue-200/30 blur-[120px] rounded-full -z-10"></div>
      <div className="absolute bottom-40 right-20 w-96 h-96 bg-cyan-200/30 blur-[140px] rounded-full -z-10"></div>

      <div className="max-w-6xl mx-auto text-center relative z-10">
        <motion.h2
          className="text-4xl font-bold text-blue-800 mb-6"
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.7 }}
        >
          Mūsu pakalpojumi un cenrādis
        </motion.h2>

        <motion.p
          className="text-gray-700 mb-12 max-w-2xl mx-auto text-lg"
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.7 }}
        >
          Piedāvājam logu mazgāšanas pakalpojumus dažādu veidu objektiem —
          no privātmājām līdz biroju ēkām. Strādājam ātri, droši un kvalitatīvi.
        </motion.p>

        {/* 🔹 PAKALPOJUMI */}
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
              className="bg-white/60 backdrop-blur-md border border-blue-100 p-8 rounded-3xl shadow-lg hover:shadow-2xl transition-all hover:-translate-y-2"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.2, duration: 0.6 }}
              viewport={{ once: true }}
            >
              <div className="text-5xl mb-4">{icon}</div>
              <h3 className="text-2xl font-semibold mb-2 text-blue-800">
                {title}
              </h3>
              <p className="text-gray-600 mb-4">{desc}</p>
              <div className="text-xl font-bold text-blue-700">{price}</div>
            </motion.div>
          ))}
        </div>

        {/* 🔹 BONUS INFO */}
        <motion.div
          className="mt-20 bg-gradient-to-r from-blue-600 to-cyan-500 text-white rounded-3xl p-10 shadow-xl max-w-4xl mx-auto"
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h3 className="text-2xl font-semibold mb-4">
            Piedāvājam arī individuālus risinājumus
          </h3>
          <p className="text-blue-50 mb-6 max-w-3xl mx-auto">
            Katrs objekts ir unikāls — sazinieties ar mums, lai aprēķinātu precīzu cenu.
            Mēs vienmēr piedāvājam draudzīgus nosacījumus un elastīgu grafiku.
          </p>
          <a
            href="/kontakti"
            className="inline-block bg-white text-blue-700 font-semibold px-8 py-3 rounded-xl shadow-md hover:bg-blue-100 transition"
          >
            Sazināties ar mums
          </a>
        </motion.div>
      </div>
    </motion.div>
  );
}
