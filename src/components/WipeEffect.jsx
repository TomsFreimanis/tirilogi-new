import { useEffect, useRef } from "react";
import dirtyGlass from "../assets/dirty-glass.png";
import cleanGlass from "../assets/clean-glass.png";

export default function WipeEffect() {
  const containerRef = useRef(null);
  const topCanvasRef = useRef(null);
  const bottomCanvasRef = useRef(null);

  useEffect(() => {
    const topCanvas = topCanvasRef.current;
    const bottomCanvas = bottomCanvasRef.current;
    const topCtx = topCanvas.getContext("2d");
    const bottomCtx = bottomCanvas.getContext("2d");

    const dirtyImg = new Image();
    const cleanImg = new Image();

    dirtyImg.src = dirtyGlass;
    cleanImg.src = cleanGlass;

    const resize = () => {
      const w = window.innerWidth;
      const h = window.innerHeight;
      topCanvas.width = w;
      topCanvas.height = h;
      bottomCanvas.width = w;
      bottomCanvas.height = h;

      if (cleanImg.complete && dirtyImg.complete) {
        drawBackground();
        drawTop();
      }
    };

    const drawBackground = () => {
      bottomCtx.clearRect(0, 0, bottomCanvas.width, bottomCanvas.height);
      bottomCtx.drawImage(cleanImg, 0, 0, bottomCanvas.width, bottomCanvas.height);
    };

    const drawTop = () => {
      topCtx.globalCompositeOperation = "source-over";
      topCtx.clearRect(0, 0, topCanvas.width, topCanvas.height);
      topCtx.drawImage(dirtyImg, 0, 0, topCanvas.width, topCanvas.height);
    };

    const handleMove = (e) => {
      const rect = topCanvas.getBoundingClientRect();
      const x = (e.clientX || e.touches?.[0]?.clientX) - rect.left;
      const y = (e.clientY || e.touches?.[0]?.clientY) - rect.top;
      const radius = 70;

      topCtx.globalCompositeOperation = "destination-out";
      const gradient = topCtx.createRadialGradient(x, y, 0, x, y, radius);
      gradient.addColorStop(0, "rgba(0,0,0,1)");
      gradient.addColorStop(1, "rgba(0,0,0,0)");
      topCtx.fillStyle = gradient;

      topCtx.beginPath();
      topCtx.arc(x, y, radius, 0, Math.PI * 2);
      topCtx.fill();
      topCtx.globalCompositeOperation = "source-over";
    };

    Promise.all([
      new Promise((res) => (cleanImg.onload = res)),
      new Promise((res) => (dirtyImg.onload = res)),
    ]).then(() => {
      resize();
      window.addEventListener("resize", resize);
      topCanvas.addEventListener("mousemove", handleMove);
      topCanvas.addEventListener("touchmove", handleMove);
    });

    return () => {
      window.removeEventListener("resize", resize);
      topCanvas.removeEventListener("mousemove", handleMove);
      topCanvas.removeEventListener("touchmove", handleMove);
    };
  }, []);

  return (
    <div ref={containerRef} className="relative w-full h-screen overflow-hidden">
      {/* 🔹 Apakšējais (tīrais) slānis */}
      <canvas ref={bottomCanvasRef} className="absolute top-0 left-0 w-full h-full" />

      {/* 🔹 Augšējais (netīrais) slānis */}
      <canvas
        ref={topCanvasRef}
        className="absolute top-0 left-0 w-full h-full cursor-crosshair"
      />

      {/* 🔹 Teksts virsū */}
      <div className="absolute inset-0 flex flex-col items-center justify-center text-center z-10 pointer-events-none">
        <h1 className="text-5xl md:text-6xl font-extrabold mb-4 bg-gradient-to-b from-blue-700 to-blue-900 bg-clip-text text-transparent drop-shadow-[2px_2px_8px_rgba(255,255,255,0.8)]">
          Noslauki logu!
        </h1>
        <p className="text-lg md:text-xl text-gray-800 font-medium bg-white/70 px-4 py-2 rounded-xl shadow-md backdrop-blur-sm">
          Izmanto peli vai pirkstu, lai atklātu tīru skatu.
        </p>
      </div>

      {/* 🔹 Gaišs stikla atspīdums */}
      <div className="absolute inset-0 bg-gradient-to-t from-white/15 via-transparent to-transparent z-[1] pointer-events-none"></div>
    </div>
  );
}
