import { useState } from "react"
import Navbar from "./Components/Navbar"
import Home from "./Pages/Home"
import Quiz from "./Pages/Quiz"
import Result from "./Pages/Result"

function App() {
  let bgTheme;
  const [theme, setTheme] = useState()
  const handleMode = (mode) => {
    setTheme(mode)
  }
  return (
    <>  
        <Navbar handleMode={handleMode}/>
        <Result theme = {theme}/>
    </>
  )
}

export default App