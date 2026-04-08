import { Header } from "@/components/header"
import { HeroSection } from "@/components/hero-section"
import { TaxCalculator } from "@/components/tax-calculator"
import { ServiceCompass } from "@/components/service-compass"
import { ServicesSection } from "@/components/services-section"
import { AuditPipeline } from "@/components/audit-pipeline"
import { TeamSection } from "@/components/team-section"
import { ContactSection } from "@/components/contact-section"
import { Footer } from "@/components/footer"
import { ValueProposition } from "@/components/value-proposition"

export default function Home() {
  return (
    <main className="min-h-screen bg-background">
      <Header />
      <HeroSection />
      <ServiceCompass />
      <ValueProposition />
      <ServicesSection />
      <TaxCalculator />
      <AuditPipeline />
      <TeamSection />
      <ContactSection />
      <Footer />
    </main>
  )
}
