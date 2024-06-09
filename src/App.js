import "./App.css";
import { useState, useRef } from "react";

function App() {
  const [renderer, setrenderer] = useState(0);
  const countRef = useRef(0);
  // 렌더링이 되면 countVar는 다시 0 으로 바뀌기 때문에
  // ref는 숫자가 올라가지만 var는 다시 0으로 초기화됨
  let countVar = 0;

  const increasRef = () => {
    countRef.current = countRef.current + 1;
    console.log("ref : ", countRef.current);
  };

  const increasVar = () => {
    countVar = countVar + 1;
    console.log("var : ", countVar);
  };
  const doRender = () => {
    setrenderer(renderer + 1);
  };

  return (
    <div>
      <p>Ref : {countRef.current} </p>
      <p>Ref : {countVar} </p>
      <button onClick={doRender}>렌더! </button>
      <button onClick={increasRef}>Ref 올려 </button>
      <button onClick={increasVar}>변수 올려 </button>
    </div>
  );
}

export default App;
