import { useRef } from 'react'
import useObserve from '../hooks/useObserve'

// function Project({ hasBorder }) {
//     return (
//         <div className = "">

//         </div>
//     )
// }

export default function Projects() {
    const viewRef = useRef()

    useObserve(viewRef)
    
    return (
        <div className = "transition duration-700 transform translate-y-8 opacity-0 mb-24" ref = {viewRef}>
            <h2>Projects</h2>
            <div className = "flex flex-col">
                
            </div>
        </div>
    )
}