import Navbar from '../components/Navbar'
import Hero from '../components/Hero'
import Logos from '../components/Logos'
import Projects from '../components/Projects'
import Tagline from '../components/Tagline'
import About from '../components/About'
import WhyMe from '../components/WhyMe'
import FAQ from '../components/FAQ'
import Footer from '../components/Footer'

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <main>
        <Hero />
        <Logos />
        <Projects />
        <Tagline />
        <About />
        <WhyMe />
        <FAQ />
      </main>
      <Footer />
    </div>
  )
}
