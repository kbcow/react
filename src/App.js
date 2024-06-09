import "./App.css";
import { useState, useRef, useEffect } from "react";

function App() {
  const [count, setCount] = useState(1);
  const useRecord = useRef(0);
  useEffect(() => {
    useRecord.current = useRecord.current + 1;
    console.log("렌더링 수 : ", useRecord.current);
  });

  console.log(useRecord);
  return (
    <div>
      <p>Count : {count}</p>
      <button
        onClick={() => {
          setCount(count + 1);
        }}
      >
        count올려
      </button>
    </div>
  );
}

export default App;
