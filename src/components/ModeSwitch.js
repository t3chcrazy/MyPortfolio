import useDarkMode from '../hooks/useDarkMode'

export default function ModeSwitch() {
    const { isDark, toggleDark } = useDarkMode()

    return (
        <button role = "checkbox" aria-checked = {isDark} className = "w-12 h-8 border-gray-100 border-2 rounded-full flex items-center" onClick = {toggleDark}>
            <input type = "checkbox" checked = {isDark} className = "opacity-0 absolute h-4 w-8" />
            <div className = "transition w-8 h-8 rounded-full bg-gray-800 dark:bg-yellow-500" style = {{ transform: `translateX(${isDark? 16: 0}px) scale(0.7)` }}></div>
        </button>
    )
}