export default function SkillCard() {

    return (
      <>
        <div className="flex flex-row">
            <div className="border rounded-tl-2xl rounded-bl-2xl w-300px h-full flex flex-col gap-9 py-5 px-6 bg-brand-background">
                <div className="flex flex-col gap-3 items-center">
                    <h3 className="text-xl text-brand-primary font-bold underline">Designer</h3>
                    <p className="text-center font-medium text-brand-text"> 
                        I&apos;m always on the lookout for the best design, seeking new inspiration every day and bringing innovative creatives to the table
                    </p>
                </div>
                <div className="flex flex-col gap-4">
                    <div className="flex gap-2 justify-center relative">
                        <h3 className="italic font-semibold text-brand-secondary z-20"> Works I develop </h3>
                        <div className="border absolute w-32 h-3 top-3 left-16 border-brand-accent bg-brand-accent opacity-50"></div>
                    </div>
                    <p className="text-sm font-medium text-center text-brand-text"> 
                        UI, Web, Apps, Logos, Creatives for social networks
                    </p>
                </div>
                <div className="flex flex-col gap-4">
                    <div className="flex gap-2 justify-center relative">
                        <h3 className="italic font-semibold text-brand-secondary z-20"> Design toos </h3>
                        <div className="border absolute w-32 h-3 top-3 left-16 border-brand-accent bg-brand-accent opacity-50"></div>
                    </div>
                    <p className="text-sm font-medium text-center text-brand-text"> 
                        Figma, Adobe XD, Photoshop, Illustraitor 
                    </p>
                </div>
            </div>

            <div className="border w-300px h-full flex flex-col gap-9 py-5 px-6 bg-brand-background">
                <div className="flex flex-col gap-3 items-center">
                    <h3 className="text-xl text-brand-primary font-bold underline">Front End</h3>
                    <p className="text-center font-medium text-brand-text"> 
                        I value simple content structure, clean design patterns, and thoughtful interactions. 
                    </p>
                </div>
                <div className="flex flex-col gap-4">
                    <div className="flex gap-2 justify-center relative">
                        <h3 className="italic font-semibold text-brand-secondary z-20"> Tools I use for codes </h3>
                        <div className="border absolute w-32 h-3 top-3 left-16 border-brand-accent bg-brand-accent opacity-50"></div>
                    </div>
                    <p className="text-sm text-center font-medium text-brand-text"> 
                        Web Page, Apps, Leading Page, Code Updates 
                    </p>
                </div>
                <div className="flex flex-col gap-4">
                    <div className="flex gap-2 justify-center relative">
                        <h3 className="italic font-semibold text-brand-secondary z-20"> My daily tools </h3>
                        <div className="border absolute w-32 h-3 top-3 left-16 border-brand-accent bg-brand-accent opacity-50"></div>
                    </div>
                    <p className="text-sm font-medium text-center text-brand-text"> 
                        JavaScript, Type Script, CSS3, HTML 5, Sass, Node.js, React, Tailwind, Next.js
                    </p>
                </div>
            </div>
            
            <div className="border rounded-tr-2xl rounded-br-2xl w-300px h-full flex flex-col gap-9 py-5 px-6 bg-brand-background">
                <div className="flex flex-col gap-3 items-center">
                    <h3 className="text-xl text-brand-primary font-bold underline">Backend</h3>
                    <p className="text-center font-medium text-brand-text"> 
                        It&apos;s an area I don&apos;t work in very often, but as a good full-stack I can meet all needs when necessary.
                    </p>
                </div>
                <div className="flex flex-col gap-4">
                    <div className="flex gap-2 justify-center relative">
                        <h3 className="italic font-semibold text-brand-secondary z-20"> Tools I use for codes </h3>
                        <div className="border absolute w-32 h-3 top-3 left-16 border-brand-accent bg-brand-accent opacity-50"></div>
                    </div>
                    <p className="text-sm font-medium text-center text-brand-text"> 
                        Database creation, Database enhancement, Database migration 
                    </p>
                </div>
                <div className="flex flex-col gap-4">
                    <div className="flex gap-2 justify-center relative">
                        <h3 className="italic font-semibold text-brand-secondary z-20"> My daily tools </h3>
                        <div className="border absolute w-32 h-3 top-3 left-16 border-brand-accent bg-brand-accent opacity-50"></div>
                    </div>
                    <p className="text-sm font-medium text-center text-brand-text"> 
                        Python, Nest.js, PostgreSQL, Express, MongoDB, Prisma
                    </p>
                </div>
            </div>
        </div>
      </>
    );
};