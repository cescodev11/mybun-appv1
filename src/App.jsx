import Canvas from "./canvas/Canvas";
import CustomItem from "./pages/CustomItem";
import Home from "./pages/Home";

function App() {
  return (
    <main className="app transition-all ease-in">
      <Home />
      <Canvas />
      <CustomItem />
    
    </main>
  );
}

export default App;
