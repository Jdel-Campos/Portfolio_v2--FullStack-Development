"use client"

import Link from "next/link";
import ProjectCard from "../cards/project_card/project_card";
import { LiaExternalLinkAltSolid } from "react-icons/lia"


export default function ProjectPage() {

    return (
      <>
        <div id="projects" className=" flex flex-col items-center pb-20 relative bg-silver-chalice-neutral-50">
            <div className="flex items-center justify-center gap-16 w-3/4 h-36 rounded-2xl bg-camarone-secondary-100 absolute -top-8">
                <div className="flex flex-col gap-3 items-center">
                    <h3 className="text-xl font-medium text-brand-text"> All Projects </h3>
                    <p className="text-5xl font-bold text-brand-primary"> 48 </p>
                </div>
                <div className="flex flex-col gap-3 items-center">
                    <h3 className="text-xl font-medium text-brand-text"> In progress </h3>
                    <p className="text-5xl font-bold text-brand-primary"> 3 </p>
                </div>
                <div className="flex flex-col gap-3 items-center">
                    <h3 className="text-xl font-medium text-brand-text"> Design </h3>
                    <p className="text-5xl font-bold text-brand-primary"> 20 </p>
                </div>
                <div className="flex flex-col gap-3 items-center">
                    <h3 className="text-xl font-medium text-brand-text"> Developer </h3>
                    <p className="text-5xl font-bold text-brand-primary"> 18 </p>
                </div>
                <div className="flex flex-col gap-3 items-center">
                    <h3 className="text-xl font-medium text-brand-text"> Visual identity </h3>
                    <p className="text-5xl font-bold text-brand-primary"> 10 </p>
                </div>
            </div>

            <div className="px-120px pt-56 flex flex-wrap justify-center gap-7">
                <ProjectCard />
                <ProjectCard />
                <ProjectCard />
                <ProjectCard />
                <ProjectCard />
            </div>
            <div className=" flex flex-col items-center pt-16">
                <p className="font-semibold text-lg underline decoration-brand-text text-brand-text"> Did you like these? </p>
                <div className="flex gap-2 hover:opacity-75">
                    <Link href="/projects" className="text-sm font-medium italic text-brand-primary"> See more of my projects here. </Link>
                    <LiaExternalLinkAltSolid className="text-brand-primary "/>
                </div>
            </div>
        </div>
      </>
    );
  };