"use client"

import { LiaStarHalfSolid, LiaStarSolid } from "react-icons/lia";

export default function FeedbackCard() {
  return (
    <>
        <div className="p-8 border border-mine-shaft-primary-300 w-620px rounded-3xl">
            <div className="flex gap-5">
                <div className="w-40 flex flex-col justify-between items-center">
                    <div className="border-2 border-mine-shaft-primary-700 w-16 h-16 flex justify-center items-center rounded-full "> 
                        <h3 className="text-2xl font-bold text-mine-shaft-primary-700"> RC </h3>
                    </div>

                    <div className="flex flex-col justify-center items-center">
                        <h4 className="text-14px font-semibold text-brand-text"> Rosanne Coster </h4>
                        <h6 className="text-xs font-medium text-mine-shaft-400"> Marketing Director </h6>
                    </div>

                    <div className="flex">
                        <LiaStarSolid className="text-milk-punch-300"/>
                        <LiaStarSolid className="text-milk-punch-300"/>
                        <LiaStarSolid className="text-milk-punch-300"/>
                        <LiaStarSolid className="text-milk-punch-300"/>
                        <LiaStarHalfSolid className="text-milk-punch-300"/>
                    </div>
                </div>

                <div className="pl-8 border-l-2 w-96 border-mine-shaft-primary-300">
                     <p className="text-sm text-justify text-mine-shaft-primary-600"> I want to express my deep gratitude to the incredible designer I had the honor of working with. His skill and creativity made my vision a reality. He not only captured the essence of the project, but also added amazing elements that took the design to the next level. His meticulous attention to detail and commitment to quality was evident in every aspect of the work. </p>
                </div>
            </div>
        </div>
    </>
  )
};