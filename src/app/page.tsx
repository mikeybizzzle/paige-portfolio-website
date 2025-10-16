import Sidebar from '@/components/layout/Sidebar'
import MobileHeader from '@/components/layout/MobileHeader'
import MobileProfileHero from '@/components/layout/MobileProfileHero'
import MobileBottomBar from '@/components/layout/MobileBottomBar'
import Hero from '@/components/sections/Hero'
import About from '@/components/sections/About'
import Philosophy from '@/components/sections/Philosophy'
import Method from '@/components/sections/Method'
import Results from '@/components/sections/Results'
import Services from '@/components/sections/Services'
import Credentials from '@/components/sections/Credentials'
import CTAFooter from '@/components/sections/CTAFooter'
import ScrollProgress from '@/components/ui/ScrollProgress'
import BackToTop from '@/components/ui/BackToTop'

export default function Home() {
  return (
    <>
      {/* Scroll Progress Bar */}
      <ScrollProgress />
      
      {/* Mobile Header - Sticky on Scroll */}
      <MobileHeader />
      
      {/* Main Layout */}
      <div className="flex min-h-screen">
        {/* Fixed Sidebar (Desktop) */}
        <Sidebar />
        
        {/* Scrollable Content */}
        <main className="w-full lg:ml-[350px] lg:w-[calc(100%-350px)]">
          <MobileProfileHero />
          <Hero />
          <About />
          <Philosophy />
          <Method />
          <Results />
          <Services />
          <Credentials />
          <CTAFooter />
        </main>
      </div>

      {/* Back to Top Button */}
      <BackToTop />

      {/* Mobile Bottom Bar - Sticky CTAs */}
      <MobileBottomBar />
    </>
  )
}
