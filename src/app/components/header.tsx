import Button from "@portfolio/app/components/button";
import Mouse from "@portfolio/app/components/header/mouse";
import TechImg from "@portfolio/assets/tech.jpg";

export default function Header() {
    return (
        <header
            style={{ backgroundImage: `url(${TechImg.src})` }}
            className="h-200 w-full bg-cover bg-center mb-16 relative"
        >
            <div className="h-200 bg-linear-to-bl from-fuchsia-500 to-violet-500 opacity-50 absolute top-0 left-0 right-0 bottom-0"></div>
            <div className="h-full relative">
                <div className="w-6xl h-full mx-auto flex items-center">
                    <div className="w-full text-center">
                        <h1 className="font-inter text-8xl mb-2">
                            Hi, I&apos;m Andy
                        </h1>
                        <h2 className="font-inter text-6xl font-[100] mb-2">
                            I build Websites and Software
                        </h2>
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
