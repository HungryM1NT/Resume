import Portfolio from "./components/Portfolio/Portfolio"
import Profile from "./components/Profile/Profile"
import Skills from "./components/Skills/Skills"
import { useEffect } from "react"
import AOS from "aos"
import "aos/dist/aos.css"

function App() {
  useEffect(() => {
    AOS.init()
  }, [])

  return (
    <>
      <Profile aos="fade-down" />
      <Skills aos="fade-down" />
      <Portfolio aos="fade-down" />
    </>
  )
}

export default App
