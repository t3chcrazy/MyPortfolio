import BusinessCard from "./components/BusinessCard";
import ModeSwitch from "./components/ModeSwitch";
import MyPhoto from './assets/photo.jpg'
import SkillSection from "./components/SkillSection";
import { useEffect, useRef } from "react";
import Projects from "./components/Projects";

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
    <div className="flex flex-col font-mono bg-white dark:bg-gray-900">
      <nav ref = {navRef} className = "shadow-md dark:shadow-md-white self-center bg-orange-500 fixed transition-transform transform container px-auto flex flex-row justify-end md:p-4 p-2">
        <ModeSwitch />
      </nav>
      <main className = "container flex flex-col mx-auto text-bg-gray-800 dark:text-white">
        <div className = "flex flex-col justify-center items-center lg:min-h-screen min-h-0">
          <img alt = "Me" src = {MyPhoto} className = "rounded-full max-w-sm" />
          <div className = "lg:text-heading4 md:text-heading1"><span className = "font-bold lg:text-colossal md:text-huge text-green-500">Hi!</span>My Name is{"\n"}Abhishek Prashant, and I am a software engineer</div>
        </div>
        <SkillSection />
        <BusinessCard />
        <Projects />
      </main>
    </div>
  );
}

export default App;
