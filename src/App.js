import { RouterProvider } from "react-router-dom";
import "./App.css";
import { router } from "./Components/Routes/Route";
import React, { useState, useEffect, useRef } from 'react'
import BIRDS from 'vanta/dist/vanta.birds.min'
import DOTS from 'vanta/dist/vanta.dots.min';

function App() {
  return (
    <div className="bg-neutral">
      {/* <RouterProvider router={router}>
      </RouterProvider> */}
      <Vanta />
    </div>
  );
}

const Vanta = (props) => {
  const [vantaEffect, setVantaEffect] = useState(null)
  const myRef = useRef(null)
  useEffect(() => {
    if (!vantaEffect) {
      setVantaEffect(DOTS({
        el: myRef.current,
        mouseControls: true,
        touchControls: true,
        gyroControls: false,
        minHeight: 200.00,
        minWidth: 200.00,
        scale: 2.00,
        scaleMobile: 1.00,
        showLines: false
      }))
    }
    return () => {
      if (vantaEffect) vantaEffect.destroy()
    }
  }, [vantaEffect])
  return <div ref={myRef}>
    <RouterProvider router={router}>
    </RouterProvider>
  </div>
}

export default App;
