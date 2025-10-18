// eslint-disable-next-line no-unused-vars
import { motion, AnimatePresence } from "framer-motion";
import wipeGif from "../assets/Wipeicon.gif";

export default function PageTransition({ isVisible }) {
  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.6, ease: "easeInOut" }}
          className="fixed inset-0 z-[999] flex items-center justify-center bg-white/70 backdrop-blur-sm"
        >
          <img
            src={wipeGif}
            alt="Tīrītājs"
            className="w-48 h-48 object-contain"
          />
        </motion.div>
      )}
    </AnimatePresence>
  );
}
