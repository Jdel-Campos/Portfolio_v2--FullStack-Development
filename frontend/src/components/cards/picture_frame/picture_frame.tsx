"use client"

export default function PictureFrame() {

    return (
        <>
            <div className="flex flex-col items-center gap-4"> 
                <div>
                     <div className="border w-229px h-163px bg-silver-chalice-neutral-400 rounded-xl"></div>
                </div>
                <div className="flex gap-2">
                    <div className="border rounded-full h-1 w-4 border-silver-chalice-neutral-400 bg-silver-chalice-neutral-400"></div>
                    <div className="border rounded-full h-1 w-4 border-silver-chalice-neutral-400 bg-silver-chalice-neutral-400"></div>
                    <div className="border rounded-full h-1 w-6 border-mine-shaft-primary-800 bg-mine-shaft-primary-800"></div>
                    <div className="border rounded-full h-1 w-4 border-silver-chalice-neutral-400 bg-silver-chalice-neutral-400"></div>
                    <div className="border rounded-full h-1 w-4 border-silver-chalice-neutral-400 bg-silver-chalice-neutral-400"></div>
                </div>
            </div>
        </>
    );
};