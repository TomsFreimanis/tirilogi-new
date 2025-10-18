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
    <motion.section
      className="pt-28 pb-20 px-6 bg-gray-50 min-h-screen"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.5 }}
    >
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-4xl font-bold text-blue-700 mb-6">Atsauksmes</h2>
        <p className="text-gray-600 mb-12 max-w-2xl mx-auto">
          Paldies mūsu klientiem par uzticību! Mēs lepojamies ar katru veiksmīgu sadarbību.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
          {reviews.map((r, i) => (
            <motion.div
              key={i}
              className="bg-white rounded-2xl shadow-lg p-8 border border-blue-100 hover:shadow-xl transition transform hover:-translate-y-2"
              whileHover={{ scale: 1.03 }}
            >
              <div className="text-blue-500 text-5xl mb-4">“</div>
              <p className="text-gray-700 italic mb-6">{r.text}</p>
              <h4 className="font-semibold text-gray-900">{r.name}</h4>
              <div className="flex justify-center mt-2 text-yellow-400">
                {"★".repeat(r.stars)}{"☆".repeat(5 - r.stars)}
              </div>
            </motion.div>
          ))}
        </div>

        <div className="mt-16 bg-blue-600 text-white rounded-2xl p-10 shadow-lg max-w-3xl mx-auto">
          <h3 className="text-2xl font-semibold mb-4">
            Vai arī Tu vēlies padalīties ar pieredzi?
          </h3>
          <p className="text-blue-100 mb-6">
            Raksti mums uz <a href="mailto:info@tirilogi.lv" className="underline">info@tirilogi.lv </a> 
             vai atstāj atsauksmi mūsu Facebook lapā!
          </p>
          <a
            href="https://www.facebook.com/"
            target="_blank"
            className="inline-block bg-white text-blue-700 font-semibold px-8 py-3 rounded-xl shadow hover:bg-blue-100 transition"
          >
            Atstāt atsauksmi Facebook
          </a>
        </div>
      </div>
    </motion.section>
  );
}
