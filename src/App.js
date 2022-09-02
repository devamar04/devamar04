import { useState } from "react";
import { useEffect } from "react";
import "./App.css";

function App() {
  const [error, setError] = useState();

  useEffect(() => {
    console.log("parent", window.parent);
    try {
      window.parent.postMessage("im the man", "*");
    } catch (error) {
      setError(error);
    }
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        <h1>TEST</h1>
        <h1>{JSON.stringify(error)}</h1>
      </header>
    </div>
  );
}

export default App;
