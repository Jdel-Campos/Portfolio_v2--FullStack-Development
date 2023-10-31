"use client"

import Image from "next/image";
import VisualIdentity from "../../../../public/Visual identity.svg"
import { LiaAngleDownSolid, LiaAngleUpSolid } from "react-icons/lia"
import { useState } from "react";

export default function ServiceCard() {
    const [expanded, setExpanded] = useState(false)
    const toggleExpanded = () => { setExpanded(!expanded) };
    
    return (
      <> 
        <div className="border w-56 flex flex-col justify-center items-center p-4 rounded-lg gap-4">
          <div className="flex flex-col justify-center items-center">
            <h3> Visual Identity </h3>
            <Image src={VisualIdentity} alt="A visual identity cartoon" />
            {expanded ? "" : ( <LiaAngleDownSolid  className="text-brand-primary cursor-pointer" onClick={toggleExpanded} /> )}
          </div>
          {expanded && (
            <div className="border-t flex flex-col justify-center items-center gap-4">
              <p className="text-sm font-normal text-brand-text pt-8 text-center"> A visual identity designer creates visual elements, such as logos, color palettes and typography, to represent a brand&apos;s personality and ensure consistent visual communication across various media. </p>
              <LiaAngleUpSolid className="text-brand-primary cursor-pointer" expanded={expanded} onClick={() => setExpanded(!expanded)} />
            </div>
          )}
        </div>
      </>
    );
};