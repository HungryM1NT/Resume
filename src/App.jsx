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
      <Skills />
      <Portfolio aos="fade-up" />
    </>
  )
}

export default App
