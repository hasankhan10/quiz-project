import { useState } from "react"
import Navbar from "./Components/Navbar"
import Home from "./Pages/Home"
import Quiz from "./Pages/Quiz"
import Result from "./Pages/Result"
import { Outlet } from "react-router-dom"

function App() {

  const [theme, setTheme] = useState(false)
  const handleMode = (mode) => {
    setTheme(mode)
  }

  return (
    <>  
        <Navbar handleMode={handleMode}/>
        {/* <Home theme={theme} /> */}
        <Outlet  context={theme}/>
    </>
  )
}

export default App