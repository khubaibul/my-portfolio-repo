import { RouterProvider } from "react-router-dom";
import "./App.css";
import Particle from "./Components/Particle/Particle";
import { router } from "./Components/Routes/Route";

function App() {
  return (
    <div className="bg-neutral">
      <RouterProvider router={router}>
      </RouterProvider>
      {/* <Particle></Particle> */}
    </div>
  );
}


export default App;
