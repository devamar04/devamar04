import { useEffect } from "react";
import "./App.css";

function App() {
  useEffect(() => {
    console.log("parent", window.parent);
    window.parent.postMessage("im the man", "*");
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        <h1>TEST</h1>
      </header>
    </div>
  );
}

export default App;
