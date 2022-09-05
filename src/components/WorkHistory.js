import { useRef } from 'react'
import useObserve from '../hooks/useObserve'
import ReactIcon from '../assets/react.png'
import HtmlIcon from '../assets/html.png'
import PythonIcon from '../assets/python.png'
import JavascriptIcon from '../assets/javascript.png'
import FlutterIcon from '../assets/flutter.png'

const HISTORY = [
    {
        title: "ShopSe",
        joinedAt: "19th Oct 2020",
        positions: [
            
        ],
        responsibilities: [
            "Collaborated with designers to build pixel perfect UI, implementing performant and buttery smooth animations for delightful user experience",
            "Worked on multiple react and react-native projects and handled every stage of software lifecycle from creation to completion",
            "Worked with project managers to estimate deadlines for a given project and deliver on time"
        ],
        techStack: [
            ReactIcon,
            HtmlIcon,
            JavascriptIcon
        ],
    },
    {
        title: "SabertoothTech",
        joinedAt: "1st Apr 2020",
        lastDate: "11th October 2020",
        responsibilities: [
            "Collaborated with designers to build pixel perfect UI, implementing performant and buttery smooth animations for delightful user experience",
            "Worked on multiple react and react-native projects and handled every stage of software lifecycle from creation to completion",
            "Worked with project managers to estimate deadlines for a given project and deliver on time"
        ],
        techStack: [
            ReactIcon,
            JavascriptIcon,
            FlutterIcon
        ],
    },
    {
        title: "ProSavinns",
        joinedAt: "13th Oct 2019",
        lastDate: "27th Mar 2020",
        responsibilities: [
            "Collaborated with designers to build pixel perfect UI, implementing performant and buttery smooth animations for delightful user experience",
            "Worked on multiple react and react-native projects and handled every stage of software lifecycle from creation to completion",
            "Worked with project managers to estimate deadlines for a given project and deliver on time"
        ],
        techStack: [
            ReactIcon,
            HtmlIcon,
            PythonIcon
        ],
    }
]

function JobTile({ job, isLast }) {
    const { title, joinedAt, lastDate, responsibilities, techStack } = job
    return (
        <div className = {`relative ${!isLast? "border-l-2 border-green-400": null} lg:pl-8 pl-4 pb-10 left-4`}>
            <div className = "absolute top-0 w-8 h-8 rounded-full bg-green-400 border-white dark:border-gray-900 border-8" style = {{ left: -17 }} />
            {!lastDate && <div className = "absolute top-0 w-8 h-8 rounded-full bg-green-400 animate-ping" style = {{ left: -17 }} />}
            <h3 className = "text-heading1 font-bold">{title}</h3>
            <div className = "text-gray-600 mt-3 mb-2">
                {joinedAt} - {lastDate ?? "Present"}
            </div>
            <h5 className = "font-medium mb-2 text-heading2">Roles and responsibilities</h5>
            <ul className = "list-none">
                {responsibilities.map(resp => <li key = {resp}>{resp}</li>)}
            </ul>
            <div className = "flex items-center">
                {techStack.map((techImage, ind) => <img key = {ind} src = {techImage} className = "h-8 mr-2" alt = "Technology used" />)}
            </div>
        </div>
    )
}

export default function WorkHistory() {
    const viewRef = useRef()

    useObserve(viewRef)

    return (
        <div className = "transition duration-700 transform translate-y-8 opacity-0 mb-24" ref = {viewRef}>
            <h2>Work experience</h2>
            {HISTORY.map((job, ind, arr) => <JobTile key = {job.title} job = {job} isLast = {ind === arr.length-1} />)}
        </div>
    )
}