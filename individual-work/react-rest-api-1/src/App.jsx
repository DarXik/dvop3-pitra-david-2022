import {useState, useEffect} from "react";
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
            <div className="grid lg:grid-cols-3 grid-cols-1 gap-y-[2em] gap-x-[2em] mx-[25%] mt-6 lg:text-lg">
                <Todo myClass="border-4 border-indigo-400 p-2" mySpan="font-bold" title="Udělat večeři" userid="15"
                      id="1"></Todo>
                <Todo myClass="border-4 border-amber-800 p-2" mySpan="font-bold" title="Nakrmit kocour" userid="1"
                      id="3"></Todo>
                <Todo myClass="border-4 border-lime-500 p-2" mySpan="font-bold" title="Přečíst knihu" userid="15"
                      id="2"></Todo>
            </div>
        </>
    );
}

export default App;
