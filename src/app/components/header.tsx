import Button from "@portfolio/app/components/button";
import Mouse from "@portfolio/app/components/header/mouse";
import Headline1 from "@portfolio/app/components/typography/headline-1";
import Headline2 from "@portfolio/app/components/typography/headline-2";
import TechImg from "@portfolio/assets/tech.jpg";

export default function Header() {
    return (
        <header
            style={{ backgroundImage: `url(${TechImg.src})` }}
            className="h-200 w-full bg-cover bg-center mb-16 relative text-slate-200"
        >
            <div className="h-200 bg-linear-to-bl from-fuchsia-300 to-violet-400 opacity-50 absolute top-0 left-0 right-0 bottom-0"></div>
            <div className="h-full relative">
                <div className="w-6xl h-full mx-auto flex items-center">
                    <div className="w-full text-center">
                        <Headline1>Hi, I&apos;m Andy</Headline1>
                        <Headline2>I build Websites and Software</Headline2>
                        <Button>CHECK OUT MY WORK</Button>
                    </div>
                </div>
            </div>
            <div className="w-full absolute bottom-42">
                <Mouse />
            </div>
        </header>
    );
}
