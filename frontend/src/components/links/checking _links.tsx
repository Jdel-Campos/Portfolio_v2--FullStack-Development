"use client"

import Link from 'next/link';
import { LiaBehance, LiaDribbble, LiaGithub } from 'react-icons/lia';
import { PiAirplay } from 'react-icons/pi';


export default function CheckingLinks() {

    return (
        <>
            <div className="flex justify-between">
                <div className="flex gap-2">
                    {'project.urlBehance' ? (
                            <a href="" target="_blank"> <LiaBehance className="text-2xl text-brand-primary hover:border-b hover:border-brand-primary"/> 
                            </a> ) : ( <LiaBehance className="text-2xl text-silver-chalice-neutral-300"/> )}
                    {'project.urlDribbble' ? (
                            <a href="" target="_blank"> <LiaDribbble className="text-2xl text-brand-primary hover:border-b hover:border-brand-primary"/>
                            </a> ) : ( <LiaDribbble className="text-2xl text-silver-chalice-neutral-300"/> )}
                    {'project.urlGithub' ? (
                            <a href="" target="_blank"> <LiaGithub className="text-2xl text-brand-primary hover:border-b hover:border-brand-primary"/>
                            </a> ) : ( <LiaGithub className="text-2xl text-silver-chalice-neutral-300"/> )}
                    {'project.urlVercel' ? (
                            <a href="" target="_blank"> <PiAirplay className="text-2xl text-brand-primary hover:border-b hover:border-brand-primary"/> 
                            </a> ) : ( <PiAirplay className="text-2xl text-silver-chalice-neutral-300"/>)}
                </div>

                <div className="text-brand-primary font-medium italic"> 
                    <Link href="" className="hover:underline hover:opacity-75"> Know more </Link> 
                </div>
            </div>
        </>
    );
};