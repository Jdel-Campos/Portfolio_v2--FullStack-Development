"use client"

import SectionHeader from "@/components/header/section_header"
import SectionHome from "@/components/home/section_home"
import SectionSkill from "@/components/skill/section_skill"
import SectionProject from "@/components/project/section_project"
import SectionFooter from "@/components/footer/section_footer"

import { LiaArrowCircleUpSolid } from "react-icons/lia";
import Link from 'next/link';


export default function Home() {

    return (
        <main className='relative'>
            <Link href='#header' className="z-50">
                <LiaArrowCircleUpSolid  className="fixed text-5xl bottom-10 right-14 text-brand-secondary z-50"/>
            </Link>
            <SectionHeader  />
            <SectionHome />
            <SectionSkill />
            <SectionProject />
            <SectionFooter />
        </main>
    )
};