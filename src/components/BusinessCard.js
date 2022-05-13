import React from 'react'

export default function BusinessCard() {
    return (
        <div className = "group cursor-pointer self-center relative md:w-2/5 w-4/5 h-64">
            <div className = "transition flex flex-row overflow-hidden rounded-lg shadow-md dark:shadow-md-white duration-500 w-full h-full absolute backface-hidden group-hover:rotate-y-180">
                <div className = "w-3/5 p-5 text-white text-title font-bold bg-green-500  flex flex-col justify-center">
                    Open for work!
                </div>
                <div className = "p-5"></div>
            </div>
            <div className = "transition p-5 duration-500 w-full h-full rounded-lg shadow-md dark:shadow-md-white absolute rotate-y-180 scale-neg-1 backface-hidden group-hover:rotate-y-0">
                Behind this card
            </div>
        </div>
    )
}