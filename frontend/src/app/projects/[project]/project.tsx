import ProjectCard from "@/components/cards/project_card/project_card"
import FooterPage from "@/components/footer/footer"
import SimpleHeader from "@/components/headers/simple_header"
import { LiaBehance, LiaDribbble, LiaGithub } from "react-icons/lia"
import { PiAirplay } from "react-icons/pi"
import { FaRegCirclePlay } from "react-icons/fa"


export default function ProjectsPage() {

    return (
        <>
            <SimpleHeader />
            <h2> Project Title</h2>
            <div></div>
            <h4> This project was developed to check my level of knowledge as a Full Stack developer. Because through this project Kenzie academy could find out if I was able to receive the Full Stack developer certificate. I used tools that I hadn&aspos;t used before, mainly on the backend side, which gave me a greater learning experience, as it added another tool to the development of my codes. </h4>
            <div>
                <h3> Process and Methodology </h3>
                <p>
                    As this project was to test my skills, I only received the layout of the project in figma. From there I had to diagram the database, which was the first part of the project. I needed to see what I would need and how each field in the layout would communicate with each other.
                    After that, I went on to choose the tools I was going to use in the application. To create the database, I opted to use Nest.js, which we had seen the same week.
                    I chose it because I felt a greater affinity with it as I learned. I also used the Prisma tool to create the database and make all the links between the application. Cloudnary was also used to store the photos needed for the application. And for the backend I basically used these tools.
                    As for the frontend, I chose to use the tools I&aspos;ve already been using, which were Next.js, Tailwind
                    After choosing the tools, it was time to get down to work and develop all the code. As you might expect, I ended up taking a little longer on the backend, as I don&aspos;t have much experience with the frontend, but nothing I couldn&aspos;t develop.
                    After the backend was all ready and functional, it was on to the front end to give my Motor shop that top design, and to make all the interactions between the client and the database. And to finish off, I put in all the instruction messages I needed to direct the user correctly while he was browsing and enjoying the page.</p>
            </div>
            <div>
                <h3> Learnings and Reflections </h3>
                <p>
                    What I learned from this application is that even when working with various frameworks and tools, one will always be very different from the other. I say this because I felt a lot of difference when using Nest.js compared to Python. 
                    But in any case, I&aspos;m still at the beginning of my journey and I need to learn a lot to be able to evolve and reach the level I want.
                    Apart from that, I was able to learn how to use Prisma because it was the first time I worked with it and Cloudnary, which I liked a lot and which I later used to build my portfolio.</p>
            </div>
            <div>
                <p> The following tools were used to develop this project: </p>
                <div>
                    <p>React.js</p>
                </div>
            </div>
            <div>
                <h4></h4>
                <div className="flex gap-2">
                    {'project.urlBehance' ? (
                        <a href="" target="_blank"> <LiaBehance className="text-2xl text-brand-primary hover:opacity-75"/> 
                        </a> ) : ( <LiaBehance className="text-2xl text-silver-chalice-neutral-300"/> )}
                    {'project.urlDribbble' ? (
                        <a href="" target="_blank"> <LiaDribbble className="text-2xl text-brand-primary hover:opacity-75"/>
                        </a> ) : ( <LiaDribbble className="text-2xl text-silver-chalice-neutral-300"/> )}
                    {'project.urlGithub' ? (
                        <a href="" target="_blank"> <LiaGithub className="text-2xl text-brand-primary hover:opacity-75"/>
                        </a> ) : ( <LiaGithub className="text-2xl text-silver-chalice-neutral-300"/> )}
                    {'project.urlVercel' ? (
                        <a href="" target="_blank"> <PiAirplay className="text-2xl text-brand-primary hover:opacity-75"/> 
                        </a> ) : ( <PiAirplay className="text-2xl text-silver-chalice-neutral-300"/>)}
                </div>
            </div>
            <div>
                <div></div>
                <div>
                    <FaRegCirclePlay />
                </div>
            </div>
            <FooterPage />
        </>
    )
  };