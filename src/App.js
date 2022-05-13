import BusinessCard from "./components/BusinessCard";
import ModeSwitch from "./components/ModeSwitch";
import MyPhoto from './assets/photo.jpg'
import SkillSection from "./components/SkillSection";
import { useEffect, useRef } from "react";
import Projects from "./components/Projects";
import WorkHistory from "./components/WorkHistory";
import ReactIcon from './assets/react.png'

function App() {
  const position = useRef(0)
  const navRef = useRef()

  useEffect(() => {
    const handler = () => {
      const top = document.body.getBoundingClientRect().top
      const currDirection = top > position.current? "top": "bottom"
      position.current = top
      if (currDirection === "top") {
        navRef.current.classList.remove("-translate-y-20")
      }
      else {
        navRef.current.classList.add("-translate-y-20")
      }
    }
    document.addEventListener("scroll", handler)
    return () => {
      document.removeEventListener("scroll", handler)
    }
  }, [])

  return (
    <div className="flex flex-col font-robotoSlab bg-white dark:bg-gray-900">
      <nav ref = {navRef} className = "z-50 shadow-md dark:shadow-md-white self-center bg-orange-500 fixed transition-transform transform container px-auto flex flex-row justify-end md:p-4 p-2">
        <ModeSwitch />
      </nav>
      <main className = "container flex flex-col mx-auto text-bg-gray-800 dark:text-white">
        <div className = "flex flex-col justify-center items-center lg:min-h-screen min-h-0 lg:pt-0 pt-48">
          <img alt = "Me" src = {MyPhoto} className = "rounded-full max-w-sm" />
          <div className = "lg:text-heading4 md:text-heading1">My Name is{"\n"}Abhishek Prashant, and I am a software engineer</div>
        </div>
        <SkillSection />
        <BusinessCard />
        <Projects />
        <WorkHistory />
      </main>
      <footer className = "flex justify-center items-center dark:text-white">
        Made with <img className = "h-6 ml-2" src = {ReactIcon} alt = "React" />
      </footer>
    </div>
  );
}

export default App;
