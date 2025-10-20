// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";
import WipeEffect from "../components/WipeEffect";
import t2 from "../assets/t2.png";
// import t3 from "../assets/t3.png";

export default function ParMums() {
  return (
    <motion.div
      className="min-h-screen bg-gradient-to-b from-white via-blue-50/40 to-blue-100/30 text-gray-800"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.6 }}
    >
      {/* 🔹 Interaktīvais “Noslauki logu” efekts */}
      <WipeEffect />

      {/* 🔹 Ievads */}
      <section className="max-w-6xl mx-auto px-6 md:px-12 py-24 text-center">
        <motion.h1
          className="text-4xl md:text-6xl font-bold text-blue-800 mb-8"
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.7 }}
        >
          Par mums
        </motion.h1>
        <motion.p
          className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed"
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.7 }}
        >
          Mēs esam profesionāla logu mazgāšanas komanda, kas darbojas visā Latvijā.
          Mūsu misija – padarīt jūsu skatu uz pasauli gaišāku, izmantojot drošas
          tehnoloģijas un rūpīgu pieeju katram projektam.
        </motion.p>
      </section>

      {/* 🔹 Info bloki */}
      <section className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-10 px-6 pb-24">
        {[
          {
            icon: "💧",
            title: "Tīrība ar precizitāti",
            text: "Katrs logs tiek izmazgāts ar augstāko rūpību un kvalitātes kontroli.",
          },
          {
            icon: "⚡",
            title: "Ātra un droša izpilde",
            text: "Mūsu komanda strādā ātri, efektīvi un droši – arī augstumā.",
          },
          {
            icon: "🌿",
            title: "Videi draudzīgi risinājumi",
            text: "Izmantojam tikai sertificētus, videi nekaitīgus tīrīšanas līdzekļus.",
          },
        ].map((item, i) => (
          <motion.div
            key={i}
            className="bg-white/60 backdrop-blur-lg border border-blue-100 shadow-lg rounded-3xl p-8 text-center hover:shadow-2xl transition-all hover:-translate-y-2"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.2, duration: 0.6 }}
            viewport={{ once: true }}
          >
            <div className="text-5xl mb-4 text-blue-600">{item.icon}</div>
            <h3 className="text-xl font-semibold mb-3 text-blue-800">
              {item.title}
            </h3>
            <p className="text-gray-600">{item.text}</p>
          </motion.div>
        ))}
      </section>

      {/* 🔹 Foto sadaļa */}
      <section className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 px-6 py-20 items-center">
        <motion.div
          className="rounded-3xl overflow-hidden shadow-xl"
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
        >
          <img
            src={t2}
            alt="Darbs"
            className="object-cover w-full h-[400px] hover:scale-105 transition-transform"
          />
        </motion.div>
        <motion.div
          className="space-y-6"
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl font-bold text-blue-800">
            Kāpēc tieši Tirilogi?
          </h2>
          <ul className="text-lg text-gray-700 space-y-3">
            <li>✔ Nav minimālās pakalpojuma maksas</li>
            <li>✔ Strādājam visā Latvijā</li>
            <li>✔ Kvalitatīvs, drošs un ātrs serviss</li>
            <li>✔ Elastīgs darba laiks (6:00–22:00)</li>
            <li>✔ Strādājam arī brīvdienās</li>
          </ul>
        </motion.div>
      </section>

      {/* 🔹 CTA */}
      <section className="relative flex flex-col items-center justify-center text-center py-24 bg-gradient-to-b from-blue-50 to-white overflow-hidden">
        <motion.div
          className="absolute inset-0 bg-[radial-gradient(circle_at_center,_rgba(173,216,230,0.25),_transparent_70%)] blur-3xl opacity-60"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 0.6 }}
          transition={{ duration: 1.2 }}
        />

        <div className="relative z-10 px-6 max-w-3xl">
          <motion.h2
            className="text-4xl md:text-5xl font-bold text-blue-800 mb-4"
            initial={{ y: 20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6 }}
          >
            Tīri logi. Skaidrs skats.
          </motion.h2>

          <motion.p
            className="text-lg md:text-xl text-gray-600 mb-10"
            initial={{ y: 20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.6 }}
          >
            Uztici savu skatu profesionāļiem — mēs padarīsim logus nevainojami
            tīrus, lai Jūsu pasaule izskatītos spožāka.
          </motion.p>

          <motion.a
            href="/kontakti"
            className="inline-block bg-blue-600 text-white font-semibold px-10 py-4 rounded-full shadow-md hover:shadow-blue-300/50 hover:bg-blue-700 transition-all duration-300"
            whileHover={{ scale: 1.07 }}
          >
            Sazinieties ar mums
          </motion.a>

          <motion.div
            className="mt-12 w-24 h-[3px] bg-gradient-to-r from-blue-600 to-cyan-400 mx-auto rounded-full"
            initial={{ width: 0, opacity: 0 }}
            whileInView={{ width: "6rem", opacity: 1 }}
            transition={{ duration: 0.8 }}
          />
        </div>
      </section>
    </motion.div>
  );
}
