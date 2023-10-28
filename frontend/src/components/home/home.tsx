export default function HomePage() {
    return (
        <>
            <div id="home" className="py-40 px-120px h-screen flex items-center ">
                <div className="h-80 flex flex-col justify-between">
                    <h2 className="font-semibold italic text-4xl text-brand-secondary"> Designer & Developer </h2>
                    <div className="flex flex-col gap-3 w-6/12 text-brand-text font-medium">
                        <p> Welcome to my portfolio! </p>
                        <p>I&apos;m <span className="font-semibold text-brand-primary">Jardel Campos</span>, and I&apos;m here to showcase my work. If you have any questions or would like to discuss a project, feel free to reach out. Let&apos;s create something amazing together!</p>
                    </div>
                    <a href="https://linkwhats.app/e732a5" target="_blank" className="w-1/4">
                        <p className="font-semibold text-lg text-brand-primary underline decoration-brand-primary hover:opacity-75"> Let&apos;s Get Started! </p>
                    </a>
                </div>
            </div>
        </>
    )
};