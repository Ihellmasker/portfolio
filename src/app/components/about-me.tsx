import Headline2 from "@portfolio/app/components/typography/headline-2";
import AndyPhoto from "@portfolio/assets/andy.jpg";
import Image from "next/image";

export default function AboutMe() {
    return (
        <section className="w-full border-b-1 py-10 border-slate-200">
            <div className="w-5xl mx-auto">
                <Headline2 className="text-center mb-10">
                    Who is Andy?
                </Headline2>
                <div className="flex gap-10">
                    <div className="w-50 flex flex-row items-center">
                        <Image
                            src={AndyPhoto}
                            alt="Photo of Andy"
                            className="rounded-4xl shadow-2xl"
                        />
                    </div>
                    <div className="flex-1">
                        <p className="mb-4">
                            I&apos;m a frontend developer based in Essex, UK,
                            with a focus on building user-friendly web
                            experiences using modern technologies. I have
                            experience with frameworks like React and Ember, and
                            while my strength lies in frontend work, I also have
                            a solid understanding of backend systems, helping me
                            collaborate effectively across the full stack.
                            I&apos;m familiar with Agile methodologies and apply
                            OOP and SOLID principles to write clean,
                            maintainable code.
                        </p>
                        <p>
                            Over the years, I’ve delivered high-quality
                            solutions across both in-house and freelance
                            projects, working closely with developers,
                            designers, and project managers. I&apos;m committed
                            to continuous improvement through self-funded
                            training and real-world problem-solving, and I aim
                            to create thoughtful digital experiences while
                            staying adaptable and curious in everything I do.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
}
