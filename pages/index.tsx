import Footer from "@/components/footer";
import Navigation from "@/components/navigation";
import Landing from "./home/landing";
import ContentMenu from "@/components/content-menu";
import Featured from "./projects/featured";
import MobileFooter from "@/components/mobile-footer";
import About from "./about/about";
import Previous from "./previous/previous";
import { useRef } from "react";

export default function Home() {
  const aboutRef = useRef<HTMLDivElement>(null);
  const featuredRef = useRef<HTMLDivElement>(null);

  const scrollToSection = (sectionRef: React.RefObject<HTMLDivElement>) => {
    sectionRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="font-comfortaa md:h-[95vh] md:flex md:flex-col md:mx-5 h-screen overflow-y-scroll">
      <Navigation />
      <main className="md:flex-grow md:grid md:grid-cols-2 overflow-y-scroll">
        <div>
          <Landing />
          <div className="hidden md:block">
            <ContentMenu
              onAboutClick={() => scrollToSection(aboutRef)}
              onProjectsClick={() => scrollToSection(featuredRef)}
            />
            <Footer />
          </div>
        </div>
        <div className="md:h-[80vh] md:overflow-y-scroll">
          <div ref={aboutRef}>
            <About />
          </div>
          <div ref={featuredRef}>
            <Featured />
          </div>
          <Previous />
        </div>
      </main>
      <div className="block md:hidden items-start">
        <MobileFooter />
      </div>
    </div>
  );
}
