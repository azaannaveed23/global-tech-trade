import { SiteHeader } from '@/components/site/site-header'
import { Hero } from '@/components/site/hero'
import { FeatureStrip } from '@/components/site/feature-strip'
import { GlobalPresence } from '@/components/site/global-presence'
import { BrandsProducts } from '@/components/site/brands-products'
import { WhyChoose } from '@/components/site/why-choose'
import { JourneyRow } from '@/components/site/journey-row'
import { TeamSection } from '@/components/site/team-section'
import { SiteFooter } from '@/components/site/site-footer'
import { ContactSection } from '@/components/site/contact-section'

export default function Page() {
  return (
    <div className="min-h-screen bg-ink text-white">
      <SiteHeader />
      <main>
        <Hero />
        <FeatureStrip />
        <GlobalPresence />
        <BrandsProducts />
        <WhyChoose />
        <JourneyRow />
        <TeamSection />
        <ContactSection />
      </main>
      <SiteFooter />
    </div>
  )
}
