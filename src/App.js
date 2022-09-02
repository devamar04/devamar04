import { useState } from "react";
import { useEffect } from "react";
import "./App.css";

function App() {
  const [error, setError] = useState();

  const onClick = () => {
    try {
      window.parent.postMessage("im the man", "*");
    } catch (error) {
      setError(error);
    }
  };

  return (
    <div className="App">
      <header className="App-header">
        <h1>TEST</h1>
        <h1 style={{ height: 50, weight: 50, backgroundColor: "red" }}>
          {JSON.stringify(error)}
        </h1>
        <button onClick={onClick}>Click me</button>
      </header>
    </div>
  );
}

export default App;
