// import CaseOne from "./pages/CaseOne/CaseOne";
import CounterContext from "./context/CounterContext";
import CaseTwo from "./pages/CaseTwo/CaseTwo";

function App() {
  return (
    <CounterContext>
      <CaseTwo />
   /</CounterContext>
  );
}

export default App;
