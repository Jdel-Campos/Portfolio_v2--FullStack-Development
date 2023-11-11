import ProjectCard from "@/components/cards/project_card/project_card"
import FooterPage from "@/components/footer/footer"
import ProjectHeader from "@/components/headers/project_header"
import { HiOutlineInformationCircle } from "react-icons/hi"


export default function ProjectsPage() {

    return (
        <>
            <ProjectHeader />
            <div className="px-120px w-full pt-40">
                <article className="border px-8 w-full h-40 justify-center flex flex-col gap-4 ">
                    <div className="flex gap-8 border-b-2 items-center pb-4">
                        <HiOutlineInformationCircle className="text-red-800 text-3xl"/>
                        <p className="text-red-800 text-xl font-semibold">Attention</p>
                    </div>
                    <div className="message-body">
                        The search filters are still under construction. As I needed a faster portfolio for job applications, I had to leave some things for the next update. What&apos;s happening at the moment. Thanks for your understanding.
                    </div>
                </article>
            </div>
            <div className="px-120px py-56 flex flex-wrap justify-center gap-7">
                <ProjectCard />
                <ProjectCard />
                <ProjectCard />
                <ProjectCard />
                <ProjectCard />
                <ProjectCard />
                <ProjectCard />
                <ProjectCard />
                <ProjectCard />
                <ProjectCard />
                <ProjectCard />
                <ProjectCard />
                <ProjectCard />
                <ProjectCard />
                <ProjectCard />
                <ProjectCard />
                <ProjectCard />
            </div>
            <FooterPage />
        </>
    )
  };