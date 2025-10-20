// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";
import { useState, useEffect } from "react";

export default function Atsauksmes() {
  const [reviews, setReviews] = useState(() => {
    const saved = localStorage.getItem("reviews");
    return saved
      ? JSON.parse(saved)
      : [
          {
            name: "Andris, Rīga",
            text: "Paldies Tirilogi komandai! Logi mirdz kā jauni.",
            stars: 5,
          },
          {
            name: "Ilze, Sigulda",
            text: "Ļoti atsaucīgi cilvēki – iesaku visiem!",
            stars: 5,
          },
        ];
  });

  const [newReview, setNewReview] = useState({ name: "", text: "", stars: 5 });

  const addReview = () => {
    if (!newReview.name || !newReview.text) return alert("Lūdzu, aizpildi visus laukus!");

    const updated = [newReview, ...reviews];
    setReviews(updated);
    localStorage.setItem("reviews", JSON.stringify(updated));
    setNewReview({ name: "", text: "", stars: 5 });
  };

  return (
    <motion.div
      className="relative min-h-screen bg-gradient-to-b from-white via-blue-50/40 to-blue-100/30 text-gray-800 overflow-hidden pt-28 pb-20 px-6"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.6 }}
    >
      <div className="max-w-5xl mx-auto text-center relative z-10">
        <h2 className="text-4xl font-bold text-blue-800 mb-6">Atsauksmes</h2>

        <p className="text-gray-700 mb-12 max-w-2xl mx-auto text-lg">
          Paldies mūsu klientiem par uzticību! Pievieno arī savu atsauksmi zemāk 👇
        </p>

        {/* 🔹 Forma */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="bg-white/70 backdrop-blur-lg border border-blue-100 rounded-3xl shadow-lg p-8 mb-16 max-w-2xl mx-auto"
        >
          <input
            type="text"
            placeholder="Tavs vārds vai pilsēta"
            className="w-full mb-4 px-4 py-2 rounded-lg border border-gray-300 focus:border-blue-400 outline-none"
            value={newReview.name}
            onChange={(e) => setNewReview({ ...newReview, name: e.target.value })}
          />
          <textarea
            placeholder="Tava atsauksme..."
            className="w-full mb-4 px-4 py-2 rounded-lg border border-gray-300 focus:border-blue-400 outline-none resize-none h-28"
            value={newReview.text}
            onChange={(e) => setNewReview({ ...newReview, text: e.target.value })}
          />
          <div className="flex items-center justify-center mb-4 space-x-2">
            {[1, 2, 3, 4, 5].map((n) => (
              <span
                key={n}
                onClick={() => setNewReview({ ...newReview, stars: n })}
                className={`cursor-pointer text-2xl transition ${
                  n <= newReview.stars ? "text-yellow-400" : "text-gray-300"
                }`}
              >
                ★
              </span>
            ))}
          </div>
          <button
            onClick={addReview}
            className="bg-blue-600 hover:bg-blue-700 text-white font-semibold px-8 py-3 rounded-xl shadow-md transition"
          >
            Pievienot atsauksmi
          </button>
        </motion.div>

        {/* 🔹 Atsauksmju saraksts */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {reviews.map((r, i) => (
            <motion.div
              key={i}
              className="bg-white/60 backdrop-blur-md border border-blue-100 p-8 rounded-3xl shadow-lg"
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
      </div>
    </motion.div>
  );
}
