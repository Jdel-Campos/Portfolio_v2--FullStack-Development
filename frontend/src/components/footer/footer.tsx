"use client"

import Image from "next/image"
import { LiaCopyright, LiaBehance, LiaDribbble, LiaGithub, LiaEnvelope, LiaWhatsapp, LiaLinkedinIn  } from "react-icons/lia"
import MyImage from "../../../public/Frame 46.svg"


export default function FooterPage() {    
    return (
      <>
        <div id="contact" className="w-full h-screen flex flex-col gap-32 items-center justify-center bg-silver-chalice-neutral-50 border-t-2 px-120px py-16">
            <div className=" flex flex-col items-center gap-3">
                <h4 className="font-medium italic text-brand-text"> Want to collaborate? </h4>
                <a href="mailto:campos.workspace@gmail.com" target="_blank"> 
                    <div className="flex gap-2 justify-center relative">
                        <h3 className="italic font-medium text-4xl text-brand-secondary z-20"> Contact me! </h3>
                        <div className="border absolute w-56 h-5 top-6 -left-3 border-brand-accent bg-brand-accent opacity-50"></div>
                    </div>
                </a>
            </div>

            <div className="flex gap-16 h-48">
                <div className="flex flex-col items-center justify-between">
                    <Image src={MyImage} alt="A photo of me" width={120} height={120} />
                    <div className="flex flex-col items-center">
                        <h6 className="font-semibold text-brand-text italic"> Jardel Campos </h6>
                        <p className="text-sm font-medium italic text-mine-shaft-primary-500"> Designer & Developer </p>
                    </div>
                </div>
                <div className="h-full flex flex-col justify-between ">
                    <h4 className="font-medium italic text-brand-secondary"> Thank you for visiting my portfolio and I hope you enjoyed it! </h4>
                    <div className="flex flex-col gap-1 text-sm text-mine-shaft-primary-500 pl-3 border-l-2 border-brand-primary">
                        <p> “It was never luck, it was always God who guided me at the right times!” </p>
                        <p> “Everything is a matter of priority. Is your priority today your future tomorrow?” </p>
                    </div>
                    <div className="flex gap-4 text-2xl text-mine-shaft-primary-800">
                        <a href="https://www.behance.net/jdelcampos" target="_blank"> <LiaBehance className="hover:text-brand-primary hover:border-b hover:border-brand-primary" /> </a>
                        <a href="https://dribbble.com/jdel_campos" target="_blank"> <LiaDribbble className="hover:text-brand-primary hover:border-b hover:border-brand-primary"/> </a>
                        <a href="https://github.com/Jdel-Campos" target="_blank"> <LiaGithub className="hover:text-brand-primary hover:border-b hover:border-brand-primary"/> </a>
                        <a href="https://www.linkedin.com/in/jdel-campos/" target="_blank"> <LiaLinkedinIn className="hover:text-brand-primary hover:border-b hover:border-brand-primary"/> </a>
                        <a href="https://linkwhats.app/e732a5" target="_blank"> <LiaWhatsapp className="hover:text-brand-primary hover:border-b hover:border-brand-primary"/> </a>
                        <a href="mailto:campos.workspace@gmail.com" target="_blank"> <LiaEnvelope className="hover:text-brand-primary hover:border-b hover:border-brand-primary"/> </a>
                    </div>
                </div>
            </div>
        </div>
        <div className="flex items-center justify-center gap-2 w-full h-16 bg-silver-chalice-neutral-50 border-t-2 border-silver-chalice-neutral-300">
            <LiaCopyright className="text-mine-shaft-primary-600" />
            <p className="font-medium italic text-sm text-mine-shaft-primary-600"> 2023 - Designed & Built by Jardel Campos </p>
        </div>
      </>
    );
};