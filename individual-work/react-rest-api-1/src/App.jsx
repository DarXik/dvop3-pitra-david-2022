import { useState, useEffect } from "react";
import reactLogo from "./assets/react.svg";
import Todo from "./components/todo.jsx";
import UseGenerateRandomColor from "./random";
import TailwindColor from "@videsk/tailwind-random-color";

function App() {
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState([]);
  //   const { color, generateColor } = UseGenerateRandomColor();
  const fetchData = async () => {
    setLoading(true);
    const response = await fetch("https://jsonplaceholder.typicode.com/todos/");
    const responseJson = await response.json();
    setData(responseJson);
    // console.log(responseJson);
    setLoading(false);
  };

  //   var barvicky = []
  //   data.map(()=>{generateColor(); barvicky.push(color)})

  useEffect(() => {
    fetchData();
  }, []);
  const [color, setColor] = useState(new TailwindColor().pick());
  console.log(color);
  return (
    <>
      <div>
        {/* <button onClick={()=>console.log(barvicky)}>AHOJAOHO</button> */}
        <h1 className="underline text-3xl text-center mt-3 mb-4">TODO</h1>
        {loading ? (
          <p>Loading...</p>
        ) : (
          <div>
            {data ? (
              <div className="grid lg:grid-cols-3 grid-cols-1 gap-y-[2em] gap-x-[2em] mx-[10%] mt-6 mb-6">
                {data.map((item) => (
                  <Todo
                    color={color    }
                    key={item.id}
                    title={item.title}
                    userid={item.userId}
                    id={item.id}
                  ></Todo>
                ))}
              </div>
            ) : (
              <p>No data</p>
            )}
          </div>
        )}
      </div>
    </>
  );
}

export default App;
// console.log(new TailwindColor().pick())
