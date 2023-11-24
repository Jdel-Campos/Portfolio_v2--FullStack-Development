import { FaRegFilePdf } from "react-icons/fa"
import { PiCertificate, PiWarningCircleThin } from "react-icons/pi"
import { HiOutlineInformationCircle } from "react-icons/hi"
import AppFooter from "@/components/footer/section_footer"
import SectionHeader from "@/components/header/section_header"


export default function AppAboutMe () {

    return (
        <>  
            <SectionHeader  />
            <div id="about me" className="w-full h-full px-250px py-28 flex flex-col gap-24 items-center justify-center bg-text-color-masala-50" >
                <div className="flex flex-col gap-8">
                    <h3 className="text-brand-secondary font-semibold text-xl">About me</h3>
                    <p className="text-justify font-normal text-brand-text">
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
                <div className="w-full flex flex-col gap-8 items-start">
                    <h3 className="text-brand-secondary font-semibold text-xl"> Courses and colleges </h3>
                    <div className="flex flex-col gap-4 pl-4">
                        <h4 className="text-brand-secondary font-semibold"> Curses </h4>
                        <div>
                            <div className="flex gap-2 pl-4 items-center">
                                <PiCertificate className="text-brand-secondary text-2xl"/>
                                <p className="text-justify font-normal text-brand-text"> UX/UI Designer - Imagine School - jun 2023 - mar 2024 </p>
                            </div>
                            <div className="flex gap-2 pl-4 items-center">
                                <PiCertificate className="text-brand-secondary text-2xl"/>
                                <p className="text-justify font-normal text-brand-text"> FullStack Developer - Kenzie Academy Brasil - nov 2022 - nov 2023 </p>
                            </div>
                            <div className="flex gap-2 pl-4 items-center">
                                <PiCertificate className="text-brand-secondary text-2xl"/>
                                <p className="text-justify font-normal text-brand-text"> Start Graphic Course - Graphic Design for Beginners - aug 2023 - nov 2023 </p>                    
                            </div>
                        </div>
                    </div>
                    <div className="flex flex-col gap-4 pl-4">
                        <h4 className="text-brand-primary font-semibold"> College </h4>
                        <div className="border px-4 w-full h-16 flex justify-center items-center">
                            <div className="flex gap-2 items-center">
                                <HiOutlineInformationCircle className="text-semantics-attachment-thunderbird text-2xl"/>
                                <p className="text-justify font-normal text-brand-text"> Unfortunately, I don&apos;t have a university degree yet, but I&apos;m pursuing this achievement. </p>
                            </div>
                        </div>
                </div>

                </div>
                <div className="flex flex-col gap-8">
                    <h3 className="text-brand-secondary font-semibold text-xl">Workplaces</h3>
                    <p className="text-justify font-normal text-brand-text">
                        I&apos;m a dedicated recent graduate, eager to explore new opportunities in the job market. As I search for my next professional challenge, I&apos;m committed to honing my skills through freelance projects.
                    </p>
                </div>
                <div className="w-full flex flex-col items-center pt-16">
                    <p className="font-semibold text-base underline decoration-brand-text text-brand-text"> Would you like to see my CV? </p>
                    <div className="flex gap-2 hover:opacity-75">
                        <a href="https://acrobat.adobe.com/link/review?uri=urn:aaid:scds:US:8f6d39c3-2b40-3ea1-bb3c-060524e34a20" target="_blank" className="text-sm font-medium italic text-brand-secondary"> Download here. </a>
                        <FaRegFilePdf className="text-brand-secondary "/>
                    </div>
                </div>
            </div>
            < AppFooter />
        </>
    )
};