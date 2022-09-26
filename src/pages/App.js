import { Router, store } from "../config";
import "prismjs/themes/prism-z-toch.css";
import Prism from "prismjs";
import { useEffect } from "react";
import { Provider } from "react-redux";
import { Toaster } from "react-hot-toast";

function App() {
  useEffect(() => {
    Prism.highlightAll();
  });

  return (
    <div className="app">
      <Provider store={store}>
        <div className="toaster">
          <Toaster />
        </div>
        <Router />
      </Provider>
    </div>
  );
}

export default App;
