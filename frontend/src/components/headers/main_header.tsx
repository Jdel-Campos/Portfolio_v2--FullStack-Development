"use client"

import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import TextMarkerImage from "../../../public/TextMarker_Image.svg"

interface HeaderProps {
  activeSection: string | null;
}

export default function MainHeader() {
  const [activeLink, setActiveLink] = useState("home");
    // eslint-disable-next-line react-hooks/exhaustive-deps
    const sections = ['home', 'projects', 'skills', 'services provider', 'feedback', 'contact'];

  useEffect(() => {
    setActiveLink("home");
  }, []);

  const handleLinkClick = (event: React.MouseEvent<HTMLAnchorElement, MouseEvent>, link: React.SetStateAction<string>) => {
    event.preventDefault();
    setActiveLink(link);
    const targetId = event.currentTarget.getAttribute("href")?.substring(1);
    const targetElement = document.getElementById(targetId || "");

    if (targetElement) {
      targetElement.scrollIntoView({ behavior: "smooth" });
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      const headerHeight = (document.getElementById("header") || {}).offsetHeight || 0;

      for (const section of sections) {
        const sectionElement = document.getElementById(section);
        if (
          sectionElement &&
          sectionElement.offsetTop - headerHeight <= window.scrollY &&
          sectionElement.offsetTop + sectionElement.offsetHeight - headerHeight > window.scrollY
        ) {
          setActiveLink(section);
          break;
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [sections]);

  return (
    <>
      <header id="header" className="h-20 w-screen flex items-center justify-end bg-silver-chalice-neutral-50 fixed z-50">
        <div>
          <nav className="flex gap-8 px-32 justify-end items-end text-mine-shaft-primary-500">
            <ul className="flex flex-row gap-8 justify-end items-end text-mine-shaft-primary-500">
              {sections.map((section) => (
                <li key={section} className="">
                  {section === "about me" ? (
                      <a href="/about_me" className={`${activeLink === section ? "text-brand-primary font-semibold italic text-xl z-20" : "hover:text-mine-shaft-primary-300 hover:underline"}`} onClick={(event) => handleLinkClick(event, section)} >
                        <div className="relative">
                          {section.charAt(0).toUpperCase() + section.slice(1)}
                          {activeLink === section && (
/*                             <div className="flex items-center justify-center border absolute w-full h-3 top-4 -left-3 border-brand-accent bg-brand-accent opacity-50 -z-10">
 */                                <Image
                                  src="../../../public/TextMarker_Image.svg"
                                  width={'100'}
                                  height={'40'}
                                  alt="Picture of the author"
                                  className="flex items-center justify-center border absolute top-4 -left-3 border-brand-accent bg-brand-accent opacity-50 -z-10"
                                />
                            /* </div> */
                          )}
                        </div>
                      </a>
                  ) : (
                    <Link href={`#${section}`} className={`${activeLink === section ? "text-brand-primary font-semibold italic text-xl z-20" : "hover:text-mine-shaft-primary-300 hover:underline"}`} onClick={(event) => handleLinkClick(event, section)}>
                      <div className="relative">
                        {section.charAt(0).toUpperCase() + section.slice(1)}
                        {activeLink === section && (
                          <Image src={TextMarkerImage} 
                              alt={""} 
                              width={'100'}
                              height={'30'}
                              className="flex items-center justify-center border absolute w-full h-3 top-4 -left-3 border-brand-accent bg-brand-accent opacity-50 -z-10"
                          />
                        )}
                      </div>
                    </Link>
                  )}
                </li>
              ))}
            </ul>
            <Link href="/about_me">
              <div className="relative">
                <p className="hover:text-mine-shaft-primary-300 hover:underline"> About me </p>
              </div>
            </Link>
          </nav>
        </div>
      </header>
    </>
  );
};