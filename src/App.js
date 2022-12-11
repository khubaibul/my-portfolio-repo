import { RouterProvider } from "react-router-dom";
import "./App.css";
import { router } from "./Components/Routes/Route";

function App() {
  return (
    <div className="bg-neutral">
      <RouterProvider router={router}>
      </RouterProvider>
    </div>
  );
}


export default App;
