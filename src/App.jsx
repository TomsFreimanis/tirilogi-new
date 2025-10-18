import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";
import { useState, useEffect } from "react";
import Navbar from "./Components/Navbar";
import Footer from "./Components/Footer";
import Home from "./pages/Home";
import Parmums from "./pages/Parmums";
import Pakalpojumi from "./pages/Pakalpojumi";
import Atsauksmes from "./pages/Atsauksmes";
import Kontakti from "./pages/Kontakti";
import PageTransition from "./Components/PageTransition";

function AnimatedRoutes({ onChange }) {
  const location = useLocation();

  useEffect(() => {
    // kad mainās lapa, parāda pāreju  ddd
    onChange();
  }, [location]);

  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        {[
          { path: "/", element: <Home /> },
          { path: "/par-mums", element: <Parmums /> },
          { path: "/pakalpojumi", element: <Pakalpojumi /> },
          { path: "/atsauksmes", element: <Atsauksmes /> },
          { path: "/kontakti", element: <Kontakti /> },
        ].map(({ path, element }) => (
          <Route
            key={path}
            path={path}
            element={
              <motion.div
                className="min-h-screen flex flex-col"
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -40 }}
                transition={{ duration: 0.6, ease: "easeInOut" }}
              >
                {element}
              </motion.div>
            }
          />
        ))}
      </Routes>
    </AnimatePresence>
  );
}

export default function App() {
  const [showTransition, setShowTransition] = useState(false);

  const handlePageChange = () => {
    setShowTransition(true);
    setTimeout(() => setShowTransition(false), 800); // 0.8s pārejas animācija
  };

  return (
    <Router>
      <div className="relative min-h-screen bg-gradient-to-b from-blue-100 via-blue-50 to-white overflow-x-hidden">
        {/* Dekoratīvais blur fons */}
        <div className="absolute top-20 left-40 w-96 h-96 bg-cyan-200/40 blur-[120px] rounded-full -z-10 animate-pulse"></div>
        <div className="absolute bottom-20 right-40 w-[500px] h-[500px] bg-blue-200/40 blur-[140px] rounded-full -z-10 animate-pulse"></div>

        <Navbar />
        {/* Mazgātāja animācija */}
        <PageTransition isVisible={showTransition} />
        {/* Pārejošās lapas */}
        <AnimatedRoutes onChange={handlePageChange} />
        <Footer />
      </div>
    </Router>
  );
}
