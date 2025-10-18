// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";

export default function GlobalBackground() {
  return (
    <motion.div
      className="fixed inset-0 -z-20 bg-gradient-to-b from-blue-100 via-blue-50 to-white"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1.2 }}
    >
      {/* Dekoratīvie gaismas elementi */}
      <div className="absolute top-20 left-40 w-96 h-96 bg-cyan-200/40 blur-[120px] rounded-full"></div>
      <div className="absolute bottom-20 right-40 w-[450px] h-[450px] bg-blue-200/40 blur-[140px] rounded-full"></div>
    </motion.div>
  );
}
