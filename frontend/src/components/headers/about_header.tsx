"use client"

import { useEffect, useState } from "react";
import Link from "next/link";

interface HeaderProps {
  activeSection: string | null;
}

export default function AboutHeader() {
  const [activeLink, setActiveLink] = useState("home");
    // eslint-disable-next-line react-hooks/exhaustive-deps
    const sections = ['about me'];

  useEffect(() => {
    setActiveLink("about me");
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
          <nav className="flex gap-8 px-250px justify-end items-end text-mine-shaft-primary-500">
            <Link href="/">
              <div>
                <p className="hover:text-mine-shaft-primary-300 hover:underline"> Home </p>
              </div>
            </Link>
            <Link href="/#projects">
              <div>
                <p className="hover:text-mine-shaft-primary-300 hover:underline"> Projects </p>
              </div>
            </Link>
            <Link href="/#skills">
              <div>
                <p className="hover:text-mine-shaft-primary-300 hover:underline"> Skills </p>
              </div>
            </Link>
            <Link href="/#services provider">
              <div>
                <p className="hover:text-mine-shaft-primary-300 hover:underline"> Services provider </p>
              </div>
            </Link>
            <Link href="/#feedback">
              <div>
                <p className="hover:text-mine-shaft-primary-300 hover:underline"> Feedbacks </p>
              </div>
            </Link>
            <ul className="flex flex-row gap-8 justify-end items-end text-mine-shaft-primary-500">
              {sections.map((section) => (
                <li key={section} className="">
                    <a href={`/#${section}`} className={`${activeLink === section ? "text-brand-primary font-semibold italic text-xl z-20" : "hover:text-mine-shaft-primary-300 hover:underline"}`} onClick={(event) => handleLinkClick(event, section)}>
                      <div className="relative">
                        {section.charAt(0).toUpperCase() + section.slice(1)}
                        {activeLink === section && (
                          <div className="border absolute w-full h-3 top-4 -left-3 border-brand-accent bg-brand-accent opacity-50 -z-10"> </div>
                        )}
                      </div>
                    </a>
                </li>
              ))}
            </ul>
          </nav>
        </div>
      </header>
    </>
  );
};