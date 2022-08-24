import { useState } from "react";
import reactLogo from "./assets/react.svg";
import "./App.css";
import List from "./List";

function App() {
  const [input, setInput] = useState("");

  function handleChange(e: any) {
    setInput(e.target.value);
  }

  return (
    <>
      <input type="text" value={input} onChange={handleChange} />
      <List term={input} />
    </>
  );
}

export default App;
