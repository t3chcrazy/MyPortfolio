import { useState } from 'react'

const KEY = "theme"
const LIGHT = "light"
const DARK = "dark"

export default function useDarkMode() {
    const [isDark, setDark] = useState(() => {
        if (window.localStorage.getItem(KEY) === DARK) {
            document.documentElement.classList.add(DARK)
            return true
        }
        else {
            window.localStorage.setItem(KEY, LIGHT)
            return false
        }
    })
    
    const toggleDark = () => {
        setDark(prev => {
            if (prev) {
                document.documentElement.classList.remove(DARK)
                window.localStorage.setItem(KEY, LIGHT)
            }
            else {
                document.documentElement.classList.add(DARK)
                window.localStorage.setItem(KEY, DARK)
            }
            return !prev
        })
    }

    return { isDark, toggleDark }
}