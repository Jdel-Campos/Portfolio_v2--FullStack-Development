"use client"

import Image from "next/image"
import { Carousel } from 'react-responsive-carousel';
import React, { useEffect, useRef, useState } from 'react';
import FeedbackImage from "../../../public/imageFeedback.svg"
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import FeedbackCard from "./feedback_card";



export default function SlideFeedbackCard() {   
    return (
      <> 
       <div id="feedback" className="px-120px flex gap-16 h-screen justify-center items-center">
            <div className="flex flex-col gap-4 justify-center items-center">
              <FeedbackCard />
            </div>
        </div>
      </>
    )
};