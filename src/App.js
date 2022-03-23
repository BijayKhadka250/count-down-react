import "./App.css";
import Child from "./Child";
import { useEffect, useState } from "react";

function App() {
  const [timeString, setTimeString] = useState("");
  const [count, setCount] = useState(0);

  const setCurrentTime = () => {
    if (count >= 0) {
      setTimeout(() => {
        let min;
        let sec;
        if (count > 60) {
          min = Math.floor(count / 60);
          sec = count % 60;
        } else {
          min = 0;
          sec = count;
        }
        setTimeString(`${min}:${sec}`);
        setCount(count - 1);
      }, 1000);
    }
  };

  const setTheCounter = (int) => {
    setCount(int * 60);
  };

  useEffect(() => {
    setTheCounter(3);
  }, []);

  useEffect(() => {
    setCurrentTime();
  }, [count]);

  return (
    <div className="App">
      <h1>Hello</h1>
      <Child timeString={timeString}></Child>
    </div>
  );
}

export default App;
