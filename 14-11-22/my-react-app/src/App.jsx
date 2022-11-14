import { useState } from "react";
import reactLogo from "./assets/react.svg";
import "./App.css";
import Header from "./components/Header";
import ListItem from "./components/ListItem";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <Header/>
      <ul>
        <ListItem text="WBA" />
        <ListItem text="PVA" />
        <ListItem text="APS" />
        <ListItem text="TEV" />
        <ListItem text="MAT" />
       
      </ul>
    </div>
  );
}

export default App;
