import { useRef, useState, useEffect } from 'react'
import useObserve from '../hooks/useObserve'

const SKILLS = [
    {
        title: "React",
        percent: 0.9,
        color: "blue",
        image: require("../assets/react.png").default
    },
    {
        title: "React-Native",
        percent: 0.85,
        color: "blue",
        image: require("../assets/react.png").default
    },
    {
        title: "HTML",
        percent: 0.85,
        color: "red",
        image: require("../assets/html.png").default
    },
    {
        title: "CSS",
        percent: 0.7,
        color: "yellow",
        image: require("../assets/css.png").default
    },
    {
        title: "Flutter",
        percent: 0.6,
        color: "blue",
        image: require("../assets/flutter.png").default
    },
    {
        title: "Python",
        percent: 0.75,
        color: "blue",
        image: require("../assets/python.png").default
    }
]

const DIA = 100
const STROKE = 8

function SkillDonut({ animate, skill }) {
    const { percent, title, image, color } = skill
    const circleRef = useRef()
    const [length, setLength] = useState(0)

    useEffect(() => {
        setLength(circleRef.current.getTotalLength())
    }, [])

    return (
        <div className = "flex flex-col items-center self-center mx-4 relative">
            <svg className = "transform -rotate-90" width = {DIA+STROKE} height = {DIA+STROKE} viewBox = "0 0 100 100">
                <circle ref = {circleRef} strokeDasharray = {[length, length]} strokeDashoffset = {length} className = {`stroke-${color}`} cx = "50" cy = "50" r = {50-STROKE} fill = "transparent" strokeWidth = "5" strokeLinecap = "round">
                    {animate && 
                    <animate
                        attributeName = 'stroke-dashoffset'
                        from = {length}
                        to = {(1-percent)*length}
                        dur = '1s'
                        fill = 'freeze'
                    />}
                </circle>
            </svg>
            <div className = {`text-${color} heading2 mt-3`}>{title}</div>
            <img src = {image} className = "absolute transform scale-50" alt = {title} />
        </div>
    )
}

export default function SkillSection() {
    const [animate, setAnimate] = useState(false)
    const viewRef = useRef()
    useObserve(viewRef, () => {
        console.log("Callback ran")
        setAnimate(true)
    })

    return (
        <div className = "transition duration-700 transform translate-y-8 opacity-0 mb-24" ref = {viewRef}>
            <h2 className = "text-huge font-bold">Skills</h2>
            <div className = "flex wrap items-center lg:overflow-auto overflow-x-scroll">
                {SKILLS.map(skill => <SkillDonut animate = {animate} key = {skill.title} skill = {skill} />)}
            </div>
        </div>
    )
}