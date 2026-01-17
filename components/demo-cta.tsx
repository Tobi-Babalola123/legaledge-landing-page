import { Button } from "@/components/ui/button"

export function DemoCTA() {
  return (
    <section className="bg-gradient-to-br from-[#1a2744] via-[#243352] to-[#2d3d5c] text-white py-20">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-3xl lg:text-5xl font-bold mb-4 text-balance">Schedule your free consultation today</h2>
        <p className="text-lg text-white/80 mb-8 max-w-2xl mx-auto text-pretty">
          Speak directly with an experienced attorney about your case. We offer free initial consultations for all
          practice areas, with no obligation.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button className="bg-[#C9A961] text-[#1a2744] hover:bg-[#C9A961]/90 h-12 px-8 font-semibold">
            Book Consultation
          </Button>
          <Button
            variant="outline"
            className="bg-transparent border-2 border-white text-white hover:bg-white/10 h-12 px-8 font-semibold"
          >
            Call 1-800-LEGAL-EDGE
          </Button>
        </div>
      </div>
    </section>
  )
}
