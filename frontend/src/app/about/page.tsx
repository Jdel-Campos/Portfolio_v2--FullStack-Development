import FooterPage from "@/components/footer/footer"
import MainHeader from "@/components/headers/main_header"
import { FaRegFilePdf } from "react-icons/fa"

export default function AboutPage() {

    return (
        <>
            <MainHeader />
            <div id="about me" className="w-full h-screen">
                <div className=""></div>
                <div>
                    <h3>About me</h3>
                    <p>
                        Hi, I&apos;m Jardel Campos, a passionate user interface (UI) designer and web developer.
                        My affinity with technology goes back to childhood, when I was just a curious kid who loved taking apart my cars to explore their electronic parts. However, at the time, I had no idea that I could turn this passion into my career.
                        My journey into the world of technology began to take shape in mid-2016, when I decided that I wanted to work online and make a difference to people&apos;s lives. However, I still hadn&apos;t found my true passion.
                        It was only last year (2022) that I made the decision to make a career transition. Initially, I ventured into full-stack development, but it was on the front-end that I discovered UI design. This combination of passions made my eyes light up and showed me exactly what I was looking for. Since then, I&apos;ve been working to unite these two passions, allowing me to create engaging and functional digital experiences while transforming people&apos;s lives.
                        My relentless pursuit of excellence in the field of design and development leads me to constantly explore the latest. I&apos;m immersed in books, biographies, articles and often films that explore brand representation and digital content, keeping me up to date.
                        I&apos;m a dedicated professional, eager to take on new challenges in the job market. At the same time, I&apos;m committed to improving my skills through freelance projects, which allow me to continually learn and grow.
                        I believe that design is a powerful tool for improving people&apos;s lives. I am determined to create attractive, accessible and functional solutions. When I&apos;m not working on projects, you can find me in the park, in a library or coffee shop, soaking up knowledge in inspiring books, at the gym or playing sports. These activities keep my creativity going.
                        I&apos;m always on the lookout for new and exciting opportunities in the field of design and development. If you&apos;re interested in collaborating on inspiring projects or want to exchange ideas, don&apos;t hesitate to get in touch. Let&apos;s create something amazing together!
                    </p>
                </div>
                <div>
                    <h3> Courses and colleges </h3>
                    <h4> Curses </h4>
                    <p> UX/UI Designer - Imagine School - jun 2023 - mar 2024 </p>
                    <p> FullStack Developer - Kenzie Academy Brasil - nov 2022 - nov 2023 </p>
                    <p> Start Graphic Course | Graphic Design for Beginners - aug 2023 - nov 2023 </p>                    
                </div>
                <div>
                    <h3>Workplaces</h3>
                    <p>
                        I&apos;m a dedicated recent graduate, eager to explore new opportunities in the job market. As I search for my next professional challenge, I&apos;m committed to honing my skills through freelance projects.
                    </p>
                </div>
                <div className=" flex flex-col items-center pt-16">
                <p className="font-semibold text-lg underline decoration-brand-text text-brand-text"> Would you like to see my CV? </p>
                <div className="flex gap-2 hover:opacity-75">
                    <a href="" className="text-sm font-medium italic text-brand-primary"> Download here. </a>
                    <FaRegFilePdf className="text-brand-primary "/>
                </div>
            </div>
            </div>
            <FooterPage />
        </>
    )
  };