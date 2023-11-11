"use client"

import { LiaStarSolid } from "react-icons/lia";
import Image from 'next/image'
import Persona from '../../../../public/Image_Persona.svg'

export default function FeedbackCard() {
  return (
    <>
        <div className="p-5 border border-mine-shaft-primary-300 w-400px  rounded-tl-[40px] rounded-r-[4px] rounded-br-[32px] rounded-l-[4px] flex justify-center items-stretch relative">
            <div className="flex items-center justify-center gap-8 px-2 py-1 border rounded-tl-none rounded-r-[2px] rounded-br-none rounded-l-[10px] h-8 absolute top-0 right-0 border-brand-accent bg-brand-accent"> 
                <p className="text-sm font-semibold italic text-brand-secondary"> Witness note </p>
                <div className=" flex gap-2 justify-center items-center">
                    <LiaStarSolid className="text-lg text-brand-secondary"/>
                    <p className="text-brand-secondary font-bold">4,0</p>
                </div>
            </div>
            <div className="flex flex-col justify-between gap-5">
                <div className="w-full flex  justify-between items-end">
                    <Image src={Persona} alt={""} />

                    <div className="flex justify-end w-full items-center gap-2">
                        <h4 className="text-14px font-semibold text-brand-text"> Rosanne Coster </h4>
                        <h6 className="text-xs font-medium text-mine-shaft-400"> Marketing Director </h6>
                    </div>

                </div>

                <div className="pt-4 border-t-2 w-full border-mine-shaft-primary-300">
                        <p className="text-sm font-medium text-justify text-mine-shaft-primary-600"> 
                            I want to express my deep gratitude to the incredible designer I had the honor of working with. His skill and creativity made my vision a reality, taking the project to the next level with meticulous detail and commitment to quality.
                        </p>
                </div>
            </div>
        </div>
    </>
  );
};