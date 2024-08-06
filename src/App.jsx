import { useState } from "react";
import Navbar from "./components/Navbar"
import HomePage from "./pages/HomePage"

function App() {

  const [darkMode, setDarkMode] = useState(false);
  return (
    <section className={`w-screen h-full ${darkMode ? "bg-background" : "bg-backgroundLight"} transition-colors overflow-x-hidden overflow-y-auto`}>
      <Navbar setDarkMode={setDarkMode} darkMode={darkMode} />
      <HomePage darkMode={darkMode} />
    </section>
  )
}

export default App
