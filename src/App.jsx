import "./App.css";
import DaisyNav from "./component/DaisyNev/DaisyNav";
import NavBar from "./component/NavBar/NavBar";
function App() {
  return (
    <>
      <NavBar></NavBar>
      <h3 className="text-4xl bg-yellow-600">hello world</h3>
      <DaisyNav></DaisyNav>
    </>
  );
}

export default App;
