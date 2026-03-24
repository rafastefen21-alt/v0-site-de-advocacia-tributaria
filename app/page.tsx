import { Header } from "@/components/header"
import { HeroSection } from "@/components/hero-section"
import { TaxCalculator } from "@/components/tax-calculator"
import { ServiceCompass } from "@/components/service-compass"
import { AuditPipeline } from "@/components/audit-pipeline"
import { StatsSection } from "@/components/stats-section"
import { TeamSection } from "@/components/team-section"
import { ContactSection } from "@/components/contact-section"
import { Footer } from "@/components/footer"

export default function Home() {
  return (
    <main className="min-h-screen bg-background">
      <Header />
      <HeroSection />
      <StatsSection />
      <TaxCalculator />
      <ServiceCompass />
      <AuditPipeline />
      <TeamSection />
      <ContactSection />
      <Footer />
    </main>
  )
}
