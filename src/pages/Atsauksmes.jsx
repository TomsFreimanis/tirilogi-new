// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";

export default function Atsauksmes() {
  const reviews = [
    {
      name: "Andris, Rīga",
      text: "Paldies Tirilogi komandai! Logi mirdz kā jauni. Serviss ātrs, laipns un ļoti profesionāls.",
      stars: 5,
    },
    {
      name: "Ilze, Sigulda",
      text: "Ļoti atsaucīgi cilvēki – atbrauca arī svētdienā, kad bija steidzami vajadzīgs! Iesaku visiem!",
      stars: 5,
    },
    {
      name: "Gints, Jelgava",
      text: "Darbs paveikts kvalitatīvi un precīzi laikā. Noteikti izmantosim pakalpojumu arī turpmāk.",
      stars: 5,
    },
    {
      name: "Laura, Cēsis",
      text: "Pirmo reizi izmantoju logu mazgāšanu mājās — esmu ļoti apmierināta! Lielisks serviss.",
      stars: 4,
    },
  ];

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

      <div className="max-w-6xl mx-auto text-center relative z-10">
        <motion.h2
          className="text-4xl font-bold text-blue-800 mb-6"
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.7 }}
        >
          Atsauksmes
        </motion.h2>

        <motion.p
          className="text-gray-700 mb-12 max-w-2xl mx-auto text-lg"
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.7 }}
        >
          Paldies mūsu klientiem par uzticību! Mēs lepojamies ar katru veiksmīgu sadarbību.
        </motion.p>

        {/* 🔹 Atsauksmju kartītes */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
          {reviews.map((r, i) => (
            <motion.div
              key={i}
              className="bg-white/60 backdrop-blur-md border border-blue-100 p-8 rounded-3xl shadow-lg hover:shadow-2xl transition-all hover:-translate-y-2"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1, duration: 0.5 }}
              viewport={{ once: true }}
            >
              <div className="text-blue-500 text-5xl mb-4 leading-none">“</div>
              <p className="text-gray-700 italic mb-6">{r.text}</p>
              <h4 className="font-semibold text-blue-800">{r.name}</h4>
              <div className="flex justify-center mt-2 text-yellow-400 text-lg">
                {"★".repeat(r.stars)}{"☆".repeat(5 - r.stars)}
              </div>
            </motion.div>
          ))}
        </div>

        {/* 🔹 CTA sadaļa */}
        <motion.div
          className="mt-20 bg-gradient-to-r from-blue-600 to-cyan-500 text-white rounded-3xl p-10 shadow-xl max-w-4xl mx-auto"
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h3 className="text-2xl font-semibold mb-4">
            Vai arī Tu vēlies padalīties ar pieredzi?
          </h3>
          <p className="text-blue-50 mb-6 max-w-2xl mx-auto">
            Raksti mums uz{" "}
            <a href="mailto:info@tirilogi.lv" className="underline">
              info@tirilogi.lv
            </a>{" "}
            vai atstāj atsauksmi mūsu Facebook lapā!
          </p>
          <a
            href="https://www.facebook.com/"
            target="_blank"
            rel="noreferrer"
            className="inline-block bg-white text-blue-700 font-semibold px-8 py-3 rounded-xl shadow-md hover:bg-blue-100 transition"
          >
            Atstāt atsauksmi Facebook
          </a>
        </motion.div>
      </div>
    </motion.div>
  );
}
