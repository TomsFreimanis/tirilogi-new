// eslint-disable-next-line no-unused-vars
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import img1 from "../assets/1.jpg";
import img2 from "../assets/2.jpg";
import img3 from "../assets/3.jpg";
import img4 from "../assets/4.jpg";
import img5 from "../assets/5.jpg";
import img6 from "../assets/6.jpg";
import img7 from "../assets/7.jpg";
import img8 from "../assets/8.jpg";
import img9 from "../assets/9.jpg";

export default function Home() {
  const gallery = [img1, img2, img3, img4, img5, img6, img7, img8, img9];
  const [selectedImg, setSelectedImg] = useState(null);

  return (
    <motion.div
      className="min-h-screen bg-white text-gray-800 overflow-hidden"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 1 }}
    >
      {/* 🔹 HERO SEKCIJA */}
      <section className="relative h-screen flex flex-col items-center justify-center text-center text-white overflow-hidden">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="absolute inset-0 w-full h-full object-cover brightness-75"
        >
          <source src="/logivid.mp4" type="video/mp4" />
        </video>

        <div className="relative z-10 px-6">
          <h1 className="text-4xl md:text-6xl font-bold mb-4 drop-shadow-lg">
            Tīri logi, tīrs skats
          </h1>
          <p className="text-lg md:text-xl mb-8 text-blue-100 max-w-2xl mx-auto">
            Logu mazgāšana mājām, birojiem un uzņēmumiem visā Latvijā — ar
            kvalitāti un precizitāti.
          </p>
          <a
            href="/par-mums"
            className="inline-block bg-blue-600 hover:bg-blue-700 text-white font-semibold px-6 py-3 md:px-8 md:py-4 rounded-lg shadow-lg transition"
          >
            Uzzināt vairāk
          </a>
        </div>

        <div className="absolute inset-0 bg-black/40"></div>
      </section>

      {/* 🔹 3 IEMESLI */}
      <section className="py-20 bg-white text-center">
        <h2 className="text-3xl font-bold text-blue-700 mb-12">
          Kāpēc izvēlēties mūs?
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 max-w-6xl mx-auto px-6">
          {[
            {
              icon: "🧽",
              title: "Profesionāla pieeja",
              text: "Izmantojam tikai drošus un efektīvus līdzekļus, kas garantē izcilu rezultātu.",
            },
            {
              icon: "⏱️",
              title: "Ātra izpilde",
              text: "Darbus paveicam laikā – arī brīvdienās un vakaros, ja nepieciešams.",
            },
            {
              icon: "💧",
              title: "Tīrība bez kompromisiem",
              text: "Katrs logs tiek izmazgāts ar rūpību – kā savās mājās.",
            },
          ].map((item, i) => (
            <motion.div
              key={i}
              className="bg-gradient-to-b from-blue-50 to-white shadow-lg rounded-2xl p-8 border border-blue-100 hover:shadow-2xl transition-transform hover:-translate-y-2"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.2, duration: 0.6 }}
            >
              <div className="text-5xl mb-4">{item.icon}</div>
              <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
              <p className="text-gray-600">{item.text}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* 🔹 GALERIJA */}
      <section className="py-20 bg-gradient-to-b from-blue-50 to-blue-100">
        <h2 className="text-3xl font-bold text-center text-blue-700 mb-12">
          Mūsu darbi
        </h2>
        <div className="max-w-6xl mx-auto grid grid-cols-2 md:grid-cols-3 gap-6 px-6">
          {gallery.map((img, i) => (
            <motion.img
              key={i}
              src={img}
              alt={`darbs-${i}`}
              className="w-full h-64 object-cover rounded-2xl shadow-lg hover:scale-105 transition-transform duration-300 cursor-pointer"
              onClick={() => setSelectedImg(img)}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: i * 0.1 }}
            />
          ))}
        </div>
      </section>

      {/* 🔹 LIGHTBOX */}
      <AnimatePresence>
        {selectedImg && (
          <motion.div
            className="fixed inset-0 z-[999] bg-black/80 flex items-center justify-center backdrop-blur-sm"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedImg(null)}
          >
            <motion.img
              src={selectedImg}
              alt="Full view"
              className="max-w-[90%] max-h-[85%] rounded-2xl shadow-2xl"
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              transition={{ duration: 0.4 }}
            />
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}
