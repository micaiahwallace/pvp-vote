import { useState } from "react";
import "./App.css";

function App() {
  const [name, setName] = useState("");

  const putResults = () => {
    fetch("/");
  };

  const submit = () => {
    console.log(name);
    putResults();
  };

  const onKeyCode = (key: string) => {
    if (key === "Enter") {
      submit();
    }
  };
  return (
    <>
      <h1>Baby Name Vote</h1>
      <div className="card">
        <p>Vote your top name choices</p>
        <input
          type="text"
          value={name}
          onKeyDown={(e) => onKeyCode(e.key)}
          onChange={(e) => setName(e.target.value)}
        />
      </div>
    </>
  );
}

export default App;
