import "./App.css";
import { useState } from "react";

const heavyWrok = () => {
  console.log("엄청 무거운 작업");
  return ["홍길동", "김병우"];
};
function App() {
  const [names, setNames] = useState(() => {
    return heavyWrok();
  });
  const [input, setInput] = useState("");

  const handleInputChange = (e) => {
    setInput(e.target.value);
  };
  const pushOnButton = () => {
    setNames((i) => {
      return [input, ...i];
    });
  };

  return (
    <div>
      <input type="text" value={input} onChange={handleInputChange} />
      <button onClick={pushOnButton}> Upload</button>
      {names.map((name, idx) => {
        return <p key={idx}>{name}</p>;
      })}
    </div>
  );
}

export default App;
