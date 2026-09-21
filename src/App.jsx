import FullScreenNav from "./Components/Navbar/FullScreenNav";
import Navbar from "./Components/Navbar/Navbar";
import { NavProvider } from "./Components/Navbar/NavContext";
import Home from "./Pages/Home";
import { useContext } from 'react'
import { NavContext } from "./Components/Navbar/NavContext";
import { useEffect } from "react";

function App() {

    const { isDark} = useContext(NavContext)

    useEffect(() => {
  document.body.classList.toggle("dark", isDark)
}, [isDark])
  return (
    <div className="app overflow-x-hidden">
   
   <Navbar/>
   <FullScreenNav/>
   <Home/>
    
    </div>
  );
}

export default App;