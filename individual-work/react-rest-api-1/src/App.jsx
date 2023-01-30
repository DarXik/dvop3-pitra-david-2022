import { useState, useEffect } from "react";
import reactLogo from "./assets/react.svg";
import Todo from "../components/todo.jsx";

function App() {
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState([]);

  const fetchData = async () => {
    setLoading(true);
    const response = await fetch("https://jsonplaceholder.typicode.com/todos/");
    const responseJson = await response.json();
    setData(responseJson);
    console.log(responseJson);
    setLoading(false);
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    // <div>
    //   <h1>React App</h1>
    //   {loading ? (
    //     <p>Loading...</p>
    //   ) : (
    //     <div>
    //       {data ? (
    //         <div>
    //           {data.map((item) => (
    //             <div key={item.id}>
    //               <p>{item.title}</p>
    //             </div>
    //           ))}
    //         </div>
    //       ) : (
    //         <p>No data</p>
    //       )}
    //     </div>
    //   )}
    // </div>
      <>
        <div className="grid grid-cols-3">
          <Todo title="Udělat večeři" userid="15" id="1"></Todo>
          <Todo title="Nakrmit kocour" userid="1" id="3"></Todo>
          <Todo title="Přečíst knihu" userid="15" id="2"></Todo>
        </div>
      </>
  );
}

export default App;
