import { useEffect, useRef, useState } from "react";
// eslint-disable-next-line no-unused-vars
import { motion, AnimatePresence } from "framer-motion";
import dirtyGlass from "../assets/dirty-glass.png";
import cleanGlass from "../assets/clean-glass.png";

export default function WipeEffect() {
  const bottomCanvasRef = useRef(null);
  const topCanvasRef = useRef(null);
  const [revealed, setRevealed] = useState(false);
  const [progress, setProgress] = useState(0);
  const [fadeOut, setFadeOut] = useState(false);
  const [isReady, setIsReady] = useState(false);
  const isWiping = useRef(false);
  const pathRef = useRef([]);

  useEffect(() => {
    const bottomCanvas = bottomCanvasRef.current;
    const topCanvas = topCanvasRef.current;
    if (!bottomCanvas || !topCanvas) return;

    const bottomCtx = bottomCanvas.getContext("2d");
    const topCtx = topCanvas.getContext("2d");

    const dirtyImg = new Image();
    const cleanImg = new Image();
    dirtyImg.src = dirtyGlass;
    cleanImg.src = cleanGlass;

    const radius = window.innerWidth < 640 ? 70 : 100; // mazāks telefoniem

    const resize = () => {
      const w = window.innerWidth;
      const h = window.innerHeight;
      bottomCanvas.width = w;
      bottomCanvas.height = h;
      topCanvas.width = w;
      topCanvas.height = h;

      if (isReady) {
        bottomCtx.drawImage(cleanImg, 0, 0, w, h);
        topCtx.drawImage(dirtyImg, 0, 0, w, h);
      }
    };

    const drawBaseImages = () => {
      const w = window.innerWidth;
      const h = window.innerHeight;
      bottomCanvas.width = w;
      bottomCanvas.height = h;
      topCanvas.width = w;
      topCanvas.height = h;

      bottomCtx.clearRect(0, 0, w, h);
      bottomCtx.drawImage(cleanImg, 0, 0, w, h);

      topCtx.globalCompositeOperation = "source-over";
      topCtx.clearRect(0, 0, w, h);
      topCtx.drawImage(dirtyImg, 0, 0, w, h);
    };

    const startWipe = (e) => {
      e.preventDefault();
      isWiping.current = true;
    };

    const stopWipe = () => {
      isWiping.current = false;
    };

    const handleMove = (e) => {
      if (!isWiping.current || revealed) return;

      const rect = topCanvas.getBoundingClientRect();
      const x = (e.clientX || e.touches?.[0]?.clientX) - rect.left;
      const y = (e.clientY || e.touches?.[0]?.clientY) - rect.top;

      pathRef.current.push({ x, y });

      topCtx.globalCompositeOperation = "destination-out";
      const gradient = topCtx.createRadialGradient(x, y, 0, x, y, radius);
      gradient.addColorStop(0, "rgba(0,0,0,1)");
      gradient.addColorStop(1, "rgba(0,0,0,0)");
      topCtx.fillStyle = gradient;
      topCtx.beginPath();
      topCtx.arc(x, y, radius, 0, Math.PI * 2);
      topCtx.fill();

      const fakeProgress = Math.min(100, pathRef.current.length / 3.5);
      setProgress(fakeProgress);

      // Aktivizē pie 50%, nevis 60%
      if (fakeProgress >= 50 && !revealed) {
        setFadeOut(true);
        setTimeout(() => setRevealed(true), 1000);
      }
    };

    const loadImage = (img) =>
      new Promise((resolve) => {
        if (img.complete) resolve();
        else {
          img.onload = resolve;
          img.onerror = resolve;
        }
      });

    Promise.all([loadImage(cleanImg), loadImage(dirtyImg)]).then(() => {
      drawBaseImages();
      setIsReady(true);

      window.addEventListener("resize", resize);
      ["mousedown", "touchstart"].forEach((ev) =>
        topCanvas.addEventListener(ev, startWipe)
      );
      ["mouseup", "mouseleave", "touchend"].forEach((ev) =>
        topCanvas.addEventListener(ev, stopWipe)
      );
      ["mousemove", "touchmove"].forEach((ev) =>
        topCanvas.addEventListener(ev, handleMove)
      );
    });

    return () => {
      window.removeEventListener("resize", resize);
    };
  }, [revealed]);

  return (
    <div className="relative w-full h-screen flex items-center justify-center overflow-hidden bg-white">
      <canvas
        ref={bottomCanvasRef}
        className="absolute top-0 left-0 w-full h-full select-none"
      />
      <canvas
        ref={topCanvasRef}
        className={`absolute top-0 left-0 w-full h-full select-none cursor-crosshair transition-opacity duration-[1000ms] ${
          fadeOut ? "opacity-0" : "opacity-100"
        }`}
      />

      {!isReady && (
        <div className="absolute z-10 text-gray-600 text-lg animate-pulse">
          Notiek sagatavošana...
        </div>
      )}

      {isReady && !revealed && (
        <div className="absolute inset-0 flex flex-col items-center justify-center text-center z-10 pointer-events-none px-4">
          <h1 className="text-3xl sm:text-4xl md:text-6xl font-extrabold mb-4 bg-gradient-to-b from-blue-700 to-blue-900 bg-clip-text text-transparent drop-shadow-[2px_2px_8px_rgba(255,255,255,0.8)] leading-tight">
            Noslauki logu!
          </h1>
          <p className="text-base sm:text-lg md:text-xl text-gray-800 font-medium bg-white/70 px-4 py-2 rounded-xl shadow-md backdrop-blur-sm">
            Turi nospiestu peli vai pirkstu un slauki, lai atklātu skatu.
          </p>

          <div className="w-56 sm:w-64 h-3 bg-gray-200 rounded-full mt-6 overflow-hidden shadow-inner">
            <div
              className="h-full bg-gradient-to-r from-blue-400 to-blue-600 transition-all duration-200"
              style={{ width: `${progress}%` }}
            />
          </div>
        </div>
      )}

      <AnimatePresence>
        {revealed && (
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1 }}
            className="absolute inset-0 flex flex-col items-center justify-center z-20 text-center px-4"
          >
            <motion.h2
              initial={{ y: 40, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.3, duration: 0.8 }}
              className="text-2xl sm:text-3xl md:text-5xl font-bold text-blue-800 drop-shadow-lg bg-white/70 px-6 py-3 sm:py-4 rounded-xl mb-6 leading-snug"
            >
              Tirilogi.lv — tīrs skats uz pasauli
            </motion.h2>

            <motion.a
              href="/kontakti"
              initial={{ y: 60, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 1, duration: 0.8 }}
              className="bg-blue-600 hover:bg-blue-700 text-white font-semibold px-6 sm:px-8 py-2.5 sm:py-3 rounded-full shadow-lg hover:shadow-blue-300/50 transition-transform duration-300 hover:scale-105 text-sm sm:text-base"
            >
              Sazinies ar mums
            </motion.a>

            {/* ⚪️ Scroll animācija */}
            <motion.div
              initial={{ opacity: 0, y: 0 }}
              animate={{
                opacity: [0, 1, 0.85, 1],
                y: [0, 14, 0],
              }}
              transition={{
                duration: 2.6,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="mt-12 sm:mt-16 flex flex-col items-center cursor-pointer select-none group"
              onClick={() =>
                window.scrollTo({
                  top: window.innerHeight,
                  behavior: "smooth",
                })
              }
            >
              <motion.span
                animate={{
                  textShadow: [
                    "0 0 4px rgba(255,255,255,0.6)",
                    "0 0 12px rgba(255,255,255,0.9)",
                    "0 0 6px rgba(255,255,255,0.7)",
                  ],
                }}
                transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                className="text-white text-lg sm:text-xl font-semibold tracking-wider mb-3 drop-shadow-lg group-hover:scale-105 transition-transform duration-500"
              >
                Ritināt uz leju
              </motion.span>

              <div className="relative flex items-center justify-center">
                <div className="absolute w-6 sm:w-8 h-6 sm:h-8 rounded-full bg-white/30 blur-md animate-ping" />
                <div className="absolute w-3 sm:w-4 h-3 sm:h-4 rounded-full bg-white/70" />
              </div>

              <motion.svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={2.2}
                stroke="white"
                className="w-8 sm:w-10 h-8 sm:h-10 mt-5 sm:mt-6 drop-shadow-lg"
                animate={{
                  y: [0, 12, 0],
                  opacity: [0.8, 1, 0.8],
                }}
                transition={{
                  duration: 2.2,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
              </motion.svg>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
