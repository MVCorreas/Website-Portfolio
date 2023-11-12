import Image from 'next/image'
import HeroSection from './components/HeroSection'
import Navbar from './components/NavBar'
import AboutSection from './components/AboutSection'
import ProjectsSection from './components/ProjectsSection'
import EmailSection from './components/EmailSection'
import Footer from './components/Footer'
import Skills from './components/Skills'
import SkillsTab from './components/SkillsTab'
import SkillsBar from './components/SkillsBar'

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col bg-[#121212]">
    <Navbar />
    <div className="container mt-24 mx-auto px-12 py-4">
    <HeroSection className='bg-[#121212]'/>
    <AboutSection className='bg-[#181818]'/>
    {/* <Skills /> */}
    <ProjectsSection />
    <EmailSection />
    <Footer />
      </div>
    </main>
  )
}
