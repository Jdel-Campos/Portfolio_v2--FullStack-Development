"use client"

import Link from "next/link"

export default function SimpleHeader() {
  return (
    <>
        <header className="h-20 w-screen flex items-center justify-center bg-silver-chalice-neutral-50 fixed z-50" >
                <nav className="w-full px-300px text-mine-shaft-primary-500">
                    <ul className="w-full flex flex-row gap-8 justify-around" >
                        <li> 
                            <Link href="/">
                                <div className="hover:text-mine-shaft-primary-300 hover:underline"> Home </div>
                            </Link>
                        </li>
                        <li> 
                            <Link href="/projects">
                                <div className="hover:text-mine-shaft-primary-300 hover:underline"> Back to projects </div>
                            </Link>
                        </li>
                    </ul>
                </nav>
        </header>
    </>
  );
};