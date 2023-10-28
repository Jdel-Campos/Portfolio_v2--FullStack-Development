"use client"

import { useEffect, useState } from "react";

interface HeaderProps {
    activeSection: string | null;
};

export default function ProjectHeader() {
    const [activeLink, setActiveLink] = useState('home');
    // eslint-disable-next-line react-hooks/exhaustive-deps
    const sections = ['home', 'all projects', 'visual design', 'design provider', 'developer'];
  
    useEffect(() => {
      setActiveLink('all projects');
    }, []);
  
    const handleLinkClick = (event: React.MouseEvent<HTMLAnchorElement, MouseEvent>, link: React.SetStateAction<string>) => {
      event.preventDefault();
      setActiveLink(link);
      const targetId = event.currentTarget.getAttribute('href')?.substring(1);
      const targetElement = document.getElementById(targetId || '');
  
      if (targetElement) {
        targetElement.scrollIntoView({ behavior: 'smooth' });
      }
    };
  
    useEffect(() => {
      const handleScroll = () => {
        const headerHeight = (document.getElementById('header') || {}).offsetHeight || 0;
  
        for (const section of sections) {
          const sectionElement = document.getElementById(section);
  
          if (
            sectionElement &&
            sectionElement.offsetTop - headerHeight <= window.scrollY &&
            sectionElement.offsetTop + sectionElement.offsetHeight - headerHeight >
              window.scrollY
          ) {
            setActiveLink(section);
            break;
          }
        }
      };
  
      window.addEventListener('scroll', handleScroll);
      return () => {
        window.removeEventListener('scroll', handleScroll);
      };
    }, [sections]);

    return (
        <>
            <header id="header" className="h-20 w-screen flex items-center justify-end bg-silver-chalice-neutral-50" >
                <div >
                    <nav >
                        <ul className="flex flex-row gap-8 px-32 justify-end items-end text-mine-shaft-primary-500" >
                            {sections.map((section) => (
                                <li key={section} className="relative">
                                    <a
                                        href={`#${section}`}
                                        className={`${
                                        activeLink === section ? 'text-brand-primary font-semibold italic text-xl ' : ''
                                        }`}
                                        onClick={(event) => handleLinkClick(event, section)}
                                    >
                                        {section.charAt(0).toUpperCase() + section.slice(1)}
                                    </a>
                                    {activeLink === section && (
                                      <div className="flex items-center justify-center border absolute w-full h-3 top-4 -left-3 border-brand-accent bg-brand-accent opacity-50 -z-0"
                                      > </div>
                                    )}
                                </li>
                            ))}
                        </ul>
                    </nav>
                </div>
            </header>
        </>
    )
};