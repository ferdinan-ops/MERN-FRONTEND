import { Router } from "../config";
import "prismjs/themes/prism-z-toch.css";
import Prism from "prismjs";
import { useEffect } from "react";

function App() {
  useEffect(() => {
    Prism.highlightAll();
  });

  return (
    <div className="app">
      <Router />
    </div>
  );
}

export default App;
