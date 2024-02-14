import { useContext } from "react";
import { COUNTER_CONTEXT } from "../context/CounterContext";


const Counter = () => {
const {count,setCount}=useContext(COUNTER_CONTEXT)
  return (
  <div>
      <div className="flex shrink-0 gap-2 bg-gray-100 px-10 m-10 rounded-xl mx-w-md justify-center items-center">
      <button
        onClick={() => setCount((prev) => prev - 1)}
        className="bg-red-300 py-2 px-5 rounded-md"
      >
        Decrement
      </button>
      <h1>{count}</h1>
      <button
        onClick={() => setCount((prev) => prev + 1)}
        className="bg-emerald-300 py-2 px-5 rounded-md"
      >
        Increment
      </button>
    </div>
  </div>
  );
};

export default Counter;
