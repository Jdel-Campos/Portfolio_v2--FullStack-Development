import ProjectCard from "@/components/cards/project_card/project_card"
import FooterPage from "@/components/footer/footer"
import SimpleHeader from "@/components/headers/simple_header"
import { LiaBehance, LiaDribbble, LiaGithub } from "react-icons/lia"
import { PiAirplay } from "react-icons/pi"
import { LiaPlayCircleSolid } from "react-icons/lia"


export default function ProjectDetail() {

    return (
        <>
            <SimpleHeader />
            <div className="px-300px pt-163px flex flex-col items-center">
                <h2 className="font-semibold text-2xl text-brand-primary pb-20"> Project Title</h2>
                <div className="w-full h-300px bg-brand-accent"></div>
                <h4 className="text-justify font-normal text-brand-text pt-20"> This project was developed to check my level of knowledge as a Full Stack developer. Because through this project Kenzie academy could find out if I was able to receive the Full Stack developer certificate. I used tools that I hadn&apos;t used before, mainly on the backend side, which gave me a greater learning experience, as it added another tool to the development of my codes. </h4>
                <div className="pt-20">
                    <h3 className="font-semibold text-xl pb-8 text-brand-primary"> Process and Methodology </h3>
                    <p className="text-justify font-normal text-brand-text">
                        As this project was to test my skills, I only received the layout of the project in figma. From there I had to diagram the database, which was the first part of the project. I needed to see what I would need and how each field in the layout would communicate with each other.
                        After that, I went on to choose the tools I was going to use in the application. To create the database, I opted to use Nest.js, which we had seen the same week.
                        I chose it because I felt a greater affinity with it as I learned. I also used the Prisma tool to create the database and make all the links between the application. Cloudnary was also used to store the photos needed for the application. And for the backend I basically used these tools.
                        As for the frontend, I chose to use the tools I&apos;ve already been using, which were Next.js, Tailwind
                        After choosing the tools, it was time to get down to work and develop all the code. As you might expect, I ended up taking a little longer on the backend, as I don&apos;t have much experience with the frontend, but nothing I couldn&apos;t develop.
                        After the backend was all ready and functional, it was on to the front end to give my Motor shop that top design, and to make all the interactions between the client and the database. And to finish off, I put in all the instruction messages I needed to direct the user correctly while he was browsing and enjoying the page.</p>
                </div>
                <div className="pt-20">
                    <h3 className="font-semibold text-xl text-brand-primary pb-8"> Learnings and Reflections </h3>
                    <p className="text-justify font-normal text-brand-text">
                        What I learned from this application is that even when working with various frameworks and tools, one will always be very different from the other. I say this because I felt a lot of difference when using Nest.js compared to Python. 
                        But in any case, I&apos;m still at the beginning of my journey and I need to learn a lot to be able to evolve and reach the level I want.
                        Apart from that, I was able to learn how to use Prisma because it was the first time I worked with it and Cloudnary, which I liked a lot and which I later used to build my portfolio.</p>
                </div>
                <div className="pt-20 w-full">
                    <p className="text-justify font-normal text-brand-text pb-4"> The following tools were used to develop this project: </p>
                    <div className="flex gap-4">
                        <div className="border rounded-full px-3 py-1 text-brand-background bg-brand-primary font-medium">React.js</div>
                        <div className="border rounded-full px-3 py-1 text-brand-background bg-brand-primary font-medium">Next.js</div>
                        <div className="border rounded-full px-3 py-1 text-brand-background bg-brand-primary font-medium">Typescript</div>
                        <div className="border rounded-full px-3 py-1 text-brand-background bg-brand-primary font-medium">Nest.js</div>
                        <div className="border rounded-full px-3 py-1 text-brand-background bg-brand-primary font-medium">Prisma</div>
                        <div className="border rounded-full px-3 py-1 text-brand-background bg-brand-primary font-medium">Tailwind</div>

                    </div>
                </div>
                <div className="flex gap-4 pt-20 w-full items-center">
                    <h4 className="font-semibold text-xl text-brand-primary">You can find this project here:</h4>
                    <div className="flex gap-4">
                        {'project.urlBehance' ? (
                            <a href="" target="_blank"> <LiaBehance className="text-3xl text-brand-primary hover:border-b hover:border-brand-primary"/> 
                            </a> ) : ( <LiaBehance className="text-3xl text-silver-chalice-neutral-300"/> )}
                        {'project.urlDribbble' ? (
                            <a href="" target="_blank"> <LiaDribbble className="text-3xl text-brand-primary hover:border-b hover:border-brand-primary"/>
                            </a> ) : ( <LiaDribbble className="text-3xl text-silver-chalice-neutral-300"/> )}
                        {'project.urlGithub' ? (
                            <a href="" target="_blank"> <LiaGithub className="text-3xl text-brand-primary hover:border-b hover:border-brand-primary"/>
                            </a> ) : ( <LiaGithub className="text-3xl text-silver-chalice-neutral-300"/> )}
                        {'project.urlVercel' ? (
                            <a href="" target="_blank"> <PiAirplay className="text-3xl text-brand-primary hover:border-b hover:border-brand-primary"/> 
                            </a> ) : ( <PiAirplay className="text-3xl text-silver-chalice-neutral-300"/>)}
                    </div>
                </div>
                <div className="pt-32 pb-40 w-full flex flex-col gap-8 ">
                    <div className="w-full h-300px  bg-brand-background border border-brand-primary rounded-lg"></div>
                    <div className="w-full h-450px bg-brand-background border border-brand-primary rounded-lg flex justify-center items-center">
                        <LiaPlayCircleSolid className="text-6xl text-brand-primary"/>
                    </div>
                </div>

            </div>
            <FooterPage />
        </>
    )
  };