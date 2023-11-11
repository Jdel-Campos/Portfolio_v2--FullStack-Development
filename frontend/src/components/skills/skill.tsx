import { LiaBehance, LiaDribbble, LiaEnvelope, LiaExternalLinkAltSolid, LiaGithub, LiaLinkedinIn, LiaWhatsapp } from "react-icons/lia";
import SkillCard from "../cards/skill_card/skill_card";
import Link from "next/link";

export default function SkillPage() {

    return (
      <>
        <div className="flex flex-col justify-around">
            <div id="skills" className="h-766px flex flex-col relative">
                <div className="w-full h-380px bg-brand-primary flex flex-col items-center gap-8">
                    <div className="px-120px pt-24 text-center">
                        <p className="text-center text-brand-background font-medium"> I am a technology and design enthusiast, in Full Stack training and focused on UX/UI Design. </p>
                        <p className="text-center text-brand-background font-medium"> I developed projects with React, Next.js, TypeScript and Sass, and I have experience in agile methodologies, with Scrum as a Scrum Master. My passion is to combine programming with interface design, valuing simplicity, clean patterns and well-thought-out interactions. </p>
                    </div>
                    <div className="flex gap-4 text-2xl text-brand-background">
                            <a href="https://www.behance.net/jdelcampos" target="_blank"> <LiaBehance className="hover:border-b" /> </a>
                            <a href="https://dribbble.com/jdel_campos" target="_blank"> <LiaDribbble className="hover:border-b "/> </a>
                            <a href="https://github.com/Jdel-Campos" target="_blank"> <LiaGithub className="hover:border-b "/> </a>
                            <a href="https://www.linkedin.com/in/jdel-campos/" target="_blank"> <LiaLinkedinIn className="hover:border-b "/> </a>
                            <a href="mailto:campos.workspace@gmail.com" target="_blank"> <LiaEnvelope className="hover:border-b "/> </a>
                        </div>
                </div>
                <div className="relative bg-brand-background">
                <div className="flex justify-center absolute -top-24 inset-x-0">
                        <SkillCard />
                    </div>
                </div>
            </div>
            <div className=" flex flex-col items-center pt-16 pb-20">
                <p className="font-semibold text-lg underline decoration-brand-text text-brand-text"> Want to know more? </p>
                <div className="flex gap-2 hover:opacity-75">
                    <Link href="/about_me" className="text-sm font-medium italic text-brand-primary"> See more. </Link>
                    <LiaExternalLinkAltSolid className="text-brand-primary "/>
                </div>
            </div>
        </div>
      </>
    );
};