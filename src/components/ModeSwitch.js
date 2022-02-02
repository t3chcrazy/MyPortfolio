import useDarkMode from '../hooks/useDarkMode'

export default function ModeSwitch() {
    const { isDark, toggleDark } = useDarkMode()

    return (
        <button role = "checkbox" aria-checked = {isDark} className = "w-12 h-8 border-gray-100 border-2 rounded-full" onClick = {toggleDark}>
            <input type = "checkbox" checked = {isDark} className = "opacity-0 absolute h-4 w-8" />
            <div className = "transition-transform w-8 h-7 rounded-full bg-gray-800 dark:bg-yellow-500" style = {{ transform: `translateX(${isDark? 16: 0}px)` }}></div>
        </button>
    )
}