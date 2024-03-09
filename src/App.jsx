import { useState } from "react"
import Navbar from "./Components/Navbar"
import { Outlet } from "react-router-dom"

function App() {

  const [theme, setTheme] = useState(false)
  const handleMode = (mode) => {
    setTheme(mode)
  }

  return (
    <>  
        <Navbar handleMode={handleMode}/>
        <Outlet  context={theme}/>
    </>
  )
}

export default App