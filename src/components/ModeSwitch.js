import useDarkMode from '../hooks/useDarkMode'

const SWITCH_WIDTH = 54
const SWITCH_HEIGHT = 32

const PADDING = 4
const SIZE = SWITCH_HEIGHT-2*PADDING
const TRANSLATE_VALUE = SWITCH_WIDTH/2+2*PADDING-SIZE/2

export default function ModeSwitch() {
    const { isDark, toggleDark } = useDarkMode()

    return (
        <button role = "checkbox" aria-checked = {isDark} className = "border-gray-500 border-2 rounded-full flex items-center cursor-pointer" onClick = {toggleDark} style = {{ width: SWITCH_WIDTH, height: SWITCH_HEIGHT, borderRadius: SWITCH_HEIGHT/2 }}>
            <input type = "checkbox" checked = {isDark} className = "opacity-0 absolute h-4 w-8" />
            <div className = "transition rounded-full bg-gray-800 dark:bg-yellow-500" style = {{ transform: `translateX(${isDark? TRANSLATE_VALUE: PADDING}px)`, width: SIZE, height: SIZE }}></div>
        </button>
    )
}