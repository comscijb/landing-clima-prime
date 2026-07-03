import { PageShell } from "@/components/layout/PageShell"
import { BusinessSection } from "@/components/sections/BusinessSection"
import { FAQSection } from "@/components/sections/FAQSection"
import { FinalCTASection } from "@/components/sections/FinalCTASection"
import { HeroSection } from "@/components/sections/HeroSection"
import { OfferSection } from "@/components/sections/OfferSection"
import { PainSection } from "@/components/sections/PainSection"
import { ProcessSection } from "@/components/sections/ProcessSection"
import { ServicesSection } from "@/components/sections/ServicesSection"
import { TestimonialsSection } from "@/components/sections/TestimonialsSection"

export function HomePage() {
  return (
    <PageShell>
      <HeroSection />
      <PainSection />
      <ServicesSection />
      <OfferSection />
      <TestimonialsSection />
      <BusinessSection />
      <ProcessSection />
      <FAQSection />
      <FinalCTASection />
    </PageShell>
  )
}
