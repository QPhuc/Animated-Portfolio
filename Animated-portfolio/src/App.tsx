import ReactLenis from 'lenis/react'
import './App.css'
import AboutSection from './components/AboutSection/AboutSection'
import EducationSection from './components/EducationSection/EducationSection'
import Header from './components/Header/Header'
import HeroSection from './components/HeroSection/HeroSection'
import StripesBackground from './components/lightswind/stripes-background'
import CareerTimeline from './components/CareerTimeline/CareerTimeline'

function App() {

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
          </div>
        </div>
      </ReactLenis>
    </div>
  )
}

export default App
