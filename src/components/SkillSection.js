import { useRef, useState } from 'react'
import useObserve from '../hooks/useObserve'

const SKILLS = [
    {
        title: "React",
        color: "blue",
        image: require("../assets/react.png").default
    },
    {
        title: "React-Native",
        color: "blue",
        image: require("../assets/react.png").default
    },
    {
        title: "HTML",
        color: "red",
        image: require("../assets/html.png").default
    },
    {
        title: "CSS",
        color: "yellow",
        image: require("../assets/css.png").default
    },
    {
        title: "Flutter",
        color: "blue",
        image: require("../assets/flutter.png").default
    },
    {
        title: "Python",
        color: "blue",
        image: require("../assets/python.png").default
    }
]

function SkillDonut({ skill, index, animate }) {
    const { title, image, color } = skill

    return (
        <div style = {{ transitionDelay: `${(index+1)*200}ms` }} className = {`transition duration-700 ${!animate? "transform translate-y-8 opacity-0": ""} flex flex-col items-center self-center mx-4 relative`}>
            <img className = "w-24 h-24" src = {image} alt = {title} />
            <div className = {`text-${color} heading2 mt-3`}>{title}</div>
        </div>
    )
}

export default function SkillSection() {
    const [animate, setAnimate] = useState(false)
    const viewRef = useRef()

    useObserve(viewRef, () => {
        setAnimate(true)
    })

    return (
        <div className = "mb-24" ref = {viewRef}>
            <h2>Skills</h2>
            <div className = "flex wrap items-center lg:overflow-auto overflow-x-scroll">
                {SKILLS.map((skill, index) => <SkillDonut index = {index} animate = {animate} key = {skill.title} skill = {skill} />)}
            </div>
        </div>
    )
}