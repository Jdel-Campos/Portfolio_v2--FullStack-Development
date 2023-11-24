"use client"

import Link from "next/link";
import { LiaGithub, LiaArrowLeftSolid } from "react-icons/lia"
import { SiAirplayvideo } from 'react-icons/si';
import AppFooter from "@/components/footer/section_footer"


export default function AppProjects() {

    return (
        <>
            <div className=" bg-text-color-masala-50">
                <Link href="/" className="h-20 w-96 flex items-center gap-4 px-20 text-text-color-masala-500 hover:text-neutral-color-silver-chalice-400">
                    <LiaArrowLeftSolid  className='text-3xl '/>
                    <p> Back to homepage </p>
                </Link>

                <div className="flex flex-wrap justify-center gap-7 py-[90px] ">
                    <div className='w-[580px] border-2 border-text-color-masala-400 p-8 pt-16 flex flex-col gap-4 rounded-2xl relative'>
                        <div className='flex flex-row w-full items-center justify-end gap-10 absolute top-8 right-8'>
                            <Link href={'GitHubLink'} >
                                <LiaGithub className='text-2xl text-neutral-color-silver-chalice-900 hover:text-neutral-color-silver-chalice-500 hover:border-b hover:border-neutral-color-silver-chalice-500'/>
                            </Link>
                            <Link href={'VercelLink'} >
                                <SiAirplayvideo className=' text-xl text-neutral-color-silver-chalice-900 hover:text-neutral-color-silver-chalice-500 hover:border-b hover:border-neutral-color-silver-chalice-500'/>
                            </Link>
                        </div>
                        <div className='flex flex-col items-center gap-8'>
                            <div className="flex gap-2 justify-center relative">
                                <h3 className='text-justify font-semibold text-xl z-20 text-brand-primary'> My Portfolio </h3>
                                <div className="border absolute w-32 h-3 top-4 -left-3 border-brand-accent bg-brand-accent opacity-50"></div>
                            </div>
                            <p className='text-justify text-sm text-brand-text'>In this project, I sought to create a simple and minimalist experience, conveying my style and level of work. I avoided visual overload by keeping a clean approach. I&apos;ve directed technical details to specific pages, serving both those interested in detailed information and those wanting an overview.</p>
                            <div className='flex w-full flex-wrap justify-center gap-4 text-justify text-sm italic font-bold text-brand-primary'>
                                <p >React.js</p>
                                <p >Next.js</p>
                                <p >Tailwind CSS</p>
                                <p >Typescript</p>
                                <p >HTML</p>
                            </div>
                        </div>
                    </div>
                    <div className='w-[580px] border-2 border-text-color-masala-400 p-8 pt-16 flex flex-col gap-4 rounded-2xl relative'>
                        <div className='flex flex-row w-full items-center justify-end gap-10 absolute top-8 right-8'>
                            <Link href="https://github.com/WeGreen/WeGreen_ProjetoFinal.git" target="_blank">
                                <LiaGithub className='text-2xl text-neutral-color-silver-chalice-900 hover:text-neutral-color-silver-chalice-500 hover:border-b hover:border-neutral-color-silver-chalice-500'/>
                            </Link>
                            <Link href="https://we-green-projeto-final.vercel.app/" target="_blank">
                                <SiAirplayvideo className=' text-xl text-neutral-color-silver-chalice-900 hover:text-neutral-color-silver-chalice-500 hover:border-b hover:border-neutral-color-silver-chalice-500'/>
                            </Link>
                        </div>
                        <div className='flex flex-col items-center gap-8'>
                            <div className="flex gap-2 justify-center relative">
                                <h3 className='text-justify font-semibold text-xl z-20 text-brand-primary'> WeGreen </h3>
                                <div className="border absolute w-32 h-3 top-4 -left-3 border-brand-accent bg-brand-accent opacity-50"></div>
                            </div>
                            <p className='text-justify text-sm text-brand-text'>I played the role of Scrum Master in the creation of a management system for a community garden, including an educational blog.</p>
                            <div className='flex w-full flex-wrap justify-center gap-4 text-justify text-sm italic font-bold text-brand-primary'>
                                <p >React.js</p>
                                <p >Axios</p>
                                <p >Styled-Components</p>
                                <p >Typescript</p>
                                <p >Zod</p>
                                <p >React-Toastify</p>
                            </div>
                        </div>
                    </div>
                    <div className='w-[580px] border-2 border-text-color-masala-400 p-8 pt-16 flex flex-col gap-4 rounded-2xl relative'>
                        <div className='flex flex-row w-full items-center justify-end gap-10 absolute top-8 right-8'>
                            <Link href="https://github.com/Kenzie-Academy-Brasil-Developers/kenzie-burguer-v2-template-jdel-campos.git" >
                                <LiaGithub className='text-2xl text-neutral-color-silver-chalice-900 hover:text-neutral-color-silver-chalice-500 hover:border-b hover:border-neutral-color-silver-chalice-500'/>
                            </Link>
                            <Link href="https://kenzie-burguer-v2-template-jdel-campos.vercel.app/" >
                                <SiAirplayvideo className=' text-xl text-neutral-color-silver-chalice-900 hover:text-neutral-color-silver-chalice-500 hover:border-b hover:border-neutral-color-silver-chalice-500'/>
                            </Link>
                        </div>
                        <div className='flex flex-col items-center gap-8'>
                            <div className="flex gap-2 justify-center relative">
                                <h3 className='text-justify font-semibold text-xl z-20 text-brand-primary'> Kenzie Burger V2 </h3>
                                <div className="border absolute w-32 h-3 top-4 -left-3 border-brand-accent bg-brand-accent opacity-50"></div>
                            </div>
                            <p className='text-justify text-sm text-brand-text'>This was the second version of Kenzie Burger, where the login and token verification system for customer navigation was implemented.</p>
                            <div className='flex w-full flex-wrap justify-center gap-4 text-justify text-sm italic font-bold text-brand-primary'>
                                <p >React.js</p>
                                <p >Axios</p>
                                <p >Styled-Components</p>
                                <p >Typescript</p>
                                <p >JWT-decode</p>
                                <p >React-icons</p>
                                <p >React-Toastify</p>
                            </div>
                        </div>
                    </div>
                    <div className='w-[580px] border-2 border-text-color-masala-400 p-8 pt-16 flex flex-col gap-4 rounded-2xl relative'>
                        <div className='flex flex-row w-full items-center justify-end gap-10 absolute top-8 right-8'>
                            <Link href="https://github.com/Kenzie-Academy-Brasil-Developers/react-entrega-kenzie-hub-jdel-campos.git" >
                                <LiaGithub className='text-2xl text-neutral-color-silver-chalice-900 hover:text-neutral-color-silver-chalice-500 hover:border-b hover:border-neutral-color-silver-chalice-500'/>
                            </Link>
                            <Link href="https://react-entrega-kenzie-hub-jdel-campos.vercel.app/" >
                                <SiAirplayvideo className=' text-xl text-neutral-color-silver-chalice-900 hover:text-neutral-color-silver-chalice-500 hover:border-b hover:border-neutral-color-silver-chalice-500'/>
                            </Link>
                        </div>
                        <div className='flex flex-col items-center gap-8'>
                            <div className="flex gap-2 justify-center relative">
                                <h3 className='text-justify font-semibold text-xl z-20 text-brand-primary'> Kenzie Hub </h3>
                                <div className="border absolute w-32 h-3 top-4 -left-3 border-brand-accent bg-brand-accent opacity-50"></div>
                            </div>
                            <p className='text-justify text-sm text-brand-text'>I developed an educational registration control system, allowing students&apos; skills and levels of experience to be recorded.</p>
                            <div className='flex w-full flex-wrap justify-center gap-4 text-justify text-sm italic font-bold text-brand-primary'>
                                <p >React.js</p>
                                <p >Axios</p>
                                <p >Styled-components</p>
                                <p >Typescript</p>
                                <p >Zod</p>
                                <p >JWT-decode</p>
                                <p >React-Toastify</p>
                            </div>
                        </div>
                    </div>
                    <div className='w-[580px] border-2 border-text-color-masala-400 p-8 pt-16 flex flex-col gap-4 rounded-2xl relative'>
                        <div className='flex flex-row w-full items-center justify-end gap-10 absolute top-8 right-8'>
                            <Link href="https://github.com/Kenzie-Academy-Brasil-Developers/react-entrega-s1-template-nu-kenzie-jdel_campos.git" >
                                <LiaGithub className='text-2xl text-neutral-color-silver-chalice-900 hover:text-neutral-color-silver-chalice-500 hover:border-b hover:border-neutral-color-silver-chalice-500'/>
                            </Link>
                            <Link href="https://react-entrega-s1-template-nu-kenzie-jdel-campos.vercel.app/" >
                                <SiAirplayvideo className=' text-xl text-neutral-color-silver-chalice-900 hover:text-neutral-color-silver-chalice-500 hover:border-b hover:border-neutral-color-silver-chalice-500'/>
                            </Link>
                        </div>
                        <div className='flex flex-col items-center gap-8'>
                            <div className="flex gap-2 justify-center relative">
                                <h3 className='text-justify font-semibold text-xl z-20 text-brand-primary'> NuKenzie </h3>
                                <div className="border absolute w-32 h-3 top-4 -left-3 border-brand-accent bg-brand-accent opacity-50"></div>
                            </div>
                            <p className='text-justify text-sm text-brand-text'>I created a financial control system to manage my income and expenses.</p>
                            <div className='flex w-full flex-wrap justify-center gap-4 text-justify text-sm italic font-bold text-brand-primary'>
                                <p >React.js</p>
                                <p >React-dom</p>
                                <p >Uuid</p>
                                <p >Typescript</p>
                            </div>
                        </div>
                    </div>
                    <div className='w-[580px] border-2 border-text-color-masala-400 p-8 pt-16 flex flex-col gap-4 rounded-2xl relative'>
                        <div className='flex flex-row w-full items-center justify-end gap-10 absolute top-8 right-8'>
                            <Link href="https://github.com/Kenzie-Academy-Brasil-Developers/react-entrega-template-hamburgueria-da-kenzie-jdel-campos.git" >
                                <LiaGithub className='text-2xl text-neutral-color-silver-chalice-900 hover:text-neutral-color-silver-chalice-500 hover:border-b hover:border-neutral-color-silver-chalice-500'/>
                            </Link>
                            <Link href="https://react-entrega-template-hamburgueria-da-kenzie-jdel-campos.vercel.app/" >
                                <SiAirplayvideo className=' text-xl text-neutral-color-silver-chalice-900 hover:text-neutral-color-silver-chalice-500 hover:border-b hover:border-neutral-color-silver-chalice-500'/>
                            </Link>
                        </div>
                        <div className='flex flex-col items-center gap-8'>
                            <div className="flex gap-2 justify-center relative">
                                <h3 className='text-justify font-semibold text-xl z-20 text-brand-primary'> Kenzie&apos;s Hamburger </h3>
                                <div className="border absolute w-32 h-3 top-4 -left-3 border-brand-accent bg-brand-accent opacity-50"></div>
                            </div>
                            <p className='text-justify text-sm text-brand-text'>The first part of the Kenzie Hamburger project was developed, where the entire layout and the main logic were developed.</p>
                            <div className='flex w-full flex-wrap justify-center gap-4 text-justify text-sm italic font-bold text-brand-primary'>
                                <p >React.js</p>
                                <p >Axios</p>
                                <p >Styled-components</p>
                                <p >Typescript</p>
                                <p >React-Toastify</p>
                                <p >Uuid</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <AppFooter />
        </>
    )
  };