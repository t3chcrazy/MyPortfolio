import { useEffect } from 'react'

export default function useObserve(ref, callback, threshold = 0.8) {
    useEffect(() => {
        const OPTIONS = {
            root: null,
            threshold
        }
        const observer = new IntersectionObserver((entries, observer) => {
            entries.forEach(entry => {
                if (entry.intersectionRatio > 0) {
                    entry.target.classList.remove("translate-y-8")
                    entry.target.classList.remove("opacity-0")
                    if (callback !== undefined && callback !== null) {
                        console.log(callback)
                        callback?.()
                    }
                    observer.disconnect()
                }
            })
        }, OPTIONS)
        observer.observe(ref.current)
    }, [ref, threshold, callback])
}