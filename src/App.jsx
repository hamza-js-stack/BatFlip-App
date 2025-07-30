
import Home from "./pages/Home";
import "./index.css";
import { useEffect, useRef } from "react";

function App() {
  const containerRef = useRef(null);

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "ArrowDown" && containerRef.current) {
        containerRef.current.scrollBy({ top: 100, behavior: "smooth" });
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  return (
    <div ref={containerRef} className="scroll-container">
      <Home />
    </div>
  );
}

export default App;
