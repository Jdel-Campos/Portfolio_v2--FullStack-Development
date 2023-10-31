"use client"

import { LiaBehance, LiaDribbble, LiaGithub } from "react-icons/lia";
import { PiAirplay } from "react-icons/pi";

export default function ProjectCard() {
  return (
    <>
    <div className="w-380px px-8 pt-16 pb-4 flex flex-col gap-8 border border-silver-chalice-neutral-200 rounded-xl relative">
        <div className="flex items-center justify-center px-2 py-1 border rounded-bl-xl rounded-tr-xl h-8 w-40 absolute top-0 right-0 border-brand-accent bg-brand-accent"> 
            <p className="text-sm font-medium italic"> Project Full Stack </p>
        </div>
        <a href="" className="hover:opacity-75">
            <div className="flex gap-2 justify-center relative">
                <h3 className="italic font-semibold text-xl text-brand-text z-20"> My Portfolio </h3>
                <div className="flex items-center justify-center border absolute w-32 h-3 top-4 left-20 border-brand-accent bg-brand-accent opacity-50"></div>
            </div>
        </a>
        
        <div className="flex flex-col items-center gap-4"> 
            <div>
                <div className="border w-229px h-163px bg-silver-chalice-neutral-400 rounded-xl"></div>
            </div>
            <div className="flex gap-2">
                <div className="border rounded-full h-1 w-4 border-silver-chalice-neutral-400 bg-silver-chalice-neutral-400"></div>
                <div className="border rounded-full h-1 w-4 border-silver-chalice-neutral-400 bg-silver-chalice-neutral-400"></div>
                <div className="border rounded-full h-1 w-6 border-mine-shaft-primary-800 bg-mine-shaft-primary-800"></div>
                <div className="border rounded-full h-1 w-4 border-silver-chalice-neutral-400 bg-silver-chalice-neutral-400"></div>
                <div className="border rounded-full h-1 w-4 border-silver-chalice-neutral-400 bg-silver-chalice-neutral-400"></div>
            </div>
        </div>

        <div className="text-justify text-sm font-normal text-brand-text"> In this project, I sought to create a simple and minimalist experience, conveying my style and level of work. I avoided visual overload by keeping a clean approach. I&apos;ve directed technical details to specific pages, serving both those interested in detailed information and those wanting an overview. </div>
        
        <div className="flex justify-between">
            <div className="flex gap-2">
                {'project.urlBehance' ? (
                    <a href="" target="_blank"> <LiaBehance className="text-2xl text-brand-primary hover:border-b hover:border-brand-primary"/> 
                    </a> ) : ( <LiaBehance className="text-2xl text-silver-chalice-neutral-300"/> )}
                {'project.urlDribbble' ? (
                    <a href="" target="_blank"> <LiaDribbble className="text-2xl text-brand-primary hover:border-b hover:border-brand-primary"/>
                    </a> ) : ( <LiaDribbble className="text-2xl text-silver-chalice-neutral-300"/> )}
                {'project.urlGithub' ? (
                    <a href="" target="_blank"> <LiaGithub className="text-2xl text-brand-primary hover:border-b hover:border-brand-primary"/>
                    </a> ) : ( <LiaGithub className="text-2xl text-silver-chalice-neutral-300"/> )}
                {'project.urlVercel' ? (
                    <a href="" target="_blank"> <PiAirplay className="text-2xl text-brand-primary hover:border-b hover:border-brand-primary"/> 
                    </a> ) : ( <PiAirplay className="text-2xl text-silver-chalice-neutral-300"/>)}
            </div>

            <div className="text-brand-primary font-medium italic"> 
                <a href="" className="hover:underline hover:opacity-75"> Know more </a> 
            </div>
        </div>
    </div>
    </>
  );
};