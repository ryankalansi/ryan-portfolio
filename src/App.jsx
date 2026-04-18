import { useState } from "react";
import { LoadingScreen } from "./components/LoadingScreen";
import { Navbar } from "./components/Navbar";
import { Home } from "./components/sections/Home";
import { About } from "./components/sections/About";
import { Projects } from "./components/sections/Projects";
import { Certifications } from "./components/sections/Certifications";
import { Activities } from "./components/sections/Activities";
import { Contact } from "./components/sections/Contact";
import { TrujivaShowcase } from "./components/showcases/TrujivaShowcase";
import { RootsFinanceShowcase } from "./components/showcases/RootsFinanceShowcase";
import { Toaster } from "react-hot-toast";

function App() {
  const [isLoaded, setIsLoaded] = useState(false);
  const [activeShowcase, setActiveShowcase] = useState(null);
  const [isShowcaseVisible, setIsShowcaseVisible] = useState(false);

  const handleOpenShowcase = (id) => {
    setActiveShowcase(id);
    requestAnimationFrame(() => setIsShowcaseVisible(true));
  };

  const handleCloseShowcase = () => {
    setIsShowcaseVisible(false);
    setTimeout(() => {
      setActiveShowcase(null);
      requestAnimationFrame(() => {
        document
          .getElementById("projects")
          ?.scrollIntoView({ behavior: "smooth" });
      });
    }, 300);
  };

  return (
    <>
      {/* Container untuk notifikasi toast */}
      <Toaster position="bottom-right" reverseOrder={false} />

      {!isLoaded && <LoadingScreen onComplete={() => setIsLoaded(true)} />}

      {/* Showcase overlay */}
      {(activeShowcase === "trujiva" || activeShowcase === "roots-finance") && (
        <div
          style={{
            position: "fixed",
            inset: 0,
            zIndex: 100,
            overflowY: "auto",
            background: "white",
            opacity: isShowcaseVisible ? 1 : 0,
            transform: isShowcaseVisible ? "translateY(0)" : "translateY(24px)",
            transition: "opacity 0.3s ease, transform 0.3s ease",
          }}
        >
          {activeShowcase === "trujiva" && (
            <TrujivaShowcase onClose={handleCloseShowcase} />
          )}
          {activeShowcase === "roots-finance" && (
            <RootsFinanceShowcase onClose={handleCloseShowcase} />
          )}
        </div>
      )}

      <div
        className={`min-h-screen transition-opacity duration-700 bg-gray-950 text-gray-50 ${
          isLoaded ? "opacity-100" : "opacity-0"
        }`}
      >
        <Navbar />
        <Home />
        <About />
        <Projects onOpenShowcase={handleOpenShowcase} />
        <Certifications />
        <Activities />
        <Contact />
      </div>
    </>
  );
}

export default App;
