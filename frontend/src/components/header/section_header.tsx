"use client"

import Link from 'next/link';


export default function SectionHeader() {    

    return (
        <>
            <header id='header' className="h-20 w-full flex items-center justify-end px-20 border bg-neutral-color-silver-chalice-50 relative shadow-lg">
                <div>
                    <nav className="flex justify-end items-end z-50">
                        <ul className="flex flex-row gap-8 justify-end items-end text-text-color-masala-500 ">
                            <li className="border-neutral-color-silver-chalice-50 hover:text-neutral-color-silver-chalice-400 border-b hover:border-neutral-color-silver-chalice-400">
                                <Link href='#home'>
                                    <div> 
                                        <p> Home </p>
                                    </div>
                                </Link>
                            </li>
                            <li className="border-neutral-color-silver-chalice-50 hover:text-neutral-color-silver-chalice-400 border-b hover:border-neutral-color-silver-chalice-400">
                                <Link href='#skill'>
                                    <div> 
                                        <p> Skill </p>
                                    </div>
                                </Link>
                            </li>
                            <li className="border-neutral-color-silver-chalice-50 hover:text-neutral-color-silver-chalice-400 border-b hover:border-neutral-color-silver-chalice-400">
                                <Link href='#project'>
                                    <div> 
                                        <p> Project </p>
                                    </div>
                                </Link>
                            </li>
                            <li className="border-neutral-color-silver-chalice-50 hover:text-neutral-color-silver-chalice-400 border-b hover:border-neutral-color-silver-chalice-400">
                                <Link href='/about_me'>
                                    <div> 
                                        <p> About me </p>
                                    </div>
                                </Link>
                            </li>
                        </ul>
                    </nav>
                </div>
            </header>
        </>
    );
};