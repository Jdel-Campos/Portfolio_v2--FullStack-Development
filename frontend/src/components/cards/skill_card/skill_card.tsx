export default function SkillCard() {

    return (
      <>
        <div className="border w-350px h-full flex flex-col gap-9 py-5 px-6 bg-brand-background">
            <div className="flex flex-col gap-3 items-center">
                <h3 className="text-2xl text-brand-primary font-semibold underline">Designer</h3>
                <p className="text-center text-brand-text"> I&apos;m here to develop, always the best design, always looking for new inspirations and bringing innovative and striking creatives. </p>
            </div>
            <div className="flex flex-col gap-4">
                <div className="flex gap-2 justify-center relative">
                    <h3 className="italic font-medium text-brand-secondary z-20"> Works I develop </h3>
                    <div className="border absolute w-32 h-3 top-3 left-16 border-brand-accent bg-brand-accent opacity-50"></div>
                </div>
                <p className="text-sm text-center text-brand-text"> I&apos;m here to develop, always the best design, always looking for new inspirations and bringing innovative and striking creatives. </p>
            </div>
            <div className="flex flex-col gap-4">
                <div className="flex gap-2 justify-center relative">
                    <h3 className="italic font-medium text-brand-secondary z-20"> Works I develop </h3>
                    <div className="border absolute w-32 h-3 top-3 left-16 border-brand-accent bg-brand-accent opacity-50"></div>
                </div>
                <p className="text-sm text-center text-brand-text"> I&apos;m here to develop, always the best design, always looking for new inspirations and bringing innovative and striking creatives. </p>
            </div>
        </div>
      </>
    );
};