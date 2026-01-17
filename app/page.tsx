import { Header } from "@/components/header"
import { Hero } from "@/components/hero"
import { PowerfulTogether } from "@/components/powerful-together"
import { GlobalSection } from "@/components/global-section"
import { WhatsNew } from "@/components/whats-new"
import { Awards } from "@/components/awards"
import { DemoCTA } from "@/components/demo-cta"
import { Footer } from "@/components/footer"
import { FinalCTA } from "@/components/final-cta"

export default function Page() {
  return (
    <main className="min-h-screen">
      <Header />
      <Hero />
      <PowerfulTogether />
      <GlobalSection />
      <WhatsNew />
      <Awards />
      <DemoCTA />
      <Footer />
      <FinalCTA />
    </main>
  )
}
