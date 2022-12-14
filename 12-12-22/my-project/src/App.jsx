import { useState } from "react";
import reactLogo from "./assets/react.svg";
import card from "../components/card";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="">
      <div className="bg-green-500 w-80 shadow-lg flex justify-center h-full">
        <h1 className="md:font-extrabold">Ahoj</h1>
      </div>
    </div>
  );
}

export default App;
