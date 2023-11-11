"use client"

import Image from "next/image"
import { Carousel } from 'react-responsive-carousel';
import React, { useEffect, useRef, useState } from 'react';
import FeedbackImage from "../../../public/imageFeedback.svg"
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import FeedbackCard from "../cards/feedback_card/feedback_card";


export default function FeedbackPage() {   
    return (
      <> 
       <div id="feedback" className="px-120px flex gap-16 h-screen justify-center items-center">
          <Image src={FeedbackImage} alt={""} />
            <div className="flex flex-col gap-4 justify-center items-center">
              <FeedbackCard />
            </div>
        </div>
      </>
    )
};

 
{/*     return (
      <> 
       <div id="feedback" className="px-120px flex gap-16 h-screen justify-center items-center">
          <Image src={FeedbackImage} alt={""} />
 <Carousel infiniteLoop={true} autoPlay={true} showArrows={true} showStatus={false} showIndicators={false} className=" w-2/3 flex flex-col items-center justify-center">
            <div className="flex flex-col gap-4 justify-center items-center">
              <FeedbackCard />
            </div>
         <FeedbackCard /> 
            <div className="flex flex-col gap-4 justify-center items-center">
              <FeedbackCard />
            <FeedbackCard /> 
            </div>
            <div className="flex flex-col gap-4 justify-center items-center">
              <FeedbackCard />
            <FeedbackCard /> 
            </div>
       </Carousel>

        </div>
      </>
    ) */}