import AboutMe from "@portfolio/app/components/about-me";
import Contact from "@portfolio/app/components/contact";
import Footer from "@portfolio/app/components/footer";
import Header from "@portfolio/app/components/header";
import Navbar from "@portfolio/app/components/navbar";
import Portfolio from "@portfolio/app/components/portfolio";
import Skills from "@portfolio/app/components/skills";

export default function Home() {
    return (
        <>
            <Navbar />
            <Header />
            <AboutMe />
            <Skills />
            <Portfolio />
            <Contact />
            <Footer />
        </>
    );
}
