import { useState } from "react";
import "./App.css";

function App() {
  const [num, setNum] = useState(0);

  const increaseNum = () => {
    setNum(num + 1);
  };
  const resetNum = () => {
    setNum(0);
  };
  const decreaseNum = () => {
    setNum(num - 1);
  };

  return (
    <>
      <div>
        <h3>Counter</h3>
        <hr />
        <p className="num">{num}</p>
      </div>
      <div>
        <button className="increase-btn" onClick={increaseNum}>
          Increase!
        </button>
        <button className="reset-btn" onClick={resetNum}>
          Reset
        </button>
        <button className="decrease-btn" onClick={decreaseNum}>
          Decrease!
        </button>
      </div>
    </>
  );
}
export default App;
