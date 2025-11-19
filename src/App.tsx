import ReactLenis from 'lenis/react'
import { Briefcase, FolderKanban, GraduationCap, Home, User } from 'lucide-react'
import { useEffect, useState } from 'react'
import './App.css'
import AboutSection from './components/AboutSection/AboutSection'
import CareerTimeline from './components/CareerTimeline/CareerTimeline'
import EducationSection from './components/EducationSection/EducationSection'
import Header from './components/Header/Header'
import HeroSection from './components/HeroSection/HeroSection'
import StripesBackground from './components/lightswind/stripes-background'
import ProjectsSection from './components/ProjectsSection/ProjectsSection'

function App() {
  const [showDock, setShowDock] = useState(false);
  const [lastScrollY, setLastScrollY] = useState(0);

  // Track scroll direction
  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      if (currentScrollY > lastScrollY) {
        // scrolling down -> show Dock
        setShowDock(true);
      } else {
        // scrolling up -> hide Dock
        setShowDock(false);
      }

      setLastScrollY(currentScrollY);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  // Helper for smooth scroll
  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  // Dock items
  const dockItems = [
    {
      icon: <Home size={24} />,
      label: "Home",
      onClick: () => scrollToSection("home"),
    },
    {
      icon: <User size={24} />,
      label: "About",
      onClick: () => scrollToSection("about"),
    },
    {
      icon: <GraduationCap size={24} />,
      label: "Education",
      onClick: () => scrollToSection("education"),
    },
    {
      icon: <Briefcase size={24} />,
      label: "Career",
      onClick: () => scrollToSection("career"),
    },
    {
      icon: <FolderKanban size={24} />,
      label: "Projects",
      onClick: () => scrollToSection("projects"),
    },
  ];

  return (
    <div className="bg-background min-h-screen flex items-center justify-center">
      <StripesBackground className={"fixed z-0 blur-xs"} />
      <ReactLenis root>
        <Header />
        <div
          className="w-full bg-transparent max-w-5xl px-4 my-30
          flex items-center justify-center 
          lg:rounded-3xl backdrop-blur-xl border-gray-100 dark:border-gray-900"
        >
          <div className="z-10">
            {/* Give IDs to sections */}
            <div id="home">
              <HeroSection />
            </div>
            <div id="about">
              <AboutSection />
            </div>
            <div id="education">
              <EducationSection />
            </div>
            <div id="career">
              <CareerTimeline />
            </div>
            <div id="projects">
              <ProjectsSection />
            </div>
          </div>
        </div>

        
      </ReactLenis>
    </div>
  )
}

export default App
