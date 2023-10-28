"use client"

export default function SimpleHeader() {
  return (
    <>
        <header className="h-20 w-screen flex items-center justify-end bg-silver-chalice-neutral-50" >
            <div>
                <nav>
                    <ul className="flex flex-row gap-8 px-32 justify-end text-mine-shaft-primary-500" >
                        <li> 
                            <a href=""> Home </a> 
                        </li>
                        <li> 
                            <a href=""> Back to project </a> 
                        </li>
                    </ul>
                </nav>
            </div>
        </header>
    </>
  )
};